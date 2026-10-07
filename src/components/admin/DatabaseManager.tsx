import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, RefreshCw, Database, MessageSquare, FileText, BookOpen, Mail, Calendar, Phone, Image, Users, ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DatabaseManagerProps {
  onNavigate: (section: string) => void;
}

const features = [
  { name: "testimonials", label: "Testimonials", icon: MessageSquare },
  { name: "case_studies", label: "Case Studies", icon: FileText },
  { name: "blog_posts", label: "Blog Posts", icon: BookOpen },
  { name: "whitepapers", label: "Whitepapers", icon: FileText },
  { name: "knowledge_base", label: "Knowledge Base", icon: BookOpen },
  { name: "email_subscriptions", label: "Email Subscriptions", icon: Mail },
  { name: "media_files", label: "Media Files", icon: Image },
  { name: "user_roles", label: "User Roles", icon: Users },
];

const DatabaseManager = ({ onNavigate }: DatabaseManagerProps) => {
  const [counts, setCounts] = useState<Record<string, number>>({});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [demoRequests, setDemoRequests] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contactSubmissions, setContactSubmissions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchAllData = async () => {
    setIsLoading(true);
    try {
      // Fetch counts for all features
      const countPromises = features.map(async (feature) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { count, error } = await supabase
          .from(feature.name as any)
          .select("*", { count: "exact", head: true });
        
        if (error) throw error;
        return { name: feature.name, count: count || 0 };
      });

      const countResults = await Promise.all(countPromises);
      const countsMap = countResults.reduce((acc, { name, count }) => {
        acc[name] = count;
        return acc;
      }, {} as Record<string, number>);
      setCounts(countsMap);

      // Fetch demo requests (limited to 5)
      const { data: demoData, error: demoError } = await supabase
        .from("demo_requests")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);

      if (demoError) throw demoError;
      setDemoRequests(demoData || []);

      // Fetch contact submissions (limited to 5)
      const { data: contactData, error: contactError } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);

      if (contactError) throw contactError;
      setContactSubmissions(contactData || []);
    } catch (error: unknown) {
      toast({
        title: "Error fetching data",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefresh = () => {
    fetchAllData();
    toast({
      title: "Refreshed",
      description: "Data has been refreshed",
    });
  };

  const updateDemoStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("demo_requests")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Status updated",
        description: "Demo request status has been updated",
      });
      fetchAllData();
    } catch (error: unknown) {
      toast({
        title: "Error updating status",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const updateContactStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Status updated",
        description: "Contact submission status has been updated",
      });
      fetchAllData();
    } catch (error: unknown) {
      toast({
        title: "Error updating status",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "contacted":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "new":
        return "bg-purple-100 text-purple-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5" />
          <div>
            <h2 className="text-2xl font-semibold">Database Overview</h2>
            <p className="text-sm text-muted-foreground">View and manage your database</p>
          </div>
        </div>
        <Button onClick={handleRefresh} variant="outline" size="sm">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <Card key={feature.name}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <feature.icon className="w-4 h-4 text-muted-foreground" />
                <CardTitle className="text-sm font-medium">{feature.label}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{counts[feature.name] || 0}</div>
              <p className="text-xs text-muted-foreground mt-1">Total records</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Demo Requests Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <div>
                <CardTitle>Demo Requests</CardTitle>
                <CardDescription>Recent {demoRequests.length} requests</CardDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("demo-requests")}
              className="gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {demoRequests.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No demo requests yet
            </div>
          ) : (
            <div className="border rounded-lg overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {demoRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.full_name}</TableCell>
                      <TableCell>{request.email}</TableCell>
                      <TableCell>{request.company || "-"}</TableCell>
                      <TableCell>{request.phone || "-"}</TableCell>
                      <TableCell>
                        <Select
                          value={request.status}
                          onValueChange={(value) => updateDemoStatus(request.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(request.created_at).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contact Submissions Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <div>
                <CardTitle>Contact Submissions</CardTitle>
                <CardDescription>Recent {contactSubmissions.length} submissions</CardDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("contact")}
              className="gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {contactSubmissions.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No contact submissions yet
            </div>
          ) : (
            <div className="border rounded-lg overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contactSubmissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium">{submission.full_name}</TableCell>
                      <TableCell>{submission.email}</TableCell>
                      <TableCell>{submission.organization || "-"}</TableCell>
                      <TableCell>{submission.phone}</TableCell>
                      <TableCell className="max-w-xs truncate">{submission.message || "-"}</TableCell>
                      <TableCell>
                        <Select
                          value={submission.status}
                          onValueChange={(value) => updateContactStatus(submission.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(submission.created_at).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DatabaseManager;
