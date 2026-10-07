import { useParams, Navigate } from "react-router-dom";
import NicheHubTemplate from "@/components/new/NicheHubTemplate";
import NicheSubPageTemplate from "@/components/new/NicheSubPageTemplate";
import { verticals, nicheSlugs, type NicheSlug } from "@/data/verticals";

const isNiche = (s?: string): s is NicheSlug => !!s && (nicheSlugs as readonly string[]).includes(s);

const seoFor = (slug: NicheSlug) => {
  const c = verticals[slug];
  const productName = c.subBrand?.name ?? c.displayName;
  return {
    title: c.subBrand
      ? `${productName} — ${c.subBrand.seoTagline ?? c.eyebrow}`
      : `${c.displayName} — Control Tower + AI agents`,
    description: c.hero.sub.slice(0, 158),
    canonicalPath: `/${slug}`,
  };
};

export const NicheHub = () => {
  const { niche } = useParams();
  if (!isNiche(niche)) return <Navigate to="/" replace />;
  return <NicheHubTemplate config={verticals[niche]} seo={seoFor(niche)} />;
};

export const NicheAgents = () => {
  const { niche } = useParams();
  if (!isNiche(niche)) return <Navigate to="/" replace />;
  return <NicheSubPageTemplate config={verticals[niche]} mode="agents" />;
};

export const NicheUseCases = () => {
  const { niche } = useParams();
  if (!isNiche(niche)) return <Navigate to="/" replace />;
  return <NicheSubPageTemplate config={verticals[niche]} mode="use-cases" />;
};

export const NicheWorkflows = () => {
  const { niche } = useParams();
  if (!isNiche(niche)) return <Navigate to="/" replace />;
  return <NicheSubPageTemplate config={verticals[niche]} mode="workflows" />;
};