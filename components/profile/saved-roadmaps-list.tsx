"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RoadmapItem {
  id: string;
  stack_name: string;
  reasoning: string;
  created_at: string;
}

interface SavedRoadmapsListProps {
  initialRoadmaps: RoadmapItem[];
  userId: string;
}

export function SavedRoadmapsList({
  initialRoadmaps,
  userId,
}: SavedRoadmapsListProps) {
  const [roadmaps, setRoadmaps] = useState(initialRoadmaps);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handleDelete(id: string) {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/saved-roadmaps/${id}`, { method: "DELETE" });
      if (res.ok) {
        setRoadmaps((prev) => prev.filter((r) => r.id !== id));
      }
    } catch (e) {
      console.log("[v0] delete roadmap error:", e);
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <Card id="saved-roadmaps">
      <CardHeader>
        <CardTitle>Saved roadmaps</CardTitle>
        <CardDescription>
          View or remove learning roadmaps you’ve saved. Click View to see the
          full roadmap.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {roadmaps.length === 0 ? (
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            No saved roadmaps yet. Get a recommendation and save it from the
            results page.
          </p>
        ) : (
          <ul className="space-y-3">
            {roadmaps.map((r) => (
              <li
                key={r.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-3"
              >
                <div className="min-w-0">
                  <p className="font-medium text-slate-900 dark:text-white">
                    {r.stack_name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-md">
                    {r.reasoning}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                    Saved{" "}
                    {r.created_at
                      ? new Date(r.created_at).toLocaleDateString(undefined, {
                          dateStyle: "medium",
                        })
                      : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/protected/results?saved=${r.id}`}>View</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                    onClick={() => handleDelete(r.id)}
                    disabled={deletingId === r.id}
                  >
                    {deletingId === r.id ? "Deleting…" : "Delete"}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Link
          href="/protected/questionnaire"
          className="mt-4 inline-block text-sm text-teal-600 dark:text-teal-400 hover:underline"
        >
          Get new recommendation →
        </Link>
      </CardContent>
    </Card>
  );
}
