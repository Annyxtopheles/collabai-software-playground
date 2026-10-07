/**
 * Body prerender via server-side rendering (no browser).
 *
 * Runs after scripts/prerender-routes.ts. Builds an SSR bundle of
 * src/entry-server.tsx with Vite, then renders every per-route
 * dist/<route>/index.html body and injects it into the empty
 * `<div id="root">` placeholder so crawlers see real content.
 *
 * Fails the build when core public routes render empty, unless
 * PRERENDER_ALLOW_PARTIAL=1 is set.
 */
import { spawnSync } from "node:child_process";
import { PassThrough } from "node:stream";
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const SSR_OUT = join(ROOT, "dist-ssr");

const ALLOW_PARTIAL = process.env.PRERENDER_ALLOW_PARTIAL === "1";

const CORE_ROUTES = [
  "/",
  "/agency",
  "/pricing",
  "/about",
  "/contact",
  "/control-tower",
  "/healthcare",
  "/mortgage-bank",
  "/non-profit",
  "/api",
  "/developers",
];

const ADMIN_RE = /^\/admin(\/|$)/;

function fatal(message: string): never | void {
  if (ALLOW_PARTIAL) {
    console.warn(`[prerender-ssr] ${message} (ignored: PRERENDER_ALLOW_PARTIAL=1)`);
    return;
  }
  console.error(`[prerender-ssr] ${message}`);
  process.exit(1);
}

function listRouteHtmlFiles(): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      const st = statSync(full);
      if (st.isDirectory()) {
        if (name === "assets" || name === "lovable-uploads" || name === "og") continue;
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
      // Preserve the closing </div> and everything after it (module script).
      return html.slice(0, openEnd) + bodyInner + html.slice(m.index);
    }
  }
  return html;
}

function buildSsrBundle(): string | null {
  const r = spawnSync(
    "bunx",
    [
      "vite",
      "build",
      "--ssr",
      "src/entry-server.tsx",
      "--outDir",
      "dist-ssr",
      "--logLevel",
      "warn",
    ],
    { stdio: "inherit", cwd: ROOT, env: { ...process.env, SSR_BUILD: "1" } },
  );
  if (r.status !== 0) return null;
  for (const name of ["entry-server.js", "entry-server.mjs"]) {
    const p = join(SSR_OUT, name);
    if (existsSync(p)) return p;
  }
  return null;
}

async function main() {
  if (!existsSync(DIST)) {
    fatal("dist/ not found");
    return;
  }

  const bundle = buildSsrBundle();
  if (!bundle) {
    fatal("SSR bundle build failed — no server renderer available");
    return;
  }

  const mod: { renderRouteTo: (url: string, writable: unknown) => Promise<void> } = await import(
    pathToFileURL(bundle).href
  );

  const renderRoute = (url: string, timeoutMs = 30000) =>
    new Promise<string>((resolvePromise, reject) => {
      const sink = new PassThrough();
      const chunks: Buffer[] = [];
      let settled = false;
      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        reject(new Error(`render timed out after ${timeoutMs}ms`));
      }, timeoutMs);
      sink.on("data", (c: Buffer) => chunks.push(Buffer.from(c)));
      sink.on("end", () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        resolvePromise(Buffer.concat(chunks).toString("utf8"));
      });
      sink.on("error", (err) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        reject(err);
      });
      mod.renderRouteTo(url, sink).catch((err) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        reject(err);
      });
    });

  const files = listRouteHtmlFiles();
  const rendered = new Map<string, boolean>();
  let ok = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of files) {
    const route = htmlFileToRoute(file);
    if (ADMIN_RE.test(route)) {
      skipped++;
      continue;
    }
    try {
      const body = await renderRoute(route);
      if (!body || body.length < 500) {
        throw new Error(`empty/short render (${body?.length ?? 0} chars)`);
      }
      const original = readFileSync(file, "utf8");
      const next = injectBody(original, body);
      if (next === original) throw new Error("root placeholder not found");
      writeFileSync(file, next, "utf8");
      rendered.set(route, true);
      ok++;
    } catch (err: unknown) {
      failed++;
      rendered.set(route, false);
      console.warn(`[prerender-ssr] ${route}: ${(err as Error)?.message ?? err}`);
    }
  }

  console.log(`[prerender-ssr] done — ${ok} rendered, ${skipped} skipped, ${failed} failed`);

  const missing = CORE_ROUTES.filter((r) => rendered.get(r) !== true);
  if (missing.length) {
    fatal(`core routes missing real body content: ${missing.join(", ")}`);
    return;
  }
  if (ok === 0) fatal("no routes were rendered");
}

main().catch((err: unknown) => {
  console.error("[prerender-ssr] fatal:", (err as Error)?.stack ?? err);
  process.exit(ALLOW_PARTIAL ? 0 : 1);
});
