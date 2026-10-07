-- Step 1: Update the RLS policy to restrict direct table access to admins only
DROP POLICY IF EXISTS "Anyone can view approved comments" ON public.blog_comments;

CREATE POLICY "Only admins can view all blog comments"
ON public.blog_comments
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Step 2: Create a secure public view that excludes email addresses
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

-- Step 3: Grant public access to the view
GRANT SELECT ON public.public_blog_comments TO anon;
GRANT SELECT ON public.public_blog_comments TO authenticated;

-- Step 4: Add helpful comment explaining the security measure
COMMENT ON VIEW public.public_blog_comments IS 'Public view of approved blog comments without email addresses to protect commenter privacy and prevent spam harvesting';
COMMENT ON COLUMN public.blog_comments.email IS 'Email addresses are only visible to admins for moderation purposes and are never exposed publicly';