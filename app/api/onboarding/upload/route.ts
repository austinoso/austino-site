import { NextRequest, NextResponse } from "next/server";
import { getNotion } from "@/lib/notion-onboarding";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/svg+xml",
  "application/pdf",
];

/**
 * POST /api/onboarding/upload
 *
 * Accepts a single file via FormData and uploads it to Notion
 * using the SDK v5 file-upload flow (create → send → complete).
 *
 * Returns { fileId, fileName } on success.
 */
export async function POST(request: NextRequest) {
  if (!process.env.NOTION_API_KEY) {
    return NextResponse.json(
      { error: "NOTION_API_KEY not configured" },
      { status: 503 },
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File too large (max 5 MB)" },
        { status: 413 },
      );
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "Unsupported file type. Use PNG, JPG, WebP, SVG, or PDF." },
        { status: 415 },
      );
    }

    const notion = getNotion();

    // Step 1: Create the file upload
    const upload = await notion.fileUploads.create({
      mode: "single_part",
      filename: file.name,
      content_type: file.type,
    });

    // Step 2: Send the file data
    await notion.fileUploads.send({
      file_upload_id: upload.id,
      file: {
        data: new Blob([await file.arrayBuffer()], { type: file.type }),
        filename: file.name,
      },
    });

    // Step 3: Complete the upload
    await notion.fileUploads.complete({
      file_upload_id: upload.id,
    });

    return NextResponse.json({
      fileId: upload.id,
      fileName: file.name,
    });
  } catch (error) {
    console.error("Onboarding upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file. Please try again." },
      { status: 500 },
    );
  }
}
