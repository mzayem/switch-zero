import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/lib/content/legal";
import { pageMetadata } from "@/lib/seo";

const { title, intro } = legalContent.complaints;

export const metadata: Metadata = pageMetadata({
  title,
  description: intro,
  path: "/complaints-procedure",
});

export default function ComplaintsProcedurePage() {
  return <LegalPage type="complaints" />;
}
