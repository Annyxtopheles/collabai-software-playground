-- Create blog_categories table
CREATE TABLE public.blog_categories (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL UNIQUE,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;

-- Anyone can view categories
CREATE POLICY "Anyone can view blog categories"
ON public.blog_categories
FOR SELECT
USING (true);

-- Only admins can manage categories
CREATE POLICY "Only admins can manage blog categories"
ON public.blog_categories
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Insert default categories
INSERT INTO public.blog_categories (name) VALUES
  ('AI & Automation'),
  ('Industry Insights'),
  ('Product Updates'),
  ('Case Studies'),
  ('Best Practices'),
  ('Technology')
ON CONFLICT (name) DO NOTHING;