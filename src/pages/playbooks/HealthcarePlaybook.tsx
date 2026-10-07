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
import { ArrowRight, Heart, Shield, FileSearch, Clock, Handshake } from "lucide-react";
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

const HealthcarePlaybook = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <div className="min-h-screen">
      <PageSeoHead title="AI for Healthcare Playbook – CollabAI" description="Deploy HIPAA-compliant AI in healthcare settings. A practical guide to clinical workflow automation, patient engagement, and secure data handling." canonicalPath="/playbooks/healthcare" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface-elevated via-background to-slate-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                <span>Healthcare & Pharmacy</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-brand-primary leading-tight">
                Enhance Patient Care with
                <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                  {" "}HIPAA-Compliant AI
                </span>
              </h1>
              
              <p className="text-xl text-slate-secondary leading-relaxed">
                Streamline patient intake, claims processing, and clinical documentation 
                while maintaining strict HIPAA compliance and improving patient outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-trust-blue to-trust-blue-dark" asChild>
                  <Link to="/try-demo">
                    Book a Live Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-slate-light rounded-lg p-4">
                <p className="text-lg font-semibold text-brand-primary mb-2">
                  🎯 40% reduction in administrative time
                </p>
                <p className="text-slate-secondary">
                  "Our staff can now focus on patient care instead of paperwork."
                </p>
              </div>
            </div>

            <div className="bg-surface-elevated p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-primary mb-6">Healthcare Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-secondary">Intake Time</span>
                  <span className="font-bold text-trust-blue">20min → 12min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-secondary">Additional Patients</span>
                  <span className="font-bold text-trust-blue">1,200/month</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-secondary">HIPAA Compliance</span>
                  <span className="font-bold text-trust-blue">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Grid */}
      <section className="py-20 bg-slate-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-primary text-center mb-16">
            Healthcare AI Agents
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Patient Intake Assistant",
                description: "Automates patient registration, insurance verification, and medical history collection.",
                icon: Heart
              },
              {
                title: "Claims Processing Agent",
                description: "Streamlines insurance claims processing with automated validation and submission.",
                icon: FileSearch
              },
              {
                title: "Clinical Documentation",
                description: "Assists with medical record documentation while maintaining HIPAA compliance.",
                icon: Shield
              },
              {
                title: "Appointment Scheduler",
                description: "Intelligent scheduling that optimizes provider availability and patient preferences.",
                icon: Clock
              }
            ].map((agent, index) => {
              const IconComponent = agent.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">{agent.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-secondary">{agent.description}</p>
                    <Button variant="ghost" className="mt-4 text-trust-blue hover:bg-trust-blue/10">
                      View in Action
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted by leading healthcare organizations */}
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
        industry="Healthcare"
        title="HIPAA-Compliant Integrations"
        description="Securely connect with EMR systems, pharmacy management platforms, and healthcare analytics tools while maintaining full HIPAA compliance."
        integrations={[
          { name: "Slack", url: slackIcon },
          { name: "Google Drive", url: googleDriveIcon },
          { name: "Microsoft Outlook", url: outlookIcon },
          { name: "OneDrive", url: oneDriveIcon },
          { name: "LinkedIn", url: linkedinIcon },
          { name: "HubSpot", url: hubspotIcon },
          { name: "Active Collab", url: activeCollabIcon },
          { name: "Firecrawl", url: firecrawlIcon },
          { name: "n8n", url: n8nIcon },
          { name: "Work Board", url: workboardIcon },
          { name: "Gmail", url: gmailIcon },
          { name: "Beanstalk", url: beanstalkIcon },
          { name: "Google Calendar", url: googleCalendarIcon },
          { name: "OSTicket", url: osticketIcon },
          { name: "Leadslift", url: leadsliftIcon },
          { name: "Zoom", url: zoomIcon },
          { name: "SharePoint", url: sharepointIcon },
          { name: "Flux", url: fluxIcon }
        ]}
      />

      <Footer />
    </div>
  );
};

export default HealthcarePlaybook;