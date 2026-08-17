import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.name;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "90px",
          background: "#222126",
          backgroundImage:
            "radial-gradient(circle at 82% 30%, rgba(216,161,175,0.3), transparent 55%)",
        }}
      >
        <span
          style={{
            fontSize: 26,
            letterSpacing: 6,
            color: "#C8B38A",
            fontFamily: "Georgia, serif",
            marginBottom: 28,
          }}
        >
          BLAIR DATING
        </span>
        <span
          style={{
            fontSize: 76,
            lineHeight: 1.1,
            color: "#FFFFFF",
            fontFamily: "Georgia, serif",
            maxWidth: 900,
          }}
        >
          Meet Someone Worth Meeting.
        </span>
        <span
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {siteConfig.tagline}
        </span>
      </div>
    ),
    { ...size }
  );
}
