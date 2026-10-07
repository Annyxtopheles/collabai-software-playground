import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Search, Filter, Video, Clock, Users, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format, isPast, isFuture, isToday } from "date-fns";
import { EventDetailModal } from "@/components/events/EventDetailModal";
import { EventCalendarView } from "@/components/events/EventCalendarView";
import PageSeoHead from "@/components/PageSeoHead";

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  start_datetime: string;
  end_datetime: string;
  status: string;
  event_type: string;
  meeting_link: string;
  max_attendees: number;
  current_attendees: number;
  featured: boolean;
  sponsored: boolean;
  cover_image_url: string;
  tags: string[];
}

export default function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");

  const { data: events = [], isLoading } = useQuery({
    queryKey: ["events", selectedType, selectedStatus],
    queryFn: async () => {
      let query = supabase
        .from("events")
        .select("*")
        .order("start_datetime", { ascending: true });

      if (selectedType !== "all") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        query = query.eq("event_type", selectedType as any);
      }

      if (selectedStatus !== "all") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        query = query.eq("status", selectedStatus as any);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as Event[];
    },
  });

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const upcomingEvents = filteredEvents.filter((e) =>
    isFuture(new Date(e.start_datetime)) || isToday(new Date(e.start_datetime))
  );
  const pastEvents = filteredEvents.filter((e) =>
    isPast(new Date(e.start_datetime)) && !isToday(new Date(e.start_datetime))
  );
  const featuredEvents = filteredEvents.filter((e) => e.featured);

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      upcoming: "bg-secondary/10 text-secondary border-secondary/20",
      live: "bg-accent/10 text-accent-foreground border-accent/20 animate-pulse",
      completed: "bg-muted text-muted-foreground border-border",
      canceled: "bg-destructive/10 text-destructive border-destructive/20",
    };
    return (
      <Badge variant="outline" className={variants[status] || ""}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const EventCard = ({ event }: { event: Event }) => (
    <div
      onClick={() => setSelectedEvent(event)}
      className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-secondary/50 transition-all duration-300 cursor-pointer hover:shadow-lg"
    >
      {event.cover_image_url && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.cover_image_url}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            {event.featured && (
              <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
            )}
            {event.sponsored && (
              <Badge className="bg-accent text-accent-foreground">Sponsored</Badge>
            )}
          </div>
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-secondary transition-colors">
              {event.title}
            </h3>
            {getStatusBadge(event.status)}
          </div>
          <Badge variant="secondary">{event.event_type}</Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {format(new Date(event.start_datetime), "MMM dd, yyyy")}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {format(new Date(event.start_datetime), "h:mm a")}
          </div>
          {event.max_attendees && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {event.current_attendees}/{event.max_attendees}
            </div>
          )}
        </div>

        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {event.tags.slice(0, 3).map((tag, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <PageSeoHead title="Events & Webinars – CollabAI" description="Join CollabAI webinars, workshops, and live events. Learn about enterprise AI deployment, security best practices, and industry-specific solutions." canonicalPath="/events" />
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-secondary/5 to-transparent">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-foreground">Webinars & Events</h1>
            <p className="text-xl text-muted-foreground">
              Join our expert-led webinars and events to learn, network, and grow
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="webinar">Webinar</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="conference">Conference</SelectItem>
                <SelectItem value="meetup">Meetup</SelectItem>
                <SelectItem value="training">Training</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="live">Live</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <Filter className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "calendar" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("calendar")}
              >
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* View Content */}
        {viewMode === "calendar" ? (
        <EventCalendarView events={filteredEvents} onEventClick={(event) => setSelectedEvent(event as Event)} />
        ) : (
          <Tabs defaultValue="upcoming" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="space-y-8">
              {isLoading ? (
                <div className="text-center py-12">Loading events...</div>
              ) : featuredEvents.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No featured events found
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-8">
              {isLoading ? (
                <div className="text-center py-12">Loading events...</div>
              ) : upcomingEvents.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No upcoming events found
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              {isLoading ? (
                <div className="text-center py-12">Loading events...</div>
              ) : pastEvents.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No past events found
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        )}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          open={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
