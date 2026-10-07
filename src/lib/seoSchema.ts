/**
 * Shared JSON-LD builders for the /new revamp.
 * Keep these tiny and composable; pages pass the result to <PageSeoHead jsonLd={...}> .
 */

export const SITE_URL = "https://collabai.software";
const LOGO_URL = `${SITE_URL}/lovable-uploads/collabai-logo.png`;

/** Sitewide social card. 1200×640 JPEG in public/og — crawlers reject mismatched type/URL pairs. */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/og-default.jpg`;
export const OG_IMAGE_TYPE = "image/jpeg";
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "640";
export const OG_IMAGE_ALT = "CollabAI — Private AI Control Tower";

/** Turn a relative path or any URL into an absolute https URL crawlers can fetch. */
export function toAbsoluteAssetUrl(pathOrUrl?: string | null): string {
  const raw = (pathOrUrl || "").trim();
  if (!raw) return DEFAULT_OG_IMAGE;
  if (/^https:\/\//i.test(raw)) return raw;
  if (raw.startsWith("/")) return `${SITE_URL}${raw}`;
  return DEFAULT_OG_IMAGE;
}

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CollabAI",
  legalName: "SJ Innovation LLC",
  url: SITE_URL,
  logo: LOGO_URL,
  foundingDate: "2004",
  sameAs: [
    "https://www.linkedin.com/company/collabaisoftware",
    "https://twitter.com/CollabAI1",
    "https://github.com/collabai",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "sales@collabai.software",
    telephone: "+1-646-666-9714",
    availableLanguage: ["en"],
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CollabAI · Control Tower",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const softwareApplicationSchema = (overrides?: {
  name?: string;
  description?: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: overrides?.name ?? "Control Tower by CollabAI",
  applicationCategory: overrides?.category ?? "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    overrides?.description ??
    "Private AI operations platform for regulated industries. 100+ AI agents, dashboards, and integrations on a Supabase backbone.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "2500",
    highPrice: "7500",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
  },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const productSchema = (params: {
  name: string;
  description: string;
  path: string;
  price?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: params.name,
  description: params.description,
  brand: { "@type": "Brand", name: "CollabAI" },
  url: `${SITE_URL}${params.path}`,
  offers: params.price
    ? {
        "@type": "Offer",
        price: params.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      }
    : undefined,
});

export const faqSchema = (qa: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: qa.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});
