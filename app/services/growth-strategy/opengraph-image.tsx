import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Growth Strategy — austino";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    heading: "Growth Strategy That Moves the Needle",
    subtext:
      "Real data, real results. A web strategist in your corner improving what underperforms every month.",
  });
}
