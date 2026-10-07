# Crawlability audit + fix plan (collabai.software)

## What I checked on the live site

I fetched the live pages the way a search engine does (no JavaScript) and read what came back.

| Check | Result |
| --- | --- |
| robots.txt | Fine. Everything open except /old/, /new/, /admin/. Sitemap listed. |
| sitemap.xml | Live, 109 URLs, sampled 12 — all return 200. |
| Per-page title / description | Correct and unique per page (home, /agency, /pricing, /blog, /api, /developers, blog posts). |
| Canonical | Correct and self-referencing on every page tested. |
| Social share tags | Complete, with a real 1200x640 image. |
| Structured data | Present sitewide; blog posts carry Article + breadcrumb data. |
| Visible page content in the no-JavaScript HTML | **Missing.** |
| Unknown URLs (e.g. /this-does-not-exist-123) | **Return 200 with the homepage**, instead of a proper "not found". |
| "Hidden from search" on the touring/pharma pricing pages | **Not actually applied** in the no-JavaScript HTML. |

So: most of the article's advice is already in place. Two things are not.

## The one that matters

Every live page is about 7 KB and contains only a short placeholder paragraph — the real
headings, copy, and links only appear after JavaScript runs. The build has a second step that
is supposed to bake the full rendered page into each file, and that step is currently being
skipped silently during the deploy build (it is deliberately non-fatal, so nobody noticed).

Result: Google can see your titles and descriptions, but not your actual content or most of
your internal links. That is exactly the failure mode the article describes.

## Fixes to implement

1. **Make the full-content bake-in actually run on deploy.** Diagnose why the headless-browser
   step is skipped in the build environment, and fix it — ensuring the browser binary is
   available at build time, and falling back to a per-route content snapshot if it is not.
2. **Stop the silent skip.** If the step cannot render, the build should fail loudly on the main
   public pages rather than shipping placeholder-only HTML.
3. **Real "not found" for unknown URLs.** Serve a not-found page marked as not-for-indexing
   instead of the homepage, so Google stops collecting duplicate copies of the homepage.
4. **Bake "hidden from search" into the pages that need it** (touring/pharma pricing mirrors),
   instead of relying on JavaScript to add it.
5. Re-check /llms.txt and the sitemap after the above, and confirm nav links to /api and
   /developers survive into the no-JavaScript HTML.

## Is this doable here?

Yes — all of it is build-time work inside this project. No hosting change, no framework
migration. (A full server-rendered stack would be a bigger change and isn't needed for this.)

## How we verify when done

- Run the production build here and confirm each route file contains real headings and links,
  not the placeholder.
- After publishing, re-fetch the live pages without JavaScript and confirm page size jumps from
  ~7 KB to full content, with your H1 and nav links visible.
- Confirm an unknown URL returns a not-found response.
- In Search Console: use URL Inspection > View crawled page on 2-3 key URLs and confirm the
  rendered HTML contains the body copy, then request re-indexing.

## Technical notes

- `scripts/prerender-routes.ts` (head rewrite) is working — confirmed live.
- `scripts/prerender-body.ts` (Playwright body snapshot) is not landing in the published build.
  Root cause confirmed by testing here: headless Chromium cannot launch (missing system
  libraries), and the script exits 0 on failure by design, so the build ships head-only HTML.
- Replacement: a browser-free render step (`react-dom/server` + `StaticRouter`, Suspense-aware)
  that produces the same baked HTML without any browser binary. This removes the dependency
  that is failing in the deploy container.
- Build must fail loudly when core routes render empty; `PRERENDER_ALLOW_PARTIAL=1` as an
  explicit escape hatch.
- Soft-404: hosting SPA fallback serves `dist/index.html` for unmatched paths. Emit a
  `dist/404.html` with `<meta name="robots" content="noindex">` and distinct title.
- noindex on `/touring/pricing`, `/pharma/pricing`: add to the route metadata table in
  `prerender-routes.ts` so it ships in static head, not just via Helmet.
