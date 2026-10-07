import AgencyIntegrationsBeam from "@/components/new/agency/AgencyIntegrationsBeam";

const AgencyProofBar = () => (
  <section className="bg-slate-light border-y border-border">
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-primary lg:text-4xl">
            What is Agency Control Tower
          </h2>
          <p className="mt-4 text-lg font-normal text-slate-secondary">
            The Agency Control Tower is a unified hub. It connects all systems your agency runs on.
          </p>
        </div>

        <AgencyIntegrationsBeam />
      </div>
    </div>
  </section>
);

export default AgencyProofBar;
