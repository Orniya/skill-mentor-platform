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

  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      try {
        const parsed = JSON.parse(decodeURIComponent(dataParam)) as RecommendationResult;
        setResult(parsed);
      } catch {
        setResult(null);
      }
    }
  }, [searchParams]);

  if (!result) {
    return (
      <div className="max-w-xl mx-auto text-center py-12">
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          No results. Complete the questionnaire to see stacks for your interest.
        </p>
        <Button asChild>
          <Link href="/protected/questionnaire">Start questionnaire</Link>
        </Button>
      </div>
    );
  }

  const { stacks, time_commitment } = result;
  const timeParam = time_commitment || "medium";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        Stacks for your interest
      </h1>
      <p className="text-slate-600 dark:text-slate-400">
        Listed from easiest / beginner-friendly to more complex. Choose a stack
        and click &quot;Learn more&quot; for full description, pros &amp; cons, and a
        detailed roadmap (with checkboxes to track your progress).
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
