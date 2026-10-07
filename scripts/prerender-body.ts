/**
 * Body prerender (Playwright). Runs after scripts/prerender-routes.ts.
 *
 * For each per-route dist/<route>/index.html (already containing the
 * correct <head>), boot headless Chromium against a local static
 * server, wait for React to mount, snapshot document.body.innerHTML,
 * and replace the empty `<div id="root"></div>` placeholder with the
 * rendered DOM. JS still hydrates normally for real users; crawlers
 * see the full content in initial HTML.
 *
 * Fail-safe per route — any error leaves the head-only file in place
 * and prints a warning. Total failure (Playwright missing, browser
 * launch failure, etc.) also exits 0 so the build still ships.
 */
import { createServer } from "node:http";
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve, extname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIST = resolve(__dirname, "..", "dist");

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".map": "application/json; charset=utf-8",
};

function listRouteHtmlFiles(): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      const st = statSync(full);
      if (st.isDirectory()) {
        // Skip Vite asset dirs
        if (name === "assets" || name === "lovable-uploads") continue;
        walk(full);
      } else if (name === "index.html") {
        out.push(full);
      }
    }
  };
  walk(DIST);
  return out;
}

function htmlFileToRoute(file: string): string {
  const rel = relative(DIST, dirname(file));
  if (!rel) return "/";
  return "/" + rel.replace(/\\/g, "/");
}

function startStaticServer(port = 0): Promise<{ port: number; close: () => Promise<void> }> {
  return new Promise((resolvePromise, reject) => {
    const server = createServer((req, res) => {
      try {
        const url = new URL(req.url || "/", "http://localhost");
        let pathname = decodeURIComponent(url.pathname);
        if (pathname.endsWith("/")) pathname += "index.html";
        let filePath = join(DIST, pathname);
        if (!existsSync(filePath)) {
          // Try directory index
          const indexPath = join(DIST, pathname, "index.html");
          if (existsSync(indexPath)) {
            filePath = indexPath;
          } else {
            // SPA fallback — serve shell so client router can resolve
            filePath = join(DIST, "index.html");
          }
        }
        const st = statSync(filePath);
        if (st.isDirectory()) filePath = join(filePath, "index.html");
        const ext = extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        res.end(readFileSync(filePath));
      } catch (err: any) {
        res.writeHead(500);
        res.end(String(err?.message ?? err));
      }
    });
    server.on("error", reject);
    server.listen(port, "127.0.0.1", () => {
      const addr = server.address();
      const realPort = typeof addr === "object" && addr ? addr.port : port;
      resolvePromise({
        port: realPort,
        close: () => new Promise<void>((r) => server.close(() => r())),
      });
    });
  });
}

function injectBody(html: string, bodyInner: string): string {
  const open = html.match(/<div\s+id=["']root["'][^>]*>/i);
  if (!open || open.index === undefined) return html;
  const openEnd = open.index + open[0].length;
  let depth = 1;
  const re = /<div\b[^>]*>|<\/div>/gi;
  re.lastIndex = openEnd;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    if (m[0].toLowerCase().startsWith("</div")) depth--;
    else depth++;
    if (depth === 0) {
      return html.slice(0, openEnd) + bodyInner + html.slice(m.index + m[0].length);
    }
  }
  return html;
}

async function main() {
  if (!existsSync(DIST)) {
    console.warn("[prerender-body] dist/ not found — skipping");
    return;
  }

  let chromium: any;
  try {
    ({ chromium } = await import("playwright"));
  } catch (err: any) {
    console.warn("[prerender-body] playwright not installed — skipping body prerender");
    return;
  }

  const htmlFiles = listRouteHtmlFiles();
  if (htmlFiles.length === 0) {
    console.warn("[prerender-body] no route HTML files found — skipping");
    return;
  }

  const server = await startStaticServer();
  const baseUrl = `http://127.0.0.1:${server.port}`;
  console.log(`[prerender-body] serving dist/ at ${baseUrl}, ${htmlFiles.length} routes`);

  let browser: any;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (err: any) {
    console.warn(
      "[prerender-body] chromium launch failed (likely missing browser binary) — skipping. " +
        (err?.message ?? err),
    );
    await server.close();
    return;
  }

  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  // Block heavy third-party requests that slow snapshots and aren't needed for HTML
  await context.route("**/*", (route: any) => {
    const url = route.request().url();
    if (
      url.includes("googletagmanager.com") ||
      url.includes("google-analytics.com") ||
      url.includes("fonts.googleapis.com") ||
      url.includes("fonts.gstatic.com")
    ) {
      return route.abort();
    }
    return route.continue();
  });

  const ADMIN_RE = /^\/admin(\/|$)/;
  const SKIP_RE = /^\/(book-demo|try-demo|ai-readiness|webinars)(\/|$)/; // dynamic/form-heavy; keep head-only
  const BLOG_POST_RE = /^\/blog\/[^/]+\/?$/;
  const BLOG_INDEX_RE = /^\/blog\/?$/;
  // Skeleton-only renders contain Skeleton placeholders but no real content.
  const isSkeletonOnly = (html: string) =>
    /class="[^"]*\bSkeleton\b/i.test(html) ||
    (/animate-pulse/.test(html) && !/<article|<h1/i.test(html));

  let ok = 0;
  let skipped = 0;
  let failed = 0;

  // Limited concurrency
  const queue = [...htmlFiles];
  const CONCURRENCY = 3;

  async function worker() {
    while (queue.length) {
      const file = queue.shift();
      if (!file) break;
      const route = htmlFileToRoute(file);
      if (ADMIN_RE.test(route) || SKIP_RE.test(route)) {
        skipped++;
        continue;
      }
      const isBlogPost = BLOG_POST_RE.test(route);
      const isBlogIndex = BLOG_INDEX_RE.test(route);
      const navTimeout = isBlogPost || isBlogIndex ? 30000 : 20000;
      const contentSelector = isBlogPost
        ? "article h1, main h1"
        : isBlogIndex
        ? "a[href^='/blog/']"
        : null;

      const attempt = async (): Promise<string> => {
        const page = await context.newPage();
        try {
          await page.goto(`${baseUrl}${route}`, {
            waitUntil: "networkidle",
            timeout: navTimeout,
          });
          if (contentSelector) {
            await page
              .waitForSelector(contentSelector, { timeout: 15000 })
              .catch(() => {});
          }
          // Give React a tick to finish any post-mount renders
          await page.waitForTimeout(400);
          const bodyInner = await page.evaluate(() => {
            const root = document.getElementById("root");
            return root ? root.innerHTML : "";
          });
          return bodyInner || "";
        } finally {
          await page.close().catch(() => {});
        }
      };

      try {
        let bodyInner = await attempt();
        // Retry once for blog routes if we only captured the loading skeleton.
        if (
          (isBlogPost || isBlogIndex) &&
          (bodyInner.length < 200 || isSkeletonOnly(bodyInner))
        ) {
          console.warn(`[prerender-body] ${route}: skeleton/empty — retrying`);
          bodyInner = await attempt();
        }
        if (!bodyInner || bodyInner.length < 200) {
          throw new Error(`empty/short render (${bodyInner.length} chars)`);
        }
        if ((isBlogPost || isBlogIndex) && isSkeletonOnly(bodyInner)) {
          throw new Error("skeleton-only render after retry");
        }
        const original = readFileSync(file, "utf8");
        const ogImg = original.match(/<meta\s+property=["']og:image["'][^>]*content=["']([^"']+)["']/i)?.[1]
          || original.match(/<meta\s+content=["']([^"']+)["'][^>]*property=["']og:image["']/i)?.[1];
        // Instapaper thumbnails come from <img> in the article, not og:image.
        // Prepend the share card if the snapshot has no matching photo.
        if (ogImg && !bodyInner.includes(ogImg)) {
          bodyInner =
            `<img src="${ogImg}" alt="CollabAI — Private AI Control Tower" width="1200" height="640">` +
            bodyInner;
        }
        const next = injectBody(original, bodyInner);
        if (next !== original) {
          writeFileSync(file, next, "utf8");
          ok++;
        } else {
          failed++;
          console.warn(`[prerender-body] ${route}: root placeholder not found`);
        }
      } catch (err: any) {
        failed++;
        console.warn(`[prerender-body] ${route}: ${err?.message ?? err}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  await context.close();
  await browser.close();
  await server.close();

  console.log(
    `[prerender-body] done — ${ok} snapshotted, ${skipped} skipped, ${failed} fell back to head-only`,
  );
}

main().catch((err: any) => {
  console.warn("[prerender-body] non-fatal error:", err?.stack ?? err?.message ?? err);
  // Never fail the build — head-only files already shipped.
  process.exit(0);
});
