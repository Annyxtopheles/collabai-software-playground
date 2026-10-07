const tenantColors = [
  { fill: "hsl(var(--brand-secondary))", opacity: 0.15, label: "Tenant A" },
  { fill: "hsl(var(--brand-primary))", opacity: 0.08, label: "Tenant B" },
  { fill: "hsl(var(--brand-secondary))", opacity: 0.25, label: "Tenant C" },
];

const MultiTenantBuilding = () => (
  <div className="max-w-sm mx-auto">
    <svg viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Building outline */}
      <rect x="40" y="30" width="240" height="320" rx="12" fill="none" stroke="hsl(var(--border))" strokeWidth="1.5" />

      {/* Roof / Platform label */}
      <rect x="40" y="30" width="240" height="36" rx="12" fill="hsl(var(--brand-primary))" fillOpacity="0.05" />
      <text x="160" y="53" textAnchor="middle" fill="hsl(var(--brand-primary))" fontSize="11" fontWeight="600">CollabAI Platform</text>

      {/* Tenant floors */}
      {tenantColors.map((t, i) => {
        const y = 76 + i * 88;
        return (
          <g key={i}>
            {/* Floor */}
            <rect x="56" y={y} width="208" height="72" rx="8" fill={t.fill} fillOpacity={t.opacity} stroke={t.fill} strokeWidth="0.8" strokeOpacity="0.3" />
            {/* Label */}
            <text x="80" y={y + 24} fill="hsl(var(--brand-primary))" fontSize="11" fontWeight="600">{t.label}</text>
            {/* Room partitions */}
            <line x1="160" y1={y + 8} x2="160" y2={y + 64} stroke={t.fill} strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 3" />
            {/* Mini icons - workspace items */}
            <rect x="72" y={y + 36} width="28" height="20" rx="3" fill={t.fill} fillOpacity="0.2" />
            <rect x="108" y={y + 36} width="28" height="20" rx="3" fill={t.fill} fillOpacity="0.15" />
            <rect x="176" y={y + 36} width="28" height="20" rx="3" fill={t.fill} fillOpacity="0.2" />
            <rect x="212" y={y + 36} width="28" height="20" rx="3" fill={t.fill} fillOpacity="0.15" />

            {/* Lock between floors */}
            {i < 2 && (
              <g transform={`translate(152, ${y + 76})`}>
                <rect x="-8" y="-5" width="16" height="10" rx="3" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1" />
                <circle cx="0" cy="0" r="2" fill="hsl(var(--brand-secondary))" />
              </g>
            )}
          </g>
        );
      })}

      {/* Shared infrastructure at base */}
      <rect x="40" y="342" width="240" height="8" fill="hsl(var(--brand-secondary))" fillOpacity="0.1" />

      {/* Shared services label */}
      <g transform="translate(160, 370)">
        <text textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" fontWeight="500">Shared Infrastructure</text>
        <text textAnchor="middle" y="14" fill="hsl(var(--muted-foreground))" fontSize="9">Auth · Storage · AI Routing</text>
      </g>

      {/* Elevator / shared column */}
      <rect x="40" y="66" width="8" height="284" fill="hsl(var(--brand-secondary))" fillOpacity="0.08" />
      <rect x="272" y="66" width="8" height="284" fill="hsl(var(--brand-secondary))" fillOpacity="0.08" />

      {/* Animated elevator dot */}
      <circle cx="44" cy="0" r="3" fill="hsl(var(--brand-secondary))" opacity="0.6">
        <animateMotion dur="3s" repeatCount="indefinite" path="M0,80 L0,340 L0,80" />
      </circle>
    </svg>
  </div>
);

export default MultiTenantBuilding;
