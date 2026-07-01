import { ImageResponse } from "next/og";
import { OgBrandCard } from "@/lib/og-brand-card";
import {
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
} from "@/lib/seo-metadata";

export const runtime = "edge";

export const alt = OG_IMAGE_ALT;
export const size = { width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <OgBrandCard width={OG_IMAGE_WIDTH} height={OG_IMAGE_HEIGHT} />,
    { ...size },
  );
}
