import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/layout/final-cta";
import { InnerHero } from "@/components/sections/inner-hero";
import { ContentBlock } from "@/components/sections/content-block";
import { FaqList } from "@/components/sections/faq-list";
import { ServiceCards } from "@/components/sections/service-cards";
import { JsonLd } from "@/components/seo/json-ld";
import { servicePageContent } from "@/lib/content/service-pages";
import { services } from "@/lib/content/services";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.summary,
    path: `/${service.slug}`,
    image: service.heroImage,
  });
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const content = servicePageContent[service.slug];
  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const related = [
    ...services.slice(currentIndex + 1),
    ...services.slice(0, currentIndex),
  ].slice(0, 3);
  return (
    <main id="main-content">
      <JsonLd data={serviceJsonLd({ ...service, path: `/${service.slug}` })} />
      <InnerHero
        eyebrow={service.title}
        title={content.heroTitle}
        intro={service.summary}
        image={service.heroImage}
      />
      <section className="section service-intro">
        <div className="shell statement-grid">
          <p className="eyebrow dark">{service.title}</p>
          <div>
            <h2>A commercial decision built on the right information.</h2>
            <p>{service.summary}</p>
            <p>
              SwitchZero makes the current position clear, tests the credible
              options and supports the agreed route. The recommendation is based
              on how the organisation and site actually operate.
            </p>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="shell two-list-grid">
          <div>
            <p className="eyebrow dark">Problems this addresses</p>
            <h2>Common pressure points.</h2>
            {service.challenges.map((item, index) => (
              <div className="number-line" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="approach-card">
            <p className="eyebrow">How SwitchZero approaches it</p>
            {service.approach.map((item, index) => (
              <div key={item}>
                <i>{index + 1}</i>
                <b>{item}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      {content.sections.map((section, index) => (
        <ContentBlock section={section} index={index} key={section.title} />
      ))}
      <section className="section how-section">
        <div className="shell">
          <div className="section-heading-row light-heading">
            <div>
              <p className="eyebrow">How it works</p>
              <h2>From accurate information to an agreed route.</h2>
            </div>
            <p>
              The detail changes by service; the discipline and transparency do
              not.
            </p>
          </div>
          <div className="steps-grid expanded-steps">
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
      <section className="section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow dark">What a good process delivers</p>
              <h2>Clearer decisions without generic promises.</h2>
            </div>
            <p>
              The relevant costs, assumptions and responsibilities stay visible,
              and your team retains control of the final choice.
            </p>
          </div>
          <div className="feature-grid">
            {service.benefits.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
                <p>
                  {
                    [
                      "The commercial assumptions are tested before the decision.",
                      "The relevant costs and responsibilities are made visible.",
                      "The route is shaped around the organisation rather than a standard package.",
                      "The next review point remains clear after delivery.",
                    ][index % 4]
                  }
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section faq-home">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow dark">
              Questions about {service.title.toLowerCase()}
            </p>
            <h2>What businesses usually ask us.</h2>
            <p>
              The supplier, lender, funder or technical terms that apply to a
              live requirement are always checked before a final decision.
            </p>
          </div>
          <FaqList faqs={content.faqs} />
        </div>
      </section>
      <section className="section related-section">
        <div className="shell">
          <p className="eyebrow dark">Related services</p>
          <ServiceCards services={related} />
        </div>
      </section>
      <FinalCta title={content.ctaTitle} text={content.ctaText} />
    </main>
  );
}
