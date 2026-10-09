import React from "react";
import {
  ShieldCheck,
  Lock,
  Database,
  CheckCircle2,
  Server,
  Layers,
  ExternalLink,
  Check,
  Minus,
  Ban,
  Cloud,
} from "lucide-react";

export const NonprofitSecuritySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Block matching Reference Layout: Title Left with Eyebrow, Supporting Text Right */}
        <div className="grid gap-6 md:grid-cols-12 md:items-end border-b border-slate-200/80 pb-12">
          <div className="md:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              Privacy &amp; Protection
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0c180a] sm:text-4xl md:text-5xl text-balance">
              Your Data Is Private, Protected and Secure
            </h2>
          </div>

          <div className="md:col-span-5 md:border-l md:border-slate-200/80 md:pl-8">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 text-pretty">
              Get the benefits of AI without giving up control of your organization’s sensitive donor,
              member, financial or operational information.
            </p>
          </div>
        </div>

        {/* 6 Structured Cards with Micro-UI Proof Elements */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* 01: Private by design */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:bg-white hover:shadow-lg">
            <div>
              <span className="text-xs font-black tracking-widest text-[#14a800]">01</span>
              <h3 className="mt-2 text-xl font-bold text-[#0c180a]">Private by design</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                Your data stays isolated in your dedicated organization environment, completely private from
                other entities.
              </p>
            </div>

            {/* Micro-UI Proof: Isolated Tenant Graphic */}
            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
              <div className="flex items-center justify-between gap-2">
                {/* Organization Isolated Tenant Box */}
                <div className="flex-1 rounded-xl border-2 border-[#14a800] bg-[#e7f5e3]/40 p-2.5 text-left">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0c180a]">
                    <div className="h-2 w-2 rounded-full bg-[#14a800] animate-pulse" />
                    <span>Your Organization</span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#118f00] block mt-0.5">
                    Isolated tenant
                  </span>
                </div>

                {/* Firewall Lock Icon */}
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                  <Lock className="h-3.5 w-3.5" />
                </div>

                {/* Other Organizations (Blocked) */}
                <div className="flex-1 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-2.5 text-left opacity-70">
                  <div className="text-xs font-medium text-slate-600">Other Entities</div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Zero access</span>
                </div>
              </div>
            </div>
          </div>

          {/* 02: Role-based access */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:bg-white hover:shadow-lg">
            <div>
              <span className="text-xs font-black tracking-widest text-[#14a800]">02</span>
              <h3 className="mt-2 text-xl font-bold text-[#0c180a]">Role-based access</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                Granular permission locks ensure staff, leadership, and board members only see information
                intended for their role.
              </p>
            </div>

            {/* Micro-UI Proof: Permission Matrix Table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs">
              <table className="w-full text-[11px]">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                    <th className="pb-1.5 text-left font-medium">Role</th>
                    <th className="pb-1.5 text-center font-medium">View</th>
                    <th className="pb-1.5 text-center font-medium">Edit</th>
                    <th className="pb-1.5 text-center font-medium">Manage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100/70 text-slate-700">
                  <tr>
                    <td className="py-1.5 font-bold text-slate-800">Staff</td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#14a800]" />
                    </td>
                    <td className="py-1.5 text-center text-slate-300">
                      <Minus className="mx-auto h-3.5 w-3.5" />
                    </td>
                    <td className="py-1.5 text-center text-slate-300">
                      <Minus className="mx-auto h-3.5 w-3.5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-bold text-slate-800">Leadership</td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#14a800]" />
                    </td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#14a800]" />
                    </td>
                    <td className="py-1.5 text-center text-slate-300">
                      <Minus className="mx-auto h-3.5 w-3.5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-bold text-slate-800">Board</td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#14a800]" />
                    </td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#14a800]" />
                    </td>
                    <td className="py-1.5 text-center">
                      <Check className="mx-auto h-3.5 w-3.5 text-[#14a800]" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 03: Encrypted in transit & at rest */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:bg-white hover:shadow-lg">
            <div>
              <span className="text-xs font-black tracking-widest text-[#14a800]">03</span>
              <h3 className="mt-2 text-xl font-bold text-[#0c180a]">Encrypted in transit &amp; at rest</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                Enterprise-grade TLS 1.3 in transit and AES-256 encryption at rest protect every file,
                transcript, and record.
              </p>
            </div>

            {/* Micro-UI Proof: Dual Encryption Badges */}
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                  <Lock className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 font-medium block">In transit</span>
                  <span className="text-xs font-bold text-slate-800 block">TLS 1.3</span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                  <Database className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 font-medium block">At rest</span>
                  <span className="text-xs font-bold text-slate-800 block">AES-256</span>
                </div>
              </div>
            </div>
          </div>

          {/* 04: Never used to train public models */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:bg-white hover:shadow-lg">
            <div>
              <span className="text-xs font-black tracking-widest text-[#14a800]">04</span>
              <h3 className="mt-2 text-xl font-bold text-[#0c180a]">
                Never used to train public models
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                Your donor records and private organizational knowledge are never fed into public AI
                training datasets.
              </p>
            </div>

            {/* Micro-UI Proof: Blocked Data Pipeline Graphic */}
            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#e7f5e3] text-[#14a800]">
                    <Database className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-slate-800 block">Your Data</span>
                    <span className="text-[10px] text-[#118f00] font-semibold block">Stays private</span>
                  </div>
                </div>

                {/* Strikethrough / Blockade Icon */}
                <div className="flex items-center gap-1">
                  <span className="h-0.5 w-4 bg-red-300" />
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Ban className="h-3.5 w-3.5" />
                  </div>
                  <span className="h-0.5 w-4 bg-red-300" />
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-slate-800 block">Public Models</span>
                  <span className="text-[10px] text-red-600 font-semibold block">Zero training</span>
                </div>
              </div>
            </div>
          </div>

          {/* 05: Self-hosting available */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:bg-white hover:shadow-lg">
            <div>
              <span className="text-xs font-black tracking-widest text-[#14a800]">05</span>
              <h3 className="mt-2 text-xl font-bold text-[#0c180a]">Self-hosting available</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                Run on your own infrastructure or cloud for total organizational control over data residency
                and compliance.
              </p>
            </div>

            {/* Micro-UI Proof: Infrastructure Choice Switch */}
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs text-left">
                <div className="flex items-center justify-between">
                  <Server className="h-4 w-4 text-slate-500" />
                  <span className="h-2 w-2 rounded-full border border-slate-300" />
                </div>
                <div className="mt-2 text-xs font-bold text-slate-800">Your servers</div>
                <span className="text-[10px] text-slate-400 block">On-prem / private cloud</span>
              </div>

              <div className="rounded-2xl border-2 border-[#14a800] bg-[#e7f5e3]/40 p-3 shadow-2xs text-left">
                <div className="flex items-center justify-between">
                  <Cloud className="h-4 w-4 text-[#14a800]" />
                  <span className="h-2 w-2 rounded-full bg-[#14a800]" />
                </div>
                <div className="mt-2 text-xs font-bold text-[#0c180a]">Our cloud</div>
                <span className="text-[10px] text-[#118f00] font-semibold block">Secure, isolated</span>
              </div>
            </div>
          </div>

          {/* 06: Auditable AI activity */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-200 hover:border-[#14a800]/40 hover:bg-white hover:shadow-lg">
            <div>
              <span className="text-xs font-black tracking-widest text-[#14a800]">06</span>
              <h3 className="mt-2 text-xl font-bold text-[#0c180a]">Auditable AI activity</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 text-pretty">
                Comprehensive logs record every AI interaction, search query, and automated action for
                complete governance oversight.
              </p>
            </div>

            {/* Micro-UI Proof: Live Audit Trail Snippet */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-2xs">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                    <th className="pb-1 text-left font-medium">Time</th>
                    <th className="pb-1 text-left font-medium">Action</th>
                    <th className="pb-1 text-left font-medium">User</th>
                    <th className="pb-1 text-right font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100/70 text-slate-700">
                  <tr>
                    <td className="py-1 text-slate-500 font-mono">10:24 AM</td>
                    <td className="py-1 font-bold text-slate-800">Query</td>
                    <td className="py-1 text-slate-600">j.smith</td>
                    <td className="py-1 text-right text-[#118f00] font-semibold">● Success</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-slate-500 font-mono">09:17 AM</td>
                    <td className="py-1 font-bold text-slate-800">Report</td>
                    <td className="py-1 text-slate-600">m.lee</td>
                    <td className="py-1 text-right text-[#118f00] font-semibold">● Success</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-slate-500 font-mono">08:43 AM</td>
                    <td className="py-1 font-bold text-slate-800">Search</td>
                    <td className="py-1 text-slate-600">a.patel</td>
                    <td className="py-1 text-right text-[#118f00] font-semibold">● Success</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Link to Security Standards */}
        <div className="mt-12 text-center sm:text-left">
          <a
            href="https://sjinnovation.com/security"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14a800] hover:text-[#118f00] hover:underline"
          >
            <span>Learn more about our security standards</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NonprofitSecuritySection;
