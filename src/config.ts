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

/** Cal.com booking links. /contact shows both, Intro first. Empty CAL_LINK shows an email fallback instead. */
export const CAL_LINK = "https://cal.com/azothandco/intro"; // Intro call, 15 min
export const CAL_LINK_DISCOVERY = "https://cal.com/azothandco/discovery"; // Discovery call, 30 min

/** Shown in the footer. Never a street address. */
export const LOCATION = "Dallas–Fort Worth, Texas";

/** Optional black-and-white portrait in /public, e.g. "/founder.jpg". Empty shows the mark instead. */
export const FOUNDER_PHOTO = "";

/** Days within which the Map fee is credited toward a Build. Set to 0 to remove that line. */
export const ASSAY_CREDIT_DAYS = 60;

/**
 * Build fee caps by firm size, shown on /services. The Build is priced from the Blueprint, never above the cap.
 * Owner-led: the cap is the total across Audit, Map and Build. Other tiers: the cap applies after the Map credit.
 * The Retainer is always separate.
 */
export const OWNER_LED_TOTAL_CAP = "$10,000";
export const BUILD_CAPS = [
  { size: "Owner-led business", terms: `${OWNER_LED_TOTAL_CAP} total across Audit, Map and Build` },
  { size: "Small business", terms: "up to $20,000 after the Map credit" },
  { size: "Mid-size firm", terms: "up to $35,000 after the Map credit" },
  { size: "Large firm", terms: "up to $50,000 after the Map credit" },
];

/** Flip to true once you've read and edited /privacy. */
export const PRIVACY_REVIEWED = true;

/**
 * Stripe Payment Links, shown on /pay. Live links only (https://buy.stripe.com/…, never "test_").
 * Leave a link empty to hide that row; the page then points the client to the invoice we email.
 * Builds and Map Extended are never linked here: they're invoiced from the Stripe dashboard.
 */
export const STRIPE_LINK_AUDIT = "https://buy.stripe.com/cNi14p4yO4DXavkdIf0co05"; // Visibility Audit, $2,500
export const STRIPE_LINK_MAP_LIGHT = "https://buy.stripe.com/28EfZjc1g7Q932S33B0co06"; // Map, Light, $6,500
export const STRIPE_LINK_MAP_FULL = "https://buy.stripe.com/eVqaEZ7L03zT7j8fQn0co07"; // Map, Full, $18,000
export const STRIPE_LINK_RETAINER_ESSENTIALS = "https://buy.stripe.com/aFa28t7L0fiBbzo5bJ0co08"; // Visibility Retainer, Essentials, $750/mo
export const STRIPE_LINK_RETAINER_GROWTH = "https://buy.stripe.com/dRm14pc1gc6p5b09rZ0co09"; // Visibility Retainer, Growth, $1,500/mo

/** Public profiles, used as sameAs in structured data so search engines connect them to the site. */
export const SOCIAL_X = "https://x.com/DenzelDaricixm";
export const SOCIAL_LINKEDIN_FOUNDER = "https://www.linkedin.com/in/denzel-yeboah-810ba1445/";

/** Google Analytics 4 measurement ID (property in denzel@azothandco.com's Analytics). Empty removes the tag. */
export const GA_MEASUREMENT_ID = "G-1L41002VFJ";

/** Search engine site-verification tokens, rendered as <meta> tags on every page. Keep them: removing one un-verifies the site. */
export const BING_SITE_VERIFICATION = "80CB41C6CD4B1ED0F912D11DE0996F96";
