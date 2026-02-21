"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TechStack } from "@/lib/types";

interface StackDetailsModalProps {
  stack: TechStack | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StackDetailsModal({
  stack,
  open,
  onOpenChange,
}: StackDetailsModalProps) {
  if (!stack) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onClose={() => onOpenChange(false)}
        className="max-w-lg"
      >
        <DialogHeader>
          <DialogTitle>{stack.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p className="text-slate-600 dark:text-slate-400">
            {stack.description}
          </p>
          <div>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Technologies:{" "}
            </span>
            <span className="text-slate-600 dark:text-slate-400">
              {stack.technologies.join(", ")}
            </span>
          </div>
          <div>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Best for:{" "}
            </span>
            <span className="text-slate-600 dark:text-slate-400">
              {stack.bestFor}
            </span>
          </div>
          <div>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Difficulty:{" "}
            </span>
            <span className="capitalize text-slate-600 dark:text-slate-400">
              {stack.difficulty}
            </span>
          </div>
          <div>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Time to learn:{" "}
            </span>
            <span className="text-slate-600 dark:text-slate-400">
              {stack.timeToLearn}
            </span>
          </div>
          {stack.pros && stack.pros.length > 0 && (
            <div>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Pros:{" "}
              </span>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400">
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
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400">
                {stack.cons.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
