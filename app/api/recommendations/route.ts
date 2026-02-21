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
    const { interest, time_commitment } = body;
    if (!interest || !time_commitment) {
      return NextResponse.json(
        { error: "Missing interest or time_commitment" },
        { status: 400 }
      );
    }

    const result = getRecommendation({ interest, time_commitment });

    try {
      await supabase.from("user_preferences").upsert(
        {
          user_id: user.id,
          interest,
          time_commitment,
          preference: "design",
          experience_level: "beginner",
        },
        { onConflict: "user_id" }
      );
    } catch (e) {
      console.log("[v0] user_preferences upsert failed (table may not exist):", e);
    }

    try {
      await supabase.from("recommended_stacks").insert({
        user_id: user.id,
        interest_area: interest,
        primary_stack: result.stacks[0]?.name ?? "",
        alternatives: result.stacks.slice(1, 11).map((s) => s.name),
        reasoning: `Stacks for ${interest} (${time_commitment} time).`,
      });
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
