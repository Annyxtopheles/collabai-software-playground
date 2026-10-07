ALTER TABLE public.blog_posts
  ADD COLUMN IF NOT EXISTS toc_enabled boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS related_post_ids uuid[] DEFAULT '{}';