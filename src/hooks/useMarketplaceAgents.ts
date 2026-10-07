import { useQuery } from "@tanstack/react-query";
import {
  marketplaceSupabase,
  type MarketplaceAgent,
} from "@/integrations/marketplace/client";

// Map this site's vertical slugs to the marketplace `vertical` column values.
const VERTICAL_MAP: Record<string, string> = {
  agency: "agency",
  "mortgage-bank": "mortgage",
  mortgage: "mortgage",
  "non-profit": "nonprofit",
  nonprofit: "nonprofit",
  healthcare: "healthcare",
  touring: "touring",
};

export function mapToMarketplaceVertical(slug?: string | null): string | undefined {
  if (!slug) return undefined;
  return VERTICAL_MAP[slug] ?? slug;
}

export interface UseMarketplaceAgentsOptions {
  vertical?: string;
  featuredFirst?: boolean;
  limit?: number;
}

export function useMarketplaceAgents(opts: UseMarketplaceAgentsOptions = {}) {
  const { vertical, featuredFirst = true, limit = 8 } = opts;
  return useQuery<MarketplaceAgent[]>({
    queryKey: ["marketplace-agents", { vertical: vertical ?? null, featuredFirst, limit }],
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      let q = marketplaceSupabase
        .from("marketplace_listings")
        .select(
          "slug, agent_name, description, vertical, subcategory, is_featured, is_free, install_count, demo_url"
        )
        .eq("status", "active");
      if (vertical) q = q.eq("vertical", vertical);
      if (featuredFirst) q = q.order("is_featured", { ascending: false });
      q = q
        .order("install_count", { ascending: false })
        .order("agent_name", { ascending: true })
        .limit(limit);
      const { data, error } = await q;
      if (error) throw error;
      return (data ?? []) as MarketplaceAgent[];
    },
  });
}

/**
 * Live counts of active marketplace listings, keyed by raw marketplace `vertical`
 * value (e.g. "agency", "mortgage", "nonprofit", "healthcare", "touring",
 * "insurance", "real_estate"). Cached for 5 minutes across the app.
 */
export function useMarketplaceAgentCounts() {
  return useQuery<Record<string, number>>({
    queryKey: ["marketplace-agent-counts"],
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      const { data, error } = await marketplaceSupabase
        .from("marketplace_listings")
        .select("vertical")
        .eq("status", "active");
      if (error) throw error;
      const counts: Record<string, number> = {};
      for (const row of data ?? []) {
        const v = (row as { vertical: string | null }).vertical;
        if (!v) continue;
        counts[v] = (counts[v] ?? 0) + 1;
      }
      return counts;
    },
  });
}

export function formatAgentCount(n: number | undefined): string | null {
  if (typeof n !== "number" || !isFinite(n) || n <= 0) return null;
  return `${n}+`;
}

/**
 * Returns a "66+" style live count string for a site vertical slug.
 * Falls back to the provided static string while loading or on error.
 */
export function useLiveAgentCount(slug: string | undefined, fallback: string): string {
  const { data } = useMarketplaceAgentCounts();
  const marketplaceVertical = mapToMarketplaceVertical(slug);
  if (!data || !marketplaceVertical) return fallback;
  return formatAgentCount(data[marketplaceVertical]) ?? fallback;
}