/**
 * Detailed roadmaps by stack and time commitment (low/medium/high).
 * Structure: phases with title, duration, topics, optional projects.
 */
import type { RoadmapPhaseDetail } from "./types";
import type { TimeCommitment } from "./types";

type RoadmapByTime = Record<TimeCommitment, RoadmapPhaseDetail[]>;

const ROADMAPS: Record<string, RoadmapByTime> = {
  "html-css-js": {
    low: [
      { phase: 1, title: "HTML Foundations (Month 1–2)", duration: "Month 1–2", topics: ["What is the web", "How websites work (browser, server, HTTP)", "HTML structure: DOCTYPE, html, head, body", "Text elements: headings, paragraphs, bold, italic", "Links (anchor tag)", "Images", "Lists (ordered, unordered)", "Semantic HTML: header, nav, section, article, footer", "Forms: input, button, textarea, label"], projects: ["Personal profile page", "Simple blog page", "Resume page"] },
      { phase: 2, title: "CSS Foundations (Month 3–4)", duration: "Month 3–4", topics: ["What is CSS", "Ways to add CSS (inline, internal, external)", "Selectors: class, id, element", "Colors, Units (px, %, rem)", "Box Model: margin, padding, border", "Display: block, inline, inline-block", "Position: static, relative, absolute, fixed"], projects: ["Styled profile page", "Styled resume"] },
      { phase: 3, title: "Layout Mastery (Month 5–6)", duration: "Month 5–6", topics: ["Flexbox: container, direction, justify-content, align-items", "CSS Grid: rows, columns", "Responsive design: media queries"], projects: ["Landing page", "Responsive website"] },
      { phase: 4, title: "JavaScript Fundamentals (Month 7–9)", duration: "Month 7–9", topics: ["Variables, Data types, Operators", "if statements, switch", "Loops: for, while", "Functions: declaration, parameters, return", "Arrays, Objects"], projects: ["Calculator", "To-do list (basic)"] },
      { phase: 5, title: "DOM & Interactivity (Month 10–12)", duration: "Month 10–12", topics: ["DOM", "Selecting elements", "Events: click, input", "Changing HTML/CSS with JS"], projects: ["Interactive to-do list", "Interactive website"] },
    ],
    medium: [
      { phase: 1, title: "HTML (Complete)", duration: "Month 1", topics: ["Full HTML structure", "Semantic HTML", "Forms", "Accessibility basics"], projects: ["Resume", "Blog", "Portfolio basic"] },
      { phase: 2, title: "CSS (Complete)", duration: "Month 2", topics: ["Box model", "Flexbox", "Grid", "Responsive design", "Animations", "Transitions"], projects: ["Portfolio styled", "Landing page clone"] },
      { phase: 3, title: "JavaScript Basics", duration: "Month 3", topics: ["Variables", "Functions", "Arrays", "Objects", "Loops", "Conditionals"], projects: ["Calculator", "Counter", "Random quote generator"] },
      { phase: 4, title: "DOM & Events", duration: "Month 4", topics: ["DOM manipulation", "Event listeners", "Forms with JS"], projects: ["To-do list", "Notes app"] },
      { phase: 5, title: "Advanced JavaScript", duration: "Month 5", topics: ["ES6+: arrow functions, destructuring, spread", "Async JS: promises, fetch, APIs"], projects: ["Weather app", "GitHub profile viewer"] },
      { phase: 6, title: "Real Projects", duration: "Month 6", topics: [], projects: ["Full portfolio website", "Clone: Netflix, Spotify, or Tesla"] },
    ],
    high: [
      { phase: 1, title: "HTML Complete", duration: "Week 1–2", topics: ["All HTML", "Semantic HTML", "Forms"], projects: ["Resume", "Portfolio structure"] },
      { phase: 2, title: "CSS Complete", duration: "Week 3–5", topics: ["Flexbox", "Grid", "Responsive design", "Animations"], projects: ["Portfolio styled", "Landing page clone"] },
      { phase: 3, title: "JavaScript Complete", duration: "Week 6–9", topics: ["Variables", "Functions", "Arrays", "Objects", "DOM", "Events", "ES6+", "Fetch API", "Async/await"], projects: ["Calculator", "To-do list", "Weather app"] },
      { phase: 4, title: "Real Projects", duration: "Week 10–12", topics: [], projects: ["Portfolio website", "Tesla clone", "Spotify clone", "Netflix clone"] },
    ],
  },
  react: {
    low: [
      { phase: 1, title: "JavaScript Advanced (Month 1–2)", duration: "Month 1–2", topics: ["ES6+: let, const, arrow functions, template literals, destructuring, spread", "Arrays: map, filter, find, reduce", "Async: promises, async/await, fetch API", "Modules: import/export"], projects: ["Weather app with API", "GitHub user finder"] },
      { phase: 2, title: "React Fundamentals (Month 3–4)", duration: "Month 3–4", topics: ["What is React", "Virtual DOM", "Vite setup", "Components", "JSX", "Props", "Rendering"], projects: ["Profile card", "Simple UI components"] },
      { phase: 3, title: "React State & Events (Month 5–6)", duration: "Month 5–6", topics: ["useState", "Event handling", "Conditional rendering", "Lists and keys"], projects: ["Counter app", "To-do list"] },
      { phase: 4, title: "React Hooks (Month 7–8)", duration: "Month 7–8", topics: ["useEffect", "useRef", "useContext"], projects: ["Theme switcher", "Data fetching app"] },
      { phase: 5, title: "Routing & Multi-Page (Month 9–10)", duration: "Month 9–10", topics: ["React Router", "Navigation", "Dynamic routes"], projects: ["Multi-page website"] },
      { phase: 6, title: "Modern React Stack (Month 11–12)", duration: "Month 11–12", topics: ["Next.js basics", "API integration", "Deployment"], projects: ["Portfolio with React", "Blog frontend"] },
    ],
    medium: [
      { phase: 1, title: "Advanced JavaScript", duration: "Month 1", topics: ["ES6+", "Modules", "Async JS", "Fetch API"], projects: ["Weather app", "GitHub finder"] },
      { phase: 2, title: "React Fundamentals", duration: "Month 2", topics: ["Components", "JSX", "Props", "State", "Events"], projects: ["Counter", "To-do list"] },
      { phase: 3, title: "Hooks & Advanced React", duration: "Month 3", topics: ["useEffect", "useContext", "useRef"], projects: ["Theme app", "API app"] },
      { phase: 4, title: "Routing & APIs", duration: "Month 4", topics: ["React Router", "REST APIs", "Fetching data"], projects: ["Dashboard UI", "Blog frontend"] },
      { phase: 5, title: "Next.js & Modern Stack", duration: "Month 5", topics: ["Next.js basics", "File routing", "Layouts"], projects: ["Portfolio with Next.js"] },
      { phase: 6, title: "Real-World Projects", duration: "Month 6", topics: [], projects: ["Full portfolio", "SaaS frontend clone", "Dashboard frontend"] },
    ],
    high: [
      { phase: 1, title: "Advanced JavaScript", duration: "Week 1–2", topics: ["ES6+", "Async JS", "Fetch API", "Modules"], projects: ["Weather app", "GitHub finder"] },
      { phase: 2, title: "React Core", duration: "Week 3–4", topics: ["Components", "Props", "State", "Events"], projects: ["Counter", "To-do list"] },
      { phase: 3, title: "Hooks", duration: "Week 5–6", topics: ["useEffect", "useContext", "useRef"], projects: ["API data app", "Theme app"] },
      { phase: 4, title: "Routing & Architecture", duration: "Week 7–8", topics: ["React Router", "Folder structure", "Clean architecture"], projects: ["Multi-page app"] },
      { phase: 5, title: "Next.js", duration: "Week 9–10", topics: ["Next.js App Router", "Layouts", "Pages", "Navigation"], projects: ["Portfolio"] },
      { phase: 6, title: "Production-Level Skills", duration: "Week 11–12", topics: ["Performance optimization", "Deployment", "Environment variables"], projects: ["SaaS frontend", "Dashboard", "Full portfolio"] },
    ],
  },
  "node-express": {
    low: [
      { phase: 1, title: "JavaScript Foundations", duration: "1–2 months", topics: ["Variables", "Functions", "Loops", "Arrays", "Objects", "ES6", "Async JS"], projects: ["Simple CLI apps", "File reader"] },
      { phase: 2, title: "Node.js Basics", duration: "1–2 months", topics: ["Node environment", "npm", "Modules", "fs module", "Event Loop"], projects: ["File manager CLI", "Notes CLI"] },
      { phase: 3, title: "Express Framework", duration: "1–2 months", topics: ["Routing", "Middleware", "HTTP methods", "Static files"], projects: ["Simple blog API", "Hello World server"] },
      { phase: 4, title: "Database & CRUD", duration: "1–2 months", topics: ["MongoDB/Mongoose or PostgreSQL", "Schemas", "Models"], projects: ["Task manager", "Blog API with CRUD"] },
      { phase: 5, title: "Authentication & Deployment", duration: "1 month", topics: ["JWT Auth", "Password hashing", "Environment variables", "Deploying to Heroku or Render"], projects: ["Secure Notes app", "Portfolio backend"] },
    ],
    medium: [
      { phase: 1, title: "JavaScript Deep Dive", duration: "2 weeks", topics: ["ES6+", "Async/Await", "Fetch", "Promises"], projects: ["Weather app", "GitHub API fetch"] },
      { phase: 2, title: "Node.js Core", duration: "2 weeks", topics: ["Modules", "fs", "Events", "process object"], projects: ["CLI file manager"] },
      { phase: 3, title: "Express Routing & Middleware", duration: "1 month", topics: ["Routes", "Query params", "Middleware", "Error handling"], projects: ["Blog API", "Task manager API"] },
      { phase: 4, title: "Database & Authentication", duration: "1 month", topics: ["MongoDB with Mongoose", "RESTful CRUD", "JWT", "bcrypt"], projects: ["Notes app with login", "Blog API with users"] },
      { phase: 5, title: "Deployment & Final Project", duration: "2 weeks", topics: ["Hosting on Heroku/Render", "Environment variables", "Logging"], projects: ["Fullstack integration"] },
    ],
    high: [
      { phase: 1, title: "JavaScript refresh", duration: "Week 1", topics: ["ES6+", "Async/Await", "Arrays", "Objects", "Promises"], projects: ["CLI tools"] },
      { phase: 2, title: "Node.js Basics", duration: "Week 2", topics: ["Modules", "fs", "Events", "Node runtime"], projects: ["Notes CLI"] },
      { phase: 3, title: "Express Routing & Middleware", duration: "Week 3", topics: ["Routes", "HTTP methods", "middleware", "error handling"], projects: ["Simple blog API"] },
      { phase: 4, title: "Database Integration", duration: "Week 4", topics: ["MongoDB", "Mongoose", "CRUD operations"], projects: ["Task manager API"] },
      { phase: 5, title: "Authentication & Security", duration: "Week 5", topics: ["JWT", "bcrypt", "environment variables"], projects: ["Notes app with login"] },
      { phase: 6, title: "Deployment", duration: "Week 6", topics: ["Deploy to Heroku or Render"], projects: ["Fullstack API ready"] },
    ],
  },
  django: {
    low: [
      { phase: 1, title: "Python Basics", duration: "1–2 months", topics: ["Variables", "Data types", "Functions", "Loops", "Lists", "Dictionaries"], projects: ["CLI calculator", "Text-based games"] },
      { phase: 2, title: "Django Basics", duration: "2 months", topics: ["Django project & app structure", "Models, Views, Templates (MVT)", "URL routing", "Admin panel basics"], projects: ["Blog", "Portfolio backend"] },
      { phase: 3, title: "Forms & Validation", duration: "1–2 months", topics: ["Django forms", "Validation", "Template rendering"], projects: ["Contact form", "To-do app with form input"] },
      { phase: 4, title: "Database & ORM", duration: "1–2 months", topics: ["Django ORM", "Relationships", "Queries", "Migrations"], projects: ["Blog with CRUD", "Notes app"] },
      { phase: 5, title: "Deployment & Security", duration: "1 month", topics: ["Environment variables", "Static files", "Deploying to Heroku/Render"], projects: ["Deploy portfolio or blog"] },
    ],
    medium: [
      { phase: 1, title: "Python & Django refresh", duration: "2 weeks", topics: ["Python", "Django basics"], projects: [] },
      { phase: 2, title: "Models, Views, Templates", duration: "1 month", topics: ["MVT", "URL routing"], projects: ["Blog"] },
      { phase: 3, title: "Forms, Validation, Admin", duration: "1 month", topics: ["Forms", "Validation", "Admin panel"], projects: ["To-do app"] },
      { phase: 4, title: "ORM & CRUD", duration: "1 month", topics: ["ORM", "CRUD", "Database relations"], projects: ["Blog with login"] },
      { phase: 5, title: "Deployment & Security", duration: "2 weeks", topics: ["Deployment", "Security"], projects: ["Blog app with login"] },
    ],
    high: [
      { phase: 1, title: "Python basics refresher", duration: "Week 1", topics: ["Python fundamentals"], projects: [] },
      { phase: 2, title: "Django setup, Models, Views, Templates", duration: "Week 2", topics: ["MVT", "URL routing"], projects: ["Blog"] },
      { phase: 3, title: "URL routing, Forms & Validation", duration: "Week 3", topics: ["Forms", "Validation"], projects: ["To-do app"] },
      { phase: 4, title: "ORM & CRUD operations", duration: "Week 4", topics: ["ORM", "CRUD"], projects: ["Notes app"] },
      { phase: 5, title: "Admin panel, authentication, middleware", duration: "Week 5", topics: ["Auth", "Middleware"], projects: ["Blog with auth"] },
      { phase: 6, title: "Deployment, security, final project", duration: "Week 6", topics: ["Deployment"], projects: ["Live blog"] },
    ],
  },
  // ─── Full-stack ───
  mern: {
    low: [
      { phase: 1, title: "JS/React Basics", duration: "2–3 months", topics: ["JS fundamentals", "ES6+", "React components", "State", "Props", "Events"], projects: ["Counter app", "To-do app"] },
      { phase: 2, title: "Node.js & Express Basics", duration: "2 months", topics: ["Node environment", "npm", "Modules", "Express routing", "Middleware"], projects: ["Simple API server", "Hello World API"] },
      { phase: 3, title: "MongoDB & CRUD", duration: "2–3 months", topics: ["MongoDB setup", "Mongoose ORM", "Schema design", "CRUD operations"], projects: ["Notes API", "Blog API"] },
      { phase: 4, title: "Fullstack Integration", duration: "2–3 months", topics: ["React frontend fetching Express API", "Axios", "Component integration"], projects: ["Notes app fullstack", "Blog app fullstack"] },
      { phase: 5, title: "Deployment & Security", duration: "1 month", topics: ["Heroku / Render deployment", "JWT authentication", "CORS", "Environment variables"], projects: ["Live Notes or Blog app"] },
    ],
    medium: [
      { phase: 1, title: "JS & React deep dive", duration: "1 month", topics: ["JS & React core"], projects: [] },
      { phase: 2, title: "Node.js & Express", duration: "1 month", topics: ["Node", "Express"], projects: [] },
      { phase: 3, title: "MongoDB & CRUD", duration: "1 month", topics: ["MongoDB", "Mongoose", "CRUD"], projects: [] },
      { phase: 4, title: "Fullstack integration", duration: "2 months", topics: ["Frontend + API", "State", "Auth"], projects: ["Fullstack Notes app", "Blog app", "Mini SaaS app"] },
      { phase: 5, title: "Deployment & Security", duration: "1 month", topics: ["Deploy", "JWT", "Env vars"], projects: [] },
    ],
    high: [
      { phase: 1, title: "JS refresh", duration: "Week 1", topics: ["JS fundamentals", "ES6+"], projects: [] },
      { phase: 2, title: "React core", duration: "Week 2", topics: ["Components", "State", "Props"], projects: [] },
      { phase: 3, title: "Node.js & Express", duration: "Week 3", topics: ["Node", "Express", "API"], projects: [] },
      { phase: 4, title: "MongoDB & CRUD", duration: "Week 4", topics: ["MongoDB", "Mongoose", "CRUD"], projects: [] },
      { phase: 5, title: "Fullstack integration", duration: "Week 5", topics: ["Connect frontend to API"], projects: [] },
      { phase: 6, title: "Deployment & Security", duration: "Week 6", topics: ["Deploy", "JWT"], projects: [] },
      { phase: 7, title: "Final fullstack project", duration: "Week 7–8", topics: [], projects: ["Fullstack app"] },
    ],
  },
  mean: {
    low: [
      { phase: 1, title: "JS + TypeScript basics", duration: "2 months", topics: ["JS", "TypeScript", "Basics"], projects: [] },
      { phase: 2, title: "Angular Core", duration: "2–3 months", topics: ["Angular", "Components", "Routing"], projects: ["Task manager"] },
      { phase: 3, title: "Node + Express", duration: "2 months", topics: ["Node", "Express", "API"], projects: [] },
      { phase: 4, title: "MongoDB", duration: "1–2 months", topics: ["MongoDB", "CRUD"], projects: [] },
      { phase: 5, title: "Fullstack integration", duration: "2 months", topics: ["Angular + API"], projects: ["Blog"] },
      { phase: 6, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: [] },
    ],
    medium: [
      { phase: 1, title: "Angular + Node + MongoDB", duration: "3 months", topics: ["Angular", "Node", "MongoDB"], projects: [] },
      { phase: 2, title: "Fullstack integration", duration: "2 months", topics: ["Integration"], projects: ["Notes app", "Blog app"] },
      { phase: 3, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: [] },
    ],
    high: [
      { phase: 1, title: "JS/TS", duration: "Week 1", topics: ["JS", "TypeScript"], projects: [] },
      { phase: 2, title: "Angular", duration: "Week 2", topics: ["Angular core"], projects: [] },
      { phase: 3, title: "Node", duration: "Week 3", topics: ["Node", "Express"], projects: [] },
      { phase: 4, title: "MongoDB", duration: "Week 4", topics: ["MongoDB"], projects: [] },
      { phase: 5, title: "Fullstack", duration: "Week 5", topics: ["Integration"], projects: [] },
      { phase: 6, title: "Deployment", duration: "Week 6", topics: ["Deploy"], projects: [] },
      { phase: 7, title: "Final Project", duration: "Week 7–8", topics: [], projects: ["Fullstack app"] },
    ],
  },
  mevn: {
    low: [
      { phase: 1, title: "JS basics", duration: "2 months", topics: ["JS fundamentals"], projects: [] },
      { phase: 2, title: "Vue", duration: "2–3 months", topics: ["Vue", "Components", "State"], projects: [] },
      { phase: 3, title: "Node/Express", duration: "2 months", topics: ["Node", "Express"], projects: [] },
      { phase: 4, title: "MongoDB", duration: "2 months", topics: ["MongoDB", "CRUD"], projects: [] },
      { phase: 5, title: "Fullstack integration", duration: "2 months", topics: ["Vue + API"], projects: [] },
      { phase: 6, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: [] },
    ],
    medium: [
      { phase: 1, title: "Vue core", duration: "1.5 months", topics: ["Vue"], projects: [] },
      { phase: 2, title: "Node/Express", duration: "1.5 months", topics: ["Node", "Express"], projects: [] },
      { phase: 3, title: "MongoDB", duration: "1 month", topics: ["MongoDB"], projects: [] },
      { phase: 4, title: "Fullstack", duration: "2 months", topics: ["Integration"], projects: ["Notes app", "Blog app"] },
      { phase: 5, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: [] },
    ],
    high: [
      { phase: 1, title: "JS", duration: "Week 1", topics: ["JS"], projects: [] },
      { phase: 2, title: "Vue", duration: "Week 2", topics: ["Vue"], projects: [] },
      { phase: 3, title: "Node", duration: "Week 3", topics: ["Node", "MongoDB"], projects: [] },
      { phase: 4, title: "MongoDB", duration: "Week 4", topics: ["MongoDB"], projects: [] },
      { phase: 5, title: "Fullstack", duration: "Week 5", topics: ["Integration"], projects: [] },
      { phase: 6, title: "Deployment", duration: "Week 6", topics: ["Deploy"], projects: [] },
      { phase: 7, title: "Project", duration: "Week 7–8", topics: [], projects: ["Fullstack app"] },
    ],
  },
  lamp: {
    low: [
      { phase: 1, title: "PHP basics", duration: "2–3 months", topics: ["PHP", "Syntax", "OOP"], projects: [] },
      { phase: 2, title: "MySQL basics", duration: "2 months", topics: ["MySQL", "CRUD", "Queries"], projects: [] },
      { phase: 3, title: "CRUD", duration: "2 months", topics: ["PHP + MySQL CRUD"], projects: [] },
      { phase: 4, title: "Apache setup", duration: "1 month", topics: ["Apache", "Config"], projects: [] },
      { phase: 5, title: "Fullstack app", duration: "2–3 months", topics: ["Full LAMP app"], projects: ["Blog or CMS"] },
    ],
    medium: [
      { phase: 1, title: "PHP + MySQL", duration: "2 months", topics: ["PHP", "MySQL"], projects: [] },
      { phase: 2, title: "Apache", duration: "1 month", topics: ["Apache"], projects: [] },
      { phase: 3, title: "Fullstack web app", duration: "2 months", topics: ["Full app"], projects: ["Web app"] },
      { phase: 4, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: [] },
    ],
    high: [
      { phase: 1, title: "PHP", duration: "Week 1", topics: ["PHP"], projects: [] },
      { phase: 2, title: "MySQL", duration: "Week 2", topics: ["MySQL", "CRUD"], projects: [] },
      { phase: 3, title: "CRUD", duration: "Week 3", topics: ["CRUD"], projects: [] },
      { phase: 4, title: "Apache", duration: "Week 4", topics: ["Apache"], projects: [] },
      { phase: 5, title: "Deployment", duration: "Week 5", topics: ["Deploy"], projects: [] },
      { phase: 6, title: "Project", duration: "Week 6", topics: [], projects: ["LAMP app"] },
    ],
  },
  "django-react": {
    low: [
      { phase: 1, title: "Python basics", duration: "2 months", topics: ["Python"], projects: [] },
      { phase: 2, title: "Django", duration: "2–3 months", topics: ["Django", "DRF"], projects: [] },
      { phase: 3, title: "React basics", duration: "2 months", topics: ["React"], projects: [] },
      { phase: 4, title: "API integration", duration: "2 months", topics: ["React + Django API"], projects: [] },
      { phase: 5, title: "Fullstack", duration: "2 months", topics: ["Fullstack"], projects: [] },
      { phase: 6, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: [] },
    ],
    medium: [
      { phase: 1, title: "Django + React API integration", duration: "2 months", topics: ["Django", "React", "API"], projects: [] },
      { phase: 2, title: "CRUD", duration: "2 months", topics: ["CRUD"], projects: [] },
      { phase: 3, title: "Authentication", duration: "1 month", topics: ["Auth"], projects: [] },
      { phase: 4, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: ["Fullstack app"] },
    ],
    high: [
      { phase: 1, title: "Python", duration: "Week 1", topics: ["Python"], projects: [] },
      { phase: 2, title: "Django", duration: "Week 2", topics: ["Django"], projects: [] },
      { phase: 3, title: "React", duration: "Week 3", topics: ["React"], projects: [] },
      { phase: 4, title: "Fullstack integration", duration: "Week 4", topics: ["Integration"], projects: [] },
      { phase: 5, title: "Deployment", duration: "Week 5", topics: ["Deploy"], projects: [] },
      { phase: 6, title: "Final Project", duration: "Week 6", topics: [], projects: ["Fullstack app"] },
    ],
  },
  "flask-vue": {
    low: [
      { phase: 1, title: "Python", duration: "2 months", topics: ["Python"], projects: [] },
      { phase: 2, title: "Flask", duration: "2 months", topics: ["Flask", "API"], projects: [] },
      { phase: 3, title: "Vue basics", duration: "2 months", topics: ["Vue"], projects: [] },
      { phase: 4, title: "API integration", duration: "2 months", topics: ["Vue + Flask"], projects: [] },
      { phase: 5, title: "CRUD", duration: "1 month", topics: ["CRUD"], projects: [] },
      { phase: 6, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: [] },
    ],
    medium: [
      { phase: 1, title: "Flask + Vue", duration: "2 months", topics: ["Flask", "Vue"], projects: [] },
      { phase: 2, title: "API + state", duration: "1.5 months", topics: ["API", "State"], projects: [] },
      { phase: 3, title: "CRUD", duration: "1.5 months", topics: ["CRUD"], projects: [] },
      { phase: 4, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: ["Fullstack app"] },
    ],
    high: [
      { phase: 1, title: "Python", duration: "Week 1", topics: ["Python"], projects: [] },
      { phase: 2, title: "Flask", duration: "Week 2", topics: ["Flask"], projects: [] },
      { phase: 3, title: "Vue", duration: "Week 3", topics: ["Vue"], projects: [] },
      { phase: 4, title: "Fullstack integration", duration: "Week 4", topics: ["Integration"], projects: [] },
      { phase: 5, title: "Deployment", duration: "Week 5", topics: ["Deploy"], projects: [] },
      { phase: 6, title: "Project", duration: "Week 6", topics: [], projects: ["Fullstack app"] },
    ],
  },
  "nextjs-fullstack": {
    low: [
      { phase: 1, title: "React basics", duration: "2 months", topics: ["React"], projects: [] },
      { phase: 2, title: "Next.js frontend", duration: "2 months", topics: ["Next.js", "Pages"], projects: [] },
      { phase: 3, title: "API routes", duration: "1.5 months", topics: ["API routes"], projects: [] },
      { phase: 4, title: "Fullstack app", duration: "2 months", topics: ["Fullstack"], projects: [] },
      { phase: 5, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: [] },
    ],
    medium: [
      { phase: 1, title: "Next.js frontend + backend", duration: "2 months", topics: ["Next.js", "API"], projects: [] },
      { phase: 2, title: "CRUD", duration: "1.5 months", topics: ["CRUD"], projects: [] },
      { phase: 3, title: "Authentication", duration: "1 month", topics: ["Auth"], projects: [] },
      { phase: 4, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: ["Fullstack app"] },
    ],
    high: [
      { phase: 1, title: "React", duration: "Week 1", topics: ["React"], projects: [] },
      { phase: 2, title: "Next.js pages", duration: "Week 2", topics: ["Next.js"], projects: [] },
      { phase: 3, title: "API", duration: "Week 3", topics: ["API routes"], projects: [] },
      { phase: 4, title: "Fullstack integration", duration: "Week 4", topics: ["Integration"], projects: [] },
      { phase: 5, title: "Deployment", duration: "Week 5", topics: ["Deploy"], projects: [] },
      { phase: 6, title: "Final Project", duration: "Week 6", topics: [], projects: ["Fullstack app"] },
    ],
  },
  "nuxt-fullstack": {
    low: [
      { phase: 1, title: "Vue", duration: "2 months", topics: ["Vue"], projects: [] },
      { phase: 2, title: "Nuxt frontend", duration: "2 months", topics: ["Nuxt", "Pages"], projects: [] },
      { phase: 3, title: "API routes", duration: "1.5 months", topics: ["Server routes"], projects: [] },
      { phase: 4, title: "Fullstack", duration: "2 months", topics: ["Fullstack"], projects: [] },
      { phase: 5, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: [] },
    ],
    medium: [
      { phase: 1, title: "Nuxt pages", duration: "2 months", topics: ["Nuxt"], projects: [] },
      { phase: 2, title: "State + API", duration: "1.5 months", topics: ["State", "API"], projects: [] },
      { phase: 3, title: "CRUD", duration: "1 month", topics: ["CRUD"], projects: [] },
      { phase: 4, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: ["Fullstack app"] },
    ],
    high: [
      { phase: 1, title: "Vue", duration: "Week 1", topics: ["Vue"], projects: [] },
      { phase: 2, title: "Nuxt", duration: "Week 2", topics: ["Nuxt"], projects: [] },
      { phase: 3, title: "API", duration: "Week 3", topics: ["API"], projects: [] },
      { phase: 4, title: "Fullstack", duration: "Week 4", topics: ["Integration"], projects: [] },
      { phase: 5, title: "Deployment", duration: "Week 5", topics: ["Deploy"], projects: [] },
      { phase: 6, title: "Final Project", duration: "Week 6", topics: [], projects: ["Fullstack app"] },
    ],
  },
  "spring-react": {
    low: [
      { phase: 1, title: "Java", duration: "2–3 months", topics: ["Java", "OOP"], projects: [] },
      { phase: 2, title: "Spring Boot", duration: "2–3 months", topics: ["Spring Boot", "REST"], projects: [] },
      { phase: 3, title: "React", duration: "2 months", topics: ["React"], projects: [] },
      { phase: 4, title: "REST API", duration: "1.5 months", topics: ["REST"], projects: [] },
      { phase: 5, title: "Integration", duration: "2 months", topics: ["React + Spring"], projects: [] },
      { phase: 6, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: [] },
    ],
    medium: [
      { phase: 1, title: "Spring Boot API + React", duration: "3 months", topics: ["Spring", "React"], projects: [] },
      { phase: 2, title: "CRUD", duration: "2 months", topics: ["CRUD"], projects: [] },
      { phase: 3, title: "Fullstack", duration: "2 months", topics: ["Integration"], projects: [] },
      { phase: 4, title: "Deployment", duration: "1 month", topics: ["Deploy"], projects: ["Fullstack app"] },
    ],
    high: [
      { phase: 1, title: "Java", duration: "Week 1", topics: ["Java"], projects: [] },
      { phase: 2, title: "Spring Boot", duration: "Week 2", topics: ["Spring Boot"], projects: [] },
      { phase: 3, title: "React", duration: "Week 3", topics: ["React"], projects: [] },
      { phase: 4, title: "Fullstack", duration: "Week 4", topics: ["Integration"], projects: [] },
      { phase: 5, title: "Deployment", duration: "Week 5", topics: ["Deploy"], projects: [] },
      { phase: 6, title: "Final Project", duration: "Week 6", topics: [], projects: ["Fullstack app"] },
    ],
  },
  // ─── AI/ML ───
  sklearn: {
    low: [
      { phase: 1, title: "Python basics", duration: "1–2 months", topics: ["Python"], projects: [] },
      { phase: 2, title: "NumPy & Pandas", duration: "1–2 months", topics: ["NumPy", "Pandas"], projects: [] },
      { phase: 3, title: "scikit-learn basics", duration: "2 months", topics: ["sklearn", "Linear regression", "Classification"], projects: [] },
      { phase: 4, title: "Mini projects", duration: "1–2 months", topics: ["Apply ML"], projects: ["Mini datasets"] },
    ],
    medium: [
      { phase: 1, title: "Python", duration: "2 weeks", topics: ["Python"], projects: [] },
      { phase: 2, title: "Data analysis", duration: "1.5 months", topics: ["Pandas", "Analysis"], projects: [] },
      { phase: 3, title: "Supervised & unsupervised learning", duration: "2 months", topics: ["Supervised", "Unsupervised"], projects: ["Mini datasets"] },
      { phase: 4, title: "Projects", duration: "1 month", topics: [], projects: ["Data projects"] },
    ],
    high: [
      { phase: 1, title: "Python", duration: "Week 1", topics: ["Python"], projects: [] },
      { phase: 2, title: "scikit-learn", duration: "Week 2", topics: ["Regression", "Classification", "Clustering"], projects: [] },
      { phase: 3, title: "Project", duration: "Week 3", topics: [], projects: ["Titanic dataset", "Boston housing"] },
    ],
  },
  tensorflow: {
    low: [
      { phase: 1, title: "Python", duration: "1 month", topics: ["Python"], projects: [] },
      { phase: 2, title: "NumPy", duration: "1 month", topics: ["NumPy"], projects: [] },
      { phase: 3, title: "TensorFlow basics", duration: "2 months", topics: ["TensorFlow", "Neural networks"], projects: [] },
      { phase: 4, title: "Mini projects", duration: "2 months", topics: [], projects: ["Mini models"] },
    ],
    medium: [
      { phase: 1, title: "TensorFlow core", duration: "2 months", topics: ["TensorFlow"], projects: [] },
      { phase: 2, title: "Deep learning models", duration: "2 months", topics: ["CNN", "RNN basics"], projects: ["Mini projects"] },
      { phase: 3, title: "Projects", duration: "1 month", topics: [], projects: [] },
    ],
    high: [
      { phase: 1, title: "Python", duration: "Week 1", topics: ["Python"], projects: [] },
      { phase: 2, title: "TensorFlow", duration: "Week 2", topics: ["TensorFlow", "Build & train models"], projects: ["Handwritten digits classifier", "Image classifier"] },
    ],
  },
  pytorch: {
    low: [
      { phase: 1, title: "Python", duration: "1 month", topics: ["Python"], projects: [] },
      { phase: 2, title: "NumPy", duration: "1 month", topics: ["NumPy"], projects: [] },
      { phase: 3, title: "PyTorch basics", duration: "2 months", topics: ["PyTorch", "Tensors", "Autograd"], projects: [] },
      { phase: 4, title: "Mini models", duration: "2 months", topics: [], projects: ["Mini models"] },
    ],
    medium: [
      { phase: 1, title: "PyTorch", duration: "2 months", topics: ["PyTorch"], projects: [] },
      { phase: 2, title: "Neural networks", duration: "2 months", topics: ["NN", "CNNs"], projects: ["Mini projects"] },
      { phase: 3, title: "Projects", duration: "1 month", topics: [], projects: [] },
    ],
    high: [
      { phase: 1, title: "PyTorch", duration: "Week 1", topics: ["PyTorch"], projects: [] },
      { phase: 2, title: "Build/train models", duration: "Week 2", topics: ["Training"], projects: ["Image classifier", "MNIST"] },
    ],
  },
  // ─── Mobile ───
  flutter: {
    low: [
      { phase: 1, title: "Dart basics", duration: "2 months", topics: ["Dart"], projects: [] },
      { phase: 2, title: "Flutter widgets", duration: "2 months", topics: ["Widgets", "Layouts"], projects: [] },
      { phase: 3, title: "State management", duration: "1.5 months", topics: ["State"], projects: [] },
      { phase: 4, title: "Small apps", duration: "2 months", topics: [], projects: ["Small apps"] },
    ],
    medium: [
      { phase: 1, title: "Dart", duration: "1 month", topics: ["Dart"], projects: [] },
      { phase: 2, title: "Flutter", duration: "2 months", topics: ["Flutter", "Navigation", "Forms"], projects: [] },
      { phase: 3, title: "REST API", duration: "1 month", topics: ["API"], projects: [] },
      { phase: 4, title: "Small apps", duration: "1 month", topics: [], projects: ["Small apps"] },
    ],
    high: [
      { phase: 1, title: "Dart", duration: "Week 1", topics: ["Dart"], projects: [] },
      { phase: 2, title: "Flutter", duration: "Week 2", topics: ["Flutter", "Full apps", "API integration"], projects: [] },
      { phase: 3, title: "Deployment & Project", duration: "Week 3", topics: ["Deploy"], projects: ["Full app"] },
    ],
  },
  "react-native": {
    low: [
      { phase: 1, title: "JS/React basics", duration: "2–3 months", topics: ["JS", "React"], projects: [] },
      { phase: 2, title: "Components", duration: "1.5 months", topics: ["Components"], projects: [] },
      { phase: 3, title: "Navigation", duration: "1.5 months", topics: ["Navigation"], projects: [] },
      { phase: 4, title: "Simple apps", duration: "2 months", topics: [], projects: ["Simple apps"] },
    ],
    medium: [
      { phase: 1, title: "React Native", duration: "2 months", topics: ["React Native"], projects: [] },
      { phase: 2, title: "Navigation", duration: "1 month", topics: ["Navigation"], projects: [] },
      { phase: 3, title: "API integration", duration: "1 month", topics: ["API"], projects: [] },
      { phase: 4, title: "State", duration: "1 month", topics: ["State"], projects: ["Mini projects"] },
    ],
    high: [
      { phase: 1, title: "React Native", duration: "Week 1", topics: ["React Native"], projects: [] },
      { phase: 2, title: "Full apps", duration: "Week 2", topics: ["API", "State"], projects: [] },
      { phase: 3, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: ["Final app"] },
    ],
  },
  "kotlin-android": {
    low: [
      { phase: 1, title: "Kotlin basics", duration: "2 months", topics: ["Kotlin"], projects: [] },
      { phase: 2, title: "Android Studio", duration: "1.5 months", topics: ["Android Studio"], projects: [] },
      { phase: 3, title: "Layouts", duration: "2 months", topics: ["Layouts"], projects: [] },
      { phase: 4, title: "Simple apps", duration: "2 months", topics: [], projects: ["Simple apps"] },
    ],
    medium: [
      { phase: 1, title: "Kotlin", duration: "1.5 months", topics: ["Kotlin"], projects: [] },
      { phase: 2, title: "Activities, Fragments", duration: "2 months", topics: ["Activities", "Fragments", "State"], projects: [] },
      { phase: 3, title: "API", duration: "1.5 months", topics: ["API"], projects: ["Apps"] },
    ],
    high: [
      { phase: 1, title: "Kotlin", duration: "Week 1", topics: ["Kotlin"], projects: [] },
      { phase: 2, title: "Full app lifecycle", duration: "Week 2", topics: ["Lifecycle", "API"], projects: [] },
      { phase: 3, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: ["Final project"] },
    ],
  },
  "swift-ios": {
    low: [
      { phase: 1, title: "Swift basics", duration: "2 months", topics: ["Swift"], projects: [] },
      { phase: 2, title: "Xcode", duration: "1.5 months", topics: ["Xcode"], projects: [] },
      { phase: 3, title: "Layouts", duration: "2 months", topics: ["Layouts"], projects: [] },
      { phase: 4, title: "Simple apps", duration: "2 months", topics: [], projects: ["Simple apps"] },
    ],
    medium: [
      { phase: 1, title: "Swift", duration: "1.5 months", topics: ["Swift"], projects: [] },
      { phase: 2, title: "UIKit / SwiftUI", duration: "2 months", topics: ["UIKit", "SwiftUI", "Navigation"], projects: [] },
      { phase: 3, title: "API", duration: "1.5 months", topics: ["API"], projects: ["Mini projects"] },
    ],
    high: [
      { phase: 1, title: "Swift", duration: "Week 1", topics: ["Swift"], projects: [] },
      { phase: 2, title: "Full app lifecycle", duration: "Week 2", topics: ["Lifecycle", "API"], projects: [] },
      { phase: 3, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: ["Final project"] },
    ],
  },
  // ─── Data & Analytics ───
  "python-pandas": {
    low: [
      { phase: 1, title: "Basics", duration: "2 months", topics: ["Python", "Pandas basics"], projects: [] },
      { phase: 2, title: "Dataframes", duration: "2 months", topics: ["DataFrames", "Operations"], projects: [] },
      { phase: 3, title: "Analysis", duration: "2 months", topics: ["Analysis"], projects: ["Mini projects"] },
    ],
    medium: [
      { phase: 1, title: "Data cleaning", duration: "2 months", topics: ["Cleaning", "Transform"], projects: [] },
      { phase: 2, title: "Visualization", duration: "2 months", topics: ["Matplotlib", "Seaborn"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full datasets", duration: "Week 1", topics: ["Pandas", "NumPy"], projects: [] },
      { phase: 2, title: "Insights", duration: "Week 2", topics: ["Analysis", "Viz"], projects: ["Mini portfolio"] },
    ],
  },
  "r-tidyverse": {
    low: [
      { phase: 1, title: "R basics", duration: "2 months", topics: ["R"], projects: [] },
      { phase: 2, title: "tidyverse", duration: "2 months", topics: ["tidyverse"], projects: [] },
      { phase: 3, title: "Charts", duration: "2 months", topics: ["ggplot2"], projects: ["Mini projects"] },
    ],
    medium: [
      { phase: 1, title: "Data manipulation", duration: "2 months", topics: ["tidyverse", "Manipulation"], projects: [] },
      { phase: 2, title: "Modeling", duration: "2 months", topics: ["Modeling"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full datasets", duration: "Week 1", topics: ["R", "tidyverse"], projects: [] },
      { phase: 2, title: "Reports", duration: "Week 2", topics: ["Reports"], projects: ["Portfolio"] },
    ],
  },
  "sql-dbs": {
    low: [
      { phase: 1, title: "CRUD, Joins, Queries", duration: "3 months", topics: ["SQL", "CRUD", "Joins"], projects: ["Mini projects"] },
    ],
    medium: [
      { phase: 1, title: "Advanced queries", duration: "2 months", topics: ["Advanced SQL"], projects: [] },
      { phase: 2, title: "Indexes", duration: "1 month", topics: ["Indexes"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Database design", duration: "Week 1", topics: ["Design"], projects: [] },
      { phase: 2, title: "Complex projects", duration: "Week 2–3", topics: [], projects: ["Complex projects"] },
    ],
  },
  tableau: {
    low: [
      { phase: 1, title: "Dashboard basics", duration: "3 months", topics: ["Tableau basics"], projects: ["Simple projects"] },
    ],
    medium: [
      { phase: 1, title: "Data import", duration: "2 months", topics: ["Import"], projects: [] },
      { phase: 2, title: "Charts", duration: "2 months", topics: ["Charts"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Advanced dashboards", duration: "Week 1", topics: ["Advanced"], projects: [] },
      { phase: 2, title: "Interactive reports", duration: "Week 2–3", topics: ["Interactive"], projects: [] },
    ],
  },
  powerbi: {
    low: [
      { phase: 1, title: "Dashboard basics", duration: "3 months", topics: ["Power BI basics"], projects: ["Simple projects"] },
    ],
    medium: [
      { phase: 1, title: "Data import", duration: "2 months", topics: ["Import", "DAX"], projects: [] },
      { phase: 2, title: "Charts", duration: "2 months", topics: ["Charts"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Advanced dashboards", duration: "Week 1", topics: ["Advanced"], projects: [] },
      { phase: 2, title: "Interactive reports", duration: "Week 2–3", topics: ["Interactive"], projects: [] },
    ],
  },
  // ─── Game Development ───
  unity: {
    low: [
      { phase: 1, title: "C# basics", duration: "2 months", topics: ["C#"], projects: [] },
      { phase: 2, title: "Unity editor", duration: "2 months", topics: ["Unity editor"], projects: [] },
      { phase: 3, title: "Simple games", duration: "3 months", topics: [], projects: ["Simple games"] },
    ],
    medium: [
      { phase: 1, title: "Physics, Animations", duration: "3 months", topics: ["Physics", "Animations"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full game projects", duration: "Week 1–2", topics: [], projects: ["Full game"] },
      { phase: 2, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: [] },
    ],
  },
  unreal: {
    low: [
      { phase: 1, title: "C++ basics", duration: "2–3 months", topics: ["C++"], projects: [] },
      { phase: 2, title: "Unreal editor", duration: "2 months", topics: ["Unreal editor"], projects: [] },
      { phase: 3, title: "Simple projects", duration: "3 months", topics: [], projects: ["Simple projects"] },
    ],
    medium: [
      { phase: 1, title: "Blueprints + C++", duration: "3 months", topics: ["Blueprints", "C++"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full game dev", duration: "Week 1–2", topics: [], projects: ["Full game"] },
      { phase: 2, title: "Final project", duration: "Week 3", topics: [], projects: ["Final project"] },
    ],
  },
  godot: {
    low: [
      { phase: 1, title: "GDScript basics", duration: "2 months", topics: ["GDScript"], projects: [] },
      { phase: 2, title: "Node system", duration: "2 months", topics: ["Nodes"], projects: [] },
      { phase: 3, title: "Mini projects", duration: "3 months", topics: [], projects: ["Mini projects"] },
    ],
    medium: [
      { phase: 1, title: "2D/3D games", duration: "3 months", topics: ["2D", "3D"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full game", duration: "Week 1–2", topics: [], projects: ["Full game"] },
      { phase: 2, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: [] },
    ],
  },
  phaser: {
    low: [
      { phase: 1, title: "JS basics", duration: "2 months", topics: ["JS"], projects: [] },
      { phase: 2, title: "Phaser setup", duration: "1.5 months", topics: ["Phaser"], projects: [] },
      { phase: 3, title: "Mini games", duration: "3 months", topics: [], projects: ["Mini games"] },
    ],
    medium: [
      { phase: 1, title: "Animations, Physics", duration: "3 months", topics: ["Animations", "Physics"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Complete browser games", duration: "Week 1–2", topics: [], projects: ["Browser game"] },
      { phase: 2, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: [] },
    ],
  },
  threejs: {
    low: [
      { phase: 1, title: "JS basics", duration: "2 months", topics: ["JS"], projects: [] },
      { phase: 2, title: "Scene, Camera, Renderer", duration: "2 months", topics: ["Three.js basics"], projects: ["Mini projects"] },
    ],
    medium: [
      { phase: 1, title: "Materials, Lighting", duration: "3 months", topics: ["Materials", "Lighting"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full 3D web projects", duration: "Week 1–2", topics: [], projects: ["3D project"] },
      { phase: 2, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: [] },
    ],
  },
  // ─── DSA (same structure for all languages) ───
  "dsa-python": { low: [{ phase: 1, title: "Basics, Arrays, Strings, Recursion", duration: "3–4 months", topics: ["Basics", "Arrays", "Strings", "Recursion"], projects: ["Mini problems"] }], medium: [{ phase: 1, title: "Trees, Graphs, DP", duration: "2–3 months", topics: ["Trees", "Graphs", "DP"], projects: ["Competitive problems"] }], high: [{ phase: 1, title: "Advanced algorithms", duration: "1 month", topics: ["Advanced algorithms"], projects: ["Online contest practice"] }] },
  "dsa-cpp": { low: [{ phase: 1, title: "Basics, Arrays, Strings, Recursion", duration: "3–4 months", topics: ["C++", "Arrays", "Strings", "Recursion"], projects: ["Mini problems"] }], medium: [{ phase: 1, title: "Trees, Graphs, DP", duration: "2–3 months", topics: ["Trees", "Graphs", "DP"], projects: ["Competitive problems"] }], high: [{ phase: 1, title: "Advanced algorithms", duration: "1 month", topics: ["Advanced algorithms"], projects: ["Online contest practice"] }] },
  "dsa-java": { low: [{ phase: 1, title: "Basics, Arrays, Strings, Recursion", duration: "3–4 months", topics: ["Java", "Arrays", "Strings", "Recursion"], projects: ["Mini problems"] }], medium: [{ phase: 1, title: "Trees, Graphs, DP", duration: "2–3 months", topics: ["Trees", "Graphs", "DP"], projects: ["Competitive problems"] }], high: [{ phase: 1, title: "Advanced algorithms", duration: "1 month", topics: ["Advanced algorithms"], projects: ["Online contest practice"] }] },
  "dsa-c": { low: [{ phase: 1, title: "Basics, Arrays, Strings, Recursion", duration: "3–4 months", topics: ["C", "Arrays", "Strings", "Recursion"], projects: ["Mini problems"] }], medium: [{ phase: 1, title: "Trees, Graphs, DP", duration: "2–3 months", topics: ["Trees", "Graphs", "DP"], projects: ["Competitive problems"] }], high: [{ phase: 1, title: "Advanced algorithms", duration: "1 month", topics: ["Advanced algorithms"], projects: ["Online contest practice"] }] },
  // ─── Cloud & DevOps ───
  aws: {
    low: [
      { phase: 1, title: "Basic services (Compute, Storage)", duration: "4–5 months", topics: ["EC2", "S3", "Basics"], projects: ["Small projects"] },
    ],
    medium: [
      { phase: 1, title: "Networking, Databases, CI/CD", duration: "3 months", topics: ["VPC", "RDS", "CI/CD"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full infrastructure projects", duration: "Week 1–2", topics: ["Full infra"], projects: [] },
      { phase: 2, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: [] },
    ],
  },
  azure: {
    low: [
      { phase: 1, title: "Basic services", duration: "4–5 months", topics: ["Compute", "Storage"], projects: ["Small projects"] },
    ],
    medium: [
      { phase: 1, title: "Networking, Databases, CI/CD", duration: "3 months", topics: ["Networking", "DB", "CI/CD"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full infrastructure", duration: "Week 1–2", topics: ["Full infra"], projects: [] },
      { phase: 2, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: [] },
    ],
  },
  gcp: {
    low: [
      { phase: 1, title: "Basic services", duration: "4–5 months", topics: ["Compute", "Storage"], projects: ["Small projects"] },
    ],
    medium: [
      { phase: 1, title: "Networking, Databases, CI/CD", duration: "3 months", topics: ["Networking", "DB", "CI/CD"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full infrastructure", duration: "Week 1–2", topics: ["Full infra"], projects: [] },
      { phase: 2, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: [] },
    ],
  },
  docker: {
    low: [
      { phase: 1, title: "Containers", duration: "3 months", topics: ["Docker", "Containers"], projects: ["Simple apps"] },
    ],
    medium: [
      { phase: 1, title: "Compose, Pods, Deployments", duration: "3 months", topics: ["Compose", "Pods"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full DevOps workflow", duration: "Week 1–2", topics: ["DevOps"], projects: [] },
      { phase: 2, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: [] },
    ],
  },
  kubernetes: {
    low: [
      { phase: 1, title: "Containers", duration: "3 months", topics: ["Containers", "K8s basics"], projects: ["Simple apps"] },
    ],
    medium: [
      { phase: 1, title: "Compose, Pods, Deployments", duration: "3 months", topics: ["Pods", "Deployments"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full DevOps workflow", duration: "Week 1–2", topics: ["K8s", "DevOps"], projects: [] },
      { phase: 2, title: "Deployment", duration: "Week 3", topics: ["Deploy"], projects: [] },
    ],
  },
  // ─── Cybersecurity ───
  "python-security": {
    low: [
      { phase: 1, title: "Python", duration: "2 months", topics: ["Python"], projects: [] },
      { phase: 2, title: "Scripts", duration: "2–3 months", topics: ["Scripting"], projects: ["Mini tools"] },
    ],
    medium: [
      { phase: 1, title: "Network scripts", duration: "2 months", topics: ["Network scripts"], projects: [] },
      { phase: 2, title: "Pentest scripts", duration: "2 months", topics: ["Pentest scripts"], projects: [] },
    ],
    high: [
      { phase: 1, title: "Automation & full security toolkit", duration: "2–3 months", topics: ["Automation", "Toolkit"], projects: [] },
    ],
  },
  kali: {
    low: [
      { phase: 1, title: "Kali setup", duration: "2 months", topics: ["Kali Linux"], projects: [] },
      { phase: 2, title: "Basic tools", duration: "4–5 months", topics: ["Basic pentest tools"], projects: [] },
    ],
    medium: [
      { phase: 1, title: "Pentesting workflow", duration: "3 months", topics: ["Workflow"], projects: ["Mini labs"] },
    ],
    high: [
      { phase: 1, title: "Full pentesting", duration: "Week 1–2", topics: ["Full pentest"], projects: [] },
      { phase: 2, title: "Final labs", duration: "Week 3", topics: [], projects: ["Final labs"] },
    ],
  },
  wireshark: {
    low: [
      { phase: 1, title: "Basics", duration: "2 months", topics: ["Wireshark basics"], projects: [] },
      { phase: 2, title: "Capture packets", duration: "3 months", topics: ["Capture"], projects: ["Mini labs"] },
    ],
    medium: [
      { phase: 1, title: "Filters, Protocols", duration: "3 months", topics: ["Filters", "Protocols"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full network analysis", duration: "Week 1–2", topics: ["Full analysis"], projects: [] },
      { phase: 2, title: "Reports", duration: "Week 3", topics: ["Reporting"], projects: [] },
    ],
  },
  metasploit: {
    low: [
      { phase: 1, title: "Setup", duration: "2 months", topics: ["Metasploit setup"], projects: [] },
      { phase: 2, title: "Basic exploits", duration: "4–5 months", topics: ["Basic exploits"], projects: [] },
    ],
    medium: [
      { phase: 1, title: "Modules, Payloads", duration: "3 months", topics: ["Modules", "Payloads"], projects: ["Labs"] },
    ],
    high: [
      { phase: 1, title: "Full penetration projects", duration: "Week 1–2", topics: [], projects: [] },
      { phase: 2, title: "Reports", duration: "Week 3", topics: ["Reporting"], projects: [] },
    ],
  },
  owasp: {
    low: [
      { phase: 1, title: "Study vulnerabilities", duration: "4–5 months", topics: ["OWASP Top 10"], projects: ["Mini labs"] },
    ],
    medium: [
      { phase: 1, title: "Exploit & fix", duration: "3 months", topics: ["Exploit", "Fix"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Secure web applications", duration: "Week 1–2", topics: ["Secure apps"], projects: [] },
      { phase: 2, title: "Penetration testing", duration: "Week 3", topics: ["Pentesting"], projects: [] },
    ],
  },
  "ethical-hacking": {
    low: [
      { phase: 1, title: "Virtual labs", duration: "2 months", topics: ["Labs setup"], projects: [] },
      { phase: 2, title: "Basics", duration: "4–5 months", topics: ["Ethical hacking basics"], projects: [] },
    ],
    medium: [
      { phase: 1, title: "Exploits, network attacks", duration: "3 months", topics: ["Exploits", "Network attacks"], projects: ["Projects"] },
    ],
    high: [
      { phase: 1, title: "Full-scale ethical hacking labs", duration: "Week 1–2", topics: ["Full labs"], projects: [] },
      { phase: 2, title: "Reporting", duration: "Week 3", topics: ["Reporting"], projects: [] },
    ],
  },
};

/** Get detailed roadmap for a stack and time commitment. Falls back to generic phases if not in ROADMAPS. */
export function getDetailedRoadmap(
  stackId: string,
  time: TimeCommitment
): RoadmapPhaseDetail[] {
  const byTime = ROADMAPS[stackId];
  if (byTime && byTime[time]?.length) return byTime[time];
  if (byTime) {
    const fallback = byTime.medium?.length ? byTime.medium : byTime.low ?? byTime.high;
    if (fallback) return fallback;
  }
  return [];
}
