import {
  BRAND_DESCRIPTOR,
  SITE_DESCRIPTION,
  SITE_HEADLINE,
  SITE_NAME,
} from "@/lib/constants";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.suggaplay.com";
  return url.replace(/\/$/, "");
}

function getSocialProfiles(): string[] {
  const profiles = [
    process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    process.env.NEXT_PUBLIC_TWITTER_URL,
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
  ];

  return profiles
    .map((profile) => profile?.trim())
    .filter((profile): profile is string => Boolean(profile));
}

export function organizationJsonLd() {
  const url = getSiteUrl();
  const sameAs = getSocialProfiles();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url,
    description: SITE_DESCRIPTION,
    slogan: BRAND_DESCRIPTOR,
    logo: {
      "@type": "ImageObject",
      url: `${url}/icon`,
      width: 32,
      height: 32,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function webSiteJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url,
    description: SITE_DESCRIPTION,
    inLanguage: "en-GB",
    publisher: { "@id": `${url}/#organization` },
  };
}

export function homePageJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: `${SITE_NAME} — ${SITE_HEADLINE}`,
    description: SITE_DESCRIPTION,
    isPartOf: { "@id": `${url}/#website` },
    about: { "@type": "Thing", name: BRAND_DESCRIPTOR },
    inLanguage: "en-GB",
  };
}

export function jsonLdGraph() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      { ...organizationJsonLd(), "@id": `${url}/#organization` },
      { ...webSiteJsonLd(), "@id": `${url}/#website`, publisher: { "@id": `${url}/#organization` } },
      homePageJsonLd(),
    ],
  };
}
