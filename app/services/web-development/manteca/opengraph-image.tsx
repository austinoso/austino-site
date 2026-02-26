import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Manteca Web Development — austino";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    heading: "Manteca Web Development",
    subtext:
      "Custom websites built for Manteca businesses that show up when locals search.",
  });
}
