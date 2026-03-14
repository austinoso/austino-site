import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";
import { getPseoPageData } from "@/lib/pseo";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export const alt = "Wellness Websites — Loud Bark";

interface Props {
  params: Promise<{ city: string }>;
}

export default async function Image({ params }: Props) {
  const { city: citySlug } = await params;
  const data = getPseoPageData("wellness-websites", citySlug);

  const cityName = data?.city.name ?? "Central Valley";

  return generateOGImage({
    heading: `Wellness Websites in ${cityName}`,
    subtext: `Custom websites for ${cityName} gyms, medspas, and chiropractors. Built for local search and client retention.`,
  });
}
