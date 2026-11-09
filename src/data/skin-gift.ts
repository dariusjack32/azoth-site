/**
 * Data for /audit/skin-gift/ — a first-look visibility study built only from public search results.
 * Every claim on the page points to a source here. Checked November 8, 2026.
 */

export const CHECKED_LABEL = "November 8, 2026";

export type Source = { id: string; publisher: string; title: string; url: string };

export const sources: Source[] = [
  { id: "carecredit", publisher: "CareCredit", title: "Provider locator: Skin Gift Medical Aesthetics and Wellness", url: "https://www.carecredit.com/doctor-locator/mckinney-tx/skin-gift-medical-aesthetics-and-wellness-831vzw/" },
  { id: "fresha", publisher: "Fresha", title: "Best medspas near me in McKinney", url: "https://www.fresha.com/lp/en/bt/aesthetics/in/us-mckinney" },
  { id: "birdeye", publisher: "Birdeye", title: "Best medical spas in McKinney, TX", url: "https://reviews.birdeye.com/d/medical-spas/mckinney-tx" },
  { id: "alle", publisher: "Allē", title: "Skin product providers in McKinney, TX", url: "https://alle.com/discover/l-mckinney-texas/t-skin" },
  { id: "realself", publisher: "RealSelf", title: "Botox near McKinney, TX", url: "https://www.realself.com/find/Texas/Mckinney/Botox" },
  { id: "lantern", publisher: "Lantern", title: "Best wellness & med spas in McKinney, Texas", url: "https://lantern.llc/tx/mckinney/wellness-health/wellness-med-spas" },
  { id: "injectco", publisher: "InjectCo", title: "Best med spas in McKinney TX (2026)", url: "https://injectco.com/best-med-spas-mckinney-tx/" },
  { id: "threebest", publisher: "ThreeBestRated", title: "3 best med spas in McKinney, TX", url: "https://threebestrated.com/med-spa-in-mckinney-tx" },
  { id: "buoy", publisher: "Buoy Health", title: "Best med spas in McKinney", url: "https://www.buoyhealth.com/providers/Medical%20Spa/TX/McKinney" },
  { id: "trustanalytica", publisher: "TrustAnalytica", title: "Best Botox clinics in McKinney", url: "https://trustanalytica.org/us/tx/mckinney/best-botox-clinics" },
  { id: "harmony", publisher: "Aesthetic Harmony", title: "Aesthetic Harmony McKinney (home page)", url: "https://www.myaestheticharmony.com/" },
  { id: "lantern-elite", publisher: "Lantern", title: "Elite Derma Med Spa profile", url: "https://lantern.llc/b/elite-derma-med-spa-mckinney/book" },
  { id: "yobi-beaux", publisher: "Yobi", title: "BeauxMD Medical Aesthetics profile", url: "https://local.yobi.com/medspa/beauxmd-medical-aesthetics-mckinney-tx/" },
];

/** The pages a McKinney patient reaches when searching "best med spa McKinney" or "Botox McKinney". */
export const pagesChecked: { source: string; shows: string; skinGift: boolean }[] = [
  { source: "fresha", shows: "Elite Derma, Aesthetic Harmony, VIO Med Spa, Venus Medical Aesthetics", skinGift: false },
  { source: "birdeye", shows: "42 McKinney med spas, including KaelenJ, Natural GLOW Rx and Elite Derma", skinGift: false },
  { source: "alle", shows: "42 providers, including BeauxMD, Setty, Haute Beauty, Hartwater", skinGift: false },
  { source: "realself", shows: "446 Botox providers in the area", skinGift: false },
  { source: "lantern", shows: "AI-ready profiles for Elite Derma, BeauxMD and Element", skinGift: false },
  { source: "injectco", shows: "A 2026 roundup: Starwood, Elite Derma, Hartwater, VIO", skinGift: false },
  { source: "threebest", shows: "Glow MedSpa, SKIN Med Spa & Laser", skinGift: false },
  { source: "buoy", shows: "RejuvedermMD, Aneva Skin, Aesthetic Harmony, SKIN Med Spa", skinGift: false },
  { source: "trustanalytica", shows: "Venus, L’Amour, Aesthetic Harmony, with Botox price ranges", skinGift: false },
];

export const findings = [
  {
    n: "01",
    title: "Patients searching for a med spa in McKinney do not find Skin Gift.",
    text: "We checked the nine directory and roundup pages that came back for “best med spa McKinney” and “Botox McKinney.” Skin Gift is on none of them. Competitors appear on several each.",
    refs: ["fresha", "birdeye", "alle", "realself", "lantern", "injectco", "threebest", "buoy", "trustanalytica"],
  },
  {
    n: "02",
    title: "A competitor in your own building is on three of them.",
    text: "Aesthetic Harmony, at 3900 S Stonebridge, Suite 1403, appears on Fresha, Buoy and TrustAnalytica. Skin Gift, at Suite 1001, does not appear. Same address, same patients, different outcome.",
    refs: ["harmony", "fresha", "buoy", "trustanalytica", "carecredit"],
  },
  {
    n: "03",
    title: "The business goes by three names.",
    text: "“Skin Gift Medical Aesthetics and Wellness” on CareCredit, “Skin Gift Medical Aesthetics” in conversation, and skingiftaesthetics.com on the web. Google and AI tools match a business by its name across sources. Three versions read as three weaker businesses.",
    refs: ["carecredit"],
  },
  {
    n: "04",
    title: "Reviews are where the gap is widest.",
    text: "Nearby practices show their counts on these pages: BeauxMD 252 Google reviews, Elite Derma 129. No review count for Skin Gift surfaced anywhere we looked. Patients compare stars before they compare prices.",
    refs: ["yobi-beaux", "lantern-elite"],
  },
  {
    n: "05",
    title: "AI answers are built from these same pages.",
    text: "When someone asks ChatGPT or Google’s AI for a med spa in McKinney, it recommends businesses it can confirm across directories like these. Lantern labels its profiles as written for AI. A business missing from the sources is rarely named in the answer.",
    refs: ["lantern", "lantern-elite"],
  },
];

export const first30 = [
  "One name, one address, one phone, everywhere. Pick the exact name and make every listing match it.",
  "Claim the free profiles patients already use: Fresha, Birdeye, RealSelf, Allē, Lantern. Each one is also a source for AI answers.",
  "A page for each service people search for: Botox, fillers, facials, each with McKinney in the title.",
  "A review routine: every happy patient gets one short text with your Google link, the same day.",
  "Google Business Profile: correct categories, every service listed, weekly photos and posts.",
];
