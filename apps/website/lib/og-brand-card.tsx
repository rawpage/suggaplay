import {
  BRAND_DESCRIPTOR,
  SITE_HEADLINE,
  SITE_HERO_BODY,
  SITE_NAME,
} from "@/lib/constants";

const BRAND_RED = "#ff2747";
const BRAND_BLACK = "#000000";
const BRAND_WHITE = "#ffffff";
const MUTED = "#a3a3a3";

type OgBrandCardProps = {
  width: number;
  height: number;
};

export function OgBrandCard({ width, height }: OgBrandCardProps) {
  const isCompact = height <= 512;
  const padding = isCompact ? 48 : 72;
  const brandSize = isCompact ? 22 : 28;
  const headlineSize = isCompact ? 42 : 58;
  const bodySize = isCompact ? 18 : 24;
  const taglineSize = isCompact ? 16 : 20;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width,
        height,
        backgroundColor: BRAND_BLACK,
        color: BRAND_WHITE,
        padding,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: isCompact ? 180 : 280,
          height: isCompact ? 180 : 280,
          background: `linear-gradient(135deg, ${BRAND_RED} 0%, transparent 72%)`,
          opacity: 0.35,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 6,
          backgroundColor: BRAND_RED,
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 8, zIndex: 1 }}>
        <div
          style={{
            fontSize: brandSize,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: isCompact ? 12 : 14,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          {BRAND_DESCRIPTOR}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isCompact ? 16 : 24,
          maxWidth: isCompact ? width - padding * 2 : 920,
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: headlineSize,
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {SITE_HEADLINE}
        </div>
        <div
          style={{
            fontSize: bodySize,
            lineHeight: 1.45,
            color: "#d4d4d4",
            maxWidth: isCompact ? width - padding * 2 : 760,
          }}
        >
          {SITE_HERO_BODY}
        </div>
      </div>

      <div
        style={{
          fontSize: taglineSize,
          fontWeight: 500,
          color: BRAND_RED,
          letterSpacing: "0.04em",
          zIndex: 1,
        }}
      >
        One membership. Unlimited conversations.
      </div>
    </div>
  );
}
