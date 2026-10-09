import React, { useState } from "react";
import { Play, ArrowUpRight, CheckCircle2, FileText, Users, BarChart3, ShieldCheck, Calendar, Bot, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface WhatYouCanDoCardItem {
  id: string;
  theme: "green" | "light";
  badge: string;
  title: string;
  subheader: string;
  description: string;
  videoUrl?: string; // e.g. youtube embed or preview
  videoTitle: string;
  previewSnippet: {
    title: string;
    status: string;
    metricLabel?: string;
    metricValue?: string;
    subtext: string;
  };
}

const OUTCOME_CARDS: WhatYouCanDoCardItem[] = [
  {
    id: "donor-intelligence",
    theme: "green",
    badge: "CRM & Giving",
    title: "Donor Intelligence",
    subheader: "Understand donors, history & engagement",
    description:
      "Connect fragmented donor lists, offline gifts and CRM records into unified profiles. Surface giving patterns, renewal timelines and high-impact outreach recommendations automatically.",
    videoTitle: "Donor Intelligence Walkthrough",
    previewSnippet: {
      title: "Major Gifts & Retention",
      status: "Synced · 12 Systems",
      metricLabel: "YTD Retention",
      metricValue: "84.2%",
      subtext: "14 priority follow-ups drafted",
    },
  },
  {
    id: "grant-management",
    theme: "light",
    badge: "Grants & Funding",
    title: "Grant Management",
    subheader: "Research, drafting, reporting & follow-up",
    description:
      "Tap your existing organizational archive to automatically synthesize past applications, program KPIs and expenditure reports for grant proposals in minutes instead of weeks.",
    videoTitle: "Grant Management & Auto-Drafting Demo",
    previewSnippet: {
      title: "Q3 Federal Grant Proposal",
      status: "Draft Ready",
      metricLabel: "Staff Saved",
      metricValue: "~18 hrs",
      subtext: "Matched 9 compliance criteria",
    },
  },
  {
    id: "program-operations",
    theme: "light",
    badge: "Operations Command",
    title: "Program & Operations Visibility",
    subheader: "Activities, outcomes & operations together",
    description:
      "Eliminate manual spreadsheet consolidation. Real-time telemetry connects fieldwork, volunteer hours and budget burn across all branches in one central executive dashboard.",
    videoTitle: "Program & Operations Visibility Overview",
    previewSnippet: {
      title: "Unified Program Telemetry",
      status: "Live Stream",
      metricLabel: "Active Programs",
      metricValue: "24",
      subtext: "100% operational coverage",
    },
  },
  {
    id: "board-governance",
    theme: "green",
    badge: "Governance & Trustee",
    title: "Board Governance",
    subheader: "Minutes, policies & board packets organized",
    description:
      "Transform disorganized email threads and shared drives into an executive-ready board hub. Compile meeting packets, resolutions and institutional knowledge with verified citations.",
    videoTitle: "Board Governance & Packet Generator",
    previewSnippet: {
      title: "Board Meeting Packet",
      status: "Compiled",
      metricLabel: "Resolutions",
      metricValue: "6 Passed",
      subtext: "Audited & cited across 4 docs",
    },
  },
  {
    id: "meeting-intelligence",
    theme: "green",
    badge: "Executive Sync",
    title: "Meeting Intelligence",
    subheader: "Summaries, decisions & action items captured",
    description:
      "Never lose an important post-meeting decision or volunteer assignment. Integrates with Zoom and Teams to produce clean action-item matrices with owner assignments automatically.",
    videoTitle: "Meeting Intelligence & Action Capture",
    previewSnippet: {
      title: "Executive Committee Sync",
      status: "Processed",
      metricLabel: "Action Items",
      metricValue: "11 Assigned",
      subtext: "Synced to calendar & reminders",
    },
  },
  {
    id: "ai-assistants",
    theme: "light",
    badge: "Private Organization AI",
    title: "AI Assistants",
    subheader: "Ask questions across your entire knowledge base",
    description:
      "Empower your staff to ask questions in plain English across files, annual reports and meeting archives without manual file scouring — private by design with zero model training.",
    videoTitle: "Private Organization AI Assistant Demo",
    previewSnippet: {
      title: "Operational Assistant",
      status: "Private · Zero Training",
      metricLabel: "Query Resolution",
      metricValue: "< 2 sec",
      subtext: "Sourced across 8,400+ files",
    },
  },
];

export const WhatYouCanDoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ title: string; url?: string } | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#fbfdfa] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#14a800]">
            Everyday Outcomes
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
            Powerful features made refreshingly easy to use
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg text-balance max-w-2xl mx-auto">
            Transform daily nonprofit operations across every department with private,
            mission-aligned intelligence.
          </p>
        </div>

        {/* 6 High-Contrast Outcome Cards with Peeking Corner UI & Play Buttons */}
        <div className="mt-14 md:mt-16 grid gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-2">
          {OUTCOME_CARDS.map((card) => {
            const isGreen = card.theme === "green";

            return (
              <div
                key={card.id}
                className={`group relative overflow-hidden rounded-3xl p-7 sm:p-9 md:p-10 transition-all duration-300 hover:shadow-2xl ${
                  isGreen
                    ? "bg-gradient-to-br from-[#0c6600] via-[#118f00] to-[#0a5200] text-white shadow-[0_16px_36px_rgba(17,143,0,0.22)] border border-[#14a800]/40"
                    : "bg-white text-[#0c180a] border-2 border-emerald-100/90 shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#14a800]/50"
                }`}
              >
                {/* Top Row: Title + Play Lightbox Trigger */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                        isGreen ? "text-white" : "text-[#0c180a]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mt-1 text-sm sm:text-base font-semibold ${
                        isGreen ? "text-[#e7f5e3]" : "text-[#14a800]"
                      }`}
                    >
                      {card.subheader}
                    </p>
                  </div>

                  {/* Play Button Trigger */}
                  <button
                    type="button"
                    onClick={() => setActiveVideo({ title: card.videoTitle, url: card.videoUrl })}
                    aria-label={`Watch video preview for ${card.title}`}
                    className={`relative shrink-0 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full transition-transform duration-300 group-hover:scale-110 active:scale-95 shadow-md ${
                      isGreen
                        ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border border-white/30"
                        : "bg-[#14a800] text-white hover:bg-[#118f00] shadow-[#14a800]/25"
                    }`}
                  >
                    <Play className="h-5 w-5 sm:h-6 sm:w-6 fill-current ml-0.5" />
                  </button>
                </div>

                {/* Body Description */}
                <p
                  className={`mt-5 max-w-md text-sm sm:text-base leading-relaxed ${
                    isGreen ? "text-white/90" : "text-slate-600"
                  }`}
                >
                  {card.description}
                </p>

                {/* Bottom Row: Find Out More Link */}
                <div className="mt-8 pt-2">
                  <a
                    href="#how-it-works"
                    className={`inline-flex items-center gap-1.5 text-sm sm:text-base font-bold underline underline-offset-4 decoration-2 transition-colors duration-200 ${
                      isGreen
                        ? "text-white hover:text-[#e7f5e3] decoration-white/60 hover:decoration-white"
                        : "text-[#118f00] hover:text-[#0c6600] decoration-[#14a800]/50 hover:decoration-[#14a800]"
                    }`}
                  >
                    <span>Find out more</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Peeking Corner UI Element (Smoothly moves towards center on card hover) */}
                <div className="pointer-events-none absolute -bottom-5 -right-5 sm:-bottom-4 sm:-right-4 w-[230px] sm:w-[270px] select-none transition-transform duration-300 ease-out group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:scale-[1.03]">
                  <div
                    className={`rounded-2xl p-4 shadow-[0_16px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl border ${
                      isGreen
                        ? "bg-white/95 text-slate-800 border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.28)]"
                        : "bg-[#0c180a] text-white border-slate-700/60 shadow-[0_20px_40px_rgba(12,24,10,0.35)]"
                    }`}
                  >
                    {/* Peeking Top Micro Bar */}
                    <div className="flex items-center justify-between border-b pb-2 mb-2 border-slate-200/50 dark:border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#14a800] animate-pulse" />
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider ${
                            isGreen ? "text-slate-600" : "text-white/70"
                          }`}
                        >
                          {card.previewSnippet.title}
                        </span>
                      </div>
                      <span
                        className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                          isGreen
                            ? "bg-[#e7f5e3] text-[#118f00]"
                            : "bg-white/10 text-[#e7f5e3]"
                        }`}
                      >
                        {card.previewSnippet.status}
                      </span>
                    </div>

                    {/* Metric Highlight */}
                    {card.previewSnippet.metricValue && (
                      <div className="flex items-baseline justify-between mt-1">
                        <span
                          className={`text-[11px] font-medium ${
                            isGreen ? "text-slate-500" : "text-white/60"
                          }`}
                        >
                          {card.previewSnippet.metricLabel}
                        </span>
                        <span
                          className={`text-lg font-black tracking-tight ${
                            isGreen ? "text-[#118f00]" : "text-[#e7f5e3]"
                          }`}
                        >
                          {card.previewSnippet.metricValue}
                        </span>
                      </div>
                    )}

                    <div
                      className={`mt-1.5 text-[10px] leading-tight flex items-center gap-1.5 ${
                        isGreen ? "text-slate-600" : "text-white/80"
                      }`}
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#14a800] shrink-0" />
                      <span className="truncate">{card.previewSnippet.subtext}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Lightbox Modal */}
      <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-slate-800 text-white sm:rounded-2xl">
          <div className="relative aspect-video w-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
            {activeVideo?.url ? (
              <iframe
                src={activeVideo.url}
                title={activeVideo.title}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4 max-w-md mx-auto">
                <div className="h-16 w-16 rounded-full bg-[#14a800]/20 border border-[#14a800]/40 flex items-center justify-center text-[#14a800]">
                  <Play className="h-8 w-8 fill-current ml-1" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{activeVideo?.title}</h4>
                  <p className="mt-2 text-sm text-slate-400">
                    Feature demonstration video will play directly here once uploaded.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#14a800]" />
                  <span>Nonprofit Control Tower Feature Walkthrough</span>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WhatYouCanDoSection;
