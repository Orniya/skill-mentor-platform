import type {
  ExperienceLevel,
  Interest,
  QuestionnaireAnswers,
  RecommendationResult,
  TechStack,
  TimeCommitment,
} from "./types";
import type { StackWithRoadmap } from "./stack-config";
import { STACKS_BY_INTEREST } from "./stack-config";

type RoadmapPhaseConfig = {
  title: string;
  duration: string;
  topics: string[];
};

type RoadmapConfig = {
  stack: string;
  reason: string;
  phases: RoadmapPhaseConfig[];
};

const PLACEHOLDER_ROADMAP: RoadmapConfig = {
  stack: "nextjs-fullstack",
  reason:
    "Placeholder roadmap – this combination is not customized yet. You still get a solid full-stack learning path.",
  phases: [
    {
      title: "Foundations",
      duration: "1–2 weeks",
      topics: ["HTML/CSS basics", "JavaScript fundamentals", "Git & GitHub"],
    },
    {
      title: "Core framework",
      duration: "2–3 weeks",
      topics: ["Core framework concepts", "Routing", "Data fetching"],
    },
    {
      title: "Build & ship",
      duration: "1–2 weeks",
      topics: ["Project work", "Deployment", "Polish & refactor"],
    },
  ],
};

const DIFFICULTY_ORDER: Record<ExperienceLevel, number> = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
};

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

/** Legacy behavior: all stacks for the given interest, sorted by difficulty (easiest first). */
function getStacksForInterest(interest: Interest): StackWithRoadmap[] {
  const list = STACKS_BY_INTEREST[interest] ?? [];
  return [...list].sort(
    (a, b) =>
      DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty] ||
      a.name.localeCompare(b.name),
  );
}

function getLegacyRecommendation(
  interest: Interest,
  time: TimeCommitment,
): RecommendationResult {
  const stacksWithInterest = getStacksForInterest(interest);
  return {
    stacks: stacksWithInterest.map(stackToTechStack),
    time_commitment: time,
  };
}

function getRoadmapForFrontend(
  priority: QuestionnaireAnswers["priority"],
  time: TimeCommitment,
): RoadmapConfig {
  if (time === "low" && priority === "job_fast") {
    return {
      stack: "react",
      reason: "High industry demand and fast path to employability.",
      phases: [
        {
          title: "Phase 1 — Core Web Basics",
          duration: "1 week",
          topics: [
            "HTML structure",
            "CSS fundamentals",
            "Flexbox",
            "Responsive design",
            "Git basics",
          ],
        },
        {
          title: "Phase 2 — JavaScript Essentials",
          duration: "1 week",
          topics: [
            "variables",
            "functions",
            "arrays and objects",
            "DOM manipulation",
            "fetch API",
            "async / await",
          ],
        },
        {
          title: "Phase 3 — React Fundamentals",
          duration: "1 week",
          topics: [
            "React components",
            "props",
            "state",
            "hooks (useState, useEffect)",
            "component structure",
          ],
        },
        {
          title: "Phase 4 — Modern Frontend Stack",
          duration: "1 week",
          topics: [
            "TypeScript basics",
            "Tailwind CSS",
            "API integration",
            "simple authentication",
            "deployment",
            "Project: Portfolio Website with API data",
          ],
        },
      ],
    };
  }

  if (time === "low" && priority === "deep_understanding") {
    return {
      stack: "html-css-js",
      reason: "Focuses on core web fundamentals before frameworks.",
      phases: [
        {
          title: "Phase 1 — HTML Mastery",
          duration: "1 week",
          topics: [
            "semantic HTML",
            "accessibility basics",
            "forms",
            "SEO basics",
            "document structure",
          ],
        },
        {
          title: "Phase 2 — CSS Deep Dive",
          duration: "1 week",
          topics: [
            "box model",
            "flexbox",
            "grid",
            "responsive design",
            "animations",
            "CSS architecture",
          ],
        },
        {
          title: "Phase 3 — JavaScript Fundamentals",
          duration: "1 week",
          topics: [
            "variables and scope",
            "functions",
            "closures",
            "arrays and objects",
            "events",
            "DOM manipulation",
          ],
        },
        {
          title: "Phase 4 — Browser Mechanics",
          duration: "1 week",
          topics: [
            "how the browser works",
            "event loop",
            "fetch API",
            "async programming",
            "local storage",
            "Project: Interactive website with dynamic UI",
          ],
        },
      ],
    };
  }

  if (time === "low" && priority === "build_projects") {
    return {
      stack: "nextjs-fullstack",
      reason: "Fastest way to build real projects quickly.",
      phases: [
        {
          title: "Phase 1 — Quick Web Basics",
          duration: "4 days",
          topics: [
            "HTML basics",
            "CSS basics",
            "basic JavaScript",
            "Git",
          ],
        },
        {
          title: "Phase 2 — Next.js Essentials",
          duration: "1 week",
          topics: [
            "Next.js setup",
            "pages and routing",
            "components",
            "layouts",
            "server components",
          ],
        },
        {
          title: "Phase 3 — UI Development",
          duration: "1 week",
          topics: [
            "Tailwind CSS",
            "responsive design",
            "component reuse",
            "UI patterns",
          ],
        },
        {
          title: "Phase 4 — Build Real Projects",
          duration: "1 week",
          topics: [
            "Projects: portfolio site",
            "blog platform",
            "dashboard UI",
            "API integration",
          ],
        },
      ],
    };
  }

  // All other frontend combinations use placeholder for now
  return PLACEHOLDER_ROADMAP;
}

export function getRecommendation(
  answers: QuestionnaireAnswers,
): RecommendationResult {
  const { goal, priority, time } = answers;

  // Special cases: frontend + low time + one of three priorities
  const isSpecialFrontendCombo =
    goal === "frontend" &&
    time === "low" &&
    (priority === "job_fast" ||
      priority === "deep_understanding" ||
      priority === "build_projects");

  if (isSpecialFrontendCombo) {
    const config = getRoadmapForFrontend(priority, time);
    return {
      stack: config.stack,
      reason: config.reason,
      roadmap: {
        phases: config.phases.map((phase) => ({
          title: phase.title,
          duration: phase.duration,
          topics: phase.topics,
        })),
      },
    };
  }

  // All other combinations fall back to the previous multi-stack behavior.
  return getLegacyRecommendation(goal, time);
}
