# Azoth & Co. site

Static Astro 7 site, deployed to GitHub Pages at azothandco.com. Design and copy source of truth: `AZOTH_SITE_BRIEF.md`.

## Commands

- `npm run dev` (localhost:4321) · `npm run build` · `npm run preview` · `npm run check:launch`
- Run `npm run build` before calling any change done.

## Where things go

- Business constants only in `src/config.ts` — never hardcode the email, links or names elsewhere.
- Shared copy in `src/data/copy.ts`; page copy in `src/pages/*.astro`.
- Tokens in `src/styles/tokens.css`; layout system in `src/styles/global.css`; component styles stay scoped.

## Rules

- Voice: confident, plain, short sentences. Never: revolutionize, cutting-edge, unlock, leverage, synergy, game-changer, supercharge, seamless, empower, magic. No emojis or exclamation marks.
- No fabricated proof (testimonials, logos, stats, case studies, team size, years in business). Never name a prospective client.
- No contact forms. No login fields. The real portal will be a separate app at portal.azothandco.com.
- Occult elements: only the seven in brief §3; everything else reads as plain, premium business design.
- Hand-written CSS with tokens. No Tailwind, UI kits or component libraries.
- JS: under 10 KB per page except /contact (Cal.com). Keep scripts `is:inline` and tiny.
- Accessibility: WCAG AA, axe-clean, visible gold focus rings, `prefers-reduced-motion` respected.
