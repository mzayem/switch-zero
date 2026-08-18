import type { MetadataRoute } from "next";
import { industries, insightArticles, services } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://switchzero.co.uk";
  const fixed = ["", "about", "how-we-work", "industries", "insights", "contact", "faq", "case-studies", "resources", "complaints-procedure", "privacy", "cookies", "terms", "accessibility"];
  const paths = [
    ...fixed,
    ...services.map((service) => service.slug),
    ...industries.map((industry) => `industries/${industry.slug}`),
    ...insightArticles.map((article) => `insights/${article.slug}`),
  ];
  return paths.map((path) => ({
    url: `${base}/${path}`,
    lastModified: new Date("2026-08-05"),
    changeFrequency: path.startsWith("insights") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "commercial-tariff-switching" ? 0.9 : 0.7,
  }));
}
