import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Badge } from "@/components/ui/badge";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

interface CalendarEventItem {
  id: string;
  title: string;
  start_datetime: string;
  end_datetime: string;
  status: string;
}

interface EventCalendarViewProps {
  events: CalendarEventItem[];
  onEventClick: (event: CalendarEventItem) => void;
}

export function EventCalendarView({ events, onEventClick }: EventCalendarViewProps) {
  const calendarEvents = events.map((event) => ({
    id: event.id,
    title: event.title,
    start: new Date(event.start_datetime),
    end: new Date(event.end_datetime),
    resource: event,
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const eventStyleGetter = (event: any) => {
    const statusColors: Record<string, string> = {
      upcoming: "#3b82f6",
      live: "#10b981",
      completed: "#6b7280",
      canceled: "#ef4444",
    };

    return {
      style: {
        backgroundColor: statusColors[event.resource.status] || "#3b82f6",
        borderRadius: "4px",
        opacity: 0.8,
        color: "white",
        border: "0px",
        display: "block",
      },
    };
  };

  return (
    <div className="h-[700px] bg-card rounded-lg border p-4">
      <BigCalendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(event) => onEventClick(event.resource)}
        eventPropGetter={eventStyleGetter}
        views={["month", "week", "day", "agenda"]}
        defaultView="month"
        popup
        style={{ height: "100%" }}
      />
    </div>
  );
}
