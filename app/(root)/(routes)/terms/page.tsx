import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/lib/content/legal";
import { pageMetadata } from "@/lib/seo";

const { title, intro } = legalContent.terms;

export const metadata: Metadata = pageMetadata({
  title,
  description: intro,
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage type="terms" />;
}
