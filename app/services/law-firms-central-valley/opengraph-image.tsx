import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Web Design for Law Firms in the Central Valley — austino";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    heading: "Web Design for Law Firms in the Central Valley",
    subtext:
      "Custom-built websites for law firms in Fresno, Bakersfield, Stockton, Modesto, and the Central Valley. No templates.",
  });
}
