/**
 * Shared logo catalog — single source of truth for brand marks used in strips.
 * Add or remove entries here; pages pick subsets via ids or pass custom lists.
 */
import hubspot from "@/assets/logos/hubspot.svg";
import zoom from "@/assets/logos/zoom.svg";
import googleWorkspace from "@/assets/logos/google-workspace.svg";
import slack from "@/assets/logos/slack.svg";
import monday from "@/assets/logos/monday.svg";
import notion from "@/assets/logos/notion.svg";
import github from "@/assets/logos/github.svg";
import outlook from "@/assets/logos/outlook.svg";
import salesforce from "@/assets/logos/salesforce.svg";
import pipedrive from "@/assets/logos/pipedrive.svg";
import zoho from "@/assets/logos/zoho.svg";
import asana from "@/assets/logos/asana.svg";
import clickup from "@/assets/logos/clickup.svg";
import eclinicalworks from "@/assets/logos/eclinicalworks.svg";
import encompass from "@/assets/logos/encompass.svg";
import googledrive from "@/assets/logos/googledrive.svg";
import googlemeet from "@/assets/logos/googlemeet.svg";
import lendingpad from "@/assets/logos/lendingpad.svg";
import ms365 from "@/assets/logos/ms365.svg";
import msteams from "@/assets/logos/msteams.svg";
import n8n from "@/assets/logos/n8n.svg";
import stedi from "@/assets/logos/stedi.svg";
import twilio from "@/assets/logos/twilio.svg";
import zapier from "@/assets/logos/zapier.svg";
import webhooks from "@/assets/logos/webhooks.svg";
import restapi from "@/assets/logos/restapi.svg";
import kindfull from "@/assets/logos/kindfull.svg";
import nexthealth from "@/assets/logos/nexthealth.svg";
import openai from "@/assets/logos/openai.svg";
import sendfrid from "@/assets/logos/sendgrid.svg";
import smtp from "@/assets/logos/smtp.svg";
import docusign from "@/assets/logos/docusign.svg";
import freddiemac from "@/assets/logos/freddiemac.svg";
import fanniemae from "@/assets/logos/fanniemae.png";
import jungo from "@/assets/logos/jungo.png";
import neonone from "@/assets/logos/neonone.svg";
import blackbaud from "@/assets/logos/blackbaud.svg";
import bloomerang from "@/assets/logos/bloomerang.svg";
import virtuous from "@/assets/logos/virtuous.svg";
import donorperfect from "@/assets/logos/donorperfect.svg";
import stripe from "@/assets/logos/stripe.svg";
import paypal from "@/assets/logos/paypal.svg";
import inituitquickbooks from "@/assets/logos/intuitquickbooks.svg";
import eventbrite from "@/assets/logos/eventbrite.svg";
import givebutter from "@/assets/logos/givebutter.svg";
import onecause from "@/assets/logos/onecause.svg";
import mailchimp from "@/assets/logos/mailchimp.svg";
export type LogoItem = {
  id: string;
  name: string;
  /** Vite-resolved asset URL (.svg or .png) */
  src: string;
  /**
   * Use a dark tile when the artwork is light-on-dark
   * (e.g. white wordmarks shot on black).
   */
  darkTile?: boolean;
};

/** Default catalog used across marketing pages (integrations, partners, etc.). */
export const LOGOS = [
  { id: "hubspot", name: "HubSpot", src: hubspot },
  { id: "zoom", name: "Zoom", src: zoom },
  { id: "google-workspace", name: "Google Workspace", src: googleWorkspace },
  { id: "slack", name: "Slack", src: slack },
  { id: "monday", name: "monday.com", src: monday },
  { id: "notion", name: "Notion", src: notion },
  { id: "github", name: "GitHub", src: github },
  { id: "outlook", name: "Microsoft Outlook", src: outlook },
  { id: "salesforce", name: "Salesforce", src: salesforce },
  { id: "pipedrive", name: "Pipedrive", src: pipedrive },
  { id: "zoho", name: "Zoho", src: zoho },
  { id: "asana", name: "Asana", src: asana },
  { id: "clickup", name: "ClickUp", src: clickup },
  { id: "eclinicalworks", name: "eClinicalWorks", src: eclinicalworks },
  { id: "encompass", name: "enCompass", src: encompass },
  { id: "googledrive", name: "Google Drive", src: googledrive },
  { id: "googlemeet", name: "Google Meet", src: googlemeet },
  { id: "lendingpad", name: "LendingPad", src: lendingpad },
  { id: "ms365", name: "Microsoft 365", src: ms365 },
  { id: "msteams", name: "Microsoft Teams", src: msteams },
  { id: "n8n", name: "n8n", src: n8n },
  { id: "stedi", name: "Stedi", src: stedi },
  { id: "twilio", name: "Twilio", src: twilio },
  { id: "zapier", name: "Zapier", src: zapier },
  { id: "webhooks", name: "Webhooks", src: webhooks },
  { id: "zapier", name: "Zapier", src: zapier },
  { id: "restapi", name: "REST API", src: restapi },
  { id: "nexthealth", name: "NextHealth", src: nexthealth },
  { id: "openai", name: "OpenAI", src: openai },
  { id: "sendfrid", name: "Sendfrid", src: sendfrid },
  { id: "smtp", name: "SMTP", src: smtp },
  { id: "docusign", name: "DocuSign", src: docusign },
  { id: "freddiemac", name: "Freddie Mac", src: freddiemac },
  { id: "fanniemae", name: "Fannie Mae", src: fanniemae },
  { id: "jungo", name: "Jungo", src: jungo },
  { id: "neonone", name: "NeonOne", src: neonone },
  { id: "blackbaud", name: "Blackbaud", src: blackbaud },
  { id: "bloomerang", name: "Bloomerang", src: bloomerang },
  { id: "virtuous", name: "Virtuous", src: virtuous },
  { id: "donorperfect", name: "DonorPerfect", src: donorperfect },
  { id: "stripe", name: "Stripe", src: stripe },
  { id: "paypal", name: "PayPal", src: paypal },
  { id: "inituitquickbooks", name: "Intuit QuickBooks", src: inituitquickbooks },
  { id: "eventbrite", name: "Eventbrite", src: eventbrite },
  { id: "givebutter", name: "Givebutter", src: givebutter },
  { id: "onecause", name: "OneCause", src: onecause },
  { id: "mailchimp", name: "Mailchimp", src: mailchimp },
  { id: "kindfull", name: "Kindfull", src: kindfull },
] as const satisfies readonly LogoItem[];

export type LogoId = (typeof LOGOS)[number]["id"];

const logoById = new Map<string, LogoItem>(
  LOGOS.map((logo) => [logo.id, logo]),
);

/** Resolve catalog ids to logo objects. Omit `ids` to use the full set. */
export function resolveLogos(ids?: readonly LogoId[]): LogoItem[] {
  if (!ids?.length) {
    return LOGOS.map((logo) => ({ ...logo }));
  }

  return ids.flatMap((id) => {
    const logo = logoById.get(id);
    return logo ? [{ ...logo }] : [];
  });
}

/** Full catalog minus the given ids — handy for page-specific removals. */
export function omitLogos(ids: readonly LogoId[]): LogoItem[] {
  const skip = new Set<string>(ids);
  return LOGOS.filter((logo) => !skip.has(logo.id)).map((logo) => ({
    ...logo,
  }));
}
