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

export function organizationJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url,
    description: SITE_DESCRIPTION,
    slogan: BRAND_DESCRIPTOR,
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
