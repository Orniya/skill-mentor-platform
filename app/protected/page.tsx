import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let savedRoadmaps: { id: string; stack_name: string; created_at: string }[] = [];
  try {
    const { data } = await supabase
      .from("saved_roadmaps")
      .select("id, stack_name, created_at")
      .order("created_at", { ascending: false })
      .limit(5);
    savedRoadmaps = (data ?? []) as typeof savedRoadmaps;
  } catch (e) {
    console.log("[v0] saved_roadmaps fetch failed (table may not exist):", e);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Welcome{user?.email ? `, ${user.email.split("@")[0]}` : ""}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Get a personalized tech stack recommendation or explore the library.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Get recommendation</CardTitle>
            <CardDescription>
              Answer a short questionnaire and get a tailored stack and roadmap.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/protected/questionnaire">Start recommendation</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Browse stacks</CardTitle>
            <CardDescription>
              Explore 12+ tech stacks with detailed info and roadmaps.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild>
              <Link href="/protected/stacks">Browse stacks</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Saved roadmaps</CardTitle>
            <CardDescription>
              View and manage your saved learning roadmaps.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild>
              <Link href="/protected/profile#saved-roadmaps">View saved roadmaps</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>My profile</CardTitle>
            <CardDescription>
              Manage your account, preferences, and saved roadmaps.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild>
              <Link href="/protected/profile">My profile</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {savedRoadmaps.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recently saved roadmaps</CardTitle>
            <CardDescription>Your latest saved learning paths.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {savedRoadmaps.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/protected/results?saved=${r.id}`}
                    className="text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    {r.stack_name}
                  </Link>
                  <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">
                    {r.created_at
                      ? new Date(r.created_at).toLocaleDateString()
                      : ""}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
