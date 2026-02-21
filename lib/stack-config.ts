/**
 * Central config for interests, preferences, and stacks.
 * Cursor-insertable: add new interests, preferences, or stacks here without breaking logic.
 */
import type { ExperienceLevel, Interest, Preference, TechStack } from "./types";

export interface InterestConfig {
  id: Interest;
  label: string;
  description: string;
  usedFor: string;
}

export interface PreferenceConfig {
  id: Preference;
  label: string;
}

/** Internal roadmap stage (duration in weeks; converted to string in API) */
export interface RoadmapStageConfig {
  stage: string;
  description: string;
  duration_weeks: number;
}

export interface StackWithRoadmap extends TechStack {
  /** Which preferences fit this stack (for scoring) */
  preferenceFit: Preference[];
  /** Roadmap stages per experience level */
  roadmapStages: Record<ExperienceLevel, RoadmapStageConfig[]>;
}

// ========== INTERESTS: What they are & what they're used for ==========
export const INTERESTS_CONFIG: InterestConfig[] = [
  { id: "frontend", label: "Front-end", description: "Building user interfaces and client-side experiences for web and desktop.", usedFor: "Web apps, SPAs, dashboards, landing pages, design systems, and interactive UIs." },
  { id: "backend", label: "Back-end", description: "Server-side logic, APIs, databases, and business logic that power applications.", usedFor: "REST/GraphQL APIs, microservices, authentication, data processing, and integrations." },
  { id: "fullstack", label: "Full-stack", description: "End-to-end development from frontend to backend and database.", usedFor: "Complete web applications, MVPs, startups, and full product ownership." },
  { id: "ai", label: "AI/ML", description: "Machine learning, deep learning, and data-driven models.", usedFor: "Predictions, NLP, computer vision, recommendation systems, and automation." },
  { id: "mobile", label: "Mobile", description: "Native or cross-platform mobile application development.", usedFor: "iOS/Android apps, PWAs, and mobile-first products." },
  { id: "data", label: "Data/Analytics", description: "Data pipelines, analysis, visualization, and business intelligence.", usedFor: "Reports, dashboards, ETL, SQL analytics, and data-driven decisions." },
  { id: "game", label: "Game Development", description: "Creating games for web, desktop, or mobile using engines or web tech.", usedFor: "2D/3D games, simulations, and interactive experiences." },
  { id: "dsa", label: "DSA / Competitive Programming", description: "Data structures, algorithms, and competitive problem-solving.", usedFor: "Interviews, coding contests, and strong fundamentals." },
  { id: "cloud", label: "Cloud/DevOps", description: "Infrastructure, CI/CD, cloud platforms, and deployment at scale.", usedFor: "Deployment, monitoring, containers, and cloud-native systems." },
  { id: "cybersecurity", label: "Cybersecurity", description: "Security testing, ethical hacking, and defensive practices.", usedFor: "Penetration testing, secure coding, and security audits." },
];

// ========== PREFERENCES ==========
export const PREFERENCES_CONFIG: PreferenceConfig[] = [
  { id: "design", label: "Design & UX" },
  { id: "infrastructure", label: "Infrastructure & Tooling" },
  { id: "algorithms", label: "Algorithms & Problem Solving" },
  { id: "data_viz", label: "Data Management & Visualization" },
  { id: "performance", label: "Performance & Optimization" },
];

// ========== TIME COMMITMENT LABELS ==========
export const TIME_LABELS = {
  low: "Low (few hours/week)",
  medium: "Medium (5–10 hrs/week)",
  high: "High (10+ hrs/week)",
} as const;

// ========== STACKS BY INTEREST (10+ per interest where applicable) ==========
// Each stack has preferenceFit[] for recommendation scoring and roadmapStages per experience level.
// Add new stacks by appending to the appropriate interest array.

const frontendStacks: StackWithRoadmap[] = [
  makeStack("html-css-js", "HTML/CSS/JS", "Core web fundamentals: structure, style, and behavior.", ["HTML5", "CSS3", "JavaScript"], "frontend", "design", [2, 3, 4, 4], ["Structure pages", "Styling and layout", "DOM and basics", "Async and APIs"]),
  makeStack("react", "React", "Component-based UI library for dynamic interfaces.", ["React", "JSX", "Hooks", "State"], "frontend", "design", [3, 4, 4, 3], ["Components", "State & props", "Data fetching", "Testing"]),
  makeStack("vue", "Vue.js", "Progressive framework with gentle learning curve.", ["Vue 3", "Composition API", "Pinia", "Vue Router"], "frontend", "design", [3, 4, 3, 2], ["Basics", "Components", "State & routing", "Build"]),
  makeStack("angular", "Angular", "Full-featured framework with TypeScript and CLI.", ["Angular", "TypeScript", "RxJS", "Angular CLI"], "frontend", "design", [4, 4, 4, 4], ["TypeScript", "Components", "Services", "Advanced"]),
  makeStack("svelte", "Svelte", "Compile-time framework with minimal runtime.", ["Svelte", "SvelteKit", "Stores"], "frontend", "design", [2, 3, 3, 2], ["Basics", "Components", "Stores", "SvelteKit"]),
  makeStack("nextjs", "Next.js", "React framework with SSR, SSG, and API routes.", ["Next.js", "React", "App Router", "Server Components"], "frontend", "design", [3, 4, 4, 3], ["React first", "Next.js", "Data & API", "Deploy"]),
  makeStack("nuxt", "Nuxt.js", "Vue-based full-stack and SSR framework.", ["Nuxt 3", "Vue", "Nitro", "Server routes"], "frontend", "design", [3, 4, 3, 3], ["Vue first", "Nuxt", "Data", "Deploy"]),
  makeStack("tailwind-react", "TailwindCSS + React", "Utility-first CSS with React for rapid UI.", ["React", "Tailwind CSS", "Vite"], "frontend", "design", [2, 3, 3, 2], ["React basics", "Tailwind", "Components", "Polish"]),
];

const backendStacks: StackWithRoadmap[] = [
  makeStack("node-express", "Node.js + Express", "Lightweight JavaScript backend.", ["Node.js", "Express", "REST"], "backend", "infrastructure", [4, 4, 3, 2], ["Node basics", "Express", "Auth & DB", "Deploy"]),
  makeStack("django", "Django (Python)", "Batteries-included Python web framework.", ["Python", "Django", "ORM", "DRF"], "backend", "infrastructure", [4, 5, 4, 3], ["Python", "Django", "APIs", "Deploy"]),
  makeStack("flask", "Flask (Python)", "Minimal Python web framework.", ["Python", "Flask", "SQLAlchemy"], "backend", "infrastructure", [3, 3, 3, 2], ["Python", "Flask", "DB", "APIs"]),
  makeStack("rails", "Ruby on Rails", "Convention-over-configuration framework.", ["Ruby", "Rails", "Active Record"], "backend", "infrastructure", [4, 5, 4, 3], ["Ruby", "Rails", "APIs", "Deploy"]),
  makeStack("spring-boot", "Spring Boot (Java)", "Enterprise Java framework.", ["Java", "Spring Boot", "JPA"], "backend", "infrastructure", [6, 4, 4, 3], ["Java", "Spring", "REST", "Cloud"]),
  makeStack("laravel", "Laravel (PHP)", "Elegant PHP framework.", ["PHP", "Laravel", "Eloquent"], "backend", "infrastructure", [4, 4, 4, 3], ["PHP", "Laravel", "DB", "APIs"]),
  makeStack("aspnet", "ASP.NET Core (C#)", "Microsoft stack for high-performance APIs.", ["C#", "ASP.NET Core", "Entity Framework"], "backend", "infrastructure", [5, 4, 4, 3], ["C#", "ASP.NET", "APIs", "Deploy"]),
  makeStack("fastapi", "FastAPI (Python)", "Modern async Python API framework.", ["Python", "FastAPI", "Pydantic"], "backend", "infrastructure", [3, 3, 3, 2], ["Python", "FastAPI", "DB", "Async"]),
  makeStack("go-gin", "Go + Gin", "Fast, simple backend with Go.", ["Go", "Gin", "SQL"], "backend", "infrastructure", [4, 3, 3, 2], ["Go", "Gin", "APIs", "Deploy"]),
];

const fullstackStacks: StackWithRoadmap[] = [
  makeStack("mern", "MERN", "MongoDB, Express, React, Node.js.", ["MongoDB", "Express", "React", "Node.js"], "fullstack", "design", [3, 4, 4, 4, 3], ["HTML/CSS/JS", "React", "Node", "Express", "MongoDB"]),
  makeStack("mean", "MEAN", "MongoDB, Express, Angular, Node.js.", ["MongoDB", "Express", "Angular", "Node.js"], "fullstack", "design", [3, 4, 5, 4], ["Basics", "Angular", "Node", "MongoDB"]),
  makeStack("mevn", "MEVN", "MongoDB, Express, Vue, Node.js.", ["MongoDB", "Express", "Vue", "Node.js"], "fullstack", "design", [3, 4, 4, 4], ["Basics", "Vue", "Node", "MongoDB"]),
  makeStack("lamp", "LAMP", "Linux, Apache, MySQL, PHP.", ["Linux", "Apache", "MySQL", "PHP"], "fullstack", "infrastructure", [2, 3, 4, 4], ["Linux", "Apache", "MySQL", "PHP"]),
  makeStack("django-react", "Django + React", "Django REST backend with React frontend.", ["Django", "DRF", "React"], "fullstack", "design", [4, 4, 4, 4], ["Python/Django", "DRF", "React", "Deploy"]),
  makeStack("flask-vue", "Flask + Vue", "Lightweight Python API with Vue frontend.", ["Flask", "Vue", "SQLAlchemy"], "fullstack", "design", [3, 3, 4, 3], ["Python/Flask", "Vue", "API", "Deploy"]),
  makeStack("nextjs-fullstack", "Next.js Fullstack", "API routes + React frontend in one app.", ["Next.js", "React", "API Routes", "DB"], "fullstack", "design", [3, 4, 4, 3], ["React", "Next.js", "API + DB", "Deploy"]),
  makeStack("nuxt-fullstack", "Nuxt.js Fullstack", "Vue-based fullstack with server routes.", ["Nuxt", "Vue", "Server routes"], "fullstack", "design", [3, 4, 3, 3], ["Vue", "Nuxt", "API", "Deploy"]),
  makeStack("spring-react", "Spring Boot + React", "Java backend with React frontend.", ["Spring Boot", "React", "REST"], "fullstack", "infrastructure", [5, 4, 4, 4], ["Java/Spring", "REST", "React", "Deploy"]),
];

const aiStacks: StackWithRoadmap[] = [
  makeStack("sklearn", "Python + scikit-learn", "Classical ML with scikit-learn.", ["Python", "NumPy", "pandas", "scikit-learn"], "ai", "data_viz", [4, 4, 4, 4, 2], ["Python", "NumPy/pandas", "ML basics", "sklearn", "Projects"]),
  makeStack("tensorflow", "Python + TensorFlow", "Deep learning with TensorFlow/Keras.", ["Python", "TensorFlow", "Keras", "TF Lite"], "ai", "performance", [4, 4, 4, 4, 4], ["Python", "Math/ML", "TensorFlow", "DL", "Deploy"]),
  makeStack("pytorch", "Python + PyTorch", "Research-friendly deep learning.", ["Python", "PyTorch", "NumPy"], "ai", "algorithms", [4, 4, 4, 4, 4], ["Python", "ML basics", "PyTorch", "CV/NLP", "Projects"]),
];

const mobileStacks: StackWithRoadmap[] = [
  makeStack("flutter", "Flutter (Dart)", "Cross-platform UI with Dart.", ["Dart", "Flutter", "Widgets"], "mobile", "design", [3, 4, 4, 3], ["Dart", "Widgets", "State", "Publish"]),
  makeStack("react-native", "React Native", "React for native mobile.", ["React", "React Native", "Expo"], "mobile", "design", [3, 4, 4, 3], ["React", "RN basics", "APIs", "Publish"]),
  makeStack("kotlin-android", "Kotlin (Android)", "Native Android with Kotlin.", ["Kotlin", "Android SDK", "Jetpack"], "mobile", "performance", [4, 4, 4, 3], ["Kotlin", "Android", "UI", "Publish"]),
  makeStack("swift-ios", "Swift (iOS)", "Native iOS with Swift.", ["Swift", "SwiftUI", "Xcode"], "mobile", "design", [4, 4, 4, 3], ["Swift", "SwiftUI", "Data", "Publish"]),
];

const dataStacks: StackWithRoadmap[] = [
  makeStack("python-pandas", "Python + Pandas/NumPy", "Data analysis and manipulation.", ["Python", "pandas", "NumPy", "Matplotlib"], "data", "data_viz", [3, 4, 4, 3], ["Python", "NumPy", "pandas", "Viz"]),
  makeStack("r-tidyverse", "R + tidyverse", "Statistical analysis and visualization.", ["R", "tidyverse", "ggplot2"], "data", "data_viz", [4, 4, 3, 2], ["R basics", "tidyverse", "ggplot2", "Reports"]),
  makeStack("sql-dbs", "SQL (PostgreSQL, MySQL)", "Relational databases and querying.", ["SQL", "PostgreSQL", "MySQL"], "data", "data_viz", [3, 4, 3, 2], ["SQL", "Design", "Analytics", "Perf"]),
  makeStack("tableau", "Tableau", "Business intelligence and dashboards.", ["Tableau", "Data prep", "Dashboards"], "data", "data_viz", [2, 3, 3, 2], ["Basics", "Viz", "Dashboards", "Stories"]),
  makeStack("powerbi", "Power BI", "Microsoft BI and reporting.", ["Power BI", "DAX", "Reports"], "data", "data_viz", [2, 3, 3, 2], ["Basics", "DAX", "Reports", "Service"]),
];

const gameStacks: StackWithRoadmap[] = [
  makeStack("unity", "Unity + C#", "2D/3D game engine with C#.", ["C#", "Unity", "Physics"], "game", "design", [4, 4, 4, 4], ["C#", "Unity basics", "Mechanics", "Publish"]),
  makeStack("unreal", "Unreal Engine + C++", "AAA-grade engine with C++.", ["C++", "Unreal", "Blueprints"], "game", "performance", [5, 4, 5, 4], ["C++", "Unreal", "Blueprints", "Advanced"]),
  makeStack("godot", "Godot + GDScript", "Open-source 2D/3D engine.", ["GDScript", "Godot", "Nodes"], "game", "design", [2, 3, 4, 3], ["GDScript", "Godot", "Scenes", "Export"]),
  makeStack("phaser", "Phaser.js (Web games)", "HTML5 game framework.", ["JavaScript", "Phaser", "Canvas"], "game", "design", [3, 3, 3, 2], ["JS", "Phaser", "Sprites", "Deploy"]),
  makeStack("threejs", "Three.js (WebGL)", "3D graphics in the browser.", ["JavaScript", "Three.js", "WebGL"], "game", "performance", [3, 4, 4, 3], ["JS", "3D basics", "Three.js", "Scenes"]),
];

const dsaStacks: StackWithRoadmap[] = [
  makeStack("dsa-python", "DSA – Python", "Problem-solving with Python.", ["Python", "Arrays", "Recursion", "DP"], "dsa", "algorithms", [2, 4, 4, 4, 4], ["Basics", "Arrays/Strings", "Recursion", "Trees/Graphs", "DP"]),
  makeStack("dsa-cpp", "DSA – C++", "Competitive programming with C++.", ["C++", "STL", "Algorithms"], "dsa", "algorithms", [4, 4, 4, 4], ["C++", "STL", "Data structures", "Advanced"]),
  makeStack("dsa-java", "DSA – Java", "Algorithms and structures in Java.", ["Java", "Collections", "Algorithms"], "dsa", "algorithms", [4, 4, 4, 4], ["Java", "Collections", "Structures", "Advanced"]),
  makeStack("dsa-c", "DSA – C", "Fundamentals and low-level control.", ["C", "Pointers", "Memory"], "dsa", "algorithms", [4, 4, 4, 4], ["C basics", "Pointers", "Structures", "Advanced"]),
];

const cloudStacks: StackWithRoadmap[] = [
  makeStack("aws", "AWS (EC2, Lambda, S3)", "Amazon Web Services core services.", ["EC2", "Lambda", "S3", "IAM"], "cloud", "infrastructure", [2, 3, 3, 3], ["Basics", "EC2", "Lambda", "S3"]),
  makeStack("azure", "Azure", "Microsoft cloud platform.", ["Azure", "VMs", "Functions", "Storage"], "cloud", "infrastructure", [2, 3, 3, 3], ["Basics", "Compute", "Storage", "Serverless"]),
  makeStack("gcp", "GCP", "Google Cloud Platform.", ["GCP", "Compute Engine", "Cloud Functions"], "cloud", "infrastructure", [2, 3, 3, 3], ["Basics", "Compute", "Storage", "Functions"]),
  makeStack("docker", "Docker", "Containers and images.", ["Docker", "Dockerfile", "Compose"], "cloud", "infrastructure", [2, 2, 2, 1], ["Images", "Containers", "Compose", "Best practices"]),
  makeStack("kubernetes", "Kubernetes", "Orchestration and scaling.", ["Kubernetes", "Pods", "Services", "Helm"], "cloud", "infrastructure", [2, 3, 4, 3], ["Concepts", "Pods", "Deploy", "Operate"]),
];

const cybersecurityStacks: StackWithRoadmap[] = [
  makeStack("python-security", "Python + Security Scripting", "Automation and security tools in Python.", ["Python", "Requests", "Scripting"], "cybersecurity", "algorithms", [3, 3, 3, 2], ["Python", "Networking", "Scripts", "Tools"]),
  makeStack("kali", "Kali Linux + Penetration Tools", "Ethical hacking and pen-testing.", ["Kali", "Nmap", "Metasploit"], "cybersecurity", "infrastructure", [2, 3, 4, 3], ["Linux", "Recon", "Exploitation", "Reporting"]),
  makeStack("wireshark", "Wireshark + Network Analysis", "Traffic capture and analysis.", ["Wireshark", "TCP/IP", "Protocols"], "cybersecurity", "data_viz", [2, 3, 2, 2], ["Basics", "Filters", "Protocols", "Security"]),
  makeStack("metasploit", "Metasploit", "Exploitation framework.", ["Metasploit", "Modules", "Payloads"], "cybersecurity", "infrastructure", [2, 3, 3, 2], ["Basics", "Auxiliary", "Exploits", "Post"]),
  makeStack("owasp", "OWASP Top 10 Awareness", "Web security fundamentals.", ["OWASP", "Secure coding", "Testing"], "cybersecurity", "algorithms", [2, 2, 2, 2], ["Top 10", "Mitigation", "Testing", "Practice"]),
  makeStack("ethical-hacking", "Ethical Hacking Labs", "Hands-on security labs.", ["Labs", "CTF", "Reporting"], "cybersecurity", "algorithms", [2, 3, 3, 3], ["Setup", "Labs", "CTF", "Reports"]),
];

function makeStack(
  id: string,
  name: string,
  description: string,
  technologies: string[],
  interest: Interest,
  preference: Preference,
  durations: number[],
  stageNames: string[]
): StackWithRoadmap {
  const stages: RoadmapStageConfig[] = stageNames.map((stage, i) => ({
    stage,
    description: `Learn ${stage.toLowerCase()}`,
    duration_weeks: durations[i] ?? 2,
  }));
  const roadmapStages: Record<ExperienceLevel, RoadmapStageConfig[]> = {
    beginner: stages,
    intermediate: stages.slice(-Math.max(1, Math.floor(stages.length * 0.6))),
    advanced: stages.slice(-Math.max(1, Math.floor(stages.length * 0.4))),
  };
  return {
    id,
    name,
    description,
    technologies,
    bestFor: description,
    difficulty: "intermediate",
    timeToLearn: `${durations.reduce((a, b) => a + b, 0)}–${Math.round(durations.reduce((a, b) => a + b, 0) * 1.5)} weeks`,
    interest,
    preferenceFit: [preference],
    roadmapStages,
  };
}

export const STACKS_BY_INTEREST: Record<Interest, StackWithRoadmap[]> = {
  frontend: frontendStacks,
  backend: backendStacks,
  fullstack: fullstackStacks,
  ai: aiStacks,
  mobile: mobileStacks,
  data: dataStacks,
  game: gameStacks,
  dsa: dsaStacks,
  cloud: cloudStacks,
  cybersecurity: cybersecurityStacks,
};

/** Flat list of all stacks for browse/filter */
export function getAllStacks(): StackWithRoadmap[] {
  return Object.values(STACKS_BY_INTEREST).flat();
}
