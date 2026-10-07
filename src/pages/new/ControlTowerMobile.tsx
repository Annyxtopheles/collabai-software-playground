import ProductPageShell from "@/components/new/ProductPageShell";
import { Mic, CheckSquare, Bell, Smartphone } from "lucide-react";

const features = [
  { icon: Mic, title: "Capture meetings on the go", body: "Tap record. Transcripts, summaries, and action items land in Control Tower automatically." },
  { icon: CheckSquare, title: "Approve tasks from anywhere", body: "Agent-suggested follow-ups, deal updates, and approvals — one tap." },
  { icon: Bell, title: "Smart push notifications", body: "Get alerted only on what matters: stuck deals, hot leads, urgent reviews." },
  { icon: Smartphone, title: "iOS and Android", body: "Native apps, biometric login, offline-capable for field teams." },
];

const ControlTowerMobile = () => (
  <ProductPageShell
    seo={{
      title: "Control Tower Mobile — iOS and Android Apps for Field Teams",
      description:
        "Native iOS and Android apps for Control Tower. Capture meetings, approve tasks, and stay ahead of the pipeline — anywhere.",
      canonicalPath: "/control-tower/mobile",
    }}
    eyebrow="Mobile"
    h1="Control Tower fits in your pocket."
    sub="Built for executives, field reps, and ops leads who can't be tied to a laptop. Capture, review, approve — from anywhere."
    ctas={[
      { label: "Request beta access", url: "/book-demo" },
      { label: "See the desktop demo", url: "https://controltowerdemo.collabai.software/login", external: true, variant: "secondary" },
    ]}
  >
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7">
              <Icon className="h-7 w-7 text-[hsl(var(--brand-secondary))]" />
              <h3 className="mt-4 text-lg font-semibold text-brand-primary">{title}</h3>
              <p className="mt-2 text-sm text-slate-secondary">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ProductPageShell>
);

export default ControlTowerMobile;