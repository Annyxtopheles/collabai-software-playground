-- Add SELECT policy for public to view approved comments only
-- This prevents unauthorized access to unapproved comments containing email addresses
CREATE POLICY "Public can view approved comments"
ON public.blog_comments
FOR SELECT
TO public
USING (is_approved = true);