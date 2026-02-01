# Site Design System - Complete Guide

## Core Design Philosophy

This site embodies a **Premium Technical Studio** aesthetic - sophisticated, minimalist, and deeply technical. Every element should feel intentional, precise, and production-grade.

### Brand Positioning

- **Not** a typical developer portfolio
- **Is** a high-end product engineering studio
- Focus: Business outcomes over technical features
- Tone: Confident, strategic, technically precise

---

## Visual Foundation

### Color Palette

```
Primary Background:   #050505 (Deep Black)
Secondary Background: #0A0E14 (Subtle Dark Gray)
Accent Primary:       #40E0FF (Cyan)
Text Primary:         #FFFFFF (White)
Text Secondary:       #9CA3AF (cyber-gray-300)
Text Tertiary:        #6B7280 (cyber-gray-400)
Text Quaternary:      #4F5462 (cyber-gray-500)

Border Light:         rgba(255, 255, 255, 0.08-0.1)
Border Emphasis:      rgba(64, 224, 255, 0.3)
Glow Ambient:         rgba(64, 224, 255, 0.02-0.08)
```

### Typography System

**Font Families:**

- Primary: Inter (headings, body)
- Technical: JetBrains Mono (codes, ribbons, system text)

**Typography Scale (Refactoring UI Compliant):**

```
System Ribbon/Label:
  - Size: 10px (text-[10px])
  - Font: JetBrains Mono
  - Weight: font-normal (400)
  - Letter-spacing: tracking-[0.2em]
  - Transform: uppercase
  - Color: cyber-gray-500
  - Usage: Technical stamps, metadata, section labels

Metadata/Small Mono:
  - Size: 11px (text-[11px])
  - Font: JetBrains Mono
  - Weight: font-semibold (600)
  - Letter-spacing: tracking-wider
  - Color: cyber-accent
  - Usage: Card metadata, technical identifiers

Extra Small:
  - Size: 12px (text-xs)
  - Weight: font-normal (400)
  - Line-height: leading-normal
  - Color: cyber-gray-500
  - Usage: Tags, footer text, fine print

Small:
  - Size: 14px (text-sm)
  - Weight: font-normal (400)
  - Line-height: leading-normal
  - Color: cyber-gray-400
  - Usage: Navigation, feature lists, secondary information

Base:
  - Size: 16px (text-base)
  - Weight: font-normal (400) or font-semibold (600)
  - Line-height: leading-relaxed (1.625)
  - Color: cyber-gray-400 or cyber-gray-300
  - Usage: Body text, descriptions, standard content

Large:
  - Size: 18px (text-lg)
  - Weight: font-normal (400)
  - Line-height: leading-relaxed
  - Color: cyber-gray-300
  - Usage: Important body text, subheadings

Extra Large:
  - Size: 20px (text-xl)
  - Weight: font-normal (400)
  - Line-height: leading-relaxed
  - Color: cyber-gray-300
  - Usage: Hero subtitles, section descriptions

2XL:
  - Size: 24px (text-2xl)
  - Weight: font-normal (400)
  - Line-height: leading-relaxed
  - Color: cyber-gray-300
  - Usage: Large hero subtitles

H3 (Card/Service Title):
  - Size: 30px (text-3xl)
  - Weight: font-bold (700)
  - Line-height: leading-tight (1.25)
  - Letter-spacing: tracking-tight
  - Color: white
  - Usage: Service titles, card headings

H2 (Section Heading):
  - Size: 36-48px (text-4xl md:text-5xl)
  - Weight: font-bold (700)
  - Line-height: leading-tight
  - Letter-spacing: tracking-tight
  - Color: white
  - Usage: Section headings, work showcase titles

H1 (Hero/Primary):
  - Size: 48-72px (text-5xl md:text-6xl lg:text-7xl)
  - Weight: font-bold (700)
  - Line-height: leading-tight (1.25)
  - Letter-spacing: tracking-tight
  - Color: white
  - Usage: Hero headlines, primary page titles
```

**Font Weight Usage:**

- **font-normal (400):** All body text, descriptions
- **font-semibold (600):** Buttons, CTAs, emphasis, small mono labels
- **font-bold (700):** All headings (H1, H2, H3)

**Text Color Hierarchy:**

1. `text-white` → Primary headings, navigation active state
2. `text-cyber-gray-300` (#9CA3AF) → Important body text, large descriptions
3. `text-cyber-gray-400` (#6B7280) → Secondary text, feature lists, standard body
4. `text-cyber-gray-500` (#4F5462) → Tertiary text, ribbons, tags, footer
5. `text-cyber-accent` (#40E0FF) → Interactive elements, highlights, metadata

**Line Height Standards:**

- `leading-tight` (1.25) → Headings H1, H2, H3
- `leading-relaxed` (1.625) → Body text, descriptions, paragraphs
- `leading-normal` → Small text, navigation, tags

```

### Spacing System

```

Section Vertical:

- Hero: pt-20 pb-32 (80px top, 128px bottom)
- Work: py-24 (96px)
- Services: py-32 (128px)
- Standard: py-20 (80px)

Container Horizontal:

- Standard sections: px-6 md:px-12 (24px mobile, 48px desktop)
- Wide sections (Work): Custom max-width with px-6

Container Max Width:

- Standard (Hero, Services): max-w-7xl (1280px)
- Wide (Work showcase): max-w-[1600px]

Grid Gaps:

- Between columns: gap-12 lg:gap-16 or gap-12 lg:gap-20
- Between cards: gap-6 (24px)
- Between elements: space-y-6 or space-y-10

Element Spacing:

- Large gaps: space-y-10 (40px)
- Standard gaps: space-y-6 (24px)
- Small gaps: space-y-3 (12px)
- Micro gaps: space-y-2 (8px)

Section Spacing:

- Between major sections: mb-24 (96px)
- Between content blocks: mb-12 (48px)
- Between related elements: mb-5 or mb-6 (20-24px)

````

---

## Layout Patterns

### 1. Asymmetric Split (60/40)

**When to use:** Hero sections, feature highlights

```tsx
Left (60%): Content, pitch, call-to-action
Right (40%): Visual proof, mockup, graphic
Grid: lg:grid-cols-5 (3 cols left, 2 cols right)
Gap: gap-12 lg:gap-20
Alignment: items-center
````

**Example (Hero):**

```tsx
<div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-32">
  <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
    <div className="lg:col-span-3 space-y-10">{/* Content */}</div>
    <div className="lg:col-span-2">{/* Visual */}</div>
  </div>
</div>
```

### 2. Three-Column Grid (Services)

**When to use:** Service offerings, feature pillars

```tsx
Grid: lg:grid-cols-3
Card Padding: py-20 px-6 lg:px-8
Dividers: Vertical borders between columns
Max-width: max-w-7xl
```

**Example:**

```tsx
<div className="max-w-7xl mx-auto px-6 md:px-12">
  <div className="grid grid-cols-1 lg:grid-cols-3">
    {items.map((item, index) => (
      <div className="py-20 px-6 lg:px-8">{/* Service content */}</div>
    ))}
  </div>
</div>
```

### 3. Vertical Stack

**When to use:** Text-heavy sections, timeline

```
Max-width: max-w-4xl mx-auto
Alignment: Left-aligned
Spacing: space-y-8
```

### 4. Centered Hero

**When to use:** Landing sections, big announcements

```
Text: Centered
Max-width: max-w-6xl
Supporting text: max-w-3xl
```

---

## Component Patterns

### Glass Cards

```tsx
Style:
  - Background: rgba(26, 29, 35, 0.6) with backdrop-blur
  - Border: 1px solid rgba(255, 255, 255, 0.08)
  - Border-radius: 12px or 16px
  - Padding: p-6 to p-8

Hover State:
  - Border: Glow to cyan (border-cyber-accent/50)
  - Shadow: shadow-lg shadow-cyber-accent/10
  - Transition: 300ms ease
```

### System Ribbons

```tsx
Style:
  - Font: JetBrains Mono
  - Size: text-[10px] (10px)
  - Letter-spacing: tracking-[0.2em]
  - Text: Uppercase
  - Color: cyber-gray-500
  - Weight: font-normal (400)

Usage: Section labels, metadata, technical stamps
Example: "FLAGSHIP_PROJECT", "EST. 2021 // 6+ YEARS SENIOR TENURE"
```

### Metadata Labels

```tsx
Style:
  - Font: JetBrains Mono
  - Size: text-[11px] (11px)
  - Letter-spacing: tracking-wider
  - Weight: font-semibold (600)
  - Color: cyber-accent

Usage: Card identifiers, technical tags
Example: "[ 01 / BUILD_LAYER ]"
```

### Buttons

**Primary CTA:**

```tsx
Background: White (bg-white)
Text: #050505 (text-[#050505])
Padding: px-8 py-4
Font: text-base font-semibold
Border-radius: rounded-lg
Shadow: shadow-lg shadow-white/10
Hover: Subtle scale or shadow increase
```

**Secondary CTA:**

```tsx
Background: bg-cyber-accent/10
Border: border border-cyber-accent/30
Text: text-white font-semibold
Padding: px-6 py-3
Border-radius: rounded-full
Hover: bg-cyber-accent/20
```

### Navigation

```tsx
Floating Pill:
  - Background: rgba(255, 255, 255, 0.04)
  - Border: 1px solid rgba(255, 255, 255, 0.1)
  - Backdrop-filter: blur(16px)
  - Border-radius: rounded-full
  - Padding: 10px 32px
  - Position: sticky top-8

Nav Links:
  - Font: text-sm
  - Color: text-cyber-gray-400
  - Hover: text-white
  - Spacing: gap-8

Connect Button:
  - Color: text-white font-medium
  - Border: border-cyber-accent/30
  - Padding: px-4 py-2
  - Hover: text-cyber-accent
```

### Indicators

```tsx
Active Dot:
  - Size: w-2 h-2
  - Color: bg-cyber-accent
  - Animation: animate-pulse
  - Additional: animate-ping layer for emphasis

Status Text:
  - Font: JetBrains Mono
  - Size: text-sm
  - Letter-spacing: tracking-wide
  - Color: cyber-gray-400
```

---

## Atmospheric Effects

### Ambient Glow

```tsx
Soft Mesh Gradient (Subtle):
  - Position: absolute inset-0 pointer-events-none
  - Background: radial-gradient(ellipse 120% 80% at 50% 0%, rgba(64,224,255,0.08) 0%, rgba(88,28,135,0.05) 40%, rgba(15,23,42,0.02) 70%, transparent 100%)
  - Filter: blur(150px)
  - Usage: Behind Work and Services sections

Hero Background:
  - Background: bg-gradient-radial from-[#0A0E14] via-[#050505] to-[#050505]
  - Opacity: 90%
  - Usage: Hero section depth

Image Glow (Mockup):
  - Position: absolute -inset-40 -z-10
  - Background: radial-gradient(ellipse 1200px 800px at 60% 50%, rgba(64,224,255,0.08) 0%, rgba(64,224,255,0.02) 50%, transparent 70%)
  - Filter: blur(200px)
  - Usage: Behind hero mockup image
```

**Key Principle:** Keep glows subtle (0.02-0.08 opacity range) to avoid overwhelming content

---

## Animation Guidelines

### Timing

- Quick: 150ms (micro-interactions)
- Standard: 300ms (cards, buttons)
- Slow: 600ms+ (page transitions)
- Ambient: 8s-24s (background effects)

### Easing

- Default: ease-in-out
- Entry: ease-out
- Exit: ease-in
- Elastic: cubic-bezier(0.4, 0, 0.6, 1)

### Hover States

```tsx
Cards:
  - Transform: translateY(-2px) scale(1.01)
  - Glow: Opacity 0 → 100%
  - Transition: 300ms ease

Buttons:
  - Transform: scale(1.02)
  - Shadow: Increase intensity
  - Transition: 200ms ease

Images:
  - Transform: scale(1.05)
  - Transition: 400ms ease
```

---

## Content Strategy

### Writing Style

- **Headlines:** Direct, outcome-focused, no fluff
- **Body Text:** Clear, specific, benefit-driven
- **Technical Terms:** Use sparingly, explain when necessary
- **Tone:** Confident but not arrogant, precise but not cold

### Content Hierarchy

1. System ribbon (context)
2. Headline (main message)
3. Sub-headline (supporting detail)
4. Body text (explanation)
5. Call-to-action (next step)

### Word Choice

**Use:**

- Strategic, Production-ready, Scale, Engineering
- Custom, Tailored, Rapid, Seamless
- Architecture, Integration, Orchestration

**Avoid:**

- Awesome, Amazing, Revolutionary
- Best, Perfect, Ultimate
- Generic developer-speak

---

## Section Templates

### Standard Section Structure

```tsx
<section className="relative py-24 px-6 bg-[#050505]">
  {/* Atmospheric glow (optional) */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: "radial-gradient(...)",
      filter: "blur(150px)",
    }}
  />

  <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    {/* System Ribbon */}
    <p className="font-mono text-[10px] text-cyber-gray-500 uppercase tracking-[0.2em] mb-12">
      SECTION_LABEL
    </p>

    {/* H2 + Description */}
    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
      Section Headline
    </h2>
    <p className="text-lg text-cyber-gray-300 leading-relaxed">
      Supporting description text.
    </p>

    {/* Content Grid */}
    <div className="grid lg:grid-cols-3 gap-6 mt-12">
      {/* Cards or content */}
    </div>
  </div>
</section>
```

### Hero Section Structure

```tsx
<section className="relative min-h-screen bg-[#050505]">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-radial from-[#0A0E14] via-[#050505] to-[#050505] opacity-90" />

  {/* Navigation */}
  <div className="sticky top-8 z-50 flex justify-center px-6 mb-16">
    {/* Floating nav pill */}
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-32">
    <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
      <div className="lg:col-span-3 space-y-10">
        {/* System ribbon */}
        {/* H1 headline */}
        {/* Description */}
        {/* CTA */}
      </div>
      <div className="lg:col-span-2">{/* Mockup/visual */}</div>
    </div>
  </div>

  {/* Tech stack marquee */}
</section>
```

### Service Card Structure

```tsx
<div className="py-20 px-6 lg:px-8 relative group">
  {/* Hover overlay */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />

  {/* Vertical divider */}
  <div className="absolute right-0 top-0 bottom-0 w-px bg-white/12" />

  <div className="relative h-full flex flex-col">
    {/* Metadata */}
    <p className="font-mono text-[11px] text-cyber-accent font-semibold tracking-wider mb-8">
      [ 01 / LAYER_NAME ]
    </p>

    {/* Title */}
    <h3 className="text-3xl text-white font-bold leading-tight tracking-tight mb-6">
      Service Title
    </h3>

    {/* Description */}
    <p className="text-base text-cyber-gray-400 leading-relaxed mb-auto">
      Service description text.
    </p>

    {/* Tags */}
    <p className="font-mono text-xs text-cyber-gray-500 mt-8 pt-8 border-t border-white/8 tracking-wide">
      TAGS // SEPARATED // BY_SLASHES
    </p>
  </div>
</div>
```

---

## Accessibility

- All interactive elements must have focus states
- Color is never the only indicator
- Alt text for all images
- Semantic HTML (section, article, nav, etc.)
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Minimum contrast ratios: AA (4.5:1 for text)

---

## Responsive Breakpoints

```
Mobile:   < 768px  (base styles)
Tablet:   768px+   (md:)
Desktop:  1024px+  (lg:)
Wide:     1280px+  (xl:)
Ultra:    1536px+  (2xl:)
```

### Mobile-First Approach

- Start with mobile layout
- Add complexity at larger breakpoints
- Reduce padding/spacing on mobile
- Stack layouts vertically on mobile

---

## Do's and Don'ts

### ✅ Do:

- Use ample white space (negative space)
- Align to strict grid
- Keep animations subtle
- Use monospace for technical elements
- Left-align body text
- Emphasize business outcomes
- Test on multiple screen sizes
- Use only 3 font weights: 400, 600, 700
- Stick to defined text color hierarchy (white, gray-300, gray-400, gray-500)
- Keep glow effects subtle (0.02-0.08 opacity)
- Use Tailwind classes instead of inline styles
- Use consistent spacing scale (space-y-6, space-y-10)

### ❌ Don't:

- Center-align large blocks of text
- Use emojis in production sections
- Overuse animations
- Mix font families excessively
- Create perfectly symmetrical layouts
- Use bright, saturated colors (except accent)
- Ignore mobile experience
- Use font weights outside 400/600/700
- Use inline styles for typography (use Tailwind)
- Make glows too intense (avoid 0.12+ opacity)
- Skip responsive padding (px-6 md:px-12)

---

## Implementation Checklist

When building a new section:

- [ ] Add system ribbon with appropriate label (text-[10px], font-mono, uppercase, tracking-[0.2em])
- [ ] Set responsive section spacing (py-24 to py-32, px-6 md:px-12)
- [ ] Use correct max-width (max-w-7xl for standard, max-w-[1600px] for wide)
- [ ] Include subtle atmospheric glow if appropriate (opacity 0.02-0.08)
- [ ] Use consistent typography scale (text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl)
- [ ] Apply proper font weights (400, 600, or 700 only)
- [ ] Use text color hierarchy (white → gray-300 → gray-400 → gray-500)
- [ ] Use Tailwind line-heights (leading-tight for headings, leading-relaxed for body)
- [ ] Use Tailwind letter-spacing (tracking-tight for headings, tracking-wide/wider for mono)
- [ ] Add hover states to interactive elements
- [ ] Test mobile responsive behavior
- [ ] Verify accessibility (focus states, ARIA labels)
- [ ] Check color contrast ratios
- [ ] Ensure content is left-aligned
- [ ] Add appropriate spacing (space-y-6 or space-y-10)
- [ ] Use gap-12 lg:gap-16 or gap-12 lg:gap-20 for grid spacing

## Quick Reference

**Headings:**

- H1: `text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight`
- H2: `text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight`
- H3: `text-3xl font-bold text-white leading-tight tracking-tight`

**Body Text:**

- Large: `text-xl md:text-2xl text-cyber-gray-300 leading-relaxed`
- Standard: `text-base text-cyber-gray-400 leading-relaxed`
- Description: `text-lg text-cyber-gray-300 leading-relaxed`

**Special Text:**

- System Ribbon: `font-mono text-[10px] text-cyber-gray-500 uppercase tracking-[0.2em] font-normal`
- Metadata: `font-mono text-[11px] text-cyber-accent font-semibold tracking-wider`
- Tags: `font-mono text-xs text-cyber-gray-500 tracking-wide`

**Buttons:**

- Primary: `px-8 py-4 bg-white text-[#050505] font-semibold rounded-lg text-base shadow-lg shadow-white/10`
- Secondary: `px-6 py-3 bg-cyber-accent/10 border border-cyber-accent/30 text-white font-semibold rounded-full hover:bg-cyber-accent/20`

**Spacing:**

- Section: `py-24` or `py-32`, `px-6 md:px-12`
- Container: `max-w-7xl mx-auto` or `max-w-[1600px] mx-auto`
- Element stacking: `space-y-6` or `space-y-10`
- Grid gaps: `gap-12 lg:gap-16` or `gap-12 lg:gap-20`
