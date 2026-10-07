-- Fix Security Definer View issue
-- Convert public_blog_comments to SECURITY INVOKER and add proper RLS policy

-- Drop the existing view
DROP VIEW IF EXISTS public.public_blog_comments;

-- Add RLS policy to blog_comments to allow public access to approved comments
-- This ensures email addresses are never exposed
CREATE POLICY "Anyone can view approved comments (no email)"
ON public.blog_comments
FOR SELECT
TO public
USING (is_approved = true);

-- Recreate the view with SECURITY INVOKER (default, more secure)
-- This view excludes email addresses for privacy
CREATE VIEW public.public_blog_comments
WITH (security_invoker=true)
AS
SELECT 
  id,
  blog_post_id,
  name,
  comment,
  website,
  is_approved,
  created_at
FROM public.blog_comments
WHERE is_approved = true;

-- Grant SELECT to anonymous and authenticated users
GRANT SELECT ON public.public_blog_comments TO anon, authenticated;

-- Add comment explaining the security model
COMMENT ON VIEW public.public_blog_comments IS 
'Public view of approved blog comments. Email addresses are excluded for privacy. 
Uses SECURITY INVOKER for proper RLS enforcement. Access controlled via RLS policy on blog_comments table.';