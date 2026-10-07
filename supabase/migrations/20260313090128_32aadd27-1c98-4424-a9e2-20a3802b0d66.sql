
CREATE TABLE public.blog_charts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  chart_type text NOT NULL DEFAULT 'bar',
  data jsonb NOT NULL DEFAULT '[]'::jsonb,
  config jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_charts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view blog charts" ON public.blog_charts
  FOR SELECT TO public USING (true);

CREATE POLICY "Only admins can manage blog charts" ON public.blog_charts
  FOR ALL TO public USING (public.has_role(auth.uid(), 'admin'::app_role));
