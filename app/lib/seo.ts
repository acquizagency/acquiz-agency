import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl } from "./site";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Acquiz Agency — Agence d'acquisition en publicité en ligne",
};

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  image?: { url: string; width: number; height: number; alt: string };
};

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  image = OG_IMAGE,
}: BuildMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "fr_FR",
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/logo/wordmark-dark.png"),
  description:
    "Agence d'acquisition en publicité en ligne : Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, Snap Ads et landing pages optimisées pour la conversion.",
  email: "contact@acquiz.fr",
  telephone: "+33767817910",
  areaServed: { "@type": "Country", name: "France" },
  sameAs: ["https://www.malt.fr/profile/amindasilva"],
};
