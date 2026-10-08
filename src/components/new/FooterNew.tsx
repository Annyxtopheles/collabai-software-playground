import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import collabAiLogo from "@/assets/collabai-logo.png";

type FooterLink = { label: string; to: string; external?: boolean };

const col = (title: string, links: FooterLink[]) => (
  <div>
    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</h4>
    <ul className="space-y-2">
      {links.map((l) => (
        <li key={l.to}>
          {l.external ? (
            <a
              href={l.to}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/80 hover:text-secondary"
            >
              {l.label}
            </a>
          ) : (
            <Link to={l.to} className="text-sm text-foreground/80 hover:text-secondary">
              {l.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const iconClass = "h-5 w-5";

const socials: { label: string; href: string; icon: JSX.Element }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/collabaisoftware/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/collabai/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/CollabAI1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    ),
  },
];

const FooterNew = () => (
  <footer className="border-t border-border bg-background instapaper_ignore">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
        <div className="col-span-2">
          <img
            src={collabAiLogo}
            alt="CollabAI"
            className="h-10 w-auto object-contain"
          />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Private AI ops for your company. Visibility, control, and AI agents that read and write across your stack.
          </p>
          <div className="mt-5 flex items-center gap-4">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="text-muted-foreground transition-colors hover:text-secondary"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        {col("Product", [
          { label: "Control Tower", to: "/control-tower" },
          { label: "CollabAI Platform", to: "/collabai-platform" },
          { label: "Dashboards", to: "/control-tower/dashboards" },
          { label: "AI Agents", to: "/control-tower/ai-agents" },
          { label: "Security", to: "/control-tower/security" },
          { label: "Integrations", to: "/control-tower/integrations" },
        ])}
        {col("Marketplace", [
          { label: "Agents Marketplace", to: "https://marketplace.collabai.software/", external: true },
          { label: "Browse Agents", to: "https://marketplace.collabai.software/browse", external: true },
          { label: "Submit an Agent", to: "https://marketplace.collabai.software/submit", external: true },
        ])}
        {col("Industries", [
          { label: "ePhysician Control Tower", to: "/healthcare" },
          { label: "Mortgage Control Tower", to: "/mortgage-bank" },
          { label: "Agency Control Tower", to: "/agency" },
          { label: "Nonprofit Control Tower", to: "/non-profit" },
        ])}
        {col("Company", [
          { label: "About", to: "/about" },
          { label: "Pricing", to: "/pricing" },
          { label: "Blog", to: "/blog" },
          { label: "Contact", to: "/contact" },
          { label: "Privacy", to: "/privacy" },
          { label: "Terms", to: "/terms" },
          { label: "AI Readiness", to: "/ai-readiness" },
          { label: "Developers", to: "/developers" },
          { label: "API", to: "/api" },
        ])}
      </div>
      <div className="mt-10 flex items-center gap-2 border-t border-border pt-6 text-xs text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--brand-secondary))]" />
        <span>Private by design. Self-hosted by default. Your data stays in your tenant.</span>
      </div>
      <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">© 2026 CollabAI. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Built on Supabase · SJ Innovation LLC · Founded 2004 · 3 global offices · 400+ clients</p>
      </div>
    </div>
  </footer>
);

export default FooterNew;