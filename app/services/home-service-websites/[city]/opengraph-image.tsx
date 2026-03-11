import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";
import { getPseoPageData } from "@/lib/pseo";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;

export const alt = "Home Service Websites — austino";

interface Props {
  params: Promise<{ city: string }>;
}

export default async function Image({ params }: Props) {
  const { city: citySlug } = await params;
  const data = getPseoPageData("home-service-websites", citySlug);

  const cityName = data?.city.name ?? "Central Valley";

  return generateOGImage({
    heading: `Home Service Websites in ${cityName}`,
    subtext: `Fast, conversion-focused websites for ${cityName} contractors. Built to rank and get the phone ringing.`,
  });
}
