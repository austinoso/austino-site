import { Client } from "@notionhq/client";
import type { OnboardingData } from "@/app/onboarding/types";

// ── Lazy init ──
export function getNotion() {
  return new Client({ auth: process.env.NOTION_API_KEY });
}

/** Database ID — used as parent for pages.create */
export function getDbId() {
  return process.env.NOTION_ONBOARDING_DB_ID!;
}

/** Data-source ID — used for queries (SDK v5 moved query from databases → dataSources) */
export function getDsId() {
  return process.env.NOTION_ONBOARDING_DS_ID!;
}

// ── Lookup by slug ──
export async function findPageBySlug(slug: string) {
  const notion = getNotion();
  const res = await notion.dataSources.query({
    data_source_id: getDsId(),
    filter: {
      property: "Slug",
      rich_text: { equals: slug },
    },
    page_size: 1,
  });
  return res.results[0] ?? null;
}

// ── Extract OnboardingData + metadata from a Notion page ──
export function extractPageData(page: Record<string, unknown>): {
  pageId: string;
  slug: string;
  step: number;
  depositPaid: boolean;
  data: Partial<OnboardingData>;
} {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props = (page as any).properties;

  const getText = (prop: unknown): string => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const p = prop as any;
    if (!p) return "";
    if (p.type === "title") return p.title?.[0]?.plain_text ?? "";
    if (p.type === "rich_text") return p.rich_text?.[0]?.plain_text ?? "";
    if (p.type === "email") return p.email ?? "";
    if (p.type === "select") return p.select?.name ?? "";
    if (p.type === "number") return String(p.number ?? "");
    if (p.type === "checkbox") return p.checkbox ? "true" : "false";
    if (p.type === "multi_select")
      return (p.multi_select ?? [])
        .map((s: { name: string }) => s.name)
        .join(",");
    return "";
  };

  // Extract logo file info from files property
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logoProp = props["Logo"] as any;
  let logoFileId = "";
  let logoFileName = "";
  if (logoProp?.files?.length > 0) {
    const first = logoProp.files[0];
    logoFileName = first.name ?? "";
    // A file_upload reference stores the id; a Notion-hosted file has a file.url
    if (first.file_upload) {
      logoFileId = first.file_upload.id ?? "";
    } else if (first.file) {
      // Already uploaded — store the URL as the id so we know it exists
      logoFileId = first.file.url ?? "uploaded";
    }
  }

  const toolsStr = getText(props["Current Tools"]);
  const currentTools = toolsStr ? toolsStr.split(",") : [];

  return {
    pageId: (page as { id: string }).id,
    slug: getText(props["Slug"]),
    step: parseInt(getText(props["Last Step"]) || "1", 10) || 1,
    depositPaid: getText(props["Deposit Paid"]) === "true",
    data: {
      name: getText(props["Contact Name"]),
      email: getText(props["Email"]),
      businessName: getText(props["Business Name"]),
      existingSite: getText(props["Existing Site"]),
      instagram: getText(props["Instagram"]),
      facebook: getText(props["Facebook"]),
      otherSocials: getText(props["Other Socials"]),
      websiteJob: getText(props["Website Job"]),
      heroStyle: getText(props["Hero Style"]),
      personality: getText(props["Personality"]),
      colorPalette: getText(props["Color Palette"]),
      brandColor: getText(props["Brand Color"]),
      logoFileId,
      logoFileName,
      currentTools,
    },
  };
}

// ── Read page body blocks for long-form answers ──
export async function readPageBody(
  pageId: string,
): Promise<Partial<OnboardingData>> {
  const notion = getNotion();
  const blocks = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  });

  const result: Partial<OnboardingData> = {};
  let currentHeading = "";

  for (const block of blocks.results) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const b = block as any;

    if (b.type === "heading_3") {
      currentHeading = b.heading_3?.rich_text?.[0]?.plain_text ?? "";
    } else if (b.type === "paragraph" && currentHeading) {
      const text = b.paragraph?.rich_text?.[0]?.plain_text ?? "";
      if (!text) continue;

      switch (currentHeading) {
        case "Secret Sauce":
          result.secretSauce = text;
          break;
        case "Phone FAQ":
          result.phoneFaq = text;
          break;
        case "Ideal Customer":
          result.idealCustomer = text;
          break;
        case "Automation Wish":
          result.automationWish = text;
          break;
        case "Website Job (Other)":
          result.websiteJobOther = text;
          break;
        case "Current Tools (Other)":
          result.currentToolsOther = text;
          break;
      }
    }
  }

  return result;
}

// ── Build the page body blocks for long-form answers ──
export function buildPageBody(data: OnboardingData) {
  const sections: { heading: string; text: string }[] = [
    { heading: "Secret Sauce", text: data.secretSauce },
    { heading: "Phone FAQ", text: data.phoneFaq },
    { heading: "Ideal Customer", text: data.idealCustomer },
    { heading: "Automation Wish", text: data.automationWish },
    { heading: "Website Job (Other)", text: data.websiteJobOther },
    { heading: "Current Tools (Other)", text: data.currentToolsOther },
  ].filter((s) => s.text.trim() !== "");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blocks: any[] = [];

  for (const section of sections) {
    blocks.push({
      object: "block",
      type: "heading_3",
      heading_3: {
        rich_text: [{ type: "text", text: { content: section.heading } }],
      },
    });
    blocks.push({
      object: "block",
      type: "paragraph",
      paragraph: {
        rich_text: [{ type: "text", text: { content: section.text } }],
      },
    });
  }

  return blocks;
}

// ── Build Notion property updates from OnboardingData ──
export function buildProperties(data: OnboardingData, step: number) {
  const toolsList = [...data.currentTools.filter((t) => t !== "other")];
  if (data.currentTools.includes("other") && data.currentToolsOther) {
    toolsList.push(data.currentToolsOther);
  }

  const websiteJob = data.websiteJob === "other" ? "other" : data.websiteJob;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props: Record<string, any> = {
    "Contact Name": {
      rich_text: [{ text: { content: data.name || "" } }],
    },
    Email: {
      email: data.email || null,
    },
    "Business Name": {
      title: [{ text: { content: data.businessName || "" } }],
    },
    "Last Step": {
      number: step,
    },
    "Last Contact": {
      date: { start: new Date().toISOString().split("T")[0] },
    },
  };

  // Only set selects if they have values (Notion rejects empty select names)
  if (websiteJob) {
    props["Website Job"] = { select: { name: websiteJob } };
  }
  if (data.heroStyle) {
    props["Hero Style"] = { select: { name: data.heroStyle } };
  }
  if (data.personality) {
    props["Personality"] = { select: { name: data.personality } };
  }
  if (data.colorPalette) {
    props["Color Palette"] = { select: { name: data.colorPalette } };
  }
  if (data.brandColor) {
    props["Brand Color"] = {
      rich_text: [{ text: { content: data.brandColor } }],
    };
  }
  if (toolsList.length > 0) {
    props["Current Tools"] = {
      multi_select: toolsList.map((tool) => ({ name: tool })),
    };
  }
  if (data.existingSite) {
    props["Existing Site"] = {
      url: data.existingSite,
    };
  }
  if (data.instagram) {
    props["Instagram"] = {
      rich_text: [{ text: { content: data.instagram } }],
    };
  }
  if (data.facebook) {
    props["Facebook"] = {
      rich_text: [{ text: { content: data.facebook } }],
    };
  }
  if (data.otherSocials) {
    props["Other Socials"] = {
      rich_text: [{ text: { content: data.otherSocials } }],
    };
  }
  // Attach logo as a Notion file_upload reference
  if (data.logoFileId && !data.logoFileId.startsWith("http")) {
    props["Logo"] = {
      files: [
        {
          file_upload: { id: data.logoFileId },
          name: data.logoFileName || "logo",
        },
      ],
    };
  }

  return props;
}
