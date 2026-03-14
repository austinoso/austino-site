# Programmatic SEO Plan

## Overview

Scale loudbark.dev's organic reach by generating high-quality, niche × city landing pages across three verticals — each with a distinct design language, value proposition, and audience psychology. No database. Everything lives in TypeScript data files, builds statically at deploy time, and ships to Vercel with zero runtime dependencies.

---

## The Three Niches

### 1. "The Authority" — Legal

| | |
|---|---|
| **Industries** | Personal Injury, Family Law, Estate Planning |
| **Value prop** | "I build trust and dominance through technical data and schema engineering." |
| **Target cities** | Stockton, Modesto, Tracy |
| **Audience psychology** | People in crisis. They need calm, authority, and instant trust. They're comparing 2-3 firms and picking the one that *feels* most competent. |
| **Design direction** | Warm-neutral palette, refined serif headings, generous whitespace. Structured layouts that feel institutional but approachable. No dark UI, no flashy motion. Trust signals everywhere: schema badges, review counts, case results. |
| **Existing prototype** | `/services/law-firms-central-valley` (region-wide page — good reference but will need city-specific versions) |

**Why these cities:** Legal is high-competition, high-value. Stockton (330K), Modesto (218K), and Tracy (97K) have the population density and court systems that drive demand. Enough firms to create competition — but almost none with real SEO.

### 2. "The Utility" — Home Services

| | |
|---|---|
| **Industries** | HVAC, Roofing, Restoration |
| **Value prop** | "I build speed and conversion machines for the moments your customers need you most." |
| **Target cities** | Stockton, Modesto, Tracy |
| **Audience psychology** | Urgent need. AC broke in July. Roof leaking. Water damage right now. These people search on their phone, scan fast, need a phone number or form *immediately*. They don't read — they act. |
| **Design direction** | Clean, sturdy, fast. Big phone numbers. Above-the-fold CTAs. Social proof via review counts and badges. Speed scores visible. Minimal scrolling to conversion. Think "reliable contractor" not "design portfolio." |
| **Existing prototype** | None — new template needed |

**Why these cities:** Same population centers as Legal. Home services are searched urgently and locally. These three cities cover the core of the 209 area code market. HVAC alone has massive seasonal search volume.

### 3. "The Lifestyle" — Wellness

| | |
|---|---|
| **Industries** | Specialized Gyms, MedSpas, Chiropractors |
| **Value prop** | "I build community-focused engines that automate booking and maximize local retention." |
| **Target cities** | Manteca, Turlock, Modesto |
| **Audience psychology** | Lifestyle-driven. They're browsing, comparing vibes, checking class schedules, reading reviews. They care about feeling, community, and convenience. They want to see the space, the people, the brand personality. |
| **Design direction** | Warm, inviting, community-forward. Rich photography emphasis. Booking integration prominent but not aggressive. Testimonial and community proof. Feels like a place you want to *belong to*, not just a service to buy. |
| **Existing prototype** | `/services/web-development/manteca` (general city page with massage therapy case study — good bones, needs niche-specific adaptation) |

**Why these cities:** Manteca and Turlock are fast-growing lifestyle communities — younger families, Bay Area transplants, strong local identity. Modesto overlaps all three niches as the regional hub.

---

## URL Structure

```
/services/[niche-slug]/[city]

Legal:
  /services/law-firm-websites/stockton
  /services/law-firm-websites/modesto

Home Services:
  /services/home-service-websites/stockton
  /services/home-service-websites/modesto
  /services/home-service-websites/tracy
  /services/home-service-websites/manteca

Wellness:
  /services/wellness-websites/manteca
  /services/wellness-websites/turlock
  /services/wellness-websites/modesto
```

**9 pages total** in v1 (3 niches × 3 cities).

**Why this structure, not `/services/web-development/[city]`:**
- The Manteca page is a *general* city web dev page. These niche pages speak to a specific industry — different copy, different proof points, different CTAs.
- Niche slugs in the URL send a stronger relevance signal to Google ("law-firm-websites/stockton" > "web-development/stockton").
- Each niche gets its own template with different sections, design, and psychology.
- If you later want general city pages too (`/services/web-development/stockton`), they can coexist — different intent, different content.

### What happens to existing pages

| Existing page | Action |
|---|---|
| `/services/web-development/manteca` | **Keep as-is.** It's a general city page, not niche-specific. It targets "web design manteca" — different keyword intent than "medspa website manteca." |
| `/services/law-firms-central-valley` | **Keep as the niche hub.** City pages link up to it. It becomes the umbrella page, city pages are the spokes. |

---

## Data Architecture

No database. No Notion. No CMS. Everything is TypeScript:

```
content/
  pseo/
    cities.ts              ← City metadata (name, slug, population, county, nearby cities)
    niches.ts              ← Niche definitions (slug, label, value prop, industries, design config)
    legal/                 ← Legal niche page data
      shared.ts            ← Shared sections across all legal city pages
      stockton.ts          ← Stockton-specific overrides (stats, case study, FAQ tweaks)
      modesto.ts
      tracy.ts
    home-services/         ← Home Services niche page data
      shared.ts
      stockton.ts
      modesto.ts
      tracy.ts
    wellness/              ← Wellness niche page data
      shared.ts
      manteca.ts
      turlock.ts
      modesto.ts

lib/
  pseo.ts                  ← Helper functions: getCityData(), getNicheConfig(), getPageData()

app/services/
  law-firm-websites/
    [city]/
      page.tsx             ← Template: pulls from legal/ data, renders Legal template
      layout.tsx           ← Dynamic metadata + schema markup
      opengraph-image.tsx  ← Dynamic OG image with city + niche
  home-service-websites/
    [city]/
      page.tsx
      layout.tsx
      opengraph-image.tsx
  wellness-websites/
    [city]/
      page.tsx
      layout.tsx
      opengraph-image.tsx
```

### Why per-niche data files instead of one giant JSON?

1. **Each niche has different data shapes.** Legal pages have "practice areas" and "case results." Home services pages have "emergency response time" and "seasonal search data." Wellness pages have "class types" and "booking integrations." One schema doesn't fit all three.
2. **City overrides vary by niche.** A Stockton legal override might include court info. A Stockton home services override might include climate data (for HVAC messaging). Same city, different data.
3. **You can see what's customized at a glance.** If `content/pseo/legal/stockton.ts` exists and has 50 lines, you know Stockton has meaningful custom content. If it's 10 lines, it's mostly using shared defaults.

### City data model

```typescript
// content/pseo/cities.ts
export interface CityData {
  slug: string;
  name: string;
  county: string;
  population: string;        // "330K", "218K"
  description: string;       // One line about the city's character
  nearbyCities: string[];    // For cross-linking
  areaCode: string;          // "209"
  searchContext: string;      // Market context for copy: "growing fast", "Bay Area spillover", etc.
}
```

### Niche shared data model (example: Legal)

```typescript
// content/pseo/legal/shared.ts
export interface LegalPageData {
  // Hero
  heroHeadline: (city: string) => string;
  heroSubtext: (city: string) => string;
  heroCTA: { label: string; href: string };

  // Problem section
  problems: {
    icon: LucideIcon;
    stat: string;
    statLabel: string;
    heading: string;
    body: (city: string) => string;  // City name injected where relevant
    source: { label: string; href: string };
  }[];

  // Value props / What you get
  deliverables: { icon: LucideIcon; title: string; body: string }[];

  // FAQ (shared baseline — city overrides can add/replace)
  faq: { q: string; a: string }[];

  // Schema
  schemaType: string;  // "LegalService", "HomeAndConstructionBusiness", etc.
}
```

### City override model (example: Legal × Stockton)

```typescript
// content/pseo/legal/stockton.ts
export const stocktonLegalOverrides = {
  // Override specific sections with Stockton-specific content
  heroHeadline: "Most Stockton law firms are invisible on Google.",
  
  // City-specific proof points
  localStats: {
    firmCount: "200+",
    firmsWithSEO: "< 10",
    avgGoogleRating: "3.8",
  },

  // Custom FAQ additions
  additionalFAQ: [
    {
      q: "Do you work with law firms in downtown Stockton specifically?",
      a: "Yes — I work with firms across Stockton including downtown, Lincoln Center, Brookside, and the Miracle Mile area. I understand the Stockton legal market and what local clients are actually searching for.",
    },
  ],

  // If you have a real client case study in this city
  caseStudy: null,  // null = omit section, or provide case study data
};
```

---

## Template Sections Per Niche

Each niche template has the same structural bones (hero → problem → solution → social proof → FAQ → CTA) but the specific sections, copy angles, and design treatments differ.

### Legal Template Sections

| Section | Purpose | Unique to Legal |
|---|---|---|
| **Hero** | Authority headline + trust signals | Practice area badges, "one firm per practice area" exclusivity signal |
| **The Problem** | Why firms in [city] aren't ranking | References court/county specifics, attorney directory saturation |
| **Authority Signals** | Why technical SEO matters for legal | Schema markup emphasis, E-E-A-T for YMYL, Google's quality rater guidelines |
| **What You Get** | Deliverables list | Legal-specific: practice area pages, attorney bios with schema, case results markup |
| **Social Proof** | Trust builders | Review schema, "exclusive to one firm per practice area" promise |
| **FAQ** | City × legal questions | Questions about legal website requirements, compliance, ADA |
| **Final CTA** | Conversion close | "Get a Free Site Review" — low-commitment, consultative tone |

### Home Services Template Sections

| Section | Purpose | Unique to Home Services |
|---|---|---|
| **Hero** | Urgency + speed focus | Phone number prominent, "call now" energy, speed score badge |
| **The Cost of Slow** | Why speed = revenue for contractors | Emergency search behavior data, bounce rate stats, "your competitor answers in 3 seconds" |
| **Speed Proof** | Performance showcase | Lighthouse scores, load time comparisons, real metrics |
| **What You Get** | Deliverables list | Click-to-call, emergency service toggles, seasonal landing pages, review aggregation |
| **The Math** | ROI calculation | "One roofing job = $X. One missed call = $X lost. Your site loaded in 8 seconds — they called someone else." |
| **FAQ** | City × home services questions | Seasonal questions, "how fast can my site be up," contractor-specific concerns |
| **Final CTA** | Conversion close | "See What You're Losing" — direct, numbers-driven |

### Wellness Template Sections

| Section | Purpose | Unique to Wellness |
|---|---|---|
| **Hero** | Community + belonging vibe | Warm imagery emphasis, "your neighborhood [gym/medspa/chiro]" framing |
| **The Problem** | Why wellness businesses struggle to retain online | Booking friction, no online presence beyond Yelp, can't compete with ClassPass/Mindbody on discoverability |
| **Community Proof** | Local trust signals | Review highlights, member count, local event mentions |
| **What You Get** | Deliverables list | Booking integration, class schedule display, membership management, automated review requests |
| **Retention Engine** | How the site keeps customers coming back | Automated reminders, referral systems, review-to-booking pipeline |
| **FAQ** | City × wellness questions | Booking system questions, "do I need to leave Mindbody," membership site features |
| **Final CTA** | Conversion close | "See What Your Business Could Look Like" — aspirational, visual |

---

## Content Uniqueness Strategy

Google penalizes thin/duplicate pSEO. Here's how each page earns its existence:

### Layer 1: City data injection (every page gets this for free)
- City name woven naturally into headlines, body copy, FAQ answers
- Population and growth context ("Stockton's 330K residents...")
- Nearby city references for internal linking
- County/region specificity

### Layer 2: Niche-specific shared content (different per vertical)
- Different problem framing (legal ≠ home services ≠ wellness)
- Different deliverables and features
- Different value propositions and proof points
- Different FAQ sets
- Different schema markup types

### Layer 3: City × niche overrides (the uniqueness multiplier)
Each city override file can include:
- **Local stats**: "There are 200+ law firms in Stockton. Fewer than 10 have proper SEO."
- **Competitive landscape refs**: "Search 'personal injury lawyer stockton' — notice how the top 3 all have the same template?"
- **Case study**: If you have a real client in that city × niche, feature it. (This is the strongest uniqueness signal.)
- **Local context**: Court locations, neighborhood names, seasonal patterns, community events
- **Custom FAQ entries**: City-specific questions on top of the shared set

### Layer 4: Internal linking web
- City pages link to each other ("Also serving Tracy, Lathrop, and Ripon")
- City pages link up to niche hub ("/services/law-firms-central-valley")
- City pages link to relevant insights articles
- Insights articles link to relevant city pages
- Niche hubs link down to city pages

### Uniqueness scorecard — before shipping a page, it needs:

| Requirement | Must have |
|---|---|
| City name appears naturally (not keyword-stuffed) in ≥ 5 places | ✅ |
| At least 1 city-specific stat or data point | ✅ |
| FAQ has at least 1 city-specific question | ✅ |
| Nearby cities linked | ✅ |
| Links to ≥ 1 relevant insight article | ✅ |
| Different opening paragraph than all other city pages in same niche | ✅ |
| Case study (if available) or local competitive reference | Ideal |

---

## Shared Components

These components are used across all three niche templates but accept different data:

```
components/
  pseo/
    PseoHero.tsx           ← Accepts niche config for styling + city data for copy
    PseoProblem.tsx         ← Problem cards with stat + source (data-driven)
    PseoDeliverables.tsx   ← What You Get grid (data-driven)
    PseoFAQ.tsx            ← FAQ accordion (merges shared + city-specific)
    PseoCTA.tsx            ← Final CTA with city name + niche-appropriate tone
    PseoNearby.tsx         ← "Also serving..." cross-link bar
    PseoSchemaMarkup.tsx   ← JSON-LD output from niche + city data
```

**Niche-specific sections** live inside their template page files since they're structurally unique:
- Legal: `AuthoritySignals`, `SocialProof`
- Home Services: `SpeedProof`, `TheMath`
- Wellness: `CommunityProof`, `RetentionEngine`

---

## SEO Infrastructure Per Page

Every pSEO page automatically gets:

| Element | Implementation |
|---|---|
| `<title>` | `{Niche} Websites in {City} | Loud Bark` |
| `<meta description>` | Generated from niche value prop + city name |
| Canonical URL | `https://www.loudbark.dev/services/{niche-slug}/{city}` |
| OG image | Dynamic — city name + niche label rendered at build time |
| JSON-LD | `LocalBusiness` + `FAQPage` + niche-specific schema |
| Sitemap entry | Auto-generated from `generateStaticParams` |
| Internal links | Nearby cities + niche hub + relevant insights |
| H1 | One per page, city + niche specific |
| Heading hierarchy | H1 → H2 (sections) → H3 (sub-items) — clean hierarchy |

---

## Build Phases

### Phase 1: Foundation (data layer + first template)

**Goal:** Ship 3 Legal city pages.

1. Create `content/pseo/cities.ts` with all 5 unique cities (Stockton, Modesto, Tracy, Manteca, Turlock)
2. Create `content/pseo/niches.ts` with niche definitions
3. Create `content/pseo/legal/shared.ts` with shared Legal template data
4. Create city override files: `stockton.ts`, `modesto.ts`, `tracy.ts`
5. Create `lib/pseo.ts` helper functions
6. Build `app/services/law-firm-websites/[city]/` template (page, layout, OG image)
7. Build shared components: `PseoHero`, `PseoProblem`, `PseoDeliverables`, `PseoFAQ`, `PseoCTA`, `PseoNearby`, `PseoSchemaMarkup`
8. Build Legal-specific components: `AuthoritySignals`, `SocialProof`
9. Update `sitemap.ts` to include pSEO pages
10. Update internal linking from existing pages

**Output:** 3 live pages — `/services/law-firm-websites/stockton`, `/modesto`, `/tracy`

### Phase 2: Home Services (second template)

**Goal:** Ship 3 Home Services city pages.

1. Create `content/pseo/home-services/shared.ts`
2. Create city overrides: `stockton.ts`, `modesto.ts`, `tracy.ts`
3. Build `app/services/home-service-websites/[city]/` template
4. Build Home Services–specific components: `SpeedProof`, `TheMath`
5. Update sitemap + internal linking

**Output:** 3 more pages — `/services/home-service-websites/stockton`, `/modesto`, `/tracy`

### Phase 3: Wellness (third template)

**Goal:** Ship 3 Wellness city pages.

1. Create `content/pseo/wellness/shared.ts`
2. Create city overrides: `manteca.ts`, `turlock.ts`, `modesto.ts`
3. Build `app/services/wellness-websites/[city]/` template
4. Build Wellness-specific components: `CommunityProof`, `RetentionEngine`
5. Update sitemap + internal linking

**Output:** 3 more pages — `/services/wellness-websites/manteca`, `/turlock`, `/modesto`

### Phase 4: Content enrichment (ongoing)

- Add case studies to city pages as you land clients
- Write niche-specific insight articles that link to city pages
- Add more cities to existing niches (Fresno, Visalia, Merced, Lodi, etc.)
- Add sub-niches: personal injury specifically, HVAC specifically, MedSpa specifically
- Build niche hub pages (`/services/law-firm-websites`, `/services/home-service-websites`, `/services/wellness-websites`) that list all city pages

---

## What Goes in Each City Override File

Starting minimalist — you can enrich over time. Here's the minimum viable override:

```typescript
// content/pseo/legal/stockton.ts
export const stocktonLegal = {
  // Required: at least one city-specific hook in the hero
  heroContext: "With over 200 law firms in San Joaquin County, Stockton's legal market is crowded — but almost none of those firms have a website built to actually rank.",

  // Required: local competitive stat
  localStat: {
    value: "< 10",
    label: "Stockton law firms with proper local SEO setup",
  },

  // Optional: case study (null = section omitted)
  caseStudy: null,

  // Required: at least 1 city-specific FAQ
  additionalFAQ: [
    {
      q: "Do you work with law firms in all parts of Stockton?",
      a: "Yes — I work with firms across Stockton including downtown, Lincoln Center, the Miracle Mile, and surrounding areas like Lodi and Lathrop. I understand the San Joaquin County legal market specifically.",
    },
  ],
};
```

As you gain clients and data, these files grow — but they're shippable with just this much.

---

## Relationship to Existing Pages

```
                    loudbark.dev
                        │
          ┌─────────────┼──────────────┐
          │             │              │
  /services/        /services/     /services/
  web-development   automation     growth-strategy
      │
      ├── /manteca  (existing general city page — KEEP)
      │
      ├── law-firm-websites/           (NEW niche hub → future)
      │    ├── /stockton               (NEW pSEO)
      │    ├── /modesto                (NEW pSEO)
      │    └── /tracy                  (NEW pSEO)
      │
      ├── home-service-websites/       (NEW niche hub → future)
      │    ├── /stockton               (NEW pSEO)
      │    ├── /modesto                (NEW pSEO)
      │    └── /tracy                  (NEW pSEO)
      │
      └── wellness-websites/           (NEW niche hub → future)
           ├── /manteca                (NEW pSEO)
           ├── /turlock                (NEW pSEO)
           └── /modesto                (NEW pSEO)

  /services/law-firms-central-valley   (existing — becomes region hub, links down to city pages)

  /insights/
      ├── local-seo-basics-central-valley     (existing — link FROM city pages)
      └── modesto-experience-gap              (existing — link FROM Modesto pages)
```

---

## Open Questions

1. **Niche hub pages** — Do you want `/services/law-firm-websites` (without a city) as a landing page that lists all city pages? Recommend yes, eventually — but not needed for v1. `generateStaticParams` for the `[city]` route is enough to start.

2. **Cross-niche on same city** — Modesto appears in all 3 niches. Each page will be completely different (different template, different copy, different audience). No duplication concern. But consider whether the Modesto pages should cross-link to each other.

3. **Existing law firms page** — `/services/law-firms-central-valley` currently targets the whole region. Once city pages exist, this becomes the hub that links to them. Might need a "See your city" section added. No urgency — add it when city pages ship.

4. **The Manteca general page** — `/services/web-development/manteca` is a general "web dev in Manteca" page. `/services/wellness-websites/manteca` is a niche-specific page. Different search intents, different content. Both can exist. But consider whether the general page cannibalizes the niche page — probably not, since keywords differ ("web design manteca" vs "medspa website manteca").

5. **How aggressively to localize** — Phase 1 uses city name injection + 1 local stat + 1 local FAQ. Phase 4 can add real case studies, competitor screenshots, neighborhood names, etc. Start lean, enrich over time.
