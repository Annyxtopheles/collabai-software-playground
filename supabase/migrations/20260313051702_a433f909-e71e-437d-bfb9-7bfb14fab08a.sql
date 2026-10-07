DROP POLICY "Users can view feedback for completed events" ON public.event_feedback;
CREATE POLICY "Authenticated users can view feedback for completed events"
ON public.event_feedback FOR SELECT TO authenticated
USING (
  EXISTS (SELECT 1 FROM events WHERE events.id = event_feedback.event_id AND events.status = 'completed'::event_status)
  OR has_role(auth.uid(), 'admin'::app_role)
);