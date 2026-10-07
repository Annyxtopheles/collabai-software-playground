
-- Add group column to media_files
ALTER TABLE public.media_files ADD COLUMN "group" text DEFAULT 'uncategorized';

-- Create site_images table
CREATE TABLE public.site_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_key text UNIQUE NOT NULL,
  label text NOT NULL,
  image_url text NOT NULL,
  "group" text DEFAULT 'landing-page',
  page text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_images ENABLE ROW LEVEL SECURITY;

-- Public can read site images
CREATE POLICY "Anyone can view site images"
ON public.site_images
FOR SELECT
TO public
USING (true);

-- Only admins can manage site images
CREATE POLICY "Only admins can manage site images"
ON public.site_images
FOR ALL
TO public
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Trigger for updated_at
CREATE TRIGGER update_site_images_updated_at
  BEFORE UPDATE ON public.site_images
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
