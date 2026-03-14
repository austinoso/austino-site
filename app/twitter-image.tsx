import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Loud Bark — Web Strategy, Growth & Automation for Local Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#FAF9F6",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Subtle warm ambient glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 75% 35%, rgba(180,83,9,0.06), transparent)",
        }}
      />

      {/* Top accent bar — brand signature gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "linear-gradient(90deg, #B45309 0%, #DB2777 70%, rgba(124,58,237,0.5) 100%)",
        }}
      />

      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
        <span style={{ fontSize: "36px", fontWeight: 800, color: "#1C1917" }}>Loud Bark</span>
      </div>

      {/* Heading */}
      <div
        style={{
          fontSize: "52px",
          fontWeight: 700,
          color: "#1C1917",
          lineHeight: 1.2,
          maxWidth: "800px",
          marginBottom: "24px",
        }}
      >
        Websites &amp; Growth Strategy for Local Businesses
      </div>

      {/* Subheading */}
      <div
        style={{
          fontSize: "22px",
          color: "#57534E",
          lineHeight: 1.5,
          maxWidth: "700px",
        }}
      >
        High-performance websites. Growth strategies. Automation. Built to give your business an
        edge.
      </div>

      {/* Bottom domain */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "80px",
          fontSize: "16px",
          fontFamily: "monospace",
          color: "rgba(180,83,9,0.5)",
          letterSpacing: "0.1em",
        }}
      >
        loudbark.dev
      </div>
    </div>,
    { ...size },
  );
}
