import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  Users,
  Video,
  Download,
  ExternalLink,
  FileText,
  Star,
} from "lucide-react";
import { format } from "date-fns";
import { EventRegistrationForm } from "./EventRegistrationForm";
import { EventFeedbackForm } from "./EventFeedbackForm";
import { toast } from "sonner";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface EventDetailModalProps {
  event: any;
  open: boolean;
  onClose: () => void;
}

export function EventDetailModal({ event, open, onClose }: EventDetailModalProps) {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const { data: presenters = [] } = useQuery({
    queryKey: ["event-presenters", event.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("event_presenters")
        .select("*")
        .eq("event_id", event.id)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
    enabled: open,
  });

  const { data: resources = [] } = useQuery({
    queryKey: ["event-resources", event.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("event_resources")
        .select("*")
        .eq("event_id", event.id);
      if (error) throw error;
      return data;
    },
    enabled: open && event.status === "completed",
  });

  const { data: registration } = useQuery({
    queryKey: ["my-registration", event.id],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;

      const { data, error } = await supabase
        .from("event_registrations")
        .select("*")
        .eq("event_id", event.id)
        .eq("user_id", user.id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: open,
  });

  const handleAddToCalendar = (type: "google" | "outlook" | "ical") => {
    const eventTitle = encodeURIComponent(event.title);
    const eventDescription = encodeURIComponent(event.description || "");
    const startDate = new Date(event.start_datetime).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const endDate = new Date(event.end_datetime).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    switch (type) {
      case "google":
        window.open(
          `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDescription}&dates=${startDate}/${endDate}`,
          "_blank"
        );
        break;
      case "outlook":
        window.open(
          `https://outlook.live.com/calendar/0/deeplink/compose?subject=${eventTitle}&body=${eventDescription}&startdt=${startDate}&enddt=${endDate}`,
          "_blank"
        );
        break;
      case "ical": {
        const icalContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.title}\nDESCRIPTION:${event.description || ""}\nDTSTART:${startDate}\nDTEND:${endDate}\nEND:VEVENT\nEND:VCALENDAR`;
        const blob = new Blob([icalContent], { type: "text/calendar" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${event.slug}.ics`;
        link.click();
        break;
      }
    }
    toast.success("Event added to calendar");
  };

  const isEventFull = event.max_attendees && event.current_attendees >= event.max_attendees;
  const canRegister = event.status === "upcoming" && !isEventFull && !registration;
  const canProvideFeedback = event.status === "completed" && registration && !showFeedback;

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">{event.title}</DialogTitle>
        </DialogHeader>

        {event.cover_image_url && (
          <div className="relative h-64 -mx-6 -mt-4 mb-6">
            <img
              src={event.cover_image_url}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="space-y-6">
          {/* Event Info */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{format(new Date(event.start_datetime), "MMMM dd, yyyy")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>
                {format(new Date(event.start_datetime), "h:mm a")} -{" "}
                {format(new Date(event.end_datetime), "h:mm a")}
              </span>
            </div>
            {event.max_attendees && (
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>
                  {event.current_attendees}/{event.max_attendees} registered
                </span>
              </div>
            )}
          </div>

          {/* Status & Type */}
          <div className="flex gap-2">
            <Badge>{event.event_type}</Badge>
            <Badge variant="outline">{event.status}</Badge>
            {event.featured && <Badge className="bg-yellow-500">Featured</Badge>}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            {canRegister && !showRegistration && (
              <Button onClick={() => setShowRegistration(true)} size="lg">
                Register Now
              </Button>
            )}
            {registration && event.status === "upcoming" && event.meeting_link && (
              <Button asChild size="lg">
                <a href={event.meeting_link} target="_blank" rel="noopener noreferrer">
                  <Video className="mr-2 h-4 w-4" />
                  Join Event
                </a>
              </Button>
            )}
            {event.status === "completed" && event.recording_link && (
              <Button asChild variant="secondary" size="lg">
                <a href={event.recording_link} target="_blank" rel="noopener noreferrer">
                  <Video className="mr-2 h-4 w-4" />
                  Watch Recording
                </a>
              </Button>
            )}
            {canProvideFeedback && (
              <Button variant="outline" onClick={() => setShowFeedback(true)}>
                <Star className="mr-2 h-4 w-4" />
                Share Feedback
              </Button>
            )}
            <Button
              variant="outline"
              onClick={() => handleAddToCalendar("google")}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Add to Calendar
            </Button>
          </div>

          {showRegistration && (
            <EventRegistrationForm
              event={event}
              onSuccess={() => {
                setShowRegistration(false);
                toast.success("Registration successful!");
              }}
              onCancel={() => setShowRegistration(false)}
            />
          )}

          {showFeedback && (
            <EventFeedbackForm
              event={event}
              registrationId={registration?.id}
              onSuccess={() => {
                setShowFeedback(false);
                toast.success("Thank you for your feedback!");
              }}
              onCancel={() => setShowFeedback(false)}
            />
          )}

          {/* Tabs */}
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="agenda">Agenda</TabsTrigger>
              <TabsTrigger value="speakers">Speakers</TabsTrigger>
              {event.status === "completed" && (
                <TabsTrigger value="resources">Resources</TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="details" className="space-y-4 mt-6">
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">{event.description}</p>
              </div>
              {event.tags && event.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4">
                  {event.tags.map((tag: string, idx: number) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="agenda" className="mt-6">
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-muted-foreground">
                  {event.agenda || "Agenda will be published soon."}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="speakers" className="space-y-6 mt-6">
              {presenters.length === 0 ? (
                <p className="text-muted-foreground">Speakers will be announced soon.</p>
              ) : (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                presenters.map((presenter: any) => (
                  <div key={presenter.id} className="flex gap-4 p-4 border rounded-lg">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={presenter.avatar_url} />
                      <AvatarFallback>
                        {presenter.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div>
                        <h4 className="font-semibold">{presenter.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {presenter.title}
                          {presenter.company && ` at ${presenter.company}`}
                        </p>
                      </div>
                      {presenter.bio && (
                        <p className="text-sm text-muted-foreground">{presenter.bio}</p>
                      )}
                      {presenter.linkedin_url && (
                        <Button variant="link" asChild className="p-0 h-auto">
                          <a
                            href={presenter.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View LinkedIn Profile
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </TabsContent>

            {event.status === "completed" && (
              <TabsContent value="resources" className="space-y-4 mt-6">
                {resources.length === 0 ? (
                  <p className="text-muted-foreground">No resources available yet.</p>
                ) : (
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  resources.map((resource: any) => (
                    <div
                      key={resource.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <h4 className="font-medium">{resource.title}</h4>
                          {resource.description && (
                            <p className="text-sm text-muted-foreground">
                              {resource.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={resource.file_url} download>
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  ))
                )}
              </TabsContent>
            )}
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
