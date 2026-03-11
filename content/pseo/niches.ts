// ── Niche definitions for pSEO ──
// Each niche has a distinct identity, audience, and URL structure.

export interface NicheConfig {
  slug: string;
  /** URL path segment: /services/{nicheSlug}/[city] */
  nicheSlug: string;
  label: string;
  shortLabel: string;
  industries: string[];
  valueProp: string;
  /** Target cities — slugs from cities.ts */
  targetCities: string[];
  /** Schema.org @type for JSON-LD */
  schemaType: string;
}

export const niches: Record<string, NicheConfig> = {
  legal: {
    slug: "legal",
    nicheSlug: "law-firm-websites",
    label: "Law Firm Websites",
    shortLabel: "Law Firms",
    industries: ["Personal Injury", "Family Law", "Estate Planning"],
    valueProp: "Trust and dominance through technical SEO and schema engineering.",
    targetCities: ["stockton", "modesto"],
    schemaType: "LegalService",
  },
  "home-services": {
    slug: "home-services",
    nicheSlug: "home-service-websites",
    label: "Home Service Websites",
    shortLabel: "Home Services",
    industries: ["AC Repair", "Plumber", "Roofing", "Electrician", "Landscapers"],
    valueProp: "Speed and conversion machines for the moments your customers need you most.",
    targetCities: ["stockton", "modesto", "tracy", "manteca"],
    schemaType: "HomeAndConstructionBusiness",
  },
  wellness: {
    slug: "wellness",
    nicheSlug: "wellness-websites",
    label: "Wellness Websites",
    shortLabel: "Wellness",
    industries: ["Specialized Gyms", "MedSpas", "Chiropractors"],
    valueProp: "Community-focused engines that automate booking and maximize local retention.",
    targetCities: ["manteca", "turlock", "modesto"],
    schemaType: "HealthAndBeautyBusiness",
  },
};

/** Get niche config by slug */
export function getNiche(slug: string): NicheConfig {
  const niche = niches[slug];
  if (!niche) throw new Error(`Unknown niche slug: ${slug}`);
  return niche;
}

/** Find niche by its URL path segment */
export function getNicheByUrlSlug(nicheSlug: string): NicheConfig | undefined {
  return Object.values(niches).find((n) => n.nicheSlug === nicheSlug);
}
