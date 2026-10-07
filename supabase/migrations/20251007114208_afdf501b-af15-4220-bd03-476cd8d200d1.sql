-- 1) Remove public SELECT on base table to prevent email harvesting
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
      AND tablename = 'blog_comments' 
      AND policyname = 'Public can view approved comments'
  ) THEN
    EXECUTE 'DROP POLICY "Public can view approved comments" ON public.blog_comments';
  END IF;
END $$;

-- 2) Create a safe public view without sensitive fields (no email)
CREATE OR REPLACE VIEW public.blog_comments_public AS
SELECT 
  id,
  blog_post_id,
  name,
  NULLIF(website, '') AS website,
  comment,
  created_at
FROM public.blog_comments
WHERE is_approved = true;

COMMENT ON VIEW public.blog_comments_public IS 'Public-safe blog comments view that excludes email and only exposes approved comments.';

-- 3) Grant read access to the safe view only
GRANT SELECT ON public.blog_comments_public TO anon, authenticated;