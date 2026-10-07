import pdfMake from "npm:pdfmake@0.2.10/build/pdfmake.js";
import pdfFonts from "npm:pdfmake@0.2.10/build/vfs_fonts.js";
/** Logo file copied from `src/assets/logo-black.png` and embedded for edge-function bundling. */
const REPORT_LOGO_DATA_URI = "data:image/png;base64,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";

export type ReportPdfInput = {
  companyName: string;
  industry: string;
  score: number;
  category: string;
  scoreSummary: string;
  findings: Array<{ title: string; description: string }>;
  industryInsight: string;
  recommendation: string;
  bookingLink: string;
};

const BRAND_BLUE = "#2563EB";
const TEXT_MUTED = "#6B7280";
const TEXT_BODY = "#374151";
const SCORE_BG = "#EEF4FF";

function buildDocDefinition(input: ReportPdfInput) {
  const progressWidth = Math.max(0, Math.min(100, input.score));
  const barTotalWidth = 475;

  const findingItems = input.findings.map((finding) => [
    { text: `${finding.title}: `, bold: true },
    finding.description,
  ]);

  return {
    pageSize: "A4",
    pageMargins: [40, 50, 40, 50],
    defaultStyle: {
      fontSize: 11,
      color: TEXT_BODY,
      lineHeight: 1.35,
    },
    content: [
      {
        image: REPORT_LOGO_DATA_URI,
        width: 120,
        alignment: "center",
        margin: [0, 0, 0, 16],
      },
      {
        text: "AI READINESS ASSESSMENT RESULT",
        style: "eyebrow",
      },
      {
        text: "Your AI Readiness Report",
        style: "reportTitle",
      },
      {
        text: [
          "Prepared for ",
          { text: input.companyName, bold: true },
          " in the ",
          { text: input.industry, italics: true },
          " industry.",
        ],
        margin: [0, 0, 0, 24],
      },
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                stack: [
                  { text: "Your AI Readiness Score", style: "scoreLabel", alignment: "center" },
                  {
                    text: [
                      { text: String(input.score), fontSize: 42, bold: true, color: BRAND_BLUE },
                      { text: "/100", fontSize: 18, color: TEXT_MUTED },
                    ],
                    alignment: "center",
                    margin: [0, 8, 0, 8],
                  },
                  {
                    text: input.category,
                    alignment: "center",
                    bold: true,
                    color: "#6B7280",
                    fillColor: BRAND_BLUE,
                    margin: [80, 0, 80, 12],
                  },
                  {
                    canvas: [
                      {
                        type: "rect",
                        x: 0,
                        y: 0,
                        w: barTotalWidth,
                        h: 10,
                        r: 5,
                        color: "#E5E7EB",
                      },
                      {
                        type: "rect",
                        x: 0,
                        y: 0,
                        w: (barTotalWidth * progressWidth) / 100,
                        h: 10,
                        r: 5,
                        color: BRAND_BLUE,
                      },
                    ],
                    margin: [0, 4, 0, 8],
                  },
                  {
                    text: input.scoreSummary,
                    style: "scoreNote",
                    alignment: "center",
                  },
                ],
                fillColor: SCORE_BG,
                margin: [12, 12, 12, 12],
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => "#DBEAFE",
          vLineColor: () => "#DBEAFE",
        },
        margin: [0, 0, 0, 24],
      },
      { text: "Top 3 Findings", style: "sectionTitle" },
      {
        ul: findingItems,
        margin: [0, 0, 0, 20],
      },
      { text: "Industry Insight", style: "sectionTitle" },
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: input.industryInsight,
                fillColor: "#FFF7ED",
                margin: [10, 10, 10, 10],
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => "#FED7AA",
          vLineColor: () => "#FED7AA",
        },
        margin: [0, 0, 0, 20],
      },
      { text: "Recommended Next Step", style: "sectionTitle" },
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: input.recommendation,
                fillColor: "#ECFDF5",
                margin: [10, 10, 10, 10],
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => "#BBF7D0",
          vLineColor: () => "#BBF7D0",
        },
        margin: [0, 0, 0, 24],
      },
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                stack: [
                  {
                    text: "Want help reviewing your AI opportunities?",
                    bold: true,
                    color: "#FFFFFF",
                    fontSize: 14,
                    margin: [0, 0, 0, 8],
                  },
                  {
                    text: "CollabAi can help you identify the best first AI use case for your business. Start with a free 30-minute AI strategy call.",
                    color: "#D1D5DB",
                    margin: [0, 0, 0, 12],
                  },
                  {
                    text: "Book a Free 30-Minute Strategy Call",
                    link: input.bookingLink,
                    color: BRAND_BLUE,
                    bold: true,
                    decoration: "underline",
                  },
                ],
                fillColor: "#111827",
                margin: [14, 14, 14, 14],
              },
            ],
          ],
        },
        layout: "noBorders",
        margin: [0, 8, 0, 20],
      },
      {
        text: "Prepared by SJ Innovation / CollabAI",
        style: "footer",
        alignment: "center",
      },
    ],
    styles: {
      eyebrow: {
        fontSize: 10,
        bold: true,
        color: BRAND_BLUE,
        characterSpacing: 1,
        margin: [0, 0, 0, 8],
      },
      reportTitle: {
        fontSize: 24,
        bold: true,
        color: "#111827",
        margin: [0, 0, 0, 10],
      },
      scoreLabel: {
        fontSize: 12,
        color: "#4B5563",
      },
      scoreNote: {
        fontSize: 10,
        color: TEXT_MUTED,
      },
      sectionTitle: {
        fontSize: 15,
        bold: true,
        color: "#111827",
        margin: [0, 8, 0, 8],
      },
      footer: {
        fontSize: 9,
        color: TEXT_MUTED,
      },
    },
  };
}

export async function buildReportPdfBuffer(input: ReportPdfInput): Promise<Uint8Array> {
  (pdfMake as unknown as { vfs: Record<string, string> }).vfs = (
    pdfFonts as { pdfMake: { vfs: Record<string, string> } }
  ).pdfMake.vfs;

  const docDefinition = buildDocDefinition(input);

  return await new Promise<Uint8Array>((resolve, reject) => {
    try {
      const pdf = (
        pdfMake as {
          createPdf: (doc: unknown) => { getBuffer: (cb: (arr: Uint8Array) => void) => void };
        }
      ).createPdf(docDefinition);
      pdf.getBuffer((arr: Uint8Array) => resolve(arr));
    } catch (error) {
      reject(error);
    }
  });
}
