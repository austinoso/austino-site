import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Work — austino";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    heading: "Our Work",
    subtext:
      "Real projects for real businesses. See the problem, the approach, and the results.",
  });
}
