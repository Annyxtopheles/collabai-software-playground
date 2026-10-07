import { useState } from "react";
import collabAICenter from "@/assets/integrations/collab-ai-center.png";
import slack from "@/assets/integrations/slack.png";
import firecrawl from "@/assets/integrations/firecrawl.png";
import outlook from "@/assets/integrations/outlook.png";
import hubspot from "@/assets/integrations/hubspot.png";
import leadslift from "@/assets/integrations/leadslift.png";
import beanstalk from "@/assets/integrations/beanstalk.png";
import googleDrive from "@/assets/integrations/google-drive.png";
import workboard from "@/assets/integrations/workboard.png";
import activeCollab from "@/assets/integrations/active-collab.png";

const IntegrationsGrid = () => {
  const [activeBorder, setActiveBorder] = useState<string | null>(null);

  const integrations = [
    { id: "slack", src: slack, alt: "Slack", position: "top-12 left-12" },
    { id: "firecrawl", src: firecrawl, alt: "Firecrawl", position: "top-4 right-16" },
    { id: "outlook", src: outlook, alt: "Outlook", position: "top-20 right-4" },
    { id: "hubspot", src: hubspot, alt: "HubSpot", position: "bottom-20 left-4" },
    { id: "leadslift", src: leadslift, alt: "LeadsLift", position: "bottom-12 right-12" },
    { id: "beanstalk", src: beanstalk, alt: "Beanstalk", position: "bottom-4 left-16" },
    { id: "google-drive", src: googleDrive, alt: "Google Drive", position: "top-32 left-32" },
    { id: "workboard", src: workboard, alt: "Workboard", position: "bottom-32 right-32" },
    { id: "active-collab", src: activeCollab, alt: "Active Collab", position: "top-40 right-8" },
  ];

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-[hsl(var(--bg-light))] to-[hsl(var(--bg-secondary))] rounded-2xl p-4 md:p-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Center Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 md:border-4 border-[hsl(var(--brand-secondary))] z-10">
          <img 
            src={collabAICenter} 
            alt="CollabAI" 
            className="w-8 h-8 md:w-12 md:h-12 object-contain"
          />
        </div>

        {/* Integration Logos */}
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className={`absolute w-8 h-8 md:w-12 md:h-12 bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 ${integration.position} ${
              activeBorder === integration.id 
                ? 'border-2 border-[hsl(var(--brand-secondary))] scale-110' 
                : 'border border-gray-200 hover:border-[hsl(var(--brand-secondary))] hover:scale-105'
            }`}
          onMouseEnter={() => setActiveBorder(integration.id)}
          onMouseLeave={() => setActiveBorder(null)}
        >
            <img 
              src={integration.src} 
              alt={integration.alt}
              className="w-5 h-5 md:w-8 md:h-8 object-contain"
            />
          </div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {integrations.map((integration, index) => (
            <line
              key={`line-${integration.id}`}
              x1="50%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke={activeBorder === integration.id ? "hsl(var(--brand-secondary))" : "hsl(var(--brand-secondary) / 0.2)"}
              strokeWidth={activeBorder === integration.id ? "2" : "1"}
              strokeDasharray="4,4"
              className="animate-pulse"
              style={{
                transform: `rotate(${(360 / integrations.length) * index}deg)`,
                transformOrigin: "50% 50%"
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default IntegrationsGrid;