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

interface BlogSeoHeadProps {
  title: string;
  description?: string;
  slug: string;
  imageUrl?: string;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
  category?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImageUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  schemaType?: string;
  authorName?: string;
  authorUrl?: string;
  twitterCardType?: string;
}

const BlogSeoHead = ({
  title,
  description,
  slug,
  imageUrl,
  author,
  publishedAt,
  updatedAt,
  tags,
  category,
  ogTitle,
  ogDescription,
  ogImageUrl,
  metaTitle,
  metaDescription,
  canonicalUrl,
  noindex,
  nofollow,
  schemaType = "BlogPosting",
  authorName,
  authorUrl,
  twitterCardType = "summary_large_image",
}: BlogSeoHeadProps) => {
  const postUrl = canonicalUrl || `${SITE_URL}/blog/${slug}`;
  const finalTitle = metaTitle || title;
  const finalDescription = metaDescription || description || "";
  const finalOgTitle = ogTitle || finalTitle;
  const finalOgDescription = ogDescription || finalDescription;
  const finalOgImage = toAbsoluteAssetUrl(ogImageUrl || imageUrl);
  const isDefaultImage = finalOgImage === DEFAULT_OG_IMAGE;

  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
  ].join(", ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": schemaType,
    headline: title,
    description: finalDescription,
    image: finalOgImage || undefined,
    author: {
      "@type": "Person",
      name: authorName || author || "CollabAI Team",
      ...(authorUrl ? { url: authorUrl } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "CollabAI",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/lovable-uploads/collabai-dashboard-preview.png`,
      },
    },
    datePublished: publishedAt || undefined,
    dateModified: updatedAt || publishedAt || undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    ...(tags && tags.length > 0 ? { keywords: tags.join(", ") } : {}),
    ...(category ? { articleSection: category } : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
      { "@type": "ListItem", "position": 3, "name": title, "item": postUrl }
    ]
  };

  return (
    <Helmet>
      <title>{finalTitle} | CollabAI Blog</title>
      <meta name="description" content={finalDescription} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={postUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={postUrl} />
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
      {publishedAt && <meta property="article:published_time" content={publishedAt} />}
      {updatedAt && <meta property="article:modified_time" content={updatedAt} />}
      {tags?.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
    </Helmet>
  );
};

export default BlogSeoHead;
