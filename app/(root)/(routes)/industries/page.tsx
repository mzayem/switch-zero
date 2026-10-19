import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/layout/final-cta";
import { InnerHero } from "@/components/sections/inner-hero";
import { industries } from "@/lib/content/industries";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industries",
  description:
    "Commercial energy support by sector, bringing procurement, consumption, solar, storage and delivery constraints into one commercial view.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <main id="main-content">
      <InnerHero
        eyebrow="Industries"
        title="Commercial energy shaped around the operation."
        intro="Every sector page now brings procurement, consumption, generation, storage and delivery constraints into one detailed commercial view."
        image="/assets/hero-industries-landing.webp"
      />
      <section className="section">
        <div className="shell section-heading-row">
          <div>
            <p className="eyebrow dark">Sector expertise</p>
            <h2>Choose the operation that most closely matches yours.</h2>
          </div>
          <p>
            Each page covers typical demand, common challenges, relevant
            services, delivery priorities and sector-specific questions.
          </p>
        </div>
        <div className="shell industry-grid">
          {industries.map((industry, index) => (
            <Link
              className="industry-card"
              href={`/industries/${industry.slug}`}
              key={industry.slug}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{industry.title}</h3>
              <p>{industry.summary}</p>
              <b>Explore the sector</b>
            </Link>
          ))}
        </div>
      </section>
      <FinalCta title="Want us to review your sector and site together?" />
    </main>
  );
}
