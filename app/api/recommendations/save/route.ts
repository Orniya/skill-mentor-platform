import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import type { RoadmapPhase } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { stack_name, roadmap, reasoning } = body as {
      stack_name: string;
      roadmap: RoadmapPhase[];
      reasoning: string;
    };
    if (!stack_name || !Array.isArray(roadmap) || !reasoning) {
      return NextResponse.json(
        { error: "Missing stack_name, roadmap, or reasoning" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("saved_roadmaps").insert({
      user_id: user.id,
      stack_name,
      roadmap,
      reasoning,
    });

    if (error) {
      console.log("[v0] saved_roadmaps insert error:", error);
      if (error.code === "PGRST205") {
        return NextResponse.json(
          { error: "Table not found. Run the database migration in Supabase." },
          { status: 503 }
        );
      }
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.log("[v0] save roadmap error:", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
