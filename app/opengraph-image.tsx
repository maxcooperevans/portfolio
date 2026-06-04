import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Max Cooper Evans — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF8F4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Green accent bar */}
        <div
          style={{
            width: "48px",
            height: "4px",
            background: "#2F6B4F",
            borderRadius: "2px",
            marginBottom: "44px",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: "76px",
            fontWeight: "700",
            color: "#1A1A18",
            lineHeight: "1",
            letterSpacing: "-2px",
            marginBottom: "20px",
          }}
        >
          Max Cooper Evans
        </div>

        {/* Eyebrow label */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#2F6B4F",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Portfolio
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "26px",
            color: "#6B6862",
            fontWeight: "400",
            lineHeight: "1.5",
            maxWidth: "820px",
          }}
        >
          A selection of projects — from AI tools to games and trackers.
        </div>

        {/* URL — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "76px",
            right: "100px",
            fontSize: "18px",
            color: "#2F6B4F",
            fontWeight: "600",
            letterSpacing: "0.02em",
          }}
        >
          maxcooperevans.com
        </div>
      </div>
    ),
    { ...size },
  );
}
