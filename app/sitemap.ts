import type { MetadataRoute } from "next";
import { industries } from "@/lib/content/industries";
import { insightArticles } from "@/lib/content/insights";
import { services } from "@/lib/content/services";
import { siteUrl } from "@/lib/seo";

const pages = [
  "",
  "book-energy-review",
  "contact",
  "about",
  "how-we-work",
  "industries",
  "insights",
  "case-studies",
  "resources",
  "faq",
  "complaints-procedure",
  "privacy",
  "cookies",
  "terms",
  "accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (
    path: string,
    priority: number,
    lastModified?: Date,
  ): MetadataRoute.Sitemap[number] => ({
    url: path ? `${siteUrl}/${path}` : siteUrl,
    ...(lastModified ? { lastModified } : {}),
    changeFrequency: path.startsWith("insights") ? "weekly" : "monthly",
    priority,
  });

  return [
    ...pages.map((path) =>
      entry(path, path === "" ? 1 : path === "book-energy-review" ? 0.9 : 0.6),
    ),
    ...services.map((service) => entry(service.slug, 0.8)),
    ...industries.map((industry) => entry(`industries/${industry.slug}`, 0.7)),
    ...insightArticles.map((article) =>
      entry(`insights/${article.slug}`, 0.6, new Date(article.date)),
    ),
  ];
}
