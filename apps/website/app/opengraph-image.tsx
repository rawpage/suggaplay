import { ImageResponse } from "next/og";
import { BRAND_DESCRIPTOR, SITE_HEADLINE, SITE_NAME } from "@/lib/constants";

export const runtime = "edge";

export const alt = `${SITE_NAME} — ${SITE_HEADLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#000000",
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#000000",
              maxWidth: 900,
            }}
          >
            {SITE_HEADLINE}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#404040",
              maxWidth: 760,
            }}
          >
            {BRAND_DESCRIPTOR}
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#ff2747", fontWeight: 500 }}>
          One membership. Unlimited conversations.
        </div>
      </div>
    ),
    { ...size },
  );
}
