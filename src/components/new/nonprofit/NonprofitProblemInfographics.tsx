import React from "react";

export const NonprofitProblemInfographics: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#0c180a] sm:text-5xl xl:text-[54px] text-balance">
            <span className="block">Your mission should not be buried</span>
            <span className="block">under operational busywork.</span>
          </h2>
        </div>

        {/* 2 Columns × 2 Rows Cards with Exact Copy & Corner Vector Illustrations */}
        <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Card 1: Scattered donor information */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-8 sm:p-9 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800]/40 hover:bg-white hover:shadow-xl">
            <div className="relative z-10 max-w-[78%] sm:max-w-[75%]">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Your donor information is&nbsp;scattered.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                CRM, spreadsheets, email, accounting software and event platforms
                all hold different pieces of the&nbsp;story.
              </p>
            </div>

            {/* Decorative Corner SVG Illustration: Disconnected Silo Nodes & Broken Links */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-6 select-none transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"
            >
              <svg
                width="185"
                height="185"
                viewBox="0 0 185 185"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#14a800]"
              >
                {/* Dashed disconnected orbit ring */}
                <circle
                  cx="125"
                  cy="125"
                  r="68"
                  stroke="currentColor"
                  strokeOpacity="0.18"
                  strokeWidth="2.5"
                  strokeDasharray="6 8"
                />
                {/* Fragmented Database / Sheet / Mail blocks */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-1">
                  <rect
                    x="44"
                    y="96"
                    width="34"
                    height="28"
                    rx="7"
                    fill="currentColor"
                    fillOpacity="0.14"
                    stroke="currentColor"
                    strokeOpacity="0.35"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="52"
                    y1="106"
                    x2="70"
                    y2="106"
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="52"
                    y1="114"
                    x2="64"
                    y2="114"
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </g>

                <g className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-2">
                  <rect
                    x="98"
                    y="42"
                    width="36"
                    height="30"
                    rx="7"
                    fill="currentColor"
                    fillOpacity="0.16"
                    stroke="currentColor"
                    strokeOpacity="0.38"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M105 52L116 60L127 52"
                    stroke="currentColor"
                    strokeOpacity="0.45"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                <g className="transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1">
                  <rect
                    x="105"
                    y="102"
                    width="48"
                    height="48"
                    rx="12"
                    fill="currentColor"
                    fillOpacity="0.22"
                    stroke="currentColor"
                    strokeOpacity="0.45"
                    strokeWidth="3"
                  />
                  <circle
                    cx="129"
                    cy="126"
                    r="10"
                    fill="currentColor"
                    fillOpacity="0.45"
                  />
                </g>

                {/* Broken connector lines between silos */}
                <line
                  x1="82"
                  y1="112"
                  x2="99"
                  y2="118"
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="2.5"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />
                <line
                  x1="118"
                  y1="76"
                  x2="124"
                  y2="96"
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="2.5"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />
                <circle cx="76" cy="68" r="8" fill="currentColor" fillOpacity="0.22" />
              </svg>
            </div>
          </div>

          {/* Card 2: Reporting takes too long */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-8 sm:p-9 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800]/40 hover:bg-white hover:shadow-xl">
            <div className="relative z-10 max-w-[78%] sm:max-w-[75%]">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Reporting takes too&nbsp;long.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Staff spend hours gathering information before leadership or
                board&nbsp;meetings.
              </p>
            </div>

            {/* Decorative Corner SVG Illustration: Clock / Hourglass & Stacked Report Binders */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-6 select-none transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"
            >
              <svg
                width="185"
                height="185"
                viewBox="0 0 185 185"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#14a800]"
              >
                {/* Stacked report layers */}
                <rect
                  x="46"
                  y="116"
                  width="54"
                  height="14"
                  rx="4"
                  fill="currentColor"
                  fillOpacity="0.16"
                  stroke="currentColor"
                  strokeOpacity="0.32"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />
                <rect
                  x="52"
                  y="134"
                  width="54"
                  height="14"
                  rx="4"
                  fill="currentColor"
                  fillOpacity="0.24"
                  stroke="currentColor"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                />

                {/* Large Corner Clock Dial */}
                <circle
                  cx="128"
                  cy="118"
                  r="46"
                  fill="currentColor"
                  fillOpacity="0.14"
                  stroke="currentColor"
                  strokeOpacity="0.42"
                  strokeWidth="3.5"
                />
                <circle
                  cx="128"
                  cy="118"
                  r="34"
                  stroke="currentColor"
                  strokeOpacity="0.22"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                />
                {/* Clock hands rotating on hover */}
                <g className="origin-[128px_118px] transition-transform duration-500 ease-out group-hover:rotate-45">
                  <line
                    x1="128"
                    y1="118"
                    x2="128"
                    y2="92"
                    stroke="currentColor"
                    strokeOpacity="0.65"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <line
                    x1="128"
                    y1="118"
                    x2="148"
                    y2="128"
                    stroke="currentColor"
                    strokeOpacity="0.5"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </g>
                <circle cx="128" cy="118" r="5" fill="currentColor" fillOpacity="0.65" />
              </svg>
            </div>
          </div>

          {/* Card 3: Too much work is still manual */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-8 sm:p-9 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800]/40 hover:bg-white hover:shadow-xl">
            <div className="relative z-10 max-w-[78%] sm:max-w-[75%]">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Too much work is still&nbsp;manual.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Follow-ups, summaries, grant reporting, meeting actions and data
                cleanup consume valuable staff&nbsp;time.
              </p>
            </div>

            {/* Decorative Corner SVG Illustration: Repetitive Manual Task Sheets & Loop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-6 select-none transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"
            >
              <svg
                width="185"
                height="185"
                viewBox="0 0 185 185"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#14a800]"
              >
                {/* Back Document Sheet */}
                <rect
                  x="68"
                  y="56"
                  width="66"
                  height="84"
                  rx="10"
                  fill="currentColor"
                  fillOpacity="0.1"
                  stroke="currentColor"
                  strokeOpacity="0.25"
                  strokeWidth="2.5"
                  className="transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2"
                />
                {/* Front Checklist Sheet */}
                <rect
                  x="88"
                  y="74"
                  width="72"
                  height="88"
                  rx="12"
                  fill="currentColor"
                  fillOpacity="0.18"
                  stroke="currentColor"
                  strokeOpacity="0.45"
                  strokeWidth="3"
                />
                {/* Checklist rows */}
                <rect x="102" y="92" width="12" height="12" rx="3" fill="currentColor" fillOpacity="0.45" />
                <line x1="120" y1="98" x2="146" y2="98" stroke="currentColor" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />

                <rect x="102" y="112" width="12" height="12" rx="3" fill="currentColor" fillOpacity="0.45" />
                <line x1="120" y1="118" x2="142" y2="118" stroke="currentColor" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />

                <rect x="102" y="132" width="12" height="12" rx="3" fill="currentColor" fillOpacity="0.3" />
                <line x1="120" y1="138" x2="138" y2="138" stroke="currentColor" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Card 4: Leadership lacks one clear view */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-8 sm:p-9 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800]/40 hover:bg-white hover:shadow-xl">
            <div className="relative z-10 max-w-[78%] sm:max-w-[75%]">
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

            {/* Decorative Corner SVG Illustration: Overlapping Split Windows & Spreadsheet Grids */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-6 select-none transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"
            >
              <svg
                width="185"
                height="185"
                viewBox="0 0 185 185"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#14a800]"
              >
                {/* Window 1 (Top Left of corner cluster) */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <rect
                    x="52"
                    y="64"
                    width="58"
                    height="44"
                    rx="8"
                    fill="currentColor"
                    fillOpacity="0.12"
                    stroke="currentColor"
                    strokeOpacity="0.32"
                    strokeWidth="2.5"
                  />
                  <line x1="52" y1="76" x2="110" y2="76" stroke="currentColor" strokeOpacity="0.28" strokeWidth="2" />
                </g>

                {/* Window 2 (Top Right of corner cluster) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-2">
                  <rect
                    x="96"
                    y="48"
                    width="62"
                    height="46"
                    rx="8"
                    fill="currentColor"
                    fillOpacity="0.15"
                    stroke="currentColor"
                    strokeOpacity="0.36"
                    strokeWidth="2.5"
                  />
                  <line x1="96" y1="60" x2="158" y2="60" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
                </g>

                {/* Window 3: Main Spreadsheet Grid in Corner */}
                <rect
                  x="78"
                  y="88"
                  width="82"
                  height="72"
                  rx="10"
                  fill="currentColor"
                  fillOpacity="0.2"
                  stroke="currentColor"
                  strokeOpacity="0.48"
                  strokeWidth="3"
                />
                <line x1="78" y1="108" x2="160" y2="108" stroke="currentColor" strokeOpacity="0.38" strokeWidth="2.5" />
                <line x1="78" y1="128" x2="160" y2="128" stroke="currentColor" strokeOpacity="0.38" strokeWidth="2.5" />
                <line x1="112" y1="88" x2="112" y2="160" stroke="currentColor" strokeOpacity="0.38" strokeWidth="2.5" />
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
