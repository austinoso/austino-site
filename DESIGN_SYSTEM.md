# austino.dev — Design System

Reference document for maintaining visual consistency across all pages and future sections.
Derived from the homepage redesign (Feb 2026).

---

## 1. Foundation

### Colors

| Token              | Value     | Usage                                           |
| ------------------ | --------- | ----------------------------------------------- |
| `cyber-dark`       | `#060608` | Page/body background                            |
| `cyber-accent`     | `#40E0FF` | Primary accent (links, labels, stats)           |
| `cyber-accent-dim` | `#2A9AB8` | Muted accent                                    |
| `cyber-violet`     | `#A78BFA` | Gradient / secondary accent                     |
| `cyber-rose`       | `#F472B6` | Gradient / tertiary accent                      |
| `cyber-amber`      | `#FBBF24` | Gradient / warm accent                          |
| `cyber-gray-900`   | `#0C0D12` | Darkest surface                                 |
| `cyber-gray-800`   | `#14151C` | Card backgrounds (bento-card)                   |
| `cyber-gray-700`   | `#1E2028` | Hover surfaces                                  |
| `cyber-gray-600`   | `#2A2D38` | Borders, dividers                               |
| `cyber-gray-500`   | `#6B7084` | Muted text — **avoid for small text** (use 400) |
| `cyber-gray-400`   | `#9CA3AF` | Body text, captions                             |
| `cyber-gray-300`   | `#D1D5DB` | Paragraph text                                  |
| `white`            |           | Headings, names                                 |

**Rule:** Any text below 14px should use `cyber-gray-400` or lighter — never `cyber-gray-500`.

### Typography

| Role    | Font              | Class          | Notes                        |
| ------- | ----------------- | -------------- | ---------------------------- |
| Body    | Inter             | `font-sans`    | Default, set on `<body>`     |
| Display | Plus Jakarta Sans | `font-display` | All headings, section titles |
| Mono    | JetBrains Mono    | `font-mono`    | Labels, stats, metadata      |

**Heading scale:**

- Section headings: `font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight`
- For hero/CTA where bigger: add `lg:text-6xl`
- Sub-headings: `font-display text-xl sm:text-2xl font-semibold text-white leading-snug`

### Fonts Loading

Loaded via `next/font/google` in `app/layout.tsx` with CSS variables:

- `--font-inter`
- `--font-jakarta`
- `--font-jetbrains-mono`

---

## 2. Layout

### Page Frame

All primary pages use the `.page-frame` wrapper:

```html
<div className="page-frame">{/* gradient ribbon */} {/* sections */}</div>
```

- `max-w-[1200px]`, centered
- `::before` / `::after` pseudo-elements create 1px vertical rail borders (`white/6%`)
- Navigation sits **above** the frame; Footer sits **below** it

**Exception:** Onboarding wizard uses its own narrow layout (`max-w-3xl`) — no page-frame.

### Section Padding

Standard horizontal padding for all sections:

```
px-6 sm:px-10 md:px-14 lg:px-20
```

Standard vertical padding:

```
pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28
```

**Never use** the old `pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 md:pb-36` — too generous.

### Section Dividers

Sections are separated by a bottom border, not margin:

```
border-b border-white/[0.06]
```

### Section Backgrounds

Each section gets a semi-transparent background with blur so the gradient ribbon shows through:

```tsx
style={{ background: 'rgba(6,6,8,0.72)', backdropFilter: 'blur(60px)' }}
```

Opacity range: `0.65` (lighter sections like CTA) to `0.78` (heavier sections like About, Solutions).

### Inner Page Layouts

For service/detail pages that use `<article>` wrappers or don't need the gradient ribbon, use `bg-cyber-dark` as the base and apply `bg-white/[0.02]` or subtle `border-white/[0.06]` section divisions instead.

**Old patterns to remove:**

- `bg-[#050505]` → replace with `bg-cyber-dark` or inline `#060608`
- Inline SVG noise grain overlays → remove entirely
- Hardcoded radial-gradient glow divs → remove or replace with the gradient ribbon approach

---

## 3. Components

### Section Labels

Use the `.section-label` utility class:

```
text-xs font-semibold text-cyber-accent uppercase tracking-[0.2em]
```

Always placed just above the heading with `mb-5`.

**Old pattern to replace:**

```
font-mono text-xs text-cyber-accent/70 tracking-[0.15em]
```

### Section Headings

Use the `<WordReveal>` component for scroll-animated headings on the homepage:

```tsx
<WordReveal
  text="Your heading text."
  id="section-heading"
  className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight"
  accentWords={["highlighted"]}
/>
```

For inner pages where GSAP scroll animation isn't needed, use plain headings with the same classes:

```tsx
<h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
  Heading text
</h2>
```

### Cards

**Bento card** (structured data, grid items):

```
className="bento-card"
// → bg-cyber-gray-800 border border-white/[0.06] rounded-lg p-6
```

**Glass card** (floating elements, overlays):

```
className="glass-card"
// → rounded-lg border border-white/[0.06] backdrop-blur(20px) subtle gradient bg
```

**Inline card** (team bios, sidebar items):

```
className="rounded-lg border border-white/[0.06] bg-white/[0.015] p-6 sm:p-7"
```

**Old patterns to replace:**

- `rounded-2xl` → `rounded-lg`
- `rounded-xl` → `rounded-lg`
- `bg-[#111318]` → use `bento-card` class or `bg-white/[0.015]`

### Buttons

**Primary (filled):**

```tsx
<Link className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#060608] font-semibold text-[15px] rounded-lg transition-all duration-300 hover:brightness-110">
  <span>Label</span>
  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>
```

Or use `.cyber-button` utility class.

**Secondary (outline):**

```tsx
<Link
  className="group inline-flex items-center gap-2.5 px-6 py-3 border border-white/[0.08] rounded-lg text-[14px] font-medium text-white hover:border-cyber-accent/30 hover:text-cyber-accent transition-all duration-500"
>
```

Or use `.cyber-button-outline` utility class.

### Gradients

**Text gradient:**

```
className="text-gradient"
// → cyan → violet → rose (135deg)
```

**Text gradient warm:**

```
className="text-gradient-warm"
// → rose → amber (135deg)
```

### Gradient Ribbon (Homepage Only)

Four blurred gradient blobs (`blur 100–130px`) positioned absolutely behind all sections at `z-0`. Sections sit on top with their semi-transparent `backdrop-blur` backgrounds.

The ribbon should **not** be replicated on inner pages. Inner pages use `bg-cyber-dark` solid backgrounds.

---

## 4. Animation

### GSAP + ScrollTrigger

All scroll animations use `onHeroReady()` to defer until the hero animation signals readiness:

```tsx
import { onHeroReady } from "@/lib/heroReady";

useEffect(() => {
  let ctx: gsap.Context | null = null;
  onHeroReady(() => {
    ctx = gsap.context(() => {
      // animations here
    }, sectionRef);
  });
  return () => ctx?.revert();
}, []);
```

**Standard reveal patterns:**

- Labels: `opacity: 0 → 1`, `duration: 0.4`, trigger `start: "top 85%"`
- Content blocks: `translateY(12px) → 0`, `opacity: 0 → 1`, `duration: 0.5`, trigger `start: "top 88%"`
- Cards: `translateY(32px) → 0`, `opacity: 0 → 1`, `duration: 0.7`, `stagger: 0.15`, trigger `start: "top 82%"`

### Reduced Motion

Handled in `globals.css`:

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

### Focus Styles

Global visible focus ring:

```css
a:focus-visible,
button:focus-visible,
input:focus-visible {
  outline: 2px solid #40e0ff;
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

## 5. Copy & Tone

### Voice

- Confident, direct, competitive — not fluffy or aspirational
- First person singular ("I", not "we")
- Address the reader directly ("your", "you")

### Bios / Factual Sections

- Resume-style: "[X] years experience in [skill], [skill], and [skill]."
- No marketing superlatives, no "passionate about"

### Headlines

- Short, punchy, action-oriented
- One accent-colored word per heading (via `accentWords` or `text-cyber-accent`)
- End with a period for declarative statements

### Repetition Rule

- Key phrases (like "one business per niche") should appear **at most twice** across the full page
- If a concept appears in a closer statement, don't repeat it in the preceding section's body copy

---

## 6. Inner Page Migration Checklist

Every page that hasn't been updated should be checked against this list:

### Shell

- [ ] Background: `bg-cyber-dark` / `#060608` (not `#050505`)
- [ ] Remove inline SVG noise grain overlays
- [ ] Remove old radial-gradient glow divs
- [ ] Wrap content in `.page-frame` (or justify why not)
- [ ] Navigation above frame, Footer below frame

### Spacing

- [ ] Horizontal: `px-6 sm:px-10 md:px-14 lg:px-20`
- [ ] Vertical: `pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28`
- [ ] Inter-section: `border-b border-white/[0.06]` (not margin)

### Typography

- [ ] Headings use `font-display` and `font-bold`
- [ ] Section labels use `.section-label` class
- [ ] Small text (< 14px) uses `cyber-gray-400` or lighter

### Components

- [ ] All card corners: `rounded-lg` (not `rounded-xl` or `rounded-2xl`)
- [ ] Card backgrounds: `bento-card`, `glass-card`, or `bg-white/[0.015]` (not `bg-[#111318]`)
- [ ] Buttons: `rounded-lg`, proper sizing

### Sections with Backdrop

- [ ] If using gradient ribbon: `background: rgba(6,6,8,0.7x)`, `backdropFilter: blur(60px)`
- [ ] If solid page: `bg-cyber-dark` base, subtle `bg-white/[0.02]` alternate sections

---

## 7. Pages Status

| Page              | Status          | Priority           |
| ----------------- | --------------- | ------------------ |
| Homepage          | ✅ Done         | —                  |
| Contact           | ❌ Needs update | High               |
| Web Development   | ❌ Needs update | High               |
| Automation        | ❌ Needs update | High               |
| Growth Strategy   | ❌ Needs update | High               |
| Work (index)      | ❌ Needs update | Medium             |
| Work (case study) | ❌ Needs update | Medium             |
| 404               | ❌ Needs update | Low                |
| Error             | ❌ Needs update | Low                |
| Onboarding        | ⚠️ Partial      | Low (different UX) |
