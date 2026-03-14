import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

interface OGImageOptions {
  heading: string;
  subtext: string;
  /** Absolute URL to an image rendered as a dimmed background. */
  backgroundImageUrl?: string;
}

export function generateOGImage({ heading, subtext, backgroundImageUrl }: OGImageOptions) {
  /* When a background image is provided (case studies), use a warm dark overlay
     so white text stays legible. Otherwise use the warm cream palette. */
  const hasBg = !!backgroundImageUrl;

  return new ImageResponse(
    <div
      style={{
        background: hasBg ? "#1C1917" : "#FAF9F6",
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
      {/* Optional background image (warm dimmed overlay) */}
      {hasBg ? (
        <img
          alt=""
          src={backgroundImageUrl}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : null}

      {hasBg ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(28, 25, 23, 0.72)",
          }}
        />
      ) : null}

      {/* Subtle warm ambient glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: hasBg
            ? "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(180,83,9,0.12), transparent)"
            : "radial-gradient(ellipse 70% 50% at 75% 35%, rgba(180,83,9,0.06), transparent)",
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <span
          style={{
            fontSize: "36px",
            fontWeight: 800,
            color: hasBg ? "#FFFFFF" : "#1C1917",
          }}
        >
          Loud Bark
        </span>
      </div>

      {/* Heading */}
      <div
        style={{
          fontSize: "52px",
          fontWeight: 700,
          color: hasBg ? "#FFFFFF" : "#1C1917",
          lineHeight: 1.2,
          maxWidth: "800px",
          marginBottom: "24px",
        }}
      >
        {heading}
      </div>

      {/* Subheading */}
      <div
        style={{
          fontSize: "22px",
          color: hasBg ? "#D6D3D1" : "#57534E",
          lineHeight: 1.5,
          maxWidth: "700px",
        }}
      >
        {subtext}
      </div>

      {/* Bottom domain */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "80px",
          fontSize: "16px",
          fontFamily: "monospace",
          color: hasBg ? "rgba(180,83,9,0.7)" : "rgba(180,83,9,0.5)",
          letterSpacing: "0.1em",
        }}
      >
        loudbark.dev
      </div>
    </div>,
    { ...ogSize },
  );
}
