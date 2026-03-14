import type { CityData } from "@/content/pseo/cities";
import type { NicheConfig } from "@/content/pseo/niches";

interface PseoSchemaMarkupProps {
  city: CityData;
  niche: NicheConfig;
  faqItems: { q: string; a: string }[];
}

export default function PseoSchemaMarkup({ city, niche, faqItems }: PseoSchemaMarkupProps) {
  const url = `https://www.loudbark.dev/services/${niche.nicheSlug}/${city.slug}`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Loud Bark — Web Development",
    description: `Custom ${niche.label.toLowerCase()} built for ${city.name}, CA businesses. Fast, SEO-optimized, local-first.`,
    url,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${city.county} County, CA`,
      },
    },
    provider: {
      "@type": "Person",
      name: "Austin Osorio",
      url: "https://www.loudbark.dev",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
