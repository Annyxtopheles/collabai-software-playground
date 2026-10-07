import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { verticals, nicheSlugs } from "@/data/verticals";
import { useLiveAgentCount } from "@/hooks/useMarketplaceAgents";

const NicheRow = ({ slug, dismiss }: { slug: typeof nicheSlugs[number]; dismiss: () => void }) => {
  const v = verticals[slug];
  const count = useLiveAgentCount(v.routeSlug, v.agentCount);
  return (
    <Link
      to={`/${v.routeSlug}`}
      onClick={dismiss}
      className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-brand-primary transition hover:border-[hsl(var(--brand-secondary))] hover:shadow-md"
    >
      <span>{v.displayName}</span>
      <span className="font-mono text-[10px] text-slate-secondary">{count} agents</span>
    </Link>
  );
};

const STORAGE_KEY = "ca_industry_picked";

const IndustryChooserModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const seen = window.localStorage.getItem(STORAGE_KEY);
      if (seen) return;
    } catch {
      return;
    }
    const t = window.setTimeout(() => setOpen(true), 1500);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    try { window.localStorage.setItem(STORAGE_KEY, "1"); } catch { /* storage unavailable */ }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4 py-6" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl rounded-2xl border border-border bg-background p-6 shadow-xl">
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[hsl(var(--brand-secondary))]">
            Personalize
          </span>
          <h2 className="mt-2 text-2xl font-bold text-brand-primary">Which industry are you in?</h2>
          <p className="mt-2 text-sm text-slate-secondary">
            We&rsquo;ll take you to a page tuned for your workflow. Skip if you want to browse.
          </p>
        </div>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {nicheSlugs.map((slug) => (
            <NicheRow key={slug} slug={slug} dismiss={dismiss} />
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center gap-4 text-xs">
          <button onClick={dismiss} className="text-slate-secondary hover:text-brand-primary">
            Skip — I&rsquo;ll browse
          </button>
          <span aria-hidden className="text-foreground/20">·</span>
          <Link onClick={dismiss} to="/try-demo" className="font-semibold text-[hsl(var(--brand-secondary))] hover:underline">
            Just show me the demos →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryChooserModal;