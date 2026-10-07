-- Create enum for event status
CREATE TYPE event_status AS ENUM ('draft', 'upcoming', 'live', 'completed', 'canceled');

-- Create enum for event type
CREATE TYPE event_type AS ENUM ('webinar', 'workshop', 'conference', 'meetup', 'training');

-- Create enum for registration status
CREATE TYPE registration_status AS ENUM ('pending', 'confirmed', 'canceled', 'attended', 'no_show');

-- Create events table
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  agenda TEXT,
  start_datetime TIMESTAMPTZ NOT NULL,
  end_datetime TIMESTAMPTZ NOT NULL,
  timezone TEXT DEFAULT 'UTC',
  status event_status NOT NULL DEFAULT 'draft',
  event_type event_type NOT NULL DEFAULT 'webinar',
  meeting_link TEXT,
  recording_link TEXT,
  max_attendees INTEGER,
  current_attendees INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  sponsored BOOLEAN DEFAULT false,
  guest_registration_enabled BOOLEAN DEFAULT true,
  cover_image_url TEXT,
  created_by UUID REFERENCES auth.users(id),
  tags TEXT[]
);

-- Create event presenters table
CREATE TABLE public.event_presenters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  title TEXT,
  company TEXT,
  linkedin_url TEXT,
  sort_order INTEGER DEFAULT 0
);

-- Create event resources table
CREATE TABLE public.event_resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_type TEXT,
  resource_type TEXT CHECK (resource_type IN ('slides', 'document', 'video', 'other')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create event registrations table
CREATE TABLE public.event_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  job_title TEXT,
  status registration_status NOT NULL DEFAULT 'pending',
  registered_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  attended_at TIMESTAMPTZ,
  consent_gdpr BOOLEAN DEFAULT false,
  consent_marketing BOOLEAN DEFAULT false,
  UNIQUE(event_id, email)
);

-- Create event feedback table
CREATE TABLE public.event_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  registration_id UUID REFERENCES public.event_registrations(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  would_recommend BOOLEAN,
  topics_interest TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create event audit log table
CREATE TABLE public.event_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL,
  changes JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_presenters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_audit_log ENABLE ROW LEVEL SECURITY;

-- RLS Policies for events
CREATE POLICY "Anyone can view published events"
  ON public.events FOR SELECT
  USING (status IN ('upcoming', 'live', 'completed') OR has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage events"
  ON public.events FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for event_presenters
CREATE POLICY "Anyone can view presenters"
  ON public.event_presenters FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage presenters"
  ON public.event_presenters FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for event_resources
CREATE POLICY "Anyone can view resources for completed events"
  ON public.event_resources FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.events 
      WHERE events.id = event_resources.event_id 
      AND events.status = 'completed'
    )
    OR has_role(auth.uid(), 'admin')
  );

CREATE POLICY "Admins can manage resources"
  ON public.event_resources FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for event_registrations
CREATE POLICY "Users can view their own registrations"
  ON public.event_registrations FOR SELECT
  USING (
    auth.uid() = user_id 
    OR email = (SELECT email FROM auth.users WHERE id = auth.uid())
    OR has_role(auth.uid(), 'admin')
  );

CREATE POLICY "Anyone can register for events"
  ON public.event_registrations FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update their own registrations"
  ON public.event_registrations FOR UPDATE
  USING (
    auth.uid() = user_id 
    OR email = (SELECT email FROM auth.users WHERE id = auth.uid())
    OR has_role(auth.uid(), 'admin')
  );

CREATE POLICY "Admins can manage all registrations"
  ON public.event_registrations FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for event_feedback
CREATE POLICY "Users can view feedback for completed events"
  ON public.event_feedback FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.events 
      WHERE events.id = event_feedback.event_id 
      AND events.status = 'completed'
    )
    OR has_role(auth.uid(), 'admin')
  );

CREATE POLICY "Registered users can submit feedback"
  ON public.event_feedback FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.event_registrations 
      WHERE event_registrations.event_id = event_feedback.event_id
      AND (event_registrations.user_id = auth.uid() OR event_registrations.id = event_feedback.registration_id)
    )
  );

CREATE POLICY "Admins can manage feedback"
  ON public.event_feedback FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for event_audit_log
CREATE POLICY "Admins can view audit log"
  ON public.event_audit_log FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "System can insert audit log"
  ON public.event_audit_log FOR INSERT
  WITH CHECK (true);

-- Create function to update event attendee count
CREATE OR REPLACE FUNCTION update_event_attendee_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' AND NEW.status = 'confirmed' THEN
    UPDATE public.events 
    SET current_attendees = current_attendees + 1 
    WHERE id = NEW.event_id;
  ELSIF TG_OP = 'UPDATE' THEN
    IF OLD.status != 'confirmed' AND NEW.status = 'confirmed' THEN
      UPDATE public.events 
      SET current_attendees = current_attendees + 1 
      WHERE id = NEW.event_id;
    ELSIF OLD.status = 'confirmed' AND NEW.status != 'confirmed' THEN
      UPDATE public.events 
      SET current_attendees = GREATEST(current_attendees - 1, 0) 
      WHERE id = NEW.event_id;
    END IF;
  ELSIF TG_OP = 'DELETE' AND OLD.status = 'confirmed' THEN
    UPDATE public.events 
    SET current_attendees = GREATEST(current_attendees - 1, 0) 
    WHERE id = OLD.event_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for attendee count
CREATE TRIGGER update_attendee_count_trigger
AFTER INSERT OR UPDATE OR DELETE ON public.event_registrations
FOR EACH ROW EXECUTE FUNCTION update_event_attendee_count();

-- Create function to log event changes
CREATE OR REPLACE FUNCTION log_event_changes()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.event_audit_log (event_id, user_id, action, changes)
  VALUES (
    COALESCE(NEW.id, OLD.id),
    auth.uid(),
    TG_OP,
    jsonb_build_object('old', to_jsonb(OLD), 'new', to_jsonb(NEW))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for audit log
CREATE TRIGGER event_audit_trigger
AFTER INSERT OR UPDATE OR DELETE ON public.events
FOR EACH ROW EXECUTE FUNCTION log_event_changes();

-- Create trigger for updated_at
CREATE TRIGGER update_events_updated_at
BEFORE UPDATE ON public.events
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_events_status ON public.events(status);
CREATE INDEX idx_events_start_datetime ON public.events(start_datetime);
CREATE INDEX idx_events_slug ON public.events(slug);
CREATE INDEX idx_event_registrations_event_id ON public.event_registrations(event_id);
CREATE INDEX idx_event_registrations_user_id ON public.event_registrations(user_id);
CREATE INDEX idx_event_registrations_email ON public.event_registrations(email);