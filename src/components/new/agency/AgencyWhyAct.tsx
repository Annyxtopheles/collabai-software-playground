import type { ReactNode } from "react";
import { Check } from "lucide-react";
import SmoothImage from "@/components/ui/SmoothImage";
import privacyArt from "@/assets/why-act/data-privacy.svg.asset.json";
import easyArt from "@/assets/why-act/easy-to-use.svg.asset.json";
import costArt from "@/assets/why-act/cost-effective.svg.asset.json";

type Reason = {
  id: string;
  title: string;
  body: ReactNode;
  bottomLine: string;
  image: string;
  imageAlt: string;
};

const CheckItem = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-2.5">
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-secondary)/0.12)]">
      <Check className="h-3 w-3 text-[hsl(var(--brand-secondary))]" strokeWidth={3} />
    </span>
    <span>{children}</span>
  </li>
);

const reasons: Reason[] = [
  {
    id: "privacy",
    image: privacyArt.url,
    imageAlt: "Illustration of data kept private and protected on your own servers",
    title: "Data Privacy & Protection",
    bottomLine: "Your data never leaves your servers.",
    body: (
      <>
        <ul className="space-y-3 text-sm text-slate-secondary">
          <CheckItem>
            <span className="font-semibold text-brand-primary">Self-Hosted</span> — Keeps sensitive
            business data within your own infrastructure
          </CheckItem>
          <CheckItem>
            <span className="font-semibold text-brand-primary">DDRP-Aligned</span> — Built with
            privacy and responsible personal data processing in mind.
          </CheckItem>
          <CheckItem>
            <span className="font-semibold text-brand-primary">SOC 2-Aligned</span> — Designed
            around security and operational controls
          </CheckItem>
        </ul>
        <p className="mt-5 text-sm text-slate-secondary">
          Using popular AI tools compromises private data.
        </p>
        <p className="mt-3 text-sm text-slate-secondary">
          Agency Control Tower is installed on your server and therefore, you can protect your and
          your client information. Prevent data breach.
        </p>
      </>
    ),
  },
  {
    id: "easy",
    image: easyArt.url,
    imageAlt: "Illustration of an easy-to-use connected workspace",
    title: "Easy to Use",
    bottomLine: "Less juggling. More doing. 2X productivity.",
    body: (
      <>
        <p className="text-sm text-slate-secondary">Most AI tools add another app to your stack.</p>
        <p className="mt-1 text-sm text-slate-secondary">
          Another login. Another workflow. Another tab.
        </p>
        <p className="mt-4 text-sm font-semibold text-brand-primary">ACT brings it together.</p>
        <ul className="mt-3 space-y-2.5 text-sm text-slate-secondary">
          {[
            "Keep your existing tools",
            "Connect your workflows",
            "Automate repetitive tasks",
            "Manage everything from one hub",
            "Cut the back-and-forth",
          ].map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </ul>
        <p className="mt-5 text-sm text-slate-secondary">
          ACT doesn't replace the tools your team already uses. It makes them work better together.
        </p>
      </>
    ),
  },
  {
    id: "cost",
    image: costArt.url,
    imageAlt: "Illustration of cost savings with a one-time payment",
    title: "Cost-effective",
    bottomLine: "Invest once. Scale smarter.",
    body: (
      <>
        <p className="text-sm text-slate-secondary">
          Built for growing SMBs, ACT keeps costs practical.
        </p>
        <ul className="mt-4 space-y-3 text-sm text-slate-secondary">
          <CheckItem>No per-user licence fees. No endless subscription stack.</CheckItem>
          <CheckItem>
            <span className="font-semibold text-brand-primary">One-time payment.</span>
          </CheckItem>
          <CheckItem>
            Then cover annual maintenance and add customized services when you need them.
          </CheckItem>
        </ul>
        <p className="mt-5 text-sm text-slate-secondary">
          More automation. More productivity. More value from the tools you already use.
        </p>
      </>
    ),
  },
];

const AgencyWhyAct = () => (
  <section className="border-y border-border bg-slate-light py-16">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold leading-[1.15] text-brand-primary lg:text-4xl">
          <span className="block lg:whitespace-nowrap">3 Reasons to Choose Agency Control Tower</span>
          <span className="block lg:whitespace-nowrap">Over Other AI Assisting Tools &amp; Apps</span>
        </h2>
      </div>

      <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
        {reasons.map((reason) => (
            <article
              key={reason.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-secondary)/0.5)] hover:shadow-md"
            >
              <div className="-mx-7 -mt-7 mb-5">
                <SmoothImage
                  src={reason.image}
                  alt={reason.imageAlt}
                  wrapperClassName="aspect-[3/2] w-full overflow-hidden bg-transparent"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary">{reason.title}</h3>

              <div className="my-5 h-px bg-border" />

              <div className="flex-1">{reason.body}</div>

              <div className="mt-6 rounded-xl bg-[hsl(var(--brand-secondary)/0.08)] px-4 py-3 text-center text-sm font-bold text-brand-primary">
                {reason.bottomLine}
              </div>
            </article>
        ))}
      </div>
    </div>
  </section>
);

export default AgencyWhyAct;
