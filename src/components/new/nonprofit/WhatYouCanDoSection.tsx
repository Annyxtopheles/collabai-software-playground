import React, { useState } from "react";
import {
  Play,
  CheckCircle2,
  FileText,
  Users,
  BarChart3,
  ShieldCheck,
  Calendar,
  Bot,
  Sparkles,
  Clock,
  CheckSquare,
  Mic,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface WhatYouCanDoCardItem {
  id: string;
  theme: "green" | "light";
  badge: string;
  title: string;
  subheader: string;
  description: string;
  videoUrl?: string;
  videoTitle: string;
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
  },
];

const renderCornerWidget = (card: WhatYouCanDoCardItem) => {
  switch (card.id) {
    case "donor-intelligence":
      // 1. Donor Profile + 5-Bar Giving Sparkline + Next Action
      return (
        <div className="rounded-tl-2xl border-t border-l border-white/70 bg-white/95 p-4 pb-10 pr-10 text-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e7f5e3] text-xs font-extrabold text-[#118f00] ring-2 ring-[#14a800]/20">
                SJ
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 leading-none">Sarah Jenkins</div>
                <div className="mt-1 text-[10px] font-medium text-slate-500">Major Donor · 5 yrs</div>
              </div>
            </div>
            <span className="rounded-full bg-[#e7f5e3] px-2 py-0.5 text-[9px] font-bold text-[#118f00]">
              High Engagement
            </span>
          </div>

          <div className="mt-3 flex items-end justify-between gap-4">
            <div>
              <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Lifetime Giving</div>
              <div className="text-lg font-black text-slate-900 tracking-tight">$18,400</div>
            </div>
            {/* 5-Year Mini Bar Chart */}
            <div className="flex items-end gap-1.5 h-8 pt-1">
              <div className="w-2.5 h-3 rounded-t-xs bg-[#e7f5e3]" />
              <div className="w-2.5 h-4 rounded-t-xs bg-[#c5e8bc]" />
              <div className="w-2.5 h-5 rounded-t-xs bg-[#8fd47e]" />
              <div className="w-2.5 h-6 rounded-t-xs bg-[#47b82e]" />
              <div className="w-2.5 h-8 rounded-t-xs bg-[#14a800]" />
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-slate-50 border border-slate-200/70 px-2.5 py-1.5 text-[10px] font-semibold text-slate-700">
            <Users className="h-3 w-3 text-[#14a800] shrink-0" />
            <span className="truncate">Next Action: Personal Gala Invite</span>
          </div>
        </div>
      );

    case "grant-management":
      // 2. Grant Pipeline Milestone Stepper & Progress Tracker
      return (
        <div className="rounded-tl-2xl border-t border-l border-slate-700/70 bg-[#0c180a] p-4 pb-10 pr-10 text-white shadow-[0_20px_50px_rgba(12,24,10,0.35)]">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 text-[#14a800]" />
              <span className="text-xs font-bold text-white truncate">Youth Literacy Grant</span>
            </div>
            <span className="rounded-md bg-[#14a800]/25 border border-[#14a800]/40 px-2 py-0.5 text-[10px] font-extrabold text-[#e7f5e3]">
              $125,000
            </span>
          </div>

          {/* Segmented Milestone Pills */}
          <div className="mt-3 grid grid-cols-3 gap-1.5 text-[9px] font-bold">
            <div className="flex items-center justify-center gap-1 rounded-md bg-[#14a800]/25 text-[#e7f5e3] py-1 px-1.5 border border-[#14a800]/40">
              <CheckCircle2 className="h-2.5 w-2.5 text-[#14a800]" />
              <span>Research</span>
            </div>
            <div className="flex items-center justify-center gap-1 rounded-md bg-[#14a800]/25 text-[#e7f5e3] py-1 px-1.5 border border-[#14a800]/40">
              <CheckCircle2 className="h-2.5 w-2.5 text-[#14a800]" />
              <span>Narrative</span>
            </div>
            <div className="flex items-center justify-center gap-1 rounded-md bg-white/10 text-white/90 py-1 px-1.5 border border-white/15">
              <Clock className="h-2.5 w-2.5 text-amber-400" />
              <span>Budget</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3">
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-white/60">Application Packet</span>
              <span className="font-bold text-[#8fd47e]">78% Ready</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#14a800] to-[#68d352]" />
            </div>
          </div>
        </div>
      );

    case "program-operations":
      // 3. Multi-Program Live Telemetry Meters
      return (
        <div className="rounded-tl-2xl border-t border-l border-slate-700/70 bg-[#0c180a] p-4 pb-10 pr-10 text-white shadow-[0_20px_50px_rgba(12,24,10,0.35)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <BarChart3 className="h-3.5 w-3.5 text-[#14a800]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                Program Delivery Pulse
              </span>
            </div>
            <span className="text-[9px] font-semibold bg-white/10 text-[#8fd47e] px-2 py-0.5 rounded-full">
              4 Sites Live
            </span>
          </div>

          <div className="mt-3 space-y-2.5">
            <div>
              <div className="flex justify-between text-[10px] mb-1">
                <span className="font-medium text-white/85">Community Food Drives</span>
                <span className="font-bold text-[#8fd47e]">94% of Goal</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/10">
                <div className="h-full w-[94%] rounded-full bg-[#14a800]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[10px] mb-1">
                <span className="font-medium text-white/85">Youth Mentorship Hours</span>
                <span className="font-bold text-emerald-300">1,420 hrs</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/10">
                <div className="h-full w-[84%] rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      );

    case "board-governance":
      // 4. Board Packet Checklist & Resolution Sign-Off
      return (
        <div className="rounded-tl-2xl border-t border-l border-white/70 bg-white/95 p-4 pb-10 pr-10 text-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#14a800]" />
              <span className="text-xs font-bold text-slate-900">Q3 Board Packet.pdf</span>
            </div>
            <span className="rounded-md bg-[#e7f5e3] px-1.5 py-0.5 text-[9px] font-bold text-[#118f00]">
              5/5 Signed
            </span>
          </div>

          <div className="mt-2.5 space-y-1.5 text-[10px]">
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-2 py-1 border border-slate-100">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="h-3 w-3 text-[#14a800]" />
                Audited Financials &amp; 990
              </span>
              <span className="text-[9px] font-semibold text-slate-400">Approved</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-2 py-1 border border-slate-100">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="h-3 w-3 text-[#14a800]" />
                Governance Policy v2.4
              </span>
              <span className="text-[9px] font-semibold text-slate-400">Archived</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-[#e7f5e3]/50 px-2 py-1 border border-[#14a800]/20">
              <span className="flex items-center gap-1.5 font-bold text-[#0c180a]">
                <CheckCircle2 className="h-3 w-3 text-[#14a800]" />
                Annual Budget Resolution
              </span>
              <span className="text-[9px] font-bold text-[#118f00]">Passed</span>
            </div>
          </div>
        </div>
      );

    case "meeting-intelligence":
      // 5. Audio Recording Waveform & Extracted Action Items
      return (
        <div className="rounded-tl-2xl border-t border-l border-white/70 bg-white/95 p-4 pb-10 pr-10 text-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          {/* Audio Waveform Header */}
          <div className="flex items-center justify-between gap-2 rounded-lg bg-slate-900 px-3 py-2 text-white">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#14a800]">
                <Mic className="h-3 w-3 text-white" />
              </div>
              <span className="text-[10px] font-bold">Committee Sync</span>
            </div>
            {/* Mini Waveform Bars */}
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 h-1.5 bg-[#8fd47e] rounded-full" />
              <span className="w-0.5 h-3 bg-[#14a800] rounded-full" />
              <span className="w-0.5 h-2 bg-[#8fd47e] rounded-full" />
              <span className="w-0.5 h-3 bg-[#14a800] rounded-full" />
              <span className="w-0.5 h-1.5 bg-white/50 rounded-full" />
              <span className="w-0.5 h-2.5 bg-[#8fd47e] rounded-full" />
              <span className="w-0.5 h-1 bg-white/40 rounded-full" />
            </div>
            <span className="text-[9px] font-mono text-white/70">42:18</span>
          </div>

          {/* Extracted Action Items */}
          <div className="mt-2.5 space-y-1.5">
            <div className="flex items-center justify-between text-[10px] bg-slate-50 border border-slate-200/70 rounded-md px-2.5 py-1.5">
              <span className="flex items-center gap-1.5 font-semibold text-slate-800 truncate">
                <CheckSquare className="h-3 w-3 text-[#14a800] shrink-0" />
                Send Donor Impact Brief
              </span>
              <span className="rounded bg-[#e7f5e3] px-1.5 py-0.5 text-[9px] font-bold text-[#118f00]">
                @M.Lee
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] bg-slate-50 border border-slate-200/70 rounded-md px-2.5 py-1.5">
              <span className="flex items-center gap-1.5 font-semibold text-slate-800 truncate">
                <CheckSquare className="h-3 w-3 text-[#14a800] shrink-0" />
                Update Q4 Grant Forecast
              </span>
              <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[9px] font-bold text-slate-700">
                @J.Smith
              </span>
            </div>
          </div>
        </div>
      );

    case "ai-assistants":
    default:
      // 6. Natural-Language Chat Prompt & Cited Answer
      return (
        <div className="rounded-tl-2xl border-t border-l border-slate-700/70 bg-[#0c180a] p-4 pb-10 pr-10 text-white shadow-[0_20px_50px_rgba(12,24,10,0.35)]">
          {/* User Question Bubble */}
          <div className="rounded-xl rounded-br-xs bg-white/10 border border-white/15 px-3 py-1.5 text-[10px] font-medium text-white/90">
            “Which donors gave $1k+ last year but haven’t given yet in 2026?”
          </div>

          {/* AI Cited Answer */}
          <div className="mt-2 rounded-xl rounded-bl-xs bg-[#14a800]/20 border border-[#14a800]/40 p-2.5">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#8fd47e]">
              <Sparkles className="h-3 w-3 text-[#14a800]" />
              <span>18 Donors Found ($42,800 prior total)</span>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="rounded-md bg-[#14a800] px-2 py-0.5 text-[9px] font-bold text-white">
                Draft Outreach
              </span>
              <span className="rounded-md bg-white/10 px-2 py-0.5 text-[9px] font-semibold text-white/80">
                Export CSV
              </span>
            </div>
          </div>
        </div>
      );
  }
};

export const WhatYouCanDoSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#fbfdfa] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
            What We Can Do
          </h2>
        </div>

        {/* 6 High-Contrast Outcome Cards with Varied Peeking Corner UI */}
        <div className="mt-14 md:mt-16 grid gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-2">
          {OUTCOME_CARDS.map((card) => {
            const isGreen = card.theme === "green";

            return (
              <div
                key={card.id}
                className={`group relative overflow-hidden rounded-3xl p-7 sm:p-9 md:p-10 min-h-[310px] sm:min-h-[330px] pb-36 sm:pb-40 flex flex-col justify-between transition-all duration-300 shadow-none ${
                  isGreen
                    ? "bg-gradient-to-br from-[#0c6600] via-[#118f00] to-[#0a5200] text-white border border-[#14a800]/40 hover:shadow-[0_20px_50px_rgba(20,168,0,0.35)]"
                    : "bg-white text-[#0c180a] border-2 border-emerald-100/90 hover:border-[#14a800]/50 hover:shadow-[0_20px_50px_rgba(20,168,0,0.18)]"
                }`}
              >
                {/* Top Row: Title + Subheading */}
                <div className="max-w-[80%] sm:max-w-[72%] md:max-w-[68%]">
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

                {/* Peeking Corner UI Element (Anchored to bottom-right corner with extra bottom/right bleed so seams never show) */}
                <div className="pointer-events-none absolute -bottom-7 -right-7 sm:-bottom-8 sm:-right-8 w-[290px] sm:w-[340px] select-none transition-transform duration-300 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2">
                  {renderCornerWidget(card)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDoSection;
