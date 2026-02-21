# Site Design System — Complete Guide

## Core Design Philosophy

This site embodies a **Premium Solo Consultancy** aesthetic — sophisticated, minimal, and technically precise. Every element should feel intentional, lean, and hand-crafted.

### Brand Positioning

- **Not** a typical developer portfolio or agency site
- **Is** a boutique technical consultancy for small business owners
- Focus: Business outcomes over technical jargon
- Tone: Confident, consultative, approachable but premium
- ICP: Local/small business owners (massage therapists, trades, retail, etc.)
- No pricing shown on-site — consultative discovery model

---

## Visual Foundation

### Color Palette (Tailwind `cyber` token)

```
Primary Background:   #050505 (Deep Black — used on every section)
Card Background:      #111318 (Dark gray — cards, inputs, mockups)
Card Surface Dark:    #0D0F13 (Chrome bars, UI chrome)
Accent Primary:       #40E0FF (Cyan — CTAs, labels, interactive)
Success Green:        #4ADE80 (Status dots, score indicators)

Text Primary:         #FFFFFF (white)
Text Secondary:       #D1D5DB (cyber-gray-300 — descriptions, body)
Text Tertiary:        #9CA3AF (cyber-gray-400 — nav links, secondary body)
Text Quaternary:      #4F5462 (cyber-gray-500 — timestamps, tags, fine print)

Border Light:         rgba(255, 255, 255, 0.06) — border-white/[0.06]
Border Hover:         rgba(255, 255, 255, 0.12) — border-white/[0.12]
Accent Glow Range:    rgba(64, 224, 255, 0.025–0.05)
Purple Glow (subtle): rgba(120, 75, 255, 0.025)
```

### Typography System

**Font Families:**

- Primary: Inter (headings, body) — `font-sans`
- Technical: JetBrains Mono (labels, nav links, metadata, tags) — `font-mono`

**Typography Scale (as implemented):**

```
Section Label:
  - Class: font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]
  - Usage: "The Problem", "The Solution", "Projects", "Get Started"
  - All sections use this consistently

Hero Ribbon:
  - Class: font-mono text-xs text-cyber-gray-400 uppercase tracking-[0.2em]
  - Usage: "Performance · Conversions · Automation"

Metadata/Small Mono:
  - Class: font-mono text-[11px] text-cyber-accent font-semibold tracking-wider
  - Usage: Card metadata ("[ 01 / BUILD_LAYER ]")

Category Tags:
  - Class: font-mono text-[10px] text-cyber-accent uppercase tracking-[0.15em]
  - Usage: Work card categories

Timestamp Tags:
  - Class: font-mono text-[10px] text-cyber-gray-500
  - Usage: Read time, small metadata

Extra Small:
  - Class: text-xs font-mono text-cyber-gray-500
  - Usage: "Accepting new projects", "Usually responds within 24 hours"

Small:
  - Class: text-sm text-cyber-gray-400 leading-relaxed
  - Usage: Footer body text, nav links

Base:
  - Class: text-base sm:text-lg text-cyber-gray-300 leading-relaxed
  - Usage: Body text, descriptions (responsive)

Large:
  - Class: text-lg sm:text-xl text-cyber-gray-300 leading-relaxed
  - Usage: Section closers, important callouts

H3 (Card/Sub-section Title):
  - Class: text-xl sm:text-2xl font-semibold text-white leading-snug tracking-tight
  - Usage: Pain point titles, sub-service headings, work card titles

H2 (Section Heading):
  - Class: text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight
  - Usage: "How I solve it.", "Recent work.", "Ready when you are."

H1 (Hero):
  - Class: text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight
  - Usage: "Websites that work as hard as you do."

CTA Heading (larger variant):
  - Class: text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight
  - Usage: CTA section only
```

**Font Weight Usage:**

- **font-normal (400):** All body text, descriptions, labels
- **font-medium (500):** Inline emphasis spans within body text
- **font-semibold (600):** Headings (H1–H3), buttons, CTAs, small mono labels
- **font-extrabold (800):** Logo only ("austino")

**Text Color Hierarchy:**

1. `text-white` → Headings, logo, inline emphasis, nav active/hover
2. `text-cyber-gray-300` (#D1D5DB) → Body text, descriptions, closers
3. `text-cyber-gray-400` (#9CA3AF) → Nav links, secondary body, trust line
4. `text-cyber-gray-500` (#4F5462) → Fine print, timestamps, tags, footer text
5. `text-cyber-accent` (#40E0FF) → CTAs, interactive highlights, hover states
6. `text-cyber-accent/70` → Section labels (consistent across all sections)
7. `text-cyber-accent/60` → Timeline node numbers

**Line Height Standards:**

- `leading-tight` (1.25) → Headings H1, H2
- `leading-snug` (1.375) → H3, card titles
- `leading-relaxed` (1.625) → Body text, descriptions, paragraphs
- `leading-normal` → Small text, navigation, tags

### Spacing System

```
Section Vertical (responsive):
  - Standard: py-20 sm:py-28 md:py-36
  - Hero: pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 md:pb-36

Container Horizontal (responsive):
  - Standard: px-6 sm:px-8 md:px-12
  - Max-width: max-w-6xl mx-auto (all sections)

Section Header Spacing:
  - Label to heading: mb-4
  - Header block to content: mb-14 sm:mb-20

Element Spacing:
  - Sub-sections: space-y-24 sm:space-y-32
  - Within sub-sections: space-y-5
  - Cards grid: gap-5 sm:gap-6

Closer Spacing:
  - Top margin: mt-20 sm:mt-28
  - Border-top: pt-10 border-t border-white/[0.06]
```

---

## Landing Page Structure

The homepage renders in this exact order:

```
Navigation (fixed)
Hero
PainPoints
Solutions
Work
CTA
Footer
```

All wrapped in `SmoothScroll` (GSAP ScrollSmoother on desktop ≥ 1024px).

### Section-by-Section Breakdown

---

### 1. Navigation — `components/Navigation.tsx`

**Behavior:**

- `fixed top-0 left-0 right-0 z-50`
- Transparent at top (`bg-transparent`)
- On scroll (>20px): `bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_12px_rgba(0,0,0,0.4)]`
- Transition: `duration-500`

**Layout:**

- Container: `max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-4`
- Logo left, links + CTA right

**Logo:**

- `text-xl font-extrabold` — "austin" in white, "o" in `text-cyber-accent`

**Desktop Links:**

- Font: `text-sm font-mono tracking-wide text-cyber-gray-400`
- Hover: `text-white`
- Items: Services (→ `/#solutions`), Work (→ `/work`)

**CTA Button:**

- `px-5 py-2 bg-cyber-accent text-[#050505] text-sm font-semibold rounded-lg`
- Hover: `brightness-110 shadow-[0_0_20px_rgba(64,224,255,0.3)]`
- Label: "Get Started" → `/contact`

**Services Anchor Scroll:**

- On homepage: prevents default Next.js navigation
- Uses `window.__smoother.scrollTo("#solutions", true, "top top")` (GSAP ScrollSmoother)
- Falls back to native `scrollIntoView` on mobile / when smoother unavailable

**Mobile Menu:**

- Toggle: `Menu` / `X` icons from lucide-react (size 20)
- Background: `bg-[#050505]/95 backdrop-blur-xl`
- Fade animation: opacity + translate-y
- Links: `text-lg font-mono text-cyber-gray-300`
- Body scroll locked when open

---

### 2. Hero — `components/Hero.tsx`

**Container:**

- `relative bg-[#050505] overflow-hidden`
- Content: `max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 md:pb-36`

**Atmospheric Layers (bottom to top):**

1. Ambient gradient: `radial-gradient(ellipse 80% 60% at 70% 40%, rgba(64,224,255,0.05), transparent), radial-gradient(ellipse 60% 50% at 20% 50%, rgba(120,75,255,0.03), transparent)` — `absolute inset-0`
2. Noise grain: SVG fractalNoise at `opacity-[0.035]`

**Grid:** `lg:grid-cols-12 gap-10 lg:gap-14 items-center`

- Copy: `lg:col-span-6`
- Visual: `lg:col-span-6`

**Copy Side:**

- H1: `text-[2rem] sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] tracking-tight` — "Websites that keep your doors open 24/7."
- Description: `text-base text-cyber-gray-300 max-w-md leading-relaxed`
- Trust line: `h-1.5 w-1.5 bg-cyber-accent/60` dot + `text-[13px] text-cyber-gray-400/80` — "Based in California's Central Valley, serving clients everywhere."
- CTA: `px-7 py-3.5 bg-cyber-accent text-[#050505] font-semibold rounded-lg text-sm shadow-lg shadow-cyber-accent/20` — "Get a Free Consultation"

**Visual Side:**

- Browser mockup card: `rounded-2xl border border-white/[0.08] bg-[#111318]` with heavy box-shadow
- Chrome bar: 3 colored dots + `mymassagecottage.com` URL in mono
- Screenshot: `aspect-[16/10]` with `object-cover`
- Floating cards (absolute positioned):
  - **Workflows Active** (bottom-left): 3 auto-completed tasks
  - **Lighthouse Score** (bottom-right): animated ring counting to 100, with Performance/Accessibility/SEO all at 100

**Animations (GSAP timeline, no ScrollTrigger — plays on mount):**

- Staggered fadeUp for ribbon → headline → description → trust → CTA → mockup → metrics → workflow
- Score ring: strokeDashoffset draw animation
- Score counter: counts 0 → 100

---

### 3. PainPoints — `components/PainPoints.tsx`

**Container:**

- `relative w-full py-20 sm:py-28 md:py-36 bg-[#050505]`
- **No accent glow** (intentionally flat for visual contrast)
- Noise grain only

**Header:**

- Label: `font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]` — "The Problem"
- H2: `text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight max-w-2xl`
- Headline: "You didn't start a business to do IT work." (word-by-word reveal)

**Timeline Layout:**

- Vertical track: `left-4 sm:left-6 w-px bg-white/[0.06]`
- Progress fill: scrub-driven `scaleY` animation, gradient from cyan 60% to 15%
- Grid per row: `grid-cols-[2rem_1fr] sm:grid-cols-[3rem_1fr] gap-6 sm:gap-10`

**Nodes:**

- Ring: `h-3 w-3 rounded-full border-2 border-cyber-accent/15 bg-cyber-accent/[0.03]`
- Glow behind node (hidden by default, animates in on active)
- Active state: ring scales 1.15, border brightens, glow appears
- Inactive rows dim to `opacity: 0.3`

**Pain Points (3 items):**

1. "Your evening is spent on data entry"
2. "Your tools don't talk to each other"
3. "Your website isn't working for you"

**Closer:**

- Gradient line: `h-px bg-gradient-to-r from-cyber-accent/40 to-transparent`
- Text: `text-lg sm:text-xl text-cyber-gray-300` — "Every hour you spend on busywork is an hour not spent growing your business. **That's what I fix.**"

**Animations (GSAP + ScrollTrigger):**

- Label fade-in
- Word-by-word headline reveal (stagger 0.06)
- Timeline progress: scrub 0.8 from `top 70%` to `bottom 40%`
- Rows: slide from right (x: 40), stagger entrance
- Nodes: scale from 0 with back.out(2.5) ease
- Active/inactive state cycling per row

---

### 4. Solutions — `components/Solutions/index.tsx`

**Container:**

- `relative w-full py-20 sm:py-28 md:py-36 bg-[#050505]`
- `id="solutions"` (anchor target for nav)

**Atmospheric Layers:**

1. Noise grain: `opacity-[0.035]`
2. Accent glow overlay: `absolute -top-32 -bottom-32 left-0 right-0` (bleeds past boundaries for soft transitions)
   - 3 radial gradients: cyan at 4% top-left, cyan at 3.5% bottom-right, purple at 2.5% center

**Header:**

- Label: `font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]` — "The Solution"
- H2: "How I solve it." (word-by-word)

**Sub-sections (3):** `space-y-24 sm:space-y-32`

1. **WebDevelopment** — `components/Solutions/WebDevelopment.tsx`
   - Shows mymassagecottage.com project as visual proof
   - Grid layout with content + browser mockup

2. **Automation** — `components/Solutions/Automation.tsx`
   - Terminal-style visual with typewriter animation
   - Shows workflow automation examples

3. **OngoingSupport** — `components/Solutions/OngoingSupport.tsx`
   - Titled "Ongoing Partnership" (not "Ongoing Support")
   - Dashboard visual with counters and status rows
   - Copy: "I don't disappear after launch..."

**Closer:**

- `mt-20 sm:mt-28 pt-10 border-t border-white/[0.06] max-w-xl`
- Text: "Every business is different. **I'll recommend exactly what you need — nothing more.**"
- No pricing shown

**Animations (GSAP + ScrollTrigger):**

- Label + headline: same pattern as PainPoints
- Sub-sections: content slides from left/right (alternating), visuals from opposite
- Features: stagger fadeUp
- Section-specific: performance bars fill, score counters, terminal typewriter, dashboard counters

---

### 5. Work — `components/Work.tsx`

**Container:**

- `relative w-full py-20 sm:py-28 md:py-36 bg-[#050505]`
- `id="work"`
- **No accent glow** (flat section for contrast)

**Header:**

- Label: `font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]` — "Projects"
- H2: "Recent work." (word-by-word)

**Project Cards Grid:** `grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6`

**Card Style:**

- `rounded-xl border border-white/[0.06] bg-[#111318] overflow-hidden`
- Hover: `border-white/[0.12]`
- Shadow: `0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)`
- Thumbnail: `aspect-[16/9]` with gradient overlay
- Image hover: `scale-[1.03]` over 500ms
- Content padding: `p-5 sm:p-6`
- Category + read time at top
- Title: `text-lg font-semibold text-white` → accent on hover
- Excerpt: `text-sm text-cyber-gray-400 line-clamp-2`
- Footer: "Read case study" with arrow

**Footer Link:**

- "See all work →" right-aligned
- `font-mono text-[10px] uppercase tracking-[0.15em] text-cyber-gray-500 hover:text-cyber-accent`

---

### 6. CTA — `components/CTA.tsx`

**Container:**

- `relative w-full py-20 sm:py-28 md:py-36 bg-[#050505]`

**Atmospheric Layers:**

1. Noise grain: `opacity-[0.035]`
2. Accent glow: `absolute -top-32 -bottom-32` — single centered ellipse at 5% opacity

**Header:**

- Label: `font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]` — "Get Started"
- H2 (larger): `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold` — "Ready when you are."

**Body Layout:** `flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16`

- Left: description text + availability indicator (green dot + "Accepting new projects")
- Right: CTA button + response time

**CTA Button:**

- `px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-black font-semibold text-base rounded-lg`
- Hover: `bg-white shadow-[0_0_30px_rgba(64,224,255,0.4)]`
- Label: "Start a Conversation" with ArrowRight icon
- Below: `text-[11px] font-mono text-cyber-gray-500` — "Usually responds within 24 hours"

**Divider:** `border-t border-white/[0.06]` below everything

---

### 7. Footer — `components/Footer.tsx`

**Container:**

- `border-t border-white/[0.06] bg-[#050505]`
- `max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-12 sm:py-16`

**Grid:** `grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8`

**Columns:**

1. **Brand:** Logo + tagline ("Helping small businesses work smarter...")
2. **Services:** Web Development, Automation, Ongoing Partnership (all → `/#solutions`)
3. **Resources:** Work, Contact
4. **Connect:** GitHub link

**Bottom Bar:** Copyright + "All rights reserved"

---

## Layout Patterns

### 1. 50/50 Grid (Hero, Solutions sub-sections)

```tsx
Grid: lg:grid-cols-12 gap-10 lg:gap-14 items-center
Left:  lg:col-span-6 (content)
Right: lg:col-span-6 (visual)
```

Solutions alternates: odd sub-sections = content left, even = content right (flipped).

### 2. Vertical Timeline (PainPoints)

```tsx
Grid per row: grid-cols-[2rem_1fr] sm:grid-cols-[3rem_1fr] gap-6 sm:gap-10
Vertical line: absolute left-4 sm:left-6 w-px
Nodes: positioned on the line
Content: right of the line
```

### 3. Card Grid (Work)

```tsx
Grid: grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6
Cards: rounded-xl border border-white/[0.06] bg-[#111318]
```

### 4. Split CTA (CTA section)

```tsx
Layout: flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16
Left: text content
Right: button + meta
```

---

## Component Patterns

### Section Labels (Consistent Across All Sections)

```tsx
<p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
  Label Text
</p>
```

All sections use `text-cyber-accent/70` (not `text-cyber-gray-500`).

### Section Headings (Word-by-Word Reveal)

```tsx
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
  {words.map((word, i) => (
    <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
      <span
        ref={(el) => {
          ref.current[i] = el;
        }}
        className="inline-block"
      >
        {word}
      </span>
    </span>
  ))}
</h2>
```

### Project Cards

```tsx
<div
  className="group rounded-xl border border-white/[0.06] bg-[#111318] overflow-hidden
  transition-colors duration-300 hover:border-white/[0.12]"
  style={{
    boxShadow:
      "0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
  }}
>
  {/* 16:9 thumbnail with gradient overlay */}
  {/* Content: category + time | title | excerpt | "Read case study →" */}
</div>
```

### Browser Mockup

```tsx
<div
  className="rounded-2xl border border-white/[0.08] bg-[#111318] overflow-hidden"
  style={{
    boxShadow:
      "0 32px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)",
  }}
>
  {/* Chrome bar: 3 dots + URL */}
  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0D0F13]">
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
    </div>
    {/* URL bar */}
  </div>
  {/* Screenshot */}
</div>
```

### Buttons

**Primary CTA (Accent):**

```tsx
className="px-7 py-3.5 bg-cyber-accent text-[#050505] font-semibold rounded-lg text-sm
  shadow-lg shadow-cyber-accent/20 hover:brightness-110 hover:shadow-xl hover:shadow-cyber-accent/30"
```

**Primary CTA (Large — CTA section):**

```tsx
className="px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-black font-semibold text-base rounded-lg
  transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.4)]"
```

**Nav CTA:**

```tsx
className="px-5 py-2 bg-cyber-accent text-[#050505] text-sm font-semibold rounded-lg
  hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
```

### Availability Indicator

```tsx
<span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
<span className="text-xs font-mono text-cyber-gray-500">Accepting new projects</span>
```

---

## Atmospheric Effects

### Glow Strategy: Alternating Sections

Sections alternate between **glow** and **flat** to create depth contrast:

| Section    | Glow? | Notes                                       |
| ---------- | ----- | ------------------------------------------- |
| Hero       | ✅    | Own ambient gradients (cyan + purple)       |
| PainPoints | ❌    | Flat — noise grain only                     |
| Solutions  | ✅    | Accent glow with `-top-32 -bottom-32` bleed |
| Work       | ❌    | Flat — noise grain only                     |
| CTA        | ✅    | Centered accent glow with bleed             |

### Glow Implementation

**Bleed containers** extend past section boundaries to avoid harsh borders:

```tsx
<div
  className="absolute -top-32 -bottom-32 left-0 right-0 pointer-events-none"
  style={{
    background:
      "radial-gradient(ellipse 80% 40% at 25% 35%, rgba(64,224,255,0.04), transparent), ...",
  }}
  aria-hidden="true"
/>
```

**Key principles:**

- Opacity range: 0.025–0.05 (very subtle)
- Use viewport-relative ellipse sizes (e.g., `80% 40%`)
- Place at offset positions (not centered) for organic feel
- Optional purple accent at ~0.025 for depth
- Never apply `filter: blur()` — the gradient itself is soft enough

### Noise Grain (Every Section)

```tsx
<div
  className="absolute inset-0 opacity-[0.035] pointer-events-none"
  style={{
    backgroundImage: `url("data:image/svg+xml,...")`,
    backgroundSize: "128px 128px",
  }}
  aria-hidden="true"
/>
```

SVG-based fractalNoise texture tiled at 128px. Applied to every section for consistent film-grain feel.

---

## Animation System (GSAP)

### Dependencies

- `gsap` core
- `gsap/ScrollTrigger` — scroll-driven animations
- `gsap/ScrollSmoother` — smooth scrolling (Club plugin, desktop only ≥ 1024px)

### SmoothScroll Wrapper

All page content is wrapped in `SmoothScroll` component:

- Creates `ScrollSmoother` instance on desktop
- Exposes instance on `window.__smoother` for cross-component access (e.g., Navigation anchor scroll)
- Mobile bypasses ScrollSmoother entirely

### Animation Patterns

**Hero animations (on mount, no ScrollTrigger):**

```tsx
const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
tl.to(el1, { opacity: 1, y: 0 }).to(el2, { opacity: 1, y: 0 }, "-=0.35"); // overlap previous
// ...
```

**Section animations (ScrollTrigger):**

```tsx
// Label fade
gsap.from(label, {
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: { trigger: label, start: "top 85%" },
});

// Word-by-word reveal
gsap.set(words, { y: "100%", opacity: 0 });
gsap.to(words, {
  y: "0%",
  opacity: 1,
  duration: 0.5,
  ease: "power3.out",
  stagger: 0.06,
  scrollTrigger: { trigger: words[0], start: "top 82%" },
});

// Content slide-in
gsap.from(content, {
  x: -30,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
  scrollTrigger: { trigger: sub, start: "top 75%" },
});

// Counter animation
gsap.to(counter, {
  v: target,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: { trigger: el, start: "top 88%" },
  onUpdate: () => {
    el.textContent = Math.round(counter.v).toString();
  },
});
```

**Scrub animations (PainPoints timeline):**

```tsx
ScrollTrigger.create({
  trigger: track,
  start: "top 70%",
  end: "bottom 40%",
  scrub: 0.8,
  animation: gsap.to(progress, { scaleY: 1, ease: "none" }),
});
```

### Easing Reference

- `power3.out` — primary entrance ease (headings, content)
- `power2.out` — secondary (labels, counters, bars)
- `power1.out` — subtle (terminal lines)
- `back.out(2.5)` — springy (timeline nodes)
- `none` — linear scrub

### Timing

- Label fade: 0.6s
- Word reveal: 0.5s per word, 0.06s stagger
- Content slide: 0.9s
- Feature stagger: 0.5s with 0.1s stagger
- Counter: 1.2–1.4s
- Terminal typewriter: 0.25s with 0.15s stagger

---

## Content Strategy

### Writing Style

- **Headlines:** Short, declarative, relatable ("You didn't start a business to do IT work.")
- **Body Text:** Plain language, specific scenarios, no jargon
- **Tone:** Consultative — talking to the business owner, not about them
- **Closers:** Each major section ends with a closer that bridges to the next

### Content Hierarchy Per Section

1. Section label (mono, accent, uppercase — provides context)
2. Headline (word-by-word reveal — main message)
3. Content (descriptions, timelines, cards — the substance)
4. Closer (bridge text, usually with an inline bold emphasis)

### Word Choice

**Use:**

- "I build", "I fix", "I'll recommend" (first person, consultative)
- Business-owner language: "bookings", "busywork", "data entry", "follow-ups"
- Clear benefits: "turn visitors into customers", "work smarter"

**Avoid:**

- Agency-speak: "We deliver", "Our team"
- Tech jargon: "CI/CD", "microservices", "containerization"
- Superlatives: "Best", "Revolutionary", "Industry-leading"

---

## Accessibility

- All interactive elements have focus states
- Color is never the only indicator (e.g., green dot + text for status)
- `alt` text on all images
- Semantic HTML: `<section>`, `<nav>`, `<footer>`, `<h1>`–`<h3>`
- `aria-labelledby` on sections linking to heading `id`s
- `aria-label` on icon-only buttons, nav, footer
- `aria-hidden="true"` on decorative elements (glows, grain)
- `aria-expanded` on mobile menu toggle
- `role="contentinfo"` on footer, `role="navigation"` on nav
- Body scroll locked when mobile menu is open

---

## Responsive Breakpoints

```
Mobile:    < 640px  (base styles)
Small:     640px+   (sm:)
Tablet:    768px+   (md:)
Desktop:   1024px+  (lg:)  ← ScrollSmoother activates here
Wide:      1280px+  (xl:)
```

### Key Responsive Behaviors

- **Navigation:** Desktop links hidden below `md:`, mobile menu shown
- **Hero grid:** Stacks vertically below `lg:`, 12-col grid on desktop
- **Section padding:** `py-20 sm:py-28 md:py-36` — progressively more spacious
- **Typography:** Responsive sizing via `sm:` / `md:` prefixes
- **ScrollSmoother:** Only enabled `>= 1024px` for performance

---

## Do's and Don'ts

### ✅ Do:

- Use `bg-[#050505]` on every section (never `bg-black` or `bg-transparent`)
- Use `max-w-6xl` for container width (not `max-w-7xl`)
- Use `font-semibold` for headings (not `font-bold`)
- Use `text-cyber-accent/70` for section labels
- Use responsive padding: `px-6 sm:px-8 md:px-12`
- Use responsive vertical: `py-20 sm:py-28 md:py-36`
- Alternate glow/flat sections for depth
- Add noise grain to every section
- Use GSAP ScrollTrigger for scroll animations
- Add `aria-hidden="true"` to decorative elements
- Use `border-white/[0.06]` for borders (bracket notation)
- Use word-by-word reveal for section headlines
- End sections with a "closer" paragraph

### ❌ Don't:

- Show pricing or package tiers
- Use `font-bold (700)` for headings (we use `font-semibold`)
- Use `max-w-7xl` (our container is `max-w-6xl`)
- Use `filter: blur()` on glows (gradient is soft enough)
- Make glows above 0.05 opacity (too intense)
- Center-align large blocks of text
- Use generic developer jargon
- Skip the noise grain texture
- Use Next.js `<Link>` for same-page anchor scrolling (breaks ScrollSmoother)
- Create sections without responsive padding

---

## Implementation Checklist

When building a new section or page:

- [ ] Section wrapper: `relative w-full py-20 sm:py-28 md:py-36 bg-[#050505]`
- [ ] Add noise grain overlay (`opacity-[0.035]`)
- [ ] Add accent glow if this is a "glow" section (alternate pattern)
- [ ] Container: `max-w-6xl mx-auto px-6 sm:px-8 md:px-12 relative`
- [ ] Section label: `font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4`
- [ ] Heading: `text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight`
- [ ] Use word-by-word reveal animation for headings
- [ ] Body text: `text-base sm:text-lg text-cyber-gray-300 leading-relaxed`
- [ ] Use GSAP + ScrollTrigger for scroll animations
- [ ] Add `aria-labelledby` linking section to heading `id`
- [ ] Add `aria-hidden="true"` on decorative elements
- [ ] End section with a closer paragraph if appropriate
- [ ] Test responsive behavior at all breakpoints
- [ ] Verify color contrast meets AA (4.5:1 for text)

## Quick Reference

**Headings:**

- H1/H2: `text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight`
- H3: `text-xl sm:text-2xl font-semibold text-white leading-snug tracking-tight`

**Body Text:**

- Standard: `text-base sm:text-lg text-cyber-gray-300 leading-relaxed`
- Small: `text-sm text-cyber-gray-400 leading-relaxed`
- Closer: `text-lg sm:text-xl text-cyber-gray-300 leading-relaxed`

**Special Text:**

- Section Label: `font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]`
- Metadata: `font-mono text-[11px] text-cyber-accent font-semibold tracking-wider`
- Tags: `font-mono text-[10px] text-cyber-gray-500`
- Fine Print: `text-xs font-mono text-cyber-gray-500`

**Buttons:**

- Primary: `px-7 py-3.5 bg-cyber-accent text-[#050505] font-semibold rounded-lg text-sm`
- Nav: `px-5 py-2 bg-cyber-accent text-[#050505] text-sm font-semibold rounded-lg`

**Cards:**

- Background: `bg-[#111318]`
- Border: `border border-white/[0.06]`
- Hover border: `border-white/[0.12]`
- Radius: `rounded-xl`

**Spacing:**

- Section: `py-20 sm:py-28 md:py-36`
- Container: `max-w-6xl mx-auto px-6 sm:px-8 md:px-12`
- Sub-sections: `space-y-24 sm:space-y-32`
- Header to content: `mb-14 sm:mb-20`
