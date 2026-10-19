import type { Metadata } from "next";
import { companyDetails } from "@/lib/content/company";
import type { Faq, InsightArticle } from "@/lib/content/types";

// The live site serves from www; every canonical URL must match it.
export const siteUrl = "https://www.switchzero.co.uk";
export const siteName = "SwitchtoZero";
const defaultImage = "/assets/switchzero-logo-teal.png";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

// Builds the title, description, canonical URL and social previews for a page.
export function pageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_GB",
      siteName,
      title,
      description,
      url: path,
      images: [{ url: image }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
    logo: absoluteUrl(defaultImage),
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
