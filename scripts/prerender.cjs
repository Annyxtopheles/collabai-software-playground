/**
 * Pure-Node prerender.
 *
 * Reads dist/index.html (the built SPA shell) and writes
 * dist/<route>/index.html for every public route with per-route head tags:
 *   - <title>
 *   - <meta name="description">
 *   - <link rel="canonical">
 *   - <meta property="og:url">
 *   - <meta property="og:title"> / og:description / og:image
 *   - <meta name="twitter:title"> / twitter:description / twitter:image
 *
 * No headless browser required. Runs in <2s.
 *
 * Dynamic routes (blog posts, etc.) are pulled from the database via the
 * public anon key. If the DB call fails, static routes still ship.
 *
 * If anything throws, we log and exit 0 so the deploy never fails because
 * of pre-rendering.
 */
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://collabai.software";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/og-default.jpg`;
const DEFAULT_OG_IMAGE_WIDTH = "1200";
const DEFAULT_OG_IMAGE_HEIGHT = "640";
const DEFAULT_OG_IMAGE_TYPE = "image/jpeg";
const DEFAULT_OG_IMAGE_ALT = "CollabAI — Private AI Control Tower";
const SUPABASE_URL = "https://wabbtpqnvfdrvdzoyaxr.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhYmJ0cHFudmZkcnZkem95YXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzOTI0OTksImV4cCI6MjA3NDk2ODQ5OX0.E4zCVaCsr9ar_7G5NDtpCrchmLk6xZquNF3l9e16Qng";

const DIST = path.resolve(__dirname, "..", "dist");
const SHELL_PATH = path.join(DIST, "index.html");
const AGENT_TEAMS_PATH = path.resolve(__dirname, "..", "src", "data", "agentTeams.ts");

const NICHE_SLUGS = ["agency", "mortgage-bank", "healthcare", "non-profit", "touring", "pharma"];

const ADMIN_PATTERNS = [/^\/admin(\/|$)/];
const isAdminPath = (p) => ADMIN_PATTERNS.some((re) => re.test(p));

const stripHtml = (s) =>
  String(s ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();

const isSafeAbsoluteImage = (url) =>
  typeof url === "string" && /^https:\/\//i.test(url.trim());

const escapeHtml = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const escapeAttr = escapeHtml;

/**
 * Rewrite a single <head> tag (or insert it before </head> if missing).
 * `matcher` is a RegExp finding the existing tag; `replacement` is the new tag.
 */
function upsertTag(html, matcher, replacement) {
  if (matcher.test(html)) return html.replace(matcher, replacement);
  return html.replace(/<\/head>/i, `  ${replacement}\n</head>`);
}

function rewriteHead(shellHtml, meta) {
  const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
  const title = stripHtml(meta.title) || "CollabAI - Enterprise AI Platform";
  const description =
    stripHtml(meta.description) ||
    "Deploy secure, industry-specific AI agents behind your firewall.";
  const image = isSafeAbsoluteImage(meta.image) ? meta.image : DEFAULT_OG_IMAGE;

  const t = escapeHtml(title);
  const d = escapeAttr(description);
  const u = escapeAttr(url);
  const i = escapeAttr(image);

  let html = shellHtml;

  // <title>
  html = upsertTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${t}</title>`);
  // description
  html = upsertTag(
    html,
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${d}">`
  );
  // canonical
  html = upsertTag(
    html,
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${u}">`
  );
  // og:url
  html = upsertTag(
    html,
    /<meta\s+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${u}">`
  );
  // og:title
  html = upsertTag(
    html,
    /<meta\s+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${t}">`
  );
  // og:description
  html = upsertTag(
    html,
    /<meta\s+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${d}">`
  );
  // og:type
  html = upsertTag(
    html,
    /<meta\s+property=["']og:type["'][^>]*>/i,
    `<meta property="og:type" content="${meta.ogType || "website"}">`
  );
  // og:image
  html = upsertTag(
    html,
    /<meta\s+property=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${i}">`
  );
  html = upsertTag(
    html,
    /<meta\s+property=["']og:image:secure_url["'][^>]*>/i,
    `<meta property="og:image:secure_url" content="${i}">`
  );
  const usingDefaultImage = image === DEFAULT_OG_IMAGE;
  if (usingDefaultImage) {
    html = upsertTag(
      html,
      /<meta\s+property=["']og:image:type["'][^>]*>/i,
      `<meta property="og:image:type" content="${DEFAULT_OG_IMAGE_TYPE}">`
    );
    html = upsertTag(
      html,
      /<meta\s+property=["']og:image:width["'][^>]*>/i,
      `<meta property="og:image:width" content="${DEFAULT_OG_IMAGE_WIDTH}">`
    );
    html = upsertTag(
      html,
      /<meta\s+property=["']og:image:height["'][^>]*>/i,
      `<meta property="og:image:height" content="${DEFAULT_OG_IMAGE_HEIGHT}">`
    );
    html = upsertTag(
      html,
      /<meta\s+property=["']og:image:alt["'][^>]*>/i,
      `<meta property="og:image:alt" content="${escapeAttr(DEFAULT_OG_IMAGE_ALT)}">`
    );
  } else {
    html = html.replace(/\s*<meta\s+property=["']og:image:(?:width|height|type|alt)["'][^>]*>/gi, "");
  }
  html = upsertTag(
    html,
    /<meta\s+property=["']og:site_name["'][^>]*>/i,
    `<meta property="og:site_name" content="CollabAI">`
  );
  // twitter:title
  html = upsertTag(
    html,
    /<meta\s+name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${t}">`
  );
  // twitter:description
  html = upsertTag(
    html,
    /<meta\s+name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${d}">`
  );
  // twitter:image
  html = upsertTag(
    html,
    /<meta\s+name=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${i}">`
  );
  html = upsertTag(
    html,
    /<meta\s+name=["']twitter:image:alt["'][^>]*>/i,
    `<meta name="twitter:image:alt" content="${escapeAttr(DEFAULT_OG_IMAGE_ALT)}">`
  );

  // JSON-LD Article block for blog posts (appended before </head>)
  if (meta.jsonLd) {
    const ld = `<script type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`;
    html = html.replace(/<\/head>/i, `  ${ld}\n</head>`);
  }

  return html;
}

function writeRoute(shellHtml, meta) {
  const html = rewriteHead(shellHtml, meta);
  const routePath = meta.path === "/" ? "" : meta.path.replace(/^\//, "");
  const outDir = routePath ? path.join(DIST, routePath) : DIST;
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, "index.html");
  fs.writeFileSync(outFile, html, "utf8");
}

async function fetchDynamicRoutes() {
  const routes = [];
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=slug,meta_title,title,meta_description,excerpt,og_image_url,image_url,author,published_at,updated_at&is_published=eq.true`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );
    if (res.ok) {
      const rows = await res.json();
      for (const row of rows) {
        if (!row.slug) continue;
        const path = `/blog/${row.slug}`;
        const title = stripHtml(row.meta_title || row.title || "Blog - CollabAI");
        const description = stripHtml(row.meta_description || row.excerpt || "");
        const rawImg = row.og_image_url || row.image_url;
        const image = isSafeAbsoluteImage(rawImg) ? rawImg : DEFAULT_OG_IMAGE;
        const postUrl = `${SITE_URL}${path}`;
        routes.push({
          path,
          title,
          description,
          image,
          ogType: "article",
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            image,
            datePublished: row.published_at || undefined,
            dateModified: row.updated_at || row.published_at || undefined,
            author: {
              "@type": "Person",
              name: row.author || "CollabAI Team",
            },
            publisher: {
              "@type": "Organization",
              name: "CollabAI",
              logo: {
                "@type": "ImageObject",
                url: DEFAULT_OG_IMAGE,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": postUrl,
            },
          },
        });
      }
      console.log(`[prerender] fetched ${rows.length} blog posts`);
    } else {
      console.warn(`[prerender] blog_posts fetch returned ${res.status}`);
    }
  } catch (err) {
    console.warn(
      "[prerender] blog_posts fetch failed:",
      err && err.message ? err.message : err
    );
  }
  return routes;
}

async function fetchKnowledgeBaseRoutes() {
  const routes = [];
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/knowledge_base?select=id,title,slug,category&is_published=eq.true`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );
    if (res.ok) {
      const rows = await res.json();
      for (const row of rows) {
        if (!row.id) continue;
        routes.push({
          path: `/resources/knowledge-base/article/${row.id}`,
          title: `${row.title || "Article"} - CollabAI Knowledge Base`,
          description: row.category
            ? `${row.category} guide from the CollabAI knowledge base.`
            : "Documentation and how-to guides for CollabAI.",
          ogType: "article",
        });
      }
      console.log(`[prerender] fetched ${rows.length} knowledge-base articles`);
    } else {
      console.warn(`[prerender] knowledge_base fetch returned ${res.status}`);
    }
  } catch (err) {
    console.warn(
      "[prerender] knowledge_base fetch failed:",
      err && err.message ? err.message : err
    );
  }
  return routes;
}

/**
 * Parse src/data/agentTeams.ts at build time to generate per-team and
 * per-agent routes without duplicating the data. Regex-based so it can
 * run in plain Node without TS tooling.
 */
function buildAgentRoutes() {
  const routes = [];
  try {
    if (!fs.existsSync(AGENT_TEAMS_PATH)) return routes;
    const src = fs.readFileSync(AGENT_TEAMS_PATH, "utf8");
    // Split into team blocks (each `{ slug: "...", name: "...", ... agents: [ ... ] }`).
    const teamBlockRe =
      /\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*tagline:\s*"([^"]+)"[\s\S]*?agents:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;
    let m;
    let count = 0;
    while ((m = teamBlockRe.exec(src))) {
      const [, teamSlug, teamName, tagline, agentsBlock] = m;
      routes.push({
        path: `/agents/${teamSlug}`,
        title: `${teamName} AI Agents - CollabAI`,
        description: tagline,
      });
      const agentRe =
        /\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"/g;
      let am;
      while ((am = agentRe.exec(agentsBlock))) {
        const [, agentSlug, agentName, desc] = am;
        routes.push({
          path: `/agents/${teamSlug}/${agentSlug}`,
          title: `${agentName} - ${teamName} AI Agent`,
          description: desc.slice(0, 160),
        });
        count++;
      }
    }
    console.log(`[prerender] built ${routes.length} agent routes (${count} agents)`);
  } catch (err) {
    console.warn(
      "[prerender] agent routes failed:",
      err && err.message ? err.message : err
    );
  }
  return routes;
}

function buildIndustryPricingRoutes() {
  return NICHE_SLUGS.map((slug) => ({
    path: `/pricing/industry/${slug}`,
    title: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} Pricing - CollabAI`,
    description: `Transparent pricing for CollabAI's private AI agents tailored to ${slug.replace(/-/g, " ")} teams.`,
  }));
}

(async () => {
  try {
    if (!fs.existsSync(SHELL_PATH)) {
      console.warn(`[prerender] ${SHELL_PATH} not found; skipping`);
      process.exit(0);
    }
    const shellHtml = fs.readFileSync(SHELL_PATH, "utf8");

    const staticRoutes = require("./static-routes.cjs");
    const agentRoutes = buildAgentRoutes();
    const industryPricingRoutes = buildIndustryPricingRoutes();
    const [blogRoutes, kbRoutes] = await Promise.all([
      fetchDynamicRoutes(),
      fetchKnowledgeBaseRoutes(),
    ]);
    const allRoutes = [
      ...staticRoutes,
      ...agentRoutes,
      ...industryPricingRoutes,
      ...blogRoutes,
      ...kbRoutes,
    ];

    // Dedupe by path (first wins) and hard-exclude admin paths.
    const seen = new Set();
    const uniqueRoutes = [];
    for (const r of allRoutes) {
      if (!r || !r.path || isAdminPath(r.path)) continue;
      if (seen.has(r.path)) continue;
      seen.add(r.path);
      uniqueRoutes.push(r);
    }

    let written = 0;
    for (const meta of uniqueRoutes) {
      try {
        writeRoute(shellHtml, meta);
        written++;
      } catch (err) {
        console.warn(
          `[prerender] failed to write ${meta.path}:`,
          err && err.message ? err.message : err
        );
      }
    }
    console.log(
      `[prerender] wrote ${written}/${uniqueRoutes.length} per-route index.html files`
    );
    process.exit(0);
  } catch (err) {
    console.warn(
      "[prerender] failed, continuing without per-route head:",
      err && err.message ? err.message : err
    );
    process.exit(0);
  }
})();