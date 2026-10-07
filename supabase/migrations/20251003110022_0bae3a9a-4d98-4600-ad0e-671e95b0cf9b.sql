-- Create media files table
CREATE TABLE IF NOT EXISTS public.media_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_url TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('testimonials', 'case-studies', 'blog', 'whitepapers', 'knowledge-base')),
  mime_type TEXT,
  file_size BIGINT,
  uploaded_by UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.media_files ENABLE ROW LEVEL SECURITY;

-- Create policies using user_roles table
CREATE POLICY "Admin users can view all media files"
  ON public.media_files
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

CREATE POLICY "Admin users can insert media files"
  ON public.media_files
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

CREATE POLICY "Admin users can update media files"
  ON public.media_files
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

CREATE POLICY "Admin users can delete media files"
  ON public.media_files
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

-- Create storage bucket for media files
INSERT INTO storage.buckets (id, name, public)
VALUES ('media-files', 'media-files', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for media files
CREATE POLICY "Admin users can upload media files"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'media-files' AND
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

CREATE POLICY "Anyone can view media files"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'media-files');

CREATE POLICY "Admin users can delete media files from storage"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'media-files' AND
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );