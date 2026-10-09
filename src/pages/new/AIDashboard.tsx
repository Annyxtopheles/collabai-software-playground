import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Search,
  Zap,
  CheckCircle2,
  Layers,
  Play,
  Terminal,
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft,
  Tag,
  Laptop,
  Clock,
  Copy,
  Check,
  Bell,
} from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LogoStrip from "@/components/LogoStrip";
import { LOGOS, type LogoItem } from "@/data/logos";
import { agentTeams } from "@/data/agentTeams";
import dealCoachBanner from "@/assets/agents/deal-coach-banner.png";
import agentBanner1 from "@/assets/agents/agent-banner-1.png";
import agentBanner2 from "@/assets/agents/agent-banner-2.png";
import agentBanner3 from "@/assets/agents/agent-banner-3.jpg";
import agentBanner4 from "@/assets/agents/agent-banner-4.jpg";
import agentBanner5 from "@/assets/agents/agent-banner-5.png";

import { DASHBOARD_AGENTS, type DashboardAgent } from "@/data/dashboardAgentsData";

// Curated preview mapping distributing banners across different agent cards
const AGENT_BANNER_MAP: Record<string, string> = {
  "deal-coach": dealCoachBanner,
  "pipeline-hygiene": agentBanner1,
  "meeting-intelligence": agentBanner2,
  "project-analyzer": agentBanner3,
  "weekly-status": agentBanner4,
  "subtask-planner": agentBanner5,
  "donor-retention": agentBanner4,
  "cross-system-knowledge-search": agentBanner5,
  "contract-risk-reviewer": agentBanner3,
};

const AgentBannerPreview = ({ agent }: { agent: DashboardAgent }) => {
  const bannerUrl =
    agent.bannerImage ||
    AGENT_BANNER_MAP[agent.id] ||
    (agent.id.startsWith("deal-coach") ? dealCoachBanner : undefined);

  if (bannerUrl) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 flex items-center justify-center select-none border-b border-slate-100">
        <img
          src={bannerUrl}
          alt={agent.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  const getBannerData = () => {
    switch (agent.teamSlug) {
      case "sales-crm":
        return {
          header: "Pipeline Intelligence Hub",
          tag: "Active",
          card1Title: "Deal Velocity",
          card1Metric: "+34% Win Rate",
          card1Sub: "3 overdue items cleared",
          card2Title: "Signal Match",
          bars: [
            { label: "HubSpot", pct: "88%" },
            { label: "Decision Makers", pct: "74%" },
          ],
        };
      case "meetings":
        return {
          header: "Meeting Intelligence",
          tag: "Live Audio",
          card1Title: "Call Synthesis",
          card1Metric: "100% Ingested",
          card1Sub: "6 action items logged",
          card2Title: "Decision Output",
          bars: [
            { label: "Key Deliverables", pct: "95%" },
            { label: "Task Assignees", pct: "100%" },
          ],
        };
      case "project-management":
        return {
          header: "Sprint Delivery Radar",
          tag: "On Track",
          card1Title: "Sprint Velocity",
          card1Metric: "91% Complete",
          card1Sub: "0 critical blockers",
          card2Title: "Milestone Health",
          bars: [
            { label: "Burndown Rate", pct: "86%" },
            { label: "PR Code Review", pct: "92%" },
          ],
        };
      case "tasks":
        return {
          header: "Task Co-Pilot & Plan",
          tag: "Ready",
          card1Title: "Decomposition",
          card1Metric: "4 Subtasks",
          card1Sub: "Estimates & specs ready",
          card2Title: "Context Sync",
          bars: [
            { label: "Spec Accuracy", pct: "96%" },
            { label: "Acceptance Criteria", pct: "100%" },
          ],
        };
      case "eos":
        return {
          header: "Level-10 Ops Pulse",
          tag: "Leadership",
          card1Title: "Scorecard Health",
          card1Metric: "96% Verified",
          card1Sub: "Top 3 IDS issues pinned",
          card2Title: "Rock Progress",
          bars: [
            { label: "Department Rocks", pct: "90%" },
            { label: "Triage Resolution", pct: "84%" },
          ],
        };
      case "team-productivity":
        return {
          header: "Pod Utilization Radar",
          tag: "Balanced",
          card1Title: "Billable Output",
          card1Metric: "88.4%",
          card1Sub: "Retention risk: Optimal",
          card2Title: "Workload Metrics",
          bars: [
            { label: "Core Utilization", pct: "88%" },
            { label: "Overtime Balance", pct: "94%" },
          ],
        };
      case "non-profit":
        return {
          header: "Donor & Grant Hub",
          tag: "Verified",
          card1Title: "Grant Proposal",
          card1Metric: "$250k Drafted",
          card1Sub: "Program citations 100%",
          card2Title: "CRM Readiness",
          bars: [
            { label: "Salesforce NPSP", pct: "98%" },
            { label: "Financial Data", pct: "92%" },
          ],
        };
      case "healthcare":
        return {
          header: "Clinical Note Scribe",
          tag: "HIPAA Verified",
          card1Title: "Consultation Audio",
          card1Metric: "Synced",
          card1Sub: "SOAP notes auto-drafted",
          card2Title: "EHR Validation",
          bars: [
            { label: "ICD-10 Codes", pct: "97%" },
            { label: "Audit Adherence", pct: "100%" },
          ],
        };
      case "mortgage":
        return {
          header: "Underwriting Auditor",
          tag: "Compliant",
          card1Title: "Loan Dossier",
          card1Metric: "32% DTI",
          card1Sub: "Fannie Mae checks passed",
          card2Title: "1003 Verification",
          bars: [
            { label: "Income & Assets", pct: "99%" },
            { label: "Credit Exception", pct: "91%" },
          ],
        };
      case "touring":
        return {
          header: "Tour Route & Venues",
          tag: "Optimized",
          card1Title: "14 Venues",
          card1Metric: "-18% Travel",
          card1Sub: "Routing contracts linked",
          card2Title: "Itinerary Progress",
          bars: [
            { label: "Production Advances", pct: "88%" },
            { label: "Schedule Sync", pct: "96%" },
          ],
        };
      case "agency":
        return {
          header: "Scope & Fee Estimator",
          tag: "Calibrated",
          card1Title: "Target Margin",
          card1Metric: "42% Gross",
          card1Sub: "Statement of work ready",
          card2Title: "Estimation Health",
          bars: [
            { label: "Resource Bandwidth", pct: "89%" },
            { label: "Rate Alignment", pct: "100%" },
          ],
        };
      case "hr":
        return {
          header: "Workforce & People Hub",
          tag: "Retention 98%",
          card1Title: "Culture & Attendance",
          card1Metric: "96.4% Active",
          card1Sub: "Zero compliance violations",
          card2Title: "Team Health",
          bars: [
            { label: "1:1 Sync Rate", pct: "95%" },
            { label: "Onboarding SLA", pct: "92%" },
          ],
        };
      case "finance":
        return {
          header: "Financial Intelligence",
          tag: "Audited",
          card1Title: "Cash Flow Health",
          card1Metric: "+18.2% EBITDA",
          card1Sub: "100% reconciled",
          card2Title: "Margin Audit",
          bars: [
            { label: "Collection Rate", pct: "96%" },
            { label: "Budget Variance", pct: "98%" },
          ],
        };
      case "marketing":
        return {
          header: "Growth Engine & Content",
          tag: "Optimized",
          card1Title: "Pipeline Inbound",
          card1Metric: "3.4x Velocity",
          card1Sub: "Content calendar active",
          card2Title: "Channel ROI",
          bars: [
            { label: "Organic Search", pct: "89%" },
            { label: "Social Reach", pct: "94%" },
          ],
        };
      case "real-estate":
        return {
          header: "MLS & Escrow Sentinel",
          tag: "Live MLS",
          card1Title: "Active Escrows",
          card1Metric: "$14.2M Volume",
          card1Sub: "100% contingency clear",
          card2Title: "Transaction Velocity",
          bars: [
            { label: "Lead Response", pct: "99%" },
            { label: "Inspection SLA", pct: "91%" },
          ],
        };
      case "insurance":
        return {
          header: "Policy & Claims Hub",
          tag: "Underwritten",
          card1Title: "Loss Ratio Audit",
          card1Metric: "41.2% Loss Ratio",
          card1Sub: "Zero coverage leakage",
          card2Title: "Policy Retention",
          bars: [
            { label: "Renewal Rate", pct: "94%" },
            { label: "Claims Triage", pct: "97%" },
          ],
        };
      default:
        return {
          header: "Operational Workflow",
          tag: "Active",
          card1Title: "Automation Health",
          card1Metric: "98%",
          card1Sub: "Zero manual intervention",
          card2Title: "System Sync",
          bars: [
            { label: "Data Quality", pct: "94%" },
            { label: "Pipeline Status", pct: "98%" },
          ],
        };
    }
  };

  const data = getBannerData();

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-100 bg-[#f8fafc] p-3 select-none">
      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Mini App Mockup Frame */}
      <div className="relative flex h-full flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs transition-transform duration-200 group-hover:scale-[1.01]">
        {/* Mockup Top Navigation Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-800 tracking-tight">
              {data.header}
            </span>
          </div>
          <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-600">
            {data.tag}
          </span>
        </div>

        {/* Mockup Content Grid: 2 mini panels */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {/* Panel 1: Main Metric */}
          <div className="flex flex-col justify-between rounded-lg border border-slate-100 bg-slate-50/70 p-2">
            <div>
              <span className="block text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                {data.card1Title}
              </span>
              <span className="mt-0.5 block text-xs font-bold text-slate-900">
                {data.card1Metric}
              </span>
            </div>
            <span className="mt-1 block text-[9px] text-slate-500 truncate">
              {data.card1Sub}
            </span>
          </div>

          {/* Panel 2: Signal / Progress Bars */}
          <div className="flex flex-col justify-between rounded-lg border border-slate-100 bg-slate-50/70 p-2">
            <span className="block text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
              {data.card2Title}
            </span>
            <div className="mt-1 space-y-1">
              {data.bars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-[8px] font-medium text-slate-600">
                    <span className="truncate max-w-[55px]">{bar.label}</span>
                    <span className="font-bold text-slate-700">{bar.pct}</span>
                  </div>
                  <div className="mt-0.5 h-1 w-full rounded-full bg-slate-200/70 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-trust-blue transition-all duration-300"
                      style={{ width: bar.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SCREENSHOTS = [
  "/lovable-uploads/platform-agent-detail.png",
  "/lovable-uploads/platform-dashboard.png",
  "/lovable-uploads/platform-agents.png",
  "/lovable-uploads/platform-conversations.png",
  "/lovable-uploads/platform-knowledge-base.png",
];

const findIntegrationLogo = (appName: string): LogoItem | undefined => {
  const normalized = appName.toLowerCase().replace(/[^a-z0-9]/g, "");
  return LOGOS.find((logo) => {
    const logoNorm = logo.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    const logoIdNorm = logo.id.toLowerCase().replace(/[^a-z0-9]/g, "");
    return (
      logoNorm === normalized ||
      logoIdNorm === normalized ||
      normalized.includes(logoIdNorm) ||
      logoIdNorm.includes(normalized)
    );
  });
};

const AgentLightboxModal = ({
  agent,
  onClose,
}: {
  agent: DashboardAgent;
  onClose: () => void;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((curr) => (curr === 0 ? SCREENSHOTS.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((curr) => (curr === SCREENSHOTS.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Lightbox Header - Fixed at top */}
      <div className="shrink-0 flex flex-col gap-2.5 pr-8 pb-3">
        <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-primary text-left">
          {agent.name}
        </DialogTitle>
        <DialogDescription className="text-sm text-slate-secondary text-left">
          {agent.description}
        </DialogDescription>

        {/* Badges + Action CTA Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-800">
            <Tag className="h-3.5 w-3.5 text-slate-500" />
            {agent.team}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-800">
            <Clock className="h-3.5 w-3.5 text-slate-500" />
            Saves {agent.timeSaved}
          </span>

          <a
            href="https://controltowerdemo.collabai.software/login"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--brand-secondary))] bg-white px-3.5 py-1 text-xs font-semibold text-[hsl(var(--brand-secondary))] shadow-xs transition-all duration-150 hover:bg-[hsl(var(--brand-secondary))] hover:text-white"
          >
            <Play className="h-3.5 w-3.5 text-[hsl(var(--brand-secondary))] fill-[hsl(var(--brand-secondary))] group-hover:text-white group-hover:fill-white transition-colors" />
            <span>Run Agent</span>
            <ExternalLink className="h-3 w-3 text-[hsl(var(--brand-secondary))] group-hover:text-white transition-colors" />
          </a>

          {agent.marketplaceUrl && (
            <a
              href={agent.marketplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--brand-secondary))] bg-white px-3.5 py-1 text-xs font-semibold text-[hsl(var(--brand-secondary))] shadow-xs transition-all duration-150 hover:bg-[hsl(var(--brand-secondary))] hover:text-white"
            >
              <span>Marketplace</span>
              <ExternalLink className="h-3 w-3 text-[hsl(var(--brand-secondary))] group-hover:text-white transition-colors" />
            </a>
          )}
        </div>
      </div>

      {/* 2-Column Body Layout - Fixed height with internal scroll */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch pt-1">
        {/* Left Column: What It Does & How It Saves Time */}
        <div className="lg:col-span-5 flex flex-col rounded-2xl border border-border bg-slate-50/70 p-4 sm:p-5 overflow-y-auto space-y-4">
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              What This Agent Does
            </h4>
            <ul className="mt-2.5 space-y-2 text-xs leading-relaxed text-brand-primary">
              {agent.workflowSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-600">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-200/80 pt-3.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Measurable Time & ROI Impact
            </h4>
            <ul className="mt-2.5 space-y-2 text-xs leading-relaxed text-brand-primary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  <strong>{agent.speedupMultiplier}</strong> faster execution turnaround compared to manual workflow.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  Saves an estimated <strong>{agent.timeSaved}</strong> by eliminating repetitive manual review steps.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  Connects directly into <strong>{agent.integrations.join(", ")}</strong> without requiring context-switching.
                </span>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-200/80 pt-3.5">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Connected Systems
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {agent.integrations.map((app) => {
                const logo = findIntegrationLogo(app);
                return (
                  <div
                    key={app}
                    title={app}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs transition-colors hover:border-slate-300"
                  >
                    {logo ? (
                      <img
                        src={logo.src}
                        alt={app}
                        className="h-4 w-auto max-w-[20px] object-contain"
                      />
                    ) : (
                      <Layers className="h-3.5 w-3.5 text-slate-400" />
                    )}
                    <span>{app}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Clean Screenshot Showcase */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-3 sm:p-4 shadow-xs overflow-hidden">
          {/* Screenshot Display Area with Navigation Arrows */}
          <div className="relative flex-1 min-h-0 flex items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs group">
            <img
              src={SCREENSHOTS[currentSlide]}
              alt={`Agent Platform Screenshot ${currentSlide + 1}`}
              className="h-full w-full object-contain p-2 select-none"
              draggable={false}
            />

            {/* Previous Arrow */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition-all hover:bg-white hover:text-slate-900 active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition-all hover:bg-white hover:text-slate-900 active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Dots Indicator & Slide Counter */}
          <div className="shrink-0 flex items-center justify-between pt-3 px-1 text-xs">
            <span className="text-[11px] font-medium text-slate-400">
              {currentSlide + 1} of {SCREENSHOTS.length}
            </span>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {SCREENSHOTS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-150 ${
                    currentSlide === idx
                      ? "w-5 bg-[hsl(var(--brand-secondary))]"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TEAMS = [
  "All Agents",
  "Sales & CRM",
  "HR & People",
  "Finance & Ops",
  "Meetings & Comms",
  "Project Management",
  "EOS & Leadership",
  "Marketing & Growth",
  "Healthcare",
  "Mortgage",
  "Nonprofit",
  "Real Estate",
  "Insurance",
  "Touring"
];

const AIDashboard = () => {
  const [selectedTeam, setSelectedTeam] = useState("All Agents");
  const [selectedTrigger, setSelectedTrigger] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(12);
  const [activeAgentModal, setActiveAgentModal] = useState<DashboardAgent | null>(null);
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const [searchWidth, setSearchWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setDisplayCount(12);
  }, [selectedTeam, selectedTrigger, searchQuery]);

  useEffect(() => {
    const updateSearchWidth = () => {
      if (pillsContainerRef.current) {
        const buttons = pillsContainerRef.current.querySelectorAll("button");
        if (buttons.length > 0) {
          const containerLeft = pillsContainerRef.current.getBoundingClientRect().left;
          let maxRight = 0;
          buttons.forEach((btn) => {
            const rightEdge = btn.getBoundingClientRect().right - containerLeft;
            if (rightEdge > maxRight) {
              maxRight = rightEdge;
            }
          });
          if (maxRight > 100) {
            setSearchWidth(Math.round(maxRight));
          }
        }
      }
    };

    updateSearchWidth();
    const timer = setTimeout(updateSearchWidth, 100);
    const ro = new ResizeObserver(updateSearchWidth);
    if (pillsContainerRef.current) {
      ro.observe(pillsContainerRef.current);
    }
    window.addEventListener("resize", updateSearchWidth);
    return () => {
      clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener("resize", updateSearchWidth);
    };
  }, []);

  const filteredAgents = useMemo(() => {
    return DASHBOARD_AGENTS.filter((agent) => {
      const matchesTeam =
        selectedTeam === "All Agents" || selectedTeam === "All Teams"
          ? true
          : selectedTeam === "Industry Packs"
          ? agent.category === "vertical"
          : agent.team.toLowerCase().includes(selectedTeam.toLowerCase()) ||
            (agent.vertical && agent.vertical.toLowerCase().includes(selectedTeam.toLowerCase().replace(" ", "_")));

      const matchesTrigger =
        selectedTrigger === "All"
          ? true
          : agent.trigger.toLowerCase().includes(selectedTrigger.toLowerCase());

      const matchesSearch =
        searchQuery === ""
          ? true
          : agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            agent.integrations.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
            agent.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (agent.vertical && agent.vertical.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTeam && matchesTrigger && matchesSearch;
    });
  }, [selectedTeam, selectedTrigger, searchQuery]);

  const visibleAgents = useMemo(() => {
    return filteredAgents.slice(0, displayCount);
  }, [filteredAgents, displayCount]);

  return (
    <>
      <PageSeoHead
        title="AI Workforce Dashboard — Explore 100+ Specialized Agents | Control Tower"
        description="Live operational dashboard showcasing CollabAI & Control Tower AI agents. Accelerate workflows across Sales, Meetings, Projects, Tasks, and Industry verticals."
        canonicalPath="/ai-dashboard"
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-slate-light/40 to-background pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl text-center">
            {/* Live operational badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-secondary))]/30 bg-[hsl(var(--brand-secondary))]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--brand-secondary))] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--brand-secondary))]"></span>
              </span>
              AI Workforce Operations Dashboard · 350+ Production Agents
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
              Specialized AI Agents That
              <br />
              <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                Speed Up Every Workflow.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-5xl text-lg text-slate-secondary lg:text-xl">
              From automated meeting intelligence to pipeline hygiene, project risk detection, and grant drafting.
              <br className="hidden sm:inline" />{" "}
              Explore our production agent workforce running inside your tools with zero per-token markup.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#agents-explorer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:border-slate-800 hover:bg-slate-800 hover:text-white active:translate-y-[2px]"
              >
                <Search className="h-4 w-4" />
                Explore Agents
              </a>
              <a
                href="https://controltowerdemo.collabai.software/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-800 shadow-xs transition-all duration-150 hover:border-[hsl(var(--brand-secondary))] hover:bg-[hsl(var(--brand-secondary))] hover:text-white active:translate-y-[2px]"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Agent Explorer Section */}
      <section id="agents-explorer" className="bg-slate-light py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">
                Explore Available AI Agents
              </h2>
              <p className="mt-2 text-base text-slate-secondary">
                Filter by operational department, execution trigger, or search specific capabilities.
              </p>
            </div>
            <div className="text-[11px] font-normal text-slate-400">
              Showing {visibleAgents.length} of {filteredAgents.length} agents
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            {/* Search Input + Category Pills aligned to end at Category Pills boundary */}
            <div className="w-fit max-w-full space-y-3">
              <div
                className="relative"
                style={{ width: searchWidth ? `${searchWidth}px` : "100%", maxWidth: "100%" }}
              >
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-secondary" />
                <Input
                  type="text"
                  placeholder="Search agents by name, function, integration (e.g. HubSpot, Zoom, EOS)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border-border bg-background pl-10 pr-4 text-sm shadow-sm"
                />
              </div>

              {/* Department / Category Pill Selector */}
              <div ref={pillsContainerRef} className="flex flex-wrap gap-2 pt-1">
                {TEAMS.map((team) => (
                  <button
                    key={team}
                    type="button"
                    onClick={() => setSelectedTeam(team)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-150 ${
                      selectedTeam === team
                        ? "border border-slate-950 bg-slate-950 text-white shadow-sm"
                        : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    {team}
                  </button>
                ))}
              </div>
            </div>

            {/* Trigger Filter (placed to the right of the search area) */}
            <div className="flex items-center gap-2 pt-1 shrink-0 self-start lg:self-auto">
              <SlidersHorizontal className="h-4 w-4 text-slate-500" />
              <Select value={selectedTrigger} onValueChange={(val) => setSelectedTrigger(val)}>
                <SelectTrigger className="h-auto min-w-[150px] w-auto text-left rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-none hover:border-slate-400 focus:ring-1 focus:ring-slate-400 focus:ring-offset-0 focus:outline-none [&>span]:text-left [&>span]:w-full">
                  <SelectValue placeholder="All Triggers" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border border-slate-200 bg-white shadow-lg text-xs z-50">
                  <SelectItem value="All" className="text-xs cursor-pointer rounded-lg font-medium text-slate-700 text-left">All Triggers</SelectItem>
                  <SelectItem value="Event-driven" className="text-xs cursor-pointer rounded-lg font-medium text-slate-700 text-left">Event-driven</SelectItem>
                  <SelectItem value="Scheduled" className="text-xs cursor-pointer rounded-lg font-medium text-slate-700 text-left">Scheduled</SelectItem>
                  <SelectItem value="Manual" className="text-xs cursor-pointer rounded-lg font-medium text-slate-700 text-left">Manual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Agents Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleAgents.map((agent) => (
              <div
                key={agent.id}
                onClick={() => setActiveAgentModal(agent)}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300/80 hover:shadow-[0_4px_20px_rgba(15,23,42,0.04)] cursor-pointer"
              >
                {/* 1. Banner Image */}
                <AgentBannerPreview agent={agent} />

                {/* Card Content Area */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* 2. Category above title */}
                    <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                      {agent.team}
                    </span>

                    {/* 3. Title */}
                    <h3 className="mt-1.5 text-lg font-bold text-brand-primary group-hover:text-[hsl(var(--brand-secondary))] transition-colors">
                      {agent.name}
                    </h3>

                    {/* 4. Description */}
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-secondary">
                      {agent.description}
                    </p>
                  </div>

                  {/* 5. Bottom Action Area (replacing redundant Know More button) */}
                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                      <Zap className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                      <span>{agent.trigger}</span>
                    </span>

                    <a
                      href="https://controltowerdemo.collabai.software/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group/btn inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--brand-secondary))] bg-white px-3.5 py-1 text-xs font-semibold text-[hsl(var(--brand-secondary))] shadow-2xs transition-all duration-150 hover:bg-[hsl(var(--brand-secondary))] hover:text-white"
                    >
                      <Play className="h-3 w-3 text-[hsl(var(--brand-secondary))] fill-[hsl(var(--brand-secondary))] group-hover/btn:text-white group-hover/btn:fill-white transition-colors" />
                      <span>Run Agent</span>
                      <ExternalLink className="h-2.5 w-2.5 text-[hsl(var(--brand-secondary))] group-hover/btn:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Pagination */}
          {visibleAgents.length < filteredAgents.length && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setDisplayCount((prev) => Math.min(prev + 12, filteredAgents.length))}
                className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-slate-800 active:translate-y-[1px]"
              >
                <span>Load More Agents</span>
              </button>
            </div>
          )}

          {filteredAgents.length === 0 && (
            <div className="mt-12 rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <Search className="mx-auto h-8 w-8 text-slate-secondary" />
              <h3 className="mt-3 text-base font-semibold text-brand-primary">No agents found</h3>
              <p className="mt-1 text-xs text-slate-secondary">
                Try modifying your search keywords or resetting filters.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedTeam("All Agents");
                  setSelectedTrigger("All");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full text-xs"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Integration Ecosystem Section */}
      <section className="bg-background py-20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
            Connected Stack
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-primary sm:text-4xl">
            Seamlessly Integrated with Your Systems of Record
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-secondary">
            CollabAI agents do not require you to migrate tools. They connect securely into HubSpot, Slack, Zoom, Google Workspace, and your private databases.
          </p>

          <div className="mt-10">
            <LogoStrip
              mode="static"
              hideHeading
              aria-label="Agent Integration Stack"
              logos={[
                "ms365",
                "slack",
                "jira",
                "notion",
                "github",
                "monday",
                "google-workspace",
                "salesforce",
                "hubspot",
                "zoom",
                "zapier",
                "docusign",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-gradient-to-br from-[hsl(var(--brand-primary))] to-black py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Put Your AI Workforce to Work Today.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
            Self-hosted in your private cloud or managed by us.
            <br />
            Bring your own model keys with zero token markups.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-slate-100 hover:text-black active:translate-y-[2px]"
            >
              Book a Personalized Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://controltowerdemo.collabai.software/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_7px_29px_0_rgba(49,94,255,0.4)] active:translate-y-[2px]"
            >
              Launch Sandbox Live Demo
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Agent Modal */}
      <Dialog
        open={!!activeAgentModal}
        onOpenChange={(open) => !open && setActiveAgentModal(null)}
      >
        <DialogContent className="max-w-6xl w-[96vw] h-[88vh] max-h-[880px] min-h-[640px] flex flex-col p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
          {activeAgentModal && (
            <AgentLightboxModal
              agent={activeAgentModal}
              onClose={() => setActiveAgentModal(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIDashboard;
