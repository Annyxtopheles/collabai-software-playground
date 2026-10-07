export const PM2Icon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-2">
    {/* Server rack */}
    <rect x="12" y="8" width="40" height="48" rx="4" stroke="hsl(var(--brand-secondary))" strokeWidth="1.5" fill="hsl(var(--brand-secondary))" fillOpacity="0.05" />
    {/* Rack slots */}
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x="16" y={14 + i * 14} width="32" height="10" rx="2" fill="hsl(var(--brand-secondary))" fillOpacity="0.1" stroke="hsl(var(--border))" strokeWidth="0.8" />
        <circle cx="22" cy={19 + i * 14} r="2" fill="hsl(var(--brand-secondary))" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
        <line x1="28" y1={19 + i * 14} x2="44" y2={19 + i * 14} stroke="hsl(var(--border))" strokeWidth="1" />
      </g>
    ))}
  </svg>
);

export const DockerIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-2">
    {/* Container base */}
    <rect x="8" y="32" width="48" height="24" rx="4" stroke="hsl(var(--brand-secondary))" strokeWidth="1.5" fill="hsl(var(--brand-secondary))" fillOpacity="0.05" />
    {/* Stacked layers */}
    <rect x="14" y="26" width="36" height="8" rx="2" fill="hsl(var(--brand-secondary))" fillOpacity="0.15" stroke="hsl(var(--brand-secondary))" strokeWidth="0.8" />
    <rect x="18" y="20" width="28" height="8" rx="2" fill="hsl(var(--brand-secondary))" fillOpacity="0.1" stroke="hsl(var(--brand-secondary))" strokeWidth="0.8" />
    <rect x="22" y="14" width="20" height="8" rx="2" fill="hsl(var(--brand-secondary))" fillOpacity="0.08" stroke="hsl(var(--brand-secondary))" strokeWidth="0.8" />
    {/* Grid inside base */}
    <line x1="24" y1="36" x2="24" y2="52" stroke="hsl(var(--border))" strokeWidth="0.5" />
    <line x1="40" y1="36" x2="40" y2="52" stroke="hsl(var(--border))" strokeWidth="0.5" />
    <line x1="12" y1="44" x2="52" y2="44" stroke="hsl(var(--border))" strokeWidth="0.5" />
  </svg>
);

export const CloudDeployIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-2">
    {/* Cloud shape */}
    <path
      d="M16 36 C8 36 4 30 10 24 C8 16 16 10 24 14 C26 8 36 6 40 12 C48 8 56 14 54 22 C60 24 60 34 52 36 Z"
      fill="hsl(var(--brand-secondary))"
      fillOpacity="0.08"
      stroke="hsl(var(--brand-secondary))"
      strokeWidth="1.5"
    />
    {/* Connection points below */}
    {[20, 32, 44].map((cx, i) => (
      <g key={i}>
        <line x1={cx} y1="36" x2={cx} y2="48" stroke="hsl(var(--brand-secondary))" strokeWidth="1" strokeDasharray="3 2">
          <animate attributeName="stroke-dashoffset" from="5" to="0" dur="1s" repeatCount="indefinite" />
        </line>
        <circle cx={cx} cy="50" r="4" fill="hsl(var(--brand-secondary))" fillOpacity="0.15" stroke="hsl(var(--brand-secondary))" strokeWidth="0.8" />
        <text x={cx} y="53" textAnchor="middle" fontSize="4" fill="hsl(var(--brand-secondary))" fontWeight="600">
          {["AWS", "GCP", "Azure"][i]}
        </text>
      </g>
    ))}
  </svg>
);
