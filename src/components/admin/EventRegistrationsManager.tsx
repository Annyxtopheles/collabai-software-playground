import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Search, Download, Mail, CheckCircle, XCircle } from "lucide-react";
import { format } from "date-fns";

interface Registration {
  id: string;
  event_id: string;
  email: string;
  full_name: string;
  phone: string;
  company: string;
  job_title: string;
  status: string;
  registered_at: string;
  events: {
    title: string;
    start_datetime: string;
  };
}

export default function EventRegistrationsManager() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [events, setEvents] = useState<Array<{ id: string; title: string }>>([]);

  useEffect(() => {
    fetchEvents();
    fetchRegistrations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("id, title")
        .order("start_datetime", { ascending: false });

      if (error) throw error;
      setEvents(data || []);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const fetchRegistrations = async () => {
    try {
      let query = supabase
        .from("event_registrations")
        .select(`
          *,
          events (title, start_datetime)
        `)
        .order("registered_at", { ascending: false });

      if (selectedEvent !== "all") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        query = query.eq("event_id", selectedEvent as any);
      }

      if (selectedStatus !== "all") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        query = query.eq("status", selectedStatus as any);
      }

      const { data, error } = await query;

      if (error) throw error;
      setRegistrations(data || []);
    } catch (error: unknown) {
      toast.error("Failed to fetch registrations");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRegistrations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEvent, selectedStatus]);

  const filteredRegistrations = registrations.filter(
    (reg) =>
      reg.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.company?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const updateRegistrationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("event_registrations")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .update({ status: status as any })
        .eq("id", id);

      if (error) throw error;
      toast.success(`Registration ${status}`);
      fetchRegistrations();
    } catch (error: unknown) {
      toast.error("Failed to update registration");
      console.error(error);
    }
  };

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Company",
      "Job Title",
      "Status",
      "Event",
      "Registered At",
    ];

    const rows = filteredRegistrations.map((reg) => [
      reg.full_name,
      reg.email,
      reg.phone || "",
      reg.company || "",
      reg.job_title || "",
      reg.status,
      reg.events?.title || "",
      format(new Date(reg.registered_at), "PPP p"),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `event-registrations-${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();

    toast.success("Registrations exported");
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      pending: "bg-yellow-500/10 text-yellow-600",
      confirmed: "bg-green-500/10 text-green-600",
      canceled: "bg-red-500/10 text-red-600",
      attended: "bg-blue-500/10 text-blue-600",
      no_show: "bg-gray-500/10 text-gray-600",
    };

    return (
      <Badge variant="outline" className={variants[status]}>
        {status.replace("_", " ")}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Event Registrations</h2>
        <Button onClick={exportToCSV}>
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search registrations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedEvent} onValueChange={setSelectedEvent}>
          <SelectTrigger className="w-full md:w-[250px]">
            <SelectValue placeholder="Filter by Event" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            {events.map((event) => (
              <SelectItem key={event.id} value={event.id}>
                {event.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="canceled">Canceled</SelectItem>
            <SelectItem value="attended">Attended</SelectItem>
            <SelectItem value="no_show">No Show</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filteredRegistrations.map((registration) => (
          <Card key={registration.id}>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold">{registration.full_name}</h3>
                    {getStatusBadge(registration.status)}
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      <strong>Email:</strong> {registration.email}
                    </p>
                    {registration.phone && (
                      <p>
                        <strong>Phone:</strong> {registration.phone}
                      </p>
                    )}
                    {registration.company && (
                      <p>
                        <strong>Company:</strong> {registration.company}
                      </p>
                    )}
                    {registration.job_title && (
                      <p>
                        <strong>Job Title:</strong> {registration.job_title}
                      </p>
                    )}
                    <p>
                      <strong>Event:</strong> {registration.events?.title}
                    </p>
                    <p>
                      <strong>Registered:</strong>{" "}
                      {format(new Date(registration.registered_at), "PPP p")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {registration.status === "pending" && (
                    <Button
                      size="sm"
                      onClick={() =>
                        updateRegistrationStatus(registration.id, "confirmed")
                      }
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Confirm
                    </Button>
                  )}
                  {registration.status === "confirmed" && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        updateRegistrationStatus(registration.id, "attended")
                      }
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Mark Attended
                    </Button>
                  )}
                  {registration.status !== "canceled" && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() =>
                        updateRegistrationStatus(registration.id, "canceled")
                      }
                    >
                      <XCircle className="mr-2 h-4 w-4" />
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredRegistrations.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              No registrations found
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
