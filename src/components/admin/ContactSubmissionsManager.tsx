import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Eye, EyeOff } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactSubmission {
  id: string;
  full_name: string;
  organization: string | null;
  email: string;
  phone: string;
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

const ContactSubmissionsManager = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const fetchSubmissions = async () => {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch contact submissions",
        variant: "destructive",
      });
    } else {
      setSubmissions(data || []);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('contact_submissions')
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
      fetchSubmissions();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Contact Submissions</h2>
        <p className="text-sm text-slate-secondary">Total: {submissions.length}</p>
      </div>

      <div className="grid gap-4">
        {submissions.map((submission) => {
          const revealed = revealedIds.has(submission.id);
          return (
            <Card key={submission.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{submission.full_name}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${getStatusColor(submission.status)}`}>
                        {submission.status}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleReveal(submission.id)}
                        className="ml-1 h-7 w-7 p-0"
                        title={revealed ? "Mask sensitive data" : "Reveal sensitive data"}
                      >
                        {revealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="text-sm text-slate-secondary">
                      {revealed ? submission.email : maskEmail(submission.email)}
                    </p>
                    <p className="text-sm text-slate-secondary">
                      {revealed ? submission.phone : maskPhone(submission.phone)}
                    </p>
                    {submission.organization && (
                      <p className="text-sm text-slate-secondary">{submission.organization}</p>
                    )}
                    {submission.message && <p className="mt-2 text-sm">{submission.message}</p>}
                    <p className="text-sm text-slate-secondary mt-2">
                      {format(new Date(submission.created_at), 'PPP p')}
                    </p>
                  </div>
                  <div className="ml-4">
                    <Select value={submission.status} onValueChange={(value) => updateStatus(submission.id, value)}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
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

export default ContactSubmissionsManager;
