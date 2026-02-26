export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "austino",
    url: "https://austino.dev",
    description:
      "High-performance websites, growth strategies that climb search rankings, and automation that eliminates busywork — giving local businesses an edge no template can match.",
    areaServed: [
      {
        "@type": "State",
        name: "California",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    serviceType: ["Web Development", "Growth Strategy", "Business Automation"],
    founder: {
      "@type": "Person",
      name: "Austin O.",
      jobTitle: "Web Strategist & Engineer",
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
