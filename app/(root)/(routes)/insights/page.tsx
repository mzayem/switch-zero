import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/layout/final-cta";
import { InnerHero } from "@/components/sections/inner-hero";
import { insightArticles } from "@/lib/content/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description:
    "Guidance for commercial energy buyers on procurement, contracts, consumption, on-site generation and the policies that affect UK organisations.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <main id="main-content">
      <InnerHero
        eyebrow="Insights"
        title="Guidance for commercial energy buyers."
        intro="Clear notes on procurement, contracts, consumption, on-site generation and the policies that affect UK organisations."
      />
      <section className="section">
        <div className="shell filter-row" aria-label="Insight categories">
          {[
            "All",
            "Market updates",
            "Procurement",
            "Tariff switching",
            "Electricity",
            "Gas",
            "Solar PV",
            "Battery storage",
            "Finance",
            "Net Zero",
          ].map((item, index) => (
            <span className={index === 0 ? "active" : ""} key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="shell article-grid">
          {insightArticles.map((article) => (
            <article key={article.slug}>
              <div
                className="article-art"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,51,54,.28), rgba(0,51,54,.8)), url(${article.image})`,
                }}
              >
                <span>{article.category}</span>
              </div>
              <div>
                <p>
                  {article.date} · {article.minutes} min read
                </p>
                <h2>
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>
                <p>{article.excerpt}</p>
                <Link href={`/insights/${article.slug}`}>Read article</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="shell editorial-note">
          <b>Editorial standard</b>
          <p>
            Articles are reviewed before publication. SwitchZero does not
            automatically publish AI-generated market commentary or present
            outdated policy information as current.
          </p>
        </div>
      </section>
      <FinalCta
        title="Have a live commercial question?"
        text="Bring us the contract, bill or project you are trying to make sense of."
      />
    </main>
  );
}
