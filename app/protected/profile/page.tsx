import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ProfilePreferences } from "@/components/profile/profile-preferences";
import { SavedRoadmapsList } from "@/components/profile/saved-roadmaps-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  let preferences: {
    interest: string;
    preference: string;
    experience_level: string;
    time_commitment: string;
    updated_at: string | null;
  } | null = null;
  let savedRoadmaps: {
    id: string;
    stack_name: string;
    reasoning: string;
    created_at: string;
  }[] = [];

  try {
    const { data: prefs } = await supabase
      .from("user_preferences")
      .select("interest, preference, experience_level, time_commitment, updated_at")
      .eq("user_id", user.id)
      .single();
    preferences = prefs ?? null;
  } catch {
    // table may not exist
  }

  try {
    const { data: roadmaps } = await supabase
      .from("saved_roadmaps")
      .select("id, stack_name, reasoning, created_at")
      .order("created_at", { ascending: false });
    savedRoadmaps = (roadmaps ?? []) as typeof savedRoadmaps;
  } catch {
    // table may not exist
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        My profile
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Your sign-in email. Password changes are managed in your email provider or Supabase Auth.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-slate-900 dark:text-white font-medium">
            {user.email}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Member since{" "}
            {user.created_at
              ? new Date(user.created_at).toLocaleDateString(undefined, {
                  dateStyle: "medium",
                })
              : "—"}
          </p>
        </CardContent>
      </Card>

      <ProfilePreferences preferences={preferences} />

      <SavedRoadmapsList
        initialRoadmaps={savedRoadmaps}
        userId={user.id}
      />
    </div>
  );
}
