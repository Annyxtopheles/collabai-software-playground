import { useScrollReveal } from "@/hooks/useScrollReveal";

const tiers = [
  { label: "Load Balancer", detail: "SSL Termination · Health Checks", y: 20, badges: ["Nginx", "Cloud LB"] },
  { label: "Application Servers", detail: "Server 1 (PM2) · Server 2 (PM2) · Server N", y: 120, badges: ["Node.js", "Express"] },
  { label: "Database Layer", detail: "PostgreSQL · Connection Pooling · Replicas", y: 220, badges: ["Supabase", "RLS"] },
  { label: "Storage Layer", detail: "AWS S3 · Supabase Storage", y: 320, badges: ["S3", "CDN"] },
];

const ProductionArchDiagram = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div ref={ref} className="rounded-2xl p-8 lg:p-12 mt-12 border border-border">
      <h3 className="text-xl font-semibold text-brand-primary mb-8">Production Architecture</h3>
      <div className="max-w-lg mx-auto">
        <svg viewBox="0 0 460 410" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {/* Connection lines */}
          {[0, 1, 2].map((i) => (
            <g key={`line-${i}`}>
              <line
                x1="230" y1={tiers[i].y + 65}
                x2="230" y2={tiers[i + 1].y + 10}
                stroke="hsl(var(--brand-secondary))"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                style={{
                  opacity: isVisible ? 0.4 : 0,
                  transition: `opacity 0.4s ${0.2 + i * 0.15}s`,
                }}
              >
                <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1.2s" repeatCount="indefinite" />
              </line>
              {/* Arrow */}
              <polygon
                points={`225,${tiers[i + 1].y + 8} 230,${tiers[i + 1].y + 14} 235,${tiers[i + 1].y + 8}`}
                fill="hsl(var(--brand-secondary))"
                style={{
                  opacity: isVisible ? 0.5 : 0,
                  transition: `opacity 0.4s ${0.3 + i * 0.15}s`,
                }}
              />
            </g>
          ))}

          {/* Tier boxes */}
          {tiers.map((tier, i) => {
            const isTop = i === 0;
            const opacity = isTop ? 0.12 : i % 2 === 0 ? 0.08 : 0.05;
            return (
              <g
                key={i}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(8px)",
                  transition: `opacity 0.4s ${i * 0.12}s, transform 0.4s ${i * 0.12}s`,
                }}
              >
                <rect
                  x="30" y={tier.y}
                  width="400" height="70"
                  rx="10"
                  fill={`hsl(var(--brand-secondary) / ${opacity})`}
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                />
                <text x="50" y={tier.y + 28} fill="hsl(var(--brand-primary))" fontSize="13" fontWeight="700">
                  {tier.label}
                </text>
                <text x="50" y={tier.y + 46} fill="hsl(var(--muted-foreground))" fontSize="10">
                  {tier.detail}
                </text>
                {/* Badges */}
                {tier.badges.map((badge, j) => (
                  <g key={j}>
                    <rect
                      x={310 + j * 60} y={tier.y + 14}
                      width="52" height="20" rx="10"
                      fill="hsl(var(--brand-secondary))"
                      fillOpacity="0.1"
                      stroke="hsl(var(--brand-secondary))"
                      strokeWidth="0.5"
                      strokeOpacity="0.3"
                    />
                    <text
                      x={336 + j * 60} y={tier.y + 28}
                      textAnchor="middle"
                      fill="hsl(var(--brand-secondary))"
                      fontSize="8"
                      fontWeight="600"
                    >
                      {badge}
                    </text>
                  </g>
                ))}
              </g>
            );
          })}

        </svg>
      </div>
    </div>
  );
};

export default ProductionArchDiagram;
