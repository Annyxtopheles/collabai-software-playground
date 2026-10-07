import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { spawnSync } from "node:child_process";
import { componentTagger } from "lovable-tagger";

/**
 * Per-route prerender plugin.
 * - buildStart: regenerates public/sitemap.xml (best-effort).
 * - closeBundle: runs scripts/prerender-routes.ts via a child process so
 *   a TS-loader hiccup can't silently skip prerendering. If it fails,
 *   we throw — shipping the homepage shell for every URL is worse than
 *   a failed deploy.
 * Dev mode is skipped entirely.
 */
function prerenderPlugin(mode: string) {
  // Skip entirely inside the nested SSR bundle build we spawn ourselves.
  const enabled = mode !== "development" && process.env.SSR_BUILD !== "1";
  return {
    name: "collabai-prerender",
    apply: "build" as const,
    buildStart() {
      if (!enabled) return;
      const r = spawnSync("bunx", ["tsx", "scripts/generate-sitemap.ts"], {
        stdio: "inherit",
      });
      if (r.status !== 0) {
        console.warn("[sitemap] generator exited non-zero (non-fatal)");
      }
    },
    closeBundle() {
      if (!enabled) return;
      const r = spawnSync("bunx", ["tsx", "scripts/prerender-routes.ts"], {
        stdio: "inherit",
      });
      if (r.status !== 0) {
        throw new Error(
          `[prerender] scripts/prerender-routes.ts exited with status ${r.status}. ` +
            `Refusing to ship the homepage shell for every URL.`,
        );
      }
      // Body prerender (browser-free SSR). Fails the build when core public
      // routes would ship as an empty shell. Set PRERENDER_ALLOW_PARTIAL=1
      // to downgrade that to a warning.
      const b = spawnSync("bunx", ["tsx", "scripts/prerender-ssr.ts"], {
        stdio: "inherit",
      });
      if (b.status !== 0) {
        throw new Error(
          `[prerender-ssr] exited with status ${b.status}. Refusing to ship ` +
            `content-free HTML. Set PRERENDER_ALLOW_PARTIAL=1 to override.`,
        );
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    prerenderPlugin(mode),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "@tanstack/react-query"],
  },
  optimizeDeps: {
    include: ["@tanstack/react-query"],
  },
}));
