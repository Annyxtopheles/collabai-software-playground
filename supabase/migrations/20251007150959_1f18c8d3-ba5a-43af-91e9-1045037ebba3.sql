
-- Drop the existing view
DROP VIEW IF EXISTS public.blog_comments_public;

-- Recreate the view with SECURITY INVOKER
CREATE VIEW public.blog_comments_public 
WITH (security_invoker = true)
AS
SELECT 
  id,
  blog_post_id,
  name,
  NULLIF(website, ''::text) AS website,
  comment,
  created_at
FROM public.blog_comments
WHERE is_approved = true;

-- Enable Row Level Security on the view
ALTER VIEW public.blog_comments_public SET (security_invoker = true);

-- Add RLS policy to allow anyone to view approved comments
-- Note: The underlying table (blog_comments) already has RLS policies
-- This view will respect those policies because it uses SECURITY INVOKER

-- Add a comment to document the view's purpose
COMMENT ON VIEW public.blog_comments_public IS 'Public view of approved blog comments. Uses SECURITY INVOKER to enforce RLS policies of the querying user rather than the view creator. Excludes email addresses for privacy.';
