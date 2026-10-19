import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/lib/content/legal";
import { pageMetadata } from "@/lib/seo";

const { title, intro } = legalContent.cookies;

export const metadata: Metadata = pageMetadata({
  title,
  description: intro,
  path: "/cookies",
});

export default function CookiesPage() {
  return <LegalPage type="cookies" />;
}
