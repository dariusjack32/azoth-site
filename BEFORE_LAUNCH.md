# Before launch

The deploy workflow won't publish until the three items marked **(gate)** pass. Run `npm run check:launch` to see what's left.

## In `src/config.ts`

- [ ] **FOUNDER_NAME** (gate) — your full name.
- [ ] **LEGAL_NAME** (gate) — exactly as it appears on your Certificate of Formation once the Texas SOS approves it, designator included ("LLC" or "L.L.C." as filed).
- [x] **EMAIL** — `denzel@azothandco.com`.
- [ ] **CAL_LINK** (optional, can come after launch) — make a Cal.com account and a 30-minute event (e.g. `intro`), then paste the link, like `https://cal.com/your-handle/intro`.
- [ ] **PRIVACY_REVIEWED** (gate) — read /privacy, edit anything that isn't true for how you work, then set to `true`.
- [ ] **ASSAY_CREDIT_DAYS** — /services promises the Assay fee is credited toward a build started within 60 days. Keep it, change the number, or set `0` to remove the line.
- [ ] **FOUNDER_PHOTO** (optional) — a black-and-white portrait in `public/` (e.g. `/founder.jpg`, 4:5). Empty shows the mark instead.

## Copy only you can sign off

- [ ] **Founder note** (`src/pages/about.astro`) — the quote is a draft. Rewrite it in your own voice.
- [ ] **Principles are promises.** "NDA before discovery," "Your confidential data never goes into consumer AI tools," "Leave anytime with everything we built" — keep only what you'll honor from day one (`src/data/copy.ts`).
- [ ] **Timelines** on /services ("typically 2–4 weeks," "typically 4–12 weeks") — make sure they fit your real schedule.

## Cal.com

- [ ] 30-minute event; availability limited to slots you can genuinely keep.
- [ ] Booking questions: company, role, and "Where does the work get stuck?"
- [ ] Appearance: dark theme, brand color `#B8A06A` (the embed requests this too).
- [ ] Confirmation and reminder emails on — that's what ends "I never filled that out."

## Outside the site

- [ ] Google Workspace live on azothandco.com, with SPF, DKIM and DMARC records at Porkbun.
- [ ] Assumed name: if you market as "Azoth & Co." while the LLC's legal name is longer, Texas likely wants an assumed name certificate (Form 503, $25). Worth confirming once the LLC is approved.

## Then

- [ ] `npm run check:launch` passes.
- [ ] Follow DEPLOY.md.
