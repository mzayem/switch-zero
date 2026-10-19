import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/layout/final-cta";
import { InnerHero } from "@/components/sections/inner-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Resources & Downloads",
  description:
    "Checklists for contract renewals, commercial solar, PPA reviews and multi-site portfolios to help you prepare for a commercial energy review.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <main id="main-content">
      <InnerHero
        eyebrow="Resources"
        title="Useful preparation before you go to market."
        intro="Simple checklists to help collect the information a proper commercial review needs."
      />
      <section className="section">
        <div className="shell resource-grid">
          {[
            [
              "01",
              "Contract renewal checklist",
              "Meter details, end dates, notice position, usage and approval route.",
            ],
            [
              "02",
              "Commercial solar site checklist",
              "Load data, roof information, operating hours, connection and property responsibilities.",
            ],
            [
              "03",
              "PPA review questions",
              "Term, price, indexation, roof obligations, ownership and end-of-term position.",
            ],
            [
              "04",
              "Multi-site portfolio template",
              "A consistent way to record meters, suppliers, consumption and renewal dates.",
            ],
          ].map(([n, title, copy]) => (
            <article key={n}>
              <span>{n}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
              <Link href="/contact?service=Resource%20request">
                Request this resource
              </Link>
            </article>
          ))}
        </div>
      </section>
      <FinalCta title="Want help assembling the information?" />
    </main>
  );
}
