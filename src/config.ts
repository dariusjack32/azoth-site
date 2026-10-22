/**
 * Azoth & Co. — every business constant lives here.
 * Pages and components import from this file; nothing is hardcoded twice.
 *
 * Before launch, fill everything marked [like this] and run `npm run check:launch`.
 * The deploy workflow runs the same check and refuses to publish until it passes.
 */

/** The live domain. astro.config.mjs reads it for canonical URLs and the sitemap. */
export const SITE_URL = "https://azothandco.com";

/** Brand name as it appears in copy and search results. */
export const BRAND = "Azoth & Co.";

/** Exact legal name from your Certificate of Formation (once the Texas SOS approves it). */
export const LEGAL_NAME = "Azoth & Co. Consulting LLC";

/** Your full name, as it should appear on the About page and in search data. */
export const FOUNDER_NAME = "Denzel Yeboah";

/** Public contact address. Create it first (e.g. a free hello@ alias in Google Workspace) or change it. */
export const EMAIL = "denzel@azothandco.com";

/** Your Cal.com booking link, e.g. "https://cal.com/your-handle/intro". Optional: empty shows an email fallback on /contact. */
export const CAL_LINK = "https://cal.com/azoth-co.-consulting-llc-gthbtk/30min";

/** Shown in the footer. Never a street address. */
export const LOCATION = "Dallas–Fort Worth, Texas";

/** Optional black-and-white portrait in /public, e.g. "/founder.jpg". Empty shows the mark instead. */
export const FOUNDER_PHOTO = "";

/** Days within which the Assay fee is credited toward an Opus build. Set to 0 to remove that line. */
export const ASSAY_CREDIT_DAYS = 60;

/** Flip to true once you've read and edited /privacy. */
export const PRIVACY_REVIEWED = true;
