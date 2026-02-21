import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const stackId = searchParams.get("stackId");
  if (!stackId) {
    return NextResponse.json({ error: "Missing stackId" }, { status: 400 });
  }
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data } = await supabase
      .from("roadmap_progress")
      .select("completed_phases")
      .eq("user_id", user.id)
      .eq("stack_id", stackId)
      .single();
    const completedPhases = (data?.completed_phases as number[]) ?? [];
    return NextResponse.json({ completedPhases });
  } catch {
    return NextResponse.json({ completedPhases: [] });
  }
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { stackId, completedPhases } = body as {
    stackId: string;
    completedPhases: number[];
  };
  if (!stackId || !Array.isArray(completedPhases)) {
    return NextResponse.json(
      { error: "Missing stackId or completedPhases" },
      { status: 400 }
    );
  }

  try {
    await supabase.from("roadmap_progress").upsert(
      {
        user_id: user.id,
        stack_id: stackId,
        completed_phases: completedPhases,
      },
      { onConflict: "user_id,stack_id" }
    );
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.log("[v0] roadmap_progress upsert failed:", e);
    return NextResponse.json(
      { error: "Failed to save progress. Table may not exist." },
      { status: 503 }
    );
  }
}
