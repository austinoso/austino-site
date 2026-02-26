import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development | austino",
  description:
    "Fast, search-optimized websites that turn visitors into customers around the clock. No templates, no bloat — just clean code built for results.",
  alternates: {
    canonical: "https://austino.dev/services/web-development",
  },
  openGraph: {
    title: "Web Development | austino",
    description:
      "Fast, search-optimized websites that turn visitors into customers around the clock. No templates, no bloat — just clean code built for results.",
    url: "https://austino.dev/services/web-development",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "My current website works fine. Is this really worth the investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: '"Works fine" and "actively brings in customers" are two very different things. If your site isn\'t ranking on Google, converting visitors into leads, or building trust the moment someone lands on it — it\'s costing you business you never see.',
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects take 2–4 weeks from kickoff to launch. That includes discovery, design, development, content, and revisions.",
      },
    },
    {
      "@type": "Question",
      name: "What if I need something changed on the site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most updates — new photos, changed hours, updated copy — just send me a list and I'll handle it, usually the same day. If your business needs to update things regularly on its own, I'll set up whatever makes sense for your workflow.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'technical SEO' actually mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's the behind-the-scenes code that tells Google what your business does, where you're located, and what you offer. Schema markup, sitemaps, proper heading structure, optimized images — all the things most template sites skip entirely.",
      },
    },
    {
      "@type": "Question",
      name: "Can't I just use a template from Wix or Squarespace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can — and it'll look like it. Templates share code with thousands of other sites, load slower, and give you almost zero control over the technical SEO signals Google uses to rank you. A custom-built site is faster, unique to your brand, and built from the ground up to convert visitors into customers.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a high-performance site cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most custom projects start at $1,500. Because I'm a specialized engineer — not a bloated agency — you're paying for code and strategy, not office rent and project managers.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development",
  description:
    "Fast, search-optimized websites that turn visitors into customers around the clock. No templates, no bloat — just clean code built for results.",
  provider: {
    "@type": "ProfessionalService",
    name: "austino",
    url: "https://austino.dev",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  url: "https://austino.dev/services/web-development",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://austino.dev",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Web Development",
      item: "https://austino.dev/services/web-development",
    },
  ],
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
