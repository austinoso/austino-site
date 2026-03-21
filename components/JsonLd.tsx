export default function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://www.loudbark.dev/#business",
    name: "Loud Bark",
    url: "https://www.loudbark.dev",
    description:
      "High-performance websites, growth strategies that climb search rankings, and automation that eliminates busywork — giving local businesses an edge no template can match.",
    areaServed: [
      {
        "@type": "City",
        name: "Patterson",
        containedInPlace: { "@type": "State", name: "California" },
      },
      {
        "@type": "City",
        name: "Modesto",
        containedInPlace: { "@type": "State", name: "California" },
      },
      {
        "@type": "City",
        name: "Stockton",
        containedInPlace: { "@type": "State", name: "California" },
      },
      {
        "@type": "City",
        name: "Manteca",
        containedInPlace: { "@type": "State", name: "California" },
      },
      {
        "@type": "City",
        name: "Tracy",
        containedInPlace: { "@type": "State", name: "California" },
      },
      {
        "@type": "City",
        name: "Turlock",
        containedInPlace: { "@type": "State", name: "California" },
      },
      {
        "@type": "State",
        name: "California",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web & Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description:
              "Custom-coded, high-performance websites built with Next.js. No templates. Optimized for speed, local SEO, and conversion.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Automation",
            description:
              "Custom workflow automation that connects your tools, eliminates repetitive tasks, and runs 24/7.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Growth Strategy",
            description:
              "Data-driven SEO and content strategy that builds search authority and generates more leads month over month.",
          },
        },
      ],
    },
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: "Austin Osorio",
      jobTitle: "Founder & Lead Engineer",
      url: "https://www.loudbark.dev",
    },
    sameAs: [
      "https://github.com/austinoso",
      "https://linkedin.com/in/austinoso",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.loudbark.dev/#website",
    name: "Loud Bark",
    url: "https://www.loudbark.dev",
    publisher: {
      "@id": "https://www.loudbark.dev/#business",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
