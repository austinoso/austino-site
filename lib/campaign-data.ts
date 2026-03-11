// ── Campaign data fetch for pSEO pages ──
// Pulls real competitor scan data from the dashboard API at build time.
// See how_to_get_PSEO_data.md for API docs.

const DASHBOARD_URL = process.env.DASHBOARD_URL ?? "http://localhost:3001";
const PSEO_API_KEY = process.env.PSEO_API_KEY ?? "";
const CAMPAIGN_ID = process.env.HOME_SERVICES_CAMPAIGN_ID ?? "";

// ── API response types (from how_to_get_PSEO_data.md) ──

interface MarketInsights {
  totalProspects: number;
  withWebsite: number;
  withoutWebsite: number;
  analyzed: number;
  avgRating: number | null;
  avgReviewCount: number | null;
  inLocalPack: number;
  inOrganic: number;
  notOnPage1or2: number;
  noSchema: number;
  missingNap: number;
  noMapsEmbed: number;
  noBlog: number;
  fewPages: number;
  avgSiteScore: number | null;
  noDiyBuilder: number;
  noContactForm: number;
  noClickToCall: number;
  noChatWidget: number;
  noAnalytics: number;
  noRetargeting: number;
  noSocialLinks: number;
  stats: {
    label: string;
    count: number;
    total: number;
    pct: number;
  }[];
}

interface PSEOCityPage {
  city: string;
  state: string;
  slug: string;
  services: string[];
  stats: MarketInsights;
  highlights: {
    totalBusinesses: number;
    avgRating: number | null;
    avgSiteScore: number | null;
    pctNoWebsite: number;
    pctNoSchema: number;
  };
}

interface PSEOExport {
  campaign: { id: string; name: string; exportedAt: string };
  services: string[];
  cities: { city: string; state: string }[];
  cityPages: PSEOCityPage[];
  servicePages: unknown[];
}

// ── Fetch ──

let _cachedExport: PSEOExport | null = null;

export async function getCampaignExport(): Promise<PSEOExport | null> {
  if (_cachedExport) return _cachedExport;

  if (!CAMPAIGN_ID) {
    console.warn("[campaign-data] HOME_SERVICES_CAMPAIGN_ID not set, skipping API fetch");
    return null;
  }

  const headers: Record<string, string> = {};
  if (PSEO_API_KEY) {
    headers["Authorization"] = `Bearer ${PSEO_API_KEY}`;
  }

  try {
    const res = await fetch(`${DASHBOARD_URL}/api/campaigns/${CAMPAIGN_ID}/export`, {
      headers,
      next: { revalidate: 86400 },
    });
    if (!res.ok) {
      console.error(`[campaign-data] Export failed: ${res.status}`);
      return null;
    }
    _cachedExport = await res.json();
    return _cachedExport;
  } catch (e) {
    console.error("[campaign-data] Fetch error:", e);
    return null;
  }
}

// ── Transform: city stats → audit rows ──

export interface AuditRow {
  label: string;
  pct: string;
  fraction: string;
  failing: boolean;
}

export interface CityAuditData {
  scanSummary: string;
  sitesSummary: string;
  rows: AuditRow[];
  totalBusinesses: number;
  avgRating: number | null;
  avgSiteScore: number | null;
  services: string[];
}

/**
 * Transform raw MarketInsights into audit rows for CompetitorAudit.
 * Rows are sorted by pct descending (worst gaps first).
 */
export function buildAuditFromStats(cityPage: PSEOCityPage): CityAuditData {
  const s = cityPage.stats;
  const total = s.analyzed || s.withWebsite || s.totalProspects;

  // Build rows from the structured stats array if available,
  // otherwise fall back to the top-level fields
  const rawRows: { label: string; count: number; total: number; pct: number }[] =
    s.stats.length > 0
      ? s.stats
      : [
          {
            label: "No structured data (Schema)",
            count: s.noSchema,
            total,
            pct: pctOf(s.noSchema, total),
          },
          {
            label: "No Google Maps embed",
            count: s.noMapsEmbed,
            total,
            pct: pctOf(s.noMapsEmbed, total),
          },
          {
            label: "Missing NAP data",
            count: s.missingNap,
            total,
            pct: pctOf(s.missingNap, total),
          },
          { label: "No blog or resources", count: s.noBlog, total, pct: pctOf(s.noBlog, total) },
          { label: "5 pages or fewer", count: s.fewPages, total, pct: pctOf(s.fewPages, total) },
          {
            label: "No contact form",
            count: s.noContactForm,
            total,
            pct: pctOf(s.noContactForm, total),
          },
          {
            label: "No click-to-call link",
            count: s.noClickToCall,
            total,
            pct: pctOf(s.noClickToCall, total),
          },
          {
            label: "No website at all",
            count: s.withoutWebsite,
            total: s.totalProspects,
            pct: pctOf(s.withoutWebsite, s.totalProspects),
          },
        ];

  // Sort descending by percentage, filter to rows with count > 0
  const sorted = rawRows.filter((r) => r.count > 0).sort((a, b) => b.pct - a.pct);

  const rows: AuditRow[] = sorted.map((r) => ({
    label: r.label,
    pct: `${Math.round(r.pct)}%`,
    fraction: `${r.count}/${r.total}`,
    failing: r.pct >= 10, // 10%+ = real market gap
  }));

  return {
    scanSummary: `${s.totalProspects} businesses scanned`,
    sitesSummary: `${s.analyzed || s.withWebsite} sites analyzed`,
    rows,
    totalBusinesses: s.totalProspects,
    avgRating: s.avgRating,
    avgSiteScore: s.avgSiteScore,
    services: cityPage.services,
  };
}

/**
 * Get audit data for a specific city slug.
 * Returns null if campaign data isn't available or city not found.
 */
export async function getCityAudit(citySlug: string): Promise<CityAuditData | null> {
  const data = await getCampaignExport();
  if (!data) return null;

  const cityPage = data.cityPages.find((p) => p.slug.toLowerCase() === citySlug.toLowerCase());
  if (!cityPage) return null;

  return buildAuditFromStats(cityPage);
}

function pctOf(count: number, total: number): number {
  if (!total) return 0;
  return (count / total) * 100;
}
