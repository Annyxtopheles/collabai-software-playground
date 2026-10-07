-- Create a public view of blog comments that excludes email addresses
CREATE OR REPLACE VIEW public.public_blog_comments AS
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

-- Enable RLS on the view
ALTER VIEW public.public_blog_comments SET (security_invoker = on);

-- Create RLS policy for public access to the view (no authentication required)
CREATE POLICY "Anyone can view approved comments via public view"
ON public.blog_comments
FOR SELECT
TO anon, authenticated
USING (
  is_approved = true 
  AND auth.uid() IS NULL  -- Only apply this policy for anonymous users
);

-- Update the existing policy name to be more accurate
DROP POLICY IF EXISTS "Anyone can view approved comments (no email)" ON public.blog_comments;

-- Keep the existing admin policy unchanged
-- Admins can still access all comments including emails through the blog_comments table directly