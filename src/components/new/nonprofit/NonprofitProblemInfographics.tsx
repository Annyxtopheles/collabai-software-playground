import React from "react";

export const NonprofitProblemInfographics: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0c180a] sm:text-3xl lg:text-4xl text-balance">
            <span className="block">Your mission should not be buried</span>
            <span className="block">under operational busywork.</span>
          </h2>
        </div>

        {/* 2 Columns × 2 Rows Cards matching the clean 2D vector illustrated style */}
        <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* ========================================================
              Card 1: Scattered donor information
          ======================================================== */}
          <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-emerald-300/80 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Your donor information is&nbsp;scattered.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                CRM, spreadsheets, email, accounting software and event platforms
                all hold different pieces of the&nbsp;story.
              </p>
            </div>

            {/* Illustration: Scattered Document, Spreadsheet, Envelope & Chart with Action Rays */}
            <div
              aria-hidden="true"
              className="relative w-[165px] sm:w-[185px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg
                viewBox="0 0 190 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                {/* Soft Mint Organic Background Aura Blob */}
                <path
                  d="M 38 78 C 30 38, 88 18, 134 26 C 176 34, 188 78, 172 118 C 154 154, 94 158, 54 138 C 34 122, 44 98, 38 78 Z"
                  fill="#e8f7e5"
                />

                {/* Tilted Green Spreadsheet (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:rotate-6 origin-center">
                  <rect
                    x="116"
                    y="22"
                    width="46"
                    height="56"
                    rx="8"
                    fill="#8ae274"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    transform="rotate(10 139 50)"
                  />
                  {/* Grid Lines inside Spreadsheet */}
                  <g transform="rotate(10 139 50)">
                    <line x1="116" y1="36" x2="162" y2="36" stroke="#1c3422" strokeWidth="2" />
                    <line x1="116" y1="50" x2="162" y2="50" stroke="#1c3422" strokeWidth="2" />
                    <line x1="116" y1="64" x2="162" y2="64" stroke="#1c3422" strokeWidth="2" />
                    <line x1="131" y1="22" x2="131" y2="78" stroke="#1c3422" strokeWidth="2" />
                    <line x1="147" y1="22" x2="147" y2="78" stroke="#1c3422" strokeWidth="2" />
                  </g>
                </g>

                {/* Tilted Green Mini Bar Chart Card (Bottom Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:rotate-3 origin-center">
                  <rect
                    x="114"
                    y="92"
                    width="48"
                    height="52"
                    rx="9"
                    fill="#6ed356"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    transform="rotate(-5 138 118)"
                  />
                  {/* 3 Rising Dark Green Bars */}
                  <g transform="rotate(-5 138 118)">
                    <rect x="123" y="122" width="7" height="15" rx="2" fill="#1c3422" />
                    <rect x="134" y="113" width="7" height="24" rx="2" fill="#1c3422" />
                    <rect x="145" y="104" width="7" height="33" rx="2" fill="#1c3422" />
                  </g>
                </g>

                {/* White Document Card (Center Left) */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:rotate-[-6deg] origin-center">
                  <rect
                    x="50"
                    y="42"
                    width="62"
                    height="74"
                    rx="9"
                    fill="#ffffff"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    transform="rotate(-10 81 79)"
                  />
                  {/* Circular Green Donor Stamp & Text Lines */}
                  <g transform="rotate(-10 81 79)">
                    <circle cx="66" cy="58" r="6" fill="#16a34a" stroke="#1c3422" strokeWidth="2" />
                    <line x1="64" y1="74" x2="98" y2="74" stroke="#1c3422" strokeWidth="2.4" strokeLinecap="round" />
                    <line x1="64" y1="84" x2="96" y2="84" stroke="#1c3422" strokeWidth="2.4" strokeLinecap="round" />
                    <line x1="64" y1="94" x2="88" y2="94" stroke="#1c3422" strokeWidth="2.4" strokeLinecap="round" />
                  </g>
                </g>

                {/* White Mail Envelope (Center Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-0.5 group-hover:rotate-[-3deg] origin-center">
                  <rect
                    x="100"
                    y="65"
                    width="58"
                    height="42"
                    rx="7"
                    fill="#ffffff"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    transform="rotate(4 129 86)"
                  />
                  {/* V-Flap of Envelope */}
                  <path
                    d="M 102 68 L 129 88 L 156 68"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    transform="rotate(4 129 86)"
                  />
                </g>

                {/* Energetic Spark / Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  {/* Top-Left Spark Rays */}
                  <line x1="42" y1="36" x2="35" y2="28" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="52" y1="30" x2="52" y2="20" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="62" y1="34" x2="70" y2="26" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />

                  {/* Bottom-Right Spark Rays */}
                  <line x1="166" y1="126" x2="176" y2="128" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="164" y1="135" x2="173" y2="144" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              Card 2: Reporting takes too long
          ======================================================== */}
          <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-emerald-300/80 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Reporting takes too&nbsp;long.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Staff spend hours gathering information before leadership or
                board&nbsp;meetings.
              </p>
            </div>

            {/* Illustration: Modern Clock with Rotating Hands, Stacked Report Binders & Metric Cards */}
            <div
              aria-hidden="true"
              className="relative w-[165px] sm:w-[185px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg
                viewBox="0 0 190 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                {/* Soft Mint Organic Background Aura Blob */}
                <path
                  d="M 36 82 C 26 42, 82 22, 130 28 C 172 34, 186 76, 174 116 C 158 152, 102 158, 56 142 C 38 126, 42 102, 36 82 Z"
                  fill="#e8f7e5"
                />

                {/* Back Report Page with Metric Sparkline (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-2 group-hover:rotate-4 origin-center">
                  <rect
                    x="106"
                    y="24"
                    width="54"
                    height="66"
                    rx="8"
                    fill="#8ae274"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    transform="rotate(8 133 57)"
                  />
                  <g transform="rotate(8 133 57)">
                    <rect x="114" y="32" width="22" height="6" rx="2" fill="#1c3422" />
                    <path
                      d="M 114 56 L 126 48 L 136 54 L 150 42"
                      stroke="#1c3422"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <line x1="114" y1="68" x2="148" y2="68" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                    <line x1="114" y1="76" x2="140" y2="76" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  </g>
                </g>

                {/* Stacked Report Binders (Bottom Left) */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1 origin-center">
                  <rect
                    x="44"
                    y="108"
                    width="62"
                    height="18"
                    rx="5"
                    fill="#ffffff"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    transform="rotate(-4 75 117)"
                  />
                  <rect
                    x="48"
                    y="124"
                    width="62"
                    height="18"
                    rx="5"
                    fill="#6ed356"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    transform="rotate(-4 79 133)"
                  />
                  <circle cx="56" cy="116" r="3" fill="#1c3422" transform="rotate(-4 75 117)" />
                  <circle cx="60" cy="132" r="3" fill="#1c3422" transform="rotate(-4 79 133)" />
                </g>

                {/* Central Friendly Retro Clock Dial */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-105 origin-[114px_92px]">
                  {/* Alarm Bell Button / Loop at Top */}
                  <rect
                    x="108"
                    y="54"
                    width="12"
                    height="8"
                    rx="3"
                    fill="#16a34a"
                    stroke="#1c3422"
                    strokeWidth="2.2"
                  />
                  {/* Two Little Clock Stand Legs */}
                  <line x1="96" y1="120" x2="90" y2="128" stroke="#1c3422" strokeWidth="3" strokeLinecap="round" />
                  <line x1="132" y1="120" x2="138" y2="128" stroke="#1c3422" strokeWidth="3" strokeLinecap="round" />

                  {/* Main Clock Face */}
                  <circle
                    cx="114"
                    cy="92"
                    r="32"
                    fill="#ffffff"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                  />

                  {/* Dial Hour Dots */}
                  <circle cx="114" cy="68" r="2.2" fill="#1c3422" />
                  <circle cx="138" cy="92" r="2.2" fill="#1c3422" />
                  <circle cx="114" cy="116" r="2.2" fill="#1c3422" />
                  <circle cx="90" cy="92" r="2.2" fill="#1c3422" />

                  {/* Clock Hands with Smooth Hover Rotation */}
                  <g className="transition-transform duration-700 ease-out group-hover:rotate-60 origin-[114px_92px]">
                    <line
                      x1="114"
                      y1="92"
                      x2="114"
                      y2="76"
                      stroke="#1c3422"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                    <line
                      x1="114"
                      y1="92"
                      x2="128"
                      y2="92"
                      stroke="#1c3422"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <circle cx="114" cy="92" r="3.5" fill="#16a34a" stroke="#1c3422" strokeWidth="1.8" />
                  </g>
                </g>

                {/* Action Rays around Clock */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="78" y1="62" x2="70" y2="54" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="86" y1="52" x2="84" y2="42" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="146" y1="56" x2="154" y2="48" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="154" y1="66" x2="164" y2="64" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              Card 3: Too much work is still manual
          ======================================================== */}
          <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-emerald-300/80 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Too much work is still&nbsp;manual.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Follow-ups, summaries, grant reporting, meeting actions and data
                cleanup consume valuable staff&nbsp;time.
              </p>
            </div>

            {/* Illustration: Checklist Clipboard, Repetitive Arrow Loops & Tilted Stylus/Pen */}
            <div
              aria-hidden="true"
              className="relative w-[165px] sm:w-[185px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg
                viewBox="0 0 190 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                {/* Soft Mint Organic Background Aura Blob */}
                <path
                  d="M 40 78 C 28 36, 86 16, 132 24 C 174 32, 188 74, 174 116 C 158 152, 98 158, 56 138 C 36 122, 46 98, 40 78 Z"
                  fill="#e8f7e5"
                />

                {/* Backing Green Clipboard Frame */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 origin-center">
                  <rect
                    x="56"
                    y="32"
                    width="72"
                    height="92"
                    rx="12"
                    fill="#74d95b"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    transform="rotate(-5 92 78)"
                  />
                  {/* Dark Clipboard Clamp */}
                  <rect
                    x="76"
                    y="24"
                    width="32"
                    height="12"
                    rx="4"
                    fill="#1c3422"
                    transform="rotate(-5 92 30)"
                  />
                  <rect
                    x="86"
                    y="22"
                    width="12"
                    height="6"
                    rx="2"
                    fill="#ffffff"
                    transform="rotate(-5 92 25)"
                  />
                </g>

                {/* Foreground White Checklist Sheet */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 origin-center">
                  <rect
                    x="64"
                    y="42"
                    width="64"
                    height="84"
                    rx="8"
                    fill="#ffffff"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                  />

                  {/* Checklist Row 1 */}
                  <rect x="74" y="56" width="11" height="11" rx="3" fill="#16a34a" stroke="#1c3422" strokeWidth="1.8" />
                  <path d="M 76 61.5 L 78.5 64 L 83 58.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <line x1="92" y1="62" x2="118" y2="62" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />

                  {/* Checklist Row 2 */}
                  <rect x="74" y="74" width="11" height="11" rx="3" fill="#16a34a" stroke="#1c3422" strokeWidth="1.8" />
                  <path d="M 76 79.5 L 78.5 82 L 83 76.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <line x1="92" y1="80" x2="116" y2="80" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />

                  {/* Checklist Row 3 */}
                  <rect x="74" y="92" width="11" height="11" rx="3" fill="#16a34a" stroke="#1c3422" strokeWidth="1.8" />
                  <path d="M 76 97.5 L 78.5 100 L 83 94.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <line x1="92" y1="98" x2="112" y2="98" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />

                  {/* Checklist Row 4 (In Progress / Pending) */}
                  <rect x="74" y="110" width="11" height="11" rx="3" fill="#e8f7e5" stroke="#1c3422" strokeWidth="1.8" />
                  <line x1="92" y1="116" x2="108" y2="116" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>

                {/* Tilted Stylus / Pen (Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-12 origin-[140px_100px]">
                  <rect
                    x="136"
                    y="50"
                    width="12"
                    height="58"
                    rx="4"
                    fill="#8ae274"
                    stroke="#1c3422"
                    strokeWidth="2.2"
                    transform="rotate(32 142 79)"
                  />
                  {/* Pen Nib */}
                  <path
                    d="M 124 100 L 118 108 L 129 104 Z"
                    fill="#1c3422"
                    stroke="#1c3422"
                    strokeWidth="1.5"
                  />
                  {/* Top Cap */}
                  <rect
                    x="152"
                    y="45"
                    width="12"
                    height="8"
                    rx="2"
                    fill="#ffffff"
                    stroke="#1c3422"
                    strokeWidth="2"
                    transform="rotate(32 158 49)"
                  />
                </g>

                {/* Repetitive Loop Arc Indicator (Top Right) */}
                <g className="transition-transform duration-700 ease-out group-hover:rotate-180 origin-[145px_36px]">
                  <path
                    d="M 136 32 C 144 26, 154 30, 156 38"
                    stroke="#16a34a"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <polygon points="159,34 156,41 151,37" fill="#16a34a" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="48" y1="46" x2="40" y2="40" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="56" y1="36" x2="52" y2="28" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="168" y1="96" x2="176" y2="94" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="166" y1="106" x2="174" y2="114" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              Card 4: Leadership lacks one clear view
          ======================================================== */}
          <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-emerald-300/80 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Leadership lacks one clear&nbsp;view.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                When an Executive Director asks,{" "}
                <strong className="font-bold text-slate-900">
                  “Where do we stand?”
                </strong>{" "}
                The answer should not require five systems and
                three&nbsp;spreadsheets.
              </p>
            </div>

            {/* Illustration: Disconnected Windows, Scattered Spreadsheets & Focus Magnifying Glass */}
            <div
              aria-hidden="true"
              className="relative w-[165px] sm:w-[185px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg
                viewBox="0 0 190 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                {/* Soft Mint Organic Background Aura Blob */}
                <path
                  d="M 36 80 C 26 40, 84 20, 130 26 C 172 32, 186 74, 172 114 C 158 152, 100 158, 54 138 C 36 122, 44 98, 36 80 Z"
                  fill="#e8f7e5"
                />

                {/* Tilted Green App Window 1 (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-1.5 group-hover:rotate-6 origin-center">
                  <rect
                    x="110"
                    y="24"
                    width="54"
                    height="44"
                    rx="7"
                    fill="#8ae274"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    transform="rotate(8 137 46)"
                  />
                  <g transform="rotate(8 137 46)">
                    <circle cx="118" cy="32" r="2" fill="#1c3422" />
                    <circle cx="124" cy="32" r="2" fill="#1c3422" />
                    <circle cx="130" cy="32" r="2" fill="#1c3422" />
                    <line x1="110" y1="38" x2="164" y2="38" stroke="#1c3422" strokeWidth="1.8" />
                    <rect x="116" y="44" width="12" height="18" rx="2" fill="#1c3422" />
                    <rect x="132" y="50" width="12" height="12" rx="2" fill="#1c3422" />
                    <rect x="148" y="46" width="10" height="16" rx="2" fill="#1c3422" />
                  </g>
                </g>

                {/* Tilted Green Spreadsheet Window 2 (Bottom Left) */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:translate-y-1 group-hover:rotate-[-4deg] origin-center">
                  <rect
                    x="48"
                    y="88"
                    width="58"
                    height="46"
                    rx="7"
                    fill="#6ed356"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    transform="rotate(-6 77 111)"
                  />
                  <g transform="rotate(-6 77 111)">
                    <circle cx="56" cy="96" r="2" fill="#1c3422" />
                    <circle cx="62" cy="96" r="2" fill="#1c3422" />
                    <line x1="48" y1="102" x2="106" y2="102" stroke="#1c3422" strokeWidth="1.8" />
                    <line x1="48" y1="118" x2="106" y2="118" stroke="#1c3422" strokeWidth="1.6" />
                    <line x1="72" y1="102" x2="72" y2="134" stroke="#1c3422" strokeWidth="1.6" />
                    <line x1="88" y1="102" x2="88" y2="134" stroke="#1c3422" strokeWidth="1.6" />
                  </g>
                </g>

                {/* Central White Dashboard Window */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-105 origin-center">
                  <rect
                    x="76"
                    y="46"
                    width="66"
                    height="54"
                    rx="8"
                    fill="#ffffff"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                  />
                  <circle cx="84" cy="54" r="2.2" fill="#1c3422" />
                  <circle cx="91" cy="54" r="2.2" fill="#1c3422" />
                  <circle cx="98" cy="54" r="2.2" fill="#1c3422" />
                  <line x1="76" y1="60" x2="142" y2="60" stroke="#1c3422" strokeWidth="2" />
                  {/* Split metric boxes inside */}
                  <rect x="82" y="66" width="24" height="26" rx="4" fill="#e8f7e5" stroke="#1c3422" strokeWidth="1.8" />
                  <rect x="112" y="66" width="24" height="26" rx="4" fill="#e8f7e5" stroke="#1c3422" strokeWidth="1.8" />
                  <line x1="86" y1="74" x2="102" y2="74" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="86" y1="82" x2="98" y2="82" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="124" cy="79" r="6" fill="#16a34a" />
                </g>

                {/* Focus Magnifying Glass with Question Mark (Bottom Right / Center) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:rotate-[-8deg] origin-[128px_98px]">
                  {/* Magnifier Lens */}
                  <circle
                    cx="122"
                    cy="94"
                    r="20"
                    fill="#ffffff"
                    stroke="#1c3422"
                    strokeWidth="2.6"
                  />
                  {/* Green Focus Ring */}
                  <circle
                    cx="122"
                    cy="94"
                    r="14"
                    fill="#e8f7e5"
                    stroke="#16a34a"
                    strokeWidth="1.8"
                    strokeDasharray="3 3"
                  />
                  {/* Center Question Mark Icon */}
                  <text
                    x="122"
                    y="100"
                    textAnchor="middle"
                    fill="#15803d"
                    fontSize="16"
                    fontWeight="900"
                    fontFamily="sans-serif"
                  >
                    ?
                  </text>
                  {/* Magnifier Handle */}
                  <line
                    x1="136"
                    y1="108"
                    x2="152"
                    y2="124"
                    stroke="#1c3422"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="46" y1="56" x2="38" y2="50" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="56" y1="46" x2="52" y2="38" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="166" y1="84" x2="176" y2="84" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="164" y1="94" x2="172" y2="102" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Impactful Guiding Statement */}
        <div className="mt-14 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#0c180a]">
            That is where the{" "}
            <span className="text-[#14a800]">Nonprofit Control Tower</span>{" "}
            comes in.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default NonprofitProblemInfographics;
