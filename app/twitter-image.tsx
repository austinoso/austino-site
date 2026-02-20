import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "austino — Websites, Automation & Tech Support for Small Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0B0D10",
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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(64,224,255,0.08), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background:
            "linear-gradient(90deg, #40E0FF 0%, rgba(64,224,255,0.3) 100%)",
        }}
      />
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}
      >
        <span style={{ fontSize: "36px", fontWeight: 800, color: "#ffffff" }}>
          austin
        </span>
        <span style={{ fontSize: "36px", fontWeight: 800, color: "#40E0FF" }}>
          o
        </span>
      </div>
      <div
        style={{
          fontSize: "52px",
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.2,
          maxWidth: "800px",
          marginBottom: "24px",
        }}
      >
        Websites, Automation & Tech Support for Small Businesses
      </div>
      <div
        style={{
          fontSize: "22px",
          color: "#9CA3AF",
          lineHeight: 1.5,
          maxWidth: "700px",
        }}
      >
        Fast, high-converting websites. Workflow automation. Ongoing
        partnership. Built for results.
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "80px",
          fontSize: "16px",
          fontFamily: "monospace",
          color: "rgba(64,224,255,0.6)",
          letterSpacing: "0.1em",
        }}
      >
        austino.dev
      </div>
    </div>,
    { ...size },
  );
}
