import { useState } from "react";
import { Users, Globe, Settings, Database, Cpu } from "lucide-react";

const layers = [
  {
    id: "org",
    label: "Your Organization",
    sub: "Executives · Team Leads · Individual Users",
    icon: Users,
    example: "Executives, Team Leads, and Individual Users access CollabAI through role-based permissions",
  },
  {
    id: "web",
    label: "CollabAI Web Experience",
    sub: "Workspaces · Chat · AI Agents · Dashboards",
    icon: Globe,
    example: "Workspaces & Projects, Chat & Threads, AI Agents & Tools, Files & Dashboards",
  },
  {
    id: "app",
    label: "CollabAI Application Layer",
    sub: "Access Control · Business Logic · Routing · Audit",
    icon: Settings,
    example: "Access Control & Permissions, Business Logic, Multi-Model Routing, Audit Logging",
  },
];

const bottomLayers = [
  {
    id: "db",
    label: "Supabase PostgreSQL",
    sub: "Users · Workspaces · Permissions · Analytics",
    icon: Database,
    example: "Users & Workspaces, Projects & Agents, Permissions & Analytics, Single Source of Truth",
  },
  {
    id: "ai",
    label: "AI Provider Layer",
    sub: "OpenAI · Claude · Gemini · Custom",
    icon: Cpu,
    example: "OpenAI GPT Models, Anthropic Claude, Google Gemini, Custom Providers",
  },
];

const LayerCard = ({
  layer,
  isActive,
  hovered,
  onHover,
  onLeave,
}: {
  layer: (typeof layers)[0];
  isActive: boolean;
  hovered: string | null;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const Icon = layer.icon;
  return (
    <div
      className={`relative rounded-xl border p-4 transition-all duration-300 cursor-pointer ${
        isActive
          ? "border-[hsl(var(--brand-secondary))] bg-[hsl(var(--brand-secondary))]/5 shadow-md scale-[1.02]"
          : hovered && !isActive
          ? "border-border bg-background opacity-50"
          : "border-border bg-background hover:border-[hsl(var(--brand-secondary))]/40"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[hsl(var(--brand-secondary))]/10 flex items-center justify-center text-[hsl(var(--brand-secondary))]">
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <h5 className="text-sm font-semibold text-brand-primary">{layer.label}</h5>
          <p className="text-xs text-muted-foreground">{layer.sub}</p>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isActive ? "max-h-24 mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-xs text-[hsl(var(--brand-secondary))] bg-[hsl(var(--brand-secondary))]/5 rounded-md px-3 py-2">
          {layer.example}
        </p>
      </div>
    </div>
  );
};

const StraightConnector = ({ dimmed }: { dimmed: boolean }) => (
  <div className="flex justify-center">
    <svg width="2" height="40" viewBox="0 0 2 40" className="overflow-visible">
      <line
        x1="1" y1="0" x2="1" y2="40"
        stroke="hsl(var(--brand-secondary))"
        strokeWidth="2"
        strokeDasharray="6 4"
        opacity={dimmed ? 0.15 : 0.6}
      >
        <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
      </line>
      <circle r="3" fill="hsl(var(--brand-secondary))" opacity={dimmed ? 0.1 : 0.8}>
        <animateMotion dur="1.5s" repeatCount="indefinite" path="M1,0 L1,40" />
      </circle>
    </svg>
  </div>
);

const ForkConnector = ({ dimLeft, dimRight }: { dimLeft: boolean; dimRight: boolean }) => (
  <div className="flex justify-center">
    <svg width="340" height="50" viewBox="0 0 340 50" className="overflow-visible">
      {/* Left branch */}
      <line
        x1="170" y1="0" x2="85" y2="50"
        stroke="hsl(var(--brand-secondary))"
        strokeWidth="2"
        strokeDasharray="6 4"
        opacity={dimLeft ? 0.15 : 0.6}
      >
        <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
      </line>
      <circle r="3" fill="hsl(var(--brand-secondary))" opacity={dimLeft ? 0.1 : 0.8}>
        <animateMotion dur="1.5s" repeatCount="indefinite" path="M170,0 L85,50" />
      </circle>
      {/* Right branch */}
      <line
        x1="170" y1="0" x2="255" y2="50"
        stroke="hsl(var(--brand-secondary))"
        strokeWidth="2"
        strokeDasharray="6 4"
        opacity={dimRight ? 0.15 : 0.6}
      >
        <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
      </line>
      <circle r="3" fill="hsl(var(--brand-secondary))" opacity={dimRight ? 0.1 : 0.8}>
        <animateMotion dur="1.5s" repeatCount="indefinite" path="M170,0 L255,50" />
      </circle>
    </svg>
  </div>
);

const SystemOverviewDiagram = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const isDimmed = (id1: string, id2: string) =>
    !!hovered && hovered !== id1 && hovered !== id2;

  return (
    <div className="max-w-[560px] mx-auto mb-12 flex flex-col items-stretch">
      {/* Layer 0: org */}
      <LayerCard
        layer={layers[0]}
        isActive={hovered === layers[0].id}
        hovered={hovered}
        onHover={() => setHovered(layers[0].id)}
        onLeave={() => setHovered(null)}
      />
      <StraightConnector dimmed={isDimmed("org", "web")} />

      {/* Layer 1: web */}
      <LayerCard
        layer={layers[1]}
        isActive={hovered === layers[1].id}
        hovered={hovered}
        onHover={() => setHovered(layers[1].id)}
        onLeave={() => setHovered(null)}
      />
      <StraightConnector dimmed={isDimmed("web", "app")} />

      {/* Layer 2: app */}
      <LayerCard
        layer={layers[2]}
        isActive={hovered === layers[2].id}
        hovered={hovered}
        onHover={() => setHovered(layers[2].id)}
        onLeave={() => setHovered(null)}
      />

      {/* Fork connector */}
      <ForkConnector
        dimLeft={isDimmed("app", "db")}
        dimRight={isDimmed("app", "ai")}
      />

      {/* Bottom 2 layers side by side */}
      <div className="grid grid-cols-2 gap-4">
        {bottomLayers.map((layer) => (
          <LayerCard
            key={layer.id}
            layer={layer}
            isActive={hovered === layer.id}
            hovered={hovered}
            onHover={() => setHovered(layer.id)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default SystemOverviewDiagram;
