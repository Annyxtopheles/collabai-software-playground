ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS meta_title text;
ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS meta_description text;