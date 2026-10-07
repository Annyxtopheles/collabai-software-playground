/**
 * Per-route prerender (TS). Runs after `vite build`.
 *
 * Reads dist/index.html as the SPA shell, then writes
 * dist/<route>/index.html for every static + dynamic route with its own
 * <title>, meta description, canonical, og:*, twitter:*, and (for blog
 * posts) Article JSON-LD. Crawlers that don't execute JS now see the
 * right preview for each URL.
 *
 * On any failure here the process exits non-zero so the Vite plugin can
 * fail the build — shipping the homepage shell for every URL is worse
 * than a failed deploy.
 *
 * After writing, verifyPrerender() reads a couple of known files and
 * confirms self-referencing canonical + og:url before returning.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const SITE_URL = "https://collabai.software";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/og-default.jpg`;
const OG_IMAGE_TYPE = "image/jpeg";
const OG_IMAGE_WIDTH = "1200";
const OG_IMAGE_HEIGHT = "640";
const OG_IMAGE_ALT = "CollabAI — Private AI Control Tower";
const SUPABASE_URL = "https://wabbtpqnvfdrvdzoyaxr.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhYmJ0cHFudmZkcnZkem95YXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzOTI0OTksImV4cCI6MjA3NDk2ODQ5OX0.E4zCVaCsr9ar_7G5NDtpCrchmLk6xZquNF3l9e16Qng";

const DIST = resolve(__dirname, "..", "dist");
const SHELL_PATH = join(DIST, "index.html");
const AGENT_TEAMS_PATH = resolve(__dirname, "..", "src", "data", "agentTeams.ts");

const NICHE_SLUGS = ["agency", "mortgage-bank", "healthcare", "non-profit", "touring", "pharma"];
const ADMIN_PATTERNS = [/^\/admin(\/|$)/];
const isAdminPath = (p: string) => ADMIN_PATTERNS.some((re) => re.test(p));

type RouteMeta = {
  path: string;
  title: string;
  description: string;
  image?: string;
  ogType?: string;
  jsonLd?: unknown;
  /**
   * Override the canonical / og:url for this route. Used by the legacy
   * `/new/*` mirror so it consolidates onto the live URL instead of
   * self-referencing a duplicate path.
   */
  canonical?: string;
  /** Ship `noindex, follow` in the static head (legacy vertical mirrors). */
  noindex?: boolean;
};

const stripHtml = (s: unknown) =>
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

const isSafeAbsoluteImage = (url: unknown): url is string =>
  typeof url === "string" && /^https:\/\//i.test(url.trim());

const escapeHtml = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function replaceRootInner(html: string, inner: string): string {
  const open = html.match(/<div\s+id=["']root["'][^>]*>/i);
  if (!open || open.index === undefined) {
    return html.replace(/<\/body>/i, `<div id="root">${inner}</div>\n</body>`);
  }
  const openEnd = open.index + open[0].length;
  let depth = 1;
  const re = /<div\b[^>]*>|<\/div>/gi;
  re.lastIndex = openEnd;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    if (m[0].toLowerCase().startsWith("</div")) depth--;
    else depth++;
    if (depth === 0) {
      // Keep the closing </div> — dropping it orphans everything after #root
      // (including the module script) and breaks later body injection.
      return html.slice(0, openEnd) + inner + html.slice(m.index);
    }
  }
  return html.slice(0, openEnd) + inner + html.slice(openEnd);
}

/** Instapaper/read-later extractors ignore empty #root and often ignore og:image.
 *  They want an <article> with a title, paragraphs, and a real <img>. */
function crawlerArticleHtml(opts: { title: string; description: string; url: string; image: string; alt: string }) {
  const { title, description, url, image, alt } = opts;
  return (
    `<article class="instapaper_body" id="crawler-article">` +
    `<h1 class="instapaper_title">${title}</h1>` +
    `<p>${description}</p>` +
    `<p>CollabAI is a private, self-hosted AI operations platform for regulated industries. 100+ AI agents, dashboards, and integrations run in your tenant so your data never leaves your environment.</p>` +
    `<p><a href="${url}">Continue reading on collabai.software</a></p>` +
    `<img src="${image}" alt="${alt}" width="${OG_IMAGE_WIDTH}" height="${OG_IMAGE_HEIGHT}">` +
    `</article>`
  );
}

function upsertTag(html: string, matcher: RegExp, replacement: string) {
  if (matcher.test(html)) return html.replace(matcher, replacement);
  return html.replace(/<\/head>/i, `  ${replacement}\n</head>`);
}

function rewriteHead(shellHtml: string, meta: RouteMeta) {
  const selfUrl = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
  const url = meta.canonical || selfUrl;
  const title = stripHtml(meta.title) || "CollabAI - Enterprise AI Platform";
  const description =
    stripHtml(meta.description) ||
    "Deploy secure, industry-specific AI agents behind your firewall.";
  const image = isSafeAbsoluteImage(meta.image) ? meta.image : DEFAULT_OG_IMAGE;
  const usingDefaultImage = image === DEFAULT_OG_IMAGE;

  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const u = escapeHtml(url);
  const i = escapeHtml(image);

  let html = shellHtml;
  html = upsertTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${t}</title>`);
  html = upsertTag(html, /<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${d}">`);
  html = upsertTag(html, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${u}">`);
  html = upsertTag(html, /<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${u}">`);
  html = upsertTag(html, /<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${t}">`);
  html = upsertTag(html, /<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${d}">`);
  html = upsertTag(html, /<meta\s+property=["']og:type["'][^>]*>/i, `<meta property="og:type" content="${meta.ogType || "website"}">`);
  html = upsertTag(html, /<meta\s+property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${i}">`);
  html = upsertTag(
    html,
    /<meta\s+property=["']og:image:secure_url["'][^>]*>/i,
    `<meta property="og:image:secure_url" content="${i}">`,
  );
  if (usingDefaultImage) {
    html = upsertTag(html, /<meta\s+property=["']og:image:type["'][^>]*>/i, `<meta property="og:image:type" content="${OG_IMAGE_TYPE}">`);
    html = upsertTag(html, /<meta\s+property=["']og:image:width["'][^>]*>/i, `<meta property="og:image:width" content="${OG_IMAGE_WIDTH}">`);
    html = upsertTag(html, /<meta\s+property=["']og:image:height["'][^>]*>/i, `<meta property="og:image:height" content="${OG_IMAGE_HEIGHT}">`);
    html = upsertTag(html, /<meta\s+property=["']og:image:alt["'][^>]*>/i, `<meta property="og:image:alt" content="${escapeHtml(OG_IMAGE_ALT)}">`);
  } else {
    // Strip stale default-image dimension/type/alt tags so crawlers
    // don't apply wrong metadata to a custom per-route image.
    html = html.replace(/\s*<meta\s+property=["']og:image:(?:width|height|type|alt)["'][^>]*>/gi, "");
  }
  html = upsertTag(html, /<meta\s+name=["']twitter:card["'][^>]*>/i, `<meta name="twitter:card" content="summary_large_image">`);
  html = upsertTag(html, /<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${t}">`);
  html = upsertTag(html, /<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${d}">`);
  html = upsertTag(html, /<meta\s+name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${i}">`);
  html = upsertTag(html, /<meta\s+name=["']twitter:image:alt["'][^>]*>/i, `<meta name="twitter:image:alt" content="${escapeHtml(OG_IMAGE_ALT)}">`);
  html = upsertTag(html, /<link\s+rel=["']image_src["'][^>]*>/i, `<link rel="image_src" href="${i}">`);
  html = upsertTag(
    html,
    /<meta\s+name=["']robots["'][^>]*>/i,
    `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow"}">`,
  );

  if (meta.jsonLd) {
    const ld = `<script type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`;
    html = html.replace(/<\/head>/i, `  ${ld}\n</head>`);
  }

  // Instapaper fetches HTML without running JS. Seed #root with extractable
  // article text + image so save/click always gets title, excerpt, and thumbnail
  // even if the Playwright body snapshot is skipped.
  html = replaceRootInner(
    html,
    crawlerArticleHtml({ title: t, description: d, url: u, image: i, alt: escapeHtml(OG_IMAGE_ALT) }),
  );
  return html;
}

function writeRoute(shellHtml: string, meta: RouteMeta) {
  const html = rewriteHead(shellHtml, meta);
  const routePath = meta.path === "/" ? "" : meta.path.replace(/^\//, "");
  const outDir = routePath ? join(DIST, routePath) : DIST;
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf8");
}

async function fetchBlogRoutes(): Promise<RouteMeta[]> {
  const routes: RouteMeta[] = [];
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=slug,meta_title,title,meta_description,excerpt,og_image_url,image_url,author,published_at,updated_at&is_published=eq.true`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } },
    );
    if (!res.ok) {
      console.warn(`[prerender] blog_posts fetch returned ${res.status}`);
      return routes;
    }
    const rows = (await res.json()) as any[];
    for (const row of rows) {
      if (!row.slug) continue;
      const path = `/blog/${row.slug}`;
      const title = stripHtml(row.meta_title || row.title || "Blog - CollabAI");
      // Excerpts in the DB sometimes start with the post title concatenated
      // to the body (no separator). Strip that prefix and clamp to 200 chars
      // so social cards show a clean description instead of garbled text.
      let rawDesc = stripHtml(row.meta_description || row.excerpt || "");
      const titlePlain = stripHtml(row.title || "");
      if (titlePlain && rawDesc.toLowerCase().startsWith(titlePlain.toLowerCase())) {
        rawDesc = rawDesc.slice(titlePlain.length).replace(/^[\s:.\-–—]+/, "").trim();
      }
      if (rawDesc.length > 200) {
        rawDesc = rawDesc.slice(0, 197).replace(/\s+\S*$/, "") + "…";
      }
      const description =
        rawDesc ||
        "Read the latest insights on private, self-hosted AI for regulated industries from the CollabAI team.";
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
          author: { "@type": "Person", name: row.author || "CollabAI Team" },
          publisher: {
            "@type": "Organization",
            name: "CollabAI",
            logo: { "@type": "ImageObject", url: DEFAULT_OG_IMAGE },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
        },
      });
    }
    console.log(`[prerender] fetched ${rows.length} blog posts`);
  } catch (err: any) {
    console.warn("[prerender] blog_posts fetch failed:", err?.message ?? err);
  }
  return routes;
}

async function fetchKbRoutes(): Promise<RouteMeta[]> {
  const routes: RouteMeta[] = [];
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/knowledge_base?select=id,title,category&is_published=eq.true`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } },
    );
    if (!res.ok) return routes;
    const rows = (await res.json()) as any[];
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
  } catch (err: any) {
    console.warn("[prerender] knowledge_base fetch failed:", err?.message ?? err);
  }
  return routes;
}

function buildAgentRoutes(): RouteMeta[] {
  const routes: RouteMeta[] = [];
  try {
    if (!existsSync(AGENT_TEAMS_PATH)) return routes;
    const src = readFileSync(AGENT_TEAMS_PATH, "utf8");
    const teamBlockRe =
      /\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*tagline:\s*"([^"]+)"[\s\S]*?agents:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;
    let m: RegExpExecArray | null;
    while ((m = teamBlockRe.exec(src))) {
      const [, teamSlug, teamName, tagline, agentsBlock] = m;
      routes.push({
        path: `/agents/${teamSlug}`,
        title: `${teamName} AI Agents - CollabAI`,
        description: tagline,
      });
      const agentRe = /\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"/g;
      let am: RegExpExecArray | null;
      while ((am = agentRe.exec(agentsBlock))) {
        const [, agentSlug, agentName, desc] = am;
        routes.push({
          path: `/agents/${teamSlug}/${agentSlug}`,
          title: `${agentName} - ${teamName} AI Agent`,
          description: desc.slice(0, 160),
        });
      }
    }
  } catch (err: any) {
    console.warn("[prerender] agent routes failed:", err?.message ?? err);
  }
  return routes;
}

/** Legacy verticals stay live but must not be indexed. */
const NOINDEX_PRICING_SLUGS = new Set(["touring", "pharma"]);

function buildIndustryPricingRoutes(): RouteMeta[] {
  return NICHE_SLUGS.map((slug) => ({
    path: `/pricing/industry/${slug}`,
    title: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} Pricing - CollabAI`,
    description: `Transparent pricing for CollabAI's private AI agents tailored to ${slug.replace(/-/g, " ")} teams.`,
    noindex: NOINDEX_PRICING_SLUGS.has(slug),
  }));
}

/**
 * Hosting serves dist/index.html for unmatched paths, which makes unknown
 * URLs look like duplicate homepages (soft 404). Emit a dedicated,
 * noindexed 404 document hosting can serve instead.
 */
function writeNotFoundPage(shellHtml: string) {
  const html = rewriteHead(shellHtml, {
    path: "/404",
    title: "Page not found - CollabAI",
    description: "This page does not exist. Browse CollabAI's private AI Control Tower instead.",
    noindex: true,
  });
  writeFileSync(join(DIST, "404.html"), html, "utf8");
  console.log("[prerender] wrote dist/404.html (noindex)");
}

function verifyPrerender() {
  const checks = ["/", "/agency", "/blog", "/about", "/contact", "/pricing", "/control-tower"];
  for (const p of checks) {
    const file = p === "/" ? join(DIST, "index.html") : join(DIST, p.replace(/^\//, ""), "index.html");
    if (!existsSync(file)) throw new Error(`verifyPrerender: missing ${file}`);
    const html = readFileSync(file, "utf8");
    const url = p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`;
    if (!html.includes(`<link rel="canonical" href="${url}">`)) {
      throw new Error(`verifyPrerender: ${p} missing self-referencing canonical (${url})`);
    }
    if (!html.includes(`<meta property="og:url" content="${url}">`)) {
      throw new Error(`verifyPrerender: ${p} missing self-referencing og:url (${url})`);
    }
    if (html.includes("Black_Friday") || html.includes("gpt-engineer-file-uploads")) {
      throw new Error(`verifyPrerender: ${p} still has stale Black Friday OG image`);
    }
    const ogImg = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i)?.[1];
    const secure = html.match(/<meta\s+property=["']og:image:secure_url["']\s+content=["']([^"']+)["']/i)?.[1];
    const twImg = html.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i)?.[1];
    if (!ogImg || !/^https:\/\//i.test(ogImg)) {
      throw new Error(`verifyPrerender: ${p} og:image is missing or not https (${ogImg})`);
    }
    if (secure && secure !== ogImg) {
      throw new Error(`verifyPrerender: ${p} og:image:secure_url (${secure}) does not match og:image (${ogImg})`);
    }
    if (twImg && twImg !== ogImg) {
      throw new Error(`verifyPrerender: ${p} twitter:image (${twImg}) does not match og:image (${ogImg})`);
    }
    if (!html.includes('class="instapaper_body"') || !html.includes("<img src=")) {
      throw new Error(`verifyPrerender: ${p} missing Instapaper article body/image`);
    }
  }
  console.log(`[prerender] verify OK (${checks.length} routes checked)`);
}

/**
 * Drift guard: every public, non-param `<Route path="...">` in
 * src/App.tsx must have a prerendered dist/<path>/index.html.
 * Throws (fails the build) if any are missing so we never silently
 * fall back to the SPA shell — that's what made every uncovered URL
 * advertise the homepage as its canonical and broke social previews.
 */
function verifyAppRouteCoverage(written: Set<string>) {
  const appTsxPath = resolve(__dirname, "..", "src", "App.tsx");
  if (!existsSync(appTsxPath)) {
    console.warn("[prerender] App.tsx not found — skipping route coverage check");
    return;
  }
  const src = readFileSync(appTsxPath, "utf8");
  const declared = new Set<string>();
  const re = /path=["']([^"']+)["']/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    const p = m[1];
    if (!p || p === "*") continue;
    if (p.includes(":")) continue; // params handled by dynamic loaders
    if (isAdminPath(p)) continue;
    declared.add(p);
  }
  const missing = [...declared].filter((p) => !written.has(p));
  if (missing.length) {
    throw new Error(
      `[prerender] ${missing.length} public route(s) declared in App.tsx are not prerendered:\n  ` +
        missing.sort().join("\n  ") +
        `\nAdd them to scripts/static-routes.cjs.`,
    );
  }
  console.log(`[prerender] App.tsx coverage OK (${declared.size} routes)`);
}

async function main() {
  if (!existsSync(SHELL_PATH)) {
    throw new Error(`[prerender] shell not found at ${SHELL_PATH}`);
  }
  const shellHtml = readFileSync(SHELL_PATH, "utf8");

  const staticRoutes = require("./static-routes.cjs") as RouteMeta[];
  const agentRoutes = buildAgentRoutes();
  const industryRoutes = buildIndustryPricingRoutes();
  const [blogRoutes, kbRoutes] = await Promise.all([fetchBlogRoutes(), fetchKbRoutes()]);

  const all = [...staticRoutes, ...agentRoutes, ...industryRoutes, ...blogRoutes, ...kbRoutes];
  const seen = new Set<string>();
  const unique: RouteMeta[] = [];
  for (const r of all) {
    if (!r || !r.path || isAdminPath(r.path)) continue;
    if (seen.has(r.path)) continue;
    seen.add(r.path);
    unique.push(r);
  }

  let written = 0;
  const writtenPaths = new Set<string>();
  for (const meta of unique) {
    writeRoute(shellHtml, meta);
    writtenPaths.add(meta.path);
    written++;
  }
  console.log(`[prerender] wrote ${written}/${unique.length} per-route index.html files`);

  writeNotFoundPage(shellHtml);

  verifyPrerender();
  verifyAppRouteCoverage(writtenPaths);
}

main().catch((err: any) => {
  console.error("[prerender] FATAL:", err?.stack ?? err?.message ?? err);
  process.exit(1);
});
