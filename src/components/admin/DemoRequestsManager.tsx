import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Eye, EyeOff } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DemoRequest {
  id: string;
  full_name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

const maskEmail = (email: string): string => {
  const [local, domain] = email.split("@");
  if (!domain) return "***";
  const maskedLocal = local.length <= 2 ? "*".repeat(local.length) : local[0] + "*".repeat(Math.min(local.length - 2, 5)) + local[local.length - 1];
  return `${maskedLocal}@${domain}`;
};

const maskPhone = (phone: string): string => {
  if (phone.length <= 4) return "***";
  return "*".repeat(phone.length - 4) + phone.slice(-4);
};

const DemoRequestsManager = () => {
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  useEffect(() => {
    fetchRequests();
  }, []);

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from('demo_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch demo requests",
        variant: "destructive",
      });
    } else {
      setRequests(data || []);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('demo_requests')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    } else {
      toast({ title: "Success", description: "Status updated" });
      fetchRequests();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'contacted': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Demo Requests</h2>
        <p className="text-sm text-slate-secondary">Total: {requests.length}</p>
      </div>

      <div className="grid gap-4">
        {requests.map((request) => {
          const revealed = revealedIds.has(request.id);
          return (
            <Card key={request.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{request.full_name}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleReveal(request.id)}
                        className="ml-1 h-7 w-7 p-0"
                        title={revealed ? "Mask sensitive data" : "Reveal sensitive data"}
                      >
                        {revealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="text-sm text-slate-secondary">
                      {revealed ? request.email : maskEmail(request.email)}
                    </p>
                    {request.company && (
                      <p className="text-sm text-slate-secondary">{request.company}</p>
                    )}
                    {request.phone && (
                      <p className="text-sm text-slate-secondary">
                        {revealed ? request.phone : maskPhone(request.phone)}
                      </p>
                    )}
                    {request.message && <p className="mt-2 text-sm">{request.message}</p>}
                    <p className="text-sm text-slate-secondary mt-2">
                      {format(new Date(request.created_at), 'PPP p')}
                    </p>
                  </div>
                  <div className="ml-4">
                    <Select value={request.status} onValueChange={(value) => updateStatus(request.id, value)}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DemoRequestsManager;
