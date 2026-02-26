import { generateOGImage, ogSize, ogContentType } from "@/lib/og-image";
import { getProjectBySlug } from "@/lib/projects";

export const runtime = "edge";
export const alt = "Case Study — austino";
export const size = ogSize;
export const contentType = ogContentType;

const BASE_URL = "https://www.austino.dev";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getProjectBySlug(slug);

  if (!study) {
    return generateOGImage({
      heading: "Case Study",
      subtext: "Real projects for real businesses.",
    });
  }

  const backgroundImageUrl = study.image
    ? `${BASE_URL}${study.image}`
    : undefined;

  return generateOGImage({
    heading: study.seoTitle || study.title,
    subtext: study.seoExcerpt || study.excerpt,
    backgroundImageUrl,
  });
}
