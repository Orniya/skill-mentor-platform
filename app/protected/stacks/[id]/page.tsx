"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllStacks } from "@/lib/recommendation-engine";
import { getDetailedRoadmap } from "@/lib/roadmaps-detail";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TechStack } from "@/lib/types";
import type { TimeCommitment } from "@/lib/types";
import type { RoadmapPhaseDetail } from "@/lib/types";

export default function StackDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const time = (searchParams.get("time") || "medium") as TimeCommitment;

  const [stack, setStack] = useState<TechStack | null>(null);
  const [roadmap, setRoadmap] = useState<RoadmapPhaseDetail[]>([]);
  const [completedPhases, setCompletedPhases] = useState<number[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(true);

  useEffect(() => {
    const all = getAllStacks();
    const found = all.find((s) => s.id === id);
    if (found) {
      setStack({
        id: found.id,
        name: found.name,
        description: found.description,
        technologies: found.technologies,
        bestFor: found.bestFor,
        difficulty: found.difficulty,
        timeToLearn: found.timeToLearn,
        interest: found.interest,
        pros: found.pros,
        cons: found.cons,
      });
      setRoadmap(getDetailedRoadmap(found.id, time));
    }
  }, [id, time]);

  useEffect(() => {
    if (!id) return;
    setLoadingProgress(true);
    fetch(`/api/roadmap-progress?stackId=${encodeURIComponent(id)}`)
      .then((res) => (res.ok ? res.json() : { completedPhases: [] }))
      .then((data) => setCompletedPhases(data.completedPhases ?? []))
      .catch(() => setCompletedPhases([]))
      .finally(() => setLoadingProgress(false));
  }, [id]);

  function togglePhase(phaseNum: number) {
    const next = completedPhases.includes(phaseNum)
      ? completedPhases.filter((p) => p !== phaseNum)
      : [...completedPhases, phaseNum].sort((a, b) => a - b);
    setCompletedPhases(next);
    fetch("/api/roadmap-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stackId: id, completedPhases: next }),
    }).catch(() => {});
  }

  if (!stack) {
    return (
      <div className="max-w-xl mx-auto text-center py-12">
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Stack not found.
        </p>
        <Button variant="outline" asChild>
          <Link href="/protected/stacks">Browse stacks</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <Link href="/protected/results" className="hover:text-teal-600 dark:hover:text-teal-400">
          Results
        </Link>
        <span>/</span>
        <Link href="/protected/stacks" className="hover:text-teal-600 dark:hover:text-teal-400">
          Stacks
        </Link>
        <span>/</span>
        <span className="text-slate-700 dark:text-slate-300">{stack.name}</span>
      </div>

      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        {stack.name}
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-600 dark:text-slate-400">
            {stack.description}
          </p>
          {stack.technologies.length > 0 && (
            <p className="text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Technologies:{" "}
              </span>
              <span className="text-slate-600 dark:text-slate-400">
                {stack.technologies.join(", ")}
              </span>
            </p>
          )}
          {stack.pros && stack.pros.length > 0 && (
            <div>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Pros:{" "}
              </span>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm">
                {stack.pros.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}
          {stack.cons && stack.cons.length > 0 && (
            <div>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Cons:{" "}
              </span>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm">
                {stack.cons.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Roadmap ({time} commitment)</CardTitle>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Check off each phase as you finish it. Progress is saved automatically.
          </p>
        </CardHeader>
        <CardContent>
          {roadmap.length === 0 ? (
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              No detailed roadmap for this stack yet. Check the main stack library
              for an overview.
            </p>
          ) : (
            <ol className="space-y-4">
              {roadmap.map((phase) => (
                <li
                  key={phase.phase}
                  className="flex gap-3 rounded-lg border border-slate-200 dark:border-slate-700 p-4"
                >
                  <label className="flex shrink-0 items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={completedPhases.includes(phase.phase)}
                      onChange={() => togglePhase(phase.phase)}
                      disabled={loadingProgress}
                      className="h-5 w-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="sr-only">Mark phase {phase.phase} complete</span>
                  </label>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-slate-900 dark:text-white">
                      Phase {phase.phase}: {phase.title}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {phase.duration}
                    </div>
                    {phase.topics.length > 0 && (
                      <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-400">
                        {phase.topics.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    )}
                    {phase.projects && phase.projects.length > 0 && (
                      <p className="mt-2 text-sm text-teal-600 dark:text-teal-400">
                        Projects: {phase.projects.join(", ")}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button variant="outline" asChild>
          <Link href="/protected/results">Back to results</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/protected/stacks">Browse all stacks</Link>
        </Button>
      </div>
    </div>
  );
}
