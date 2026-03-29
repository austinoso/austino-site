# loudbark.dev — Design System

Living reference for visual consistency across all pages. Updated July 2025 for the **green accent migration**. **Every new page or component must follow these patterns.**

---

## 1. Context

- **Business:** Solo web development & automation agency serving Central Valley small businesses
- **Audience:** Small business owners (30–60), non-technical, evaluating local web partners — trust, competence, and clarity matter more than flashy tech aesthetics
- **Design direction:** "Warm Studio" — light, warm, approachable. Cream paper base with deep forest green accents and dark warm text. Typography-driven hierarchy, generous whitespace, restrained color. Green signals growth and trust; the warm cream base keeps it from feeling clinical.
- **Previous directions (deprecated):**
  - Dark UI with gold accents ("high-end whiskey bar") — spoke to dev portfolios, not the actual audience.
  - Amber/warm-gold accent system — replaced by `#004D3A` forest green in July 2025.

---

## 2. Colors

### Palette Tokens (tailwind.config.ts)

| Token                | Value     | Role                                                   |
| -------------------- | --------- | ------------------------------------------------------ |
| `warm-bg`            | `#FAF9F6` | Page background — warm off-white paper                 |
| `warm-surface`       | `#FFFFFF` | Card/elevated backgrounds — white on cream             |
| `warm-surface-hover` | `#F5F4F0` | Active/hover card fills                                |
| `warm-border`        | `#E7E5E4` | Structural borders (rarely used directly)              |
| `warm-white`         | `#1C1917` | Headings, high-emphasis text (stone-900)               |
| `warm-green`         | `#16A34A` | Success/live indicators (green-600)                    |
| `warm-green-dim`     | `#15803D` | Muted success (green-700)                              |

> **Note:** `warm-gold` (`#B45309`) and related gold tokens still exist in tailwind config but are deprecated for homepage/component use. They remain for backward compatibility with blog prose links and some legacy patterns.

### Brand Color Identity

The accent palette is built on **forest green** (`#004D3A`) as the primary brand color, paired with **brick red** (`#B84C3A`) for call-to-action elements. This creates a complementary warm + cool tension — green for trust and growth, brick red for urgency and action.

**Color roles:**

| Role | Value | Where |
|------|-------|-------|
| **Primary accent** | `#004D3A` | Section labels, heading accent spans, text links, icon tints, blockquote borders, team card titles |
| **Primary accent hover** | `#003328` | Hover state for green text links |
| **CTA / action** | `#B84C3A` | PrimaryButton background, hero CTA, mid-page CTA |
| **CTA shadow** | `#B84C3A/20` | Button shadow (`shadow-[#B84C3A]/20`) |
| **Automation link accent** | `#E07A5F` | Coral link on dark green bg (automation section only) |

### Homepage Section Background Ramp

The homepage uses a deliberate **green temperature ramp** — backgrounds warm from neutral toward green as the user scrolls:

| Section | Background | Notes |
|---------|-----------|-------|
| Hero | `bg-[#004D3A]` | Dark green — immersive, text is white/emerald tones |
| 01 Website | `bg-white` | Clean, lightest surface |
| 02 Visibility | `bg-[#F2F7F5]` | Faint green tint — barely perceptible warmth |
| Mid CTA | `bg-[#C5E8DC]` | Light mint — clear green presence |
| 03 Automation | `bg-[#004D3A]` | Full dark green — mirroring the hero |
| Work | `bg-[#FAF5F2]` | Warm cream — deliberate break from green |
| About | `bg-warm-bg` | Default cream |
| CTA (footer) | `bg-warm-bg` | Default cream |

### Accent Panel System (Service Section Visuals)

Each service section visual (screenshot, SERP mockup) sits on a decorative **green accent panel** that peeks out behind it:

| Panel element | Value | Notes |
|---------------|-------|-------|
| Panel gradient | `linear-gradient(155deg, #D4EAE2 0%, #C2DED5 100%)` | Soft green wash |
| Hard offset shadow | `#A8CCBF` | Visible block shadow |
| Left-aligned mockup (Section 01) | `boxShadow: '-8px 10px 0px 0px #A8CCBF'` | Shadow falls left |
| Right-aligned mockup (Section 02) | `boxShadow: '8px 10px 0px 0px #A8CCBF'` | Shadow falls right |
| Automation card shadow | `boxShadow: '12px 12px 0px 0px #00382A, 0 8px 32px rgba(0,0,0,0.25)'` | Dark green shadow on dark section |

### Text Color Hierarchy

| Role | Class / Value | Hex | Usage |
|------|---------------|-----|-------|
| Primary (headings) | `text-warm-white` | `#1C1917` | All h1–h4, card titles, emphasis |
| Accent heading span | `text-[#004D3A]` | `#004D3A` | Colored word in section headings |
| Primary body | `text-stone-600` | `#57534E` | Main paragraphs directly under headings |
| Secondary body | `text-stone-500` | `#78716C` | Descriptions, stat labels, card body text |
| Tertiary/meta | `text-stone-400` | `#A8A29E` | Eyebrow sources, timestamps, mono labels |
| Accent label | `text-[#004D3A]` | `#004D3A` | Section labels (`.section-label`), signal stats |
| Dark bg — primary | `text-white` | `#FFFFFF` | Headings on `#004D3A` backgrounds |
| Dark bg — body | `text-emerald-100/75` | — | Body text on `#004D3A` backgrounds |
| Dark bg — accent link | `text-[#E07A5F]` | `#E07A5F` | Link on dark green (automation section) |
| Dark bg — meta | `text-[#114232]/50` | — | Mono meta text on green backgrounds |

### Surface & Border Colors

| Value | Usage |
|-------|-------|
| `bg-warm-bg` / `#FAF9F6` | Default page background |
| `bg-white` | Cards, elevated surfaces, Section 01 background |
| `bg-[#F2F7F5]` | Section 02 (Visibility) background |
| `bg-[#C5E8DC]` | Mid-page CTA background |
| `bg-[#004D3A]` | Hero, Section 03 (Automation) |
| `bg-[#FAF5F2]` | Work section — warm cream variant |
| `bg-stone-50` | Hover fills, inner card backgrounds |
| `border-stone-200` | **Primary border** — section dividers, card edges, inputs |
| `border-stone-300` | Hover border state |
| `border-[#004D3A]/25` | Green-tinted button borders (outline CTA) |
| `border-[#004D3A]/40` | Blockquote left bars |
| `border-[#A8CCBF]` | Mid CTA top border |
| `border-white/10` | Section borders on dark green backgrounds |

#### Dark Mockup Surfaces (kept dark for contrast)

| Value | Usage |
|-------|-------|
| `bg-[#0C0B09]` | Browser mockup frames, phone frames |
| `bg-[#0A0A0E]` | Dashboard mockup frames |
| `border-white/[0.06]` | Inside dark mockups ONLY |
| `border-white/[0.08]` | Dark mockup frames |

### Color Rules

- **60-30-10:** Cream surfaces (60%) → stone text layers (30%) → green + brick red accents (10%)
- **Green is for emphasis and trust** — section labels, heading accent words, text links, icon tints, blockquote borders. Never for body paragraphs.
- **Brick red is for action only** — PrimaryButton, hero CTA. One CTA color, used consistently.
- **Dark mockups sit as embedded "islands"** on the light page — their dark bg creates contrast that makes screenshots pop.
- Radial gradient washes on homepage have been **removed** — they were imperceptible and added code complexity for zero visual payoff.

---

## 3. Typography

### Fonts

| Role | Font | Class | CSS Variable | Usage |
|------|------|-------|-------------|-------|
| Body | Inter | `font-sans` | `--font-inter` | Default body text, navigation |
| Display | Plus Jakarta Sans | `font-display` | `--font-jakarta` | All headings, section titles, stat numbers |
| Mono | System monospace | `font-mono` | — | Labels, eyebrows, stat values, code |

Loaded via `next/font/google` in `app/layout.tsx`.

### Heading Scale

| Element | Classes | Context |
|---------|---------|---------|
| **H1** (hero) | `font-display tracking-tight` + `clamp(2.2rem, 5.6vw, 4.7rem)` line-height `0.99` | Homepage hero — fluid sizing |
| **H2** (service section) | `font-display text-[2.2rem] sm:text-[2.7rem] font-bold leading-[1.04] tracking-tight text-warm-white` | Service pillar sections (01, 02, 03) |
| **H2** (standalone section) | `font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.1] tracking-tight` | About, CTA sections |
| **H2** (centered) | `font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white leading-[1.1] tracking-tight` | Work section |
| **H3** (subsection) | `font-display text-[1.95rem] sm:text-[2.35rem] font-bold leading-[1.02] tracking-tight` | Automation copy (white text on dark) |
| **H3** (project title) | `font-display text-2xl sm:text-3xl font-semibold text-warm-white leading-snug` | Work project title below image |
| **H4** / `<dt>` | `text-base font-semibold text-warm-white mb-2` | Card titles, definition terms |

### Body Text Scale

| Role | Classes | Where used |
|------|---------|-----------|
| Primary body (under h2) | `text-base sm:text-lg text-stone-600 leading-relaxed` | About body, CTA body, section intros |
| Body (service section) | `text-[16px] leading-relaxed text-stone-600` | Under service headings |
| Secondary body | `text-[15px] text-stone-500 leading-relaxed` | Card descriptions, pull quotes |
| Card/list body | `text-[13px] leading-relaxed text-stone-500` | Tool cards, small descriptions |
| Caption/meta | `text-xs text-stone-400` or `text-stone-500` | Timestamps, fine print |

### Mono Text

| Usage | Classes |
|-------|---------|
| Section eyebrows | `text-[11px] font-mono text-stone-400 uppercase tracking-widest` |
| Stat annotations | `text-[10px] font-mono text-[#004D3A] uppercase tracking-[0.2em]` |
| CTA reassurance | `text-[11px] font-mono text-stone-500` |

### Orphan Prevention

Use `\u00A0` (non-breaking space) or `&nbsp;` between the last 2–3 words of any line that risks orphaning a single word.

---

## 4. Layout

### Site Frame

```html
<div className="site-frame">{/* sections */}</div>
```

- `max-w-[1600px] mx-auto` with `::before`/`::after` pseudo-element vertical rails (1px, `rgba(0,0,0,0.06)`)
- Navigation sits **above** the frame (fixed, full-width)
- Footer sits **outside** the frame

> **Note:** The old `page-frame` (`max-w-[1200px]`) still exists in CSS but is no longer used on the homepage. The homepage uses `site-frame` at 1600px. Some inner elements (like MidCTA) may use `max-w-[1200px]` for narrower content.

### Section Horizontal Padding

All sections use this responsive padding pattern:

```
px-6 sm:px-10 md:px-14 lg:px-20
```

Service pillar sections within the 1600px container use slightly different breakpoints:

```
px-6 sm:px-10 md:px-16 lg:px-20
```

### Section Vertical Spacing

**Homepage service sections:**

```
py-20 sm:py-24 lg:py-28
```

**Homepage non-service sections (Work, About):**

```
pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28
```

**CTA section (asymmetric — more bottom breathing room):**

```
pt-20 pb-24 sm:pt-24 sm:pb-32 md:pt-28 md:pb-36
```

**Mid CTA (compact):**

```
py-14 sm:py-16
```

**Footer:** `py-14 sm:py-18`

### Service Section Grid

All three service pillar sections use this consistent grid:

```
grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20
```

- Section 01 (Website): Visual (1.1fr) LEFT, Copy (0.9fr) RIGHT
- Section 02 (Visibility): Copy (0.9fr) LEFT, Visual (1.1fr) RIGHT — `lg:grid-cols-[0.9fr_1.1fr]`
- Section 03 (Automation): Visual (1.1fr) LEFT, Copy (0.9fr) RIGHT

Each section lives inside `mx-auto max-w-[1600px]`.

### Section Dividers

| Type | Pattern | Where |
|------|---------|-------|
| Bottom border | `border-b border-stone-200` | Most sections |
| Green gradient h-px | `linear-gradient(90deg, transparent, rgba(0,77,58,0.05-0.12)...)` | Work, About top edges |
| Green border on dark | `border-b border-white/10` | Automation section |
| Green solid border | `border-t border-[#A8CCBF]` | Mid CTA top edge |

### Homepage Section Order

```
Hero (bg-[#004D3A])
  └─ ServicePillars wrapper
       ├─ 01 Website (bg-white)
       ├─ 02 Visibility (bg-[#F2F7F5])
       └─ 03 Automation (bg-[#004D3A])
  └─ MidCTA (bg-[#C5E8DC])
  └─ Work (bg-[#FAF5F2])
  └─ About (bg-warm-bg)
  └─ CTA (bg-warm-bg)
Footer (bg-warm-bg, light variant)
```

---

## 5. Component Patterns

### Section Label (`.section-label`)

```css
text-xs font-semibold text-[#004D3A] uppercase tracking-[0.2em]
```

Used above section headings. Spacing: `mb-5` or `mb-5 sm:mb-6`.

> **Note:** Service pillar sections (01, 02, 03) no longer have section labels or numbers. Only About and other standalone sections use them.

### Primary CTA Button (`PrimaryButton`)

```
group inline-flex items-center justify-center gap-3
bg-[#B84C3A] text-white font-semibold rounded-lg
transition-all duration-300 hover:brightness-110 hover:-translate-y-px
shadow-lg shadow-[#B84C3A]/20 hover:shadow-xl hover:shadow-[#B84C3A]/30
focus:outline-none focus:ring-2 focus:ring-[#B84C3A] focus:ring-offset-2 focus:ring-offset-warm-bg
```

**Size variants:**

| Size | Classes |
|------|---------|
| `sm` | `px-5 py-2 text-sm` |
| `default` | `px-7 py-3.5 text-[15px]` |
| `lg` | `px-7 sm:px-8 py-3.5 sm:py-4 text-base` |

Arrow icon (optional): `w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5`

### Outline Button (Green)

Used for "Read Case Study" in the Work section:

```
group inline-flex items-center gap-2.5 px-6 py-3
border border-[#004D3A]/25 rounded-lg
text-[14px] font-medium text-[#004D3A]
hover:bg-[#004D3A] hover:text-white hover:border-[#004D3A]
transition-all duration-300
```

**Hover behavior:** Fills solid green on hover — a deliberate "commitment" interaction that matches the CTA energy.

### Ghost Button (Hero secondary)

```
group inline-flex items-center gap-2 rounded-lg
border border-white/15 bg-white/[0.07] px-5 py-3
text-[15px] font-medium text-white/80
shadow-[0_10px_24px_rgba(0,0,0,0.15)]
hover:border-white/25 hover:bg-white/[0.12] hover:text-white
transition-all duration-200
```

### Text Link (Green)

**Primary text link (most usage):**

```
group inline-flex items-center gap-2 text-[14px] font-semibold
text-[#004D3A] hover:text-[#003328] transition-colors duration-200
```

Arrow icon: `w-3.5 h-3.5` or `w-4 h-4`, `transition-transform duration-300 group-hover:translate-x-0.5`

**Muted text link (captions, live site links):**

```
inline-flex items-center gap-2 text-[13px] font-mono
text-stone-400 hover:text-[#004D3A] transition-colors
```

### Service Section — Visual with Accent Panel

The visual side of each service section wraps the mockup in a decorative green accent panel:

```tsx
<div className="relative">
  {/* Panel behind mockup — offset to create peek effect */}
  <div
    className="absolute -left-3 top-5 right-5 bottom-[-10px] rounded-2xl"
    style={{
      background: "linear-gradient(155deg, #D4EAE2 0%, #C2DED5 100%)",
      boxShadow: "-8px 10px 0px 0px #A8CCBF",
    }}
    aria-hidden="true"
  />
  {/* Mockup on top */}
  <div className="relative z-10">
    <MockupComponent />
  </div>
</div>
```

**Direction depends on section alignment:**
- Left-aligned visual: panel offset `-left-3 ... right-5`, shadow falls LEFT (`-8px`)
- Right-aligned visual: panel offset `-right-3 ... left-5`, shadow falls RIGHT (`8px`)

### Capability Chips

Inline pills showing what a service includes:

```
rounded-full border border-stone-200 bg-white px-4 py-2
text-[13px] font-medium text-stone-600
```

On tinted backgrounds (Section 02): `bg-white/80` instead of `bg-white`.

No hover state — these are informational, not interactive.

### Proof Badge (Floating)

Small result badges anchored to visuals. Used on Website screenshot and SERP mockup:

```
flex items-center gap-2.5 rounded-xl border border-stone-100 bg-white
px-3 py-2 shadow-[0_8px_28px_rgba(28,25,23,0.14),0_2px_6px_rgba(28,25,23,0.06)]
```

Content: green dot (`bg-green-500` with ring `0 0 0 3px rgba(22,163,74,0.2)`) + stat text.

### Work Section — Centered Layout with Floating Badges

The Work section uses a centered vertical layout (not a left/right grid):

```
Heading (centered) → Image (max-w-[720px], centered) → Info below (centered)
```

**Floating outcome badges** appear on `xl+` screens, positioned absolutely around the image:

```tsx
<div className="hidden xl:flex absolute z-20 -left-[9rem] top-[14%] items-center gap-2.5
  rounded-xl border border-stone-200 bg-white px-4 py-3
  shadow-[0_4px_16px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)]">
  <CheckCircle2 className="w-4 h-4 text-warm-green flex-shrink-0" />
  <span className="text-[13px] font-medium text-stone-700 whitespace-nowrap">Badge text</span>
</div>
```

Three badges: "Page 1 on Google" (top-left), "Booking & payments automated" (mid-right), "Ongoing growth strategy" (bottom-left).

**Mobile fallback:** `xl:hidden` horizontal badge row below the image with smaller styling (`rounded-lg`, `px-3.5 py-2.5`, `text-[12px]`).

**Critical:** The section wrapper must NOT have `overflow-hidden` — it would clip the floating badges.

### About Section — Two-Column with Team Cards

Layout: `grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20`

**Left column:** Heading, bio paragraph, blockquote, "More about how I work" link.

**Right column:** "The Team" mono label, stacked cards (`flex flex-col gap-5`):
- Austin card: photo + name + "Developer & Founder" + description
- Rosa card: photo + name + "Head of Morale" + description

Team card pattern:

```
flex items-start gap-5 p-6 sm:p-7 rounded-xl border border-stone-200 bg-white shadow-sm
```

Photo: `w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-stone-200 shadow-md shadow-black/8`

Name: `text-lg font-semibold text-warm-white leading-snug tracking-tight`

Title: `font-mono text-[10px] text-[#004D3A] uppercase tracking-widest mt-1`

### CTA Section — Lowkey Steps

No dark island. Cream background, simple layout:
- Divider line (`h-px bg-stone-200`)
- "Your Move" section label
- Heading + body
- 3-step ordered list (`sm:grid-cols-3`)
- Text link "Start a Conversation" + "Free, no commitment" mono note

Step pattern:

```
flex gap-3
├─ span: text-[11px] font-mono text-stone-500 font-medium
└─ div: title text-sm font-medium text-stone-700 + desc text-[13px] text-stone-500
```

### Mid CTA (Confidence Pivot)

Sits between service sections and the case study. Light mint background (`#C5E8DC`):

```
border-t border-[#A8CCBF] bg-[#C5E8DC] py-14 sm:py-16
```

Layout: flex row on `sm+`, blockquote-style text left, PrimaryButton right. Inner content uses `max-w-[1200px]` (narrower than main sections).

### Browser Mockup Frame (Light)

```tsx
<div className="overflow-hidden rounded-xl border border-stone-200 bg-white"
     style={{ boxShadow: "0 2px 0 0 rgba(28,25,23,0.06) inset" }}>
  {/* Chrome bar */}
  <div className="flex items-center gap-2 border-b border-stone-200 bg-stone-100 px-3 py-2">
    <span className="flex gap-1.5">
      {[0, 1, 2].map(i => <span key={i} className="h-[9px] w-[9px] rounded-full bg-stone-300" />)}
    </span>
    <span className="mx-auto ... rounded-md border border-stone-200 bg-white px-2 py-[3px] text-center text-[11px] text-stone-400">
      domain.com
    </span>
  </div>
  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
    <Image ... />
  </div>
</div>
```

### Border Radius System

| Element type | Radius | Class | Rationale |
|------|--------|-------|-----------|
| **Buttons** | 8px | `rounded-lg` | Consistent across all CTAs |
| **Form inputs** | 8px | `rounded-lg` | Matches button radius |
| **Pills / tags** | full | `rounded-full` | Capability chips, trust badges |
| **Cards / containers** | 12px | `rounded-xl` | Content cards, team cards, mockup frames |
| **Images (Work)** | 16px | `rounded-2xl` | Project image — softer frame |
| **Accent panels** | 16px | `rounded-2xl` | Decorative panels behind mockups |
| **Shell (Hero demo)** | 28px | `rounded-[28px]` | Hero search demo container |
| **Automation decorative rect** | 34px | `rounded-[34px]` | Subtle background shape on dark section |
| **Inner images (avatars)** | 8px | `rounded-lg` | Photos inside cards |

---

## 6. Motion & Animation

### Philosophy

Minimal by default. Quality comes from typography and spacing, not effects. Animations should match the "trustworthy local partner" feel — nothing flashy.

### Hero Animations

| Element | Animation | Timing |
|---------|-----------|--------|
| Headline lines | `heroLineReveal` (clip from below) | `1s cubic-bezier(0.16, 1, 0.3, 1)`, staggered 0.15s/0.25s |
| Body text, CTAs | `heroFadeIn` (fade + translateY 6px) | `0.7s ease`, staggered from 0.5s |
| SearchDemo | Multi-phase typing + reveals | Custom JS with `sleep()` timers |

### ScrollReveal (homepage sections)

Uses `data-animate` attributes on children. Elements reveal on scroll intersection.

| Attribute | Effect |
|-----------|--------|
| `data-animate="label"` | Fade in |
| `data-animate="fade"` | Fade in with slight upward translate |
| `data-animate="slide-up"` | Slide up from below |
| `data-animate="card"` | Card entrance |
| `data-animate="line"` | Line/divider reveal |

### CSS Transitions

| Element | Duration | Properties |
|---------|----------|-----------|
| Card hover | `duration-300` | border-color, background-color |
| Button hover | `duration-300` | brightness, transform, shadow |
| Link hover | `duration-200` | color |
| Image hover (Work) | `duration-700` | transform (scale) |
| Outline button fill | `duration-300` | all (background, color, border) |
| Nav background | `duration-500` | background, border, box-shadow |

### prefers-reduced-motion

Fully respected — all keyframes disabled, GSAP checks before creating timelines. Hero falls back to static `phase: "organic"`.

---

## 7. Accessibility

### Focus Rings

```css
outline: 2px solid #B45309;
outline-offset: 2px;
border-radius: 4px;
```

> **Note:** Focus ring color is still amber (`#B45309`) — retained for visibility contrast on both light and dark backgrounds.

### Color Contrast

| Pair | Ratio | Verdict |
|------|-------|---------|
| `#1C1917` on `#FAF9F6` | ~17:1 | ✅ Headings |
| `#57534E` on `#FAF9F6` | ~5.5:1 | ✅ Body text |
| `#78716C` on `#FAF9F6` | ~4.6:1 | ✅ Secondary text |
| `#004D3A` on `#FAF9F6` | ~8.7:1 | ✅ Green accent on cream |
| `#004D3A` on `#FFFFFF` | ~9.7:1 | ✅ Green accent on white |
| `#FFFFFF` on `#004D3A` | ~9.7:1 | ✅ White text on dark green |
| `#FFFFFF` on `#B84C3A` | ~4.8:1 | ✅ Button text on brick red |
| `#114232` on `#C5E8DC` | ~6.2:1 | ✅ Text on mid CTA bg |

---

## 8. Shared CSS Utilities (globals.css)

| Class | Definition | Usage |
|-------|-----------|-------|
| `.site-frame` | `max-w-[1600px] mx-auto` + rail pseudo-elements | Homepage container |
| `.page-frame` | `max-w-[1200px] mx-auto` + rail pseudo-elements | Service/inner pages |
| `.section-label` | `text-xs font-semibold text-[#004D3A] uppercase tracking-[0.2em]` | Eyebrows |
| `.section-px` | `px-6 sm:px-10 md:px-14 lg:px-20` | Horizontal padding |
| `.section-py-lg` | `pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28` | Standard vertical spacing |

### Text Gradient Utilities (deprecated for homepage)

These still exist in globals.css but are **not used on the current homepage**. Green accent spans use solid `text-[#004D3A]` instead.

| Class | Gradient | Status |
|-------|---------|--------|
| `.text-gradient` | `#B45309 → #DB2777 → #7C3AED` | Deprecated — amber/rose/violet |
| `.text-gradient-brand` | `#B45309 → #DB2777` | Deprecated |
| `.text-gradient-gold` | `#92400E → #B45309` | Deprecated |
| `.text-gradient-green` | `#15803D → #16A34A → #22C55E` | Available but unused |

---

## 9. Navigation

### Desktop

- Scrolled: `bg-warm-bg/80 backdrop-blur-2xl border-stone-200 shadow-[0_4px_30px_rgba(0,0,0,0.04)]`
- Links: `text-stone-500 hover:text-stone-900`
- Active indicator: gradient bar `linear-gradient(90deg, #B45309, #DB2777)` — **still uses legacy amber/rose gradient** (TODO: consider updating)
- Logo: Icon + "Loud Bark" `text-stone-900 text-lg font-display font-bold tracking-tight`
- CTA button: Uses `PrimaryButton` (brick red)

### Mobile

- Panel: `bg-warm-bg`, links `text-stone-600 border-stone-200`

### Solutions Dropdown

- `bg-white/95 border-stone-200 shadow-lg`, items `text-stone-600 hover:bg-stone-100`

---

## 10. Footer

Supports `variant` prop: `"light"` (default) and `"dark"`.

### Light variant (default — all pages including homepage)

- `bg-warm-bg`, `border-t border-stone-200`
- `max-w-[1600px] mx-auto` inner container
- Links: `text-stone-500 hover:text-[#004D3A]`
- Headings: `text-stone-900`
- Copyright: `text-xs text-stone-500 font-mono`

### Dark variant (available but currently unused on homepage)

- `bg-[#1C1917]`, links `text-stone-400 hover:text-emerald-500`

---

## 11. Mobile Patterns

### Floating Badges → Horizontal Row

Work section floating badges (`xl+`) collapse to a horizontal wrap row below the image on smaller screens:

```
xl:hidden mt-5 flex flex-wrap justify-center gap-2.5
```

Each badge: `rounded-lg border border-stone-200 bg-white px-3.5 py-2.5 shadow-sm` with `text-[12px]`.

### Service Section Grids → Single Column

On mobile (`<lg`), the `1.1fr/0.9fr` grid stacks to single column with `gap-12`.

---

## 12. Anti-Patterns (rejected approaches)

| Rejected | Why | What replaced it |
|----------|-----|-----------------|
| Dark CTA island (`rounded-t-3xl bg-[#1C1917]`) | Too heavy, broke warm studio feel | Light cream CTA with simple steps |
| Amber/rose/violet brand gradient | Generic, didn't match green rebrand | Solid `text-[#004D3A]` accent spans |
| `page-frame` max-w-[1200px] on homepage | Too narrow for full-width section backgrounds | `site-frame` max-w-[1600px] |
| Section numbers ("01", "02", "03") as eyebrows | Added clutter without value | Removed — sections speak for themselves |
| Radial gradient washes on section backgrounds | Imperceptible at low opacity, code overhead | Flat section-specific background colors |
| Icon + heading + description 3-col card grid | Template look | Alternating editorial layouts with mockups |
| `overflow-hidden` on Work section wrapper | Clipped floating badges | Removed; badges use `z-20` |
| Giant portrait + name plate (About) | Felt like a template hero, not personal | Two-column with stacked team cards |
| Coral gradient CTA (`from-[#C9604A] to-[#E07A5F]`) | Replaced by flat brick red | Solid `bg-[#B84C3A]` via PrimaryButton |
