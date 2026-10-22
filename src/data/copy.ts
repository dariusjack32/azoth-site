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
      "We map how work actually moves through your firm — the systems, the spreadsheets, the workarounds — and find where time, money, and accuracy leak. Fixed scope, fixed fee. You leave with a prioritized blueprint, whether or not we build it.",
  },
  {
    id: "opus",
    numeral: "II",
    name: "Opus",
    descriptor: "Build",
    summary:
      "We build the fixes: automations, AI agents, integrations, and internal tools, designed around how your people already work. Delivered in stages, so value shows up early.",
  },
  {
    id: "stewardship",
    numeral: "III",
    name: "Stewardship",
    descriptor: "Run",
    summary:
      "We keep it running, measure it, and improve it every month. Everything is documented and yours. No black boxes, no lock-in.",
  },
];

export const capabilities = [
  {
    n: "01",
    title: "Workflow automation & AI agents",
    text: "The repetitive work between your tools: intake, routing, follow-ups, approvals.",
    examples: [
      "Intake and routing for new requests",
      "Follow-ups and reminders that send themselves",
      "Approval chains that no longer live in one inbox",
    ],
  },
  {
    n: "02",
    title: "Reporting & a single source of truth",
    text: "Numbers that live in five places, consolidated into live dashboards and automatic reports.",
    examples: [
      "Portfolio and pipeline reporting",
      "Automated weekly and monthly updates",
      "One live dashboard in place of five spreadsheets",
    ],
  },
  {
    n: "03",
    title: "Document intelligence",
    text: "Contracts, filings, invoices, and updates: extracted, organized, summarized.",
    examples: [
      "Data extraction from PDFs, contracts, and filings",
      "Summaries of long documents and periodic updates",
      "Organized, searchable document archives",
    ],
  },
  {
    n: "04",
    title: "Internal tools & portals",
    text: "Purpose-built software when off-the-shelf won’t fit.",
    examples: [
      "Client and partner portals",
      "Tools built around one team’s workflow",
      "Simple front ends for systems people avoid",
    ],
  },
  {
    n: "05",
    title: "AI enablement",
    text: "Training, playbooks, and guardrails so your team uses AI well, and safely.",
    examples: ["Team AI training", "Usage policies and guardrails", "Personal AI workflows for leaders"],
  },
];

export const audiences = [
  {
    title: "Investment & professional firms",
    text: "High-stakes information, handled with discretion.",
  },
  {
    title: "Growing companies",
    text: "Processes that worked at twenty people, breaking at a hundred.",
  },
  {
    title: "Owner-led businesses",
    text: "Hours back for the person who’s been doing everything.",
  },
];

export const principles = [
  {
    title: "Diagnosis before code.",
    text: "No AI for its own sake. We fix what’s measurably costing you, in order of impact.",
  },
  {
    title: "Built for the people who use it.",
    text: "The best system is the one your team adopts. We design for the person at the desk, then train them on it.",
  },
  {
    title: "Yours, completely.",
    text: "Documented, handed over, and owned by you. Leave anytime with everything we built.",
  },
  {
    title: "Discretion by default.",
    text: "NDA before discovery. Only the access we need. Your confidential data never goes into consumer AI tools.",
  },
];
