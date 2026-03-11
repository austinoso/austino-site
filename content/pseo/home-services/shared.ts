// ── Shared copy for all home-services × city pSEO pages ──
// City-specific overrides live in stockton.ts, modesto.ts, tracy.ts.

import { Search, Clock, Phone, Zap, MapPin, Thermometer, Star } from "lucide-react";

// ── Hero ──

export const hero = {
  sectionLabel: "Home Service Websites",
  headline: (city: string) => `When a ${city} homeowner's AC dies, your site has 3 seconds.`,
  subtext: (city: string) =>
    `Home service searches are urgent. The roof is leaking, the furnace quit, the pipe burst. People in ${city} aren't browsing. They're picking the first contractor that looks reliable and loads fast. If your site takes 6 seconds or buries the phone number, they're calling someone else.`,
  cta: { label: "See How Your Site Performs", href: "/contact" },
};

// ── The Gap (problem section) ──

export const problems = {
  sectionLabel: "The Problem",
  heading: (city: string) => `Every slow second costs ${city} contractors real jobs.`,
  subtext:
    "When someone searches for emergency service, the decision happens in seconds — not minutes. Most contractor sites aren't built for that moment.",
  cards: [
    {
      icon: Clock,
      stat: "53%",
      statLabel: "bounce if load time > 3s",
      heading: "Three seconds. That's all you get.",
      body: (city: string) =>
        `Over half of mobile visitors leave if a page takes more than 3 seconds to load. A ${city} homeowner with a burst pipe isn't waiting for your slider to finish animating.`,
      source: {
        label: "Google / Think with Google",
        href: "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/",
      },
    },
    {
      icon: Phone,
      stat: "60%",
      statLabel: "call from search on mobile",
      heading: "They want to call, not browse",
      body: (city: string) =>
        `60% of mobile searchers contact a business directly from search results. If your ${city} business doesn't have click-to-call front and center, they won't work for it.`,
      source: {
        label: "Google / Ipsos",
        href: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/click-to-call/",
      },
    },
    {
      icon: Search,
      stat: "76%",
      statLabel: "visit a store within 24h",
      heading: "Local search = same-day action",
      body: (city: string) =>
        `76% of people who search for something local visit a business within 24 hours. The ${city} HVAC company or roofer that shows up first gets the job today, not next week.`,
      source: {
        label: "Google / Purchased Digital Diary",
        href: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/how-micromoments-are-changing-rules/",
      },
    },
  ],
};

// ── Speed Proof ──

export const speedProof = {
  sectionLabel: "Speed Is the Product",
  heading: "Your site speed is your first impression.",
  subtext:
    "Google scores every website on speed, responsiveness, and stability. Those scores affect where you rank. Most contractor sites fail.",
  metrics: [
    {
      label: "Content loads in",
      value: "≤ 2.5s",
      description:
        "Google wants your main content visible within 2.5 seconds. Most contractor sites take 6–8.",
    },
    {
      label: "Buttons respond in",
      value: "≤ 200ms",
      description:
        "When someone taps your phone number, Google expects a response within 200 milliseconds. Slow themes make every tap feel broken.",
    },
    {
      label: "Nothing jumps around",
      value: "≤ 0.1",
      description:
        "Google penalizes pages where content shifts while loading. A clean build keeps everything locked in place.",
    },
    {
      label: "Google speed score",
      value: "90+",
      description:
        "Google audits every site on a 0–100 scale. Most contractor sites score 30–50. A hand-coded site clears 90.",
    },
  ],
};

// ── The Math ──

export const theMath = {
  sectionLabel: "The Math",
  heading: (city: string) => `What one missed call costs a ${city} contractor.`,
  subtext: "Slow sites cost real jobs at real dollar amounts.",
  rows: [
    {
      label: "Average HVAC repair job",
      value: "$350–$1,200",
    },
    {
      label: "Average roofing job",
      value: "$8,000–$15,000",
    },
    {
      label: "Average restoration job",
      value: "$3,000–$10,000",
    },
    {
      label: "Visitors who leave a slow site",
      value: "53%",
      highlight: true,
    },
  ],
  closer:
    "One roofing job pays for the entire site. A fast, well-built site pays for itself before the first month is over.",
};

// ── What You Get (deliverables) ──

export const deliverables = {
  sectionLabel: "What You Get",
  heading: (city: string) => `A site built for how ${city} homeowners hire.`,
  subtext: "Every feature exists to get the phone ringing or the form filled — fast.",
  items: [
    {
      icon: Zap,
      title: "Sub-2-second load time",
      body: "Hand-coded, no bloat, no page builders. Your site loads before a homeowner can blink.",
    },
    {
      icon: Phone,
      title: "Click-to-call on every page",
      body: "Your phone number is tappable from any page, any section, any device. No hunting.",
    },
    {
      icon: Thermometer,
      title: "Service-specific landing pages",
      body: "AC Repair, New Roof, Water Damage — each service gets its own page optimized for exactly how people search.",
    },
    {
      icon: MapPin,
      title: "Local SEO + Google Business",
      body: "Your site and Google Business Profile tied together with consistent data so you show up in maps and local results.",
    },
    {
      icon: Star,
      title: "Review integration",
      body: "Your best Google reviews pulled onto the site automatically. Social proof right where people are deciding.",
    },
  ],
};

// ── FAQ ──

export const faq = {
  sectionLabel: "Common Questions",
  heading: (city: string) => `Questions ${city} contractors ask.`,
  items: [
    {
      q: (city: string, _county: string) => `Do you build websites for contractors in ${city}?`,
      a: (city: string, county: string) =>
        `Yes. I'm in the Central Valley and work specifically with home service businesses in the 209. I know the ${city} market and what ${county} County homeowners search for when something breaks.`,
    },
    {
      q: (_city: string, _county: string) => "How is this different from HomeAdvisor or Thumbtack?",
      a: (_city: string, _county: string) =>
        "Those platforms rent you leads and keep the customer relationship. Your website is yours. Your domain, your brand, your leads. When someone finds you through Google, they call you directly.",
    },
    {
      q: (_city: string, _county: string) => "Can my site really load in under 2 seconds?",
      a: (_city: string, _county: string) =>
        "Yes. Most contractor sites run WordPress with heavy themes and a dozen plugins. I build with clean code and zero bloat. Under 2 seconds on a phone, which is where emergency searches happen.",
    },
    {
      q: (_city: string, _county: string) => "What if I already have a website?",
      a: (_city: string, _county: string) =>
        "Most contractors do. If it's not fast, doesn't rank, and isn't getting the phone to ring, you're leaving money on the table. I'll audit it for free and show you where you stand.",
    },
    {
      q: (city: string, _county: string) => `How long until I rank in ${city} for my services?`,
      a: (city: string, _county: string) =>
        `Most home service niches in ${city} are less competitive than you'd think online. With a properly built site and local SEO, you can see movement in 4–8 weeks. Emergency services like HVAC and plumbing often rank faster because fewer contractors invest in real SEO.`,
    },
    {
      q: (_city: string, _county: string) => "Do you handle seasonal changes in search?",
      a: (_city: string, _county: string) =>
        "Yes. HVAC spikes in summer and winter. Roofing picks up in spring and after storms. I build seasonal service pages ready to capture that demand when it hits.",
    },
  ],
};

// ── Final CTA ──

export const finalCta = {
  sectionLabel: "Your Move",
  headline: (city: string) => `Every day your site loads slow, a ${city} competitor gets the call.`,
  body: (city: string) =>
    `I'll audit your current site, show you what it's costing you in ${city}, and map out what a fast, search-optimized site would look like for your business. Free, no strings.`,
  cta: { label: "See What You're Losing", href: "/contact" },
};
