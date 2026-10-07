import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import PageSeoHead from "@/components/PageSeoHead";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { 
  LogOut, 
  Loader2, 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  Mail, 
  Calendar, 
  Phone, 
  Image,
  MessagesSquare,
  BarChart3
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import TestimonialsManager from "@/components/admin/TestimonialsManager";
import CaseStudiesManager from "@/components/admin/CaseStudiesManager";
import BlogManager from "@/components/admin/BlogManager";
import BlogCommentsManager from "@/components/admin/BlogCommentsManager";
import WhitepapersManager from "@/components/admin/WhitepapersManager";
import KnowledgeBaseManager from "@/components/admin/KnowledgeBaseManager";
import EmailSubscriptionsManager from "@/components/admin/EmailSubscriptionsManager";
import DemoRequestsManager from "@/components/admin/DemoRequestsManager";
import ContactSubmissionsManager from "@/components/admin/ContactSubmissionsManager";
import MediaManager from "@/components/admin/MediaManager";
import DatabaseManager from "@/components/admin/DatabaseManager";
import EventsManager from "@/components/admin/EventsManager";
import EventRegistrationsManager from "@/components/admin/EventRegistrationsManager";
import SiteImagesManager from "@/components/admin/SiteImagesManager";
import BlogAnalyticsDashboard from "@/components/admin/BlogAnalyticsDashboard";

type MenuItem = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
};

const menuItems: MenuItem[] = [
  { title: "Dashboard", icon: LayoutDashboard, value: "dashboard" },
  { title: "Testimonials", icon: MessageSquare, value: "testimonials" },
  { title: "Case Studies", icon: FileText, value: "case-studies" },
  { title: "Blog", icon: BookOpen, value: "blog" },
  { title: "Blog Comments", icon: MessagesSquare, value: "blog-comments" },
  { title: "Whitepapers", icon: FileText, value: "whitepapers" },
  { title: "Knowledge Base", icon: HelpCircle, value: "knowledge-base" },
  { title: "Media", icon: Image, value: "media" },
  { title: "Site Images", icon: Image, value: "site-images" },
  { title: "Subscriptions", icon: Mail, value: "subscriptions" },
  { title: "Demo Requests", icon: Calendar, value: "demo-requests" },
  { title: "Contact Requests", icon: Phone, value: "contact" },
  { title: "Events", icon: Calendar, value: "events" },
  { title: "Event Registrations", icon: Calendar, value: "event-registrations" },
  { title: "Blog Analytics", icon: BarChart3, value: "blog-analytics" },
];

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          navigate('/admin/login');
          return;
        }

        const { data: verifyData, error } = await supabase.functions.invoke('verify-admin');

        if (error || !verifyData?.isAdmin) {
          toast({
            title: "Unauthorized",
            description: "You don't have admin access",
            variant: "destructive",
          });
          navigate('/');
          return;
        }

        setAdminEmail(session.user.email || "");
        setIsAdmin(true);
      } catch (error) {
        navigate('/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/admin/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const handleLogout = async () => {
    setShowLogoutDialog(false);
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate('/admin/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <PageSeoHead title="Admin Dashboard | CollabAI" description="Admin dashboard" noindex={true} />
        <Loader2 className="w-8 h-8 animate-spin text-trust-blue" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DatabaseManager onNavigate={setActiveSection} />;
      case "testimonials":
        return <TestimonialsManager />;
      case "case-studies":
        return <CaseStudiesManager />;
      case "blog":
        return <BlogManager />;
      case "blog-comments":
        return <BlogCommentsManager />;
      case "whitepapers":
        return <WhitepapersManager />;
      case "knowledge-base":
        return <KnowledgeBaseManager />;
      case "media":
        return <MediaManager />;
      case "site-images":
        return <SiteImagesManager />;
      case "subscriptions":
        return <EmailSubscriptionsManager />;
      case "demo-requests":
        return <DemoRequestsManager />;
      case "contact":
        return <ContactSubmissionsManager />;
      case "events":
        return <EventsManager />;
      case "event-registrations":
        return <EventRegistrationsManager />;
      case "blog-analytics":
        return <BlogAnalyticsDashboard />;
      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r">
          <SidebarContent>
            <div className="p-4 border-b">
              <h1 className="text-xl font-bold text-brand-primary">Admin Panel</h1>
            </div>
            
            <SidebarGroup>
              <SidebarGroupLabel>Content Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.value}>
                      <SidebarMenuButton
                        onClick={() => setActiveSection(item.value)}
                        isActive={activeSection === item.value}
                        className="w-full"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <div className="mt-auto p-4 border-t space-y-3">
              {adminEmail && (
                <div className="px-3 py-2 rounded-md bg-muted">
                  <p className="text-xs text-muted-foreground">Logged in as</p>
                  <p className="text-sm font-medium truncate">{adminEmail}</p>
                </div>
              )}
              <Button
                variant="outline"
                onClick={() => setShowLogoutDialog(true)}
                className="w-full gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <header className="border-b bg-surface-elevated sticky top-0 z-10">
            <div className="px-8 py-4">
              <h2 className="text-2xl font-semibold">
                {menuItems.find(item => item.value === activeSection)?.title || "Dashboard"}
              </h2>
            </div>
          </header>
          
          <div className="p-8">
            {renderContent()}
          </div>
        </main>
      </div>

      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to logout? You will need to login again to access the admin panel.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SidebarProvider>
  );
};

export default AdminDashboard;
