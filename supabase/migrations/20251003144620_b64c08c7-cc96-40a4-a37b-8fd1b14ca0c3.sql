-- Fix the security definer issue by recreating the view with security_invoker enabled
-- This ensures the view respects RLS policies and runs with the permissions of the calling user

DROP VIEW IF EXISTS public.public_blog_comments;

CREATE OR REPLACE VIEW public.public_blog_comments
WITH (security_invoker=on)
AS
SELECT
  id,
  blog_post_id,
  name,
  website,
  comment,
  is_approved,
  created_at
FROM public.blog_comments
WHERE is_approved = true;

-- Grant public access to the view
GRANT SELECT ON public.public_blog_comments TO anon;
GRANT SELECT ON public.public_blog_comments TO authenticated;

-- Add helpful comment explaining the security measure
COMMENT ON VIEW public.public_blog_comments IS 'Public view of approved blog comments without email addresses to protect commenter privacy. Uses security_invoker to respect RLS policies.';