-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Testimonials table
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT,
  company TEXT,
  content TEXT NOT NULL,
  avatar_url TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Case Studies table
CREATE TABLE public.case_studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  company TEXT NOT NULL,
  industry TEXT,
  challenge TEXT,
  solution TEXT,
  results TEXT,
  image_url TEXT,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Blog posts table
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  image_url TEXT,
  category TEXT,
  tags TEXT[],
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Whitepapers table
CREATE TABLE public.whitepapers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  file_url TEXT,
  cover_image_url TEXT,
  category TEXT,
  is_published BOOLEAN DEFAULT false,
  download_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.whitepapers ENABLE ROW LEVEL SECURITY;

-- Knowledge Base articles table
CREATE TABLE public.knowledge_base (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  category TEXT,
  tags TEXT[],
  is_published BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.knowledge_base ENABLE ROW LEVEL SECURITY;

-- Email subscriptions table
CREATE TABLE public.email_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  unsubscribed_at TIMESTAMPTZ
);

ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Try demo requests table
CREATE TABLE public.demo_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  organization TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Only admins can manage roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for testimonials
CREATE POLICY "Anyone can view published testimonials"
  ON public.testimonials FOR SELECT
  USING (is_published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can manage testimonials"
  ON public.testimonials FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for case_studies
CREATE POLICY "Anyone can view published case studies"
  ON public.case_studies FOR SELECT
  USING (is_published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can manage case studies"
  ON public.case_studies FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for blog_posts
CREATE POLICY "Anyone can view published blog posts"
  ON public.blog_posts FOR SELECT
  USING (is_published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can manage blog posts"
  ON public.blog_posts FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for whitepapers
CREATE POLICY "Anyone can view published whitepapers"
  ON public.whitepapers FOR SELECT
  USING (is_published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can manage whitepapers"
  ON public.whitepapers FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for knowledge_base
CREATE POLICY "Anyone can view published knowledge base articles"
  ON public.knowledge_base FOR SELECT
  USING (is_published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can manage knowledge base"
  ON public.knowledge_base FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for email_subscriptions
CREATE POLICY "Only admins can view subscriptions"
  ON public.email_subscriptions FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can subscribe"
  ON public.email_subscriptions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can manage subscriptions"
  ON public.email_subscriptions FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for demo_requests
CREATE POLICY "Only admins can view demo requests"
  ON public.demo_requests FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can submit demo requests"
  ON public.demo_requests FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can update demo requests"
  ON public.demo_requests FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for contact_submissions
CREATE POLICY "Only admins can view contact submissions"
  ON public.contact_submissions FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can submit contact forms"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can update contact submissions"
  ON public.contact_submissions FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

-- Create triggers for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_case_studies_updated_at
  BEFORE UPDATE ON public.case_studies
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_whitepapers_updated_at
  BEFORE UPDATE ON public.whitepapers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_knowledge_base_updated_at
  BEFORE UPDATE ON public.knowledge_base
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();