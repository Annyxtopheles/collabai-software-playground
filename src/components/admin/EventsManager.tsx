import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Plus, Edit, Trash2, Calendar, Users } from "lucide-react";
import { format } from "date-fns";

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  agenda: string;
  start_datetime: string;
  end_datetime: string;
  timezone: string;
  status: string;
  event_type: string;
  meeting_link: string;
  recording_link: string;
  max_attendees: number;
  current_attendees: number;
  featured: boolean;
  sponsored: boolean;
  guest_registration_enabled: boolean;
  cover_image_url: string;
  tags: string[];
}

export default function EventsManager() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Event>>({
    title: "",
    slug: "",
    description: "",
    agenda: "",
    start_datetime: "",
    end_datetime: "",
    timezone: "UTC",
    status: "draft",
    event_type: "webinar",
    meeting_link: "",
    recording_link: "",
    max_attendees: 100,
    featured: false,
    sponsored: false,
    guest_registration_enabled: true,
    cover_image_url: "",
    tags: [],
  });

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("start_datetime", { ascending: false });

      if (error) throw error;
      setEvents(data || []);
    } catch (error: unknown) {
      toast.error("Failed to fetch events");
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const eventData = {
        ...formData,
        created_by: user.id,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      if (editingId) {
        const { error } = await supabase
          .from("events")
          .update(eventData)
          .eq("id", editingId);

        if (error) throw error;
        toast.success("Event updated successfully");
      } else {
        const { error } = await supabase.from("events").insert([eventData]);

        if (error) throw error;
        toast.success("Event created successfully");
      }

      fetchEvents();
      resetForm();
    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : "Failed to save event");
      console.error(error);
    }
  };

  const handleEdit = (event: Event) => {
    setFormData(event);
    setEditingId(event.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      const { error } = await supabase.from("events").delete().eq("id", id);

      if (error) throw error;
      toast.success("Event deleted successfully");
      fetchEvents();
    } catch (error: unknown) {
      toast.error("Failed to delete event");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      description: "",
      agenda: "",
      start_datetime: "",
      end_datetime: "",
      timezone: "UTC",
      status: "draft",
      event_type: "webinar",
      meeting_link: "",
      recording_link: "",
      max_attendees: 100,
      featured: false,
      sponsored: false,
      guest_registration_enabled: true,
      cover_image_url: "",
      tags: [],
    });
    setEditingId(null);
    setIsEditing(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Events Management</h2>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Event
          </Button>
        )}
      </div>

      {isEditing && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Event" : "Create New Event"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        title: e.target.value,
                        slug: generateSlug(e.target.value),
                      });
                    }}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData({ ...formData, slug: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="agenda">Agenda</Label>
                <Textarea
                  id="agenda"
                  value={formData.agenda}
                  onChange={(e) =>
                    setFormData({ ...formData, agenda: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start_datetime">Start Date & Time *</Label>
                  <Input
                    id="start_datetime"
                    type="datetime-local"
                    value={formData.start_datetime}
                    onChange={(e) =>
                      setFormData({ ...formData, start_datetime: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end_datetime">End Date & Time *</Label>
                  <Input
                    id="end_datetime"
                    type="datetime-local"
                    value={formData.end_datetime}
                    onChange={(e) =>
                      setFormData({ ...formData, end_datetime: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="event_type">Event Type *</Label>
                  <Select
                    value={formData.event_type}
                    onValueChange={(value) =>
                      setFormData({ ...formData, event_type: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="webinar">Webinar</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="meetup">Meetup</SelectItem>
                      <SelectItem value="training">Training</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) =>
                      setFormData({ ...formData, status: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="live">Live</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="canceled">Canceled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="max_attendees">Max Attendees</Label>
                  <Input
                    id="max_attendees"
                    type="number"
                    value={formData.max_attendees}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        max_attendees: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="meeting_link">Meeting Link</Label>
                  <Input
                    id="meeting_link"
                    type="url"
                    value={formData.meeting_link}
                    onChange={(e) =>
                      setFormData({ ...formData, meeting_link: e.target.value })
                    }
                    placeholder="https://zoom.us/..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recording_link">Recording Link</Label>
                  <Input
                    id="recording_link"
                    type="url"
                    value={formData.recording_link}
                    onChange={(e) =>
                      setFormData({ ...formData, recording_link: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cover_image_url">Cover Image URL</Label>
                <Input
                  id="cover_image_url"
                  type="url"
                  value={formData.cover_image_url}
                  onChange={(e) =>
                    setFormData({ ...formData, cover_image_url: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags?.join(", ")}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tags: e.target.value.split(",").map((t) => t.trim()),
                    })
                  }
                  placeholder="AI, Technology, Business"
                />
              </div>

              <div className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, featured: checked })
                    }
                  />
                  <Label htmlFor="featured">Featured Event</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="sponsored"
                    checked={formData.sponsored}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, sponsored: checked })
                    }
                  />
                  <Label htmlFor="sponsored">Sponsored Event</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="guest_registration"
                    checked={formData.guest_registration_enabled}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, guest_registration_enabled: checked })
                    }
                  />
                  <Label htmlFor="guest_registration">Allow Guest Registration</Label>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit">
                  {editingId ? "Update Event" : "Create Event"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {events.map((event) => (
          <Card key={event.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">
                      {event.status}
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-secondary">
                      {event.event_type}
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(event.start_datetime), "PPP p")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {event.current_attendees}
                      {event.max_attendees && `/${event.max_attendees}`}
                    </div>
                  </div>
                  {event.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEdit(event)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDelete(event.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
