CREATE OR REPLACE FUNCTION public.blog_post_word_counts()
RETURNS TABLE (id uuid, word_count integer)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT p.id,
         COALESCE(
           array_length(
             regexp_split_to_array(
               trim(regexp_replace(regexp_replace(p.content, '<[^>]*>', ' ', 'g'), '\s+', ' ', 'g')),
               ' '
             ),
             1
           ),
           0
         )::integer AS word_count
  FROM public.blog_posts p
  WHERE public.has_role(auth.uid(), 'admin'::app_role)
$$;

REVOKE ALL ON FUNCTION public.blog_post_word_counts() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.blog_post_word_counts() TO authenticated;
GRANT EXECUTE ON FUNCTION public.blog_post_word_counts() TO service_role;