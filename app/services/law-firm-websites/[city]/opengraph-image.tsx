import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";
import { getPseoPageData } from "@/lib/pseo";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export const alt = "Law Firm Websites — Loud Bark";

interface Props {
  params: Promise<{ city: string }>;
}

export default async function Image({ params }: Props) {
  const { city: citySlug } = await params;
  const data = getPseoPageData("law-firm-websites", citySlug);

  const cityName = data?.city.name ?? "Central Valley";

  return generateOGImage({
    heading: `Law Firm Websites in ${cityName}`,
    subtext: `Custom websites built for ${cityName} law firms. Fast, SEO-optimized, designed to earn trust.`,
  });
}
