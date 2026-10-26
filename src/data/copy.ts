/**
 * Copy shared between pages (Home and Services). Page-specific copy lives in the page files.
 * Voice rules: confident, plain, short sentences. No hype words, emojis or exclamation marks.
 */

export const stages = [
  {
    id: "assay",
    numeral: "I",
    name: "Assay",
    descriptor: "Diagnose",
    summary:
      "We map how work actually moves through your firm and measure where time, money and accuracy leak out. Fixed scope, fixed fee.",
    keep: "A prioritized blueprint, whether or not we build it.",
  },
  {
    id: "opus",
    numeral: "II",
    name: "Opus",
    descriptor: "Build",
    summary:
      "Automations, AI agents, integrations and internal tools, shipped in stages on the software you already pay for and designed around how your people already work.",
    keep: "Code, accounts and documentation. No lock-in.",
  },
  {
    id: "stewardship",
    numeral: "III",
    name: "Stewardship",
    descriptor: "Run",
    summary:
      "We operate, measure and improve the systems every month, so they keep up as the business changes.",
    keep: "The option to end it any time and run it yourself.",
  },
];

export const capabilities = [
  {
    n: "01",
    title: "Workflow automation & AI agents",
    text: "The handoffs between inboxes, spreadsheets and systems, done by software that logs every step.",
    examples: [
      "Intake and routing for new requests",
      "Follow-ups and reminders that send themselves",
      "Approval chains that no longer live in one inbox",
    ],
  },
  {
    n: "02",
    title: "Reporting & a single source of truth",
    text: "One place the numbers live, so reports are current when you open them.",
    examples: [
      "Portfolio and pipeline reporting",
      "Automated weekly and monthly updates",
      "One live dashboard in place of five spreadsheets",
    ],
  },
  {
    n: "03",
    title: "Document intelligence",
    text: "Invoices, contracts and forms read, checked and filed into the right system.",
    examples: [
      "Data extraction from PDFs, contracts, and filings",
      "Summaries of long documents and periodic updates",
      "Organized, searchable document archives",
    ],
  },
  {
    n: "04",
    title: "Internal tools & portals",
    text: "Small, focused apps for the jobs your current software handles badly.",
    examples: [
      "Client and partner portals",
      "Tools built around one team’s workflow",
      "Simple front ends for systems people avoid",
    ],
  },
  {
    n: "05",
    title: "AI enablement",
    text: "Training, playbooks and guardrails, so your team uses AI well and keeps confidential data out of consumer tools.",
    examples: ["Team AI training", "Usage policies and guardrails", "Personal AI workflows for leaders"],
  },
];

export const audiences = [
  {
    title: "Investment & professional firms",
    text: "Where accuracy and confidentiality are the job.",
  },
  {
    title: "Growing companies",
    text: "Processes built for a smaller version of the business.",
  },
  {
    title: "Owner-led businesses",
    text: "Operators who are the system today and want that to stop.",
  },
];

export const principles = [
  {
    title: "Diagnosis before code",
    text: "We do not build until we know which fix pays.",
  },
  {
    title: "Built for the people using it",
    text: "Adoption is the measure, not the demo.",
  },
  {
    title: "Ownership, no lock-in",
    text: "Code, accounts and documentation are yours.",
  },
  {
    title: "Discretion by default",
    text: "NDA before discovery. No confidential data in consumer AI tools.",
  },
];

export const faq = [
  {
    q: "What does the Assay cost?",
    a: "A fixed fee for a fixed scope, quoted after the first conversation once we know how many workflows are in play. The price does not move once agreed.",
  },
  {
    q: "What if we do not hire you for the build?",
    a: "You keep the blueprint. It is written so your own team or another firm can build from it.",
  },
  {
    q: "Will our data end up in ChatGPT or similar tools?",
    a: "No. We sign an NDA before discovery and never put confidential data into consumer AI tools. Where we use AI models, we use business accounts that do not train on your data, and we tell you which ones.",
  },
  {
    q: "Do we have to replace our software?",
    a: "Rarely. We build on the systems you already pay for first, and only recommend a new tool when the old one is the leak.",
  },
  {
    q: "How long until something works?",
    a: "Builds ship in stages, so the first piece is usable early rather than at the end. The Assay sets the order and timeline for your case.",
  },
  {
    q: "Do you only work in Dallas–Fort Worth?",
    a: "We are based in Dallas–Fort Worth and work with clients nationwide. Most work happens remotely, with on-site sessions when they help.",
  },
];
