-- Skill Mentor v0 - Supabase schema
-- Run this in the Supabase SQL Editor to create tables and RLS policies.

-- user_preferences: one row per user, questionnaire answers
CREATE TABLE IF NOT EXISTS user_preferences (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  interest TEXT NOT NULL,
  preference TEXT NOT NULL,
  experience_level TEXT NOT NULL,
  time_commitment TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own preferences"
  ON user_preferences FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own preferences"
  ON user_preferences FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own preferences"
  ON user_preferences FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- saved_roadmaps: user-saved roadmaps
CREATE TABLE IF NOT EXISTS saved_roadmaps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stack_name TEXT NOT NULL,
  roadmap JSONB NOT NULL,
  reasoning TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE saved_roadmaps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own saved roadmaps"
  ON saved_roadmaps FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own saved roadmaps"
  ON saved_roadmaps FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own saved roadmaps"
  ON saved_roadmaps FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own saved roadmaps"
  ON saved_roadmaps FOR DELETE
  USING (auth.uid() = user_id);

-- recommended_stacks: recommendation history
CREATE TABLE IF NOT EXISTS recommended_stacks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  interest_area TEXT NOT NULL,
  primary_stack TEXT NOT NULL,
  alternatives JSONB,
  reasoning TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE recommended_stacks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own recommended_stacks"
  ON recommended_stacks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own recommended_stacks"
  ON recommended_stacks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- roadmap_progress: which phases user has completed per stack (for checkboxes)
CREATE TABLE IF NOT EXISTS roadmap_progress (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stack_id TEXT NOT NULL,
  completed_phases JSONB DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, stack_id)
);

ALTER TABLE roadmap_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own roadmap_progress"
  ON roadmap_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own roadmap_progress"
  ON roadmap_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own roadmap_progress"
  ON roadmap_progress FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
