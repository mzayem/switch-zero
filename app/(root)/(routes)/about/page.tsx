import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta } from "@/components/layout/final-cta";
import { InnerHero } from "@/components/sections/inner-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About SwitchZero",
  description:
    "SwitchZero helps UK organisations buy energy better, understand where money is being lost and plan sensible next steps, from procurement to on-site generation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content">
      <InnerHero
        eyebrow="About SwitchZero"
        title="Lower costs. Stronger business."
        intro="SwitchZero helps organisations buy utilities better, understand where money is being lost and plan sensible next steps."
        image="/assets/hero-about-switchzero.webp"
      />
      <section className="section">
        <div className="shell split-media-grid">
          <div className="media-stack">
            <Image
              className="media-main"
              src="/assets/media-about-site-review.webp"
              alt="Energy adviser reviewing commercial equipment with a client"
              width={1536}
              height={1024}
              sizes="(max-width: 820px) 100vw, 560px"
            />
            <div className="media-note">
              <b>Commercially focused</b>
              <span>Clear advice · one point of contact</span>
            </div>
          </div>
          <div className="section-copy">
            <p className="eyebrow dark">Why SwitchZero exists</p>
            <h2>Procurement first. A joined-up view when it adds value.</h2>
            <p>
              Commercial energy decisions are often split between brokers,
              installers, consultants and finance providers. That makes it
              harder to see how one choice affects another.
            </p>
            <p>
              SwitchZero brings the next supply contract, consumption reduction,
              on-site generation and funding into one commercial conversation.
              The aim is not to sell every service. It is to identify the work
              worth doing and explain why.
            </p>
            <div className="tick-grid">
              <span>Straightforward British English</span>
              <span>No invented performance claims</span>
              <span>Site-specific recommendations</span>
              <span>Support after the decision</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section why-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow dark">Our working principles</p>
              <h2>Clear enough to challenge. Grounded enough to deliver.</h2>
            </div>
            <p>
              Good advice should make the next decision easier to defend inside
              the organisation.
            </p>
          </div>
          <div className="feature-grid">
            {[
              [
                "01",
                "Start with the facts",
                "Bills, meters, dates, usage and operating requirements before recommendations.",
              ],
              [
                "02",
                "Make options comparable",
                "Price, term, responsibility, risk and commercial trade-offs shown together.",
              ],
              [
                "03",
                "Protect the long view",
                "Consider how procurement, efficiency and generation interact.",
              ],
              [
                "04",
                "Stay accountable",
                "Keep one point of contact through the agreed scope.",
              ],
            ].map(([n, t, c]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{c}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
