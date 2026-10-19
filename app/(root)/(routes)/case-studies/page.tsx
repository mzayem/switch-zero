import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/layout/final-cta";
import { InnerHero } from "@/components/sections/inner-hero";
import { caseStudies } from "@/lib/content/case-studies";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Detailed commercial energy cost comparisons showing annual usage, old and new rates, percentage reductions and savings in pounds.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <main id="main-content">
      <InnerHero
        eyebrow="Case studies"
        title="The numbers behind commercial energy savings."
        intro="Detailed cost comparisons showing the usage, rates and calculations behind reductions of roughly 35%."
      />
      <section className="section case-study-section">
        <div className="shell case-study-intro">
          <p className="eyebrow dark">Commercial figures in pounds and pence</p>
          <h2>Every saving is shown from start to finish.</h2>
          <p>
            Each example sets out the annual usage, old position, new position
            and exact calculation. That makes it easy to judge the opportunity
            against your own bills.
          </p>
        </div>
        <div className="shell case-list">
          {caseStudies.map((study) => (
            <article key={study.title}>
              <div
                className="case-graphic"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,51,54,.18), rgba(0,51,54,.76)), url(${study.image})`,
                }}
              >
                <span>{study.label}</span>
              </div>
              <div className="case-content">
                <p>{study.sector}</p>
                <h2>{study.title}</h2>
                <p className="case-summary">{study.summary}</p>
                <dl className="case-metrics">
                  {study.metrics.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="case-breakdown">
                  <h3>How the saving is calculated</h3>
                  {study.calculation.map(([label, value]) => (
                    <div key={label}>
                      <span>{label}</span>
                      <b>{value}</b>
                    </div>
                  ))}
                </div>
                <p className="case-outcome">{study.outcome}</p>
                <Link className="text-cta" href="/contact">
                  Compare this with my current costs
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="shell case-figures-note">
          Figures use the consumption and rates shown and are not a quotation or
          guaranteed saving. VAT, Climate Change Levy, standing charges,
          capacity charges, finance costs and maintenance are excluded unless
          stated.
        </p>
      </section>
      <FinalCta
        title="Want to see the same calculation using your bills?"
        text="Send us a recent bill and we will compare the current position against the options available for your organisation."
      />
    </main>
  );
}
