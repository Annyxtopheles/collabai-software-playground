import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, Code, Key, Users, Database } from "lucide-react";

const securityLayers = [
  { id: "network", label: "Network", icon: Globe, color: 0.3, items: ["HTTPS/TLS encryption", "CORS configuration", "Rate limiting (100 req/min per IP)"] },
  { id: "application", label: "Application", icon: Code, color: 0.25, items: ["Helmet security headers", "Input validation (Joi)", "SQL injection prevention", "XSS prevention"] },
  { id: "authentication", label: "Authentication", icon: Key, color: 0.2, items: ["JWT token-based auth", "Password hashing (bcrypt, 12 rounds)", "Token expiration policies"] },
  { id: "authorization", label: "Authorization", icon: Users, color: 0.15, items: ["Role-based access control (RBAC)", "Resource-level permissions", "Admin-only endpoints"] },
  { id: "data", label: "Data", icon: Database, color: 0.1, items: ["Encrypted API keys", "Row Level Security (RLS)", "Database access controls"] },
];

const SecurityLayers = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <div ref={ref} className="mt-12">
      <h3 className="text-xl font-semibold text-brand-primary mb-8 text-center">Five Layers of Security</h3>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Concentric circles SVG */}
        <div className="w-full lg:w-1/2 max-w-[360px] mx-auto">
          <svg viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            {securityLayers.map((layer, i) => {
              const r = 170 - i * 30;
              const isActive = activeLayer === layer.id;
              const delay = i * 0.15;
              return (
                <g key={layer.id}>
                  <circle
                    cx="180" cy="180" r={r}
                    fill={`hsl(var(--brand-secondary) / ${layer.color})`}
                    stroke={isActive ? "hsl(var(--brand-secondary))" : "hsl(var(--border))"}
                    strokeWidth={isActive ? 2 : 0.8}
                    className="cursor-pointer transition-all duration-300"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0.8)",
                      transformOrigin: "180px 180px",
                      transition: `opacity 0.5s ${delay}s, transform 0.5s ${delay}s, stroke 0.2s`,
                    }}
                    onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                    onMouseEnter={() => setActiveLayer(layer.id)}
                    onMouseLeave={() => setActiveLayer(null)}
                  />
                  {/* Layer label on the ring */}
                  <text
                    x="180" y={180 - r + 18}
                    textAnchor="middle"
                    fill={isActive ? "hsl(var(--brand-secondary))" : "hsl(var(--brand-primary))"}
                    fontSize="10"
                    fontWeight="600"
                    className="pointer-events-none"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.5s ${delay + 0.2}s`,
                    }}
                  >
                    {layer.label}
                  </text>
                </g>
              );
            })}
            {/* Center shield icon */}
            <g
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.5s 0.9s",
              }}
            >
              <circle cx="180" cy="180" r="22" fill="hsl(var(--brand-secondary))" fillOpacity="0.15" />
              <text x="180" y="185" textAnchor="middle" fill="hsl(var(--brand-secondary))" fontSize="16">🛡️</text>
            </g>
          </svg>
        </div>

        {/* Detail panel */}
        <div className="w-full lg:w-1/2 space-y-3">
          {securityLayers.map((layer) => {
            const Icon = layer.icon;
            const isActive = activeLayer === layer.id;
            return (
              <div
                key={layer.id}
                className={`rounded-xl border p-4 transition-all duration-300 cursor-pointer ${
                  isActive ? "border-[hsl(var(--brand-secondary))] bg-[hsl(var(--brand-secondary))]/5" : "border-border"
                }`}
                onClick={() => setActiveLayer(isActive ? null : layer.id)}
                onMouseEnter={() => setActiveLayer(layer.id)}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[hsl(var(--brand-secondary))]/10 flex items-center justify-center text-[hsl(var(--brand-secondary))]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h5 className="text-sm font-semibold text-brand-primary">{layer.label} Layer</h5>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item, j) => (
                      <span key={j} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecurityLayers;
