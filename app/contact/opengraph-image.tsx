import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Contact — austino";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    heading: "Let's Talk",
    subtext:
      "Tell me about your business — I'll follow up with a clear plan within 24 hours.",
  });
}
