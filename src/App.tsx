import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import CookieConsent from "@/components/CookieConsent";
import BackToTop from "@/components/BackToTop";

// Lazy-loaded pages
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

const PrivateSecureAI = lazy(() => import("./pages/playbooks/PrivateSecureAI"));
const CustomAIAgents = lazy(() => import("./pages/playbooks/CustomAIAgents"));
const AIWorkflows = lazy(() => import("./pages/playbooks/AIWorkflows"));
const FAQs = lazy(() => import("./pages/resources/FAQs"));
const Whitepapers = lazy(() => import("./pages/resources/Whitepapers"));
const Installation = lazy(() => import("./pages/resources/Installation"));
const KnowledgeBase = lazy(() => import("./pages/resources/KnowledgeBase"));
const ArticleDetail = lazy(() => import("./pages/resources/ArticleDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Integrations = lazy(() => import("./pages/Integrations"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const Events = lazy(() => import("./pages/Events"));

// /new — staged rebrand (Phase 1 foundation; pages fill in by phase)
const LayoutNew = lazy(() => import("./components/new/LayoutNew"));
const NewHome = lazy(() => import("./pages/new/Home"));
const NewAgents = lazy(() => import("./pages/new/Agents"));
const NewAgentTeam = lazy(() => import("./pages/new/AgentTeam"));
const NewAgentDetail = lazy(() => import("./pages/new/AgentDetail"));
const NewControlTower = lazy(() => import("./pages/new/ControlTower"));
const NewCTHowItWorks = lazy(() => import("./pages/new/ControlTowerHowItWorks"));
const NewCTDashboards = lazy(() => import("./pages/new/ControlTowerDashboards"));
const NewCTAgents = lazy(() => import("./pages/new/ControlTowerAgents"));
const NewCTSecurity = lazy(() => import("./pages/new/ControlTowerSecurity"));
const NewCTMobile = lazy(() => import("./pages/new/ControlTowerMobile"));
const NewCTIntegrations = lazy(() => import("./pages/new/ControlTowerIntegrations"));
const NewPricing = lazy(() => import("./pages/new/Pricing"));
const NewAgencyPricing = lazy(() => import("./pages/new/AgencyPricing"));
const IndustryPricing = lazy(() => import("./pages/new/IndustryPricing"));
const NewAbout = lazy(() => import("./pages/new/About"));
const NewPartnership = lazy(() => import("./pages/new/Partnership"));
const NewBuiltOnSupabase = lazy(() => import("./pages/new/BuiltOnSupabase"));
const NewCollabAIPlatform = lazy(() => import("./pages/new/CollabAIPlatform"));
const NewContact = lazy(() => import("./pages/new/Contact"));
const NewBookDemo = lazy(() => import("./pages/new/BookDemo"));
const NewPrivacy = lazy(() => import("./pages/new/Privacy"));
const NewTerms = lazy(() => import("./pages/new/Terms"));
const NewResources = lazy(() => import("./pages/new/Resources"));
const NewTryDemo = lazy(() => import("./pages/new/TryDemo"));
const NewAIReadiness = lazy(() => import("./pages/new/AIReadiness"));
const NewApi = lazy(() => import("./pages/new/Api"));
const NewDevelopers = lazy(() => import("./pages/new/Developers"));
const NewAIDashboard = lazy(() => import("./pages/new/AIDashboard"));

// Niche hubs + sub-pages (flat root URLs: /agency, /mortgage-bank, /healthcare, /non-profit, /touring)
const NicheHub = lazy(() => import("./pages/niches/NicheRouter").then((m) => ({ default: m.NicheHub })));
const NicheAgents = lazy(() => import("./pages/niches/NicheRouter").then((m) => ({ default: m.NicheAgents })));
const NicheUseCases = lazy(() => import("./pages/niches/NicheRouter").then((m) => ({ default: m.NicheUseCases })));
const NicheWorkflows = lazy(() => import("./pages/niches/NicheRouter").then((m) => ({ default: m.NicheWorkflows })));
const AgencyHub = lazy(() => import("./pages/new/AgencyHub"));
const PharmaHub = lazy(() => import("./pages/new/PharmaHub"));
const TouringHub = lazy(() => import("./pages/new/TouringHub"));
const MortgageHub = lazy(() => import("./pages/new/MortgageHub"));
const NonProfitHub = lazy(() => import("./pages/new/NonProfitHub"));
const HealthcareHub = lazy(() => import("./pages/new/HealthcareHub"));
const ClinicalTrialsAI = lazy(() => import("./pages/new/pharma/ClinicalTrialsAI"));
const PharmacovigilanceAI = lazy(() => import("./pages/new/pharma/PharmacovigilanceAI"));
const RegulatoryDocValidator = lazy(() => import("./pages/new/pharma/RegulatoryDocValidator"));
const IVRNavigator = lazy(() => import("./pages/new/pharma/IVRNavigator"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

export const AppRoutes = () => (
  <Routes>
            {/* ====== LIVE SITE — root mounted under LayoutNew ====== */}
            <Route element={<LayoutNew />}>
              <Route path="/" element={<NewHome />} />
              {/* Control Tower product */}
              <Route path="/control-tower" element={<NewControlTower />} />
              <Route path="/control-tower/how-it-works" element={<NewCTHowItWorks />} />
              <Route path="/control-tower/dashboards" element={<NewCTDashboards />} />
              <Route path="/control-tower/ai-agents" element={<NewCTAgents />} />
              <Route path="/control-tower/security" element={<NewCTSecurity />} />
              <Route path="/control-tower/mobile" element={<NewCTMobile />} />
              <Route path="/control-tower/integrations" element={<NewCTIntegrations />} />
              <Route path="/collabai-platform" element={<NewCollabAIPlatform />} />
              {/* Agent directory & AI Dashboard */}
              <Route path="/ai-dashboard" element={<NewAIDashboard />} />
              <Route path="/dashboard" element={<NewAIDashboard />} />
              <Route path="/agents" element={<NewAgents />} />
              <Route path="/agents/:team" element={<NewAgentTeam />} />
              <Route path="/agents/:team/:agent" element={<NewAgentDetail />} />
              {/* Niche hubs + sub-pages */}
              <Route path="/agency" element={<AgencyHub />} />
              <Route path="/agency/agents" element={<NicheAgents />} />
              <Route path="/agency/use-cases" element={<NicheUseCases />} />
              <Route path="/agency/workflows" element={<NicheWorkflows />} />
              <Route path="/mortgage-bank" element={<MortgageHub />} />
              <Route path="/mortgage-bank/agents" element={<NicheAgents />} />
              <Route path="/mortgage-bank/use-cases" element={<NicheUseCases />} />
              <Route path="/mortgage-bank/workflows" element={<NicheWorkflows />} />
              <Route path="/healthcare" element={<HealthcareHub />} />
              <Route path="/healthcare/agents" element={<NicheAgents />} />
              <Route path="/healthcare/use-cases" element={<NicheUseCases />} />
              <Route path="/healthcare/workflows" element={<NicheWorkflows />} />
              <Route path="/non-profit" element={<NonProfitHub />} />
              <Route path="/non-profit/agents" element={<NicheAgents />} />
              <Route path="/non-profit/use-cases" element={<NicheUseCases />} />
              <Route path="/non-profit/workflows" element={<NicheWorkflows />} />
              <Route path="/touring" element={<TouringHub />} />
              <Route path="/touring/agents" element={<NicheAgents />} />
              <Route path="/touring/use-cases" element={<NicheUseCases />} />
              <Route path="/touring/workflows" element={<NicheWorkflows />} />
              <Route path="/pharma" element={<PharmaHub />} />
              <Route path="/pharma/agents" element={<NicheAgents />} />
              <Route path="/pharma/use-cases" element={<NicheUseCases />} />
              <Route path="/pharma/workflows" element={<NicheWorkflows />} />
              <Route path="/pharma/clinicaltrials-ai" element={<ClinicalTrialsAI />} />
              <Route path="/pharma/pharmacovigilance-ai" element={<PharmacovigilanceAI />} />
              <Route path="/pharma/regulatory-doc-validator" element={<RegulatoryDocValidator />} />
              <Route path="/pharma/ivr-navigator" element={<IVRNavigator />} />
              {/* Secondary */}
              <Route path="/pricing" element={<NewPricing />} />
              <Route path="/agency-pricing" element={<NewAgencyPricing />} />
              <Route path="/pricing/industry/:slug" element={<IndustryPricing />} />
              <Route path="/about" element={<NewAbout />} />
              <Route path="/partnership" element={<NewPartnership />} />
              <Route path="/built-on-supabase" element={<NewBuiltOnSupabase />} />
              <Route path="/contact" element={<NewContact />} />
              <Route path="/book-demo" element={<NewBookDemo />} />
              <Route path="/privacy" element={<NewPrivacy />} />
              <Route path="/terms" element={<NewTerms />} />
              <Route path="/resources" element={<NewResources />} />
              <Route path="/try-demo" element={<NewTryDemo />} />
              <Route path="/ai-readiness" element={<NewAIReadiness />} />
              <Route path="/api" element={<NewApi />} />
              <Route path="/developers" element={<NewDevelopers />} />
              {/* Resources — reuse existing implementations at root */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/resources/faqs" element={<FAQs />} />
              <Route path="/resources/whitepapers" element={<Whitepapers />} />
              <Route path="/resources/installation" element={<Installation />} />
              <Route path="/resources/knowledge-base" element={<KnowledgeBase />} />
              <Route path="/resources/knowledge-base/article/:id" element={<ArticleDetail />} />
              {/* Cross-niche playbooks (kept under /resources/playbooks) */}
              <Route path="/resources/playbooks/private-secure-ai" element={<PrivateSecureAI />} />
              <Route path="/resources/playbooks/custom-ai-agents" element={<CustomAIAgents />} />
              <Route path="/resources/playbooks/ai-workflows" element={<AIWorkflows />} />
              {/* Misc kept routes */}
              <Route path="/events" element={<Events />} />
              <Route path="/webinars" element={<Events />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/testimonials" element={<Testimonials />} />
            </Route>

            {/* ====== /new/* — 301 redirects to new root URLs (keep ~30 days) ====== */}
            <Route path="/new" element={<Navigate to="/" replace />} />
            <Route path="/new/control-tower" element={<Navigate to="/control-tower" replace />} />
            <Route path="/new/control-tower/how-it-works" element={<Navigate to="/control-tower/how-it-works" replace />} />
            <Route path="/new/control-tower/dashboards" element={<Navigate to="/control-tower/dashboards" replace />} />
            <Route path="/new/control-tower/ai-agents" element={<Navigate to="/control-tower/ai-agents" replace />} />
            <Route path="/new/control-tower/security" element={<Navigate to="/control-tower/security" replace />} />
            <Route path="/new/control-tower/mobile" element={<Navigate to="/control-tower/mobile" replace />} />
            <Route path="/new/control-tower/integrations" element={<Navigate to="/control-tower/integrations" replace />} />
            <Route path="/new/collabai-platform" element={<Navigate to="/collabai-platform" replace />} />
            <Route path="/new/features/healthcare" element={<Navigate to="/healthcare" replace />} />
            <Route path="/new/features/mortgage" element={<Navigate to="/mortgage-bank" replace />} />
            <Route path="/new/features/agency" element={<Navigate to="/agency" replace />} />
            <Route path="/new/features/non-profit" element={<Navigate to="/non-profit" replace />} />
            <Route path="/new/agents" element={<Navigate to="/agents" replace />} />
            <Route path="/new/agents/:team" element={<Navigate to="/agents" replace />} />
            <Route path="/new/pricing" element={<Navigate to="/pricing" replace />} />
            <Route path="/new/about" element={<Navigate to="/about" replace />} />
            <Route path="/new/partnership" element={<Navigate to="/partnership" replace />} />
            <Route path="/new/built-on-supabase" element={<Navigate to="/built-on-supabase" replace />} />
            <Route path="/new/contact" element={<Navigate to="/contact" replace />} />
            <Route path="/book-demo" element={<Navigate to="/book-demo" replace />} />
            <Route path="/new/privacy" element={<Navigate to="/privacy" replace />} />
            <Route path="/new/terms" element={<Navigate to="/terms" replace />} />
            <Route path="/new/resources" element={<Navigate to="/resources" replace />} />
            <Route path="/new/try-demo" element={<Navigate to="/try-demo" replace />} />
            <Route path="/new/blog" element={<Navigate to="/blog" replace />} />
            <Route path="/new/case-studies" element={<Navigate to="/case-studies" replace />} />
            <Route path="/new/resources/faqs" element={<Navigate to="/resources/faqs" replace />} />
            <Route path="/new/resources/whitepapers" element={<Navigate to="/resources/whitepapers" replace />} />
            <Route path="/new/resources/installation" element={<Navigate to="/resources/installation" replace />} />
            <Route path="/new/resources/knowledge-base" element={<Navigate to="/resources/knowledge-base" replace />} />

            {/* ====== Legacy URL redirects ====== */}
            <Route path="/industry/mortgage" element={<Navigate to="/mortgage-bank" replace />} />
            <Route path="/playbooks/mortgage" element={<Navigate to="/mortgage-bank" replace />} />
            <Route path="/banking" element={<Navigate to="/mortgage-bank" replace />} />
            <Route path="/mortgage" element={<Navigate to="/mortgage-bank" replace />} />
            <Route path="/industry/healthcare" element={<Navigate to="/healthcare" replace />} />
            <Route path="/playbooks/healthcare" element={<Navigate to="/healthcare" replace />} />
            <Route path="/industry/agency" element={<Navigate to="/agency" replace />} />
            <Route path="/industry/non-profit" element={<Navigate to="/non-profit" replace />} />
            <Route path="/industry/accounting" element={<Navigate to="/control-tower" replace />} />
            <Route path="/playbooks/accounting" element={<Navigate to="/control-tower" replace />} />
            <Route path="/accounting" element={<Navigate to="/control-tower" replace />} />
            <Route path="/industry/legal" element={<Navigate to="/control-tower" replace />} />
            <Route path="/playbooks/legal" element={<Navigate to="/control-tower" replace />} />
            <Route path="/legal" element={<Navigate to="/control-tower" replace />} />
            <Route path="/playbooks" element={<Navigate to="/resources" replace />} />
            <Route path="/playbooks/private-secure-ai" element={<Navigate to="/resources/playbooks/private-secure-ai" replace />} />
            <Route path="/playbooks/custom-ai-agents" element={<Navigate to="/resources/playbooks/custom-ai-agents" replace />} />
            <Route path="/playbooks/ai-workflows" element={<Navigate to="/resources/playbooks/ai-workflows" replace />} />
            <Route path="/features" element={<Navigate to="/control-tower" replace />} />
            <Route path="/features/open-source" element={<Navigate to="/collabai-platform" replace />} />
            <Route path="/security" element={<Navigate to="/control-tower/security" replace />} />
            <Route path="/mobile" element={<Navigate to="/control-tower/mobile" replace />} />
            <Route path="/enterprise-architecture" element={<Navigate to="/control-tower" replace />} />
            <Route path="/use-cases" element={<Navigate to="/agency/use-cases" replace />} />
            {/* /tour → /touring short-URL redirects */}
            <Route path="/tour" element={<Navigate to="/touring" replace />} />
            <Route path="/tour/agents" element={<Navigate to="/touring/agents" replace />} />
            <Route path="/tour/use-cases" element={<Navigate to="/touring/use-cases" replace />} />
            <Route path="/tour/workflows" element={<Navigate to="/touring/workflows" replace />} />

            {/* ====== /old/* — legacy backup (noindex) ====== */}

            {/* ====== Admin (unchanged) ====== */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-secondary focus:text-secondary-foreground focus:rounded-md">
          Skip to content
        </a>
        <Suspense fallback={<PageLoader />}>
          <main id="main-content">
            <AppRoutes />
          </main>
        </Suspense>
        <BackToTop />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
