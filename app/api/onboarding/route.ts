import { NextRequest, NextResponse } from "next/server";
import {
  getNotion,
  getDsId,
  findPageBySlug,
  extractPageData,
  readPageBody,
  buildProperties,
  buildPageBody,
} from "@/lib/notion-onboarding";

// ── GET /api/onboarding?id=slug ──
// Lookup an existing project by slug and return prefill data
export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("id");

  if (!slug) {
    return NextResponse.json(
      { error: "Missing ?id= parameter" },
      { status: 400 },
    );
  }

  // Dev fallback
  if (!process.env.NOTION_API_KEY) {
    return NextResponse.json(
      { error: "NOTION_API_KEY not configured" },
      { status: 503 },
    );
  }

  try {
    const result = await findPageBySlug(slug);

    if (!result) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Extract column data
    const { pageId, step, depositPaid, data } = extractPageData(
      result as unknown as Record<string, unknown>,
    );

    // Read long-form page body
    const bodyData = await readPageBody(pageId);

    return NextResponse.json({
      pageId,
      slug,
      step,
      depositPaid,
      data: { ...data, ...bodyData },
    });
  } catch (error) {
    console.error("Onboarding GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 },
    );
  }
}

// ── POST /api/onboarding ──
// Create a new project row (cold leads / no existing slug)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, step = 7 } = body;

    if (!data?.name || !data?.email || !data?.businessName) {
      return NextResponse.json(
        { error: "Name, email, and business name are required." },
        { status: 400 },
      );
    }

    // Dev fallback
    if (!process.env.NOTION_API_KEY) {
      console.warn("NOTION_API_KEY not set — returning mock submission ID");
      return NextResponse.json(
        { id: `mock-${Date.now()}`, slug: null },
        { status: 201 },
      );
    }

    const notion = getNotion();
    const properties = buildProperties(data, step);

    // Auto-generate slug from business name
    const slug = data.businessName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    properties["Slug"] = {
      rich_text: [{ text: { content: slug } }],
    };
    properties["Status"] = {
      select: { name: "Lead" },
    };

    const response = await notion.pages.create({
      parent: { data_source_id: getDsId() },
      properties,
      children: buildPageBody(data),
    });

    return NextResponse.json(
      { id: response.id, pageId: response.id, slug },
      { status: 201 },
    );
  } catch (error) {
    console.error("Onboarding POST error:", error);
    return NextResponse.json(
      { error: "Failed to save submission. Please try again." },
      { status: 500 },
    );
  }
}

// ── PATCH /api/onboarding ──
// Update an existing project (by pageId) — used for per-step saves
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { pageId, data, step } = body;

    if (!pageId) {
      return NextResponse.json({ error: "Missing pageId" }, { status: 400 });
    }

    // Dev fallback
    if (!process.env.NOTION_API_KEY) {
      return NextResponse.json({ ok: true });
    }

    const notion = getNotion();
    const properties = buildProperties(data, step);

    await notion.pages.update({
      page_id: pageId,
      properties,
    });

    // Replace page body with latest long-form answers
    // First, delete old blocks
    const existingBlocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    await Promise.all(
      existingBlocks.results.map((block) =>
        notion.blocks.delete({ block_id: block.id }),
      ),
    );

    // Append new blocks
    const newBlocks = buildPageBody(data);
    if (newBlocks.length > 0) {
      await notion.blocks.children.append({
        block_id: pageId,
        children: newBlocks,
      });
    }

    // Read slug from the page
    const page = await notion.pages.retrieve({ page_id: pageId });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const slugText =
      (page as any).properties?.Slug?.rich_text?.[0]?.plain_text ?? null;

    return NextResponse.json({ ok: true, slug: slugText });
  } catch (error) {
    console.error("Onboarding PATCH error:", error);
    return NextResponse.json(
      { error: "Failed to update submission." },
      { status: 500 },
    );
  }
}
