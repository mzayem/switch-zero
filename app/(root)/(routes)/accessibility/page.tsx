import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/lib/content/legal";
import { pageMetadata } from "@/lib/seo";

const { title, intro } = legalContent.accessibility;

export const metadata: Metadata = pageMetadata({
  title,
  description: intro,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return <LegalPage type="accessibility" />;
}
