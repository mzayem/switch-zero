import type { Metadata } from "next";
import { companyDetails } from "@/lib/content/company";
import type { Faq, InsightArticle } from "@/lib/content/types";

// The live site serves from www; every canonical URL must match it.
export const siteUrl = "https://www.switchzero.co.uk";
export const siteName = "SwitchtoZero";
export const defaultDescription =
  "Commercial energy procurement for UK organisations, with support for efficiency, solar PV, battery storage, monitoring and finance.";
const logoImage = "/assets/switchzero-logo-teal.png";
// 1200x630 branded card for link previews on pages without their own photo.
const defaultImage = "/assets/og-default.png";
// Search results show roughly 60 characters of a title.
const maxTitleLength = 60;

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  // Title for link previews, when it differs from the search title.
  socialTitle?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

// Builds the title, description, canonical URL and social previews for a page.
export function pageMetadata({
  title,
  description,
  path,
  socialTitle = title,
  image = defaultImage,
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  const branded = `${title} | ${siteName}`;
  const ogImage = {
    url: image,
    alt: socialTitle,
    ...(image === defaultImage ? { width: 1200, height: 630 } : {}),
  };
  return {
    // Drop the brand suffix rather than let search results truncate the title.
    title: branded.length > maxTitleLength ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_GB",
      siteName,
      title: socialTitle,
      description,
      url: path,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage],
    },
  };
}

// Article dates are written as "5 August 2026"; schema.org wants YYYY-MM-DD.
export function isoDate(date: string) {
  const parsed = new Date(date);
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${parsed.getFullYear()}-${pad(parsed.getMonth() + 1)}-${pad(parsed.getDate())}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    legalName: companyDetails.name,
    url: siteUrl,
    logo: absoluteUrl(logoImage),
    image: absoluteUrl(defaultImage),
    email: companyDetails.email,
    telephone: "+44 1633 846 927",
    address: {
      "@type": "PostalAddress",
      streetAddress: "St. Christophers Bungalow",
      addressLocality: "Caerleon",
      postalCode: "NP18 1AA",
      addressCountry: "GB",
    },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    description:
      "Commercial energy procurement and energy strategy support for UK organisations.",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    inLanguage: "en-GB",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export type BreadcrumbItem = { label: string; href?: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceJsonLd(service: {
  title: string;
  summary: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: absoluteUrl(service.path),
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "Country", name: "United Kingdom" },
  };
}

export function articleJsonLd(article: InsightArticle) {
  const path = `/insights/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: absoluteUrl(article.image),
    datePublished: isoDate(article.date),
    dateModified: isoDate(article.date),
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    author: { "@type": "Organization", name: "SwitchZero editorial team" },
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}
