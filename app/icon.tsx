import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontSize: 20,
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
