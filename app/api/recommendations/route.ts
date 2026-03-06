import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getRecommendation } from "@/lib/recommendation-engine";
import type { QuestionnaireAnswers } from "@/lib/types";

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

    const body = (await request.json()) as QuestionnaireAnswers;
    const { goal, priority, time } = body;
    if (!goal || !priority || !time) {
      return NextResponse.json(
        {
          error: "Missing goal, priority, or time",
        },
        { status: 400 },
      );
    }

    const result = getRecommendation({
      goal,
      priority,
      time,
    });

    try {
      await supabase.from("user_preferences").upsert(
        {
          user_id: user.id,
          interest: goal,
          time_commitment: time,
          // Keep table compatible by storing generic defaults
          preference: "design",
          experience_level: "beginner",
        },
        { onConflict: "user_id" }
      );
    } catch (e) {
      console.log("[v0] user_preferences upsert failed (table may not exist):", e);
    }

    try {
      // Only log into recommended_stacks if we are in the multi-stack mode
      // (legacy path where result.stacks is present).
      if (Array.isArray(result.stacks) && result.stacks.length > 0) {
        await supabase.from("recommended_stacks").insert({
          user_id: user.id,
          interest_area: goal,
          primary_stack: result.stacks[0]?.name ?? "",
          alternatives: result.stacks.slice(1, 11).map((s) => s.name),
          reasoning: `Stacks for ${goal} (${time} time).`,
        });
      }
    } catch (e) {
      console.log("[v0] recommended_stacks insert failed:", e);
    }

    return NextResponse.json(result);
  } catch (e) {
    console.log("[v0] recommendations error:", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
