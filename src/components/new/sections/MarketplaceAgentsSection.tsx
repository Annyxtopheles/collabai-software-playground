import { ArrowRight, ExternalLink, Sparkles, Store } from "lucide-react";
import {
  useMarketplaceAgents,
  mapToMarketplaceVertical,
  useMarketplaceAgentCounts,
} from "@/hooks/useMarketplaceAgents";
import { MARKETPLACE_SITE_URL } from "@/integrations/marketplace/client";

interface Props {
  /** This site's vertical slug, e.g. "mortgage-bank". Omit to show across all verticals. */
  verticalSlug?: string;
  /** Section heading override. */
  heading?: string;
  /** Subheading copy override. */
  subheading?: string;
  /** Max cards to render. */
  limit?: number;
  /** Optional className for the outer section. */
  className?: string;
}

const MarketplaceAgentsSection = ({
  verticalSlug,
  heading,
  subheading,
  limit = 6,
  className = "",
}: Props) => {
  const vertical = mapToMarketplaceVertical(verticalSlug);
  const browseUrl = vertical
    ? `${MARKETPLACE_SITE_URL}/browse?vertical=${vertical}`
    : `${MARKETPLACE_SITE_URL}/browse`;
  const { data: agents, isLoading, isError } = useMarketplaceAgents({ vertical, limit });
  const { data: counts } = useMarketplaceAgentCounts();
  const liveTotal = vertical
    ? counts?.[vertical]
    : counts
    ? Object.values(counts).reduce((s, n) => s + n, 0)
    : undefined;

  const title =
    heading ??
    (liveTotal && vertical
      ? `${liveTotal} ${vertical.replace("_", " ")} agents in the Marketplace`
      : "More agents from the CollabAI Marketplace");
  const sub =
    subheading ??
    "Browse the full catalog of agents from across our platform — install, remix, or submit your own.";

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-secondary">
            <Store className="h-3.5 w-3.5 text-[hsl(var(--brand-secondary))]" />
            CollabAI Agents Marketplace
          </span>
          <h2 className="mt-4 text-3xl font-bold text-brand-primary lg:text-4xl">{title}</h2>
          <p className="mt-3 text-base text-slate-secondary">{sub}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading &&
            Array.from({ length: Math.min(limit, 6) }).map((_, i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-xl border border-border bg-card"
              />
            ))}

          {!isLoading && (isError || !agents || agents.length === 0) && (
            <div className="col-span-full rounded-xl border border-dashed border-border bg-card p-10 text-center">
              <p className="text-sm text-slate-secondary">
                Browse the live catalog directly on the marketplace.
              </p>
              <a
                href={browseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-secondary))]"
              >
                Open Marketplace <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}

          {!isLoading &&
            agents?.map((a) => (
              <a
                key={a.slug}
                href={`${MARKETPLACE_SITE_URL}/listing/${a.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--brand-secondary))] hover:shadow-md active:translate-y-[2px]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-brand-primary group-hover:text-[hsl(var(--brand-secondary))]">
                      {a.agent_name}
                    </h3>
                    {a.is_featured && (
                      <span className="inline-flex items-center gap-1 rounded bg-[hsl(var(--signal-live))]/15 px-1.5 py-0.5 text-[10px] font-mono uppercase text-brand-primary">
                        <Sparkles className="h-3 w-3" /> Featured
                      </span>
                    )}
                  </div>
                  {a.description && (
                    <p className="mt-2 line-clamp-3 text-sm text-slate-secondary">
                      {a.description}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-secondary">
                  <span className="inline-flex items-center gap-2">
                    {a.subcategory && (
                      <span className="rounded bg-slate-light px-2 py-0.5 font-mono uppercase tracking-wider">
                        {a.subcategory}
                      </span>
                    )}
                    {null}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[hsl(var(--brand-secondary))]">
                    View <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={browseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-brand-primary transition-all hover:shadow-md active:translate-y-[2px]"
          >
            Browse all agents on the Marketplace <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceAgentsSection;