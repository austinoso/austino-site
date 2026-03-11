// ── Shared copy for all wellness × city pSEO pages ──
// City-specific overrides live in manteca.ts, turlock.ts, modesto.ts.

import {
  Search,
  Clock,
  Heart,
  Calendar,
  MapPin,
  Users,
  Star,
  Smartphone,
  BarChart3,
  Wrench,
  Sparkles,
} from "lucide-react";

// ── Hero ──

export const hero = {
  sectionLabel: "Wellness Websites",
  headline: (city: string) =>
    `${city} has great wellness businesses. Most of them are invisible online.`,
  subtext: (city: string) =>
    `People in ${city} are searching for gyms, medspas, and chiropractors on their phones right now. If your business relies on word-of-mouth and a Yelp page, you're leaving members and clients to whoever shows up first on Google. A real web presence changes that.`,
  cta: { label: "See How You Show Up", href: "/contact" },
};

// ── The Gap (problem section) ──

export const problems = {
  sectionLabel: "The Problem",
  heading: (city: string) => `Why ${city} wellness businesses lose clients they never knew about.`,
  subtext:
    "Yelp and ClassPass own the discovery layer. Without your own web presence, you're renting attention instead of building it.",
  cards: [
    {
      icon: Search,
      stat: "46%",
      statLabel: "of Google searches are local",
      heading: "They're searching — you're not showing up",
      body: (city: string) =>
        `Nearly half of all Google searches have local intent. Someone in ${city} just searched "chiropractor near me" or "best medspa ${city}." If you don't have a site built for local search, a competitor with a $50/month template is ranking above you.`,
      source: {
        label: "GoGulf",
        href: "https://www.gogulf.com/blog/local-seo",
      },
    },
    {
      icon: Clock,
      stat: "88%",
      statLabel: "research online before visiting",
      heading: "They check you out before they walk in",
      body: (city: string) =>
        `88% of consumers research a local business online before visiting. In ${city}, that means people are looking at your Google listing, your reviews, and your website before they ever book. If your site is a single page with a phone number, they move on.`,
      source: {
        label: "BrightLocal",
        href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
      },
    },
    {
      icon: Calendar,
      stat: "67%",
      statLabel: "prefer booking online",
      heading: '"Call to book" isn\'t working anymore',
      body: (city: string) =>
        `Two-thirds of clients prefer to book online. If your ${city} business requires a phone call or a DM to schedule, you're adding friction where competitors have a booking button. Every extra step costs you clients.`,
      source: {
        label: "GetApp / Capterra",
        href: "https://www.getapp.com/resources/research-online-booking-trends/",
      },
    },
  ],
};

// ── Community Proof ──

export const communityProof = {
  sectionLabel: "Built for Community",
  heading: (city: string) => `Your ${city} business runs on relationships. Your site should too.`,
  subtext:
    "Templates treat wellness businesses like e-commerce stores. Your business is built on community, consistency, and trust. The website should reflect that.",
  points: [
    {
      icon: Users,
      title: "Show the community, not stock photos",
      description: (city: string) =>
        `People in ${city} want to see your actual space, your team, and your current members or clients. A site with real photography and genuine personality builds trust that stock imagery never will.`,
    },
    {
      icon: Star,
      title: "Reviews front and center",
      description: (city: string) =>
        `Your Google reviews are your best marketing. I pull them onto your site so visitors see social proof before they ever leave your page. For ${city} businesses, local reviews carry weight that no ad can match.`,
    },
    {
      icon: Heart,
      title: "The vibe comes through",
      description: (city: string) =>
        `A CrossFit box and a luxury medspa both serve ${city} — but they couldn't feel more different. Your website should match the energy of walking through your door. Color, typography, imagery, and layout all tuned to your brand.`,
    },
    {
      icon: MapPin,
      title: "Local, not generic",
      description: (city: string) =>
        `Your site mentions ${city} naturally — not keyword-stuffed, but woven into the copy. Neighborhood references, local context, and community-specific content that signals to both Google and visitors that you're rooted here.`,
    },
  ],
};

// ── Retention Engine ──

export const retentionEngine = {
  sectionLabel: "The Retention Engine",
  heading: "Getting clients in the door is step one. Keeping them is where it counts.",
  subtext:
    "Most wellness businesses spend all their energy on acquisition and nothing on retention. A well-built site becomes a retention tool — not just a brochure.",
  features: [
    {
      label: "Online booking",
      description:
        "One-click scheduling for classes, appointments, or consultations. No phone calls, no DMs. Syncs with your calendar.",
    },
    {
      label: "Automated reminders",
      description:
        "Missed appointments cost you money. Automated email and text reminders keep your schedule full and no-shows low.",
    },
    {
      label: "Review-to-booking pipeline",
      description:
        "After a great visit, a prompt asks for a Google review. After the review, a link brings them right back to book again. The cycle feeds itself.",
    },
    {
      label: "Membership visibility",
      description:
        "Class schedules, membership tiers, pricing transparency. People who can see what they're getting are more likely to commit — and stay.",
    },
  ],
};

// ── What You Get (deliverables) ──

export const deliverables = {
  sectionLabel: "What You Get",
  heading: (city: string) => `A web presence built for how ${city} finds wellness.`,
  subtext: "Every feature helps people find you, trust you, book with you, and come back.",
  items: [
    {
      icon: Sparkles,
      title: "Custom website that matches your brand",
      body: "No templates, no cookie-cutter layouts. Your site looks and feels like your business — not like every other gym or spa online.",
    },
    {
      icon: Calendar,
      title: "Online booking integration",
      body: "Whether you use Mindbody, Acuity, or something else — or need a custom solution — booking is front and center on every page.",
    },
    {
      icon: Search,
      title: "Local SEO + Google Business",
      body: "Your site and Google Business Profile aligned and optimized. You show up when people search for your services in your city.",
    },
    {
      icon: Smartphone,
      title: "Mobile-first design",
      body: "Over 70% of wellness searches happen on phones. Your site is designed for thumbs first, desktops second.",
    },
    {
      icon: BarChart3,
      title: "Analytics and conversion tracking",
      body: "You'll know how many people visit, how many book, and where they come from. Real data, not guesses.",
    },
    {
      icon: Wrench,
      title: "Ongoing support",
      body: "Class schedule changes, seasonal promotions, new services — I keep the site updated so you can focus on your clients.",
    },
  ],
};

// ── FAQ ──

export const faq = {
  sectionLabel: "Common Questions",
  heading: (city: string) => `Straight answers about wellness websites in ${city}.`,
  items: [
    {
      q: (city: string, _county: string) =>
        `Do you build websites for wellness businesses in ${city}?`,
      a: (city: string, county: string) =>
        `Yes. I'm based in the Central Valley and I'm building a focused practice around wellness businesses — gyms, medspas, chiropractors, and similar — in the 209. I know the ${city} market and what ${county} County residents are actually searching for.`,
    },
    {
      q: (_city: string, _county: string) =>
        "Do I need to leave Mindbody or my current booking system?",
      a: (_city: string, _county: string) =>
        "No. I integrate with whatever you're already using — Mindbody, Acuity, Vagaro, Jane, or anything with an API or embed. The goal is to make booking easier for your clients, not to force you onto a new platform.",
    },
    {
      q: (_city: string, _county: string) => "Can my site really compete with ClassPass and Yelp?",
      a: (_city: string, _county: string) =>
        "For discovery, platforms like ClassPass and Yelp have reach. But they own the relationship — you're paying for traffic to someone else's platform. Your own site builds your brand, captures leads directly, and ranks for searches that platforms can't own. The smart move is using both, but making your site the hub.",
    },
    {
      q: (_city: string, _county: string) => "What if I don't have professional photos?",
      a: (_city: string, _county: string) =>
        "I can work with phone photos and help direct a shoot if needed. But even good phone photos of your real space and team beat stock photography every time. People want to see where they're going and who they'll meet. Authenticity matters more than polish in wellness.",
    },
    {
      q: (city: string, _county: string) =>
        `How long until my ${city} business shows up on Google?`,
      a: (city: string, _county: string) =>
        `It depends on your niche and competition, but wellness searches in ${city} are less saturated than you'd think. Most local gyms, medspas, and chiropractors have weak or nonexistent SEO. With a properly built site, you can start seeing local ranking improvements in 4-8 weeks.`,
    },
    {
      q: (_city: string, _county: string) => "How much does a custom wellness website cost?",
      a: (_city: string, _county: string) =>
        "Most projects start at $1,500. You're paying for strategy, design, local SEO, and clean code — not templates or page builders. The site pays for itself when it starts bringing clients through the door instead of through a platform that takes a cut.",
    },
  ],
};

// ── Final CTA ──

export const finalCta = {
  sectionLabel: "Your Move",
  headline: (city: string) => `${city} residents are searching for what you offer. Right now.`,
  body: (city: string) =>
    `I'll look at how your business shows up in ${city} search results, where the gaps are, and what a real web presence would do for your bookings. Free, no strings.`,
  cta: { label: "See What You're Missing", href: "/contact" },
};
