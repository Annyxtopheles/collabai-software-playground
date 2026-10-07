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
import { ArrowRight, Calculator, TrendingUp, FileText, DollarSign } from "lucide-react";
import { Logos3 } from "@/components/blocks/logos3";
import { Link } from "react-router-dom";

const AccountingPlaybook = () => {
  return (
    <div className="min-h-screen">
      <PageSeoHead title="AI for Accounting Playbook – CollabAI" description="A practical guide to deploying AI in accounting firms. Automate tax prep, bookkeeping, and client workflows while keeping data private." canonicalPath="/playbooks/accounting" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface-elevated via-background to-slate-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-medium">
                <Calculator className="w-4 h-4" />
                <span>Accounting & Finance</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-brand-primary leading-tight">
                Automate Financial Analysis with
                <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                  {" "}AI Precision
                </span>
              </h1>
              
              <p className="text-xl text-slate-secondary leading-relaxed">
                Transform financial reporting, audit processes, and client analysis with AI agents 
                trained on accounting standards and tax regulations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-trust-blue to-trust-blue-dark" asChild>
                  <Link to="/try-demo">
                    Book a Live Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Download PDF Playbook
                </Button>
              </div>

              <div className="bg-slate-light rounded-lg p-4">
                <p className="text-lg font-semibold text-brand-primary mb-2">
                  🎯 60% faster report generation
                </p>
                <p className="text-slate-secondary">
                  "Monthly reports that took 8 hours now take 3 hours with better accuracy."
                </p>
              </div>
            </div>

            <div className="bg-surface-elevated p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-brand-primary mb-6">Financial Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-secondary">Report Generation</span>
                  <span className="font-bold text-trust-blue">8hrs → 3hrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-secondary">Capacity Increase</span>
                  <span className="font-bold text-trust-blue">150%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-secondary">Error Reduction</span>
                  <span className="font-bold text-trust-blue">90%</span>
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
            Accounting AI Agents
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Financial Report Generator",
                description: "Automates monthly, quarterly, and annual financial reporting with full compliance.",
                icon: FileText
              },
              {
                title: "Audit Process Manager",
                description: "Streamlines audit procedures with automated documentation and evidence collection.",
                icon: TrendingUp
              },
              {
                title: "Tax Compliance Agent",
                description: "Ensures tax filings meet all regulatory requirements with automated checks.",
                icon: Calculator
              },
              {
                title: "Client Analytics Engine",
                description: "Provides deep financial insights and recommendations for client advisory services.",
                icon: DollarSign
              }
            ].map((agent, index) => {
              const IconComponent = agent.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-amber-600" />
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

      {/* Client Logos Section */}
      <Logos3 
        heading="Trusted by leading accounting firms and enterprises"
        logos={[
          {
            id: "logo-1",
            description: "Deloitte",
            image: "https://logos-world.net/wp-content/uploads/2020/06/Deloitte-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-2",
            description: "PwC",
            image: "https://logos-world.net/wp-content/uploads/2020/06/PwC-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-3",
            description: "EY",
            image: "https://logos-world.net/wp-content/uploads/2020/06/EY-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-4",
            description: "KPMG",
            image: "https://logos-world.net/wp-content/uploads/2020/06/KPMG-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-5",
            description: "BDO",
            image: "https://logos-world.net/wp-content/uploads/2020/06/BDO-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-6",
            description: "Grant Thornton",
            image: "https://logos-world.net/wp-content/uploads/2020/06/Grant-Thornton-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-7",
            description: "RSM",
            image: "https://logos-world.net/wp-content/uploads/2020/06/RSM-Logo.png",
            className: "h-6 w-auto",
          },
          {
            id: "logo-8",
            description: "CliftonLarsonAllen",
            image: "https://logos-world.net/wp-content/uploads/2020/06/CliftonLarsonAllen-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-9",
            description: "Crowe",
            image: "https://logos-world.net/wp-content/uploads/2020/06/Crowe-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-10",
            description: "Marcum",
            image: "https://logos-world.net/wp-content/uploads/2020/06/Marcum-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-11",
            description: "BKD",
            image: "https://logos-world.net/wp-content/uploads/2020/06/BKD-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-12",
            description: "Moss Adams",
            image: "https://logos-world.net/wp-content/uploads/2020/06/Moss-Adams-Logo.png",
            className: "h-8 w-auto",
          },
        ]}
      />

      {/* Integrations Section */}
      <IntegrationsSection
        industry="Accounting"
        title="Seamless Platform Integration"
        description="Connect CollabAI with your existing accounting software, ERP systems, and compliance tools for a unified workflow."
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

export default AccountingPlaybook;