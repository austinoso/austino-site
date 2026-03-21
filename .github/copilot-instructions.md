# loudbark.dev — Copilot Instructions

Personal web agency site — Next.js 16 App Router, TypeScript, Tailwind CSS. Statically generated; deployed to Vercel. Targets Central Valley small business owners (trust-first, warm studio aesthetic).

**Brand & positioning reference → [POSITIONING.md](../POSITIONING.md)** — business overview, services, target audience, brand voice, pricing, and exclusivity model. Read before writing copy or making strategic decisions.

## Build & Dev Commands

```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Static build — run before deploying
npm run lint         # ESLint
npm run lint:fix     # ESLint --fix
npm run format       # Prettier
npm run gen:images   # Regenerate marketing SVG images (scripts/)
```

No test suite. Validate by running `npm run build` — TypeScript errors and missing data will surface here.

---

## Architecture

### App Router Structure

- **All pages are Server Components** by default — data fetching at the top, no `useEffect`.
- **`"use client"`** only for: interactive UI (Navigation scroll/mobile, Onboarding wizard, GSAP animations, Solutions section).
- **OG images** (`opengraph-image.tsx`) run on Edge Runtime via Satori. No Node APIs, absolute URLs only.
- Static generation via `generateStaticParams` — new PSEO cities/niches require rebuild + redeploy (no ISR enabled).

### Key Directories

| Path | Purpose |
|------|---------|
| `app/` | Pages, layouts, API routes, OG images |
| `components/` | All React components |
| `components/pseo/` | PSEO-specific section components |
| `components/Solutions/` | Homepage services sections |
| `components/ui/` | Shared utility components |
| `content/projects/` | TypeScript case study data files |
| `content/insights/` | Markdown blog posts (frontmatter + body) |
| `content/pseo/` | PSEO city × niche data (TypeScript) |
| `lib/` | Data loaders (`projects.ts`, `insights.ts`, `pseo.ts`, `og-image.tsx`) |
| `scripts/` | One-off generation scripts (marketing images, Notion setup) |

---

## Design System

**Full reference → [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md)**

Summary of critical rules:
- **Theme**: Warm light ("Warm Studio") — cream `#FAF9F6` base, amber gold `#B45309` accent, dark stone `#1C1917` headings. **Not dark mode.**
- **Brand gradient** (max 1–2 per page): `from-[#B45309] via-[#DB2777] to-[#7C3AED]` — hero H1 accents and homepage CTA only.
- **Section gradient** for H2 accents: `from-[#92400E] to-[#B45309]`.
- **Typography**: Plus Jakarta Sans for display headings (`font-jakarta`), Inter for body (`font-inter`).
- **Layout**: `.page-frame` (max-w-[1200px] + decorative rails) + `.section-px` (responsive horizontal padding).
- **Section labels** (eyebrows): `.section-label` class — mono, amber, uppercase, tracking-widest.
- **60-30-10 rule**: 60% cream surface → 30% stone text → 10% amber/rose/violet.
- Dark embedded sections exist (device mockups) but use `.dark-section` override — never make full pages dark.

---

## Content Management

**Full reference → [CONTENT.md](../CONTENT.md)**

- **Case studies**: Add a `.ts` file to `content/projects/` then register in `lib/projects.ts`.
- **Blog posts**: Add a `.md` file to `content/insights/` with required frontmatter (`title`, `excerpt`, `date` as ISO `YYYY-MM-DD`, `category`, `readTime`).
- **Dates must be ISO format** — `gray-matter` parses them with `new Date()`; non-ISO strings silently produce invalid dates.

---

## PSEO System

**Full reference → [PSEO_PLAN.md](../PSEO_PLAN.md)**

Three niche verticals: `law-firm-websites`, `home-service-websites`, `wellness-websites`. Each niche has:
- `content/pseo/{niche}/shared.ts` — default copy for all cities
- `content/pseo/{niche}/{city}.ts` — optional city-level overrides
- Routes under `app/services/{niche}/[city]/page.tsx`

**Override resolution pattern** (copy from existing niche pages):
```typescript
const headline = override.headline ?? hero.headline(city.name);
const problems = override.problemCards
  ? override.problemCards.map((c, i) => ({ icon: base.problems.cards[i]?.icon, ...c }))
  : base.problems.cards.map(c => ({ ...c, body: c.body(city.name) }));
const faq = [...base.faq.items, ...(override.additionalFAQ ?? [])];
```

**Pitfall**: Override icons are sourced by index from `shared.ts`. If you override `problemCards`, keep the same card count or icons will be misaligned.

---

## API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/contact` | POST | Contact form → Resend email (Turnstile-protected) |
| `/api/onboarding` | GET/POST | Fetch/create project in Notion |
| `/api/stripe/checkout` | POST | Create $200 deposit Stripe session |
| `/api/stripe/webhook` | POST | Handle Stripe events |

**Required env vars**: `RESEND_API_KEY`, `STRIPE_SECRET_KEY`, `CONTACT_EMAIL`, `TURNSTILE_SECRET_KEY`, `NOTION_API_KEY`

---

## Conventions

- **Component files**: PascalCase — `PseoHero.tsx`, `Navigation.tsx`
- **Utility/lib files**: camelCase — `formatDate.ts`, `pseo.ts`
- **Server components**: default (no directive needed)
- **Client components**: `"use client"` at top of file
- **Tailwind only** — no CSS modules, no styled-components, no inline `style` except for dynamic values (e.g., GSAP or gradient property values not expressible in Tailwind)
- **Orphan prevention**: Use `&nbsp;` between last 2–3 words on long headings to prevent single-word orphan lines
- **No `any` types** — use explicit interfaces; see existing data models as reference

---

## Known Gotchas

- **OG images**: `src` props must be absolute URLs — Satori cannot resolve relative paths. Edge Runtime only; no Node-only APIs.
- **`getCity()` / `getNiche()` throw** — they don't return `undefined`. Wrap in `try/catch` if calling dynamically.
- **`generateStaticParams`** is the source of truth for valid routes. Adding a new PSEO city requires adding it to the city's data file **and** rebuilding.
- **Active navigation bar** uses `style` prop (not Tailwind) for left-position — it's animated by `usePathname()` on the client.
- **Stripe checkout fallback**: Returns a mock URL when `STRIPE_SECRET_KEY` is unset — intentional for local dev.
