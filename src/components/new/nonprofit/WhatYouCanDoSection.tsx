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
    subheader: "Understand donors, history, engagement and next actions in one place.",
    description:
      "Understand donors, history, engagement and next actions in one place.",
    videoTitle: "Donor Intelligence Walkthrough",
    previewSnippet: {
      title: "Donor Intelligence",
      status: "Connected",
      metricLabel: "Donor History",
      metricValue: "Unified",
      subtext: "Engagement & next actions in one place",
    },
  },
  {
    id: "grant-management",
    theme: "light",
    badge: "Grants & Funding",
    title: "Grant Management",
    subheader: "Use existing organizational information to support grant research, drafting, reporting and follow-up.",
    description:
      "Use existing organizational information to support grant research, drafting, reporting and follow-up.",
    videoTitle: "Grant Management Demo",
    previewSnippet: {
      title: "Grant Management",
      status: "Ready",
      metricLabel: "Grant Research",
      metricValue: "Automated",
      subtext: "Drafting, reporting & follow-up",
    },
  },
  {
    id: "program-operations",
    theme: "light",
    badge: "Operations",
    title: "Program & Operations Visibility",
    subheader: "See activities, outcomes and operational information together instead of across disconnected systems.",
    description:
      "See activities, outcomes and operational information together instead of across disconnected systems.",
    videoTitle: "Program & Operations Visibility Overview",
    previewSnippet: {
      title: "Operations Visibility",
      status: "Live",
      metricLabel: "Activities & Outcomes",
      metricValue: "Connected",
      subtext: "One operational view across systems",
    },
  },
  {
    id: "board-governance",
    theme: "green",
    badge: "Governance",
    title: "Board Governance",
    subheader: "Organize minutes, policies, board documents, packets and institutional knowledge.",
    description:
      "Organize minutes, policies, board documents, packets and institutional knowledge.",
    videoTitle: "Board Governance Walkthrough",
    previewSnippet: {
      title: "Board Governance",
      status: "Organized",
      metricLabel: "Board Packets",
      metricValue: "Compiled",
      subtext: "Minutes, policies & institutional knowledge",
    },
  },
  {
    id: "meeting-intelligence",
    theme: "green",
    badge: "Meetings",
    title: "Meeting Intelligence",
    subheader: "Capture meeting summaries, decisions and action items so important follow-up does not get lost.",
    description:
      "Capture meeting summaries, decisions and action items so important follow-up does not get lost.",
    videoTitle: "Meeting Intelligence Demo",
    previewSnippet: {
      title: "Meeting Intelligence",
      status: "Captured",
      metricLabel: "Action Items",
      metricValue: "Assigned",
      subtext: "Summaries & decisions tracked",
    },
  },
  {
    id: "ai-assistants",
    theme: "light",
    badge: "AI Assistants",
    title: "AI Assistants",
    subheader: "Ask questions across your organization’s information instead of searching through files, inboxes and systems manually.",
    description:
      "Ask questions across your organization’s information instead of searching through files, inboxes and systems manually.",
    videoTitle: "AI Assistants Demo",
    previewSnippet: {
      title: "AI Assistants",
      status: "Private",
      metricLabel: "Organization Q&A",
      metricValue: "Instant",
      subtext: "Search across files & systems in plain English",
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
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
            What We Can Do
          </h2>
        </div>

        {/* 6 High-Contrast Outcome Cards with Peeking Corner UI & Play Buttons */}
        <div className="mt-14 md:mt-16 grid gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-2">
          {OUTCOME_CARDS.map((card) => {
            const isGreen = card.theme === "green";

            return (
              <div
                key={card.id}
                className={`group relative overflow-hidden rounded-3xl p-7 sm:p-9 md:p-10 min-h-[290px] sm:min-h-[310px] pb-28 sm:pb-32 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${
                  isGreen
                    ? "bg-gradient-to-br from-[#0c6600] via-[#118f00] to-[#0a5200] text-white shadow-[0_16px_36px_rgba(17,143,0,0.22)] border border-[#14a800]/40"
                    : "bg-white text-[#0c180a] border-2 border-emerald-100/90 shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#14a800]/50"
                }`}
              >
                {/* Top Row: Title + Subheading + Play Lightbox Trigger */}
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-[70%] sm:max-w-[64%]">
                    <h3
                      className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                        isGreen ? "text-white" : "text-[#0c180a]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm sm:text-base leading-relaxed ${
                        isGreen ? "text-white/90" : "text-slate-600"
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

                {/* Peeking Corner UI Element (Smoothly moves towards center on card hover) */}
                <div className="pointer-events-none absolute -bottom-3 -right-3 sm:-bottom-2 sm:-right-2 w-[220px] sm:w-[255px] select-none transition-transform duration-300 ease-out group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:scale-[1.03]">
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
