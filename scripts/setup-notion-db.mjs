/**
 * One-time script: configure the Notion "Onboarding" database
 * with the pro-standard schema.
 *
 * SDK v5 stores properties on **data sources** (not databases).
 * This script fetches the data source ID from the database,
 * then updates the data source with the full schema.
 *
 * Columns = filterable/sortable data only.
 * Long-form answers go into the page body on submission.
 *
 * Usage:
 *   node scripts/setup-notion-db.mjs
 *
 * Requires NOTION_API_KEY and NOTION_ONBOARDING_DB_ID in .env.local
 */

import { Client } from "@notionhq/client";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

// Parse .env.local manually (no dotenv dependency needed)
function loadEnv() {
  try {
    const envPath = resolve(process.cwd(), ".env.local");
    const content = readFileSync(envPath, "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIndex = trimmed.indexOf("=");
      if (eqIndex === -1) continue;
      const key = trimmed.slice(0, eqIndex).trim();
      const value = trimmed.slice(eqIndex + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // .env.local not found — rely on existing env vars
  }
}

// Append or update a key in .env.local
function upsertEnv(key, value) {
  const envPath = resolve(process.cwd(), ".env.local");
  let content = "";
  try {
    content = readFileSync(envPath, "utf-8");
  } catch {
    // file doesn't exist yet
  }
  const lines = content.split("\n");
  let found = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith(`${key}=`)) {
      lines[i] = `${key}=${value}`;
      found = true;
      break;
    }
  }
  if (!found) lines.push(`${key}=${value}`);
  writeFileSync(envPath, lines.join("\n"));
}

loadEnv();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.NOTION_ONBOARDING_DB_ID;

if (!DATABASE_ID) {
  console.error("❌ NOTION_ONBOARDING_DB_ID is not set in .env.local");
  process.exit(1);
}

async function main() {
  console.log("🔧 Setting up Notion onboarding database…\n");

  // ── Step 1: Get data source ID from database ──
  console.log("1️⃣  Fetching database to find data source ID…");
  const db = await notion.databases.retrieve({ database_id: DATABASE_ID });

  if (!db.data_sources || db.data_sources.length === 0) {
    console.error("❌ No data sources found on database", DATABASE_ID);
    process.exit(1);
  }

  const dataSourceId = db.data_sources[0].id;
  console.log(`   Data Source ID: ${dataSourceId}`);

  // ── Step 2: Update database title ──
  console.log("\n2️⃣  Updating database title…");
  await notion.databases.update({
    database_id: DATABASE_ID,
    title: [{ type: "text", text: { content: "Onboarding — Projects & Leads" } }],
  });

  // ── Step 3: Update data source properties (the actual schema) ──
  console.log("3️⃣  Updating data source schema…");

  // Check current title column name to handle idempotent re-runs
  const currentDs = await notion.dataSources.retrieve({ data_source_id: dataSourceId });
  const titlePropName = Object.entries(currentDs.properties)
    .find(([, v]) => v.type === "title")?.[0] || "Name";
  console.log(`   Current title column: "${titlePropName}"`);

  try {
    const properties = {
      // Rename title column to "Business Name" (use current name as key)
      [titlePropName]: { name: "Business Name", title: {} },

      // ── Filterable / sortable columns ──
      Slug: {
        rich_text: {},
      },
      Email: {
        email: {},
      },
      "Contact Name": {
        rich_text: {},
      },
      Status: {
        select: {
          options: [
            { name: "Lead", color: "gray" },
            { name: "Blueprint Sent", color: "blue" },
            { name: "In Progress", color: "orange" },
            { name: "Deposit Paid", color: "yellow" },
            { name: "Live", color: "green" },
          ],
        },
      },
      "Website Job": {
        select: {
          options: [
            { name: "bookings", color: "blue" },
            { name: "faq", color: "green" },
            { name: "credibility", color: "purple" },
            { name: "other", color: "gray" },
          ],
        },
      },
      "Hero Style": {
        select: {
          options: [
            { name: "action-taker", color: "blue" },
            { name: "storyteller", color: "pink" },
            { name: "authority", color: "gray" },
          ],
        },
      },
      Personality: {
        select: {
          options: [
            { name: "reliable-truck", color: "brown" },
            { name: "luxury-sedan", color: "gray" },
            { name: "friendly-ev", color: "green" },
          ],
        },
      },
      "Color Palette": {
        select: {
          options: [
            { name: "monotone", color: "gray" },
            { name: "warm-earthy", color: "brown" },
            { name: "cool-trustworthy", color: "blue" },
            { name: "vibrant-energetic", color: "orange" },
            { name: "trust-you", color: "purple" },
          ],
        },
      },
      "Current Tools": {
        multi_select: {
          options: [
            { name: "moego", color: "blue" },
            { name: "square", color: "gray" },
            { name: "stripe", color: "purple" },
            { name: "gmail", color: "red" },
            { name: "google-calendar", color: "green" },
            { name: "quickbooks", color: "blue" },
            { name: "excel-sheets", color: "green" },
            { name: "instagram", color: "pink" },
            { name: "facebook", color: "blue" },
            { name: "yelp", color: "red" },
            { name: "paper-pen", color: "gray" },
          ],
        },
      },
      "Deposit Paid": {
        checkbox: {},
      },
      "Brand Color": {
        rich_text: {},
      },
      "Existing Site": {
        url: {},
      },
      Instagram: {
        rich_text: {},
      },
      Facebook: {
        rich_text: {},
      },
      "Other Socials": {
        rich_text: {},
      },
      Logo: {
        files: {},
      },
      "Last Contact": {
        date: {},
      },
      "Last Step": {
        number: {},
      },
    };

    const response = await notion.dataSources.update({
      data_source_id: dataSourceId,
      properties,
    });

    // ── Step 4: Save data source ID to .env.local ──
    console.log("\n4️⃣  Saving NOTION_ONBOARDING_DS_ID to .env.local…");
    upsertEnv("NOTION_ONBOARDING_DS_ID", dataSourceId);

    console.log("\n✅ Database schema updated successfully!");
    console.log(`   Database ID: ${DATABASE_ID}`);
    console.log(`   Data Source ID: ${dataSourceId}`);
    console.log(`   Title: Onboarding — Projects & Leads`);
    console.log("\n📝 Schema (columns for filtering/sorting):");
    console.log("   ├─ Business Name (title)");
    console.log("   ├─ Slug (text) — for ?id=your-business-slug URLs");
    console.log("   ├─ Contact Name (text)");
    console.log("   ├─ Email");
    console.log("   ├─ Status (select: Lead → Blueprint Sent → In Progress → Deposit Paid → Live)");
    console.log("   ├─ Website Job (select)");
    console.log("   ├─ Hero Style (select)");
    console.log("   ├─ Personality (select)");
    console.log("   ├─ Color Palette (select)");
    console.log("   ├─ Current Tools (multi-select)");
    console.log("   ├─ Brand Color (text)");
    console.log("   ├─ Existing Site (url)");
    console.log("   ├─ Instagram (text)");
    console.log("   ├─ Facebook (text)");
    console.log("   ├─ Other Socials (text)");
    console.log("   ├─ Logo (files)");
    console.log("   ├─ Deposit Paid (checkbox)");
    console.log("   ├─ Last Contact (date)");
    console.log("   └─ Last Step (number) — tracks progress through the form");
    console.log("\n📄 Long-form answers (Secret Sauce, Phone FAQ, Ideal Customer,");
    console.log("   Automation Wish, etc.) are stored in the page body on submission.");
    console.log("\n🔗 Workflow:");
    console.log("   1. Create a row manually or via script → set Slug");
    console.log("   2. Send client: austino.dev/onboarding?id=the-slug");
    console.log("   3. Form prefills from Notion, saves progress per step");
    console.log("   4. Final submit updates the page with all answers");
  } catch (error) {
    console.error("❌ Failed to update data source schema:", error);
    process.exit(1);
  }
}

main();
