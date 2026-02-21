"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getAllStacks, STACKS_BY_INTEREST } from "@/lib/recommendation-engine";
import { INTERESTS_CONFIG, PREFERENCES_CONFIG } from "@/lib/stack-config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Interest } from "@/lib/types";

const ALL_STACKS = getAllStacks();

export default function StacksPage() {
  const [filterInterest, setFilterInterest] = useState<Interest | "">("");
  const [filterPreference, setFilterPreference] = useState<string>("");
  const [search, setSearch] = useState("");

  const filteredStacks = useMemo(() => {
    let list = ALL_STACKS;
    if (filterInterest) {
      list = STACKS_BY_INTEREST[filterInterest] ?? [];
    }
    if (filterPreference) {
      list = list.filter((s) =>
        s.preferenceFit.includes(filterPreference as Parameters<typeof s.preferenceFit.includes>[0])
      );
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.technologies.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [filterInterest, filterPreference, search]);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        Tech stack library
      </h1>

      {/* Section 1: What are interests? */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          What are interests?
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
          Interests are the main areas of tech you can focus on. Each has a
          different purpose and set of tools.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {INTERESTS_CONFIG.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{item.label}</CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-600 dark:text-slate-300">
                    Used for:{" "}
                  </span>
                  {item.usedFor}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 2: Browse stacks with filter */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          Browse stacks
        </h2>
        <div className="flex flex-wrap gap-3 mb-4">
          <select
            value={filterInterest}
            onChange={(e) => setFilterInterest((e.target.value || "") as Interest | "")}
            className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-white"
            aria-label="Filter by interest"
          >
            <option value="">All interests</option>
            {INTERESTS_CONFIG.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
          <select
            value={filterPreference}
            onChange={(e) => setFilterPreference(e.target.value)}
            className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-white"
            aria-label="Filter by preference"
          >
            <option value="">All preferences</option>
            {PREFERENCES_CONFIG.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
          <input
            type="search"
            placeholder="Search stacks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-white min-w-[180px]"
            aria-label="Search stacks"
          />
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
          Showing {filteredStacks.length} stack{filteredStacks.length !== 1 ? "s" : ""}. Click
          &quot;Learn more&quot; for full details and roadmaps.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStacks.map((stack) => (
            <Card key={stack.id}>
              <CardHeader>
                <CardTitle className="text-lg">{stack.name}</CardTitle>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  {stack.description}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                  {stack.technologies.join(", ")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/protected/stacks/${stack.id}`}>Learn more</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredStacks.length === 0 && (
          <p className="text-slate-500 dark:text-slate-400 text-sm py-6">
            No stacks match your filters. Try changing interest, preference, or
            search.
          </p>
        )}
      </section>
    </div>
  );
}
