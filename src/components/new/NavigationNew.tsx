import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const platformItems = [
  { label: "Overview", to: "/control-tower" },
  { label: "How It Works", to: "/control-tower/how-it-works" },
  { label: "Operational Dashboards", to: "/control-tower/dashboards" },
  { label: "AI Workforce Dashboard", to: "/ai-dashboard" },
  { label: "AI Agents (100+)", to: "/control-tower/ai-agents" },
  { label: "Security", to: "/control-tower/security" },
  { label: "Mobile Apps", to: "/control-tower/mobile" },
  { label: "Integrations", to: "/control-tower/integrations" },
];

const productPlatform = [
  { label: "CollabAI Platform", to: "/collabai-platform" },
  { label: "Open Source", to: "/collabai-platform#open-source" },
  { label: "Built on Supabase", to: "/built-on-supabase" },
  { label: "Custom AI Agents", to: "/collabai-platform#agents" },
];

const verticals = [
  { label: "Agency Control Tower", to: "/agency" },
  { label: "Healthcare Control Tower (ePhysician)", to: "/healthcare" },
  { label: "Mortgage Control Tower", to: "/mortgage-bank" },
  { label: "Nonprofit Control Tower", to: "/non-profit" },
];

const resources = [
  { label: "Blog", to: "/blog" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "FAQs", to: "/resources/faqs" },
  { label: "Installation", to: "/resources/installation" },
  { label: "Whitepapers", to: "/resources/whitepapers" },
  { label: "Knowledge Base", to: "/resources/knowledge-base" },
  { label: "Developers", to: "/developers" },
  { label: "API", to: "/api" },
  { label: "About", to: "/about" },
  { label: "Partnership", to: "/partnership" },
  { label: "Contact", to: "/contact" },
];

const NavigationNew = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur instapaper_ignore">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 text-foreground" aria-label="CollabAI home">
            <img
              src="/lovable-uploads/aed406e1-e3d5-4045-9238-c551bc2ca3a4.png"
              alt="CollabAI"
              className="h-10 w-auto"
            />
          </Link>
          <span className="hidden md:inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <Lock className="h-3 w-3 text-[hsl(var(--brand-secondary))]" />
            Private by design
          </span>
        </div>

        {/* Desktop nav */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-secondary data-[state=open]:text-secondary">Platform</NavigationMenuTrigger>
              <NavigationMenuContent className="left-0 translate-x-0">
                <div className="grid w-[640px] grid-cols-2 gap-6 p-6">
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                      Control Tower · Featured
                    </div>
                    <ul className="space-y-1">
                      {platformItems.map((i) => (
                        <li key={i.to}>
                          <Link
                            to={i.to}
                            className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-muted"
                          >
                            {i.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      CollabAI Platform
                    </div>
                    <ul className="space-y-1">
                      {productPlatform.map((i) => (
                        <li key={i.to}>
                          <Link
                            to={i.to}
                            className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-muted"
                          >
                            {i.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-secondary data-[state=open]:text-secondary">Industry</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[260px] space-y-1 p-4">
                  {verticals.map((i) => (
                    <li key={i.to}>
                      <Link
                        to={i.to}
                        className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-muted"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink
                  to="/pricing"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-foreground hover:text-secondary data-[active]:text-secondary"
                  )}
                >
                  Pricing
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-secondary data-[state=open]:text-secondary">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[260px] space-y-1 p-4">
                  {resources.map((i) => (
                    <li key={i.to}>
                      <Link
                        to={i.to}
                        className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-muted"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:block">
          <Button asChild className="hover:shadow-[0_4px_14px_0_rgba(49,94,255,0.25)]">
            <Link to="/book-demo">Get Free Demo</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl space-y-4 px-4 py-4">
            <MobileGroup title="Platform · Control Tower" items={platformItems} onNavigate={() => setMobileOpen(false)} />
            <MobileGroup title="CollabAI Platform" items={productPlatform} onNavigate={() => setMobileOpen(false)} />
            <MobileGroup title="Industry" items={verticals} onNavigate={() => setMobileOpen(false)} />
            <MobileGroup title="Resources" items={resources} onNavigate={() => setMobileOpen(false)} />
            <div className="flex gap-3 pt-2">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
              </Button>
              <Button asChild className="flex-1 bg-foreground text-background hover:bg-foreground/90">
                <Link to="/book-demo" onClick={() => setMobileOpen(false)}>Get Free Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const MobileGroup = ({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: { label: string; to: string }[];
  onNavigate: () => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border pb-2">
      <button
        className="flex w-full items-center justify-between py-2 text-sm font-semibold"
        onClick={() => setOpen((v) => !v)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="pb-2">
          {items.map((i) => (
            <li key={i.to}>
              <Link
                to={i.to}
                onClick={onNavigate}
                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavigationNew;