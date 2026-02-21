# Skill Mentor v0

A full-stack web app that gives **personalized tech stack recommendations** and **custom learning roadmaps** for developers. Built with Next.js, React, TypeScript, Tailwind CSS, and Supabase. No paid APIs—recommendations are rule-based.

## Features

- **Auth** – Sign up / log in with Supabase (email verification supported)
- **Questionnaire** – 4 steps: interest area, preference, experience level, time commitment
- **Recommendations** – Rule-based engine suggests a primary stack + 2–3 alternatives with reasoning
- **Roadmaps** – 6–8 phase learning paths, adjusted by experience and time commitment
- **Stack library** – Browse 12+ stacks (MERN, Next.js, Django, Flutter, PyTorch, Vue, etc.) with “Learn more” modals
- **Dashboard** – Get recommendation, browse stacks, view saved roadmaps
- **Save roadmaps** – Persist to Supabase (requires DB migration)

## Tech stack

- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, custom UI components (button, card, input, label, dialog)
- **Auth & DB**: Supabase (Auth + PostgreSQL with RLS)
- **State**: React hooks (useState, useEffect); client components where needed

## Setup

1. **Clone and install**

   ```bash
   cd "skill mentor cursor"
   npm install
   ```

2. **Supabase**

   - Create a project at [supabase.com](https://supabase.com).
   - In the SQL Editor, run the script in `scripts/01_create_tables.sql` to create tables and RLS policies.
   - In Authentication > URL Configuration, add your site URL and redirect URLs (e.g. `http://localhost:3000/auth/callback` if you add a callback route).

3. **Environment**

   - Copy `.env.local.example` to `.env.local`.
   - Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from your Supabase project (Settings > API).

4. **Run**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000). Sign up, then use the dashboard to get a recommendation or browse stacks.

## Project structure

- `app/` – Pages (landing, auth, protected dashboard, questionnaire, results, stacks) and API routes
- `lib/` – Types, recommendation engine (`STACK_LIBRARY`, `ROADMAP_TEMPLATES`, `getRecommendation`), Supabase client/server/proxy, utils
- `components/` – Layout (header, footer), auth (logout), questionnaire form, stack details modal, UI primitives
- `middleware.ts` – Session refresh and protection of `/protected/*`
- `scripts/01_create_tables.sql` – Supabase schema and RLS

## Notes

- If you see **PGRST205** when saving a roadmap, the `saved_roadmaps` table doesn’t exist yet—run `scripts/01_create_tables.sql` in Supabase.
- Recommendation logic is in `lib/recommendation-engine.ts`; you can tweak rules and add stacks there.
- Roadmaps start with foundations (e.g. HTML before JavaScript) and scale by experience (beginner / intermediate / advanced) and time (low / medium / high).

## Next steps (from spec)

- Ensure all DB tables are created and test end-to-end flows
- Add profile page for viewing/editing saved roadmaps
- Roadmap export/save to PDF
- Search/filter in stack library
- Mobile UI refinements and performance tuning
