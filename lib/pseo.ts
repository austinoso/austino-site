// ── pSEO helpers ──
// Resolves city + niche data and merges overrides for template pages.

import type { CityData } from "@/content/pseo/cities";
import type { NicheConfig } from "@/content/pseo/niches";
import { getCity } from "@/content/pseo/cities";
import { getNicheByUrlSlug } from "@/content/pseo/niches";

// ── Override shape (same for all niches) ──

export interface CityOverride {
  heroContext: string;
  localStat: { value: string; label: string };
  additionalFAQ: { q: string; a: string }[];
  caseStudy?: null;
  /** Override shared hero headline (H1) */
  headline?: string;
  /** Override shared hero subtext */
  subtext?: string;
  /** Override problem section heading */
  problemHeading?: string;
  /** Override problem section subtext */
  problemSubtext?: string;
  /** Replace problem cards entirely (icons mapped from shared by index) */
  problemCards?: {
    stat: string;
    statLabel: string;
    heading: string;
    body: string;
    source: { label: string; href: string };
  }[];
  /** Override authority section subtext */
  authoritySubtext?: string;
  /** Replace authority signal titles + descriptions (icons mapped from shared by index) */
  authoritySignals?: { title: string; description: string }[];
  /** Competitor audit scorecard data (legal niche) */
  audit?: {
    heading: string;
    subtext: string;
    scanSummary: string;
    sitesSummary: string;
    rows: { label: string; pct: string; fraction: string; failing: boolean }[];
    source: { label: string; href: string };
  };
}

// ── Resolved page data (passed to template components) ──

export interface PseoPageData {
  city: CityData;
  niche: NicheConfig;
  override: CityOverride;
}

// ── Legal overrides registry ──

import { stocktonLegal } from "@/content/pseo/legal/stockton";
import { modestoLegal } from "@/content/pseo/legal/modesto";

const legalOverrides: Record<string, CityOverride> = {
  stockton: stocktonLegal,
  modesto: modestoLegal,
};

// ── Home Services overrides registry ──

import { stocktonHomeServices } from "@/content/pseo/home-services/stockton";
import { modestoHomeServices } from "@/content/pseo/home-services/modesto";
import { tracyHomeServices } from "@/content/pseo/home-services/tracy";
import { mantecaHomeServices } from "@/content/pseo/home-services/manteca";

const homeServicesOverrides: Record<string, CityOverride> = {
  stockton: stocktonHomeServices,
  modesto: modestoHomeServices,
  tracy: tracyHomeServices,
  manteca: mantecaHomeServices,
};

// ── Wellness overrides registry ──

import { mantecaWellness } from "@/content/pseo/wellness/manteca";
import { turlockWellness } from "@/content/pseo/wellness/turlock";
import { modestoWellness } from "@/content/pseo/wellness/modesto";

const wellnessOverrides: Record<string, CityOverride> = {
  manteca: mantecaWellness,
  turlock: turlockWellness,
  modesto: modestoWellness,
};

// ── Lookup functions ──

/**
 * Get the full resolved data for a pSEO page.
 * Returns undefined if the city/niche combo doesn't exist.
 */
export function getPseoPageData(nicheSlug: string, citySlug: string): PseoPageData | undefined {
  const niche = getNicheByUrlSlug(nicheSlug);
  if (!niche) return undefined;
  if (!niche.targetCities.includes(citySlug)) return undefined;

  const city = getCity(citySlug);
  const override = getOverride(niche.slug, citySlug);
  if (!override) return undefined;

  return { city, niche, override };
}

/**
 * Get all valid city slugs for a given niche URL slug.
 * Used by generateStaticParams.
 */
export function getCitySlugsForNiche(nicheSlug: string): string[] {
  const niche = getNicheByUrlSlug(nicheSlug);
  if (!niche) return [];
  return niche.targetCities;
}

// ── Private: override registry lookup ──

function getOverride(nicheKey: string, citySlug: string): CityOverride | undefined {
  switch (nicheKey) {
    case "legal":
      return legalOverrides[citySlug];
    case "home-services":
      return homeServicesOverrides[citySlug];
    case "wellness":
      return wellnessOverrides[citySlug];
    default:
      return undefined;
  }
}
