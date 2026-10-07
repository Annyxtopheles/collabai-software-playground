-- Drop the existing view
DROP VIEW IF EXISTS public.public_blog_comments;

-- Recreate the view with security_definer to bypass RLS on the underlying table
-- The view itself acts as the security filter by only showing approved comments
CREATE VIEW public.public_blog_comments 
WITH (security_invoker=false) -- Use security_definer behavior
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
WHERE is_approved = true; -- Only expose approved comments

-- Grant SELECT to anonymous and authenticated users
GRANT SELECT ON public.public_blog_comments TO anon;
GRANT SELECT ON public.public_blog_comments TO authenticated;

-- Add comment explaining the security model
COMMENT ON VIEW public.public_blog_comments IS 
'Public view of approved blog comments. Email addresses are excluded to protect commenter privacy. Only shows approved comments (is_approved = true).';