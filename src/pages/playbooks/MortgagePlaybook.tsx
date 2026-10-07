import Navigation from "@/components/Navigation";
import PageSeoHead from "@/components/PageSeoHead";
import Footer from "@/components/Footer";
import IntegrationsSection from "@/components/IntegrationsSection";
import slackIcon from "@/assets/integrations/slack.png";
import googleDriveIcon from "@/assets/integrations/google-drive.png";
import outlookIcon from "@/assets/integrations/outlook.png";
import oneDriveIcon from "@/assets/integrations/onedrive.png";
import linkedinIcon from "@/assets/integrations/linkedin.svg";
import hubspotIcon from "@/assets/integrations/hubspot.png";
import activeCollabIcon from "@/assets/integrations/active-collab.png";
import firecrawlIcon from "@/assets/integrations/firecrawl.png";
import n8nIcon from "@/assets/integrations/n8n.png";
import workboardIcon from "@/assets/integrations/workboard.png";
import gmailIcon from "@/assets/integrations/gmail.png";
import beanstalkIcon from "@/assets/integrations/beanstalk.png";
import googleCalendarIcon from "@/assets/integrations/google-calendar.png";
import osticketIcon from "@/assets/integrations/osticket.jpg";
import leadsliftIcon from "@/assets/integrations/leadslift.png";
import zoomIcon from "@/assets/integrations/zoom.png";
import sharepointIcon from "@/assets/integrations/sharepoint.png";
import fluxIcon from "@/assets/integrations/flux.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Building2, DollarSign, FileText, Clock, Shield, Settings, Zap, CheckCircle, Play, Users, Lock, Database, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import quonticLogo from "@/assets/clients/quontic-logo.png";
import flexpointLogo from "@/assets/clients/flexpoint-logo.png";
import icrCapitalLogo from "@/assets/clients/icr-capital-logo.png";
import ahadCoLogo from "@/assets/clients/ahad-co-logo.png";
import dynamicTaxLogo from "@/assets/clients/dynamic-tax-logo.png";
import simpleTherapyLogo from "@/assets/clients/simple-therapy-logo.png";

const clientLogos = [
  { name: "Quontic Bank", logo: quonticLogo },
  { name: "FlexPoint", logo: flexpointLogo },
  { name: "ICR Capital LLC", logo: icrCapitalLogo },
  { name: "Ahad Co", logo: ahadCoLogo },
  { name: "Dynamic Tax & Accounting", logo: dynamicTaxLogo },
  { name: "Simple Therapy", logo: simpleTherapyLogo },
];

const MortgagePlaybook = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <div className="min-h-screen">
      <PageSeoHead title="AI for Mortgage Playbook – CollabAI" description="Streamline mortgage processing with AI. A step-by-step playbook for automating underwriting, document review, and compliance workflows." canonicalPath="/playbooks/mortgage" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface-elevated via-background to-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-trust-blue/10 text-trust-blue px-4 py-2 rounded-full text-sm font-medium">
              <Building2 className="w-4 h-4" />
              <span>Mortgage Banks & Financial Institutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-primary leading-tight">
              Your AI Playbook for
              <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                {" "}Faster, Safer Banking Operations
              </span>
            </h1>
            
            <p className="text-xl text-slate-secondary leading-relaxed max-w-3xl mx-auto">
              CollabAI gives mortgage banks and financial institutions private, customizable AI agents that work behind your firewall — protecting sensitive data, streamlining workflows, and saving your teams hours every week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-trust-blue to-trust-blue-dark" asChild>
                <Link to="/try-demo">
                  Book a Live Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-secondary text-slate-secondary hover:bg-slate-light">
                Download PDF Playbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by leading financial institutions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-2 rounded-full text-sm font-medium">
              <Handshake className="w-4 h-4" />
              <span>Trusted by Renowned Digital Agencies</span>
            </div>
            
            <div className="w-full max-w-6xl mx-auto">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {clientLogos.map((client, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                      <div className="flex items-center justify-center h-16 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-w-full max-h-10 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <IntegrationsSection
        industry="Mortgage"
        title="Financial Platform Integration"
        description="Connect with leading mortgage origination systems, credit bureaus, and compliance platforms to streamline your lending operations."
        integrations={[
          { name: "Gmail", url: gmailIcon },
          { name: "Zoom", url: zoomIcon },
          { name: "Google Calendar", url: googleCalendarIcon },
          { name: "LinkedIn", url: linkedinIcon },
          { name: "Flux", url: fluxIcon },
          { name: "SharePoint", url: sharepointIcon },
          { name: "MISMO", url: "https://cdn-icons-png.flaticon.com/512/2991/2991106.png" },
          { name: "Fannie Mae", url: "https://cdn-icons-png.flaticon.com/512/2991/2991107.png" },
          { name: "Freddie Mac", url: "https://cdn-icons-png.flaticon.com/512/2991/2991108.png" },
          { name: "FHA", url: "https://cdn-icons-png.flaticon.com/512/2991/2991109.png" },
          { name: "VA", url: "https://cdn-icons-png.flaticon.com/512/2991/2991110.png" },
          { name: "USDA", url: "https://cdn-icons-png.flaticon.com/512/2991/2991111.png" },
          { name: "DocMagic", url: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png" },
          { name: "eSignSystems", url: "https://cdn-icons-png.flaticon.com/512/2991/2991113.png" },
          { name: "Meridian Link", url: "https://cdn-icons-png.flaticon.com/512/2991/2991114.png" },
          { name: "LendingQB", url: "https://cdn-icons-png.flaticon.com/512/2991/2991115.png" },
          { name: "Blend", url: "https://cdn-icons-png.flaticon.com/512/2991/2991116.png" },
          { name: "Rocket Pro TPO", url: "https://cdn-icons-png.flaticon.com/512/2991/2991117.png" }
        ]}
      />

      <Footer />
    </div>
  );
};

export default MortgagePlaybook;