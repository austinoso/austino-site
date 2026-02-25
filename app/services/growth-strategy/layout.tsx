import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Strategy | austino",
  description:
    "A web strategist in your corner — using real data to improve what's underperforming and building content that earns search authority every month.",
  alternates: {
    canonical: "https://austino.dev/services/growth-strategy",
  },
  openGraph: {
    title: "Growth Strategy | austino",
    description:
      "A web strategist in your corner — using real data to improve what's underperforming and building content that earns search authority every month.",
    url: "https://austino.dev/services/growth-strategy",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of content do you create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Service deep-dives, FAQ pages, educational content, and location-specific landing pages — all written to match how your customers actually search. I handle the research and drafting. I just need 60 seconds of your expertise via a voice memo or a quick call to add the human touch Google rewards.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO is often a checklist — meta tags, keywords, backlinks. This is about becoming the authority in your space. I'm building actual pages with real value that both Google and your customers reward. The SEO happens as a byproduct of doing useful work.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't need changes every month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's fine — this isn't about making changes for the sake of it. Some months I'm building a new service page. Other months the data says everything's performing well, so I'm monitoring and planning the next move. You're paying for a strategist who's always watching, not someone who's always tinkering.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — no long-term contracts. That said, this kind of growth isn't overnight. Google takes time to index new pages and build trust in your site. Most clients start seeing real movement by month two or three, and it compounds from there.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need this if I just launched a new site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Especially then. The first few months after launch are when your ranking momentum is building fastest. That's the most impactful time to have someone reading the data, fixing what's underperforming, and publishing the pages that establish your authority early.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Growth Strategy",
  description:
    "A web strategist in your corner — using real data to improve what's underperforming and building content that earns search authority every month.",
  provider: {
    "@type": "ProfessionalService",
    name: "austino",
    url: "https://austino.dev",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  url: "https://austino.dev/services/growth-strategy",
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
      name: "Growth Strategy",
      item: "https://austino.dev/services/growth-strategy",
    },
  ],
};

export default function GrowthStrategyLayout({
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
