-- Create blog_comments table for storing comments on blog posts
CREATE TABLE public.blog_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_post_id UUID NOT NULL REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT,
  comment TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;

-- Create policies for comments
CREATE POLICY "Anyone can view approved comments" 
ON public.blog_comments 
FOR SELECT 
USING (is_approved = true OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Anyone can submit comments" 
ON public.blog_comments 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only admins can manage comments" 
ON public.blog_comments 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for better performance
CREATE INDEX idx_blog_comments_post_id ON public.blog_comments(blog_post_id);
CREATE INDEX idx_blog_comments_approved ON public.blog_comments(is_approved);