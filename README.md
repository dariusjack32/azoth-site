# Azoth & Co. — website

The marketing site for Azoth & Co.: a static Astro site with hand-written CSS, deployed to GitHub Pages at **azothandco.com**.

**AZOTH_SITE_BRIEF.md** is the design and copy spec — the source of truth for anything you change.

## Run it locally

Needs Node 22.23.4 or newer (Astro 7). Check with `node -v`.

```sh
npm install
npx astro telemetry disable   # optional: stops Astro's anonymous usage reporting on this machine
npm run dev                   # http://localhost:4321
```

| Command | What it does |
|---|---|
| `npm run dev` | Local preview that reloads as you edit |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run check:launch` | Fails until every placeholder in `src/config.ts` is filled |

## Where things live

| To change… | Edit |
|---|---|
| Name, email, booking link, legal name, founder name | `src/config.ts` |
| Page copy | `src/pages/*.astro` |
| Copy shared by Home and Services (stages, capabilities, audiences, principles) | `src/data/copy.ts` |
| Colors, type sizes, spacing | `src/styles/tokens.css` |
| Layout system, buttons, links | `src/styles/global.css` |
| Header, footer, the mark, the hero drawing | `src/components/` |
| Icons and the LinkedIn share image | `public/` |
| The ARCH study at `/arch/` (unlisted) — figures, companies, sources | `src/data/arch.ts`; page in `src/pages/arch/`, charts in `src/components/arch/` |

## Rules this site keeps

- **No contact forms and no login fields.** Booking runs through Cal.com; the portal page says "Access by invitation" until the real portal exists.
- **No fabricated proof.** No testimonials, logos, stats or case studies until they're real and approved by the client.
- **The occult stays a dash** — only the seven touches listed in the brief, §3.
- **Lean JavaScript.** About 2 KB per page today (budget: 10 KB), plus the Cal.com calendar on /contact only.

## Launch and deploy

1. Work through **BEFORE_LAUNCH.md**.
2. Follow **DEPLOY.md** — GitHub repo, Pages, Porkbun DNS, HTTPS.

After that, every push to `main` publishes automatically, and the workflow won't publish while placeholders remain.

## The client portal

GitHub Pages only serves static files, so it can't run sign-ins. When the portal is built it will live at `portal.azothandco.com` as its own app with real authentication, and the "Client login" links will point there.
