-- Drop the unused public_blog_comments view
-- This view is not used in the codebase and creates security ambiguity
-- The main blog_comments table already has proper RLS policies
DROP VIEW IF EXISTS public.public_blog_comments CASCADE;