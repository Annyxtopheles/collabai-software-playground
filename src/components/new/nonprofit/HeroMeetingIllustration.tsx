import React from "react";

interface HeroMeetingIllustrationProps {
  className?: string;
}

export const HeroMeetingIllustration: React.FC<HeroMeetingIllustrationProps> = ({
  className = "",
}) => {
  return (
    <div className={`group relative w-full overflow-visible ${className}`}>
      {/* Inline styles for continuous seamless steam vapor and screen breathing */}
      <style>{`
        @keyframes floatSteam1 {
          0% {
            stroke-dashoffset: 0;
            transform: translateY(0) scaleX(1);
            opacity: 0;
          }
          30% {
            opacity: 0.7;
          }
          70% {
            opacity: 0.5;
          }
          100% {
            stroke-dashoffset: -40;
            transform: translateY(-24px) scaleX(1.15);
            opacity: 0;
          }
        }
        @keyframes floatSteam2 {
          0% {
            stroke-dashoffset: 0;
            transform: translateY(0) scaleX(1);
            opacity: 0;
          }
          25% {
            opacity: 0.65;
          }
          75% {
            opacity: 0.45;
          }
          100% {
            stroke-dashoffset: -36;
            transform: translateY(-28px) scaleX(0.85);
            opacity: 0;
          }
        }
        @keyframes screenPulse {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(20, 168, 0, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(20, 168, 0, 0.4));
          }
        }
        .hero-steam-1 {
          animation: floatSteam1 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .hero-steam-2 {
          animation: floatSteam2 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.4s;
        }
        .hero-screen-glow {
          animation: screenPulse 4s ease-in-out infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 760 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible select-none"
      >
        {/* ========================================================
            1. AMBIENT BACKGROUND SOFT MINT AURA BLOBS
        ======================================================== */}
        <g className="transition-transform duration-700 ease-out group-hover:scale-105 origin-center">
          <path
            d="M 120 220 C 70 120, 200 40, 360 50 C 520 60, 680 100, 710 240 C 740 380, 580 480, 420 485 C 260 490, 140 400, 110 320 C 95 280, 140 250, 120 220 Z"
            fill="#eaf7e7"
          />
          <circle cx="630" cy="140" r="48" fill="#d8f3d4" opacity="0.6" />
          <circle cx="150" cy="110" r="32" fill="#d8f3d4" opacity="0.5" />
        </g>

        {/* Ambient Back Wall Window / Whiteboard Panel with Metric Lines */}
        <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <rect
            x="480"
            y="70"
            width="220"
            height="140"
            rx="16"
            fill="#ffffff"
            stroke="#1c3422"
            strokeWidth="2.6"
          />
          {/* Header bar of board */}
          <line x1="480" y1="104" x2="700" y2="104" stroke="#1c3422" strokeWidth="2.2" />
          <circle cx="504" cy="87" r="4" fill="#16a34a" />
          <circle cx="518" cy="87" r="4" fill="#8ae274" />
          <circle cx="532" cy="87" r="4" fill="#1c3422" />

          {/* Mini Live Line Chart on Wall Board */}
          <path
            d="M 508 174 L 540 156 L 576 166 L 620 134 L 656 144 L 680 120"
            stroke="#16a34a"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Chart Target Node */}
          <circle cx="680" cy="120" r="5" fill="#8ae274" stroke="#1c3422" strokeWidth="2" />

          {/* Mini KPI Bar Pills on Board */}
          <rect x="508" y="122" width="36" height="12" rx="4" fill="#eaf7e7" stroke="#1c3422" strokeWidth="1.6" />
          <rect x="552" y="122" width="44" height="12" rx="4" fill="#8ae274" stroke="#1c3422" strokeWidth="1.6" />
        </g>

        {/* Background Indoor Potted Plant on Table Right */}
        <g className="transition-transform duration-500 ease-out group-hover:rotate-2 origin-[690px_350px]">
          {/* Pot */}
          <path
            d="M 668 280 L 676 340 L 712 340 L 720 280 Z"
            fill="#ffffff"
            stroke="#1c3422"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <line x1="664" y1="280" x2="724" y2="280" stroke="#1c3422" strokeWidth="3" strokeLinecap="round" />
          {/* Broad Fiddle-Leaf Fronds */}
          <path
            d="M 694 280 Q 670 230, 640 240 Q 670 265, 694 280 Z"
            fill="#16a34a"
            stroke="#1c3422"
            strokeWidth="2.2"
          />
          <path
            d="M 694 280 Q 700 210, 720 215 Q 715 250, 694 280 Z"
            fill="#8ae274"
            stroke="#1c3422"
            strokeWidth="2.2"
          />
          <path
            d="M 694 280 Q 730 235, 745 250 Q 720 270, 694 280 Z"
            fill="#6ed356"
            stroke="#1c3422"
            strokeWidth="2.2"
          />
        </g>

        {/* ========================================================
            2. PEOPLE COLLABORATING AROUND THE TABLE
        ======================================================== */}

        {/* PERSON 2: STANDING TEAM LEAD / FACILITATOR (CENTER-RIGHT) */}
        <g className="transition-transform duration-500 ease-out group-hover:translate-y-[-4px] group-hover:rotate-1 origin-[450px_260px]">
          {/* Torso & Pullover (Dark Navy/Slate with Charcoal Outline) */}
          <path
            d="M 405 200 C 420 180, 480 180, 495 200 L 515 320 L 385 320 Z"
            fill="#1c3422"
            stroke="#1c3422"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          {/* Collar / V-Neck Shirt Reveal */}
          <polygon points="440,200 460,200 450,224" fill="#ffffff" stroke="#1c3422" strokeWidth="2" />

          {/* Neck */}
          <rect x="440" y="165" width="20" height="22" rx="4" fill="#e8be9e" stroke="#1c3422" strokeWidth="2.4" />

          {/* Head & Face */}
          <circle cx="450" cy="140" r="28" fill="#e8be9e" stroke="#1c3422" strokeWidth="2.6" />

          {/* Neat Styled Hair */}
          <path
            d="M 424 135 C 422 110, 474 105, 476 130 C 468 122, 456 122, 442 125 C 434 126, 426 130, 424 135 Z"
            fill="#1c3422"
          />

          {/* Modern Glasses */}
          <rect x="432" y="134" width="16" height="12" rx="3" fill="none" stroke="#1c3422" strokeWidth="2.4" />
          <rect x="452" y="134" width="16" height="12" rx="3" fill="none" stroke="#1c3422" strokeWidth="2.4" />
          <line x1="448" y1="139" x2="452" y2="139" stroke="#1c3422" strokeWidth="2.2" />

          {/* Cheerful Expression Smile */}
          <path d="M 444 156 Q 450 162, 456 156" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Leaning Forearms resting forward towards the center */}
          <path
            d="M 410 240 Q 380 280, 400 310"
            stroke="#1c3422"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M 490 240 Q 515 280, 495 310"
            stroke="#1c3422"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </g>

        {/* PERSON 3: SEATED TEAMMATE ON THE RIGHT (IN SLATE-BLUE SHIRT) */}
        <g className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:rotate-[-1.5deg] origin-[580px_340px]">
          {/* Seated Body / Shirt */}
          <path
            d="M 545 285 C 560 260, 620 260, 635 285 L 645 370 L 535 370 Z"
            fill="#ffffff"
            stroke="#1c3422"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path d="M 580 275 L 585 365" stroke="#1c3422" strokeWidth="2" strokeDasharray="3 4" />

          {/* Neck */}
          <rect x="580" y="248" width="18" height="20" rx="3" fill="#fad2b4" stroke="#1c3422" strokeWidth="2.4" />

          {/* Head & Beard Profile */}
          <circle cx="589" cy="225" r="26" fill="#fad2b4" stroke="#1c3422" strokeWidth="2.6" />
          {/* Hair & Trimmed Beard */}
          <path
            d="M 565 220 C 565 198, 612 195, 615 218 C 606 210, 592 210, 580 214 Z"
            fill="#1c3422"
          />
          <path
            d="M 570 230 C 568 245, 595 255, 608 240 L 606 230 Z"
            fill="#1c3422"
          />
          {/* Friendly Eyes & Smile */}
          <circle cx="580" cy="222" r="2.5" fill="#1c3422" />
          <path d="M 575 233 Q 582 238, 589 233" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Arm resting on desk with digital stylus */}
          <path
            d="M 560 300 Q 530 330, 500 335"
            stroke="#1c3422"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <circle cx="496" cy="336" r="7" fill="#fad2b4" stroke="#1c3422" strokeWidth="2.2" />
          <line x1="492" y1="338" x2="480" y2="348" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* PERSON 1: SEATED WOMAN IN OLIVE-GREEN SHIRT (CENTER-LEFT) */}
        <g className="origin-[250px_320px]">
          {/* Torso & Vibrant Green / Olive Shirt */}
          <path
            d="M 215 285 C 230 255, 290 255, 305 285 L 315 375 L 205 375 Z"
            fill="#16a34a"
            stroke="#1c3422"
            strokeWidth="2.8"
            strokeLinejoin="round"
            className="transition-transform duration-500 ease-out group-hover:translate-x-1"
          />
          <path d="M 260 270 L 260 370" stroke="#1c3422" strokeWidth="2" strokeDasharray="3 4" />

          {/* Neck */}
          <rect x="251" y="244" width="18" height="22" rx="4" fill="#d9986b" stroke="#1c3422" strokeWidth="2.4" />

          {/* Expressive Natural Curls Hair Behind Head */}
          <path
            d="M 220 220 C 210 180, 260 160, 290 170 C 315 180, 318 240, 298 260 C 278 275, 230 260, 220 220 Z"
            fill="#1c3422"
          />

          {/* Head & Friendly Face */}
          <circle cx="260" cy="220" r="26" fill="#d9986b" stroke="#1c3422" strokeWidth="2.6" />

          {/* Front Curly Volume */}
          <path
            d="M 234 212 C 230 190, 275 186, 285 204 C 275 200, 260 200, 248 206 Z"
            fill="#1c3422"
          />

          {/* Facial Features (Eyes, Eyebrows, Bright Smile) */}
          <circle cx="270" cy="216" r="2.8" fill="#1c3422" />
          <path d="M 266 210 Q 272 208, 276 210" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 266 228 Q 274 236, 282 228" stroke="#1c3422" strokeWidth="2.4" strokeLinecap="round" fill="none" />

          {/* Left Arm Resting on Table */}
          <path
            d="M 225 300 Q 210 330, 230 345"
            stroke="#16a34a"
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* DYNAMIC GESTURING ARM: REACHING OUT & POINTING TOWARDS LAPTOP */}
          {/* On group-hover, this arm moves forward with smooth organic animation */}
          <g className="transition-transform duration-500 ease-out origin-[275px_290px] group-hover:translate-x-3 group-hover:-translate-y-1.5 group-hover:rotate-[-5deg]">
            <path
              d="M 285 295 Q 315 315, 350 318"
              stroke="#16a34a"
              strokeWidth="14"
              strokeLinecap="round"
            />
            {/* Hand with Pointing Finger */}
            <circle cx="356" cy="318" r="8" fill="#d9986b" stroke="#1c3422" strokeWidth="2.2" />
            <path
              d="M 358 316 L 372 314"
              stroke="#d9986b"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M 358 316 L 372 314"
              stroke="#1c3422"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>
        </g>

        {/* ========================================================
            3. COLLABORATION CONFERENCE TABLE
        ======================================================== */}
        <g>
          {/* Table Surface with Friendly Rounded Outline and Clean Shadow */}
          <ellipse cx="380" cy="385" rx="350" ry="85" fill="#ffffff" stroke="#1c3422" strokeWidth="3" />
          {/* Inner Accent Inlay Line */}
          <path
            d="M 60 385 C 100 445, 660 445, 700 385"
            stroke="#eaf7e7"
            strokeWidth="10"
            fill="none"
          />

          {/* Table Legs */}
          <rect x="150" y="390" width="16" height="90" rx="4" fill="#1c3422" />
          <rect x="590" y="390" width="16" height="90" rx="4" fill="#1c3422" />
        </g>

        {/* ========================================================
            4. LAPTOP DISPLAYING LIVE CONTROL TOWER DASHBOARD
        ======================================================== */}
        <g className="transition-transform duration-500 ease-out group-hover:translate-y-[-2px] origin-center">
          {/* Laptop Base on Table */}
          <ellipse cx="380" cy="365" rx="56" ry="14" fill="#ffffff" stroke="#1c3422" strokeWidth="2.6" />
          <rect x="360" y="362" width="40" height="5" rx="2" fill="#1c3422" />

          {/* Open Laptop Screen Facing Team at Dynamic Angle */}
          <g className="hero-screen-glow">
            <rect
              x="320"
              y="250"
              width="120"
              height="105"
              rx="12"
              fill="#ffffff"
              stroke="#1c3422"
              strokeWidth="2.8"
            />
            {/* Screen Inner Bezel */}
            <rect
              x="328"
              y="258"
              width="104"
              height="89"
              rx="8"
              fill="#f8faf6"
              stroke="#14a800"
              strokeWidth="1.8"
            />

            {/* Screen Top Camera Dot */}
            <circle cx="380" cy="254" r="2" fill="#1c3422" />

            {/* Interactive Dashboard UI Inside Screen */}
            {/* Top Dashboard Status Header */}
            <rect x="334" y="266" width="92" height="14" rx="4" fill="#eaf7e7" stroke="#1c3422" strokeWidth="1.2" />
            <circle cx="342" cy="273" r="3" fill="#16a34a" />
            <line x1="350" y1="273" x2="385" y2="273" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />

            {/* Live Chart Bars on Screen that lift dynamically on hover */}
            <g className="transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
              <rect x="338" y="308" width="8" height="24" rx="2" fill="#8ae274" stroke="#1c3422" strokeWidth="1.2" />
              <rect x="352" y="296" width="8" height="36" rx="2" fill="#6ed356" stroke="#1c3422" strokeWidth="1.2" />
              <rect x="366" y="288" width="8" height="44" rx="2" fill="#16a34a" stroke="#1c3422" strokeWidth="1.2" />
            </g>

            {/* Segmented Metric Card (Right side of screen) */}
            <rect x="382" y="288" width="42" height="44" rx="5" fill="#ffffff" stroke="#1c3422" strokeWidth="1.4" />
            <circle cx="396" cy="302" r="6" fill="#8ae274" stroke="#1c3422" strokeWidth="1.2" />
            <line x1="390" y1="316" x2="416" y2="316" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
            <line x1="390" y1="322" x2="408" y2="322" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Whimsical Energy & Telemetry Spark Rays Radiating from Dashboard Screen */}
          <g className="transition-transform duration-300 ease-out group-hover:scale-115 origin-[380px_240px]">
            <line x1="380" y1="236" x2="380" y2="224" stroke="#16a34a" strokeWidth="2.6" strokeLinecap="round" />
            <line x1="356" y1="240" x2="346" y2="230" stroke="#16a34a" strokeWidth="2.6" strokeLinecap="round" />
            <line x1="404" y1="240" x2="414" y2="230" stroke="#16a34a" strokeWidth="2.6" strokeLinecap="round" />
          </g>
        </g>

        {/* ========================================================
            5. CERAMIC COFFEE MUG WITH CONTINUOUS SEAMLESS HOT STEAM VAPOR
        ======================================================== */}
        <g className="origin-[250px_360px]">
          {/* Ceramic Coffee Mug */}
          <rect
            x="240"
            y="350"
            width="26"
            height="30"
            rx="5"
            fill="#ffffff"
            stroke="#1c3422"
            strokeWidth="2.4"
          />
          {/* Mug Side Handle */}
          <path
            d="M 240 356 C 230 356, 230 374, 240 374"
            fill="none"
            stroke="#1c3422"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Green Brand Band on Mug */}
          <line x1="240" y1="365" x2="266" y2="365" stroke="#16a34a" strokeWidth="2.5" />
          {/* Coffee Surface Inside */}
          <ellipse cx="253" cy="352" rx="10" ry="3" fill="#1c3422" />

          {/* HOT STEAM VAPOR STRANDS (CONTINUOUS UNDULATING LOOPS) */}
          <g>
            {/* Steam Strand 1 */}
            <path
              d="M 248 344 C 244 336, 252 328, 248 320 C 244 312, 252 304, 248 296"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="16 8"
              className="hero-steam-1"
            />
            {/* Steam Strand 2 */}
            <path
              d="M 256 342 C 260 334, 252 326, 256 318 C 260 310, 252 302, 256 294"
              fill="none"
              stroke="#8ae274"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="14 7"
              className="hero-steam-2"
            />
          </g>
        </g>

        {/* Second Tumbler / Water Bottle for Teammate on Right */}
        <g>
          <rect
            x="510"
            y="340"
            width="18"
            height="38"
            rx="5"
            fill="#ffffff"
            stroke="#1c3422"
            strokeWidth="2.4"
          />
          <rect x="513" y="334" width="12" height="6" rx="2" fill="#16a34a" stroke="#1c3422" strokeWidth="1.8" />
          <line x1="510" y1="352" x2="528" y2="352" stroke="#8ae274" strokeWidth="2.2" />
        </g>

        {/* Documents / Notebook Folder on Table */}
        <g className="transition-transform duration-300 ease-out group-hover:translate-x-[-2px]">
          <rect
            x="278"
            y="360"
            width="34"
            height="22"
            rx="4"
            fill="#eaf7e7"
            stroke="#1c3422"
            strokeWidth="2"
            transform="rotate(6 295 371)"
          />
          <line x1="284" y1="367" x2="306" y2="367" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" transform="rotate(6 295 371)" />
          <line x1="284" y1="373" x2="302" y2="373" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" transform="rotate(6 295 371)" />
        </g>
      </svg>
    </div>
  );
};

export default HeroMeetingIllustration;
