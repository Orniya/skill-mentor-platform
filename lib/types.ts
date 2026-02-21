// ========== INTERESTS (cursor-insertable: add new entries to INTERESTS_CONFIG in stack-config.ts) ==========
export type Interest =
  | "frontend"
  | "backend"
  | "fullstack"
  | "ai"
  | "mobile"
  | "data"
  | "game"
  | "dsa"
  | "cloud"
  | "cybersecurity";

// ========== PREFERENCES (cursor-insertable: add to PREFERENCES_CONFIG in stack-config.ts) ==========
export type Preference =
  | "design"
  | "infrastructure"
  | "algorithms"
  | "data_viz"
  | "performance";

export type ExperienceLevel = "beginner" | "intermediate" | "advanced";

export type TimeCommitment = "low" | "medium" | "high";

export interface UserPreferences {
  user_id: string;
  interest: Interest;
  preference: Preference;
  experience_level: ExperienceLevel;
  time_commitment: TimeCommitment;
  updated_at?: string;
}

/** Legacy phase format (phase number, title, weeks, topics) */
export interface RoadmapPhase {
  phase: number;
  title: string;
  duration_weeks: number;
  topics: string[];
}

/** Stage format for API/frontend (stage name, description, duration string) */
export interface RoadmapStage {
  stage: string;
  description: string;
  duration: string;
}

export interface TechStack {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  bestFor: string;
  difficulty: ExperienceLevel;
  timeToLearn: string;
  interest: Interest;
  pros?: string[];
  cons?: string[];
}

/** Alternative stack with reason to choose it */
export interface AlternativeWithReason {
  stack: TechStack;
  whyChoose: string;
}

export interface SavedRoadmap {
  id?: string;
  user_id: string;
  stack_name: string;
  roadmap: RoadmapPhase[] | RoadmapStage[];
  reasoning: string;
  created_at?: string;
}

export interface RecommendationResult {
  /** All stacks for the chosen interest, ordered easiest to hardest */
  stacks: TechStack[];
  time_commitment: TimeCommitment;
}

/** Detailed phase for roadmap (topics + optional projects) */
export interface RoadmapPhaseDetail {
  phase: number;
  title: string;
  duration: string;
  topics: string[];
  projects?: string[];
}

/** Full roadmap for one time commitment (low/medium/high) */
export interface RoadmapByTime {
  low?: RoadmapPhaseDetail[];
  medium?: RoadmapPhaseDetail[];
  high?: RoadmapPhaseDetail[];
}

export interface QuestionnaireAnswers {
  interest: Interest;
  time_commitment: TimeCommitment;
}
