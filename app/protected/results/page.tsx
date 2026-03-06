"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RecommendationResult, TechStack } from "@/lib/types";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<RecommendationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedId = searchParams.get("saved");
    const dataParam = searchParams.get("data");
    // If we navigated with inline data from the questionnaire, use that first.
    if (dataParam) {
      try {
        const parsed = JSON.parse(
          decodeURIComponent(dataParam),
        ) as RecommendationResult;
        setResult(parsed);
        setError(null);
        return;
      } catch {
        setResult(null);
        setError("Could not read recommendation data.");
        return;
      }
    }

    // If we have a saved roadmap id, fetch it from the API and map it into
    // the same shape that the page expects for display.
    if (savedId) {
      setLoading(true);
      setError(null);
      fetch(`/api/saved-roadmaps/${savedId}`)
        .then(async (res) => {
          if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            throw new Error(data.error ?? "Could not load saved roadmap.");
          }
          return res.json();
        })
        .then((data) => {
          const rawRoadmap = Array.isArray(data.roadmap) ? data.roadmap : [];

          const phases =
            rawRoadmap.map((phase: any) => {
              // Handle different possible stored roadmap formats and normalise
              // them to { title, duration, topics[] } for display.
              const title =
                phase.title ??
                phase.stage ??
                (typeof phase.phase === "number"
                  ? `Phase ${phase.phase}`
                  : "Phase");

              const duration =
                typeof phase.duration === "string"
                  ? phase.duration
                  : typeof phase.duration_weeks === "number"
                    ? `${phase.duration_weeks} weeks`
                    : "";

              const topics =
                Array.isArray(phase.topics) && phase.topics.length > 0
                  ? phase.topics
                  : Array.isArray(phase.projects)
                    ? phase.projects
                    : [];

              return {
                title,
                duration,
                topics,
              };
            }) ?? [];

          const mapped: RecommendationResult = {
            stack: data.stack_name ?? "Saved roadmap",
            reason: data.reasoning ?? "",
            roadmap: { phases },
          };

          setResult(mapped);
        })
        .catch((e: unknown) => {
          setResult(null);
          setError(
            e instanceof Error ? e.message : "Unable to load saved roadmap.",
          );
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setResult(null);
      setError(null);
    }
  }, [searchParams]);

  if (loading) {
    return (
      <div className="max-w-xl mx-auto text-center py-12">
        <p className="text-slate-600 dark:text-slate-400 mb-2">
          Loading your roadmap…
        </p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="max-w-xl mx-auto text-center py-12">
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {error
            ? error
            : "No results. Complete the questionnaire to see stacks for your interest."}
        </p>
        <Button asChild>
          <Link href="/protected/questionnaire">Start questionnaire</Link>
        </Button>
      </div>
    );
  }

  const isRoadmapMode =
    result.stack && result.reason && result.roadmap && result.roadmap.phases;

  if (isRoadmapMode) {
    const { stack, reason, roadmap } = result;

    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Your personalized roadmap
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Based on your goal, priority, and time, here&apos;s the recommended
          stack and a focused roadmap you can follow.
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Recommended stack: {stack}
            </CardTitle>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {reason}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Roadmap
            </h2>
            <ol className="space-y-4">
              {roadmap!.phases.map((phase, index) => (
                <li
                  key={index}
                  className="rounded-lg border border-slate-200 dark:border-slate-700 p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-slate-900 dark:text-slate-50">
                      {phase.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {phase.duration}
                    </p>
                  </div>
                  {phase.topics.length > 0 && (
                    <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-400">
                      {phase.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/protected/questionnaire">Start over</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/protected/stacks">Browse all stacks</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Legacy multi-stack mode (non-frontend or non-special combinations)
  const { stacks = [], time_commitment } = result;
  const timeParam = time_commitment || "medium";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        Stacks for your interest
      </h1>
      <p className="text-slate-600 dark:text-slate-400">
        Listed from easiest / beginner-friendly to more complex. Choose a stack
        and click &quot;Learn more&quot; for full description, pros &amp; cons, and
        a detailed roadmap (with checkboxes to track your progress).
      </p>

      <div className="space-y-4">
        {stacks.map((stack: TechStack) => (
          <Card key={stack.id}>
            <CardHeader>
              <CardTitle className="text-lg">{stack.name}</CardTitle>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {stack.description}
              </p>
            </CardHeader>
            <CardContent>
              {stack.technologies.length > 0 && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {stack.technologies.join(", ")}
                </p>
              )}
              <Button variant="outline" size="sm" asChild>
                <Link href={`/protected/stacks/${stack.id}?time=${timeParam}`}>
                  Learn more
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-2">
        <Button variant="outline" asChild>
          <Link href="/protected/questionnaire">Start over</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/protected/stacks">Browse all stacks</Link>
        </Button>
      </div>
    </div>
  );
}
