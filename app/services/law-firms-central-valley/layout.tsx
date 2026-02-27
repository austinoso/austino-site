import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design for Law Firms in the Central Valley | austino",
  description:
    "Custom-built websites for law firms in Fresno, Bakersfield, Stockton, Modesto, and the Central Valley. No templates — designed around your practice, your values, and your brand.",
  alternates: {
    canonical: "https://www.austino.dev/services/law-firms-central-valley",
  },
  openGraph: {
    title: "Web Design for Law Firms in the Central Valley | austino",
    description:
      "Custom-built websites for law firms in Fresno, Bakersfield, Stockton, Modesto, and the Central Valley. No templates — designed around your practice, your values, and your brand.",
    url: "https://www.austino.dev/services/law-firms-central-valley",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the demo what my site will look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The demo is a concept I made to show what's possible. Your site will be designed from scratch around your practice, your brand, and your goals. No templates, no recycled layouts.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a law firm website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects take 2–4 weeks from start to launch. That covers discovery, design, development, content, and revisions. I work around your schedule — I know attorneys are busy.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only work with law firms in the Central Valley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I work with businesses across industries, but I'm building a focused practice around law firms in this region because I understand the market and the competition here. If you're outside the Valley, we can still talk.",
      },
    },
    {
      "@type": "Question",
      name: "What if I already have a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's fine — most firms I talk to do. The question is whether it's actually working for you. If it's not generating leads, not ranking on Google, or looks like it was built in 2015, it's time for something better.",
      },
    },
    {
      "@type": "Question",
      name: "Can't I just use a legal website template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can — and you'll look like every other firm that did. Templates share the same code, the same layouts, and the same limits. A custom site loads faster, ranks better, and actually looks like your firm.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'one firm per practice area' mean exactly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're a personal injury firm in Fresno and I build your site, I won't take on another personal injury firm in Fresno. You get my full effort, my best work, and zero conflict of interest. I'm in your corner — not hedging my bets.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a custom law firm website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects start at $1,500. You're paying for strategy, design, and clean code — not agency overhead, account managers, and recycled templates.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design for Law Firms — Central Valley",
  description:
    "Custom-built websites for law firms in Fresno, Bakersfield, Stockton, Modesto, and the Central Valley. Designed around your practice, your values, and your brand.",
  provider: {
    "@type": "ProfessionalService",
    name: "austino",
    url: "https://www.austino.dev",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Fresno",
      containedInPlace: { "@type": "State", name: "California" },
    },
    {
      "@type": "City",
      name: "Bakersfield",
      containedInPlace: { "@type": "State", name: "California" },
    },
    {
      "@type": "City",
      name: "Stockton",
      containedInPlace: { "@type": "State", name: "California" },
    },
    {
      "@type": "City",
      name: "Modesto",
      containedInPlace: { "@type": "State", name: "California" },
    },
    {
      "@type": "City",
      name: "Visalia",
      containedInPlace: { "@type": "State", name: "California" },
    },
  ],
  url: "https://www.austino.dev/services/law-firms-central-valley",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.austino.dev",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Law Firms — Central Valley",
      item: "https://www.austino.dev/services/law-firms-central-valley",
    },
  ],
};

export default function LawFirmsCentralValleyLayout({
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
