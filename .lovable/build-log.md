# Build Log — `/new` Control Tower revamp

Append-only chronological log of decisions, swaps, and rationale. The plan (`.lovable/plan.md`) captures *what & how*; this log captures *why & when* so any choice can be rewound.

---

## 2026-05-11 — Replaced hero video with 5-slide Control Tower slider
**Decision:** Drop the Vimeo placeholder video in the `/new` hero and replace it with a 5-slide auto-rotating carousel of Control Tower product screens.
**Why:** The placeholder video isn't ours and dilutes the story. Real product screens convert better, load faster, and let us show the dashboard + all four verticals in 30 seconds.
**Slides:**
1. Live Dashboard (real screenshot from `controltower.collabai.software`)
2. Meetings Intelligence (real screenshot)
3. 46+ AI Agents / reports (real screenshot)
4. Mortgage Pipeline (styled mock — risk-sorted loans, lock alerts)
5. Healthcare Voice Agent flow (styled mock — Incoming → Verify → Slot → Booked)
**Touched:**
- `src/components/new/ControlTowerSlider.tsx` (new — Embla + Autoplay, 5s, dots + arrows, prefers-reduced-motion safe)
- `src/components/new/ControlTowerHero.tsx` (new — mirrors `HeroSection` shell, no canvas, no video)
- `src/pages/new/Home.tsx` (swapped `HeroSection` → `ControlTowerHero`)
- `src/assets/control-tower/{dashboard,meetings,reports}.png` (downloaded from KB-listed URLs, served locally to avoid hotlink)
**Rollback:** In `src/pages/new/Home.tsx`, re-import `HeroSection` from `@/components/ui/dynamic-hero` and restore the prior `<HeroSection ... videoUrl=... />` block. The deleted `HeroSection` component is untouched.
**Follow-ups:**
- Capture real screenshots for slide 4 (`mortgage.collabai.software`) and slide 5 (healthcare demo) and swap into `image` props.
- Add demo-URL ribbon under the slider once the four demo URLs are confirmed.
- Lighthouse pass on the hero (LCP image = `dashboard.png`).

---

## 2026-05-11 — Phase 4: Control Tower product pages
**Decision:** Replace 7 placeholder routes under `/new/control-tower/*` with real pages. Build a shared `ProductPageShell` so every product page has a consistent hero, badge strip, and bottom CTA, but page bodies stay bespoke.
**Why:** Until now `/new/control-tower` was a placeholder. To validate the new IA before cutover we need real depth on the flagship product — overview + 6 sub-surfaces that match the homepage pillars.
**Pages shipped:**
- `/new/control-tower` — overview: 4 production proof metrics, 6 pillar cards linking to sub-pages, vertical CTA grid
- `/new/control-tower/how-it-works` — 4-week onboarding stepper (data → configure → pilot → roll out)
- `/new/control-tower/dashboards` — alternating image/text views using the 3 local screenshots
- `/new/control-tower/ai-agents` — links into all 6 teams from `agentTeams.ts`
- `/new/control-tower/security` — 6-pillar grid (self-hosted, RLS, SSO, audit, HIPAA, Supabase). No "Official Partner" language.
- `/new/control-tower/mobile` — 4 mobile-specific features
- `/new/control-tower/integrations` — 6 categories (CRM, Meetings, Productivity, Mortgage, Healthcare, Developer)
**Touched:**
- `src/components/new/ProductPageShell.tsx` (new — hero + bottom CTA wrapper)
- `src/pages/new/ControlTower*.tsx` × 7 (new)
- `src/App.tsx` (swapped 7 placeholders for real lazy-loaded routes)
**Rollback:** In `src/App.tsx`, restore the previous `<NewPlaceholder ... />` routes (kept above in git history) and drop the 7 new lazy imports.
**Follow-ups:**
- Capture mobile app mockups for `/control-tower/mobile`.
- Replace HubSpot/Salesforce/Zoom etc. text chips with real SVG logos on `/integrations`.
- Add JSON-LD `SoftwareApplication` schema on the overview page during Phase 6.

---

## Backfill — work completed before this log existed

### Phase 1 — `/new` route tree
Created `src/components/new/LayoutNew.tsx` reusing the existing `Navigation` and `Footer`. All `/new/*` routes share this layout. CollabAI logo, size, and position match the live site.

### Phase 2 — Homepage (initial)
Built `src/pages/new/Home.tsx` with Control Tower copy in the existing hero shell. Added `ProblemSection`, `SolutionPillars`, `SecuritySection`, `CredibilityStrip`, `PricingTeaser`, `IndustriesCards4`, `FeaturesGrid8` (later removed), `CompetitiveEdge` (later replaced).

### Phase 2.5 — CEO/PM strategic refresh
- Hero CTA: "Book a Demo + video" → **"Try the Live Demo (no signup)"** pointing at `controltowerdemo.collabai.software`
- `MetricTicker` rewritten: dropped internal SaaS metrics (`$495K MRR`) for production proof (`40+ hrs/wk · 2,500+ meetings · 10K+ tasks · 166 projects · 1+ yr internal`)
- New: `AgentTeamsShowcase` (46 agents · 6 teams)
- New: `ComparisonTabs` (3-tab matrix vs ChatGPT, PM tools, CRM)
- New: `OnboardingTimeline` (Week 1–4 stepper)
- New: `IntegrationsMarquee` (HubSpot, Zoom, Slack, Drive, Calendar + more)

### Phase 3 — Vertical pages
Built 4 pages driven by `src/data/verticals.ts` + shared `VerticalPageTemplate.tsx`:
- `/new/features/agency` — 12 agents, 40+ hrs/wk, 2,500+ meetings, 3 SJI testimonials
- `/new/features/mortgage` — 8 agents, 23% faster close, 67% fewer at-risk loans, Encompass/LendingPad/ICE/Salesforce
- `/new/features/healthcare` — 4 agents, 24/7 coverage, HIPAA-ready, eClinicalWorks/NextHealth/Twilio/Stedi
- `/new/features/non-profit` — Board Governance (10 agents) + Nonprofit Control Tower (16 agents), free & open source
Each page has its own demo URL, KPIs, and compliance block.

### Phase 3.1 — Agent directory
Three-level routing:
- `/new/agents` — 6-team overview
- `/new/agents/:team` — team detail with agent list
- `/new/agents/:team/:agent` — single agent (trigger, model, schedule, sample output)
All driven by `src/data/agentTeams.ts`.

### Tokens
`tailwind.config.ts` extended with `brand-primary` / `brand-secondary` mapped to HSL CSS variables. Honors locked palette: `#171717`, `#315EFF`, `#3ECF8E`.

---

## What's next (priority order)
1. ~~**Phase 4** — Control Tower product pages~~ ✅ Done 2026-05-11
2. **Phase 5** — Secondary pages: `/new/pricing` (two-product tabs), About, Partnership, Built on Supabase, Contact, Book a Demo, Privacy, Terms, Resources hub
3. **Phase 6** — SEO + JSON-LD on every new page, Lighthouse pass, mobile QA, real integration logos on `/integrations`, real client logos on the carousel
4. **Phase 7** — Cutover: move current `/` to `/old/*` with `noindex`, promote `/new/*` to root, update sitemap + 301s, keep a 72h rollback flag
---

## Phase 5 — Secondary pages + nav wiring (complete)

**Date:** 2026-05-11

### What changed
- **LayoutNew**: swapped old `Navigation`/`Footer` → `NavigationNew` / `FooterNew`. Old menu was leaking onto `/new` because the layout still imported the legacy components. Fixed.
- **Phase 5 pages built** (replacing placeholders):
  - `/new/pricing` — two-product tab switcher (Control Tower vs CollabAI Platform), 3 tiers each.
  - `/new/about` — 22yr / 101+ eng stats + values.
  - `/new/partnership` — 3 tracks (referral, implementation, technology).
  - `/new/built-on-supabase` — 6-reason architecture page.
  - `/new/contact` — 4 channels (book, email, chat, phone).
  - `/new/book-demo` — promise list + embedded cal.com iframe.
  - `/new/privacy` — 6-section plain-English privacy.
  - `/new/terms` — 6-section plain-English terms.
  - `/new/resources` — 6-tile hub linking blog/case-studies/faqs/installation/whitepapers/KB.
- All pages use `ProductPageShell` for consistent hero + final CTA.

### Status of plan
- ✅ Phases 1–5 complete
- ⏭️ Phase 6 next: SEO polish (sitemap, JSON-LD per page), real client logos, OG images
- ⏭️ Phase 7: cutover (route `/new/*` → `/*`, archive legacy pages)

### Rollback
Revert `src/components/new/LayoutNew.tsx` and the route additions in `src/App.tsx`. New page files are additive — safe to leave.

---

## Phase 6 — SEO polish + OG image (complete)

**Date:** 2026-05-11

### What changed
- **OG image**: generated a premium 1216×640 social card at `public/og/control-tower-og.jpg` (real Control Tower mockup, blueprint grid, Built on Supabase badge). Public path so crawlers can fetch.
- **Shared schema builders** (`src/lib/seoSchema.ts`):
  - `organizationSchema`, `websiteSchema`, `softwareApplicationSchema`
  - `breadcrumbSchema(items)`, `productSchema({...})`, `faqSchema(qa)`
  - `DEFAULT_OG_IMAGE` constant
- **ProductPageShell**: now accepts `seo.ogImage` + `seo.jsonLd` and defaults to a breadcrumb schema if none provided. Every `/new` page using the shell gets clean OG + canonical + breadcrumbs out of the box.
- **NewHome**: Organization + WebSite + SoftwareApplication JSON-LD + OG image.
- **Pricing**: Product schema with AggregateOffer + breadcrumbs.
- **Contact**: ContactPage + Organization schema.
- **Resources**: FAQPage schema with 3 high-signal questions + breadcrumbs.
- **sitemap.xml**: appended 22 `/new/*` URLs with weekly/monthly changefreq.

### Status of plan
- ✅ Phases 1–6 complete
- ⏭️ Phase 7 (cutover): map `/new/*` → `/*`, archive legacy pages, redirect old URLs, refresh sitemap canonicals.

### Rollback
Remove `src/lib/seoSchema.ts`, revert page imports, restore the original `ProductPageShell` props shape. OG image and sitemap additions are safe to keep.

---

## 2026-05-11 — Audit pass (logo, duplicate, live demo deflection)
**Decision:** Three fixes after a full Phase 1–6 validation pass.
1. **Logo:** `NavigationNew` and `FooterNew` were rendering a `ShieldCheck` Lucide placeholder + text. Replaced with the real CollabAI brand mark (`/lovable-uploads/aed406e1-e3d5-4045-9238-c551bc2ca3a4.png`) at `h-10`, matching the legacy `ShadcnNavbar`. Dropped the `/new staging` ribbon.
2. **Homepage duplicate:** `ControlTowerHero` already renders `<ClientLogosCarousel />`. `Home.tsx` was rendering a second one right after `MetricTicker` — removed.
3. **Live demo deflection:** Added `/new/try-demo` (new `src/pages/new/TryDemo.tsx`) using `ProductPageShell` so visitors clicking from the new site land on an on-brand page listing all four live demos (Control Tower, Mortgage, Healthcare, Agency). Added a secondary "See all live demos →" link under the hero CTA. Left external `controltowerdemo.collabai.software` as the primary CTA and left legacy `/try-demo` untouched (pre-cutover safety).

**Touched:**
- `src/components/new/NavigationNew.tsx` — real logo
- `src/components/new/FooterNew.tsx` — real logo
- `src/pages/new/Home.tsx` — removed duplicate `ClientLogosCarousel`
- `src/components/new/ControlTowerHero.tsx` — added "See all live demos" link
- `src/pages/new/TryDemo.tsx` (new)
- `src/App.tsx` — `/new/try-demo` route

**Rollback:** Revert each file; `TryDemo.tsx` is additive so it's safe to leave.

**Still pending:** Phase 7 cutover; 7 routes still loading `NewPlaceholder` (`/new/collabai-platform`, `/new/blog`, `/new/case-studies`, `/new/resources/{faqs,whitepapers,installation,knowledge-base}`).

---

## Blog prerender hardening (2026-06-29)

`scripts/prerender-body.ts` now waits for blog content selectors (`article h1` on posts, `a[href^='/blog/']` on index), retries once when only the loading skeleton was captured, and uses a 30s navigation timeout for blog routes. Future posts are picked up automatically on every republish because the head-rewrite step and sitemap both query `blog_posts` at build time.

**Verify a post is crawlable after republish:**

```bash
curl -s https://collabai.software/blog/<slug> | grep -E "<title|og:title|og:image|<article|<h1"
```

Expect the post's own title, description, image, and a populated `<article>` / `<h1>` block.
