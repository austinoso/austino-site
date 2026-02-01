# Personal Agency Website

A professional personal agency website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Features a cyber-minimalism dark theme with a focus on accessibility and SEO optimization.

## 🚀 Features

- **Next.js 14 App Router** - Modern React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom cyber-minimalism theme
- **Responsive Design** - Mobile-first approach
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **SEO Optimized** - Semantic structure for AI search engines
- **Bento Grid Layout** - Modern service presentation
- **Dynamic Case Studies** - Template-based case study pages

## 🎨 Design System

### Colors

- **Background**: `#0B0D10` (cyber-dark)
- **Accent**: `#40E0FF` (cyber-accent)
- **Gray Scale**: Custom gray palette for depth

### Typography

- **Sans**: Inter (primary)
- **Mono**: JetBrains Mono (code/technical)

## 📁 Project Structure

```
dev-site/
├── app/
│   ├── case-studies/
│   │   ├── [slug]/
│   │   │   └── page.tsx       # Dynamic case study page
│   │   └── page.tsx           # Case studies listing
│   ├── contact/
│   │   └── page.tsx           # Contact form
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── Navigation.tsx         # Header navigation
│   ├── Hero.tsx               # Hero section
│   ├── Services.tsx           # Services Bento Grid
│   ├── InternalLabs.tsx       # Labs section
│   └── Footer.tsx             # Site footer
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 📄 Pages

### Home (`/`)

- Hero section with stats and CTA
- Services Bento Grid (5 services)
- Internal Labs section

### Case Studies (`/case-studies`)

- List of technical case studies
- Individual case study pages at `/case-studies/[slug]`

### Contact (`/contact`)

- Discovery-focused inquiry form
- Project type, budget, timeline selection
- Challenge and success metrics fields

## 🎯 Customization

### Update Content

1. **Hero Section**: Edit [components/Hero.tsx](components/Hero.tsx)
2. **Services**: Modify the `services` array in [components/Services.tsx](components/Services.tsx)
3. **Case Studies**: Update `caseStudyData` in [app/case-studies/[slug]/page.tsx](app/case-studies/[slug]/page.tsx)
4. **Internal Labs**: Edit projects array in [components/InternalLabs.tsx](components/InternalLabs.tsx)

### Theme Colors

Modify [tailwind.config.ts](tailwind.config.ts) to change the color scheme:

```typescript
colors: {
  cyber: {
    dark: '#0B0D10',        // Background
    accent: '#40E0FF',       // Primary accent
    // ... other colors
  }
}
```

## ♿ Accessibility Features

- Semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, `<section>`)
- ARIA labels for all interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Screen reader friendly structure

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Technologies

- **Framework**: Next.js 14.1.0
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.3.0
- **Fonts**: Inter, JetBrains Mono (Google Fonts)

## 📝 License

This project is for personal/commercial use. Modify as needed for your agency.

## 🤝 Contributing

This is a personal agency template. Feel free to fork and customize for your own use.

---

Built with ⚡ by Senior Product Engineers
