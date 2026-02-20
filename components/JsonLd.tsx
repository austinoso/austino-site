export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "austino",
    url: "https://austino.dev",
    description:
      "I build fast, high-converting websites, automate the busywork, and provide ongoing tech support — so small business owners can focus on what they do best.",
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
    serviceType: [
      "Web Development",
      "Business Automation",
      "Ongoing Tech Support",
    ],
    founder: {
      "@type": "Person",
      name: "Austin O.",
      jobTitle: "Web Developer & Automation Specialist",
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
