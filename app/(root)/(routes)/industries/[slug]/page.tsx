import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/layout/final-cta";
import { InnerHero } from "@/components/sections/inner-hero";
import { DetailCards } from "@/components/sections/detail-cards";
import { FaqList } from "@/components/sections/faq-list";
import { ServiceCards } from "@/components/sections/service-cards";
import { industryPageContent } from "@/lib/content/industry-pages";
import { industries } from "@/lib/content/industries";
import { services } from "@/lib/content/services";
import type { Service } from "@/lib/content/types";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return {};
  return pageMetadata({
    title: `Business Energy for ${industry.title}`,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
    image: industry.heroImage,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  const content = industryPageContent[industry.slug];
  const relevantServices = content.relevantServices
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));
  return (
    <main id="main-content">
      <InnerHero
        eyebrow={industry.title}
        title={content.heroTitle}
        intro={industry.summary}
        image={industry.heroImage}
      />
      <section className="section">
        <div className="shell statement-grid">
          <p className="eyebrow dark">A data-led sector review</p>
          <div>
            <h2>{content.statementTitle}</h2>
            {content.statement.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow dark">
                Common {industry.title.toLowerCase()} energy challenges
              </p>
              <h2>What needs attention.</h2>
            </div>
            <p>
              Contract exposure, consumption and site constraints are assessed
              together.
            </p>
          </div>
          <DetailCards items={content.challenges} />
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="detail-heading">
            <p className="eyebrow dark">One plan across the operation</p>
            <h2>Supply, consumption and generation are connected decisions.</h2>
            <p>
              The right priority depends on the contracts, how the site is used,
              its infrastructure and future plans.
            </p>
          </div>
          <DetailCards items={content.solutions} />
        </div>
      </section>
      <section className="section how-section">
        <div className="shell">
          <div className="section-heading-row light-heading">
            <div>
              <p className="eyebrow">Our process</p>
              <h2>From site data to a clear plan.</h2>
            </div>
            <p>
              Data first, priorities second, then delivery around the operation.
            </p>
          </div>
          <div className="steps-grid sector-steps">
            {content.process.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="shell">
          <div className="detail-heading">
            <p className="eyebrow dark">Our approach</p>
            <h2>{content.approachTitle}</h2>
            <p>{content.approachIntro}</p>
          </div>
          <DetailCards items={content.approach} />
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow dark">Why SwitchZero</p>
              <h2>A commercial view of the whole operation.</h2>
            </div>
            <p>
              Every recommendation reflects the site, the people who use it and
              the evidence behind the financial case.
            </p>
          </div>
          <div className="feature-grid">
            {content.why.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section related-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow dark">Relevant services</p>
              <h2>Start with the priority, then review the connected costs.</h2>
            </div>
            <p>
              The correct mix depends on the estate, load profile, contract
              position and available capital.
            </p>
          </div>
          <ServiceCards services={relevantServices} />
        </div>
      </section>
      <section className="section faq-home">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow dark">{industry.title} energy FAQs</p>
            <h2>Useful starting points for the sector.</h2>
          </div>
          <FaqList faqs={content.faqs} />
        </div>
      </section>
      <FinalCta title={content.ctaTitle} text={content.ctaText} />
    </main>
  );
}
