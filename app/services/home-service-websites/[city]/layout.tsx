import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPseoPageData, getCitySlugsForNiche } from "@/lib/pseo";

interface Props {
  children: React.ReactNode;
  params: Promise<{ city: string }>;
}

const NICHE_SLUG = "home-service-websites";

export async function generateStaticParams() {
  return getCitySlugsForNiche(NICHE_SLUG).map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const data = getPseoPageData(NICHE_SLUG, citySlug);
  if (!data) return {};

  const { city, niche } = data;
  const title = `${niche.label} in ${city.name} | Loud Bark`;
  const description = `Fast, conversion-focused websites for ${city.name} contractors. HVAC, roofing, restoration — built to rank on Google and get the phone ringing.`;
  const url = `https://www.loudbark.dev/services/${niche.nicheSlug}/${city.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}

export default async function HomeServiceCityLayout({ children, params }: Props) {
  const { city: citySlug } = await params;
  const data = getPseoPageData(NICHE_SLUG, citySlug);
  if (!data) notFound();

  return <>{children}</>;
}
