export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://www.austino.dev/#business",
    name: "austino",
    url: "https://www.austino.dev",
    description:
      "High-performance websites, growth strategies that climb search rankings, and automation that eliminates busywork — giving local businesses an edge no template can match.",
    areaServed: [
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
    serviceType: ["Web Development", "Growth Strategy", "Business Automation"],
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: "Austin Osorio",
      jobTitle: "Founder & Lead Engineer",
      url: "https://www.austino.dev",
    },
    sameAs: [
      "https://github.com/austinoso",
      "https://linkedin.com/in/austinoso",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Workflow Automation",
      "Small Business Web Development",
      "Local SEO",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
