import type { Metadata, Viewport } from "next";
import {
  BRAND_DESCRIPTOR,
  SITE_DESCRIPTION,
  SITE_HEADLINE,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";
import { getSiteUrl } from "@/lib/seo";

export const OG_IMAGE_PATH = "/opengraph-image";
export const TWITTER_IMAGE_PATH = "/twitter-image";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT = `${SITE_NAME} — ${SITE_HEADLINE}`;

export const SITE_KEYWORDS = [
  "SuggaPlay",
  "private members club",
  "modern relationships",
  "honest dating",
  "membership",
  "London",
  "premium social club",
];

function getTwitterHandle(): string | undefined {
  const handle = process.env.NEXT_PUBLIC_TWITTER_HANDLE?.trim();
  if (!handle) return undefined;
  return handle.startsWith("@") ? handle : `@${handle}`;
}

function getVerification(): Metadata["verification"] | undefined {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  if (!google) return undefined;
  return { google };
}

export function getSocialImageMetadata() {
  return {
    url: OG_IMAGE_PATH,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    alt: OG_IMAGE_ALT,
    type: "image/png" as const,
  };
}

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = canonicalPath === "/" ? siteUrl : `${siteUrl}${canonicalPath}`;
  const socialImage = getSocialImageMetadata();
  const twitterHandle = getTwitterHandle();

  return {
    title,
    description,
    keywords: SITE_KEYWORDS,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [TWITTER_IMAGE_PATH],
      ...(twitterHandle
        ? { site: twitterHandle, creator: twitterHandle }
        : {}),
    },
  ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: getSiteUrl() }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "lifestyle",
  keywords: SITE_KEYWORDS,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: getSiteUrl(),
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_HEADLINE}`,
    description: SITE_DESCRIPTION,
    images: [getSocialImageMetadata()],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${BRAND_DESCRIPTOR}`,
    description: SITE_DESCRIPTION,
    images: [TWITTER_IMAGE_PATH],
    ...(getTwitterHandle()
      ? { site: getTwitterHandle(), creator: getTwitterHandle() }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: getVerification(),
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
};

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};
