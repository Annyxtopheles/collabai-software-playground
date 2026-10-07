
-- Create blog_post_revisions table
CREATE TABLE public.blog_post_revisions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  content text NOT NULL,
  title text NOT NULL,
  meta_data jsonb DEFAULT '{}',
  revision_number integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  created_by text
);

ALTER TABLE public.blog_post_revisions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only admins can manage revisions" ON public.blog_post_revisions
  FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX idx_revisions_post_id ON public.blog_post_revisions(post_id, created_at DESC);

-- Add new columns to blog_posts
ALTER TABLE public.blog_posts
  ADD COLUMN IF NOT EXISTS canonical_url text,
  ADD COLUMN IF NOT EXISTS noindex boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS nofollow boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS utm_source text,
  ADD COLUMN IF NOT EXISTS utm_medium text,
  ADD COLUMN IF NOT EXISTS utm_campaign text,
  ADD COLUMN IF NOT EXISTS scheduled_timezone text DEFAULT 'UTC',
  ADD COLUMN IF NOT EXISTS last_auto_saved_at timestamptz;
