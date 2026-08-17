import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#222126",
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontFamily: "Georgia, serif",
            color: "#C8B38A",
          }}
        >
          B
        </span>
      </div>
    ),
    { ...size }
  );
}
