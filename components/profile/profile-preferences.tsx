import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { INTERESTS_CONFIG } from "@/lib/stack-config";

const LABELS: Record<string, string> = {
  interest: "Interest area",
  time_commitment: "Time commitment",
  low: "Low",
  medium: "Medium",
  high: "High",
};

function getInterestLabel(id: string): string {
  return INTERESTS_CONFIG.find((c) => c.id === id)?.label ?? id;
}

interface ProfilePreferencesProps {
  preferences: {
    interest: string;
    preference: string;
    experience_level: string;
    time_commitment: string;
    updated_at: string | null;
  } | null;
}

export function ProfilePreferences({ preferences }: ProfilePreferencesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Questionnaire preferences</CardTitle>
        <CardDescription>
          Your last answers from the recommendation questionnaire. Re-run the
          questionnaire to update.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {preferences ? (
          <dl className="grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-slate-500 dark:text-slate-400">
                {LABELS.interest}
              </dt>
              <dd className="font-medium text-slate-900 dark:text-white">
                {getInterestLabel(preferences.interest)}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500 dark:text-slate-400">
                {LABELS.time_commitment}
              </dt>
              <dd className="font-medium text-slate-900 dark:text-white">
                {LABELS[preferences.time_commitment] ?? preferences.time_commitment}
              </dd>
            </div>
          </dl>
        ) : (
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            No preferences saved yet. Complete the questionnaire to get a
            recommendation and save your preferences.
          </p>
        )}
        <Link
          href="/protected/questionnaire"
          className="mt-4 inline-block text-sm text-teal-600 dark:text-teal-400 hover:underline"
        >
          {preferences ? "Update preferences" : "Get recommendation"} →
        </Link>
      </CardContent>
    </Card>
  );
}
