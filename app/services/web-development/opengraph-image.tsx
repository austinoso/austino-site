import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Web Development — austino";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    heading: "Web Development Built for Results",
    subtext:
      "Fast, search-optimized websites that turn visitors into customers. No templates, no bloat.",
  });
}
