// ── Shared copy for all legal × city pSEO pages ──
// City-specific overrides live in stockton.ts, modesto.ts, tracy.ts.
// Template components call these functions with city/county data from cities.ts.

import {
  Search,
  Clock,
  MapPin,
  ShieldCheck,
  Scale,
  FileCode,
  Code,
  Building2,
  Users,
  BarChart3,
} from "lucide-react";

// ── Hero ──

export const hero = {
  sectionLabel: "Law Firm Websites",
  headline: (city: string) => `${city} has plenty of law firms. Google shows three.`,
  subtext: (city: string) =>
    `When someone in ${city} needs a lawyer, they search Google. The top three results get most of the clicks — everyone else is invisible. If your site was built by a legal directory or hasn't been updated in years, you're probably not in those three.`,
  cta: { label: "Get a Free Site Review", href: "/contact" },
};

// ── The Gap (problem section) ──

export const problems = {
  sectionLabel: "The Gap",
  heading: (city: string) => `Why most ${city} law firms don't rank.`,
  subtext:
    "Strong reputations and years of case history don't help when the site is slow, generic, and invisible to search.",
  cards: [
    {
      icon: Search,
      stat: "75%",
      statLabel: "never scroll past page 1",
      heading: "Page two is a graveyard",
      body: (city: string) =>
        `75% of people never scroll past page one. The firms ranking above your ${city} firm aren't necessarily better. They just have sites built for how Google actually works.`,
      source: {
        label: "HubSpot",
        href: "https://www.hubspot.com/marketing-statistics",
      },
    },
    {
      icon: Clock,
      stat: "0.05s",
      statLabel: "to form a first impression",
      heading: "Your site has 50 milliseconds",
      body: (city: string) =>
        `That's how long someone takes to judge your site. A dated layout or slow load in ${city} and they're gone before reading a word.`,
      source: {
        label: "Lindgaard et al., 2006",
        href: "https://doi.org/10.1080/01449290500330448",
      },
    },
    {
      icon: MapPin,
      stat: "46%",
      statLabel: "of Google searches are local",
      heading: "Half of Google searches are local",
      body: (city: string) =>
        `When someone in ${city} types "lawyer near me," Google checks for location data, practice area pages, and schema markup. If your site doesn't have them, a competitor shows up instead.`,
      source: {
        label: "GoGulf",
        href: "https://www.gogulf.com/blog/local-seo",
      },
    },
  ],
};

// ── Authority Signals ──

export const authority = {
  sectionLabel: "Why It's Different for Law Firms",
  heading: "Google holds law firms to a higher standard.",
  subtext:
    "Legal sites fall under Google's YMYL (Your Money or Your Life) guidelines — same rules as medical and financial content. If your site doesn't show expertise and authority the way Google expects, it won't rank. The firm is qualified. The site just isn't proving it.",
  signals: [
    {
      icon: ShieldCheck,
      title: "E-E-A-T signals",
      description: (city: string) =>
        `Google's quality raters score Experience, Expertise, Authoritativeness, and Trustworthiness. For ${city} firms: attorney credentials, bar associations, and case history, structured so Google can read them.`,
    },
    {
      icon: FileCode,
      title: "Legal schema markup",
      description: (city: string) =>
        `Schema tells Google what your site is: a law firm in ${city}, practicing specific areas of law. Without it, Google guesses. With it, you get star ratings and contact info right in the search listing.`,
    },
    {
      icon: Building2,
      title: "YMYL-grade site quality",
      description: (city: string) =>
        `Legal sites need faster loads, cleaner code, and stronger security than most businesses. Google penalizes slow ${city} law firm sites harder than a restaurant or retail store.`,
    },
    {
      icon: MapPin,
      title: "Local authority signals",
      description: (city: string) =>
        `Google Business Profile integration, consistent name/address/phone data, and city-specific content. For ${city} firms, that's the baseline for local results.`,
    },
  ],
};

// ── What You Get (deliverables) ──

export const deliverables = {
  sectionLabel: "What You Get",
  heading: (city: string) => `Built for how people in ${city} find a lawyer.`,
  subtext:
    "Every feature exists to get you found on Google or turn that click into a consultation.",
  items: [
    {
      icon: Code,
      title: "A site that's actually yours",
      body: "No templates, no page builders, no renting someone else's platform. Your site, your domain, your code. Fast, clean, and built around how your firm works.",
    },
    {
      icon: Scale,
      title: "A page for every practice area",
      body: "Family law, personal injury, estate planning. Each one gets its own page, written for how people actually search. Google ranks pages, not websites.",
    },
    {
      icon: Users,
      title: "Profiles Google can read",
      body: "Credentials, bar admissions, experience. Structured so Google can surface them in search results. Not buried on a generic about page.",
    },
    {
      icon: MapPin,
      title: "Maps and local search",
      body: 'When someone searches "lawyer near me," your site and Google Business Profile show the same name, address, and phone number. You show up in maps and organic results.',
    },
    {
      icon: BarChart3,
      title: "See where leads come from",
      body: "Which pages bring calls. Which searches bring traffic. What's working and what isn't. Real numbers, not a dashboard full of vanity metrics.",
    },
  ],
};

// ── FAQ ──
// All functions take (city, county) for uniform call signatures.
// City overrides can append additional items via additionalFAQ.

export const faq = {
  sectionLabel: "Common Questions",
  heading: (city: string) => `Straight answers about law firm websites in ${city}.`,
  items: [
    {
      q: (city: string, _county: string) => `Do you work with law firms in ${city}?`,
      a: (city: string, county: string) =>
        `Yes. I'm based in the Central Valley and work specifically with firms in the 209. I know the ${city} market and what people in ${county} County actually search for.`,
    },
    {
      q: (_city: string, _county: string) => "How is this different from FindLaw or Justia?",
      a: (_city: string, _county: string) =>
        "Those companies sell one template to thousands of firms. Your site looks like every competitor's and runs on their domain. I build on your domain, with your code, optimized for your market. You own everything.",
    },
    {
      q: (_city: string, _county: string) => "What if my firm already has a website?",
      a: (_city: string, _county: string) =>
        "Most do. If it was built by a directory or hasn't been touched in years, it's probably not ranking or converting. I'll review it for free and tell you where you stand.",
    },
    {
      q: (_city: string, _county: string) => "What does this cost?",
      a: (_city: string, _county: string) =>
        "Projects start with a $200 deposit to get things moving, then a flat project fee depending on scope — typically 5–10 pages, practice area content, schema, and local SEO setup. I'll give you a clear number before anything starts. No hourly surprises.",
    },
    {
      q: (city: string, _county: string) =>
        `How long until I see results in ${city} search rankings?`,
      a: (city: string, _county: string) =>
        `2–4 months for meaningful movement, sometimes faster. ${city} legal search isn't as saturated as LA or SF, so firms here move up quicker. I'll set benchmarks before we start.`,
    },
    {
      q: (_city: string, _county: string) => "Do I need to write all the content myself?",
      a: (_city: string, _county: string) =>
        "No. I handle the copy, page structure, and SEO content. I'll need your input on practice areas and what sets your firm apart. Writing pages that rank is my job.",
    },
  ],
};

// ── Final CTA ──

export const finalCta = {
  sectionLabel: "Your Move",
  headline: (city: string) => `While other ${city} firms wait, yours could rank.`,
  body: (city: string) =>
    `I'll show you where your site stands in ${city} search results and what it would take to get to page one. Free, no strings.`,
  cta: { label: "See Where You Rank", href: "/contact" },
};
