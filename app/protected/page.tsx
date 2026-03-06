import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  ArrowRight,
  Compass,
  BookOpen,
  UserCircle2,
  Clock3,
  FolderKanban,
  ArrowUpRight,
} from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let savedRoadmaps: { id: string; stack_name: string; created_at: string }[] =
    [];
  try {
    const { data } = await supabase
      .from("saved_roadmaps")
      .select("id, stack_name, created_at")
      .order("created_at", { ascending: false })
      .limit(5);
    savedRoadmaps = (data ?? []) as typeof savedRoadmaps;
  } catch (e) {
    console.log(
      "[v0] saved_roadmaps fetch failed (table may not exist):",
      e,
    );
  }

  const firstName = user?.email ? user.email.split("@")[0] : "there";
  const roadmapCount = savedRoadmaps.length;
  const lastSaved =
    savedRoadmaps[0]?.created_at &&
    new Date(savedRoadmaps[0].created_at).toLocaleDateString();

  return (
    <div className="relative space-y-10">
      {/* Background & glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 -z-10 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl"
      />

      {/* Hero */}
      <section className="flex flex-col gap-6 rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.7)] backdrop-blur-xl transition-colors sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-200">
            <Sparkles className="h-3.5 w-3.5 text-teal-300" />
            <span>Skill Mentor workspace</span>
          </div>

          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Welcome back,{" "}
              <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
                {firstName}
              </span>
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
              Design your next learning phase with tech stack
              recommendations and focused roadmaps tailored to your goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 transition hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-400/50"
            >
              <Link href="/protected/questionnaire">
                Start new recommendation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="inline-flex items-center gap-2 rounded-full border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-100 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-900"
            >
              <Link href="/protected/stacks">
                Browse stacks
                <Compass className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats pill */}
        <div className="mt-4 grid w-full max-w-sm grid-cols-3 gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3 text-center text-xs shadow-[0_12px_30px_rgba(15,23,42,0.9)] backdrop-blur-md sm:text-sm lg:mt-0">
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
              <FolderKanban className="h-3.5 w-3.5 text-teal-300" />
              Saved
            </span>
            <span className="text-2xl font-semibold text-slate-50">
              {roadmapCount}
            </span>
            <span className="text-[11px] text-slate-500">roadmaps</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
              <Clock3 className="h-3.5 w-3.5 text-sky-300" />
              Last saved
            </span>
            <span className="text-sm font-medium text-slate-50">
              {lastSaved || "—"}
            </span>
            <span className="text-[11px] text-slate-500">activity</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
              <Sparkles className="h-3.5 w-3.5 text-purple-300" />
              Next step
            </span>
            <span className="text-sm font-medium text-teal-300">
              {roadmapCount ? "Review roadmap" : "Get a stack"}
            </span>
            <span className="text-[11px] text-slate-500">guidance</span>
          </div>
        </div>
      </section>

      {/* Main grid */}
      <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        {/* Primary actions */}
        <div className="space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Start here
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Get recommendation */}
            <Card className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:border-teal-500/70 hover:shadow-[0_22px_55px_rgba(45,212,191,0.45)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-500/25 blur-3xl transition-opacity duration-200 group-hover:opacity-100"
              />
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2 text-slate-50">
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-teal-300" />
                    Get recommendation
                  </span>
                  <span className="rounded-full bg-teal-500/15 px-3 py-1 text-[11px] font-medium text-teal-200">
                    Guided
                  </span>
                </CardTitle>
                <CardDescription className="text-xs text-slate-400 sm:text-sm">
                  Answer a focused questionnaire to get a tailored stack and
                  roadmap aligned with your goals.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  Ideal if you&apos;re not sure where to start or want a
                  curated path.
                </p>
                <Button
                  asChild
                  size="sm"
                  className="inline-flex items-center gap-1 rounded-full bg-teal-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-md shadow-teal-500/40 transition hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-400/50"
                >
                  <Link href="/protected/questionnaire">
                    Start now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Browse stacks */}
            <Card className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:border-sky-500/70 hover:shadow-[0_22px_55px_rgba(56,189,248,0.45)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-sky-500/25 blur-3xl transition-opacity duration-200 group-hover:opacity-100"
              />
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2 text-slate-50">
                  <span className="inline-flex items-center gap-2">
                    <Compass className="h-4 w-4 text-sky-300" />
                    Browse stacks
                  </span>
                  <span className="rounded-full bg-sky-500/15 px-3 py-1 text-[11px] font-medium text-sky-200">
                    Explore
                  </span>
                </CardTitle>
                <CardDescription className="text-xs text-slate-400 sm:text-sm">
                  Compare 12+ tech stacks with pros/cons, use-cases, and
                  roadmap previews.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  Perfect if you already have a direction and want to validate
                  your choice.
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="inline-flex items-center gap-1 rounded-full border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-200"
                >
                  <Link href="/protected/stacks">
                    Browse stacks
                    <BookOpen className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Saved roadmaps */}
            <Card className="group rounded-2xl border border-dashed border-slate-800/80 bg-slate-950/70 shadow-[0_14px_30px_rgba(15,23,42,0.8)] transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:border-teal-500/70 hover:bg-slate-950">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-50">
                  <FolderKanban className="h-4 w-4 text-teal-300" />
                  Saved roadmaps
                </CardTitle>
                <CardDescription className="text-xs text-slate-400 sm:text-sm">
                  Jump straight into your saved learning paths and continue
                  where you left off.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  {roadmapCount
                    ? `You have ${roadmapCount} saved roadmap${
                        roadmapCount > 1 ? "s" : ""
                      }.`
                    : "No saved roadmaps yet – create your first one from a recommendation."}
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="inline-flex items-center gap-1 rounded-full border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-200"
                >
                  <Link href="/protected/profile#saved-roadmaps">
                    View saved
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Profile */}
            <Card className="group rounded-2xl border border-slate-800/80 bg-slate-950/70 shadow-[0_14px_30px_rgba(15,23,42,0.8)] transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-950">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-50">
                  <UserCircle2 className="h-4 w-4 text-slate-200" />
                  My profile
                </CardTitle>
                <CardDescription className="text-xs text-slate-400 sm:text-sm">
                  Manage your account and preferences so recommendations evolve
                  with your experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  Keep your interests, experience, and availability up to date.
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="inline-flex items-center gap-1 rounded-full border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-400"
                >
                  <Link href="/protected/profile">
                    Open profile
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent activity */}
        <div className="space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Recent activity
          </h2>

          <Card className="rounded-2xl border border-slate-800/80 bg-slate-950/70 shadow-[0_18px_40px_rgba(15,23,42,0.9)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-50">
                <FolderKanban className="h-4 w-4 text-teal-300" />
                Recently saved roadmaps
              </CardTitle>
              <CardDescription className="text-xs text-slate-400 sm:text-sm">
                Your latest saved learning paths with quick access.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {savedRoadmaps.length === 0 ? (
                <div className="flex flex-col items-start gap-3 rounded-2xl border border-dashed border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-300">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-400">
                    <Sparkles className="h-3.5 w-3.5 text-teal-300" />
                    No saved roadmaps yet
                  </div>
                  <p className="text-sm text-slate-400">
                    Start a recommendation to generate your first roadmap. You
                    can always refine and save new versions as you progress.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="mt-1 inline-flex items-center gap-1 rounded-full bg-teal-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-md shadow-teal-500/40 transition hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-400/50"
                  >
                    <Link href="/protected/questionnaire">
                      Create your first roadmap
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <ul className="space-y-3">
                  {savedRoadmaps.map((r, index) => (
                    <li
                      key={r.id}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3 py-2 text-sm transition duration-200 hover:border-teal-500/70 hover:bg-slate-950"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/15 text-[11px] font-semibold text-teal-200">
                          {index + 1}
                        </div>
                        <div>
                          <Link
                            href={`/protected/results?saved=${r.id}`}
                            className="font-medium text-slate-50 underline-offset-2 transition hover:text-teal-300 hover:underline"
                          >
                            {r.stack_name}
                          </Link>
                          <p className="text-xs text-slate-500">
                            {r.created_at
                              ? new Date(r.created_at).toLocaleString()
                              : "Unknown date"}
                          </p>
                        </div>
                      </div>
                      <Button
                        asChild
                        size="xs"
                        variant="outline"
                        className="inline-flex items-center gap-1 rounded-full border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-slate-200 transition group-hover:border-teal-400 group-hover:text-teal-200"
                      >
                        <Link href={`/protected/results?saved=${r.id}`}>
                          Open
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
