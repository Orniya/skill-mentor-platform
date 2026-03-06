"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { INTERESTS_CONFIG, TIME_LABELS } from "@/lib/stack-config";
import type { Interest, LearningPriority, TimeCommitment } from "@/lib/types";

const STEPS = 3;

export function QuestionnaireForm() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<Interest | "">("");
  const [time, setTime] = useState<TimeCommitment | "">("");
  const [priority, setPriority] = useState<LearningPriority | "">("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const canNext =
    (step === 1 && goal) ||
    (step === 2 && time) ||
    (step === 3 && priority);

  function handleNext() {
    if (step < STEPS) setStep(step + 1);
  }

  function handleBack() {
    if (step > 1) setStep(step - 1);
  }

  async function handleSubmit() {
    if (!goal || !time || !priority) return;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goal,
          time,
          priority,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? `Request failed: ${res.status}`);
      }
      const data = await res.json();
      router.push(
        `/protected/results?data=${encodeURIComponent(JSON.stringify(data))}`
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Recommendation questionnaire</CardTitle>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Step {step} of {STEPS}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {step === 1 && (
          <div className="space-y-3">
            <Label>What area do you want to focus on?</Label>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <Link
                href="/protected/stacks"
                className="text-teal-600 dark:text-teal-400 hover:underline"
              >
                Go to tech stack library
              </Link>{" "}
              to see what these interests are and which stacks they include.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {INTERESTS_CONFIG.map(({ id, label, description }) => (
                <div key={id} className="relative group">
                  <button
                    type="button"
                    title={description}
                    onClick={() => setGoal(id)}
                    className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                      goal === id
                        ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                        : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    {label}
                  </button>
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 rounded bg-slate-800 px-2 py-1.5 text-xs text-white opacity-0 shadow transition-opacity group-hover:opacity-100 dark:bg-slate-700"
                  >
                    {description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <Label>How much time can you commit per week?</Label>
            <div className="flex flex-col gap-2">
              {(Object.entries(TIME_LABELS) as [TimeCommitment, string][]).map(
                ([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTime(value)}
                    className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                      time === value
                        ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                        : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-3">
            <Label>What is your main priority?</Label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {([
                { id: "job_fast", label: "Get a job as fast as possible" },
                { id: "deep_understanding", label: "Build deep fundamentals" },
                { id: "build_projects", label: "Build real projects quickly" },
              ] as { id: LearningPriority; label: string }[]).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setPriority(option.id)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                    priority === option.id
                      ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                      : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {error && (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            {error}
          </p>
        )}

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={step === 1}
          >
            Back
          </Button>
          {step < STEPS ? (
            <Button onClick={handleNext} disabled={!canNext}>
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canNext || loading}
            >
              {loading ? "Loading stacks…" : "See stacks"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
