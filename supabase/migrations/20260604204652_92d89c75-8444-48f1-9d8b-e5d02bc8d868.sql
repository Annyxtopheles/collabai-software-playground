-- Tighten event_feedback SELECT to row owner + admins only
DROP POLICY IF EXISTS "Authenticated users can view feedback for completed events" ON public.event_feedback;

CREATE POLICY "Users view own feedback or admins view all"
ON public.event_feedback
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id
  OR public.has_role(auth.uid(), 'admin'::app_role)
);

-- Add admin UPDATE policy on media-files bucket for metadata edits
CREATE POLICY "Admins can update media-files"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'media-files' AND public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (bucket_id = 'media-files' AND public.has_role(auth.uid(), 'admin'::app_role));