/**
 * Best-effort sitemap generator. Writes public/sitemap.xml listing
 * every static + dynamic route on the production domain.
 *
 * Non-fatal: if Supabase is unreachable we still write static routes.
 */
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const BASE_URL = "https://collabai.software";
const SUPABASE_URL = "https://wabbtpqnvfdrvdzoyaxr.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhYmJ0cHFudmZkcnZkem95YXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzOTI0OTksImV4cCI6MjA3NDk2ODQ5OX0.E4zCVaCsr9ar_7G5NDtpCrchmLk6xZquNF3l9e16Qng";

type StaticRoute = { path: string };

async function fetchSlugs(table: string, slugCol: string, filter = "is_published=eq.true") {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${table}?select=${slugCol},updated_at&${filter}`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } },
    );
    if (!res.ok) return [] as any[];
    return (await res.json()) as any[];
  } catch {
    return [];
  }
}

async function main() {
  const staticRoutes = require("./static-routes.cjs") as StaticRoute[];
  const paths = new Set<string>(staticRoutes.map((r) => r.path));

  const blog = await fetchSlugs("blog_posts", "slug");
  for (const row of blog) {
    if (!row.slug) continue;
    // Strip leading/trailing slashes from DB slug to prevent duplicate URLs in sitemap.
    const slug = String(row.slug).replace(/^\/+|\/+$/g, "");
    if (slug) paths.add(`/blog/${slug}`);
  }

  const kb = await fetchSlugs("knowledge_base", "id");
  for (const row of kb) if (row.id) paths.add(`/resources/knowledge-base/article/${row.id}`);

  const urls = [...paths]
    .filter((p) => !/^\/admin(\/|$)/.test(p))
    // Exclude legacy verticals (touring/pharma) — kept live but not indexed.
    .filter((p) => !/^\/(touring|pharma|tour)(\/|$)/.test(p))
    // Exclude legacy /new/* mirror routes from the sitemap.
    .filter((p) => !/^\/new(\/|$)/.test(p))
    // Normalize: drop trailing slash (except root) so we never emit both `/x` and `/x/`.
    .map((p) => (p !== "/" ? p.replace(/\/+$/, "") : p))
    // Dedupe again post-normalization.
    .filter((p, i, arr) => arr.indexOf(p) === i)
    .sort()
    .map((p) => `  <url><loc>${BASE_URL}${p}</loc></url>`)
    .join("\n");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  const out = resolve(__dirname, "..", "public", "sitemap.xml");
  writeFileSync(out, xml, "utf8");
  console.log(`[sitemap] wrote ${paths.size} URLs to ${out}`);
}

main().catch((err: any) => {
  console.warn("[sitemap] failed (non-fatal):", err?.message ?? err);
  process.exit(0);
});
