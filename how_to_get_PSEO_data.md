# PSEO Data Export — Campaign → Pages

## Overview

The PSEO export turns a scanned campaign into structured JSON that feeds programmatic landing pages. One campaign scan produces data for:

- **City pages** — aggregate stats across all services in a city (e.g. `/home-services/houston`)
- **Service pages** — deep-dive stats for one service in one city (e.g. `/home-services/houston/plumbers`)

No copy-paste. One API call returns every city×service combination with real competitor data.

---

## Quick Start

### 1. Scan a campaign in the dashboard

Go to **Prospect → Campaigns**, create a campaign with your target services and cities, then:

1. Click **Scan All Services** (fetches Google Maps listings)
2. Click **Quick Analyze All** (fetches + scores each competitor's website)

### 2. Fetch the export

```bash
# From the browser (uses session cookie)
GET /api/campaigns/{campaignId}/export

# From an external script (uses dedicated PSEO API key)
curl -H "Authorization: Bearer $PSEO_API_KEY" \
  https://your-dashboard.vercel.app/api/campaigns/{campaignId}/export
```

### 3. Use the JSON in your static site generator

The response is a single JSON object you can feed into Next.js `generateStaticParams`, Astro collections, 11ty data files, or any template system.

---

## Response Shape

```typescript
interface PSEOExport {
  campaign: {
    id: string;
    name: string; // "Houston Home Services"
    exportedAt: string; // ISO timestamp
  };
  services: string[]; // ["plumber", "electrician", "roofer"]
  cities: {
    city: string; // "Houston"
    state: string; // "TX"
  }[];

  // One entry per city (aggregate across all services)
  cityPages: PSEOCityPage[];

  // One entry per city×service combo
  servicePages: PSEOServicePage[];
}
```

### City Page

```typescript
interface PSEOCityPage {
  city: string; // "Houston"
  state: string; // "TX"
  slug: string; // "houston"
  services: string[]; // all services in this campaign
  stats: MarketInsights; // full aggregated stats (see below)
  highlights: {
    totalBusinesses: number; // 87
    avgRating: number | null; // 4.2
    avgSiteScore: number | null; // 34
    pctNoWebsite: number; // 23
    pctNoSchema: number; // 72
  };
}
```

### Service Page

```typescript
interface PSEOServicePage {
  city: string; // "Houston"
  state: string; // "TX"
  service: string; // "plumber"
  slug: string; // "houston/plumbers"
  stats: MarketInsights; // stats filtered to this city+service
  competitors: PSEOCompetitor[]; // top 10 by site score
  topGaps: {
    // most common weaknesses
    title: string; // "No structured data"
    pct: number; // 72 (% of competitors with this gap)
  }[];
}
```

### Competitor Detail

```typescript
interface PSEOCompetitor {
  name: string; // "ABC Plumbing"
  website: string | null; // "abcplumbing.com"
  rating: number | null; // 4.8
  reviewCount: number | null; // 127
  siteScore: number | null; // 42
  scores: {
    seo: number | null;
    schema: number | null;
    contentDepth: number | null;
    localSeo: number | null;
  };
  gaps: {
    category: string; // "seo" | "schema" | "content" | "local"
    severity: string; // "critical" | "warning" | "info"
    title: string; // "Multiple SEO failures"
  }[];
  techStack: {
    cms: string | null; // "wordpress" | "wix" | null
    framework: string | null; // "react" | null
  } | null;
}
```

### MarketInsights (stats object)

Every city page and service page includes the full `stats` object:

```typescript
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
    label: string; // "No structured data (Schema)"
    count: number; // 23
    total: number; // 32
    pct: number; // 72
  }[];
}
```

---

## Example: Next.js PSEO Integration

### Fetch at build time

```typescript
// lib/campaign-data.ts
const DASHBOARD_URL = process.env.DASHBOARD_URL;
const PSEO_API_KEY = process.env.PSEO_API_KEY;
const CAMPAIGN_ID = process.env.CAMPAIGN_ID;

export async function getCampaignExport() {
  const res = await fetch(
    `${DASHBOARD_URL}/api/campaigns/${CAMPAIGN_ID}/export`,
    {
      headers: { Authorization: `Bearer ${PSEO_API_KEY}` },
      next: { revalidate: 86400 }, // cache for 24h
    },
  );
  if (!res.ok) throw new Error(`Export failed: ${res.status}`);
  return res.json();
}
```

### Generate city pages

```typescript
// app/home-services/[city]/page.tsx
import { getCampaignExport } from "@/lib/campaign-data";

export async function generateStaticParams() {
  const data = await getCampaignExport();
  return data.cityPages.map((page) => ({ city: page.slug }));
}

export default async function CityPage({ params }) {
  const { city } = await params;
  const data = await getCampaignExport();
  const page = data.cityPages.find((p) => p.slug === city);

  return (
    <div>
      <h1>Home Services in {page.city}, {page.state}</h1>
      <p>
        We analyzed {page.highlights.totalBusinesses} local businesses.
        The average rating is {page.highlights.avgRating}★ and{" "}
        {page.highlights.pctNoSchema}% have no structured data.
      </p>
      {/* ... render stats, service list, etc. */}
    </div>
  );
}
```

### Generate service pages

```typescript
// app/home-services/[city]/[service]/page.tsx
import { getCampaignExport } from "@/lib/campaign-data";

export async function generateStaticParams() {
  const data = await getCampaignExport();
  return data.servicePages.map((page) => {
    const [city, service] = page.slug.split("/");
    return { city, service };
  });
}

export default async function ServicePage({ params }) {
  const { city, service } = await params;
  const data = await getCampaignExport();
  const page = data.servicePages.find(
    (p) => p.slug === `${city}/${service}`
  );

  return (
    <div>
      <h1>{page.service} in {page.city}, {page.state}</h1>
      <p>
        We analyzed {page.stats.analyzed} {page.service} websites.
        {page.topGaps[0] &&
          ` ${page.topGaps[0].pct}% ${page.topGaps[0].title.toLowerCase()}.`}
      </p>

      <h2>Top Competitors</h2>
      <ul>
        {page.competitors.map((c) => (
          <li key={c.name}>
            {c.name} — {c.rating}★ ({c.reviewCount} reviews)
            — Site Score: {c.siteScore}/100
          </li>
        ))}
      </ul>

      <h2>Common Weaknesses</h2>
      <ul>
        {page.topGaps.map((g) => (
          <li key={g.title}>{g.pct}% — {g.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Data Freshness

The export reads directly from the campaign's scan data. To refresh:

1. Re-run **Scan All Services** in the campaign dashboard (re-fetches Google Maps data)
2. Re-run **Quick Analyze All** (re-analyzes websites)
3. Call the export endpoint again

For automated freshness, trigger scans via the existing server actions from a cron job or webhook, then rebuild your client site.

---

## Auth Options

| Method         | Use case                                  | Header                                |
| -------------- | ----------------------------------------- | ------------------------------------- |
| Session cookie | Browser / dashboard UI                    | Automatic (logged in)                 |
| Bearer token   | External scripts, CI/CD, build-time fetch | `Authorization: Bearer $PSEO_API_KEY` |

Set `PSEO_API_KEY` in your Vercel environment variables. This is a dedicated key separate from `CRON_SECRET` — you can rotate or revoke it without affecting cron jobs.

Generate a strong key:

```bash
openssl rand -hex 32
```

---

## URL Reference

| Endpoint                     | Method | Description           |
| ---------------------------- | ------ | --------------------- |
| `/api/campaigns/{id}/export` | GET    | Full PSEO export JSON |

Future endpoints (not yet built):

- `/api/campaigns/{id}/export?format=mdx` — pre-rendered MDX files
- `/api/campaigns/{id}/export?city=houston` — single city export
- `/api/campaigns/{id}/export?service=plumber&city=houston` — single service page
