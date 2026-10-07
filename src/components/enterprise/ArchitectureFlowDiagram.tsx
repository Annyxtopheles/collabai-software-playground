import { useState } from "react";
import { Monitor, Settings, Database, Cpu } from "lucide-react";

const layers = [
  { id: "browser", label: "Browser Layer", sub: "React · Vite · Tailwind", icon: Monitor, example: "Users interact with workspaces, agents, and dashboards" },
  { id: "app", label: "Application Layer", sub: "Node.js · Express · JWT", icon: Settings, example: "Routes requests, enforces permissions, selects AI models" },
  { id: "db", label: "Database Layer", sub: "Supabase PostgreSQL · RLS", icon: Database, example: "Stores users, workspaces, threads, files, and audit logs" },
  { id: "ai", label: "AI Provider Layer", sub: "OpenAI · Claude · Gemini", icon: Cpu, example: "Processes prompts and returns intelligent responses" },
];

const ArchitectureFlowDiagram = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto mb-12">
    </div>
  );
};

export default ArchitectureFlowDiagram;
