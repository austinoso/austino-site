# austino.dev — Design System

Living reference for visual consistency across all pages. Derived from the homepage and web-development service page (June 2025). **Every new page or component must follow these patterns.**

---

## 1. Context

- **Business:** Solo web development & automation agency serving Central Valley small businesses
- **Audience:** Small business owners (30–60), non-technical, evaluating local web partners — trust, competence, and clarity matter more than flashy tech aesthetics
- **Design direction:** Warm, grounded refinement — dark UI with gold accents that feels premium without being cold. Think "high-end whiskey bar" not "cyberpunk dashboard." Typography-driven hierarchy, generous whitespace, restraint with color.

---

## 2. Colors

### Palette Tokens (tailwind.config.ts)

| Token                | Value     | Role                                       |
| -------------------- | --------- | ------------------------------------------ |
| `warm-bg`            | `#0B0A08` | Page background, solid surfaces            |
| `warm-surface`       | `#141310` | Card/elevated backgrounds                  |
| `warm-surface-hover` | `#1D1C18` | Active/hover card fills                    |
| `warm-border`        | `#2A2722` | Structural borders (rarely used directly)  |
| `warm-gold`          | `#D4A853` | Primary accent — labels, links, highlights |
| `warm-gold-bright`   | `#FBBF24` | CTA gradient start, bright gold UI         |
| `warm-gold-dim`      | `#B8944A` | Muted gold for radial gradient fallbacks   |
| `warm-white`         | `#F5F0E8` | Headings, high-emphasis text (warm tint)   |
| `warm-green`         | `#4ADE80` | Success/live indicators                    |
| `warm-green-dim`     | `#22C55E` | Muted success                              |

### Secondary Accent Colors (for differentiation, not primary palette)

| Token          | Value                       | Usage                                                                                    |
| -------------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| `cyber-violet` | `#A78BFA` (rgb 167,139,250) | Ambient radial gradients, data center nodes on globe, Solutions/WebDev subsection accent |
| `cyber-rose`   | `#F472B6` (rgb 244,114,182) | Ambient radial gradient third color, Solutions/Automation subsection accent              |

### Text Color Hierarchy

| Role                | Class                | Hex                 | Usage                                        |
| ------------------- | -------------------- | ------------------- | -------------------------------------------- |
| Primary (headings)  | `text-warm-white`    | `#F5F0E8`           | All h1, h2, h3, h4, card titles, emphasis    |
| Primary body        | `text-stone-300`     | `#D6D3D1`           | Main paragraphs directly under headings      |
| Secondary body      | `text-stone-400`     | `#A8A29E`           | Descriptions, stat labels, card body text    |
| Tertiary/meta       | `text-stone-500`     | `#78716C`           | Eyebrow sources, chevron icons, timestamps   |
| Accent              | `text-warm-gold`     | `#D4A853`           | Section labels, signal stats, highlight text |
| Accent (gradient)   | `text-gradient-gold` | `#F59E0B → #FDE68A` | Gradient highlight spans in h1/h2            |
| CTA text on gold bg | `text-warm-bg`       | `#0B0A08`           | Button text on amber gradient buttons        |

### Surface & Border Colors

| Value                         | Usage                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------ |
| `bg-warm-bg` / `#0B0A08`      | Page background                                                                |
| `bg-warm-surface/40` – `/95`  | Section fills, stat grid backgrounds                                           |
| `bg-white/[0.02]`             | Cards (FAQ items, tool cards, phone elements)                                  |
| `bg-white/[0.03]`             | Hover fills, stat card interiors                                               |
| `bg-white/[0.04]`             | Form inputs, URL bars                                                          |
| `bg-[#0C0B09]`                | Browser mockup frames                                                          |
| `border-white/[0.06]`         | **Primary border** — section dividers, card edges, grid cells, phone internals |
| `border-white/[0.08]`         | Card frames (browser mockups, image frames)                                    |
| `border-white/[0.10]`         | Hover state for `border-white/[0.06]`                                          |
| `border-white/[0.12]`         | `.bento-card` hover, outline button default                                    |
| `border-warm-gold/20` – `/30` | Gold-accent card borders, highlight hover states                               |
| `border-warm-gold/25`         | Gold left accent bars (editorial lists)                                        |

### Color Rules

- **60-30-10:** Warm-bg surfaces (60%) → stone text layers (30%) → gold accent (10%)
- **Gold is for emphasis** — section labels, stat callouts, heading gradient spans, CTAs. Never for body paragraphs.
- **Violet and rose only appear in radial gradients** and their specific Solutions subsection contexts. They are ambient atmosphere, not structural.
- Radial gradients use raw `rgba(212,168,83,...)` for gold and `rgba(167,139,250,...)` for violet. Opacity is always ≤0.12 for gold, ≤0.10 for violet.

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

| Element                          | Classes                                                                                                                    | Context                                           |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **H1** (hero)                    | `text-4xl sm:text-5xl md:text-[3.25rem] font-bold font-display text-warm-white leading-[1.1] tracking-tight`               | Homepage hero, service page hero                  |
| **H2** (section) — homepage      | `text-3xl sm:text-4xl md:text-5xl font-bold font-display text-warm-white leading-[1.1] tracking-tight`                     | PainPoints, Solutions, Work, About                |
| **H2** (section) — service pages | `text-3xl sm:text-4xl md:text-[2.75rem] font-bold font-display text-warm-white leading-[1.15] tracking-tight text-balance` | All service page sections                         |
| **H2** (CTA — large)             | Add `lg:text-6xl` to homepage H2 scale                                                                                     | Homepage CTA section only                         |
| **H3** (subsection)              | `text-2xl sm:text-3xl font-bold font-display text-warm-white leading-[1.15] tracking-tight text-balance`                   | Tools section, SEO section, Solutions subsections |
| **H4** / `<dt>`                  | `text-base font-semibold text-warm-white mb-2`                                                                             | Card titles, definition terms                     |

### Body Text Scale

| Role                    | Classes                                               | Where used                                                |
| ----------------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| Primary body (under h2) | `text-base sm:text-lg text-stone-300 leading-relaxed` | Hero body, FinalCTA body, section intros                  |
| Secondary body          | `text-[15px] text-stone-400 leading-relaxed`          | Card descriptions, stat labels (desktop), FAQ reassurance |
| Card/list body          | `text-sm text-stone-400 leading-relaxed`              | Tool cards, FAQ answers, feature descriptions             |
| Mobile stat label       | `text-[13px] text-stone-400 leading-relaxed`          | Staggered mobile stat layout                              |
| Caption/meta            | `text-xs text-stone-400` or `text-stone-500`          | Source links, timestamps, fine print                      |

### Mono Text

| Usage            | Classes                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| Section eyebrows | `text-[11px] font-mono text-stone-500 uppercase tracking-wider`               |
| Stat annotations | `text-[10px] font-mono text-warm-gold uppercase tracking-[0.15em]`            |
| Source links     | `text-[11px] text-stone-500 hover:text-stone-300 transition-colors font-mono` |

### Text Gradient Utilities (globals.css)

| Class                 | Gradient                              | Usage                                       |
| --------------------- | ------------------------------------- | ------------------------------------------- |
| `text-gradient-gold`  | `135deg, #F59E0B → #FDE68A`           | H1/H2 accent spans (primary)                |
| `text-gradient`       | `135deg, #FBBF24 → #F472B6 → #A78BFA` | Homepage CTA accent, multi-color highlights |
| `text-gradient-warm`  | `135deg, #F472B6 → #FBBF24`           | Rare — Solutions closer                     |
| `text-gradient-green` | `135deg, #22C55E → #4ADE80 → #86EFAC` | Success/growth callouts                     |

### Orphan Prevention

Use `\u00A0` (non-breaking space) or `&nbsp;` between the last 2–3 words of any line that risks orphaning a single word. Applied in stat labels, body text, FAQ answers.

---

## 4. Layout

### Page Frame

```html
<div className="page-frame">{/* sections */}</div>
```

- `max-w-[1200px] mx-auto` with `::before`/`::after` pseudo-element vertical rails (1px, `rgba(255,255,255,0.06)`)
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

Exception: Sections with both pt and pb explicitly set:

```
pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32
```

**Hero** (top-heavy for nav clearance):

- Homepage: `pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24`
- Service: `pt-16 pb-0 sm:pt-20 md:pt-24` + back link `mb-8 sm:mb-10`

**Footer:** `py-14 sm:py-18`

### Section Wrapper Pattern (service pages)

Every section in a service page gets this wrapper in `page.tsx`:

```tsx
<div
  className="relative border-b border-white/[0.06] overflow-hidden"
  style={{
    backgroundImage: [
      "radial-gradient(ellipse 55% 60% at ..., rgba(212,168,83,0.08), ...transparent 70%)",
      "radial-gradient(ellipse 50% 50% at ..., rgba(167,139,250,0.08), ...transparent 70%)",
    ].join(", "),
  }}
>
  {/* Optional gradient top line */}
  <div
    className="absolute top-0 inset-x-0 h-px"
    style={{
      background:
        "linear-gradient(90deg, transparent, rgba(212,168,83,0.12) 30%, rgba(167,139,250,0.10) 65%, transparent)",
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

- Every section has `border-b border-white/[0.06]`
- Each section gets 2 subtle radial gradients (one gold-dominant, one violet-dominant) placed at different corners
- Gold gradient opacity: 0.05–0.12. Violet gradient opacity: 0.06–0.10.
- Gradient glow line (`h-px`) only on sections that aren't the first — creates visual breathing between sections

### Section Dividers

| Type               | Pattern                                                          | Where                                    |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------------- |
| Bottom border      | `border-b border-white/[0.06]`                                   | Every section                            |
| Gradient h-px line | `absolute top-0 inset-x-0 h-px` with gold→violet linear gradient | Between sections (not on hero)           |
| Internal border    | `border-t border-white/[0.06]`                                   | Inside sections (stat grids, CTA strips) |

### Homepage Section Backgrounds

```tsx
style={{
  backgroundColor: 'rgba(11,10,8,0.92)',
  backgroundImage: '...'
}}
```

- Most sections: `rgba(11,10,8,0.92)` (slightly translucent warm-bg)
- Hero: `rgba(11,10,8,0.82)` (more translucent for depth)
- CTA: `rgba(6,6,8,0.92)` (darker, cooler)
- Footer: `bg-warm-bg` (solid)

---

## 5. Component Patterns

### Section Label (`.section-label`)

```
text-xs font-semibold text-warm-gold uppercase tracking-[0.2em]
```

Used above section headings. Spacing: `mb-5` or `mb-5 sm:mb-6`.

### Primary CTA Button

```
group inline-flex items-center gap-3 px-7 py-3.5
bg-gradient-to-r from-amber-500 to-amber-400
text-warm-bg font-semibold text-sm rounded-lg
transition-all duration-300 hover:brightness-110
shadow-lg shadow-amber-500/20
```

- Arrow icon inside: `w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5`
- Variant — FinalCTA (larger): `px-7 sm:px-8 py-3.5 sm:py-4 text-base w-full sm:w-auto`
- Variant — Nav desktop (compact): `px-5 py-2 text-sm`
- Variant — Nav mobile: Same as primary but `rounded-xl` and `text-center`
- All include `shadow-lg shadow-amber-500/20` for the warm glow

### Outline Button

```
group inline-flex items-center gap-2.5 px-6 py-3
border border-white/[0.08] rounded-lg
text-[14px] font-medium text-white
hover:border-warm-gold/30 hover:text-warm-gold
transition-all duration-500
```

### Text Link

```
inline-flex items-center gap-2 text-sm text-warm-gold
hover:text-warm-white transition-colors duration-300
```

Arrow: `w-3.5 h-3.5`

### Explore Link (mono)

```
inline-flex items-center gap-2 text-sm font-mono
text-{accent-color} hover:text-white transition-colors duration-300
```

Used in Solutions subsections with `text-warm-gold`, `text-cyber-violet`, or `text-cyber-rose`.

### Browser Mockup Frame

```tsx
<div className="rounded-xl border border-white/[0.08] bg-[#0C0B09] overflow-hidden"
     style={{ boxShadow: "0 24px 48px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)" }}>
  {/* Chrome bar */}
  <div className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.04]">
    <div className="flex gap-1.5">
      <div className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
      <div className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
      <div className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
    </div>
    {/* URL bar */}
    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.04]">
      <span className="text-[10px] text-white/25 font-mono">domain.com</span>
    </div>
  </div>
  {/* Content */}
  <Image ... className="w-full h-auto object-cover" />
</div>
```

### Tool/Feature Card

```
rounded-xl bg-white/[0.02] border border-white/[0.06]
p-6 sm:p-7 transition-colors duration-300
hover:bg-white/[0.04] hover:border-white/[0.10]
```

- H4: `text-base font-semibold text-warm-white mb-2`
- Body: `text-sm text-stone-400 leading-relaxed`

### Gold Wildcard Card (variant)

```
rounded-xl border border-warm-gold/20 bg-warm-gold/[0.03]
p-6 sm:p-7 transition-colors duration-300
hover:bg-warm-gold/[0.06] hover:border-warm-gold/30
```

- H4: `text-base font-semibold text-warm-gold mb-2` (gold instead of warm-white)
- Body: same `text-sm text-stone-400 leading-relaxed`

### FAQ Accordion Item

```
rounded-lg border border-white/[0.06] bg-white/[0.02]
overflow-hidden transition-colors duration-200
hover:border-white/[0.10]
```

- Button: `flex items-center justify-between w-full px-6 py-5 text-left`
- Question: `text-sm font-medium text-warm-white pr-4`
- Chevron: `w-4 h-4 text-stone-500 flex-shrink-0 transition-transform duration-200` (rotates 180° open)
- Answer panel: `overflow-hidden transition-all duration-300` → `max-h-60 opacity-100` / `max-h-0 opacity-0`
- Answer text: `px-6 pb-5 text-sm text-stone-300 leading-relaxed text-pretty`

### Bento Grid Cell (PainPoints)

```
border-b border-r border-white/[0.06]
p-8 sm:p-10 md:p-12
transition-colors duration-500
```

Grid container: `grid grid-cols-1 md:grid-cols-12 border-t border-l border-white/[0.06]`

### Gold Accent Bar (Editorial List)

```
border-l-2 border-warm-gold/25 pl-5
```

- H4: `text-[15px] sm:text-base font-semibold text-warm-white mb-1.5 sm:mb-2`
- Body: `text-[13px] sm:text-sm text-stone-400 leading-relaxed`
- Grid: `sm:grid sm:grid-cols-2 sm:gap-x-16 space-y-6 sm:space-y-0 sm:gap-y-10`

### After-Launch Numbered Grid

```
grid sm:grid-cols-3 gap-6 sm:gap-8
```

- Number: `text-2xl sm:text-3xl font-display font-bold text-warm-gold/30 leading-none` (format: "01", "02", "03")
- H3: `text-base font-semibold text-warm-white mb-1.5`
- Body: `text-sm text-stone-400 leading-relaxed`

### Stat Display — Desktop

```
block font-display text-7xl font-bold leading-none mb-5 tracking-tight text-warm-white
```

Label: `text-[15px] text-stone-400 leading-relaxed mb-4`

Variant — medium stat: `text-4xl sm:text-5xl` (PerformanceAndSEO)

### Stat Display — Signal (gold value)

```
font-display text-3xl font-bold leading-tight text-warm-gold mb-4
```

Eyebrow: `text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-1.5`

### CTA Strip (bottom of section)

```
border-t border-white/[0.06] p-6 sm:p-10
flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6
```

Text: `text-[15px] text-stone-400 leading-relaxed max-w-md`
Button: standard primary CTA

---

## 6. Mobile Patterns

### Staggered Editorial Layout

For stat/evidence lists on mobile that would be monotonous as a vertical stack. Creates editorial rhythm with alternating left/right alignment.

```tsx
{
  /* Mobile only */
}
<div className="sm:hidden px-10 space-y-8 pb-6">
  {items.map((item, i) => {
    const isRight = i % 2 === 1;
    return (
      <div
        key={i}
        className={`max-w-[75%] ${isRight ? "text-right ml-auto" : ""}`}
      >
        <span className="block font-display text-[3.25rem] font-bold leading-none mb-2 tracking-tight text-warm-white">
          {item.value}
        </span>
        <p className="text-[13px] text-stone-400 leading-relaxed">
          {item.label}
        </p>
      </div>
    );
  })}
</div>;

{
  /* Desktop grid */
}
<div className="hidden sm:grid sm:grid-cols-3 ...">...</div>;
```

**Rules:**

- Container: `px-10` (pulled in from default `px-6`)
- Items: `max-w-[75%]`
- Odd indices: `text-right ml-auto`
- Stat number: `text-[3.25rem]` (fixed, not responsive — mobile only)
- Show `sm:hidden` mobile, `hidden sm:grid` desktop

### Phone Mockup Bottom Fade

On mobile, phone mockups get clipped with a fade-to-background:

```
<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-bg to-transparent sm:hidden pointer-events-none" />
```

### Floating Cards Hidden on Mobile

Hero floating cards (notification, speed, SEO) are `hidden sm:block` — they clip awkwardly on small screens.

---

## 7. Motion & Animation

### Philosophy

Minimal by default. Motion serves comprehension and craft, not decoration. Most sections are static — the quality comes from typography and spacing.

### GSAP + ScrollTrigger

Used in two contexts:

**1. Homepage — `SolutionsAnimator.tsx`** (scroll-triggered subsection reveals)

| Target                   | Animation                | Duration | Ease         |
| ------------------------ | ------------------------ | -------- | ------------ |
| `[data-animate='label']` | `opacity: 0→1`           | 0.4s     | `power2.out` |
| `[data-content]`         | `x: ±20→0, opacity: 0→1` | 0.6s     | `power3.out` |
| `[data-visual]`          | `x: ±20→0, opacity: 0→1` | 0.6s     | `power3.out` |
| `[data-feature]`         | `y: 8→0, opacity: 0→1`   | 0.4s     | `power2.out` |
| `[data-closer]`          | `y: 10→0, opacity: 0→1`  | 0.4s     | `power2.out` |

ScrollTrigger: `start: "top 75%–90%"` depending on element.

**2. Homepage — `HeroDemo.tsx`** (animated browser demo timeline)

Full timeline with cursor movement, scene transitions, auto-fill animations, counter tick-ups. Uses `power2.inOut` for scene transitions, `power2.out` for reveals. Loop delay: 1.5s first play.

**3. Service pages — `PageScrollAnimator.tsx`** (data-fade sections)

```
y: 24, opacity: 0, duration: 0.7, ease: power3.out
ScrollTrigger: { start: "top 85%" }
```

Applied via `data-fade` attribute on each `<section>`.

**4. EdgeGlobe.tsx** (animated SVG map)

Comet streak animations, emit ring pulses, receive flashes. All respect `prefers-reduced-motion`.

### CSS Transitions

| Element             | Properties                       | Duration       | Easing       |
| ------------------- | -------------------------------- | -------------- | ------------ |
| Card hover          | `border-color, background-color` | `duration-300` | default ease |
| `.bento-card` hover | `border-color, background-color` | `duration-500` | default ease |
| Button brightness   | `filter`                         | `duration-300` | default ease |
| Nav background      | `background, border, box-shadow` | `duration-500` | default ease |
| Link color          | `color`                          | `duration-300` | default ease |
| Arrow translate     | `transform`                      | `duration-300` | default ease |
| FAQ panel           | `max-height, opacity`            | `duration-300` | default ease |

### CSS Keyframe Animations

| Name             | Duration                | Usage                          |
| ---------------- | ----------------------- | ------------------------------ |
| `skeleton-pulse` | 2s ease-in-out infinite | Loading skeletons              |
| `feed-in`        | 0.4s ease-out forwards  | AutomationDashboard feed items |
| `chevron-glow`   | 3s ease-in-out infinite | Scroll cue chevrons            |
| `fadeStep`       | 0.35s ease-out both     | Onboarding step transitions    |
| `animate-pulse`  | Tailwind default        | Green "live" dots              |

### prefers-reduced-motion

All `@keyframes` are disabled via `globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

GSAP animations in `EdgeGlobe.tsx` check `prefers-reduced-motion` before creating timelines.

---

## 8. Accessibility

### Focus Rings

Global `focus-visible` style (in `globals.css`):

```css
outline: 2px solid #d4a853;
outline-offset: 2px;
border-radius: 4px;
```

Applied to: `a`, `button`, `input`, `textarea`, `select`, `[tabindex]`.

### Color Contrast

- `warm-white` (#F5F0E8) on `warm-bg` (#0B0A08): ~16:1 ✅
- `stone-300` (#D6D3D1) on `warm-bg`: ~12.5:1 ✅
- `stone-400` (#A8A29E) on `warm-bg`: ~7.5:1 ✅
- `stone-500` (#78716C) on `warm-bg`: ~4.5:1 ⚠️ (large text / non-essential labels only)
- `warm-gold` (#D4A853) on `warm-bg`: ~8.5:1 ✅

### Semantic HTML

- `<main>`, `<section>`, `<nav>`, `<footer>` used correctly
- `<dl>`, `<dt>`, `<dd>` for definition lists (design selling points)
- `aria-hidden="true"` on decorative elements (globe, gradients, mockups)
- `sr-only` spans on external link indicators
- `role="img"` with `aria-label` on complex visual components

---

## 9. Radial Gradient Recipes

Each section gets 2 ambient radial gradients (one gold-leaning, one violet-leaning) at different corners. These create depth without being noticeable individually.

### Pattern

```tsx
style={{
  backgroundImage: [
    "radial-gradient(ellipse 55% 60% at {POSITION}, rgba(212,168,83,{OPACITY}), rgba(167,139,250,{FADE}) {MIDPOINT}%, transparent 70%)",
    "radial-gradient(ellipse 50% 50% at {POSITION}, rgba(167,139,250,{OPACITY}), transparent 70%)"
  ].join(", ")
}}
```

### Placement Strategy

Alternate gold/violet anchor positions across sections to avoid striping:

| Section Order | Gold glow position     | Violet glow position     |
| ------------- | ---------------------- | ------------------------ |
| 1 (Hero)      | top-left (`10% 15%`)   | bottom-right (`95% 90%`) |
| 2             | left (`0% 25%`)        | right (`95% 65%`)        |
| 3             | right (`85% 70%`)      | left (`10% 20%`)         |
| 4             | right (`85% 25%`)      | left (`10% 75%`)         |
| 5             | left (`15% 75%`)       | right (`80% 35%`)        |
| 6             | center-top (`45% 10%`) | right (`90% 75%`)        |
| 7 (CTA)       | right (`75% 50%`)      | left (`15% 65%`)         |

### Opacity Ranges

- Gold: `0.05` – `0.12`
- Violet: `0.06` – `0.10`
- Rose (rare third gradient): `0.05` – `0.08`

---

## 10. Shared CSS Utilities (globals.css)

| Class                   | Definition                                                                                             | Usage                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `.page-frame`           | `max-w-[1200px] mx-auto` + 1px rail pseudo-elements                                                    | Page container                                       |
| `.bento-card`           | `bg-warm-surface border border-white/[0.06] rounded-lg p-6` + hover                                    | Homepage bento cards                                 |
| `.section-label`        | `text-xs font-semibold text-warm-gold uppercase tracking-[0.2em]`                                      | Section eyebrows                                     |
| `.section-heading`      | `font-display text-4xl sm:text-5xl md:text-6xl font-bold text-warm-white leading-[1.1] tracking-tight` | Defined but rarely used — headings are mostly inline |
| `.section-subheading`   | `text-lg md:text-xl text-stone-400 max-w-2xl leading-relaxed`                                          | Defined but rarely used                              |
| `.cyber-button`         | Full gold gradient button with focus ring                                                              | CTA button utility                                   |
| `.cyber-button-outline` | Outline variant with gold hover                                                                        | Secondary button utility                             |
| `.glass-card`           | Semi-transparent warm-bg with inset shadow                                                             | Card utility                                         |

---

## 11. Responsive Breakpoints

| Breakpoint     | Key changes                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| `sm:` (640px)  | Padding `px-6→px-10`, section vspacing `pt-14→pt-28`, heading sizes step up, stagger layout→grid                     |
| `md:` (768px)  | Padding `→px-14`, vspacing `→pt-32`, heading sizes step up, bento grids activate (12-col), nav→desktop, footer→4-col |
| `lg:` (1024px) | Padding `→px-20`, hero/solutions→12-col grid layout, EdgeGlobe visible, floating cards visible                       |

---

## 12. Navigation

### Desktop

- Fixed: `fixed top-0 left-0 right-0 z-50`
- Scrolled state: `bg-[#060608]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]`
- Default: `bg-transparent`
- Links: `text-[13px] text-stone-400 hover:text-white transition-colors duration-300 tracking-wide`
- Logo: `font-display font-bold` — "austin" `text-white` + "o" `text-warm-gold`

### Mobile

- Menu panel: `fixed inset-0 top-[56px] bg-warm-bg`
- Links: `text-lg text-stone-300 hover:text-white py-4 border-b border-white/[0.06] font-mono`
- CTA: `rounded-xl` (not `rounded-lg`)

### Solutions Dropdown (desktop)

```
w-56 rounded-lg border border-white/[0.06]
bg-[#0C0B09]/95 backdrop-blur-xl
```

Items: `px-3.5 py-2.5 rounded-md text-sm text-stone-300 hover:text-white hover:bg-white/[0.06]`

---

## 13. Footer

- Background: `bg-warm-bg` (solid, no gradient)
- Border: `border-t border-white/[0.06]` (no gradient line)
- Grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-4`
- Link style: `text-sm text-stone-400 hover:text-warm-gold`
- Column heading: `text-sm font-semibold text-white mb-4`
- Copyright: `text-xs text-stone-500 text-center font-mono`

---

## 14. Page Template (for new service pages)

When building a new service page, follow this structure:

```tsx
export default function NewServicePage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-warm-bg">
      <Navigation />
      <div className="page-frame">
        <PageScrollAnimator>
          {/* Hero Section */}
          <div
            className="relative border-b border-white/[0.06] overflow-hidden"
            style={{ backgroundImage: "..." }}
          >
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
              <HeroComponent />
            </div>
          </div>

          {/* Content Sections (repeat pattern) */}
          <div
            className="relative border-b border-white/[0.06]"
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

          {/* Final CTA */}
          <div
            className="relative border-b border-white/[0.06]"
            style={{ backgroundImage: "..." }}
          >
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{ background: "linear-gradient(...)" }}
              aria-hidden="true"
            />
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
              <FinalCTA />
            </div>
          </div>
        </PageScrollAnimator>
      </div>
      <Footer />
    </main>
  );
}
```

Each `<section>` inside components should have `data-fade` for scroll-triggered entrance animation.

---

## 15. Known Inconsistencies to Resolve

These are documented discrepancies between the homepage and web-dev page that should be unified as other pages are built:

| Issue                        | Homepage                               | Web-dev                             | Recommendation                           |
| ---------------------------- | -------------------------------------- | ----------------------------------- | ---------------------------------------- |
| Heading text color           | `text-white` (many places)             | `text-warm-white`                   | Use `text-warm-white` everywhere         |
| PainPoints wide card body    | `text-cyber-gray-300`                  | —                                   | Change to `text-stone-300`               |
| Nav scrolled bg              | `bg-[#060608]/80`                      | Same                                | Consider `bg-warm-bg/80` for consistency |
| Solutions subsection accents | `text-cyber-violet`, `text-cyber-rose` | —                                   | Intentional differentiation — keep       |
| Section bg                   | `rgba(11,10,8,0.92)` per section       | `bg-warm-surface/30` on one section | Standardize approach                     |
| `.section-heading` utility   | Defined but never used                 | Never used                          | Either use it or remove it               |

---

## 16. Anti-patterns

Things that were tried and rejected or look wrong:

- **Uniform vertical stacks on mobile** — monotonous for stat lists. Use staggered editorial layout instead.
- **Borders on every internal cell** in card grids — too busy. Use open layouts with spacing.
- **Gradient overlays on everything** — keep gradients subtle and purposeful (one hero glow, ambient section tints).
- **`ease-in-out` for everything** — use `power2.out` / `power3.out` for reveals, `power2.inOut` for scene transitions.
- **Same card size in feature grids** — vary sizes or add a wildcard/featured card to break monotony.
- **Full-bleed globe without masking** — EdgeGlobe needs a `from-warm-bg` gradient mask on the left side so content overlays cleanly.
- **CLS stat ("0 layout shift")** — meaningless to non-technical clients. Use relatable metrics like "99.9% uptime."
