/**
 * Marketing Image Generator
 * ─────────────────────────
 * Uses satori + resvg (same stack as next/og) to generate
 * branded marketing images in multiple formats.
 *
 * Usage:
 *   npm run gen:images                    # generate all defaults
 *   npm run gen:images -- --only=social   # only social posts
 *   npm run gen:images -- --only=story    # only stories
 *   npm run gen:images -- --only=banner   # only banners
 *   npm run gen:images -- --only=og       # only OG-style
 *   npm run gen:images -- --preset=main   # only the "main" preset
 *
 * Output goes to: public/assets/marketing/
 */

import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "assets", "marketing");

// ─── Brand tokens ──────────────────────────────────────────
const brand = {
  bg: "#0B0D10",
  accent: "#40E0FF",
  accentDim: "rgba(64,224,255,0.6)",
  accentGlow: "rgba(64,224,255,0.08)",
  white: "#ffffff",
  gray400: "#9CA3AF",
  gray500: "#737A8C",
};

// ─── Format definitions ────────────────────────────────────
const FORMATS = {
  social: { width: 1080, height: 1080, label: "Social Post (1080×1080)" },
  story: { width: 1080, height: 1920, label: "Story (1080×1920)" },
  gbp: { width: 1200, height: 900, label: "Google Business (1200×900)" },
  banner: { width: 1200, height: 630, label: "Banner (1200×630)" },
  og: { width: 1200, height: 630, label: "OG Image (1200×630)" },
  leaderboard: { width: 728, height: 90, label: "Leaderboard (728×90)" },
  rectangle: { width: 300, height: 250, label: "Med Rectangle (300×250)" },
};

// ─── Content presets — edit these! ────────────────────────
const PRESETS = [
  {
    id: "main",
    headline: "Second Place Doesn't Get Clicked",
    subtext:
      "Anyone can build a website. I build the strategy that puts your business at the top of Google — and keeps it there.",
    cta: "austino.dev",
  },
  {
    id: "automation",
    headline: "Run Leaner Than Every Business on Your Block",
    subtext:
      "Most local businesses waste hours on tasks a machine could handle. I plug in automation that gives you an edge nobody around you has yet.",
    cta: "austino.dev/services/automation",
  },
  {
    id: "web",
    headline: "A Website Isn't a Strategy. This Is.",
    subtext:
      "Templates don't rank. I build fast, conversion-driven sites engineered to dominate local search — not just exist on it.",
    cta: "austino.dev/services/web-development",
  },
  {
    id: "support",
    headline: "If You're Not #1, I'm Not Done",
    subtext:
      "This isn't a one-and-done project. I work with you continuously until you own the top spot — then I keep you there.",
    cta: "austino.dev/services/ongoing-support",
  },
];

// ─── Satori vnode helper ───────────────────────────────────
// Satori requires display:flex on every div with >1 child.
function h(type, style, ...children) {
  const kids = children.flat().filter((c) => c !== null && c !== undefined);
  // Auto-inject display:flex for any div with multiple children
  if (type === "div" && kids.length > 1 && !style.display) {
    style = { display: "flex", ...style };
  }
  return {
    type,
    props: {
      style,
      children: kids.length === 0 ? undefined : kids.length === 1 ? kids[0] : kids,
    },
  };
}

// ─── Shared components ─────────────────────────────────────

function accentBar(width) {
  return h("div", {
    position: "absolute",
    top: 0,
    left: 0,
    width: `${width}px`,
    height: "4px",
    background: `linear-gradient(90deg, ${brand.accent} 0%, ${brand.accentDim} 100%)`,
  });
}

function glowOverlay() {
  return h("div", {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${brand.accentGlow}, transparent)`,
  });
}

function brandMark(fontSize = 36) {
  return h(
    "div",
    { display: "flex", alignItems: "center" },
    h("div", { fontSize: `${fontSize}px`, fontWeight: 800, color: brand.white }, "austin"),
    h("div", { fontSize: `${fontSize}px`, fontWeight: 800, color: brand.accent }, "o"),
  );
}

function ctaPill(text, size = "md") {
  const sizes = {
    sm: { padding: "8px 20px", fontSize: "14px" },
    md: { padding: "16px 32px", fontSize: "22px" },
    lg: { padding: "20px 40px", fontSize: "26px" },
  };
  const s = sizes[size] || sizes.md;
  return h(
    "div",
    {
      display: "flex",
      ...s,
      borderRadius: "999px",
      background: brand.accent,
      color: brand.bg,
      fontWeight: 700,
    },
    text,
  );
}

// ─── Template renderers ────────────────────────────────────

function socialTemplate(preset, fmt) {
  const pad = 80;
  return h(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: brand.bg,
      width: `${fmt.width}px`,
      height: `${fmt.height}px`,
      padding: `${pad}px`,
      fontFamily: "system-ui, sans-serif",
      position: "relative",
    },
    glowOverlay(),
    accentBar(fmt.width),
    brandMark(40),
    h(
      "div",
      {
        fontSize: "52px",
        fontWeight: 700,
        color: brand.white,
        lineHeight: 1.2,
        marginTop: "40px",
        marginBottom: "24px",
        maxWidth: `${fmt.width - pad * 2}px`,
      },
      preset.headline,
    ),
    h(
      "div",
      {
        fontSize: "24px",
        color: brand.gray400,
        lineHeight: 1.5,
        maxWidth: `${fmt.width - pad * 2 - 60}px`,
      },
      preset.subtext,
    ),
    h(
      "div",
      { display: "flex", marginTop: "48px", alignSelf: "flex-start" },
      ctaPill(preset.cta, "md"),
    ),
  );
}

function storyTemplate(preset, fmt) {
  const pad = 60;
  return h(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: brand.bg,
      width: `${fmt.width}px`,
      height: `${fmt.height}px`,
      padding: `${pad}px`,
      fontFamily: "system-ui, sans-serif",
      position: "relative",
      textAlign: "center",
    },
    glowOverlay(),
    accentBar(fmt.width),
    brandMark(48),
    h(
      "div",
      {
        fontSize: "64px",
        fontWeight: 700,
        color: brand.white,
        lineHeight: 1.15,
        marginTop: "60px",
        marginBottom: "32px",
        textAlign: "center",
      },
      preset.headline,
    ),
    h(
      "div",
      {
        fontSize: "28px",
        color: brand.gray400,
        lineHeight: 1.5,
        textAlign: "center",
        maxWidth: "900px",
      },
      preset.subtext,
    ),
    h(
      "div",
      { display: "flex", marginTop: "64px" },
      ctaPill(preset.cta, "lg"),
    ),
    h(
      "div",
      {
        position: "absolute",
        bottom: "60px",
        fontSize: "18px",
        fontFamily: "monospace",
        color: brand.accentDim,
        letterSpacing: "0.1em",
      },
      "austino.dev",
    ),
  );
}

function bannerTemplate(preset, fmt) {
  const pad = 60;
  return h(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: brand.bg,
      width: `${fmt.width}px`,
      height: `${fmt.height}px`,
      padding: `${pad}px ${pad + 20}px`,
      fontFamily: "system-ui, sans-serif",
      position: "relative",
    },
    glowOverlay(),
    accentBar(fmt.width),
    brandMark(32),
    h(
      "div",
      {
        fontSize: "48px",
        fontWeight: 700,
        color: brand.white,
        lineHeight: 1.2,
        marginTop: "28px",
        marginBottom: "20px",
        maxWidth: "800px",
      },
      preset.headline,
    ),
    h(
      "div",
      {
        fontSize: "20px",
        color: brand.gray400,
        lineHeight: 1.5,
        maxWidth: "700px",
      },
      preset.subtext,
    ),
    h(
      "div",
      {
        position: "absolute",
        bottom: "32px",
        left: `${pad + 20}px`,
        fontSize: "14px",
        fontFamily: "monospace",
        color: brand.accentDim,
        letterSpacing: "0.1em",
      },
      preset.cta,
    ),
  );
}

function leaderboardTemplate(preset, fmt) {
  return h(
    "div",
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: brand.bg,
      width: `${fmt.width}px`,
      height: `${fmt.height}px`,
      padding: "0 28px",
      fontFamily: "system-ui, sans-serif",
      position: "relative",
    },
    accentBar(fmt.width),
    brandMark(18),
    h(
      "div",
      {
        fontSize: "18px",
        fontWeight: 700,
        color: brand.white,
        flex: 1,
        marginLeft: "20px",
        marginRight: "20px",
      },
      preset.headline,
    ),
    ctaPill("Learn More →", "sm"),
  );
}

function rectangleTemplate(preset, fmt) {
  return h(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: brand.bg,
      width: `${fmt.width}px`,
      height: `${fmt.height}px`,
      padding: "24px",
      fontFamily: "system-ui, sans-serif",
      position: "relative",
      textAlign: "center",
    },
    accentBar(fmt.width),
    brandMark(22),
    h(
      "div",
      {
        fontSize: "22px",
        fontWeight: 700,
        color: brand.white,
        lineHeight: 1.2,
        marginTop: "16px",
        marginBottom: "10px",
        textAlign: "center",
      },
      preset.headline,
    ),
    h(
      "div",
      {
        fontSize: "12px",
        color: brand.gray400,
        lineHeight: 1.4,
        textAlign: "center",
        marginBottom: "16px",
      },
      preset.subtext,
    ),
    ctaPill("Learn More →", "sm"),
  );
}

/** Google Business Profile post (1200×900, 4:3) */
function gbpTemplate(preset, fmt) {
  const pad = 72;
  return h(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: brand.bg,
      width: `${fmt.width}px`,
      height: `${fmt.height}px`,
      padding: `${pad}px`,
      fontFamily: "system-ui, sans-serif",
      position: "relative",
    },
    glowOverlay(),
    accentBar(fmt.width),
    brandMark(36),
    h(
      "div",
      {
        fontSize: "52px",
        fontWeight: 700,
        color: brand.white,
        lineHeight: 1.2,
        marginTop: "36px",
        marginBottom: "24px",
        maxWidth: "900px",
      },
      preset.headline,
    ),
    h(
      "div",
      {
        fontSize: "24px",
        color: brand.gray400,
        lineHeight: 1.5,
        maxWidth: "800px",
      },
      preset.subtext,
    ),
    h(
      "div",
      { display: "flex", marginTop: "44px", alignSelf: "flex-start" },
      ctaPill(preset.cta, "md"),
    ),
    h(
      "div",
      {
        position: "absolute",
        bottom: "36px",
        right: `${pad}px`,
        fontSize: "14px",
        fontFamily: "monospace",
        color: brand.accentDim,
        letterSpacing: "0.1em",
      },
      "austino.dev",
    ),
  );
}

// ─── Format → template mapping ─────────────────────────────
const templateFor = {
  social: socialTemplate,
  story: storyTemplate,
  gbp: gbpTemplate,
  banner: bannerTemplate,
  og: bannerTemplate,
  leaderboard: leaderboardTemplate,
  rectangle: rectangleTemplate,
};

// ─── Render pipeline ───────────────────────────────────────
let fontCache = {};
async function loadFont(weight = 400) {
  if (fontCache[weight]) return fontCache[weight];
  const url = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&display=swap`;
  const css = await fetch(url).then((r) => r.text());
  const match = css.match(/src:\s*url\(([^)]+)\)/);
  if (!match) throw new Error(`Could not resolve font URL for weight ${weight}`);
  const buf = await fetch(match[1]).then((r) => r.arrayBuffer());
  fontCache[weight] = Buffer.from(buf);
  return fontCache[weight];
}

async function renderImage(vnode, width, height) {
  const svg = await satori(vnode, {
    width,
    height,
    fonts: [
      { name: "system-ui", data: await loadFont(400), weight: 400, style: "normal" },
      { name: "system-ui", data: await loadFont(700), weight: 700, style: "normal" },
      { name: "system-ui", data: await loadFont(800), weight: 800, style: "normal" },
    ],
  });

  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: width } });
  return resvg.render().asPng();
}

// ─── CLI ───────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2);
  const onlyFlag = args.find((a) => a.startsWith("--only="));
  const onlyFormat = onlyFlag ? onlyFlag.split("=")[1] : null;
  const presetFlag = args.find((a) => a.startsWith("--preset="));
  const onlyPreset = presetFlag ? presetFlag.split("=")[1] : null;

  mkdirSync(OUT_DIR, { recursive: true });

  if (onlyFormat && !FORMATS[onlyFormat]) {
    console.error(`Unknown format: ${onlyFormat}`);
    console.error(`Available: ${Object.keys(FORMATS).join(", ")}`);
    process.exit(1);
  }

  const formatsToGenerate = onlyFormat
    ? { [onlyFormat]: FORMATS[onlyFormat] }
    : FORMATS;
  const presetsToGenerate = onlyPreset
    ? PRESETS.filter((p) => p.id === onlyPreset)
    : PRESETS;

  console.log("Fetching Inter font from Google Fonts...");
  await loadFont(400);
  await loadFont(700);
  await loadFont(800);
  console.log("Fonts ready.\n");

  let count = 0;
  for (const [formatKey, fmt] of Object.entries(formatsToGenerate)) {
    const templateFn = templateFor[formatKey];
    if (!templateFn) continue;

    for (const preset of presetsToGenerate) {
      const filename = `${preset.id}-${formatKey}-${fmt.width}x${fmt.height}.png`;
      const outPath = join(OUT_DIR, filename);

      process.stdout.write(`  ${fmt.label} / ${preset.id}...`);
      const vnode = templateFn(preset, fmt);
      const png = await renderImage(vnode, fmt.width, fmt.height);
      writeFileSync(outPath, png);
      console.log(` done`);
      count++;
    }
  }

  console.log(`\nGenerated ${count} images -> public/assets/marketing/`);
}

main().catch((err) => {
  console.error("Error generating images:", err);
  process.exit(1);
});
