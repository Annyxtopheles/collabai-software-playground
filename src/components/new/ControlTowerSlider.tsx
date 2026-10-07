import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, PhoneCall, ShieldCheck, CalendarCheck2, CheckCircle2 } from "lucide-react";
import dashboardImg from "@/assets/control-tower/dashboard.png";
import meetingsImg from "@/assets/control-tower/meetings.png";
import reportsImg from "@/assets/control-tower/reports.png";

type Slide = {
  eyebrow: string;
  title: string;
  caption: string;
  image?: string;
  render?: () => JSX.Element;
};

const slides: Slide[] = [
  {
    eyebrow: "Live Dashboard",
    title: "One view. Everything Control Tower is watching.",
    caption: "Pipeline, projects, meetings, and agent runs — all in one operating picture.",
    image: dashboardImg,
  },
  {
    eyebrow: "Meetings Intelligence",
    title: "Every meeting captured. Action items, auto-created.",
    caption: "Transcripts, decisions, owners and due dates — written back into your tools.",
    image: meetingsImg,
  },
  {
    eyebrow: "100+ AI Agents",
    title: "An AI workforce, organized into 6 teams.",
    caption: "Sales, Meetings, PM, Tasks, EOS, and Team & Productivity — each agent has a job.",
    image: reportsImg,
  },
  {
    eyebrow: "Mortgage Control Tower",
    title: "Pipeline by foresight, not firefighting.",
    caption: "Loans risk-sorted in real time. Lock alerts, missing docs, and stuck files surfaced before they cost you.",
    render: () => <MortgageMock />,
  },
  {
    eyebrow: "ePhysician Control Tower",
    title: "AI answers the phone, verifies, and books.",
    caption: "24/7 reception with real-time insurance eligibility — booked appointments, not missed calls.",
    render: () => <VoiceFlowMock />,
  },
];

const MortgageMock = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-primary))]/90 p-6 sm:p-8 flex flex-col gap-3 text-white">
    <div className="flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-widest text-white/60">
      <span>Active Pipeline · 166 loans</span>
      <span className="text-[hsl(var(--brand-secondary))]">Live</span>
    </div>
    {[
      { name: "Loan #4821 — Patel", risk: "High", tag: "Lock expires in 3d", color: "bg-red-500/20 text-red-300 border-red-500/40" },
      { name: "Loan #4807 — Nguyen", risk: "Medium", tag: "Appraisal pending", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
      { name: "Loan #4790 — Johnson", risk: "Low", tag: "Clear-to-close", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
      { name: "Loan #4776 — Garcia", risk: "Medium", tag: "Missing W-2", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
    ].map((row) => (
      <div key={row.name} className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
        <div className="text-sm sm:text-base font-medium truncate">{row.name}</div>
        <div className={`text-[10px] sm:text-xs px-2 py-1 rounded-md border ${row.color} whitespace-nowrap`}>{row.tag}</div>
      </div>
    ))}
    <div className="mt-auto text-[10px] sm:text-xs text-white/50">Auto-prioritized by File Risk Agent · refreshed 12s ago</div>
  </div>
);

const VoiceFlowMock = () => {
  const steps = [
    { icon: PhoneCall, label: "Incoming call", sub: "AI receptionist answers" },
    { icon: ShieldCheck, label: "Insurance verified", sub: "Real-time eligibility" },
    { icon: CalendarCheck2, label: "Slot offered", sub: "Provider + time confirmed" },
    { icon: CheckCircle2, label: "Booked", sub: "EHR + SMS confirmation" },
  ];
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-primary))]/90 p-6 sm:p-10 flex flex-col justify-center gap-4 text-white">
      <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60 mb-2">Voice Agent · Live flow</div>
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[hsl(var(--brand-secondary))]/20 border border-[hsl(var(--brand-secondary))]/40 flex items-center justify-center shrink-0">
            <s.icon className="w-5 h-5 text-[hsl(var(--brand-secondary))]" />
          </div>
          <div className="flex-1">
            <div className="text-sm sm:text-base font-medium">{s.label}</div>
            <div className="text-xs sm:text-sm text-white/60">{s.sub}</div>
          </div>
          {i < steps.length - 1 && <div className="hidden sm:block text-white/30">→</div>}
        </div>
      ))}
    </div>
  );
};

const ControlTowerSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[24px] border-[6px] border-[#e2e2e2] bg-[hsl(var(--brand-primary))]" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative flex-[0_0_100%] aspect-[16/9]">
              {s.image ? (
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ) : (
                s.render?.()
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <div className="mt-5 text-center px-4 min-h-[88px]">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--brand-secondary))] font-semibold">
          {slides[selected].eyebrow}
        </div>
        <div className="mt-2 text-lg sm:text-xl font-bold text-foreground">{slides[selected].title}</div>
        <div className="mt-1 text-sm text-muted-foreground max-w-xl mx-auto">{slides[selected].caption}</div>
      </div>

      {/* Controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => emblaApi?.scrollPrev()}
        className="hidden sm:flex absolute top-[28%] -left-3 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-border items-center justify-center hover:bg-muted transition-colors active:translate-y-[2px]"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => emblaApi?.scrollNext()}
        className="hidden sm:flex absolute top-[28%] -right-3 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-border items-center justify-center hover:bg-muted transition-colors active:translate-y-[2px]"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === selected ? "w-8 bg-[hsl(var(--brand-primary))]" : "w-2 bg-border hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ControlTowerSlider;