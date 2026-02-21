import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-teal-700 dark:text-teal-400">
            Skill Mentor
          </span>
          <nav className="flex gap-4">
            <Link
              href="/auth/login"
              className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400"
            >
              Log in
            </Link>
            <Link
              href="/auth/sign-up"
              className="rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
            >
              Sign up
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Your personalized tech stack & learning path
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Answer a short questionnaire and get a tailored recommendation plus a
            step-by-step roadmap—no paid APIs, just clear guidance.
          </p>
          <Link
            href="/auth/sign-up"
            className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-lg font-medium text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
          >
            Get started
          </Link>
        </section>

        <section className="mt-24 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-6">
            <h2 className="font-semibold text-teal-700 dark:text-teal-400 mb-2">
              Smart recommendations
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Rule-based engine suggests a primary stack and alternatives based on
              your interests and experience.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-6">
            <h2 className="font-semibold text-teal-700 dark:text-teal-400 mb-2">
              Detailed roadmaps
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              6–8 phase learning paths with foundations first, adjusted for your
              time commitment.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-6">
            <h2 className="font-semibold text-teal-700 dark:text-teal-400 mb-2">
              Stack library
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Browse 12+ stacks (MERN, Next.js, Django, Flutter, PyTorch, and more)
              with full details.
            </p>
          </div>
        </section>

        <section className="mt-16 text-center">
          <Link
            href="/auth/login"
            className="text-teal-600 dark:text-teal-400 hover:underline"
          >
            Learn more →
          </Link>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-6">
        <div className="container mx-auto px-4 text-center text-slate-500 dark:text-slate-400 text-sm">
          Skill Mentor v0 — Personalized tech stack & learning roadmaps
        </div>
      </footer>
    </div>
  );
}
