const items = [
  { value: "22", label: "Years in business" },
  { value: "101+", label: "Engineers" },
  { value: "5", label: "Offices worldwide" },
  { value: "SOC 2", label: "Type II" },
  { value: "HIPAA", label: "Aligned" },
  { value: "GDPR", label: "Compliant" },
];

const CredibilityStrip = () => (
  <section className="border-y border-border bg-background py-12">
    <div className="container mx-auto px-4">
      <ul className="grid grid-cols-3 gap-y-8 sm:grid-cols-6">
        {items.map((i) => (
          <li key={i.label} className="text-center">
            <div className="text-2xl font-bold text-brand-primary lg:text-3xl">{i.value}</div>
            <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-secondary">
              {i.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CredibilityStrip;