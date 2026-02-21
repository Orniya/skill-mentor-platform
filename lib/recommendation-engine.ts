import type {
  QuestionnaireAnswers,
  RecommendationResult,
  TechStack,
} from "./types";
import type { StackWithRoadmap } from "./stack-config";
import {
  STACKS_BY_INTEREST,
  getAllStacks,
} from "./stack-config";

export { STACKS_BY_INTEREST, getAllStacks };
export type { StackWithRoadmap };

const DIFFICULTY_ORDER = { beginner: 0, intermediate: 1, advanced: 2 };

function stackToTechStack(s: StackWithRoadmap): TechStack {
  return {
    id: s.id,
    name: s.name,
    description: s.description,
    technologies: s.technologies,
    bestFor: s.bestFor,
    difficulty: s.difficulty,
    timeToLearn: s.timeToLearn,
    interest: s.interest,
    pros: s.pros,
    cons: s.cons,
  };
}

/** Return all stacks for the given interest, sorted by difficulty (easiest first). */
export function getStacksForInterest(interest: keyof typeof STACKS_BY_INTEREST): StackWithRoadmap[] {
  const list = STACKS_BY_INTEREST[interest] ?? [];
  return [...list].sort(
    (a, b) =>
      DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty] ||
      a.name.localeCompare(b.name)
  );
}

export function getRecommendation(
  answers: QuestionnaireAnswers
): RecommendationResult {
  const { interest, time_commitment } = answers;
  const stacks = getStacksForInterest(interest);
  return {
    stacks: stacks.map(stackToTechStack),
    time_commitment,
  };
}
