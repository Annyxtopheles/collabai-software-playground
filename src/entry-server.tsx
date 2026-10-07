/**
 * Browser-free server render used at build time by scripts/prerender-ssr.ts.
 *
 * Renders each route's DOM with react-dom/server so the static files in
 * dist/ contain real headings, copy, and internal links for crawlers.
 * No headless browser is involved.
 *
 * Node-specific stream plumbing lives in the calling script; this module
 * stays free of node type dependencies.
 */
import { Suspense } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppRoutes } from "./App";
import "./index.css";

const ServerApp = ({ url }: { url: string }) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: Infinity } },
  });
  return (
    <HelmetProvider context={{}}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-secondary focus:text-secondary-foreground focus:rounded-md"
            >
              Skip to content
            </a>
            <Suspense fallback={null}>
              <main id="main-content">
                <AppRoutes />
              </main>
            </Suspense>
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

/**
 * Renders `url` and pipes the complete HTML into `writable` (a Node
 * Writable supplied by the build script) once every lazy boundary has
 * resolved. Rejects if the shell itself fails.
 */
export function renderRouteTo(url: string, writable: unknown): Promise<void> {
  return new Promise<void>((resolvePromise, reject) => {
    const stream = renderToPipeableStream(<ServerApp url={url} />, {
      onAllReady() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stream.pipe(writable as any);
        resolvePromise();
      },
      onShellError(err) {
        reject(err instanceof Error ? err : new Error(String(err)));
      },
      onError(err) {
        console.warn(`[ssr] ${url}:`, (err as Error)?.message ?? err);
      },
    });
  });
}
