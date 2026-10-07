ALTER TABLE public.blog_posts
  ADD COLUMN IF NOT EXISTS og_title text,
  ADD COLUMN IF NOT EXISTS og_description text,
  ADD COLUMN IF NOT EXISTS og_image_url text,
  ADD COLUMN IF NOT EXISTS twitter_card_type text DEFAULT 'summary_large_image',
  ADD COLUMN IF NOT EXISTS schema_type text DEFAULT 'BlogPosting',
  ADD COLUMN IF NOT EXISTS author_name text,
  ADD COLUMN IF NOT EXISTS author_url text,
  ADD COLUMN IF NOT EXISTS focus_keyword text;