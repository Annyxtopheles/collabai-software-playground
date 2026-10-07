-- Drop the unused public_blog_comments view
-- This view has no RLS policies and is not used in the application
-- All blog comment functionality is handled through the blog_comments table which has proper RLS
DROP VIEW IF EXISTS public.public_blog_comments;