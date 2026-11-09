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
  - One deliberate exception: `/arch/`, an unlisted study built only from public sources (noindex, out of the sitemap, not in the nav). Every figure lives in `src/data/arch.ts` with a cited source. Keep it unlisted unless Denzel says otherwise.
  - Same pattern for prospect audits at `/audit/<slug>/` (first: `/audit/skin-gift/`, data in `src/data/skin-gift.ts`): noindex, out of the sitemap, not in the nav, public sources only, every claim cited. Only for prospects Denzel names.
- No contact forms. No login fields. The real portal will be a separate app at portal.azothandco.com.
- Occult elements: only the seven in brief §3; everything else reads as plain, premium business design.
- Hand-written CSS with tokens. No Tailwind, UI kits or component libraries.
- JS: under 10 KB per page except /contact (Cal.com). Keep scripts `is:inline` and tiny.
- Accessibility: WCAG AA, axe-clean, visible gold focus rings, `prefers-reduced-motion` respected.

<!-- harness:begin -->
## Harness rules (enforced by hooks, not by this text)

When `.claude/harness/contract.json` exists you are in a task worktree:
- Read the contract first. Only edit files in `allowed_write`. If the goal needs more, stop and say so; never work around a block.
- "Done" means the contract's `checks` pass when `harness verify` runs them. Your own claim that tests pass is not evidence.
- Before verifying, run the `skeptic` subagent. If it rejects, fix and repeat.
- Then run `harness verify`. Commit only after it prints `status=PASS`, and commit exactly what was verified (`git add -A && git commit`).
- Keep a short progress log in `.claude/progress.md` (done / next / blockers) so a fresh session can resume.
- If the harness blocks you, read the message and adjust. Do not retry the same call.

When a mistake gets corrected, add the lesson as a one-line rule in this file (outside the harness block) so it never repeats.

Planning a new task from the main checkout: draft the contract JSON (goal, allowed_write, checks) to /tmp, then run `harness new <task-id> --contract /tmp/<file>.json`. The human approves that command.
<!-- harness:end -->
