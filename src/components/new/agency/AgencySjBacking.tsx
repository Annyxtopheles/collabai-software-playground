import sjLogo from "@/assets/sj-innovation-logo.svg.asset.json";
import incBadge from "@/assets/inc-5000-badge.png.asset.json";
import neutrogena from "@/assets/clients/neutrogena.svg.asset.json";
import janssen from "@/assets/clients/janssen.svg.asset.json";
import frasada from "@/assets/clients/frasada.svg.asset.json";
import jnj from "@/assets/clients/johnson-and-johnson.svg.asset.json";
import vygilance from "@/assets/clients/vygilance.svg.asset.json";
import rentah from "@/assets/clients/rentah.svg.asset.json";
import stJohns from "@/assets/clients/st-johns-university.svg.asset.json";
import teachersPayTeachers from "@/assets/clients/teachers-pay-teachers.svg.asset.json";
import awsCloudPractitioner from "@/assets/certs/aws-cloud-practitioner.png.asset.json";
import awsSolutionsArchitect from "@/assets/certs/aws-solutions-architect.png.asset.json";
import veevaVault from "@/assets/certs/veeva-vault.png.asset.json";
import acquiaDrupal9 from "@/assets/certs/acquia-drupal-9.png.asset.json";
import acquiaDrupal10 from "@/assets/certs/acquia-drupal-10.png.asset.json";
import shopifyProduct from "@/assets/certs/shopify-product-fundamentals-v2.svg.asset.json";
import adobePartner from "@/assets/certs/adobe-solution-partner-v2.svg.asset.json";
import shopifyBusiness from "@/assets/certs/shopify-business-fundamentals-v2.svg.asset.json";
import awsPartnerNetwork from "@/assets/certs/aws-partner-network.svg.asset.json";
import claudePartner from "@/assets/certs/claude-partner-network.svg.asset.json";
import iso9001 from "@/assets/certs/iso-9001.svg.asset.json";
import SmoothImage from "@/components/ui/SmoothImage";

type Logo = { src: string; alt: string; wordmark?: string };

const clients: Logo[] = [
  { src: neutrogena.url, alt: "Neutrogena" },
  { src: janssen.url, alt: "Janssen" },
  { src: frasada.url, alt: "Frasada Salon & Day Spa" },
  { src: jnj.url, alt: "Johnson & Johnson" },
  { src: vygilance.url, alt: "Vygilance" },
  { src: rentah.url, alt: "Rentah", wordmark: "Rentah" },
  { src: stJohns.url, alt: "St. John's University" },
  { src: teachersPayTeachers.url, alt: "Teachers Pay Teachers" },
];

type Certification = Logo & { href?: string };

const certifications: Certification[] = [
  {
    src: iso9001.url,
    alt: "ISO 9001 Certified",
    href: "https://sjinnovation.com/security",
  },
  { src: incBadge.url, alt: "Inc. 5000" },
  { src: claudePartner.url, alt: "Claude Partner Network" },
  { src: awsPartnerNetwork.url, alt: "AWS Partner Network" },
  { src: awsCloudPractitioner.url, alt: "AWS Certified Cloud Practitioner" },
  { src: awsSolutionsArchitect.url, alt: "AWS Certified Solutions Architect – Associate" },
  { src: veevaVault.url, alt: "Veeva Vault Certified" },
  { src: acquiaDrupal9.url, alt: "Acquia Certified Drupal 9 Site Builder" },
  { src: acquiaDrupal10.url, alt: "Acquia Certified Drupal 10 Site Builder" },
  { src: shopifyProduct.url, alt: "Shopify Product Fundamentals" },
  { src: adobePartner.url, alt: "Adobe Solution Partner Bronze" },
  { src: shopifyBusiness.url, alt: "Shopify Business Fundamentals" },
];

const stats = [
  { value: "22", label: "Years" },
  { value: "500+", label: "Projects" },
  { value: "100+", label: "Team" },
  { value: "4", label: "Offices" },
];

const blockClass = "flex h-full items-center justify-center p-3";

const AgencySjBacking = () => (
  <section className="bg-background py-12">
    <div className="container mx-auto px-4">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center rounded-full bg-slate-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-secondary))]">
              Powered by
            </span>
            <SmoothImage
              src={sjLogo.url}
              alt="SJ Innovation"
              wrapperClassName="inline-block bg-transparent"
              className="h-12 w-auto"
            />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-brand-primary lg:text-4xl">
            Backed by{" "}
            <span className="text-[hsl(var(--brand-secondary))]">22 years</span> of
            <br />
            enterprise engineering
          </h2>

          <p className="mt-4 max-w-xl text-base text-slate-secondary">
            Agency Control Tower is a product of{" "}
            <strong className="font-semibold text-brand-primary">SJ Innovation</strong> — the NYC
            software company founded in 2004 that has shipped 500+ production systems across
            healthcare, finance, real estate, and government.
          </p>

          <dl className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-x-6">
                {i > 0 && <span aria-hidden className="h-8 w-px bg-border" />}
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-3xl font-bold tracking-tight text-[hsl(var(--brand-secondary))]">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-brand-primary">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-xs tracking-wider text-slate-secondary">
            Trusted by Healthcare, Mortgage, Finance, and Property Management Teams
            <br />
            No Data Leaves Your Infrastructure
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-slate-light p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-brand-primary">Certifications</h3>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {certifications.map((cert) => {
              const body = (
                <SmoothImage
                  src={cert.src}
                  alt={cert.alt}
                  wrapperClassName="bg-transparent"
                  className="h-14 w-auto object-contain"
                />
              );
              return (
                <li key={cert.alt}>
                  {cert.href ? (
                    <a href={cert.href} target="_blank" rel="noopener noreferrer" className={blockClass}>
                      {body}
                    </a>
                  ) : (
                    <div className={blockClass}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-12 py-8">
        <h3 className="text-center text-xl font-bold text-brand-primary">
          Trusted By <span className="text-[hsl(var(--brand-secondary))]">Leading Brands</span>
        </h3>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clients.map((logo) => (
            <li key={logo.alt}>
              {logo.wordmark ? (
                <span className="inline-flex items-center gap-1.5">
                  <SmoothImage src={logo.src} alt="" wrapperClassName="bg-transparent" className="h-8 w-auto object-contain" />
                  <span className="text-lg font-bold text-brand-primary">{logo.wordmark}</span>
                </span>
              ) : (
                <SmoothImage src={logo.src} alt={logo.alt} wrapperClassName="bg-transparent" className="h-8 w-auto object-contain" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AgencySjBacking;
