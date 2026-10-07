import { Helmet } from "react-helmet-async";
import {
  DEFAULT_OG_IMAGE,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_TYPE,
  OG_IMAGE_WIDTH,
  SITE_URL,
  toAbsoluteAssetUrl,
} from "@/lib/seoSchema";

interface PageSeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const PageSeoHead = ({
  title,
  description,
  canonicalPath,
  ogImage,
  ogType = "website",
  jsonLd,
  noindex = false,
}: PageSeoHeadProps) => {
  const currentPath = canonicalPath || (typeof window !== "undefined" ? window.location.pathname : "/");
  const canonicalUrl = `${SITE_URL}${currentPath}`.replace(/\/$/, "") || SITE_URL;
  const finalOgImage = toAbsoluteAssetUrl(ogImage);
  const isDefaultImage = finalOgImage === DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph — every public page must ship a complete, non-conflicting set. */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:secure_url" content={finalOgImage} />
      <meta property="og:site_name" content="CollabAI" />
      {isDefaultImage && (
        <>
          <meta property="og:image:type" content={OG_IMAGE_TYPE} />
          <meta property="og:image:width" content={OG_IMAGE_WIDTH} />
          <meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
          <meta property="og:image:alt" content={OG_IMAGE_ALT} />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default PageSeoHead;
