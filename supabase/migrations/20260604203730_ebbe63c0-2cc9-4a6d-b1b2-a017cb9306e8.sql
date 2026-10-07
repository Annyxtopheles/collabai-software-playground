
-- Lock down event_audit_log: trigger is SECURITY DEFINER, no client inserts needed
DROP POLICY IF EXISTS "System can insert audit log" ON public.event_audit_log;

-- Tighten event_feedback insert: require authenticated user that owns the registration
DROP POLICY IF EXISTS "Registered users can submit feedback" ON public.event_feedback;
CREATE POLICY "Registered users can submit feedback"
ON public.event_feedback
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL
  AND EXISTS (
    SELECT 1 FROM public.event_registrations er
    WHERE er.event_id = event_feedback.event_id
      AND er.user_id = auth.uid()
      AND (event_feedback.registration_id IS NULL OR er.id = event_feedback.registration_id)
  )
);

-- Make ai_readiness_reports explicit: admins only via Data API; edge functions use service role
CREATE POLICY "Admins can view ai readiness reports"
ON public.ai_readiness_reports
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Revoke EXECUTE on SECURITY DEFINER trigger/helper functions from anon/authenticated
-- (these are only invoked by triggers / the server)
REVOKE EXECUTE ON FUNCTION public.update_event_attendee_count() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.log_event_changes() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.auto_assign_admin_role() FROM anon, authenticated, PUBLIC;

-- Prevent enumerating all files in the public media-files bucket via list();
-- direct public URLs continue to work because the bucket itself is public.
DROP POLICY IF EXISTS "Anyone can view media files" ON storage.objects;
