# Azoth & Co. — Website Build Brief

You're a senior designer-engineer at a top independent studio. Build a production-ready marketing site for **Azoth & Co.**, an AI & operations consultancy, from this brief. Work through every section autonomously; stop only if you're genuinely blocked. When finished, report what you built and list every placeholder I need to fill.

---

## 1. The business

- **What it does:** Azoth & Co. turns manual processes into AI-powered systems people actually use — diagnosed, built, and kept running, end to end.
- **Who buys:** operations leaders and partners at firms where people's time is expensive — investment and professional-services firms first, then growing mid-size companies and owner-led businesses.
- **What they feel:** their most expensive people doing their cheapest work — re-keying data, chasing updates, rebuilding the same reports, critical knowledge stuck in one person's head.
- **The offer:** three stages — I. Assay (diagnose), II. Opus (build), III. Stewardship (run).
- **Where:** Dallas–Fort Worth, Texas; clients nationwide.
- **One action everywhere:** Book a call (Cal.com). There are no contact forms anywhere on this site.

## 2. Design direction

Premium, quiet, editorial — closer to a private bank or an architecture practice than a SaaS startup. The firm sells judgment, so restraint is the design.

**Palette** — CSS custom properties; dark theme throughout (`color-scheme: dark`):

| Token | Value | Use |
|---|---|---|
| `--obsidian` | `#0B0B0C` | page background |
| `--ink` | `#141416` | raised surfaces |
| `--bone` | `#ECE8E0` | primary text |
| `--ash` | `#8C887F` | secondary text |
| `--gold` | `#B8A06A` | the only accent: hairlines, the mark, focus and hover states — never large fills |
| `--rule` | gold at ~25% opacity | 1px hairline rules |

Every text/background pair must pass WCAG AA.

**Type** — self-host with @fontsource:
- Display: **Cormorant Garamond** (300–500), large, tight leading. Hero H1 ≈ 56px mobile → 120px desktop via `clamp()`.
- Body/UI: **Instrument Sans**, 17–18px base, 1.6 line height, 65ch max measure.
- Micro-labels: **IBM Plex Mono**, uppercase, 11–12px, +0.14em tracking.
- Wordmark: "AZOTH & CO." in the display serif, uppercase, wide tracking, with an italic ampersand.

**Layout** — 12-column editorial grid, generous negative space (≥160px between sections on desktop), asymmetric placement, 1px `--rule` hairlines between sections.

**Buttons** — rectangular, 1px gold border, bone uppercase mono label; on hover, fill gold with obsidian text (200ms). One primary style, used consistently.

**Motion** — slow and sparing. Text fades up 12px on first view (IntersectionObserver, 600ms ease-out, light stagger). The hero mark draws itself once on load (SVG `stroke-dashoffset`, ~1.8s). Everything off under `prefers-reduced-motion`. No parallax, custom cursors, or scroll-jacking.

**Texture** — optional SVG film-grain overlay at ≤4% opacity, `pointer-events: none`.

**Never:** drop-shadow cards, gradient blobs, glassmorphism, stock photos, AI-generated imagery, icon grids, carousels.

## 3. The occult — exactly a dash

**The rule:** every esoteric element must also read as plain, premium business design. If a skeptical VC partner would notice it as "occult," it's too much.

Allowed — and nothing else:
1. **The mark.** An original geometric monogram: a thin circle enclosing an upward equilateral triangle with a horizontal bar across its lower third. It reads as an "A"; it's also the classical alchemical sign for air. Hand-written SVG, 1.25px gold strokes at display size, with a heavier-stroke variant for favicon sizes.
2. **Roman numerals** I, II, III — for the three service stages only.
3. **The tagline:** "Operations, rebuilt."
4. **The stage names** Assay and Opus, always paired with plain descriptors (Diagnose, Build).
5. **The name story** on the About page (copy below).
6. **One Latin line**, footer only, small mono: "Solve et coagula", with a `title` attribute: "Dissolve and coagulate — take it apart, rebuild it right."
7. **Optional:** a faint (≤6% opacity) line drawing of a circle, triangle, and square behind the hero.

**Banned:** pentagrams, inverted symbols, all-seeing eyes, skulls, tarot, zodiac wheels, sigils beyond the mark, blackletter or gothic type, candles, smoke, parchment textures, purple or neon "mystic" palettes, and the words magic, mystical, spells, secrets.

## 4. Tech

- **Astro** (latest stable), static output. Zero client JS except: the fade-in observer, the mobile menu toggle, and the Cal.com embed on /contact only.
- Hand-written CSS with design tokens — no Tailwind, UI kits, or component libraries.
- Components: `Base.astro` layout, `Nav`, `Footer`, `Mark`, `Button`, `Section`, `SectionLabel`.
- `src/config.ts` holds every business constant — read everywhere, hardcoded nowhere:
  - `SITE_URL = "https://azothandco.com"`
  - `EMAIL = "[hello@azothandco.com]"`
  - `CAL_LINK = "[https://cal.com/your-handle/intro]"`
  - `LEGAL_NAME = "[Exact legal name from Certificate of Formation]"`
  - `FOUNDER_NAME = "[Your full name]"`
  - `LOCATION = "Dallas–Fort Worth, Texas"`
- Deploy to GitHub Pages with GitHub Actions (official `withastro/action`). `public/CNAME` contains `azothandco.com`; `site` set in `astro.config.mjs`.
- `@astrojs/sitemap`, `robots.txt`, canonical URLs.
- No analytics or tracking in v1. Leave one clearly commented slot in `Base.astro` for a privacy-friendly script later.

## 5. Pages and copy

Use this copy as written; tighten only if layout demands it. **[Brackets]** mark anything I supply.

### Global
- **Nav:** wordmark left. Right: Services · About · Contact, then a hairline divider and a quieter **Client login** link to /portal. "Book a call" button on desktop. Mobile: full-screen overlay menu.
- **Footer:** mark + wordmark · "AI & Operations Consulting · Dallas–Fort Worth, Texas" · links (Services, About, Contact, Client login, Privacy) · email · "Solve et coagula" · "© {current year} {LEGAL_NAME}".

### Home `/`

**Hero**
- Label: AI & OPERATIONS CONSULTING
- H1: Operations, rebuilt.
- Sub: Azoth & Co. turns manual processes into AI-powered systems your people actually use — diagnosed, built, and kept running, end to end.
- Buttons: **Book a call** → /contact · text link "How we work ↓" → #how

**Problem**
- Label: THE COST OF MANUAL
- H2: Your most expensive people are doing your cheapest work.
- Body: Re-keying data between systems. Chasing updates over email. Rebuilding the same report every month. Knowledge that lives in one person's head. None of it shows up as a line item — it's paid for in late nights, avoidable errors, and decisions made on stale numbers.

**How we work** (`#how`)
- Label: HOW WE WORK
- H2: Diagnose. Build. Keep it running.
- **I. Assay — Diagnose.** We map how work actually moves through your firm — the systems, the spreadsheets, the workarounds — and find where time, money, and accuracy leak. Fixed scope, fixed fee. You leave with a prioritized blueprint, whether or not we build it.
- **II. Opus — Build.** We build the fixes: automations, AI agents, integrations, and internal tools, designed around how your people already work. Delivered in stages, so value shows up early.
- **III. Stewardship — Run.** We keep it running, measure it, and improve it every month. Everything is documented and yours. No black boxes, no lock-in.
- Layout: three columns on desktop divided by vertical hairlines; large Roman numerals in the display serif.

**What we build**
- Label: WHAT WE BUILD
- H2: Systems, not slide decks.
- 01 Workflow automation & AI agents — The repetitive work between your tools: intake, routing, follow-ups, approvals.
- 02 Reporting & a single source of truth — Numbers that live in five places, consolidated into live dashboards and automatic reports.
- 03 Document intelligence — Contracts, filings, invoices, and updates: extracted, organized, summarized.
- 04 Internal tools & portals — Purpose-built software when off-the-shelf won't fit.
- 05 AI enablement — Training, playbooks, and guardrails so your team uses AI well, and safely.
- Layout: numbered list with hairline separators — not cards.

**Who we work with**
- Label: WHO WE WORK WITH
- H2: Firms where time is expensive.
- Investment & professional firms — High-stakes information, handled with discretion.
- Growing companies — Processes that worked at twenty people, breaking at a hundred.
- Owner-led businesses — Hours back for the person who's been doing everything.

**Principles**
- Label: PRINCIPLES
- Diagnosis before code. — No AI for its own sake. We fix what's measurably costing you, in order of impact.
- Built for the people who use it. — The best system is the one your team adopts. We design for the person at the desk, then train them on it.
- Yours, completely. — Documented, handed over, and owned by you. Leave anytime with everything we built.
- Discretion by default. — NDA before discovery. Only the access we need. Your confidential data never goes into consumer AI tools.

**Closing CTA**
- H2: Start with a conversation.
- Body: Fifteen minutes or thirty. Tell us where the work gets stuck — you'll leave with at least one thing worth fixing, whether or not we work together.
- Button: **Book a call**

### Services `/services`
- Label: SERVICES · H1: Three stages. · Sub: Start with the first. Continue only if it earns it.
- **I. Assay — Diagnose.** *What happens:* stakeholder interviews, process walk-throughs, a systems and data inventory. *You receive:* a map of current workflows; a ranked list of opportunities with estimated hours and cost recovered; a 90-day roadmap; build-vs-buy guidance for each. *Timeline:* typically 2–4 weeks. *Fee:* fixed, agreed upfront. [CONFIRM: fee credited toward an Opus engagement started within 60 days]
- **II. Opus — Build.** Scope set by the Assay. Smallest valuable piece first, then the next. Weekly check-ins. Documentation and team training included. *Timeline:* typically 4–12 weeks.
- **III. Stewardship — Run.** Monthly retainer: monitoring and fixes, ongoing improvements, new automations as needs change, a quarterly results review, and a direct line when something needs attention.
- **Capabilities:** the five from Home, each expanded with 2–3 concrete examples (e.g., portfolio and pipeline reporting; automated weekly updates; data extraction from PDFs and filings; client and partner portals; team AI training, usage policies, and personal AI workflows for leaders).
- **FAQ** — accessible `<details>` elements:
  - *Do we need to replace our software?* Usually not. We start with the tools you already pay for and make them work together.
  - *We're not technical. Is that a problem?* No — that's the point. Systems built to be simple to use, with documentation in plain language.
  - *How do you handle confidential information?* NDA before discovery, least-privilege access, and we build inside your accounts wherever possible. Your confidential data never goes into consumer AI tools.
  - *What does it cost?* The Assay is a fixed fee agreed upfront. Builds are scoped and priced after the Assay, so you know the number before work begins.
  - *How fast will we see results?* We deliver in stages, smallest valuable piece first. The goal is a working system in your hands in weeks, not months.
  - *Do you work with smaller businesses?* Yes. The method scales down; so does the scope.
- Closing CTA (as Home).

### About `/about`
- Label: ABOUT · H1: An old idea, applied to modern work.
- **THE NAME** — In alchemy, Azoth was the name for the universal solvent — the agent of transformation itself. Later esoteric writers read the word as the first and last letters of three ancient alphabets: A and Z, Alpha and Omega, Aleph and Tav. The beginning and the end. / We took the name for both meanings. We transform how work gets done, and we own it from beginning to end.
- **THE APPROACH** — Most firms don't need more software. They need the software they already have to work together — and to work the way their people do. So we start with the work, not the technology: understand it, then build the system around it.
- **FOUNDER** — Azoth & Co. was founded by {FOUNDER_NAME} in Dallas–Fort Worth. [DRAFT — rewrite in my own voice: "I started Azoth & Co. because I kept seeing the same thing: capable people buried in work a system should be doing. My background is in psychology and high-volume sales — understanding what people actually need, and what they'll actually use. Azoth & Co. puts that to work on how firms operate."]
- Optional portrait slot: black-and-white, high contrast. If no photo is supplied, render the mark in its place. Never use stock or placeholder faces.
- Closing CTA.

### Contact `/contact`
- Label: CONTACT · H1: Book a call. · Sub: Fifteen minutes or thirty. No pitch deck. Tell us where the work gets stuck.
- Two bookable calls — Intro call (15 min, `CAL_LINK`) and Discovery call (30 min, `CAL_LINK_DISCOVERY`) — picked with a two-option switch above one Cal.com inline embed: dark theme, gold accent, script loaded on this page only, with a plain-link fallback if JS fails.
- What to expect (numbered 1–3 in mono):
  1. We listen: how work moves today, and where it stalls.
  2. We identify the one or two fixes likely to matter most.
  3. You leave with a clear next step — with us or without us.
- Prefer email? {EMAIL} · Assistants are welcome to schedule on your behalf. · Based in Dallas–Fort Worth. Working with clients nationwide.
- No form fields.

### Client portal `/portal`
- Label: CLIENT PORTAL · H1: Access by invitation.
- Body: Project status, documents, and reports for active engagements — in one secure place. The portal opens to clients soon. Current clients: reach us directly at {EMAIL}.
- No input fields of any kind. The real portal will later live at `portal.azothandco.com` as a separate app with real authentication; the nav link will simply repoint there.

### Privacy `/privacy`
- Short, plain-language placeholder covering the booking tool and email contact. Header note: [DRAFT — review before launch].

### 404
- H1: This page has been rebuilt. · Sub: Or it never existed. · Link: Return home.

## 6. Hard rules
- **No fabricated proof.** No testimonials, client logos, "trusted by" rows, case studies, statistics, team sizes, or years in business. Don't name any prospective client. No empty proof sections waiting to be filled — proof gets added when it's real.
- No contact forms. No login fields.
- **Voice:** confident, plain, short sentences. Never: revolutionize, cutting-edge, unlock, leverage, synergy, game-changer, supercharge, seamless, empower, magic. No emojis, no exclamation marks.
- Never display a street address.

## 7. SEO and sharing
- Unique `<title>` and meta description per page. Home: "Azoth & Co. — Operations, rebuilt." / "AI and operations consulting. We turn manual processes into systems your people actually use — diagnosed, built, and kept running, end to end."
- Open Graph and Twitter tags on every page, plus a 1200×630 `og.png`: obsidian background, gold mark, wordmark, tagline. This is what renders when the link is shared on LinkedIn — it has to look sharp.
- Favicons from the mark: `favicon.svg`, 32px PNG, 180px apple-touch-icon.
- JSON-LD `ProfessionalService`: name, url, email, areaServed "US", founder {FOUNDER_NAME}.

## 8. Quality bar
- Lighthouse ≥95 in all four categories on mobile. Under 10 KB of JS on every page except /contact.
- Semantic HTML, a skip link, visible gold focus rings, full keyboard navigation, alt text, WCAG AA contrast.
- Polished at 360, 768, 1280, and 1600px — no horizontal scroll anywhere.
- Before you finish, review every page as a skeptical creative director at a top studio would. Fix anything that looks like a template.

## 9. Deliverables
1. The complete Astro project; `npm run build` passes clean.
2. `.github/workflows/deploy.yml` for GitHub Pages.
3. `README.md`: run locally, edit copy, change config.
4. `DEPLOY.md`, step by step:
   - Create a **public** repo (GitHub Pages is free for public repos), push, then Settings → Pages → Source: GitHub Actions.
   - Add `azothandco.com` as the custom domain in Pages settings **before** changing DNS. Also verify the domain under GitHub account settings → Pages (TXT record) to prevent domain takeover.
   - In Porkbun DNS: delete Porkbun's default parking records first. Add four A records on the apex — `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (confirm against GitHub's current docs) — plus the AAAA records listed in GitHub's docs, and a CNAME for `www` → `[GITHUB_USERNAME].github.io`.
   - Leave email records (MX, and SPF/DKIM/DMARC TXT) untouched.
   - Turn on "Enforce HTTPS" once the certificate is issued.
5. A **Before launch** checklist listing every [bracketed] placeholder and config value.
