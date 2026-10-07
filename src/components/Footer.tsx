import { useState } from "react";
import supabaseLogo from "@/assets/supabase-logo.svg";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('email_subscriptions')
        .insert([{ email }]);

      if (error) {
        console.error('Email subscription error:', error);
        throw error;
      }

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing. You'll receive exclusive updates.",
      });

      setEmail("");
    } catch (error: unknown) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <footer className="bg-[hsl(var(--brand-primary))] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">

          {/* Column 1: Subscription */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            <p className="text-white/70 text-sm mb-4">
              Subscribe now and join with other CollabAI users to get exclusive resources on all things AI and latest update of CollabAI
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2 mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 h-11 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20" 
              />
              <Button 
                type="submit"
                size="lg" 
                disabled={isSubmitting}
                className="bg-white hover:bg-white/90 text-slate-50 text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
            <div className="flex space-x-4 mb-6">
              <Link to="https://www.facebook.com/collabai" className="text-white/70 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </Link>
              <Link to="https://x.com/CollabAI1" className="text-white/70 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link to="https://www.linkedin.com/company/collabaisoftware/" className="text-white/70 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/testimonials" className="text-white/70 hover:text-white transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/resources/faqs" className="text-white/70 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-white/70 hover:text-white transition-colors text-sm">
                  Security & Privacy
                </Link>
              </li>
              <li>
                <a href="https://github.com/sjinnovation/CollabAI/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contribute to CollabAI
                </a>
              </li>
              <li>
                <Link to="/partnership" className="text-white/70 hover:text-white transition-colors text-sm">
                  Partnership
                </Link>
              </li>
              <li>
                <Link to="/enterprise-architecture" className="text-white/70 hover:text-white transition-colors text-sm">
                  Enterprise Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pricing" className="text-white/70 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/70 hover:text-white transition-colors text-sm">
                  Case Study
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-white/70 hover:text-white transition-colors text-sm">
                  Use Cases
                </Link>
              </li>
              <li>
                <a href="https://store.collabai.software/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  All AI Agents
                </a>
              </li>
              <li>
                <Link to="/integrations" className="text-white/70 hover:text-white transition-colors text-sm">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white/70 hover:text-white transition-colors text-sm">
                  Events & Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Agent Builder */}
          <div>
            <h3 className="font-semibold mb-4">Agent Builder</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://edu.collabai.software/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  CollabAI Academy
                </a>
              </li>
              <li>
                <a href="https://edu.collabai.software/communities/groups/collabai-community/home" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  Join Community
                </a>
              </li>
              <li>
                <a href="https://devhub.collabai.software/start-your-agent-building-journey912679" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  Start Agent Building
                </a>
              </li>
            </ul>
          </div>

          {/* Column 6: Downloads */}
          <div>
            <h3 className="font-semibold mb-4">Downloads</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://apps.apple.com/sg/app/collabai-client/id6741913971" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm flex items-center space-x-2">
                  <Apple className="w-4 h-4" />
                  <span>Download for iOS</span>
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=app.collabai.software" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm flex items-center space-x-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Download for Android</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <span><span>© 2026 SJ Innovation LLC. All rights reserved. CollabAI is a product of SJ Innovation LLC.</span></span>
            <span className="hidden md:inline text-white/30">|</span>
            <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span>Built on</span>
              <img src={supabaseLogo} alt="Supabase" className="h-4" />
            </a>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-white/60">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/security" className="hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;