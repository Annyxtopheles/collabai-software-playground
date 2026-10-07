import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import PageSeoHead from "@/components/PageSeoHead";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import slackLogo from "@/assets/integrations/slack.png";
import googleDriveLogo from "@/assets/integrations/google-drive.png";
import outlookLogo from "@/assets/integrations/outlook.png";
import onedriveLogo from "@/assets/integrations/onedrive.png";
import linkedinLogo from "@/assets/integrations/linkedin.svg";
import hubspotLogo from "@/assets/integrations/hubspot.png";
import activeCollabLogo from "@/assets/integrations/active-collab.png";
import firecrawlLogo from "@/assets/integrations/firecrawl.png";
import n8nLogo from "@/assets/integrations/n8n.png";
import workboardLogo from "@/assets/integrations/workboard.png";
import gmailLogo from "@/assets/integrations/gmail.png";
import beanstalkLogo from "@/assets/integrations/beanstalk.png";
import googleCalendarLogo from "@/assets/integrations/google-calendar.png";
import osticketLogo from "@/assets/integrations/osticket.jpg";
import leadsliftLogo from "@/assets/integrations/leadslift.png";
import zoomLogo from "@/assets/integrations/zoom.png";
import sharepointLogo from "@/assets/integrations/sharepoint.png";
import fluxLogo from "@/assets/integrations/flux.png";
import meridianCreditLogo from "@/assets/integrations/meridian-credit.svg";

// Integration categories
const integrationCategories = [
  "All",
  "Communication", 
  "Cloud Storage",
  "Project Management",
  "Automation",
  "CRM & Sales",
  "Email",
  "Developer Tools",
  "Analytics",
  "Social Media"
];

// All integrations data
const allIntegrations = [
  {
    name: "Slack",
    description: "Team communication and collaboration platform",
    category: "Communication",
    logo: slackLogo,
    verified: true,
    popular: true
  },
  {
    name: "Google Drive",
    description: "Cloud storage and file sharing service",
    category: "Cloud Storage", 
    logo: googleDriveLogo,
    verified: true,
    popular: true
  },
  {
    name: "Microsoft Outlook",
    description: "Email client and personal information manager",
    category: "Email",
    logo: outlookLogo,
    verified: true,
    popular: true
  },
  {
    name: "OneDrive",
    description: "Microsoft's cloud storage service",
    category: "Cloud Storage",
    logo: onedriveLogo,
    verified: true,
    popular: false
  },
  {
    name: "LinkedIn",
    description: "Professional networking platform",
    category: "Social Media",
    logo: linkedinLogo,
    verified: true,
    popular: false
  },
  {
    name: "HubSpot",
    description: "Customer relationship management platform",
    category: "CRM & Sales",
    logo: hubspotLogo,
    verified: true,
    popular: true
  },
  {
    name: "Active Collab",
    description: "Project management and team collaboration",
    category: "Project Management",
    logo: activeCollabLogo,
    verified: true,
    popular: false
  },
  {
    name: "Firecrawl",
    description: "Web scraping and data extraction platform",
    category: "Developer Tools",
    logo: firecrawlLogo,
    verified: true,
    popular: false
  },
  {
    name: "n8n",
    description: "Workflow automation platform",
    category: "Automation",
    logo: n8nLogo,
    verified: true,
    popular: true
  },
  {
    name: "Work Board",
    description: "Strategy execution and OKR platform",
    category: "Project Management",
    logo: workboardLogo,
    verified: true,
    popular: false
  },
  {
    name: "Gmail",
    description: "Google's email service",
    category: "Email",
    logo: gmailLogo, 
    verified: true,
    popular: true
  },
  {
    name: "Beanstalk",
    description: "Git hosting and deployment platform",
    category: "Developer Tools",
    logo: beanstalkLogo,
    verified: true,
    popular: false
  },
  {
    name: "Calendar",
    description: "Google Calendar integration",
    category: "Communication",
    logo: googleCalendarLogo,
    verified: true,
    popular: true
  },
  {
    name: "OSTicket",
    description: "Open source support ticket system",
    category: "Communication",
    logo: osticketLogo,
    verified: true,
    popular: false
  },
  {
    name: "Leadslift",
    description: "Lead generation and management platform",
    category: "CRM & Sales",
    logo: leadsliftLogo,
    verified: true,
    popular: false
  },
  {
    name: "Zoom",
    description: "Video conferencing and communication",
    category: "Communication",
    logo: zoomLogo,
    verified: true,
    popular: true
  },
  {
    name: "SharePoint",
    description: "Microsoft's collaboration platform",
    category: "Cloud Storage",
    logo: sharepointLogo,
    verified: true,
    popular: false
  },
  {
    name: "Flux",
    description: "Continuous deployment platform",
    category: "Developer Tools",
    logo: fluxLogo,
    verified: true,
    popular: false
  },
  {
    name: "BuildYourAI-N8N",
    description: "Trigger workflows created on BYAI n8n Account",
    category: "Automation",
    logo: n8nLogo,
    verified: true,
    popular: false
  },
  {
    name: "N8N ManageCoder",
    description: "Connect workflows made on manage coder N8N",
    category: "Automation",
    logo: n8nLogo,
    verified: true,
    popular: false
  },
  {
    name: "MeridianCreditMock",
    description: "Mock data service like meridian credit api",
    category: "Developer Tools",
    logo: meridianCreditLogo,
    verified: true,
    popular: false
  }
];

const Integrations = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = allIntegrations.filter(integration => {
    const matchesCategory = selectedCategory === "All" || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularIntegrations = allIntegrations.filter(integration => integration.popular);

  return (
    <div className="min-h-screen bg-background">
      <PageSeoHead title="Control Tower Integrations – 30+ Enterprise Connectors" description="Connect Control Tower with Slack, Google Drive, Outlook, HubSpot, and 30+ tools. Seamless enterprise integrations for your AI workflows." />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface-elevated to-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Connect Your Entire
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Workflow</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Seamlessly integrate Control Tower with your favorite tools and platforms. 
              Build powerful automation workflows that connect all your business apps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="min-w-[200px]">
                <Link to="/contact">
                  Request Integration
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Integrations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">All Integrations</h2>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {integrationCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className="text-text-secondary mb-6">
              Showing {filteredIntegrations.length} integration{filteredIntegrations.length !== 1 ? 's' : ''}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </motion.div>

          {/* Integration Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index % 6) }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={integration.logo} 
                          alt={integration.name}
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-primary group-hover:text-primary/80 transition-colors">
                            {integration.name}
                          </h3>
                        </div>
                        <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                          {integration.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {integration.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary mb-4">No integrations found matching your criteria.</p>
              <Button variant="outline" onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Don't See Your Integration?
            </h2>
            <p className="text-text-secondary mb-8">
              We're constantly adding new integrations. Let us know which tools you'd like to connect 
              and we'll prioritize them in our roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Request Custom Integration
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;