import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowDown,
  Building2,
  Clock,
  Zap,
  Target,
  Rocket,
  Check,
  Boxes,
  ArrowUpRight,
  Activity,
  HeartPulse,
  HeartHandshake,
  Landmark,
  KeyRound,
  LineChart,
  Megaphone,
  UserCheck,
  Lock,
  Workflow,
} from "lucide-react";
import PageSeoHead from "@/components/PageSeoHead";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import sjInnovationLogo from "@/assets/sj-innovation-logo.svg";
import iso27001Logo from "@/assets/logos/iso-27001-certified-blue.svg";
import { DEFAULT_OG_IMAGE, breadcrumbSchema } from "@/lib/seoSchema";
import FallingText from "@/components/ui/FallingText";

// =========================================================================
// BESPOKE, RESPONSIVE-TO-HOVER VECTOR ILLUSTRATIONS
// High-fidelity SaaS vectors in CollabAI Brand Blue palette (ZERO yellow)
// =========================================================================

/** 1. Start With One Need: Precision Target Lock */
const TargetFocusIllustration = () => (
  <div
    aria-hidden="true"
    className="relative h-20 w-24 sm:h-22 sm:w-28 shrink-0 select-none overflow-visible"
  >
    <svg
      viewBox="0 0 110 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full overflow-visible"
    >
      <path
        d="M 20 44 C 18 18, 55 10, 85 16 C 105 22, 108 55, 96 72 C 80 88, 38 88, 24 74 C 16 66, 22 56, 20 44 Z"
        fill="#eff6ff"
        className="transition-colors duration-500 group-hover:fill-[#dbeafe]"
      />
      <rect
        x="14"
        y="18"
        width="66"
        height="50"
        rx="8"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="1.5"
        className="transition-transform duration-500 ease-out group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]"
      />
      <line x1="22" y1="28" x2="48" y2="28" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="36" x2="68" y2="36" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="44" x2="60" y2="44" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="52" x2="52" y2="52" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <g className="origin-center transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-[-3px]">
        <circle
          cx="68"
          cy="44"
          r="26"
          stroke="#93c5fd"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="origin-center transition-transform duration-700 ease-out group-hover:rotate-90 group-hover:stroke-[#315EFF]"
        />
        <circle
          cx="68"
          cy="44"
          r="18"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="#ffffff"
          className="transition-colors duration-300 group-hover:stroke-[#1d4ed8]"
        />
        <line x1="68" y1="20" x2="68" y2="28" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
        <line x1="68" y1="60" x2="68" y2="68" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
        <line x1="44" y1="44" x2="52" y2="44" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
        <line x1="84" y1="44" x2="92" y2="44" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
        <circle
          cx="68"
          cy="44"
          r="5"
          fill="#315EFF"
          className="transition-transform duration-300 group-hover:scale-125"
        />
        <circle cx="68" cy="44" r="2" fill="#ffffff" />
      </g>
    </svg>
  </div>
);

/** 2. Experience the Workflow: High-Fidelity Interactive Pipeline Canvas */
const WorkflowPipelineIllustration = () => (
  <div
    aria-hidden="true"
    className="relative h-20 w-24 sm:h-22 sm:w-28 shrink-0 select-none overflow-visible"
  >
    <svg
      viewBox="0 0 110 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full overflow-visible"
    >
      <path
        d="M 22 42 C 18 16, 56 10, 86 18 C 104 24, 108 56, 94 72 C 78 88, 36 88, 22 72 C 16 62, 24 52, 22 42 Z"
        fill="#eff6ff"
        className="transition-colors duration-500 group-hover:fill-[#dbeafe]"
      />
      {/* Background Canvas Grid Ticks */}
      <circle cx="30" cy="24" r="1.5" fill="#bfdbfe" />
      <circle cx="58" cy="20" r="1.5" fill="#bfdbfe" />
      <circle cx="86" cy="24" r="1.5" fill="#bfdbfe" />
      <circle cx="30" cy="70" r="1.5" fill="#bfdbfe" />
      <circle cx="86" cy="70" r="1.5" fill="#bfdbfe" />

      {/* Main Connecting Flow Bezier */}
      <path
        d="M 24 52 C 40 52, 38 32, 56 32 C 74 32, 72 52, 88 52"
        stroke="#93c5fd"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        className="transition-colors duration-500 group-hover:stroke-[#315EFF]"
      />
      {/* Active Flow Trajectory Pulse */}
      <path
        d="M 24 52 C 40 52, 38 32, 56 32 C 74 32, 72 52, 88 52"
        stroke="#1d4ed8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 12"
        fill="none"
        className="opacity-50 transition-all duration-300 group-hover:opacity-100"
      />

      {/* Stage 1: Trigger / Event Badge */}
      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <rect x="14" y="42" width="20" height="20" rx="6" fill="#ffffff" stroke="#93c5fd" strokeWidth="2" />
        <rect x="18" y="46" width="12" height="4" rx="1.5" fill="#315EFF" />
        <rect x="18" y="52" width="8" height="2" rx="1" fill="#cbd5e1" />
        <circle cx="24" cy="52" r="7" stroke="#315EFF" strokeWidth="1" strokeDasharray="2 2" className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </g>

      {/* Stage 2: Center AI Processing Engine Hex Chip */}
      <g className="origin-[56px_32px] transition-transform duration-300 group-hover:scale-115">
        <rect x="44" y="20" width="24" height="24" rx="7" fill="#315EFF" stroke="#1d4ed8" strokeWidth="2" />
        {/* Core AI Spark Icon */}
        <path d="M 56 25 L 57.5 30.5 L 63 32 L 57.5 33.5 L 56 39 L 54.5 33.5 L 49 32 L 54.5 30.5 Z" fill="#ffffff" />
        {/* Radial Orbit Indicator */}
        <circle cx="56" cy="32" r="16" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      {/* Stage 3: Automated Action / Verified Badge */}
      <g className="transition-transform duration-300 group-hover:translate-x-1">
        <circle cx="88" cy="52" r="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2.5" />
        <path d="M 83 52 L 87 56 L 93 48" stroke="#315EFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  </div>
);

/** 3. Learn What Works for You: Executive Analytics & AI Value Discovery */
const InsightValueIllustration = () => (
  <div
    aria-hidden="true"
    className="relative h-20 w-24 sm:h-22 sm:w-28 shrink-0 select-none overflow-visible"
  >
    <svg
      viewBox="0 0 110 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full overflow-visible"
    >
      <defs>
        <linearGradient id="liteInsightGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#315EFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#315EFF" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path
        d="M 22 42 C 16 16, 52 10, 84 18 C 104 24, 106 60, 92 76 C 76 90, 34 88, 22 72 C 16 60, 24 52, 22 42 Z"
        fill="#eff6ff"
        className="transition-colors duration-500 group-hover:fill-[#dbeafe]"
      />

      {/* Analytical Dashboard Container */}
      <g className="transition-transform duration-500 ease-out group-hover:translate-x-[-1px] group-hover:-translate-y-1">
        <rect
          x="12"
          y="18"
          width="74"
          height="54"
          rx="10"
          fill="#ffffff"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />
        {/* Subtle Horizontal Guide Lines */}
        <line x1="18" y1="32" x2="80" y2="32" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="18" y1="46" x2="80" y2="46" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="18" y1="60" x2="80" y2="60" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 3" />

        {/* Gradient Area Chart Fill */}
        <path
          d="M 18 58 Q 32 54, 42 46 T 68 28 L 78 26 L 78 64 L 18 64 Z"
          fill="url(#liteInsightGradient)"
        />

        {/* Ascending Value Curve */}
        <path
          d="M 18 58 Q 32 54, 42 46 T 68 28 L 78 26"
          stroke="#315EFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="42" cy="46" r="2.5" fill="#93c5fd" />
        <circle cx="68" cy="28" r="3" fill="#1d4ed8" />
      </g>

      {/* Floating Precision AI Insight Chip at Inflection Point */}
      <g className="origin-[76px_26px] transition-transform duration-300 group-hover:scale-115">
        <rect x="62" y="14" width="36" height="18" rx="6" fill="#315EFF" stroke="#1d4ed8" strokeWidth="1.5" />
        {/* Sparkle Glyphs & Metric */}
        <path d="M 69 23 L 70 20 L 71 23 L 74 24 L 71 25 L 70 28 L 69 25 L 66 24 Z" fill="#ffffff" />
        <text x="76" y="26.5" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
          +ROI
        </text>
        <circle cx="80" cy="23" r="16" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </g>
    </svg>
  </div>
);

/** 4. Scale When You Are Ready: Modular Architecture Expansion */
const ScaleRocketIllustration = () => (
  <div
    aria-hidden="true"
    className="relative h-20 w-24 sm:h-22 sm:w-28 shrink-0 select-none overflow-visible"
  >
    <svg
      viewBox="0 0 110 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full overflow-visible"
    >
      <path
        d="M 20 45 C 16 20, 50 12, 82 20 C 102 26, 105 58, 92 74 C 76 88, 36 86, 22 72 C 16 62, 22 52, 20 45 Z"
        fill="#eff6ff"
        className="transition-colors duration-500 group-hover:fill-[#dbeafe]"
      />

      {/* Tier 1: Single Lite Workflow Stack */}
      <g className="transition-transform duration-500 ease-out group-hover:translate-y-1">
        <rect x="16" y="52" width="24" height="18" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
        <rect x="20" y="57" width="16" height="3" rx="1.5" fill="#94a3b8" />
        <rect x="20" y="62" width="10" height="2" rx="1" fill="#e2e8f0" />
      </g>

      {/* Tier 2: Orchestrated Multi-Workflow Stack */}
      <g className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
        <rect x="36" y="38" width="28" height="24" rx="6" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.8" />
        <rect x="42" y="44" width="16" height="3" rx="1.5" fill="#3b82f6" />
        <rect x="42" y="50" width="12" height="2" rx="1" fill="#bfdbfe" />
        <circle cx="58" cy="54" r="2" fill="#315EFF" />
      </g>

      {/* Tier 3: Enterprise Platform Stack with High-Tech Glow */}
      <g className="transition-transform duration-500 ease-out group-hover:-translate-y-2">
        <rect x="58" y="20" width="34" height="28" rx="7" fill="#315EFF" stroke="#1d4ed8" strokeWidth="2" />
        <rect x="64" y="26" width="22" height="3" rx="1.5" fill="#ffffff" />
        <rect x="64" y="32" width="14" height="2.5" rx="1" fill="#bfdbfe" />
        <circle cx="84" cy="38" r="3" fill="#ffffff" />
        <circle cx="72" cy="38" r="2" fill="#93c5fd" />
      </g>

      {/* Kinetic Velocity Vector Arrow Traversing Upward */}
      <g className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1.5">
        <path
          d="M 24 72 Q 44 64, 58 48 T 92 18"
          stroke="#1d4ed8"
          strokeWidth="2.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Forward Arrowhead */}
        <polygon points="94,15 84,18 90,24" fill="#315EFF" />
        {/* Expansion Orbit Rings */}
        <circle cx="92" cy="18" r="6" stroke="#93c5fd" strokeWidth="1" strokeDasharray="2 2" />
      </g>
    </svg>
  </div>
);

// =========================================================================
// SECTION 7: WHAT YOU GET (BENEFIT MICRO-ILLUSTRATIONS)
// =========================================================================

/** 7.1 Save Time: Automated Time-Recovery Clock */
const SaveTimeIllustration = () => (
  <div aria-hidden="true" className="relative h-14 w-18 sm:h-16 sm:w-20 shrink-0 select-none overflow-visible">
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full overflow-visible">
      <circle cx="40" cy="32" r="24" fill="#eff6ff" className="transition-colors duration-500 group-hover:fill-[#dbeafe]" />
      <circle cx="40" cy="32" r="20" stroke="#93c5fd" strokeWidth="2" fill="#ffffff" />
      {/* Reclaimed Time Arc */}
      <path d="M 40 12 A 20 20 0 0 1 58 40" stroke="#315EFF" strokeWidth="3" strokeLinecap="round" />
      {/* Center Pin & Hands */}
      <circle cx="40" cy="32" r="2.5" fill="#1d4ed8" />
      <line x1="40" y1="32" x2="40" y2="20" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="32" x2="50" y2="32" stroke="#315EFF" strokeWidth="2" strokeLinecap="round" />
      {/* Time Saved Badge */}
      <g className="transition-transform duration-300 group-hover:scale-110">
        <rect x="46" y="38" width="24" height="13" rx="4" fill="#315EFF" />
        <text x="50" y="47.5" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">-4h</text>
      </g>
    </svg>
  </div>
);

/** 7.2 Increase Productivity: Multi-Stream Turbo Throughput */
const IncreaseProductivityIllustration = () => (
  <div aria-hidden="true" className="relative h-14 w-18 sm:h-16 sm:w-20 shrink-0 select-none overflow-visible">
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full overflow-visible">
      <circle cx="40" cy="32" r="24" fill="#eff6ff" className="transition-colors duration-500 group-hover:fill-[#dbeafe]" />
      {/* Pipeline 1 */}
      <rect x="14" y="20" width="46" height="7" rx="3.5" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
      <rect x="16" y="22" width="28" height="3" rx="1.5" fill="#315EFF" className="transition-all duration-500 group-hover:w-36" />
      {/* Pipeline 2 */}
      <rect x="14" y="32" width="50" height="7" rx="3.5" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
      <rect x="16" y="34" width="38" height="3" rx="1.5" fill="#315EFF" className="transition-all duration-500 group-hover:w-44" />
      {/* Pipeline 3 */}
      <rect x="14" y="44" width="42" height="7" rx="3.5" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
      <rect x="16" y="46" width="24" height="3" rx="1.5" fill="#315EFF" className="transition-all duration-500 group-hover:w-32" />
      {/* Turbo Accelerator Star */}
      <g className="origin-[58px_24px] transition-transform duration-300 group-hover:scale-120">
        <circle cx="58" cy="24" r="8" fill="#315EFF" />
        <path d="M 58 19 L 59.5 22.5 L 63 24 L 59.5 25.5 L 58 29 L 56.5 25.5 L 53 24 L 56.5 22.5 Z" fill="#ffffff" />
      </g>
    </svg>
  </div>
);

/** 7.3 Respond Faster: Lightning Instant-Reply Beacon */
const RespondFasterIllustration = () => (
  <div aria-hidden="true" className="relative h-14 w-18 sm:h-16 sm:w-20 shrink-0 select-none overflow-visible">
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full overflow-visible">
      <circle cx="40" cy="32" r="24" fill="#eff6ff" className="transition-colors duration-500 group-hover:fill-[#dbeafe]" />
      {/* Radar Broadcast Waves */}
      <circle cx="40" cy="32" r="16" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="40" cy="32" r="22" stroke="#dbeafe" strokeWidth="1" strokeDasharray="4 4" />
      {/* Central High-Speed Beacon */}
      <rect x="26" y="18" width="28" height="28" rx="8" fill="#ffffff" stroke="#315EFF" strokeWidth="2" className="transition-transform duration-300 group-hover:scale-105" />
      {/* Bolt Glyph */}
      <path d="M 42 22 L 35 33 L 41 33 L 38 42 L 46 31 L 40 31 Z" fill="#315EFF" />
      {/* Fast Notification Pip */}
      <circle cx="54" cy="20" r="3.5" fill="#1d4ed8" />
    </svg>
  </div>
);

/** 7.4 See What Matters: Priority Spotlight Radar */
const SeeWhatMattersIllustration = () => (
  <div aria-hidden="true" className="relative h-14 w-18 sm:h-16 sm:w-20 shrink-0 select-none overflow-visible">
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full overflow-visible">
      <circle cx="40" cy="32" r="24" fill="#eff6ff" className="transition-colors duration-500 group-hover:fill-[#dbeafe]" />
      {/* Background Dimmed Cards */}
      <rect x="14" y="34" width="26" height="18" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.2" opacity="0.6" />
      <rect x="42" y="36" width="24" height="16" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.2" opacity="0.6" />
      {/* Elevated Spotlight Target Card */}
      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <rect x="22" y="14" width="36" height="26" rx="6" fill="#ffffff" stroke="#315EFF" strokeWidth="2" />
        <rect x="26" y="18" width="16" height="3" rx="1.5" fill="#315EFF" />
        <rect x="26" y="24" width="24" height="2" rx="1" fill="#cbd5e1" />
        <rect x="26" y="29" width="18" height="2" rx="1" fill="#cbd5e1" />
        {/* High Priority Star */}
        <circle cx="50" cy="19" r="4" fill="#315EFF" />
        <path d="M 50 17 L 50.8 18.5 L 52.5 19 L 50.8 19.5 L 50 21 L 49.2 19.5 L 47.5 19 L 49.2 18.5 Z" fill="#ffffff" />
      </g>
    </svg>
  </div>
);

/** 7.5 Stay Organized: Structured Workspace Matrix */
const StayOrganizedIllustration = () => (
  <div aria-hidden="true" className="relative h-14 w-18 sm:h-16 sm:w-20 shrink-0 select-none overflow-visible">
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full overflow-visible">
      <circle cx="40" cy="32" r="24" fill="#eff6ff" className="transition-colors duration-500 group-hover:fill-[#dbeafe]" />
      {/* Modular Organized Drawer Container */}
      <rect x="16" y="14" width="48" height="36" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
      {/* Drawer 1 */}
      <rect x="20" y="18" width="40" height="7" rx="3" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" className="transition-transform duration-300 group-hover:translate-x-1" />
      <circle cx="25" cy="21.5" r="1.5" fill="#315EFF" />
      {/* Drawer 2 */}
      <rect x="20" y="28" width="40" height="7" rx="3" fill="#ffffff" stroke="#93c5fd" strokeWidth="1" className="transition-transform duration-300 group-hover:translate-x-1.5" />
      <circle cx="25" cy="31.5" r="1.5" fill="#1d4ed8" />
      {/* Drawer 3 */}
      <rect x="20" y="38" width="40" height="7" rx="3" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" className="transition-transform duration-300 group-hover:translate-x-1" />
      <circle cx="25" cy="41.5" r="1.5" fill="#315EFF" />
    </svg>
  </div>
);

/** 7.6 Make Better Decisions: Data-to-Decision Prism */
const MakeBetterDecisionsIllustration = () => (
  <div aria-hidden="true" className="relative h-14 w-18 sm:h-16 sm:w-20 shrink-0 select-none overflow-visible">
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full overflow-visible">
      <circle cx="40" cy="32" r="24" fill="#eff6ff" className="transition-colors duration-500 group-hover:fill-[#dbeafe]" />
      {/* Incoming Stream Lines */}
      <line x1="14" y1="24" x2="32" y2="32" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="32" x2="32" y2="32" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="40" x2="32" y2="32" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
      {/* Central Decision Prism Diamond */}
      <g className="origin-[38px_32px] transition-transform duration-300 group-hover:scale-115">
        <polygon points="38,20 48,32 38,44 28,32" fill="#315EFF" stroke="#1d4ed8" strokeWidth="1.5" />
        <circle cx="38" cy="32" r="2.5" fill="#ffffff" />
      </g>
      {/* Forward Action Trajectory Arrow */}
      <g className="transition-transform duration-300 group-hover:translate-x-1.5">
        <line x1="48" y1="32" x2="66" y2="22" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="68,21 60,22 64,28" fill="#1d4ed8" />
      </g>
    </svg>
  </div>
);

// =========================================================================
// SECTION 10: BUILT AROUND THE WAY YOU WORK (FEATURE ILLUSTRATIONS)
// =========================================================================

/** 10.1 Bring Information Together: Central Integration Nexus */
const BringTogetherIllustration = () => (
  <div aria-hidden="true" className="relative h-16 w-20 mx-auto select-none overflow-visible mb-4">
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full overflow-visible">
      <circle cx="40" cy="32" r="22" fill="#eff6ff" className="transition-colors duration-500 group-hover:fill-[#dbeafe]" />
      {/* Satellite Integration Nodes */}
      <circle cx="18" cy="20" r="6" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
      <circle cx="18" cy="44" r="6" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
      <circle cx="62" cy="32" r="6" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
      {/* Converging Bus Lines */}
      <path d="M 24 20 Q 32 24, 40 32" stroke="#315EFF" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 24 44 Q 32 40, 40 32" stroke="#315EFF" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 56 32 L 40 32" stroke="#315EFF" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Central Unified Core */}
      <g className="origin-[40px_32px] transition-transform duration-300 group-hover:scale-115">
        <rect x="30" y="22" width="20" height="20" rx="6" fill="#315EFF" stroke="#1d4ed8" strokeWidth="2" />
        <circle cx="40" cy="32" r="3" fill="#ffffff" />
      </g>
    </svg>
  </div>
);

/** 10.2 Reduce Repeated Tasks: Automated Loop-Bypass Highway */
const ReduceRepeatedTasksIllustration = () => (
  <div aria-hidden="true" className="relative h-16 w-20 mx-auto select-none overflow-visible mb-4">
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full overflow-visible">
      <circle cx="40" cy="32" r="22" fill="#eff6ff" className="transition-colors duration-500 group-hover:fill-[#dbeafe]" />
      {/* Faded Circular Loop */}
      <path d="M 32 20 A 14 14 0 1 0 48 44" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" fill="none" />
      {/* High-Speed Direct Automated Expressway */}
      <path d="M 16 32 L 64 32" stroke="#315EFF" strokeWidth="3" strokeLinecap="round" />
      {/* Moving Automated Progress Particle */}
      <g className="transition-transform duration-500 ease-out group-hover:translate-x-3">
        <circle cx="42" cy="32" r="6" fill="#1d4ed8" stroke="#ffffff" strokeWidth="1.5" />
        <polygon points="62,32 54,28 56,32 54,36" fill="#315EFF" />
      </g>
    </svg>
  </div>
);

/** 10.3 Surface Priorities: Smart Queue Elevator */
const SurfacePrioritiesIllustration = () => (
  <div aria-hidden="true" className="relative h-16 w-20 mx-auto select-none overflow-visible mb-4">
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full overflow-visible">
      <circle cx="40" cy="32" r="22" fill="#eff6ff" className="transition-colors duration-500 group-hover:fill-[#dbeafe]" />
      {/* Stacked Lower Queue */}
      <rect x="22" y="42" width="36" height="7" rx="3.5" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="22" y="32" width="36" height="7" rx="3.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
      {/* Elevated Priority Item */}
      <g className="transition-transform duration-300 group-hover:-translate-y-2">
        <rect x="18" y="16" width="44" height="12" rx="4" fill="#315EFF" stroke="#1d4ed8" strokeWidth="1.5" />
        <rect x="24" y="20.5" width="20" height="3" rx="1.5" fill="#ffffff" />
        <circle cx="54" cy="22" r="2.5" fill="#93c5fd" />
      </g>
    </svg>
  </div>
);

/** 10.4 Move Info -> Action Faster: Kinetic Accelerator */
const InformationToActionIllustration = () => (
  <div aria-hidden="true" className="relative h-16 w-20 mx-auto select-none overflow-visible mb-4">
    <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full overflow-visible">
      <circle cx="40" cy="32" r="22" fill="#eff6ff" className="transition-colors duration-500 group-hover:fill-[#dbeafe]" />
      {/* Source Info Document */}
      <rect x="12" y="22" width="18" height="20" rx="4" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
      <line x1="16" y1="28" x2="24" y2="28" stroke="#315EFF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="34" x2="22" y2="34" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
      {/* Acceleration Beam */}
      <line x1="33" y1="32" x2="47" y2="32" stroke="#315EFF" strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round" />
      {/* Target Action Badge */}
      <g className="transition-transform duration-300 group-hover:translate-x-1.5">
        <rect x="50" y="20" width="22" height="24" rx="6" fill="#315EFF" stroke="#1d4ed8" strokeWidth="2" />
        <path d="M 62 24 L 57 32 L 61 32 L 59 40 L 65 31 L 61 31 Z" fill="#ffffff" />
      </g>
    </svg>
  </div>
);

// =========================================================================
// DATA STRUCTURES
// =========================================================================

interface LiteSolution {
  id: string;
  fold: number;
  name: string;
  badge: string;
  category: "agency" | "industry" | "growth";
  problem: string;
  presentingPrefix?: string;
  description: string[];
  helpsWith: string[];
  outcome: string;
  ctaText: string;
  targetHref: string;
  lovableRemixUrl: string;
}

const LITE_SOLUTIONS: LiteSolution[] = [
  // FOLD 1
  {
    id: "agency-lite",
    fold: 1,
    name: "Agency Lite",
    badge: "Agency Operations",
    category: "agency",
    problem: "Spending Too Much Time Chasing Project and Client Updates?",
    description: [
      "Information sits across tools, meetings and team members. Getting a clear picture takes too much effort. Agency Lite brings the work that needs attention into one view.",
    ],
    helpsWith: [
      "Client visibility",
      "Project oversight",
      "Team priorities",
      "Meeting follow-up",
      "Agency operations",
    ],
    outcome: "Less chasing. Clearer priorities. Better control over delivery.",
    ctaText: "Explore Agency Lite",
    targetHref: "/agency",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-agency-lite",
  },
  {
    id: "healthhub-lite",
    fold: 1,
    name: "HealthHub AI Lite",
    badge: "Healthcare Operations",
    category: "industry",
    problem: "Too Much Admin. Not Enough Time for People?",
    presentingPrefix: "Presenting",
    description: [
      "Calls. Scheduling. Follow-ups. Everyday administrative work. It all takes time away from your team. HealthHub AI Lite helps reduce repetitive work behind patient operations.",
    ],
    helpsWith: [
      "Patient communication",
      "Scheduling workflows",
      "Front-desk tasks",
      "Administrative work",
      "Practice operations",
    ],
    outcome: "Less admin. Faster workflows. More time for patients.",
    ctaText: "Explore HealthHub AI Lite",
    targetHref: "/healthcare",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-healthhub-lite",
  },

  // FOLD 2
  {
    id: "nonprofit-lite",
    fold: 2,
    name: "Nonprofit Board Control Tower Lite",
    badge: "Nonprofit & Board Ops",
    category: "industry",
    problem: "Board Information Buried Across Emails, Files and Folders?",
    presentingPrefix: "Presenting",
    description: [
      "Meeting notes are in one place. Policies are somewhere else. Finding the right information takes too long. Nonprofit Board Control Tower Lite brings important board information together.",
    ],
    helpsWith: [
      "Board documents",
      "Meeting information",
      "Governance visibility",
      "Organizational knowledge",
      "Leadership access",
    ],
    outcome: "Find answers faster. Prepare better. Make informed decisions.",
    ctaText: "Explore Nonprofit Board Control Tower Lite",
    targetHref: "/non-profit",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-nonprofit-lite",
  },
  {
    id: "mortgage-lite",
    fold: 2,
    name: "MortgageAI Lite",
    badge: "Mortgage & Banking",
    category: "industry",
    problem: "Finding Loan Problems Only After They Become Urgent?",
    description: [
      "Too much to track. Too easy to fall behind. Busy pipelines make it harder to see which files, deadlines and risks need attention first. MortgageAI Lite helps surface what your team needs to act on.",
    ],
    helpsWith: [
      "Pipeline visibility",
      "Loan priorities",
      "Risk signals",
      "Rate-lock awareness",
      "Operational oversight",
    ],
    outcome: "See priorities sooner. Act faster. Stay ahead of the pipeline.",
    ctaText: "Explore MortgageAI Lite",
    targetHref: "/mortgage-bank",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-mortgage-lite",
  },

  // FOLD 3
  {
    id: "realtor-lite",
    fold: 3,
    name: "RealtorHelp Lite",
    badge: "Real Estate & Brokerages",
    category: "growth",
    problem: "Leads Going Cold While You’re Busy With Everything Else?",
    description: [
      "Follow-ups get delayed. Old leads disappear into the CRM. Good opportunities lose momentum. RealtorHelp Lite helps keep conversations moving.",
    ],
    helpsWith: [
      "Lead follow-up",
      "Re-engagement",
      "AI-assisted messages",
      "Lead organization",
      "Everyday communication",
    ],
    outcome: "Respond faster. Follow up consistently. Keep more opportunities active.",
    ctaText: "Explore RealtorHelp Lite",
    targetHref: "/book-demo?solution=realtor-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-realtor-lite",
  },
  {
    id: "marketing-lite",
    fold: 3,
    name: "Marketing Lite",
    badge: "Marketing Performance",
    category: "growth",
    problem: "Marketing Moving Too Slowly? Clients Slipping Away?",
    presentingPrefix: "Presenting",
    description: [
      "Campaigns are spread across tools. Tasks pile up. Performance takes too long to understand. Marketing Lite brings the work and the numbers into clearer view.",
    ],
    helpsWith: [
      "Marketing performance",
      "Campaign visibility",
      "Task management",
      "AI-powered insights",
      "Priority identification",
    ],
    outcome: "Better visibility. Faster execution. Smarter marketing decisions.",
    ctaText: "Explore Marketing Lite",
    targetHref: "/book-demo?solution=marketing-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-marketing-lite",
  },

  // FOLD 4
  {
    id: "cs-lite",
    fold: 4,
    name: "Client Success Lite",
    badge: "Account Retention",
    category: "growth",
    problem: "Clients Slipping Away Before You See the Warning Signs?",
    presentingPrefix: "Presenting",
    description: [
      "Account updates are scattered. Follow-ups get delayed. Risk becomes visible too late. Client Success Lite helps you see who needs attention and why.",
    ],
    helpsWith: [
      "Client health",
      "Churn signals",
      "Account priorities",
      "Revenue visibility",
      "Client intelligence",
    ],
    outcome: "Earlier action. Stronger relationships. Better retention.",
    ctaText: "Explore Client Success Lite",
    targetHref: "/book-demo?solution=client-success-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-clientsuccess-lite",
  },
  {
    id: "ghl-lite",
    fold: 4,
    name: "GHL Control Tower Lite",
    badge: "GoHighLevel Ecosystem",
    category: "agency",
    problem: "Too Much Happening to See What Needs Attention?",
    presentingPrefix: "Presenting",
    description: [
      "Contacts. Conversations. Pipelines. Revenue. The data is there. The next action is not always obvious. GHL Control Tower Lite turns GHL activity into clearer priorities.",
    ],
    helpsWith: [
      "Pipeline visibility",
      "Lead intelligence",
      "Client overview",
      "Conversations",
      "Revenue visibility",
      "AI insights",
    ],
    outcome: "See what matters. Follow up faster. Keep your pipeline moving.",
    ctaText: "Explore GHL Control Tower Lite",
    targetHref: "/agency?addon=ghl-lite",
    lovableRemixUrl: "https://lovable.dev/projects?ref=collabai-ghl-lite",
  },
];

const INDUSTRIES_TICKER = [
  "Agencies",
  "Healthcare",
  "Nonprofits",
  "Mortgage",
  "Realtors",
  "Marketing",
  "Client Success",
  "GoHighLevel Agencies",
];

const ControlTowerLite = () => {
  const [selectedSolution, setSelectedSolution] = useState<LiteSolution | null>(null);
  const [filterCategory, setFilterCategory] = useState<"all" | "agency" | "industry" | "growth">("all");

  const filteredSolutions =
    filterCategory === "all"
      ? LITE_SOLUTIONS
      : LITE_SOLUTIONS.filter((s) => s.category === filterCategory);

  const scrollToSolutions = () => {
    const el = document.getElementById("choose-lite");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[hsl(var(--brand-secondary))]/15 selection:text-[hsl(var(--brand-secondary))]">
      <PageSeoHead
        title="Control Tower Lite — Practical AI Solutions for Real Business Workflows | CollabAI"
        description="You don't need the biggest AI system. You need the right starting point. Explore Control Tower Lite solutions for agencies, healthcare, nonprofits, mortgage, realtors, marketing, and CS."
        canonicalPath="/control-tower-lite"
        ogImage={DEFAULT_OG_IMAGE}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Control Tower Lite", path: "/control-tower-lite" },
        ])}
      />

      {/* =========================================================================
          1. HERO - FIRST FOLD (CollabAI Brand Blue Gradient + Ambient Sparkles + FallingText)
         ========================================================================= */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-border text-white" style={{
        background: "linear-gradient(180deg, #1342c4 0%, #1c52e0 35%, #2563eb 70%, #1d4ed8 100%)",
      }}>
        {/* Luminous Ambient Radial Spotlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-0 opacity-80"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 75% 55% at 50% 25%, rgba(255, 255, 255, 0.22) 0%, transparent 65%),
              radial-gradient(circle at 10% 20%, rgba(147, 197, 253, 0.2) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(30, 64, 175, 0.4) 0%, transparent 50%)
            `,
          }}
        />

        {/* Ambient Floating Luminous Sparkles (Mirroring ePhysician Atmospheric Visuals) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden -z-0">
          {/* Sparkle 1 (Left Top) */}
          <motion.div
            animate={{ opacity: [0.35, 0.95, 0.35], scale: [0.85, 1.2, 0.85] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[7%] top-[26%]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0L13.8 9.2L23 11L13.8 12.8L12 22L10.2 12.8L1 11L10.2 9.2L12 0Z"
                fill="white"
                fillOpacity="0.9"
                filter="drop-shadow(0 0 8px rgba(255,255,255,0.85))"
              />
            </svg>
          </motion.div>

          {/* Sparkle 2 (Far Right Top) */}
          <motion.div
            animate={{ opacity: [0.3, 0.85, 0.3], scale: [0.9, 1.15, 0.9] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute right-[9%] top-[22%]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0L13.8 9.2L23 11L13.8 12.8L12 22L10.2 12.8L1 11L10.2 9.2L12 0Z"
                fill="white"
                fillOpacity="0.85"
                filter="drop-shadow(0 0 7px rgba(255,255,255,0.8))"
              />
            </svg>
          </motion.div>

          {/* Sparkle 3 (Right Mid) */}
          <motion.div
            animate={{ opacity: [0.25, 0.75, 0.25], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
            className="absolute right-[13%] top-[62%]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0L13.8 9.2L23 11L13.8 12.8L12 22L10.2 12.8L1 11L10.2 9.2L12 0Z"
                fill="white"
                fillOpacity="0.8"
                filter="drop-shadow(0 0 6px rgba(255,255,255,0.75))"
              />
            </svg>
          </motion.div>

          {/* Sparkle 4 (Left Mid/Bottom) */}
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.85, 1.15, 0.85] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
            className="absolute left-[11%] top-[65%]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" fill="white" fillOpacity="0.85" filter="drop-shadow(0 0 8px rgba(255,255,255,0.9))" />
            </svg>
          </motion.div>

          {/* Sparkle 5 (Right floating dot) */}
          <motion.div
            animate={{ opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="absolute right-[4%] top-[42%]"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="3.5" fill="white" fillOpacity="0.8" filter="drop-shadow(0 0 6px rgba(255,255,255,0.85))" />
            </svg>
          </motion.div>

          {/* Sparkle 6 (Left floating dot) */}
          <motion.div
            animate={{ opacity: [0.2, 0.75, 0.2] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 2.6 }}
            className="absolute left-[3%] top-[46%]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="3.5" fill="white" fillOpacity="0.75" filter="drop-shadow(0 0 6px rgba(255,255,255,0.8))" />
            </svg>
          </motion.div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow Badge (Frosted White Capsule) */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                <span>INTRODUCING LITE · DESIGNED TO MAKE YOUR FIRST STEP EASIER</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl tracking-tight text-balance">
              <span>You Don’t Need the Biggest AI System.</span>
              <span className="block mt-2 text-white">
                You Need the Right Starting Point.
              </span>
            </h1>

            {/* Subhead with High Contrast */}
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-blue-100/95 leading-relaxed text-pretty">
              AI projects often become complicated because businesses try to solve everything at once.
            </p>

            {/* Trust Badges */}
            <div className="mt-5 flex items-center justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-[11px] sm:text-xs uppercase tracking-[0.14em] text-white/90 shadow-2xs">
                <Lock className="w-3.5 h-3.5 text-blue-200" />
                Private by design · Self-hosted by default · Real workflows on day one
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={scrollToSolutions}
                className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[hsl(var(--brand-secondary))] shadow-xl transition-all duration-150 hover:bg-blue-50 hover:shadow-2xl active:translate-y-[2px]"
              >
                <span>Explore Lite Now</span>
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5 text-[hsl(var(--brand-secondary))]" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedSolution(LITE_SOLUTIONS[0])}
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 backdrop-blur-md px-8 py-3.5 text-sm font-semibold text-white shadow-xs transition-all duration-150 hover:bg-white/20 hover:border-white/50 active:translate-y-[2px]"
              >
                <Sparkles className="mr-2 h-4 w-4 text-blue-200" />
                <span>Lovable Remix (Instant Buy)</span>
              </button>
            </div>

            {/* Industry Coverage: Interactive 2D Physics Falling Tiles (No Dots, Bigger, Matter.js) */}
            <div className="mt-14 pt-8 border-t border-white/20">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-100/95 mb-4 text-center">
                AI solutions for agencies, healthcare, nonprofits, mortgage, realtors, marketing, client success, &amp; GoHighLevel agencies
              </p>

              {/* Matter.js Physics Canvas Container */}
              <div className="relative mx-auto h-48 sm:h-56 w-full max-w-4xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-2 overflow-hidden shadow-2xl">
                <FallingText
                  words={INDUSTRIES_TICKER}
                  variant="tiles"
                  theme="light"
                  fontSize="1.15rem"
                  trigger="auto"
                  gravity={0.85}
                  bounciness={0.35}
                  scatter={0.4}
                  stagger={0.04}
                  draggable={true}
                  cursorPush={0.65}
                  className="w-full h-full"
                />
              </div>
              <p className="text-[11px] font-medium text-blue-200/80 mt-2.5 text-center">
                Interactive: Click &amp; drag or flick any industry tile around
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHAT “LITE” ACTUALLY MEANS (Interactive Hover Illustrations, No Steps)
         ========================================================================= */}
      <section className="py-24 bg-slate-light border-b border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              WHAT “LITE” ACTUALLY MEANS
            </div>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight">
              A Smaller Starting Point.
              <span className="block text-slate-secondary font-medium mt-1">Not Just Another AI Demo.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-secondary leading-relaxed">
              Our Lite products are focused versions of larger AI platforms and industry solutions.
              Instead of asking you to commit to a large system before you know how it fits your business, Lite gives you a practical way to start with the workflows that matter most.
            </p>
          </div>

          {/* 4 Cards with custom responsive-to-hover animated vector illustrations */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Start With One Need */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-primary leading-snug">
                    Start With One Need
                  </h3>
                </div>
                <TargetFocusIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed mt-2">
                Choose the area where your team is losing time, missing opportunities or doing too much work manually.
              </p>
            </div>

            {/* Card 2: Experience the Workflow */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-primary leading-snug">
                    Experience the Workflow
                  </h3>
                </div>
                <WorkflowPipelineIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed mt-2">
                See AI working inside an actual business process instead of watching a generic presentation.
              </p>
            </div>

            {/* Card 3: Learn What Works for You */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-primary leading-snug">
                    Learn What Works for You
                  </h3>
                </div>
                <InsightValueIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed mt-2">
                Understand where AI creates real value before expanding your investment.
              </p>
            </div>

            {/* Card 4: Scale When You Are Ready */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-primary leading-snug">
                    Scale When You Are Ready
                  </h3>
                </div>
                <ScaleRocketIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed mt-2">
                Move into a larger annual solution, additional workflows or a customized system when the business case is clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3–6. CHOOSE YOUR LITE SOLUTION (Clean Toggles, Legible High-Contrast Buttons)
         ========================================================================= */}
      <section id="choose-lite" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              PRODUCTION-READY EDITIONS
            </div>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight uppercase">
              CHOOSE YOUR LITE SOLUTION
            </h2>

            {/* 4 Clean Toggles without any scrollbar */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => setFilterCategory("all")}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-150 ${
                  filterCategory === "all"
                    ? "border border-slate-900 bg-slate-950 text-white shadow-xs"
                    : "border border-border bg-card text-slate-secondary hover:border-slate-400 hover:text-brand-primary"
                }`}
              >
                All Solutions (8)
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory("agency")}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-150 ${
                  filterCategory === "agency"
                    ? "border border-slate-900 bg-slate-950 text-white shadow-xs"
                    : "border border-border bg-card text-slate-secondary hover:border-slate-400 hover:text-brand-primary"
                }`}
              >
                Agencies &amp; Operations
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory("industry")}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-150 ${
                  filterCategory === "industry"
                    ? "border border-slate-900 bg-slate-950 text-white shadow-xs"
                    : "border border-border bg-card text-slate-secondary hover:border-slate-400 hover:text-brand-primary"
                }`}
              >
                Healthcare, Nonprofits, Mortgage
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory("growth")}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-150 ${
                  filterCategory === "growth"
                    ? "border border-slate-900 bg-slate-950 text-white shadow-xs"
                    : "border border-border bg-card text-slate-secondary hover:border-slate-400 hover:text-brand-primary"
                }`}
              >
                Real Estate, Marketing &amp; CS
              </button>
            </div>
          </div>

          {/* Cards Grid: Streamlined, Airy, Exact Copy, High Contrast */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {filteredSolutions.map((solution) => (
              <div
                key={solution.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/12"
              >
                <div>
                  {/* Top Row: Product Name Eyebrow + Lite Edition Dot */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
                      {solution.presentingPrefix && (
                        <span className="text-muted-foreground font-medium mr-1.5">{solution.presentingPrefix}</span>
                      )}
                      {solution.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-slate-500">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-secondary))]" />
                      Lite Edition
                    </span>
                  </div>

                  {/* Problem Hook Question */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-primary mb-3 leading-snug">
                    {solution.problem}
                  </h3>

                  {/* Description Copy */}
                  <p className="text-sm text-slate-secondary leading-relaxed mb-5">
                    {solution.description.join(" ")}
                  </p>

                  {/* What It Helps With: Streamlined Chip List */}
                  <div className="mb-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      What It Helps With:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {solution.helpsWith.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-700 font-medium"
                        >
                          <Check className="h-3 w-3 text-[hsl(var(--brand-secondary))] shrink-0" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome Highlight Line */}
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mb-6">
                    <strong className="font-bold text-brand-primary">Outcome:</strong>{" "}
                    {solution.outcome}
                  </p>
                </div>

                {/* Action Buttons: 100% High-Contrast Deterministic Styling */}
                <div className="pt-5 border-t border-border flex flex-col sm:flex-row gap-2.5 items-stretch">
                  <button
                    type="button"
                    onClick={() => setSelectedSolution(solution)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-900 bg-slate-950 px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all duration-150 hover:border-slate-800 hover:bg-slate-800 hover:text-white active:translate-y-[1px]"
                  >
                    <Sparkles className="mr-1.5 h-3.5 w-3.5 text-white" />
                    <span>Lovable Remix (Instant Buy)</span>
                  </button>
                  <Link
                    to={solution.targetHref}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 shadow-xs transition-all duration-150 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950 active:translate-y-[1px]"
                  >
                    <span>{solution.ctaText}</span>
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-slate-700" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. BENEFITS (WHAT YOU GET)
          Fixed orphaned word: "Workday You Already&nbsp;Have." with [text-wrap:balance]
         ========================================================================= */}
      <section className="py-24 bg-slate-light border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              WHAT YOU GET
            </div>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight max-w-2xl mx-auto [text-wrap:balance]">
              More Output From the Workday You Already&nbsp;Have.
            </h2>
          </div>

          {/* 6 Benefit Cards following CollabAI Card Token with Responsive Illustrations */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1: Save Time */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-primary leading-snug">
                    Save Time
                  </h3>
                </div>
                <SaveTimeIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Reduce repetitive everyday work.
              </p>
            </div>

            {/* 2: Increase Productivity */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-primary leading-snug">
                    Increase Productivity
                  </h3>
                </div>
                <IncreaseProductivityIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Help your team complete more without adding unnecessary manual steps.
              </p>
            </div>

            {/* 3: Respond Faster */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-primary leading-snug">
                    Respond Faster
                  </h3>
                </div>
                <RespondFasterIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Keep customers, leads and important tasks moving.
              </p>
            </div>

            {/* 4: See What Matters */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-primary leading-snug">
                    See What Matters
                  </h3>
                </div>
                <SeeWhatMattersIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Surface priorities without digging through multiple systems.
              </p>
            </div>

            {/* 5: Stay Organized */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-primary leading-snug">
                    Stay Organized
                  </h3>
                </div>
                <StayOrganizedIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Keep important information and work easier to manage.
              </p>
            </div>

            {/* 6: Make Better Decisions */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-primary leading-snug">
                    Make Better Decisions
                  </h3>
                </div>
                <MakeBetterDecisionsIllustration />
              </div>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Turn business information into useful insights and clearer next actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. EXPLAINING WHY (Exact Copy)
         ========================================================================= */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--brand-secondary))]/10 text-[hsl(var(--brand-secondary))] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              WHY THESE AI SOLUTIONS?
            </div>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight">
              Built for Work.
              <span className="block text-slate-secondary font-medium mt-1">Not Just Prompts.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-secondary leading-relaxed max-w-2xl mx-auto">
              Generic AI gives you a blank box. These solutions are built around actual business workflows.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <h3 className="text-lg font-bold text-brand-primary mb-2">Purpose-Built</h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Designed for specific teams and industries.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <h3 className="text-lg font-bold text-brand-primary mb-2">Practical</h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Focused on everyday work your team already handles.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <h3 className="text-lg font-bold text-brand-primary mb-2">Action-Oriented</h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Built to help surface what needs attention next.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-lg hover:shadow-[hsl(var(--brand-secondary))]/10">
              <h3 className="text-lg font-bold text-brand-primary mb-2">Easy to Use</h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                AI fits into the workflow instead of becoming another complicated system to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. BUILT AROUND THE WAY YOU WORK (Exact User Copy)
         ========================================================================= */}
      <section className="py-24 bg-slate-light border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary tracking-tight">
              <span>Your Tools Should Work Together — </span>
              <span className="text-slate-secondary font-medium">Not Create More Work.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-secondary">
              These AI solutions are designed to work around real business operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {/* Card 1: Bring information together */}
            <div className="group rounded-2xl border border-border bg-card p-7 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10 flex flex-col items-center justify-between">
              <BringTogetherIllustration />
              <h3 className="text-base font-semibold text-brand-primary mt-2">
                Bring information together.
              </h3>
            </div>

            {/* Card 2: Reduce repeated tasks */}
            <div className="group rounded-2xl border border-border bg-card p-7 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10 flex flex-col items-center justify-between">
              <ReduceRepeatedTasksIllustration />
              <h3 className="text-base font-semibold text-brand-primary mt-2">
                Reduce repeated tasks.
              </h3>
            </div>

            {/* Card 3: Surface priorities */}
            <div className="group rounded-2xl border border-border bg-card p-7 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10 flex flex-col items-center justify-between">
              <SurfacePrioritiesIllustration />
              <h3 className="text-base font-semibold text-brand-primary mt-2">
                Surface priorities.
              </h3>
            </div>

            {/* Card 4: Help your team move from information → action faster */}
            <div className="group rounded-2xl border border-border bg-card p-7 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary))] hover:shadow-xl hover:shadow-[hsl(var(--brand-secondary))]/10 flex flex-col items-center justify-between">
              <InformationToActionIllustration />
              <h3 className="text-base font-semibold text-brand-primary mt-2">
                Help your team move from information → action faster.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. CONCLUSION - NEED SOMETHING MORE?
          (CollabAI Brand Blue Section with 100% High Contrast Text & Buttons)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#091b4d] via-[#1d4ed8] to-[#1e3a8a] py-16 sm:py-20 md:py-24 text-white shadow-inner">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 82% 40%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
              radial-gradient(circle at 95% 85%, rgba(49, 94, 255, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 20% 90%, rgba(0, 0, 0, 0.3) 0%, transparent 60%)
            `,
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-radial from-white/30 via-[#dbeafe]/10 to-transparent blur-3xl -z-0"
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
            <div className="text-left lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs mb-5">
                <Sparkles className="h-3.5 w-3.5 text-white" />
                <span>NEED SOMETHING MORE?</span>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl leading-[1.15] text-balance text-white">
                <span>When Your Needs Go Beyond Lite,</span>
                <span className="block mt-1 text-white/95">We Can Go Further.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-white/90 text-pretty">
                Need AI across more workflows, teams or systems? We also provide annual AI services and custom-built solutions around your business.
              </p>

              {/* 8 Feature Chips */}
              <div className="mt-7 flex flex-wrap gap-2 max-w-xl">
                {[
                  "Custom AI workflows",
                  "Deeper system integrations",
                  "Multi-team solutions",
                  "Custom dashboards",
                  "AI automation",
                  "Private AI environments",
                  "Self-hosted solutions",
                  "Industry-specific development",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs backdrop-blur-xs"
                  >
                    <Check className="mr-1.5 h-3.5 w-3.5 text-white" />
                    {chip}
                  </span>
                ))}
              </div>

              {/* High-Contrast Action Buttons (Explicit solid styling, zero clash) */}
              <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
                <Link
                  to="/collabai-platform"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-slate-950 shadow-md transition-all duration-150 hover:bg-slate-100 hover:text-black active:translate-y-[1px]"
                >
                  <span>Explore Full &amp; Custom AI Solutions</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-slate-950" />
                </Link>
                <Link
                  to="/book-demo"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-xs transition-all duration-150 hover:border-white/70 hover:bg-white/20 hover:text-white active:translate-y-[1px]"
                >
                  Schedule Private Architecture Review
                </Link>
              </div>
            </div>

            {/* Right Column: Ribbon Animation Canvas in Blue Palette */}
            <div className="relative lg:col-span-5 h-[280px] sm:h-[340px] w-full flex items-center justify-center">
              <svg
                viewBox="0 0 460 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-full w-full pointer-events-none overflow-visible select-none"
              >
                <defs>
                  <linearGradient id="liteRibbonGlowA" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                    <stop offset="45%" stopColor="#93c5fd" stopOpacity="0.4" />
                    <stop offset="85%" stopColor="#ffffff" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#315EFF" stopOpacity="0.1" />
                  </linearGradient>

                  <linearGradient id="liteRibbonGlowB" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
                  </linearGradient>

                  <filter id="liteSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <motion.path
                  d="M 20 250 C 110 250, 150 70, 250 85 C 340 100, 390 230, 450 140"
                  stroke="url(#liteRibbonGlowA)"
                  strokeWidth="38"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#liteSoftGlow)"
                  animate={{
                    d: [
                      "M 20 250 C 110 250, 150 70, 250 85 C 340 100, 390 230, 450 140",
                      "M 20 230 C 120 270, 160 90, 255 105 C 335 120, 385 200, 450 120",
                      "M 20 250 C 110 250, 150 70, 250 85 C 340 100, 390 230, 450 140",
                    ],
                  }}
                  transition={{
                    duration: 7.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.path
                  d="M 40 90 C 130 90, 160 260, 260 240 C 350 220, 380 70, 450 190"
                  stroke="url(#liteRibbonGlowB)"
                  strokeWidth="28"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#liteSoftGlow)"
                  animate={{
                    d: [
                      "M 40 90 C 130 90, 160 260, 260 240 C 350 220, 380 70, 450 190",
                      "M 40 110 C 140 70, 170 240, 255 220 C 345 200, 390 90, 450 210",
                      "M 40 90 C 130 90, 160 260, 260 240 C 350 220, 380 70, 450 190",
                    ],
                  }}
                  transition={{
                    duration: 8.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.path
                  d="M 10 210 Q 150 40, 280 180 T 450 110"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  strokeDashoffset={0}
                  fill="none"
                  animate={{
                    strokeDashoffset: [0, -40],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <circle cx="250" cy="85" r="5" fill="#ffffff" filter="url(#liteSoftGlow)" />
                <circle cx="250" cy="85" r="2" fill="#315EFF" />

                <circle cx="340" cy="100" r="4" fill="#ffffff" filter="url(#liteSoftGlow)" />
                <circle cx="340" cy="100" r="1.5" fill="#315EFF" />

                <circle cx="160" cy="240" r="4.5" fill="#ffffff" filter="url(#liteSoftGlow)" />
                <circle cx="160" cy="240" r="1.8" fill="#315EFF" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. BUILT AND BROUGHT TO YOU BY SJ INNOVATION (Matches CollabAI Trust Section)
         ========================================================================= */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-border">
            <div className="flex items-center">
              <img
                src={sjInnovationLogo}
                alt="SJ Innovation"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div className="text-left sm:text-right">
              <div className="inline-block rounded-full bg-slate-light border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-secondary))] mb-2">
                BUILT AND BROUGHT TO YOU BY SJ INNOVATION
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-primary leading-tight [text-wrap:balance]">
                22+ Years of Proven Technology&nbsp;Delivery.
              </h2>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[hsl(var(--brand-secondary))]">
                500+
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-brand-primary">
                Clients
              </div>
              <div className="text-xs text-slate-secondary mt-0.5">Delivered across software, mobile, cloud and AI</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[hsl(var(--brand-secondary))]">
                1,000+
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-brand-primary">
                Projects Delivered
              </div>
              <div className="text-xs text-slate-secondary mt-0.5">Proven delivery track record</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col items-center justify-center">
              <div className="h-9 sm:h-10 flex items-center justify-center">
                <img
                  src={iso27001Logo}
                  alt="ISO/IEC 27001:2022 Certified"
                  className="h-8 sm:h-9.5 w-auto object-contain"
                />
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-brand-primary">
                ISO/IEC 27001:2022 Certified
              </div>
              <div className="text-xs text-slate-secondary mt-0.5">Information security practices backed by international standard</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[hsl(var(--brand-secondary))]">
                22+
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-brand-primary">
                Years in Tech
              </div>
              <div className="text-xs text-slate-secondary mt-0.5">Proven technology delivery</div>
            </div>
          </div>

          {/* Recognition Bar */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-semibold text-brand-primary uppercase tracking-wider">Recognition:</span>
              <span className="rounded-full bg-slate-light border border-border px-3 py-1 text-brand-primary font-semibold">Inc. 5000</span>
              <span className="rounded-full bg-slate-light border border-border px-3 py-1 text-brand-primary font-semibold">Clutch Recognized</span>
              <span className="rounded-full bg-slate-light border border-border px-3 py-1 text-brand-primary font-semibold">NYC MBE</span>
            </div>
            <div className="text-muted-foreground font-medium text-center sm:text-right">
              Delivered across software, mobile, cloud and AI.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LOVABLE REMIX / INSTANT BUY DIALOG MODAL (CollabAI Design Tokens)
         ========================================================================= */}
      <Dialog open={!!selectedSolution} onOpenChange={(open) => !open && setSelectedSolution(null)}>
        <DialogContent className="max-w-lg border border-border bg-card text-foreground p-6 sm:p-8 sm:rounded-2xl shadow-xl">
          {selectedSolution && (
            <>
              <DialogHeader>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--brand-secondary))] uppercase tracking-wider mb-1">
                  <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--brand-secondary))]" />
                  INSTANT BUY &amp; LOVABLE REMIX
                </div>
                <DialogTitle className="text-2xl font-bold text-brand-primary tracking-tight">
                  {selectedSolution.name}
                </DialogTitle>
                <DialogDescription className="text-slate-secondary text-sm">
                  {selectedSolution.outcome}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-border bg-slate-light p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Included Workflows &amp; Capabilities:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-secondary font-medium">
                    {selectedSolution.helpsWith.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[hsl(var(--brand-secondary))] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-[hsl(var(--brand-secondary))]/25 bg-[hsl(var(--brand-secondary))]/5 p-3.5 text-xs text-brand-primary flex items-center justify-between font-medium">
                  <span>Pre-configured template · Zero vendor lock-in</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] font-semibold text-[hsl(var(--brand-secondary))]">
                    Production Ready
                  </span>
                </div>

                <div className="space-y-2.5 pt-2">
                  <a
                    href={selectedSolution.lovableRemixUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-950 text-white font-semibold text-sm shadow-sm hover:border-slate-800 hover:bg-slate-800 active:translate-y-[1px]"
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-white" />
                    Remix on Lovable (Instant Deploy)
                    <ArrowUpRight className="ml-1.5 h-4 w-4 text-white" />
                  </a>
                  <Link
                    to={selectedSolution.targetHref}
                    className="w-full h-11 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white hover:bg-slate-100 hover:text-slate-950 text-slate-800 font-semibold text-sm"
                  >
                    {selectedSolution.ctaText}
                    <ArrowRight className="ml-1.5 h-4 w-4 text-slate-700" />
                  </Link>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ControlTowerLite;
