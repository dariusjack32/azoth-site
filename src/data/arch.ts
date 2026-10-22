/**
 * ARCH Venture Partners — the public record, as used by /arch/ (an unlisted study page).
 *
 * Every figure on that page comes from this file, and every entry here points at a source below.
 * Public sources only. Retrieved and checked October 22, 2026.
 * To update: change the entry, change or add its source, bump AS_OF, run `npm run build`.
 */

export const AS_OF = "2026-10-22";
export const AS_OF_LABEL = "October 22, 2026";

/* ---------------------------------------------------------------- Sources */

export type Source = {
  id: string;
  publisher: string;
  title: string;
  /** ISO date, a partial date ("2019-05"), or "" when the page carries no reliable date. */
  date: string;
  url: string;
};

/** Ordered by first use on the page, so footnote numbers read in sequence. */
export const sources: Source[] = [
  { id: "portfolio", publisher: "ARCH Venture Partners", title: "Portfolio (company list, retrieved October 22, 2026)", date: "2026-10-22", url: "https://www.archventure.com/portfolio/" },
  { id: "fund7", publisher: "Fierce Biotech (ARCH press release)", title: "ARCH Venture Partners Closes $400 Million Seventh Fund", date: "2007-12-13", url: "https://www.fiercebiotech.com/biotech/press-release-arch-venture-partners-closes-400-million-seventh-fund" },
  { id: "news", publisher: "ARCH Venture Partners", title: "News (retrieved October 22, 2026)", date: "2026-10-22", url: "https://www.archventure.com/news/" },
  { id: "gv2014", publisher: "Global University Venturing", title: "ARCH raises eighth fund", date: "2014-04-28", url: "https://globalventuring.com/university/arch-raises-eighth-fund/" },
  { id: "fund4", publisher: "Buyouts / Private Equity International", title: "ARCH IV Wraps on $175 Million", date: "1999-06-14", url: "https://www.privateequityinternational.com/arch-iv-wraps-on-175-million/" },
  { id: "fund5", publisher: "BioCentury", title: "ARCH Venture Partners closes fund", date: "2001-07-06", url: "https://www.biocentury.com/article/53796/arch-venture-partners-closes-fund" },
  { id: "fund6", publisher: "Private Equity International", title: "ARCH Venture closes $350m Fund VI", date: "", url: "https://www.privateequityinternational.com/arch-venture-closes-350m-fund-vi/" },
  { id: "fund6pb", publisher: "PitchBook", title: "ARCH Venture Fund VI overview (vintage 2003, $350M)", date: "", url: "https://pitchbook.com/profiles/fund/10999-54F" },
  { id: "arch2020", publisher: "ARCH Venture Partners", title: "ARCH Venture Partners Announces $1.46 Billion Raised in Two New Funds", date: "2020-04-02", url: "https://www.archventure.com/arch-venture-partners-announces-1-46-billion-raised-in-two-new-funds-to-invest-in-transformative-biotechnology-companies/" },
  { id: "arch2021", publisher: "ARCH Venture Partners", title: "ARCH Venture Partners Announces New $1.85 Billion Fund", date: "2021-01-28", url: "https://www.archventure.com/?p=1972" },
  { id: "arch2022", publisher: "ARCH Venture Partners", title: "ARCH Venture Partners Announces $2.975 Billion Fund XII", date: "2022-06-29", url: "https://www.archventure.com/?p=2481" },
  { id: "arch2024", publisher: "ARCH Venture Partners", title: "ARCH Venture Partners Announces New Fund to Create the Next Generation of Biotech Companies", date: "2024-09-26", url: "https://www.archventure.com/?p=3224" },
  { id: "fund14", publisher: "Endpoints News", title: "ARCH Venture Partners targets $3B raise for latest fund", date: "2026-08-31", url: "https://endpoints.news/arch-venture-partners-targets-3-billion-raise-for-latest-fund/" },
  { id: "fund14b", publisher: "Dakota", title: "Top 10 Funds to Watch: September 2026", date: "2026-09-03", url: "https://www.dakota.com/resources/blog/top-10-funds-to-watch-september-2026" },
  { id: "kythera", publisher: "KYTHERA Biopharmaceuticals (SEC Form 8-K)", title: "Allergan to Acquire KYTHERA Biopharmaceuticals", date: "2015-06-17", url: "https://www.sec.gov/Archives/edgar/data/0001436304/000110465915045812/a15-14075_1ex99d1.htm" },
  { id: "receptos", publisher: "Receptos (SEC Form 8-K)", title: "Celgene to Acquire Receptos", date: "2015-07-14", url: "https://www.sec.gov/Archives/edgar/data/0001463729/000119312515252504/d90640dex991.htm" },
  { id: "juno", publisher: "Juno Therapeutics (SEC Form 8-K)", title: "Celgene Corporation to Acquire Juno Therapeutics", date: "2018-01-22", url: "https://www.sec.gov/Archives/edgar/data/0001594864/000119312518015255/d531432dex991.htm" },
  { id: "just", publisher: "BioPharma Dive", title: "Evotec to buy Just Biotherapeutics for up to $90M", date: "2019-05-23", url: "https://www.biopharmadive.com/news/evotec-to-buy-just-biotherapeutics-for-up-to-90m/555465/" },
  { id: "semma", publisher: "Vertex Pharmaceuticals", title: "Vertex to Acquire Semma Therapeutics", date: "2019-09-03", url: "https://investors.vrtx.com/node/26391" },
  { id: "grail", publisher: "Illumina (SEC Form 8-K)", title: "Illumina to Acquire GRAIL", date: "2020-09-21", url: "https://www.sec.gov/Archives/edgar/data/1110803/000095015720001121/ex99-1.htm" },
  { id: "omniome", publisher: "Pacific Biosciences", title: "Pacific Biosciences Signs Definitive Agreement to Acquire Omniome", date: "2021-07-20", url: "https://www.pacb.com/press_releases/pacific-biosciences-signs-definitive-agreement-to-acquire-omniome/" },
  { id: "vividion", publisher: "Bayer", title: "Bayer strengthens drug discovery platform through acquisition of Vividion Therapeutics", date: "2021-08-05", url: "https://www.bayer.com/media/en-us/bayer-strengthens-drug-discovery-platform-through-acquisition-of-vividion-therapeutics/" },
  { id: "eqrx", publisher: "Revolution Medicines", title: "Revolution Medicines to Acquire EQRx in All-Stock Transaction", date: "2023-08-01", url: "https://ir.revmed.com/news-releases/news-release-details/revolution-medicines-inc-acquire-eqrx-inc-all-stock-transaction" },
  { id: "karuna", publisher: "Bristol Myers Squibb (SEC Form 8-K)", title: "Bristol Myers Squibb Strengthens Neuroscience Portfolio with Acquisition of Karuna Therapeutics", date: "2023-12-22", url: "https://www.sec.gov/Archives/edgar/data/14272/000114036123059159/ef20017313_ex99-1.htm" },
  { id: "hibio", publisher: "Biogen", title: "Biogen Agrees to Acquire Human Immunology Biosciences", date: "2024-05-22", url: "https://investors.biogen.com/node/28001" },
  { id: "singular", publisher: "Singular Genomics", title: "Singular Genomics Announces Closing of Acquisition by Deerfield Management", date: "2025-02-21", url: "https://www.biospace.com/press-releases/singular-genomics-announces-closing-of-acquisition-by-deerfield-management" },
  { id: "verve", publisher: "Verve Therapeutics (SEC Form 8-K)", title: "Lilly to Acquire Verve Therapeutics", date: "2025-06-17", url: "https://www.sec.gov/Archives/edgar/data/1840574/000119312525141748/d30505dex991.htm" },
  { id: "unity", publisher: "Unity Biotechnology (SEC Form 8-K)", title: "Dissolution effective; Nasdaq delisting effective August 16, 2025", date: "2025-09-26", url: "https://www.sec.gov/Archives/edgar/data/1463361/000119312525220778/d190494d8k.htm" },
  { id: "create", publisher: "Fierce Pharma", title: "Myeloid Therapeutics creates new identity after pipeline outgrows its name", date: "2025-10-06", url: "https://www.fiercepharma.com/marketing/myeloid-therapeutics-creates-new-identity-after-pipeline-outgrows-its-name" },
  { id: "orbital", publisher: "Endpoints News", title: "Bristol Myers joins in vivo CAR-T race with $1.5B Orbital acquisition", date: "2025-10-10", url: "https://endpoints.news/bristol-myers-joins-in-vivo-car-t-race-with-1-5b-orbital-acquisition/" },
  { id: "metsera", publisher: "Endpoints News", title: "Pfizer closes up to $10B deal for obesity biotech Metsera", date: "2025-11-13", url: "https://endpoints.news/pfizer-closes-up-to-10b-deal-with-obesity-biotech-metsera/" },
  { id: "qci", publisher: "D-Wave Quantum (SEC Form 8-K)", title: "D-Wave Announces Agreement to Acquire Quantum Circuits", date: "2026-01-07", url: "https://www.sec.gov/Archives/edgar/data/1907982/000190798226000010/d-waveannouncesagreementto.htm" },
  { id: "generate", publisher: "Generate Biomedicines", title: "Generate Biomedicines Announces Pricing of Initial Public Offering", date: "2026-02-26", url: "https://generatebiomedicines.com/media-center/generate-biomedicines-inc-announces-pricing-of-initial-public-offering" },
  { id: "seaport", publisher: "Seaport Therapeutics", title: "Seaport Therapeutics Announces Pricing of Upsized Initial Public Offering", date: "2026-05-01", url: "https://www.biospace.com/press-releases/seaport-therapeutics-announces-pricing-of-upsized-initial-public-offering" },
  { id: "vaccineco", publisher: "Pulse 2.0", title: "Lilly To Buy Vaccine Company For Up To $1.55 Billion", date: "2026-05-27", url: "https://pulse2.com/lilly-to-buy-vaccine-company-for-up-to-1-55-billion/" },
  { id: "vaccineco2", publisher: "Goodwin", title: "Eli Lilly Expands Vaccine Portfolio by Acquiring Three Developers", date: "2026-05-28", url: "https://www.goodwinlaw.com/en/insights/blogs/2026/05/eli-lilly-expands-vaccine-portfolio-by-acquiring-three-developers" },
  { id: "parabilis", publisher: "Parabilis Medicines", title: "Parabilis Medicines Announces Pricing of Upsized Initial Public Offering", date: "2026-06-09", url: "https://www.biospace.com/press-releases/parabilis-medicines-announces-pricing-of-upsized-initial-public-offering" },
  { id: "kardigan", publisher: "Goodwin", title: "Goodwin Advises Kardigan on Closing of $460 Million Upsized IPO", date: "2026-06-22", url: "https://www.goodwinlaw.com/en/news-and-events/news/2026/06/announcements-lifesciences-goodwin-advises-kardigan-closing-460-million-upsized-ipo" },
  { id: "lifemine", publisher: "Fierce Biotech", title: "How LifeMine won over Gates and Bezos for $188M series E", date: "2026-08-06", url: "https://www.fiercebiotech.com/biotech/lifemines-frozen-platform-thawed-263m-fundraise-backed-gates-and-bezos" },
  { id: "encoded", publisher: "Fierce Biotech", title: "GV-backed Encoded gains $275M to advance Dravet drug, scale genetic med manufacturing", date: "2026-09-09", url: "https://fiercebiotech.com/biotech/encoded-executes-275m-raise-advance-dravet-syndrome-asset-and-scale-manufacturing" },
  { id: "moonwalk", publisher: "Moonwalk Biosciences (press release)", title: "Moonwalk Biosciences Announces $70 Million Series B", date: "2026-09-09", url: "https://www.aap.com.au/aapreleases/cision20260909ae43727/" },
  { id: "scholar", publisher: "Scholar Rock (press release)", title: "Scholar Rock Announces FDA Approval of ISEMBYLD (apitegromab-mstn) for SMA", date: "2026-09-11", url: "https://finviz.com/news/391334/scholar-rock-announces-fda-approval-of-isembyld-apitegromab-mstn-the-first-and-only-muscle-targeted-treatment-for-children-and-adults-with-spinal-muscular-atrophy-sma" },
  { id: "gossamer", publisher: "MiniChart", title: "Gossamer Bio Submits First NDA to FDA for PAH Treatment Seralutinib", date: "2026-09-23", url: "https://www.minichart.com.sg/2026/09/23/gossamer-bio-submits-first-nda-to-fda-for-pah-treatment-seralutinib/" },
  { id: "souffle", publisher: "Startup Researcher", title: "Soufflé Therapeutics Closes Oversubscribed US$135 Million Series B Financing", date: "2026-10-13", url: "https://www.startupresearcher.com/news/souffle-therapeutics-closes-oversubscribed-usd135-million-series-b-financing" },
];

const sourceIndex = new Map(sources.map((s, i) => [s.id, i + 1]));

/** Footnote number for a source id. Throws at build time if an id is missing, so a bad citation can't ship. */
export function refNo(id: string): number {
  const n = sourceIndex.get(id);
  if (!n) throw new Error(`arch.ts: unknown source id "${id}"`);
  return n;
}

/* ---------------------------------------------------------------- Firm */

export const firm = {
  founded: 1986,
  foundedSrc: "fund7",
  listCount: 128,
  listSrc: "portfolio",
};

/* ---------------------------------------------------------------- Funds */

export type Fund = {
  numeral: string;
  year: number | null;
  /** Committed capital in $ millions, as announced. Null when no reliable public figure exists. */
  sizeM: number | null;
  /** How the size is shown, e.g. "$3B+" or "$560M". */
  label: string;
  kind: "closed" | "target" | "unknown";
  note?: string;
  src: string[];
};

export const funds: Fund[] = [
  { numeral: "I", year: 1989, sizeM: 9, label: "$9M", kind: "closed", src: ["gv2014"] },
  { numeral: "II", year: null, sizeM: null, label: "—", kind: "unknown", note: "No reliable public figure", src: [] },
  { numeral: "III", year: null, sizeM: null, label: "—", kind: "unknown", note: "No reliable public figure", src: [] },
  { numeral: "IV", year: 1999, sizeM: 175, label: "$175M", kind: "closed", src: ["fund4"] },
  { numeral: "V", year: 2001, sizeM: 380, label: "$380M", kind: "closed", src: ["fund5"] },
  { numeral: "VI", year: 2004, sizeM: 350, label: "$350M", kind: "closed", note: "PitchBook gives a 2003 vintage", src: ["fund6", "fund6pb"] },
  { numeral: "VII", year: 2007, sizeM: 400, label: "$400M", kind: "closed", src: ["fund7"] },
  { numeral: "VIII", year: 2014, sizeM: 560, label: "$560M", kind: "closed", note: "With its overage fund", src: ["arch2020"] },
  { numeral: "IX", year: 2016, sizeM: 1100, label: "$1.1B", kind: "closed", note: "With its overage fund", src: ["arch2020"] },
  { numeral: "X", year: 2020, sizeM: 1460, label: "$1.46B", kind: "closed", note: "With its overage fund", src: ["arch2020"] },
  { numeral: "XI", year: 2021, sizeM: 1941, label: "$1.94B", kind: "closed", note: "Announced in January 2021 at over $1.85B", src: ["arch2022", "arch2021"] },
  { numeral: "XII", year: 2022, sizeM: 2975, label: "$2.975B", kind: "closed", src: ["arch2022"] },
  { numeral: "XIII", year: 2024, sizeM: 3000, label: "$3B+", kind: "closed", note: "Announced as more than $3 billion", src: ["arch2024"] },
  { numeral: "XIV", year: 2026, sizeM: 3000, label: "$3B target", kind: "target", note: "Form D, August 2026", src: ["fund14", "fund14b"] },
];

const closedFunds = funds.filter((f) => f.kind === "closed" && f.sizeM !== null);
/** Sum of every closed fund with a published size, in $ millions. Fund XIII counts at its $3B floor. */
export const raisedM = closedFunds.reduce((sum, f) => sum + (f.sizeM ?? 0), 0);
export const raisedFundCount = closedFunds.length;

/* ---------------------------------------------------------------- Companies */

export type AreaId = "genetic" | "tools" | "onc" | "cardio" | "ai" | "other" | "cell" | "neuro" | "immuno" | "care";

/** Ordered by size, largest first; counts below are computed, not typed. */
export const areas: { id: AreaId; name: string }[] = [
  { id: "genetic", name: "Genetic & RNA medicine" },
  { id: "tools", name: "Tools, diagnostics & sequencing" },
  { id: "onc", name: "Oncology" },
  { id: "cardio", name: "Cardiometabolic, renal & rare" },
  { id: "ai", name: "AI & discovery platforms" },
  { id: "other", name: "Aging, infection & other" },
  { id: "cell", name: "Cell & immune engineering" },
  { id: "neuro", name: "Neuroscience" },
  { id: "immuno", name: "Immunology & inflammation" },
  { id: "care", name: "Care delivery & health services" },
];

export type Status = "public" | "private" | "acquired" | "closed";

export type Company = {
  name: string;
  area: AreaId;
  /** Primary city from ARCH's listing — the first one where two are given; "" when the list gives none. */
  city: string;
  /** Our one-line description, written from the company's listing. */
  what: string;
  status: Status;
  /** Public listing, e.g. "Nasdaq: GENB". */
  ticker?: string;
  /** For acquired companies: the buyer and the year the deal was announced. */
  exit?: string;
  /** True when the company appears on ARCH's published list. */
  listed: boolean;
  /** Set when a newer public source changes what the published list shows. */
  change?: { was: string; now: string; date: string; src: string };
  src: string[];
};

type Row = [name: string, area: AreaId, city: string, what: string, status?: Status, detail?: string];

// Order and city follow ARCH's published list. Status as listed unless a `change` entry below overrides it.
const rows: Row[] = [
  ["908 Devices", "tools", "Boston, MA", "Point-of-need chemical analysis devices", "public", "Nasdaq: MASS"],
  ["Accompany Health", "care", "Bethesda, MD", "Home-based care for underserved communities"],
  ["Aera Therapeutics", "genetic", "Cambridge, MA", "Protein nanoparticles that deliver genetic medicines"],
  ["Agios Pharmaceuticals", "cardio", "Cambridge, MA", "Cellular-metabolism medicines", "public", "Nasdaq: AGIO"],
  ["AIRNA", "genetic", "", "RNA editing with the body’s own enzymes"],
  ["Akamis Bio", "onc", "Abingdon, UK", "Systemically delivered immuno-oncology"],
  ["Aledade", "care", "Bethesda, MD", "Accountable care for independent practices"],
  ["Alnylam Pharmaceuticals", "genetic", "Cambridge, MA", "RNA interference medicines", "public", "Nasdaq: ALNY"],
  ["Altos Labs", "other", "San Diego, CA", "Cell rejuvenation and resilience"],
  ["Arbor Biotechnologies", "genetic", "Cambridge, MA", "Gene editing built from protein discovery"],
  ["Areteia Therapeutics", "immuno", "Chapel Hill, NC", "Oral therapy for eosinophilic asthma"],
  ["Arsenal Biosciences", "cell", "South San Francisco, CA", "Programmable cell therapies for cancer"],
  ["Aspen Neuroscience", "neuro", "San Diego, CA", "Cell replacement for Parkinson’s disease"],
  ["Autobahn Therapeutics", "neuro", "San Diego, CA", "Brain-targeted thyromimetics"],
  ["Basking Biosciences", "cardio", "Columbus, OH", "Reversible clot-busting therapy for stroke"],
  ["BE Biopharma", "cell", "Cambridge, MA", "Engineered B-cell medicines"],
  ["Beam Therapeutics", "genetic", "Cambridge, MA", "Base editing", "public", "Nasdaq: BEAM"],
  ["Bit Bio", "cell", "Cambridge, UK", "Stem cells reprogrammed into any cell type"],
  ["Bitterroot Bio", "cardio", "Palo Alto, CA", "Cardiovascular disease therapies"],
  ["Boundless Bio", "onc", "San Diego, CA", "Cancer medicines aimed at extrachromosomal DNA", "public", "Nasdaq: BOLD"],
  ["Brii Biosciences", "other", "Shanghai, China", "Medicines for China’s public health", "public", "HKEX: 2137"],
  ["Carrick Therapeutics", "onc", "Boston, MA", "Cancer therapeutics"],
  ["City Therapeutics", "genetic", "Cambridge, MA", "Next-generation siRNA medicines"],
  ["CStone Pharmaceuticals", "onc", "Suzhou, China", "Oncology medicines for China", "public", "HKEX: 2616"],
  ["Curie Bio", "other", "Boston, MA", "Company-building support for biotech founders"],
  ["Cytrellis Biosystems", "other", "Woburn, MA", "Aesthetic medicine"],
  ["Denali Therapeutics", "neuro", "San Francisco, CA", "Medicines for neurodegeneration", "public", "Nasdaq: DNLI"],
  ["Dewpoint Therapeutics", "ai", "Boston, MA", "Drug discovery on biomolecular condensates"],
  ["Dispatch Biotherapeutics", "onc", "Philadelphia, PA", "Immunotherapy for solid tumors"],
  ["eGenesis", "genetic", "Cambridge, MA", "Gene-edited organs for transplant"],
  ["Elephas Biosciences", "tools", "Madison, WI", "Diagnostics that predict cancer-treatment response"],
  ["Encoded Therapeutics", "genetic", "South San Francisco, CA", "Precision gene therapies"],
  ["Encodia", "tools", "San Diego, CA", "Protein analysis platform"],
  ["Enumerix", "tools", "Palo Alto, CA", "Precision DNA counting"],
  ["EQRx", "other", "Cambridge, MA", "A new model for drug development and pricing", "acquired", "Revolution Medicines, 2023"],
  ["Erasca", "onc", "San Diego, CA", "Cancer medicines on the RAS/MAPK pathway", "public", "Nasdaq: ERAS"],
  ["Faraday Pharmaceuticals", "cardio", "Seattle, WA", "Therapies for ischemic injury"],
  ["Gate Bioscience", "ai", "Brisbane, CA", "Small molecules against disease-causing proteins"],
  ["Generate Biomedicines", "ai", "Cambridge, MA", "AI-designed protein therapeutics"],
  ["Gossamer Bio", "cardio", "San Diego, CA", "Pulmonary arterial hypertension", "public", "Nasdaq: GOSS"],
  ["Grail", "tools", "Menlo Park, CA", "Early cancer detection", "acquired", "Illumina, 2020"],
  ["hC Bioscience", "genetic", "Boston, MA", "tRNA-based medicines"],
  ["HiberCell", "onc", "New York, NY", "Preventing cancer relapse and metastasis"],
  ["Homeward Health", "care", "San Francisco, CA", "Rural care, virtual and in person"],
  ["Hua Medicine", "cardio", "Shanghai, China", "Diabetes medicines", "public", "HKEX: 2552"],
  ["Human Immunology Biosciences", "immuno", "San Francisco, CA", "Precision immunology", "acquired", "Biogen, 2024"],
  ["Illumina", "tools", "Santa Clara, CA", "DNA sequencing", "public", "Nasdaq: ILMN"],
  ["Inograft Biotherapeutics", "immuno", "Palo Alto, CA", "Immune suppression for transplants"],
  ["Insitro", "ai", "South San Francisco, CA", "Machine learning for drug discovery"],
  ["Jaguar Gene Therapy", "genetic", "Lake Forest, IL", "Gene therapy for severe genetic disease"],
  ["Juno Therapeutics", "cell", "Seattle, WA", "CAR-T cancer immunotherapy", "acquired", "Celgene, 2018"],
  ["JUST Biotherapeutics", "other", "Seattle, WA", "Biologics design and manufacturing", "acquired", "Evotec, 2019"],
  ["JW Therapeutics", "cell", "Shanghai, China", "Cell therapy for cancer", "public", "HKEX: 2126"],
  ["Kardigan", "cardio", "South San Francisco, CA", "Cardiovascular precision medicines"],
  ["Karuna Therapeutics", "neuro", "Boston, MA", "Neuropsychiatric medicines", "acquired", "Bristol Myers Squibb, 2023"],
  ["KSQ Therapeutics", "onc", "Cambridge, MA", "Genome-scale target discovery"],
  ["Kura Oncology", "onc", "San Diego, CA", "Precision oncology", "public", "Nasdaq: KURA"],
  ["Kythera Biopharmaceuticals", "other", "Parsippany, NJ", "Aesthetic medicine", "acquired", "Allergan, 2015"],
  ["LifeMine Therapeutics", "ai", "Cambridge, MA", "Medicines mined from fungal genomes"],
  ["Lifordi Immunotherapeutics", "immuno", "Boston, MA", "Antibody-drug conjugates for autoimmunity"],
  ["Lightcast Discovery", "tools", "Cambridge, UK", "Single-cell microfluidics"],
  ["Lilac Therapeutics", "cardio", "Richmond, CA", "Small molecules for kidney stones"],
  ["Lyell Immunopharma", "cell", "San Francisco, CA", "Cell therapy for cancer", "public", "Nasdaq: LYEL"],
  ["Magnet Biomedicine", "ai", "Cambridge, MA", "Molecular-glue discovery"],
  ["Matter Neuroscience", "care", "", "App linking personal experience and neuroscience"],
  ["Maze Therapeutics", "cardio", "San Francisco, CA", "Medicines from genetic modifiers of disease", "public", "Nasdaq: MAZE"],
  ["Metsera", "cardio", "Boston, MA", "Obesity and metabolic medicines", "acquired", "Pfizer, 2025"],
  ["Mirador Therapeutics", "immuno", "San Diego, CA", "Precision immunology and inflammation"],
  ["Moleculent", "tools", "Stockholm, Sweden", "Mapping cell-to-cell communication"],
  ["Moonwalk Biosciences", "genetic", "South San Francisco, CA", "Epigenetic editing"],
  ["Mozart Therapeutics", "immuno", "Seattle, WA", "Autoimmune disease therapies"],
  ["Create Medicines", "cell", "Cambridge, MA", "In vivo immune programming with RNA"],
  ["National Resilience", "other", "La Jolla, CA", "Biomanufacturing"],
  ["nChroma Bio", "genetic", "Cambridge, MA", "In vivo delivery for genetic medicine"],
  ["Neumora Therapeutics", "neuro", "Watertown, MA", "Precision medicines for brain disease", "public", "Nasdaq: NMRA"],
  ["Nutcracker Therapeutics", "genetic", "Emeryville, CA", "RNA medicine manufacturing"],
  ["Omniome", "tools", "San Diego, CA", "DNA sequencing chemistry", "acquired", "Pacific Biosciences, 2021"],
  ["OneBioMed", "tools", "Singapore", "Nucleic-acid prep instruments"],
  ["ONI", "tools", "Oxford, UK", "Benchtop super-resolution microscopy"],
  ["Orbital Therapeutics", "genetic", "Cambridge, MA", "Circular RNA medicines", "acquired", "Bristol Myers Squibb, 2025"],
  ["Parabilis Medicines", "onc", "Cambridge, MA", "Drugs for hard-to-drug targets"],
  ["Paradigm Health", "care", "New York, NY", "Clinical-trial access and operations"],
  ["Paratus Sciences", "other", "New York, NY", "Medicines from bat biology"],
  ["Pheast Therapeutics", "onc", "Palo Alto, CA", "Immuno-oncology for resistant cancers"],
  ["Pretzel Therapeutics", "cardio", "Waltham, MA", "Mitochondrial disease"],
  ["Prime Medicine", "genetic", "Cambridge, MA", "Prime editing", "public", "Nasdaq: PRME"],
  ["Protillion Biosciences", "ai", "Burlingame, CA", "Antibody discovery and optimization"],
  ["Qihan Biotech", "cell", "Hangzhou, China", "Cells and organs that evade immune attack"],
  ["Quanterix", "tools", "Lexington, MA", "Ultrasensitive protein detection", "public", "Nasdaq: QTRX"],
  ["Quantum Circuits", "other", "New Haven, CT", "Error-corrected quantum computers"],
  ["Rapport Therapeutics", "neuro", "Boston, MA", "Precision neuromedicines", "public", "Nasdaq: RAPP"],
  ["Reactive Biosciences", "ai", "Durham, NC", "Boron-based medicines"],
  ["Receptos", "immuno", "Summit, NJ", "Immunology medicines", "acquired", "Celgene, 2015"],
  ["Recuro Health", "care", "Dallas, TX", "Digital health platform"],
  ["Remix Therapeutics", "genetic", "Watertown, MA", "Small molecules that reprogram RNA processing"],
  ["RhyGaze", "genetic", "Basel, Switzerland", "Optogenetics to restore vision"],
  ["RIPPL Care", "care", "Seattle, WA", "Mental health care for seniors with dementia"],
  ["ROME Therapeutics", "genetic", "Cambridge, MA", "Medicines from the repeatome"],
  ["Sana Biotechnology", "cell", "Seattle, WA", "Engineered cells as medicines", "public", "Nasdaq: SANA"],
  ["Scale Biosciences", "tools", "San Diego, CA", "Single-cell sequencing at scale"],
  ["Scholar Rock", "neuro", "Cambridge, MA", "Muscle-targeted therapy for SMA", "public", "Nasdaq: SRRK"],
  ["SciNeuro Pharmaceuticals", "neuro", "Shanghai, China", "Neuroscience medicines for China"],
  ["Seaport Therapeutics", "neuro", "Boston, MA", "Neuropsychiatric medicines"],
  ["Semma Therapeutics", "cell", "Cambridge, MA", "Stem-cell islets for type 1 diabetes", "acquired", "Vertex, 2019"],
  ["Singleron Biotechnologies", "tools", "Nanjing, China", "Single-cell instruments and software"],
  ["Singular Genomics Systems", "tools", "San Diego, CA", "Genomic analysis instruments", "public", "Nasdaq: OMIC"],
  ["Sironax", "neuro", "Beijing, China", "Neurodegeneration and inflammation"],
  ["Skylark Bio", "genetic", "Cambridge, MA", "Gene therapy for hearing loss"],
  ["Slingshot Biosciences", "tools", "Emeryville, CA", "Synthetic cells for assays"],
  ["Sonoma Biotherapeutics", "cell", "San Francisco, CA", "Treg cell therapy for autoimmunity"],
  ["SonoThera", "genetic", "South San Francisco, CA", "Ultrasound-guided gene delivery"],
  ["SunBird Bio", "tools", "Singapore", "Blood tests for neurodegeneration"],
  ["Synchron", "neuro", "Brooklyn, NY", "Brain-computer interface"],
  ["Tenvie", "immuno", "South San Francisco, CA", "Inflammation, metabolic and lysosomal disease"],
  ["Transcenta Holding", "onc", "Suzhou, China", "Antibody therapeutics", "public", "HKEX: 6628"],
  ["Treeline Biosciences", "onc", "Stamford, CT", "Hard-to-drug cancer targets"],
  ["Trotana Therapeutics", "genetic", "San Diego, CA", "RNA-binding protein medicines"],
  ["Twist Bioscience", "tools", "San Francisco, CA", "Synthetic DNA manufacturing", "public", "Nasdaq: TWST"],
  ["Unity Biotechnology", "other", "San Francisco, CA", "Medicines for age-related disease", "public", "Nasdaq: UBX"],
  ["Verve Therapeutics", "genetic", "Cambridge, MA", "Gene editing for heart disease", "acquired", "Eli Lilly, 2025"],
  ["Vesalius Therapeutics", "ai", "Cambridge, MA", "Machine-learning drug discovery"],
  ["Vilya", "ai", "Seattle, WA", "Computationally designed medicines"],
  ["Vir Biotechnology", "other", "San Francisco, CA", "Infectious disease medicines", "public", "Nasdaq: VIR"],
  ["Vividion Therapeutics", "ai", "San Francisco, CA", "Chemoproteomics drug discovery", "acquired", "Bayer, 2021"],
  ["Vizgen", "tools", "Cambridge, MA", "Spatial genomics instruments"],
  ["Volastra Therapeutics", "onc", "New York, NY", "Targeting chromosomal instability in cancer"],
  ["Walden Biosciences", "cardio", "Cambridge, MA", "Kidney disease therapeutics"],
  ["Xaira Therapeutics", "ai", "San Francisco, CA", "AI drug discovery"],
];

/** Where newer public sources change what the published list shows. Keyed by record name. */
const changes: Record<string, { status?: Status; detail?: string; was: string; now: string; date: string; src: string }> = {
  "Generate Biomedicines": { status: "public", detail: "Nasdaq: GENB", was: "Private", now: "Public, Nasdaq: GENB", date: "2026-02-27", src: "generate" },
  "Seaport Therapeutics": { status: "public", detail: "Nasdaq: SPTX", was: "Private", now: "Public, Nasdaq: SPTX", date: "2026-05-01", src: "seaport" },
  "Parabilis Medicines": { status: "public", detail: "Nasdaq: PBLS", was: "Private", now: "Public, Nasdaq: PBLS", date: "2026-06-10", src: "parabilis" },
  Kardigan: { status: "public", detail: "Nasdaq: KARD", was: "Private", now: "Public, Nasdaq: KARD", date: "2026-06-18", src: "kardigan" },
  "Quantum Circuits": { status: "acquired", detail: "D-Wave Quantum, 2026", was: "Private", now: "Acquired by D-Wave Quantum", date: "2026-01-07", src: "qci" },
  "Singular Genomics Systems": { status: "acquired", detail: "Deerfield Management, 2025", was: "Public, Nasdaq: OMIC", now: "Taken private by Deerfield Management", date: "2025-02-21", src: "singular" },
  "Unity Biotechnology": { status: "closed", detail: "Delisted and dissolved, 2025", was: "Public, Nasdaq: UBX", now: "Delisted August 2025, dissolved September 2025", date: "2025-09-26", src: "unity" },
  "Create Medicines": { was: "Listed as Myeloid Therapeutics", now: "Renamed Create Medicines", date: "2025-10-06", src: "create" },
};

export const companies: Company[] = rows.map(([name, area, city, what, status = "private", detail]) => {
  const c = changes[name];
  const finalStatus = c?.status ?? status;
  const finalDetail = c?.detail ?? detail;
  const record: Company = {
    name,
    area,
    city,
    what,
    status: finalStatus,
    listed: true,
    src: c ? ["portfolio", c.src] : ["portfolio"],
  };
  if (finalStatus === "public" && finalDetail) record.ticker = finalDetail;
  if ((finalStatus === "acquired" || finalStatus === "closed") && finalDetail) record.exit = finalDetail;
  if (c) record.change = { was: c.was, now: c.now, date: c.date, src: c.src };
  return record;
});

/** Companies found in public sources that the published list does not yet show. */
export const added: Company[] = [
  {
    name: "Vaccine Company",
    area: "other",
    city: "",
    what: "Nanoparticle vaccines; lead program for Epstein–Barr virus",
    status: "acquired",
    exit: "Eli Lilly, 2026 (announced)",
    listed: false,
    change: { was: "Not on the list", now: "Founded by ARCH in 2022; Lilly agreed to acquire it", date: "2026-05-26", src: "vaccineco" },
    src: ["vaccineco", "vaccineco2", "news"],
  },
  {
    name: "Soufflé Therapeutics",
    area: "genetic",
    city: "",
    what: "Cell-specific delivery of oligonucleotide medicines",
    status: "private",
    listed: false,
    change: { was: "Not on the list", now: "ARCH named in the Series B syndicate", date: "2026-10-13", src: "souffle" },
    src: ["souffle"],
  },
];

export const record: Company[] = [...companies, ...added];

/* ---------------------------------------------------------------- Derived counts (published list only) */

export const statusCounts = {
  public: companies.filter((c) => c.status === "public").length,
  private: companies.filter((c) => c.status === "private").length,
  acquired: companies.filter((c) => c.status === "acquired").length,
  closed: companies.filter((c) => c.status === "closed").length,
};

export const areaCounts = areas.map((a) => ({ ...a, count: companies.filter((c) => c.area === a.id).length }));

const HUBS: [string, RegExp][] = [
  ["Boston–Cambridge", /^(Boston|Cambridge, MA|Watertown|Waltham|Lexington|Woburn)/],
  ["San Francisco Bay Area", /^(San Francisco|South San Francisco|Palo Alto|Emeryville|Brisbane|Burlingame|Menlo Park|Santa Clara|Richmond, CA)/],
  ["San Diego", /^(San Diego|La Jolla)/],
  ["Seattle", /^Seattle/],
  ["New York", /^(New York|Brooklyn)/],
  ["China", /China$/],
  ["Europe", /(UK|Sweden|Switzerland)$/],
  ["Singapore", /^Singapore/],
  ["Other U.S.", /, [A-Z]{2}$/],
];

export function hubOf(city: string): string {
  if (!city) return "Not listed";
  for (const [hub, re] of HUBS) if (re.test(city)) return hub;
  return "Not listed";
}

export const hubCounts = (() => {
  const counts = new Map<string, number>();
  for (const c of companies) counts.set(hubOf(c.city), (counts.get(hubOf(c.city)) ?? 0) + 1);
  return [...counts.entries()].map(([hub, count]) => ({ hub, count })).sort((a, b) => b.count - a.count);
})();

/** Every record change, newest first: the eight list corrections plus the two companies added. */
export const changeLog = record
  .filter((c) => c.change)
  .map((c) => ({ name: c.name, ...c.change! }))
  .sort((a, b) => b.date.localeCompare(a.date));

/** Changes that the firm's own news page already reports. */
export const changesOnNewsPage = ["Generate Biomedicines", "Seaport Therapeutics", "Parabilis Medicines", "Kardigan", "Quantum Circuits", "Vaccine Company"];

/* ---------------------------------------------------------------- Outcomes */

export type Exit = {
  company: string;
  buyer: string;
  /** ISO date the deal was announced (Metsera: the date it closed). */
  date: string;
  /** Headline value in $ billions, as announced (the "up to" figure where milestones apply). Null when not stated. */
  valueB: number | null;
  value: string;
  terms?: string;
  src: string;
};

export const exits: Exit[] = [
  { company: "Kythera Biopharmaceuticals", buyer: "Allergan", date: "2015-06-17", valueB: 2.1, value: "$2.1B", src: "kythera" },
  { company: "Receptos", buyer: "Celgene", date: "2015-07-14", valueB: 7.2, value: "$7.2B", src: "receptos" },
  { company: "Juno Therapeutics", buyer: "Celgene", date: "2018-01-22", valueB: 9, value: "$9B", src: "juno" },
  { company: "JUST Biotherapeutics", buyer: "Evotec", date: "2019-05-23", valueB: 0.09, value: "Up to $90M", terms: "$60M upfront", src: "just" },
  { company: "Semma Therapeutics", buyer: "Vertex", date: "2019-09-03", valueB: 0.95, value: "$950M", src: "semma" },
  { company: "Grail", buyer: "Illumina", date: "2020-09-21", valueB: 8, value: "$8B", src: "grail" },
  { company: "Omniome", buyer: "Pacific Biosciences", date: "2021-07-20", valueB: 0.8, value: "Up to $800M", terms: "About $600M upfront", src: "omniome" },
  { company: "Vividion Therapeutics", buyer: "Bayer", date: "2021-08-05", valueB: 2, value: "Up to $2B", terms: "$1.5B upfront", src: "vividion" },
  { company: "EQRx", buyer: "Revolution Medicines", date: "2023-08-01", valueB: 1.07, value: "About $1.07B", terms: "All stock", src: "eqrx" },
  { company: "Karuna Therapeutics", buyer: "Bristol Myers Squibb", date: "2023-12-22", valueB: 14, value: "$14B", src: "karuna" },
  { company: "Human Immunology Biosciences", buyer: "Biogen", date: "2024-05-22", valueB: 1.8, value: "Up to $1.8B", terms: "$1.15B upfront", src: "hibio" },
  { company: "Singular Genomics Systems", buyer: "Deerfield Management", date: "2025-02-21", valueB: null, value: "$20.00 a share", terms: "Taken private", src: "singular" },
  { company: "Verve Therapeutics", buyer: "Eli Lilly", date: "2025-06-17", valueB: 1.3, value: "Up to $1.3B", terms: "About $1.0B upfront", src: "verve" },
  { company: "Orbital Therapeutics", buyer: "Bristol Myers Squibb", date: "2025-10-10", valueB: 1.5, value: "$1.5B", terms: "Cash", src: "orbital" },
  { company: "Metsera", buyer: "Pfizer", date: "2025-11-13", valueB: 10, value: "Up to $10B", terms: "Closed November 2025", src: "metsera" },
  { company: "Quantum Circuits", buyer: "D-Wave Quantum", date: "2026-01-07", valueB: 0.55, value: "$550M", terms: "$300M stock, $250M cash", src: "qci" },
  { company: "Vaccine Company", buyer: "Eli Lilly", date: "2026-05-26", valueB: 1.55, value: "Up to $1.55B", terms: "Announced", src: "vaccineco" },
];

export type Ipo = { company: string; ticker: string; date: string; raisedM: number; raised: string; note?: string; src: string };

export const ipos2026: Ipo[] = [
  { company: "Generate Biomedicines", ticker: "Nasdaq: GENB", date: "2026-02-27", raisedM: 400, raised: "$400M", src: "generate" },
  { company: "Seaport Therapeutics", ticker: "Nasdaq: SPTX", date: "2026-05-01", raisedM: 254.9, raised: "$254.9M", src: "seaport" },
  { company: "Parabilis Medicines", ticker: "Nasdaq: PBLS", date: "2026-06-10", raisedM: 670, raised: "$670M", note: "Plus a $75M private placement", src: "parabilis" },
  { company: "Kardigan", ticker: "Nasdaq: KARD", date: "2026-06-18", raisedM: 400, raised: "$400M", note: "$460M with the underwriters’ option", src: "kardigan" },
];

export const ipoTotalM = ipos2026.reduce((sum, i) => sum + i.raisedM, 0);

/* ---------------------------------------------------------------- Signals (the Monday brief) */

export type Signal = {
  date: string;
  kind: "Regulatory" | "Capital" | "Firm";
  subject: string;
  text: string;
  flag?: string;
  src: string[];
};

export const briefWindow = { from: "2026-08-01", to: "2026-10-21", label: "August 1 – October 21, 2026" };

export const signals: Signal[] = [
  { date: "2026-10-13", kind: "Capital", subject: "Soufflé Therapeutics", text: "$135M Series B led by Juvia Group, with ARCH in the existing syndicate. The most advanced program targets FSHD.", flag: "Not on the published list. Added to the record for review.", src: ["souffle"] },
  { date: "2026-09-23", kind: "Regulatory", subject: "Gossamer Bio", text: "Submitted its first new drug application: seralutinib for pulmonary arterial hypertension. The FDA’s filing decision could come later this year.", src: ["gossamer"] },
  { date: "2026-09-11", kind: "Regulatory", subject: "Scholar Rock", text: "FDA approved Isembyld (apitegromab) for spinal muscular atrophy, ahead of its September 30 action date. The company’s first approved medicine.", src: ["scholar"] },
  { date: "2026-09-09", kind: "Capital", subject: "Encoded Therapeutics", text: "$275M Series F co-led by GV, with ARCH participating. It funds a pivotal study of ETX101 in Dravet syndrome.", src: ["encoded"] },
  { date: "2026-09-09", kind: "Capital", subject: "Moonwalk Biosciences", text: "$70M Series B to carry its lead obesity program to first-in-human studies, expected in late 2027.", src: ["moonwalk"] },
  { date: "2026-08-31", kind: "Firm", subject: "ARCH Venture Fund XIV", text: "A Form D shows a $3B target for the firm’s fourteenth fund, the same size as Fund XIII.", src: ["fund14", "fund14b"] },
  { date: "2026-08-06", kind: "Capital", subject: "LifeMine Therapeutics", text: "$188M Series E for LIFE-001, a transplant immunosuppressant. A Phase 2 kidney transplant study is planned for early 2027.", src: ["lifemine"] },
];

/* ---------------------------------------------------------------- Formatting helpers */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** "2026-09-11" → "Sep 11, 2026"; "2019-05" → "May 2019"; "" → "Undated". */
export function fmtDate(iso: string, long = false): string {
  if (!iso) return "Undated";
  const [y, m, d] = iso.split("-").map(Number);
  const month = (long ? MONTHS_LONG : MONTHS)[(m ?? 1) - 1];
  return d ? `${month} ${d}, ${y}` : `${month} ${y}`;
}

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

/** 17 → "seventeen" (to 20, then digits); `cap` capitalizes for sentence starts. */
export function spell(n: number, cap = false): string {
  const w = WORDS[n] ?? String(n);
  return cap ? w[0].toUpperCase() + w.slice(1) : w;
}

export function fmtMoneyM(m: number): string {
  return m >= 1000 ? `$${(m / 1000).toFixed(1).replace(/\.0$/, "")}B` : `$${Math.round(m)}M`;
}

export const statusLabel: Record<Status, string> = {
  public: "Public",
  private: "Private",
  acquired: "Acquired",
  closed: "Wound down",
};
