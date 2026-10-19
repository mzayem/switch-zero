import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/lib/content/legal";
import { pageMetadata } from "@/lib/seo";

const { title, intro } = legalContent.privacy;

export const metadata: Metadata = pageMetadata({
  title,
  description: intro,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage type="privacy" />;
}
