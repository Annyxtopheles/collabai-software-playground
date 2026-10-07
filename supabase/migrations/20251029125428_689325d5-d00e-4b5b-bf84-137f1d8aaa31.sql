-- Drop the existing check constraint
ALTER TABLE public.media_files DROP CONSTRAINT IF EXISTS media_files_content_type_check;

-- Add new check constraint that includes 'media' as a valid value
ALTER TABLE public.media_files 
ADD CONSTRAINT media_files_content_type_check 
CHECK (content_type IN ('testimonials', 'case-studies', 'blog', 'whitepapers', 'knowledge-base', 'media'));