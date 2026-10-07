import NicheHubTemplate from "@/components/new/NicheHubTemplate";
import PharmaProductsBand from "@/components/new/sections/PharmaProductsBand";
import { getVertical } from "@/data/verticals";

const config = getVertical("pharma")!;

export default function PharmaHub() {
  return (
    <NicheHubTemplate
      config={config}
      customProductsBand={<PharmaProductsBand />}
      seo={{
        title: "ClinicalAI by CollabAI — AI Agents for Pharma & Clinical Trials",
        description:
          "Purpose-built AI agents for clinical trials, pharmacovigilance, and regulatory compliance. 21 CFR Part 11 compliant, HIPAA-ready, white-label available.",
        canonicalPath: "/pharma",
      }}
    />
  );
}