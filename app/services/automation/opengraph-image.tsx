import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Automation — austino";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    heading: "Automation That Works While You Sleep",
    subtext:
      "Custom automation that connects your tools, eliminates repetitive tasks, and runs 24/7.",
  });
}
