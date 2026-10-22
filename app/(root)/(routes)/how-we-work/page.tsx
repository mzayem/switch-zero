import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/layout/final-cta";
import { InnerHero } from "@/components/sections/inner-hero";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = pageMetadata({
  title: "How We Work",
  description:
    "How SwitchZero works: we review your current energy position, compare suitable options, present a clear decision and coordinate the agreed route.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <main id="main-content">
      <InnerHero
        eyebrow="How we work"
        title="A clear route from review to delivery."
        intro="A disciplined commercial process, kept simple enough for people to use."
        image="/assets/hero-how-we-work.webp"
      />
      <section className="section">
        <div className="shell vertical-steps">
          {[
            [
              "01",
              "Review the current position",
              "Contracts, meters, bills, consumption, site constraints and internal priorities.",
            ],
            [
              "02",
              "Build the options",
              "Suitable suppliers, technologies, funding routes and delivery constraints.",
            ],
            [
              "03",
              "Present the decision",
              "Comparable costs, responsibilities, assumptions and risks in plain English.",
            ],
            [
              "04",
              "Coordinate the agreed route",
              "Paperwork, supplier liaison, project handover and key dates.",
            ],
            [
              "05",
              "Keep reviewing",
              "Performance, renewals and further opportunities as the organisation changes.",
            ],
          ].map(([n, t, c]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h2>{t}</h2>
                <p>{c}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section procurement-home">
        <div className="shell statement-grid">
          <p className="eyebrow">What we ask from you</p>
          <div>
            <h2>Enough information to avoid a lazy answer.</h2>
            <p>
              A recent bill, contract position and a clear view of what is
              changing are usually the best starting point. For projects,
              interval data, operating hours and site access may follow.
            </p>
            <Button nativeButton={false} render={<Link href="/resources" />}>
              See the review checklist
            </Button>
          </div>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
