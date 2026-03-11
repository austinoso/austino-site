// ── City metadata for pSEO pages ──
// Used by all niche templates to inject city-specific data

export interface CityData {
  slug: string;
  name: string;
  county: string;
  population: string;
  areaCode: string;
  nearbyCities: string[];
  /** One sentence about the city's character — woven into copy */
  searchContext: string;
}

export const cities: Record<string, CityData> = {
  stockton: {
    slug: "stockton",
    name: "Stockton",
    county: "San Joaquin",
    population: "330K",
    areaCode: "209",
    nearbyCities: ["Lodi", "Tracy", "Manteca", "Lathrop"],
    searchContext:
      "San Joaquin County's largest city with a growing economy and dense competitive markets across legal, home services, and healthcare.",
  },
  modesto: {
    slug: "modesto",
    name: "Modesto",
    county: "Stanislaus",
    population: "218K",
    areaCode: "209",
    nearbyCities: ["Turlock", "Ceres", "Oakdale", "Riverbank"],
    searchContext:
      "The Stanislaus County seat and Central Valley's second-largest metro, fueled by Bay Area transplants and a growing demand for local services.",
  },
  tracy: {
    slug: "tracy",
    name: "Tracy",
    county: "San Joaquin",
    population: "97K",
    areaCode: "209",
    nearbyCities: ["Manteca", "Stockton", "Lathrop", "Mountain House"],
    searchContext:
      "One of the Valley's fastest-growing cities — a commuter hub where the population has outpaced the local business web presence.",
  },
  manteca: {
    slug: "manteca",
    name: "Manteca",
    county: "San Joaquin",
    population: "84K",
    areaCode: "209",
    nearbyCities: ["Tracy", "Lathrop", "Stockton", "Ripon"],
    searchContext:
      "A fast-growing family-oriented city between Stockton and Modesto with strong local identity and an underserved digital market.",
  },
  turlock: {
    slug: "turlock",
    name: "Turlock",
    county: "Stanislaus",
    population: "75K",
    areaCode: "209",
    nearbyCities: ["Modesto", "Ceres", "Denair", "Hilmar"],
    searchContext:
      "A university town with a tight-knit community, growing young-family demographic, and almost zero local businesses investing in SEO.",
  },
};

/** Get city data by slug. Throws if not found. */
export function getCity(slug: string): CityData {
  const city = cities[slug];
  if (!city) throw new Error(`Unknown city slug: ${slug}`);
  return city;
}

/** Get all city slugs */
export function getAllCitySlugs(): string[] {
  return Object.keys(cities);
}
