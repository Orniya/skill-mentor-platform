"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const message =
    searchParams.get("message") ?? "An authentication error occurred.";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50 dark:bg-slate-900">
      <div className="w-full max-w-md rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-sm text-center">
        <h1 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
          Authentication error
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">{message}</p>
        <Link
          href="/auth/login"
          className="inline-block rounded-lg bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
        >
          Try again
        </Link>
        <p className="mt-6">
          <Link
            href="/"
            className="text-sm text-slate-500 dark:text-slate-400 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
