import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manteca Web Design That Actually Gets Found | austino",
  description:
    "Custom websites for Manteca businesses that show up when locals search. Fast load times, local SEO, and online booking built in — no templates.",
  alternates: {
    canonical: "https://www.austino.dev/services/web-development/manteca",
  },
  openGraph: {
    title: "Manteca Web Design That Actually Gets Found | austino",
    description:
      "Custom websites for Manteca businesses that show up when locals search. Fast load times, local SEO, and online booking built in — no templates.",
    url: "https://www.austino.dev/services/web-development/manteca",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long until my Manteca business starts ranking on Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most businesses start seeing movement within 4–8 weeks of launch. Google needs time to crawl, index, and trust your site. Local rankings tend to move faster than national ones because there's less competition — especially in markets like Manteca where most competitors aren't doing any of this.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a brand new website, or can you fix what I have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I build from the ground up — every time. Even if I started with what you have, I'd end up rebuilding it anyway to get the speed, SEO, and structure right. So the cost would be the same either way. The good news is you're not paying to patch something old — you're getting a site built specifically for your business from day one.",
      },
    },
    {
      "@type": "Question",
      name: "What makes this different from hiring a marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agencies sell packages. I build tools. You're not paying for account managers, monthly reports full of vanity metrics, or a 12-month contract. You're paying for code and strategy from someone who actually builds the thing — and who only works with one business per niche in your area.",
      },
    },
    {
      "@type": "Question",
      name: "I already have a Google Business Profile. Isn't that enough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Google Business Profile is table stakes — it's the minimum. But Google cross-references your profile with your website. If your site doesn't have matching NAP info, local schema markup, and relevant content, your profile won't rank as well as it could. The two work together.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only work with businesses in Manteca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — I work with small businesses across the Central Valley and beyond. But I know Manteca and the 209 area well, which means I understand the local market, the competition, and what it takes to stand out here specifically.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a custom website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects start at $1,500. You're paying for custom code and local SEO strategy — not a reskinned template. For businesses that want ongoing growth support after launch, I offer partnership models that lower the upfront cost in exchange for continued optimization.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development for Manteca Businesses",
  description:
    "Custom websites built for Manteca, CA businesses with local SEO, fast load times, and conversion-focused design.",
  provider: {
    "@type": "ProfessionalService",
    name: "austino",
    url: "https://www.austino.dev",
  },
  areaServed: {
    "@type": "City",
    name: "Manteca",
    containedInPlace: {
      "@type": "State",
      name: "California",
    },
  },
  url: "https://www.austino.dev/services/web-development/manteca",
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
      name: "Web Development",
      item: "https://www.austino.dev/services/web-development",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Manteca",
      item: "https://www.austino.dev/services/web-development/manteca",
    },
  ],
};

export default function MantecaLayout({
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
