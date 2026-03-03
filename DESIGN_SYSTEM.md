# austino.dev — Design System

Living reference for visual consistency across all pages. Updated for the **warm light theme** migration (June 2025). **Every new page or component must follow these patterns.**

---

## 1. Context

- **Business:** Solo web development & automation agency serving Central Valley small businesses
- **Audience:** Small business owners (30–60), non-technical, evaluating local web partners — trust, competence, and clarity matter more than flashy tech aesthetics
- **Design direction:** "Warm Studio" — light, warm, approachable. Cream paper base with rich amber accents and dark warm text. Think refined stationery store, not sterile SaaS white. Typography-driven hierarchy, generous whitespace, restraint with color. The warmth speaks directly to local business owners who need to feel trust and competence, not intimidation.
- **Previous direction (deprecated):** Dark UI with gold accents ("high-end whiskey bar") — this spoke to dev portfolios/tech startups, not the actual audience.

---

## 2. Colors

### Palette Tokens (tailwind.config.ts)

| Token                | Value     | Role                                                   |
| -------------------- | --------- | ------------------------------------------------------ |
| `warm-bg`            | `#FAF9F6` | Page background — warm off-white paper                 |
| `warm-surface`       | `#FFFFFF` | Card/elevated backgrounds — white on cream             |
| `warm-surface-hover` | `#F5F4F0` | Active/hover card fills                                |
| `warm-border`        | `#E7E5E4` | Structural borders (rarely used directly)              |
| `warm-gold`          | `#B45309` | Primary accent — labels, links, highlights (amber-700) |
| `warm-gold-bright`   | `#D97706` | CTA gradient start (amber-600)                         |
| `warm-gold-dim`      | `#92400E` | Muted gold for gradient fallbacks (amber-800)          |
| `warm-white`         | `#1C1917` | Headings, high-emphasis text (stone-900)               |
| `warm-green`         | `#16A34A` | Success/live indicators (green-600)                    |
| `warm-green-dim`     | `#15803D` | Muted success (green-700)                              |

### Brand Color Identity

The brand palette is a **warm-to-cool analogous sweep**: amber (#B45309) → rose (#DB2777) → violet (#7C3AED), covering ~130° of the color wheel. Visually it reads like a sunset gradient — warm colors leading into cool creates a sense of _movement and progression_, which narratively fits a business that takes clients from "stuck" to "growing."

**Why these colors work (color theory rationale):**

- **Archetype fit:** Bridges **Creator** (bold, unconventional combos) and **Caregiver** (warm earth tones, trust). Amber is warm enough to feel approachable to a Central Valley business owner, distinctive enough to not look like every blue-default agency.
- **Blue Ocean position:** Most web agencies use blue (trust/corporate), dark + neon green (tech-bro), or black + white (minimalist). Amber + cream is **uncontested territory** in the web services space. Nobody owns this color position.
- **Harmony system:** Warm-to-cool analogous sweep. Not a textbook complementary pair — more organic and natural-feeling than mechanical color theory.
- **60-30-10 execution:** Cream surfaces (60%) → stone text layers (30%) → amber/rose/violet accents (10%).

**Two-tier gradient system:**

| Tier                 | Gradient                | Values                                               | When to use                                                             |
| -------------------- | ----------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| **Brand signature**  | Amber → Rose (→ Violet) | `#B45309 → #DB2777` or `#B45309 → #DB2777 → #7C3AED` | Hero headlines, homepage CTA, brand-defining moments — max 1-2 per page |
| **Section emphasis** | Gold                    | `#92400E → #B45309`                                  | H2 accent spans, section-level highlights — used more freely            |

The brand signature gradient is the equivalent of Stripe's gradient or Linear's purple-to-blue — a deliberate visual mark, not decoration. Use it sparingly so it retains impact.

### Secondary Accent Colors (brand gradient extended)

| Token          | Value                       | Usage                                                                                               |
| -------------- | --------------------------- | --------------------------------------------------------------------------------------------------- |
| `cyber-violet` | `#A78BFA` (rgb 167,139,250) | Brand gradient cool end, ambient radial gradients (very subtle), Solutions/WebDev subsection accent |
| `cyber-rose`   | `#F472B6` (rgb 244,114,182) | Brand gradient midpoint, ambient radial gradients, Solutions/Automation subsection accent           |

### Text Color Hierarchy

| Role                | Class                | Hex                 | Usage                                        |
| ------------------- | -------------------- | ------------------- | -------------------------------------------- |
| Primary (headings)  | `text-warm-white`    | `#1C1917`           | All h1, h2, h3, h4, card titles, emphasis    |
| Primary body        | `text-stone-600`     | `#57534E`           | Main paragraphs directly under headings      |
| Secondary body      | `text-stone-500`     | `#78716C`           | Descriptions, stat labels, card body text    |
| Tertiary/meta       | `text-stone-400`     | `#A8A29E`           | Eyebrow sources, chevron icons, timestamps   |
| Accent              | `text-warm-gold`     | `#B45309`           | Section labels, signal stats, highlight text |
| Accent (gradient)   | `text-gradient-gold` | `#92400E → #B45309` | Gradient highlight spans in h1/h2            |
| CTA text on gold bg | `text-white`         | `#FFFFFF`           | Button text on amber gradient buttons        |

### Surface & Border Colors

| Value                         | Usage                                                                 |
| ----------------------------- | --------------------------------------------------------------------- |
| `bg-warm-bg` / `#FAF9F6`      | Page background                                                       |
| `bg-white`                    | Cards, elevated surfaces (white on cream creates subtle lift)         |
| `bg-stone-50`                 | Hover fills, skeleton backgrounds, subtle surface tint                |
| `bg-stone-100`                | Stronger hover fills, secondary surfaces                              |
| `border-stone-200`            | **Primary border** — section dividers, card edges, grid cells, inputs |
| `border-stone-300`            | Hover border state, stronger dividers                                 |
| `border-warm-gold/20` – `/30` | Gold-accent card borders, highlight hover states                      |
| `border-warm-gold/25`         | Gold left accent bars (editorial lists)                               |

#### Dark Mockup Surfaces (kept dark for contrast)

| Value                 | Usage                                                  |
| --------------------- | ------------------------------------------------------ |
| `bg-[#0C0B09]`        | Browser mockup frames, phone frames                    |
| `bg-[#0A0A0E]`        | Dashboard mockup frames                                |
| `bg-[#0D0F13]`        | Mockup chrome bars, dashboard headers                  |
| `border-white/[0.06]` | Inside dark mockups ONLY — never on page-level content |
| `border-white/[0.08]` | Dark mockup frames                                     |

### Color Rules

- **60-30-10:** Cream surfaces (60%) → stone text layers (30%) → amber accent (10%)
- **Amber is for emphasis** — section labels, stat callouts, heading gradient spans, CTAs. Never for body paragraphs.
- **Rose and violet are brand colors** — they appear in the brand signature gradient (hero headlines, CTA) and in radial gradients at very low opacity (0.01–0.04). Also used in their specific Solutions subsection contexts.
- Radial gradients use the original `rgba(212,168,83,...)` for gold and `rgba(167,139,250,...)` for violet but at **~30% of dark-theme opacity** (gold ≤0.04, violet ≤0.03).
- **Dark mockups sit as embedded "islands"** on the light page — their dark bg creates striking contrast that makes screenshots and demos pop.

### Brand Color Expansion Opportunities

Currently, rose and violet only appear in the hero gradient and very low-opacity radial washes. The audit identified tasteful places to bring more brand color in without diluting the amber-dominant hierarchy:

| Opportunity                             | Color                 | How                                                                                                                                                              |
| --------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Service page accent differentiation     | Rose / Violet         | Each service page could use a tinted accent (rose for automation, violet for web dev) on section dividers, icon tints, or card borders — subtle, ~10-15% opacity |
| Testimonial/review highlights           | Rose                  | Subtle rose tint behind a pull-quote or star rating row. Reads warm and positive without competing with gold CTAs                                                |
| "Before → After" or comparison sections | Rose → Amber gradient | A horizontal bar or timeline connecting the "pain" (rose) to the "solution" (amber) — reinforces the brand sweep narratively                                     |
| Footer or secondary CTA band            | Violet                | A violet-tinted ambient gradient at very low opacity behind the pre-footer CTA — signals "premium" without competing with the primary amber CTA                  |
| Interactive/hover micro-accents         | Rose                  | On dark mockup elements: hover states on dashboard components, glowing dot indicators. Dark bg makes rose pop safely                                             |
| Navigation active indicator             | Rose → Amber          | Current page indicator could use a tiny gradient bar instead of a plain amber dot — adds brand identity to a high-visibility element                             |

**Rule: Never let rose or violet overpower amber.** Amber is the primary brand signal. Rose and violet are supporting temperature shifts. If you squint at the page, it should still read "warm amber on cream" — the other colors are felt more than noticed.

---

## 3. Typography

### Fonts

| Role    | Font              | Class          | CSS Variable     | Usage                                      |
| ------- | ----------------- | -------------- | ---------------- | ------------------------------------------ |
| Body    | Inter             | `font-sans`    | `--font-inter`   | Default body text, navigation              |
| Display | Plus Jakarta Sans | `font-display` | `--font-jakarta` | All headings, section titles, stat numbers |
| Mono    | System monospace  | `font-mono`    | —                | Labels, eyebrows, stat values, code        |

Loaded via `next/font/google` in `app/layout.tsx`.

### Heading Scale

| Element                          | Classes                                                                                                                        | Context                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| **H1** (hero)                    | `text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] font-bold font-display text-warm-white leading-[1.08] tracking-tight` | Homepage hero (service heroes may be smaller)     |
| **H2** (section) — homepage      | `text-3xl sm:text-4xl md:text-5xl font-bold font-display text-warm-white leading-[1.1] tracking-tight`                         | PainPoints, Solutions, Work, About                |
| **H2** (section) — service pages | `text-3xl sm:text-4xl md:text-[2.75rem] font-bold font-display text-stone-900 leading-[1.2] tracking-tight text-balance`       | All service page sections                         |
| **H2** (CTA — large)             | Add `lg:text-6xl` to homepage H2 scale                                                                                         | Homepage CTA section only (dark island)           |
| **H3** (subsection)              | `text-2xl sm:text-3xl font-bold font-display text-warm-white leading-[1.2] tracking-tight text-balance`                        | Tools section, SEO section, Solutions subsections |
| **H4** / `<dt>`                  | `text-base font-semibold text-warm-white mb-2`                                                                                 | Card titles, definition terms                     |

### Body Text Scale

| Role                    | Classes                                               | Where used                                                |
| ----------------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| Primary body (under h2) | `text-base sm:text-lg text-stone-600 leading-relaxed` | Hero body, FinalCTA body, section intros                  |
| Secondary body          | `text-[15px] text-stone-500 leading-relaxed`          | Card descriptions, stat labels (desktop), FAQ reassurance |
| Card/list body          | `text-sm text-stone-500 leading-relaxed`              | Tool cards, FAQ answers, feature descriptions             |
| Mobile stat label       | `text-[13px] text-stone-500 leading-relaxed`          | Staggered mobile stat layout                              |
| Caption/meta            | `text-xs text-stone-400` or `text-stone-500`          | Source links, timestamps, fine print                      |

### Mono Text

| Usage            | Classes                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| Section eyebrows | `text-[11px] font-mono text-stone-500 uppercase tracking-wider`               |
| Stat annotations | `text-[10px] font-mono text-warm-gold uppercase tracking-[0.15em]`            |
| Source links     | `text-[11px] text-stone-500 hover:text-stone-700 transition-colors font-mono` |

### Text Gradient Utilities (globals.css)

| Class                 | Gradient                              | Tier                | Usage                                                      |
| --------------------- | ------------------------------------- | ------------------- | ---------------------------------------------------------- |
| `text-gradient-brand` | `135deg, #B45309 → #DB2777`           | **Brand signature** | Hero H1 accent span — the primary brand mark               |
| `text-gradient`       | `135deg, #B45309 → #DB2777 → #7C3AED` | **Brand signature** | Homepage CTA, multi-color brand moments — max 1-2 per page |
| `text-gradient-gold`  | `135deg, #92400E → #B45309`           | Section emphasis    | H2 accent spans, section-level highlights                  |
| `text-gradient-green` | `135deg, #15803D → #16A34A → #22C55E` | Contextual          | Success/growth callouts                                    |

**Dark-section overrides:** Inside `.dark-section` (CTA), gradients revert to bright values (`#FBBF24→#F472B6→#A78BFA` for multi, `#F59E0B→#FDE68A` for gold).

### Orphan Prevention

Use `\u00A0` (non-breaking space) or `&nbsp;` between the last 2–3 words of any line that risks orphaning a single word. Applied in stat labels, body text, FAQ answers.

---

## 4. Layout

### Page Frame

```html
<div className="page-frame">{/* sections */}</div>
```

- `max-w-[1200px] mx-auto` with `::before`/`::after` pseudo-element vertical rails (1px, `rgba(0,0,0,0.06)`)
- Navigation sits **above** the frame (fixed, full-width)
- Footer sits **inside** the frame

### Section Horizontal Padding

All sections use this responsive padding (either on their inner wrapper or directly):

```
px-6 sm:px-10 md:px-14 lg:px-20
```

### Section Vertical Spacing

**Homepage sections:**

```
pt-24 pb-24 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32
```

**Service page sections** (slightly tighter, no bottom padding — components own their pb):

```
pt-14 sm:pt-28 md:pt-32
```

**Hero** (top-heavy for nav clearance):

- Homepage: `pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28`
- Service: `pt-16 pb-0 sm:pt-20 md:pt-24` + back link `mb-8 sm:mb-10`

**Footer:** `py-14 sm:py-18`

### Section Wrapper Pattern (service pages)

Every section in a service page gets this wrapper in `page.tsx`:

```tsx
<div
  className="relative border-b border-stone-200 overflow-hidden"
  style={{
    backgroundImage: [
      "radial-gradient(ellipse 55% 60% at ..., rgba(212,168,83,0.024), ...transparent 70%)",
      "radial-gradient(ellipse 50% 50% at ..., rgba(167,139,250,0.024), ...transparent 70%)",
    ].join(", "),
  }}
>
  {/* Optional gradient top line */}
  <div
    className="absolute top-0 inset-x-0 h-px"
    style={{
      background:
        "linear-gradient(90deg, transparent, rgba(212,168,83,0.036) 30%, rgba(167,139,250,0.03) 65%, transparent)",
    }}
    aria-hidden="true"
  />

  {/* Inner padding wrapper */}
  <div className="pt-14 sm:pt-28 md:pt-32">
    <SectionComponent />
  </div>
</div>
```

**Key principles:**

- Every section has `border-b border-stone-200`
- Each section gets 2 subtle radial gradients at **very low opacity** (0.02–0.04 on light bg)
- Gradient glow line (`h-px`) only on sections that aren't the first

### Section Dividers

| Type               | Pattern                                                          | Where                                    |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------------- |
| Bottom border      | `border-b border-stone-200`                                      | Every section                            |
| Gradient h-px line | `absolute top-0 inset-x-0 h-px` with gold→violet linear gradient | Between sections (not on hero)           |
| Internal border    | `border-t border-stone-200`                                      | Inside sections (stat grids, CTA strips) |

### Homepage Section Backgrounds

Most sections use the page background (`#FAF9F6`) with very subtle radial gradient washes at 0.02–0.04 opacity.

- Hero: slight translucency for depth
- CTA: **Dark island** — `#1C1917` with amber radial glow accent, `rounded-t-3xl`
- Footer: `bg-warm-bg` (solid)

---

## 5. Component Patterns

### Section Label (`.section-label`)

```
text-xs font-semibold text-warm-gold uppercase tracking-[0.2em]
```

Used above section headings. Spacing: `mb-5` or `mb-5 sm:mb-6`.

**Dark context variant:** `.section-label-dark` uses `text-amber-400` for visibility on dark backgrounds.

### Primary CTA Button

```
group inline-flex items-center gap-3 px-7 py-3.5
bg-gradient-to-r from-amber-600 to-amber-500
text-white font-semibold text-[15px] rounded-lg
transition-all duration-300 hover:brightness-110
shadow-lg shadow-amber-600/15
```

- Arrow icon inside: `w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5`
- Variant — FinalCTA (larger): `px-7 sm:px-8 py-3.5 sm:py-4 text-base w-full sm:w-auto`
- Variant — Nav desktop (compact): `px-5 py-2 text-sm`
- Variant — Nav mobile: Same as primary but `rounded-xl` and `text-center`

**Dark island CTA variant:** `from-amber-500 to-amber-400 text-stone-900` (amber button with dark text, contrasting against dark bg)

### Outline Button

```
group inline-flex items-center gap-2.5 px-6 py-3
border border-stone-300 rounded-lg
text-[14px] font-medium text-stone-800
hover:border-warm-gold/30 hover:text-warm-gold
transition-all duration-500
```

### Text Link

**Gold link (primary):**

```
inline-flex items-center gap-2 text-sm text-warm-gold
hover:text-amber-700 transition-colors duration-300
```

**Muted link (secondary — cross-links, FinalCTA alternates):**

```
inline-flex items-center gap-2 text-sm text-stone-500
hover:text-warm-white transition-colors duration-300
```

**Never use `hover:text-amber-300`** on light backgrounds — it's a lighter yellow that reduces contrast. `amber-300` hover was a dark-theme holdover.

### Browser Mockup Frame (DARK — embedded on light page)

```tsx
<div className="rounded-xl border border-white/[0.08] bg-[#0C0B09] overflow-hidden"
     style={{ boxShadow: "0 24px 48px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.03)" }}>
  {/* Chrome bar */}
  <div className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.04]">
    <div className="flex gap-1.5">
      <div className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
      <div className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
      <div className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
    </div>
    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.04]">
      <span className="text-[10px] text-white/25 font-mono">domain.com</span>
    </div>
  </div>
  <Image ... className="w-full h-auto object-cover" />
</div>
```

**Note:** Browser/phone/dashboard mockups stay dark. All `border-white/[0.XX]`, `bg-white/[0.XX]`, `bg-[#0C0B09]` patterns inside mockups are intentional.

### Tool/Feature Card

```
rounded-xl bg-white border border-stone-200
p-6 sm:p-7 transition-colors duration-300
hover:bg-stone-50 hover:border-stone-300
```

- H4: `text-base font-semibold text-warm-white mb-2`
- Body: `text-sm text-stone-500 leading-relaxed`
- `shadow-sm` only on homepage About cards — omit elsewhere

**Card padding tiers:**

| Tier     | Padding      | When                                                           |
| -------- | ------------ | -------------------------------------------------------------- |
| Standard | `p-6 sm:p-7` | List cards, tool cards, grouped cards in grids                 |
| Spacious | `p-7 sm:p-8` | Standalone feature cards, comparison cards (TheMath, AlwaysOn) |

**Card hover standard:** Always `hover:bg-stone-50 hover:border-stone-300`. Never `hover:bg-stone-100` — the 2-step jump is too harsh on cream.

### Gold Wildcard Card (variant)

```
rounded-xl border border-warm-gold/20 bg-warm-gold/[0.03]
p-6 sm:p-7 transition-colors duration-300
hover:bg-warm-gold/[0.06] hover:border-warm-gold/30
```

### FAQ Accordion Item

```
rounded-lg border border-stone-200 bg-white
overflow-hidden transition-colors duration-200
hover:border-stone-300
```

- Question: `text-sm font-medium text-warm-white pr-4`
- Answer text: `px-6 pb-5 text-sm text-stone-600 leading-relaxed text-pretty`

### Bento Grid Cell (PainPoints)

Grid container: `grid grid-cols-1 md:grid-cols-12 border-t border-l border-stone-200`
Cell: `border-b border-r border-stone-200 p-8 sm:p-10 md:p-12`

### CTA Strip (bottom of section)

```
border-t border-stone-200 p-6 sm:p-10
```

Text: `text-[15px] text-stone-500 leading-relaxed max-w-md`

### Form Inputs (Contact page)

```
w-full px-4 py-3 rounded-lg border border-stone-200
bg-white text-stone-900 text-[15px]
focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:border-warm-gold
transition-colors placeholder:text-stone-400
```

- Label: `text-sm font-medium text-stone-700 mb-1.5`
- Submit button: Should match the Primary CTA Button pattern (gradient, not flat `bg-amber-500 text-black`)

---

## 6. Dark Island Pattern

The **CTA section** uses a "dark island" pattern — a dramatically dark section floating on the light page. Creates a visual anchor before the footer.

```tsx
<section className="dark-section relative bg-[#1C1917] rounded-t-3xl overflow-hidden">
  <span className="section-label-dark">...</span>
  <h2 className="text-white">
    ... <span className="text-amber-400">accent</span>
  </h2>
  <p className="text-stone-400">...</p>
  <button className="from-amber-500 to-amber-400 text-stone-900">CTA</button>
</section>
```

- Background: `#1C1917` (stone-900) with amber radial glow
- `rounded-t-3xl` for smooth transition from light content
- `.dark-section` triggers CSS text-gradient overrides (bright values for dark bg)
- **Body text:** `text-stone-400` (NOT `text-stone-600` — stone-600 fails contrast on dark bg)
- **Label:** `text-amber-400` via `.section-label-dark`
- Button: inverted — amber button with dark text

---

## 7. Mobile Patterns

### Staggered Editorial Layout

For stat lists on mobile. Creates editorial rhythm with alternating left/right alignment.

- Container: `sm:hidden px-10 space-y-8 pb-6`
- Items: `max-w-[75%]`, odd indices: `text-right ml-auto`
- Stat: `text-[3.25rem] font-display font-bold text-warm-white`
- Label: `text-[13px] text-stone-500`

### Floating Cards Hidden on Mobile

`hidden sm:block` — they clip on small screens.

---

## 8. Motion & Animation

### Philosophy

Minimal by default. Quality comes from typography and spacing, not effects.

### GSAP + ScrollTrigger

| Context                     | Animation                       | Ease           |
| --------------------------- | ------------------------------- | -------------- |
| SolutionsAnimator labels    | `opacity: 0→1` (0.4s)           | `power2.out`   |
| SolutionsAnimator content   | `x: ±20→0, opacity: 0→1` (0.6s) | `power3.out`   |
| PageScrollAnimator sections | `y: 24→0, opacity: 0→1` (0.7s)  | `power3.out`   |
| HeroDemo browser timeline   | Complex multi-scene             | `power2.inOut` |

### CSS Transitions

| Element             | Duration       | Properties                     |
| ------------------- | -------------- | ------------------------------ |
| Card hover          | `duration-300` | border-color, background-color |
| `.bento-card` hover | `duration-500` | border-color, background-color |
| Nav background      | `duration-500` | background, border, box-shadow |
| Link color          | `duration-300` | color                          |

### prefers-reduced-motion

Fully respected — all keyframes disabled, GSAP checks before creating timelines.

---

## 9. Accessibility

### Focus Rings

```css
outline: 2px solid #b45309;
outline-offset: 2px;
border-radius: 4px;
```

### Color Contrast

| Pair                   | Ratio  | Verdict                |
| ---------------------- | ------ | ---------------------- |
| `#1C1917` on `#FAF9F6` | ~17:1  | ✅ Headings            |
| `#57534E` on `#FAF9F6` | ~5.5:1 | ✅ Body text           |
| `#78716C` on `#FAF9F6` | ~4.6:1 | ✅ Secondary text      |
| `#B45309` on `#FAF9F6` | ~5.2:1 | ✅ Accent labels       |
| `#FFFFFF` on `#D97706` | ~3.2:1 | ✅ Button text (large) |
| `#FFFFFF` on `#1C1917` | ~17:1  | ✅ Dark island text    |

---

## 10. Radial Gradient Recipes

Very low opacity ambient washes on the light background:

- Gold: `0.01` – `0.04` opacity
- Violet: `0.01` – `0.03` opacity
- Alternate gold/violet positions across sections to avoid striping

---

## 11. Shared CSS Utilities (globals.css)

| Class                   | Definition                                                        | Usage                 |
| ----------------------- | ----------------------------------------------------------------- | --------------------- |
| `.page-frame`           | `max-w-[1200px] mx-auto` + rail pseudo-elements                   | Page container        |
| `.bento-card`           | `bg-white border-stone-200 rounded-lg` + hover                    | Bento cards           |
| `.section-label`        | `text-xs font-semibold text-warm-gold uppercase tracking-[0.2em]` | Eyebrows              |
| `.section-label-dark`   | Same but `text-amber-400`                                         | Dark section eyebrows |
| `.cyber-button`         | `from-amber-600 to-amber-500 text-white`                          | CTA buttons           |
| `.cyber-button-outline` | `border-stone-300 text-stone-800`                                 | Secondary buttons     |
| `.dark-section`         | Triggers text-gradient overrides for bright-on-dark               | CTA wrapper           |

**Removed utilities (previously here, deleted as unused):**

- `.section-heading` — was not referenced by any component
- `.section-subheading` — was not referenced; also used `text-stone-400` which is wrong for light theme
- `.glass-card` — dark-theme holdover, no longer used

---

## 12. Navigation

### Desktop

- Scrolled: `bg-warm-bg/80 backdrop-blur-2xl border-stone-200 shadow-[0_4px_30px_rgba(0,0,0,0.04)]`
- Links: `text-stone-500 hover:text-stone-900`
- Logo: "austin" `text-stone-900` + "o" `text-warm-gold`

### Mobile

- Panel: `bg-warm-bg`, links `text-stone-600 border-stone-200`

### Solutions Dropdown

- `bg-white/95 border-stone-200 shadow-lg`, items `text-stone-600 hover:bg-stone-100`

---

## 13. Footer

- `bg-warm-bg`, `border-t border-stone-200`
- Links: `text-stone-500 hover:text-warm-gold`
- Headings: `text-stone-900`
- Copyright: `text-xs text-stone-400 font-mono`

---

## 14. Page Template

```tsx
export default function NewServicePage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-warm-bg">
      <Navigation />
      <div className="page-frame">
        <PageScrollAnimator>
          <div
            className="relative border-b border-stone-200 overflow-hidden"
            style={{ backgroundImage: "..." }}
          >
            <HeroComponent />
          </div>
          <div
            className="relative border-b border-stone-200"
            style={{ backgroundImage: "..." }}
          >
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{ background: "linear-gradient(...)" }}
              aria-hidden="true"
            />
            <div className="pt-14 sm:pt-28 md:pt-32">
              <ContentSection />
            </div>
          </div>
          <div
            className="relative border-b border-stone-200"
            style={{ backgroundImage: "..." }}
          >
            <FinalCTA />
          </div>
        </PageScrollAnimator>
      </div>
      <Footer />
    </main>
  );
}
```

---

## 15. Anti-patterns

- **Dark theme for local business audience** — deprecated. Cream/amber speaks trust to non-technical visitors.
- **`border-white/[0.06]` outside dark mockups** — use `border-stone-200`. White-opacity borders only inside dark mockup containers.
- **`text-white` for headings on page content** — use `text-stone-900` or `text-warm-white`. `text-white` only inside dark mockups, dark island CTA, or on amber buttons.
- **`bg-white/[0.02]` for cards** — invisible on light bg. Use `bg-white` for white-on-cream cards.
- **Gradient overlays on everything** — max 0.04 opacity on light backgrounds.
- **Uniform vertical stacks on mobile** — use staggered editorial layout for stats.
- **`ease-in-out` for everything** — use `power2.out` / `power3.out` for reveals.
- **Same card size in feature grids** — vary sizes or add wildcard cards.
- **`hover:bg-stone-100` on cards** — too harsh on cream bg. Use `hover:bg-stone-50`.
- **`hover:text-amber-300` on light backgrounds** — dark-theme holdover, low contrast on cream. Use `hover:text-amber-700`.
- **`text-stone-600` inside `.dark-section`** — fails WCAG contrast. Use `text-stone-400`.
- **Raw `#4ADE80` hex for green** — use `green-400` class (dark mockups) or `warm-green` token (light page). Don't hardcode hex values in Tailwind classes. SVG `stroke`/`fill` attributes can keep the hex since SVG doesn't read Tailwind tokens.
- **Flat `bg-amber-500 text-black` for buttons** — always use the gradient CTA pattern (`from-amber-600 to-amber-500 text-white`).
- **Colored glows / brand-colored box-shadows** — avoid glowing shadow effects (e.g. `rgba(180,83,9,0.15)` spread shadows). Use structural depth techniques instead: white offset cards, subtle neutral shadows, layered borders. Glows feel techy/SaaS — this brand is warm & tactile.
