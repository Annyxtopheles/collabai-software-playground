import { type ReactNode } from "react";

interface Props {
  title: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export function PharmaScreenshot({ title, label, children, className = "" }: Props) {
  const badgeColor = label === "LIVE" ? "#10B981" : label === "BUILT" ? "#0EA5E9" : "#6B7280";
  return (
    <div className={`rounded-xl overflow-hidden border border-slate-700 shadow-2xl ${className}`}>
      <div className="flex items-center gap-2 bg-slate-800 px-4 py-2.5 border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] text-slate-400 font-mono">{title}</span>
        </div>
        <span
          className="text-[9px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: badgeColor + "22", color: badgeColor, border: `1px solid ${badgeColor}44` }}
        >
          {label}
        </span>
      </div>
      <div className="bg-slate-900 min-h-[220px]">{children}</div>
    </div>
  );
}