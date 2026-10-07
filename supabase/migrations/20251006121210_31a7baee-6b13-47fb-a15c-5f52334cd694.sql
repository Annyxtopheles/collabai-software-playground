-- Drop the policy I just created (it wasn't quite right)
DROP POLICY IF EXISTS "Anyone can view approved comments via public view" ON public.blog_comments;

-- Update the SELECT policy to only allow authenticated users (admins) 
-- or queries through security_invoker views to see blog_comments
-- Anonymous users should use the public_blog_comments view instead

-- The existing "Only admins can view all blog comments" policy already handles admin access
-- We just need to ensure anonymous users cannot directly query blog_comments

-- Add a comment to document the security approach
COMMENT ON VIEW public.public_blog_comments IS 
  'Public view of approved blog comments. Email addresses are excluded for privacy. 
   Anonymous users should query this view instead of the blog_comments table directly.';

-- Grant SELECT permission on the view to anonymous users
GRANT SELECT ON public.public_blog_comments TO anon;
GRANT SELECT ON public.public_blog_comments TO authenticated;