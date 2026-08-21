import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { EnquiryForm } from "../interactive";
import { Breadcrumbs, FinalCta } from "../site-chrome";
import {
  industryPageContent,
  servicePageContent,
  type ContentSection,
  type PageItem,
} from "../page-content";
import {
  companyDetails,
  homeFaqs,
  industries,
  insightArticles,
  services,
  type Industry,
  type Service,
} from "../site-data";

type Props = { params: Promise<{ slug: string[] }> };

const caseStudies = [
  {
    sector: "Manufacturing",
    title: "Half-hourly electricity procurement",
    label: "35.4% lower unit-cost spend",
    image: "/assets/case-detail-manufacturing-procurement.webp",
    summary:
      "This cost comparison uses a 24-hour manufacturing site consuming 480,000 kWh a year, with a renewal position of 31.40p/kWh and a new fixed rate of 20.30p/kWh.",
    metrics: [
      ["Annual electricity use", "480,000 kWh"],
      ["Previous unit rate", "31.40p/kWh"],
      ["New unit rate", "20.30p/kWh"],
      ["Annual saving", "£53,280"],
      ["Percentage reduction", "35.4%"],
      ["Three-year value", "£159,840"],
    ],
    calculation: [
      ["Previous annual energy charge", "480,000 kWh × £0.314 = £150,720"],
      ["New annual energy charge", "480,000 kWh × £0.203 = £97,440"],
      ["Annual difference", "£150,720 − £97,440 = £53,280"],
    ],
    outcome:
      "The 11.10p/kWh rate difference reduces the annual unit-cost spend by £53,280. Across a three-year contract, the like-for-like difference is £159,840.",
  },
  {
    sector: "Warehousing & logistics",
    title: "Commercial solar matched to daytime demand",
    label: "£28,193 first-year benefit",
    image: "/assets/case-detail-warehousing-solar-assessment.webp",
    summary:
      "This solar assessment uses a distribution warehouse consuming 310,000 kWh a year and a 140 kWp rooftop system, measured against a 25.80p/kWh imported electricity rate.",
    metrics: [
      ["Annual electricity use", "310,000 kWh"],
      ["Solar system", "140 kWp"],
      ["Annual generation", "119,000 kWh"],
      ["Used on site", "106,000 kWh"],
      ["Grid demand reduced", "34.2%"],
      ["First-year benefit", "£28,193"],
    ],
    calculation: [
      ["Avoided imported electricity", "106,000 kWh × £0.258 = £27,348"],
      ["Export income", "13,000 kWh × £0.065 = £845"],
      ["Total first-year benefit", "£27,348 + £845 = £28,193"],
    ],
    outcome:
      "Using 106,000 kWh of solar power on site cuts imported electricity by 34.2%. Avoided import cost and export income together equal 35.3% of the site's previous annual unit-cost spend.",
  },
  {
    sector: "Hospitality",
    title: "Combined gas and electricity renewal",
    label: "34.7% lower energy charge",
    image: "/assets/case-detail-hospitality-renewal.webp",
    summary:
      "This combined renewal review uses a hotel consuming 190,000 kWh of electricity and 520,000 kWh of gas each year, with both contracts reviewed together.",
    metrics: [
      ["Electricity use", "190,000 kWh"],
      ["Gas use", "520,000 kWh"],
      ["Previous annual cost", "£97,470"],
      ["New annual cost", "£63,670"],
      ["Annual saving", "£33,800"],
      ["Percentage reduction", "34.7%"],
    ],
    calculation: [
      ["Electricity", "30.50p to 20.10p/kWh = £19,760 annual saving"],
      ["Gas", "7.60p to 4.90p/kWh = £14,040 annual saving"],
      ["Combined annual difference", "£19,760 + £14,040 = £33,800"],
    ],
    outcome:
      "Reviewing both fuels against the same renewal timetable produces a £33,800 annual difference. If those rates remained fixed for three years, the energy-charge difference would total £101,400.",
  },
];

function titleFromPath(path: string) {
  const service = services.find((item) => item.slug === path);
  if (service) return service.title;
  const industry = industries.find(
    (item) => `industries/${item.slug}` === path,
  );
  if (industry) return industry.title;
  const article = insightArticles.find(
    (item) => `insights/${item.slug}` === path,
  );
  if (article) return article.title;
  const labels: Record<string, string> = {
    about: "About SwitchZero",
    "how-we-work": "How We Work",
    industries: "Industries",
    insights: "Insights",
    contact: "Contact",
    faq: "Frequently Asked Questions",
    "case-studies": "Case Studies",
    resources: "Resources & Downloads",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    terms: "Terms and Conditions",
    "complaints-procedure": "Complaints Procedure",
    accessibility: "Accessibility Statement",
  };
  return labels[path];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const title = titleFromPath(path);
  if (!title) return {};
  const service = services.find((item) => item.slug === path);
  const industry = industries.find(
    (item) => `industries/${item.slug}` === path,
  );
  const article = insightArticles.find(
    (item) => `insights/${item.slug}` === path,
  );
  const description =
    service?.summary ??
    industry?.summary ??
    article?.excerpt ??
    (path === "case-studies"
      ? "Detailed commercial energy cost comparisons showing annual usage, old and new rates, percentage reductions and savings in pounds."
      : `Learn more about ${title} from SwitchZero.`);
  return {
    title,
    description,
    alternates: { canonical: `/${path}` },
    openGraph: {
      title,
      description,
      url: `/${path}`,
      images: [{ url: "/assets/switchzero-logo-teal.png" }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const path = slug.join("/");
  const service = services.find((item) => item.slug === path);
  if (service) return <ServicePage service={service} />;

  const industry = industries.find(
    (item) => `industries/${item.slug}` === path,
  );
  if (industry) return <IndustryPage industry={industry} />;

  const article = insightArticles.find(
    (item) => `insights/${item.slug}` === path,
  );
  if (article) return <ArticlePage article={article} />;

  switch (path) {
    case "about":
      return <AboutPage />;
    case "how-we-work":
      return <HowPage />;
    case "industries":
      return <IndustriesPage />;
    case "insights":
      return <InsightsPage />;
    case "contact":
      return <ContactPage />;
    case "faq":
      return <FaqPage />;
    case "case-studies":
      return <CaseStudiesPage />;
    case "resources":
      return <ResourcesPage />;
    case "privacy":
      return <LegalPage type="privacy" />;
    case "cookies":
      return <LegalPage type="cookies" />;
    case "terms":
      return <LegalPage type="terms" />;
    case "complaints-procedure":
      return <LegalPage type="complaints" />;
    case "accessibility":
      return <LegalPage type="accessibility" />;
    default:
      notFound();
  }
}

function InnerHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="inner-hero">
      {image && (
        <div
          className="inner-hero-image"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,51,54,.96), rgba(0,51,54,.63), rgba(0,51,54,.12)), url(${image})`,
          }}
        />
      )}
      <div className="shell inner-hero-content">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: eyebrow }]}
        />
        <p className="eyebrow">
          <span /> {eyebrow}
        </p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">
            Get in touch
          </Link>
          <Link className="button button-ghost" href="/contact?review=free">
            Book a free energy review
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
}

function DetailCards({ items }: { items: PageItem[] }) {
  return (
    <div className="detail-card-grid">
      {items.map((item, index) => (
        <article className="detail-card" key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function ContentBlock({
  section,
  index,
}: {
  section: ContentSection;
  index: number;
}) {
  return (
    <section
      className={`section detail-section ${index % 2 ? "soft-section" : ""}`}
    >
      <div className="shell">
        <div className="detail-heading">
          <p className="eyebrow dark">{section.label}</p>
          <h2>{section.title}</h2>
          {section.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {section.items && <DetailCards items={section.items} />}
        {section.note && <p className="detail-note">{section.note}</p>}
      </div>
    </section>
  );
}

function ServicePage({ service }: { service: Service }) {
  const content = servicePageContent[service.slug];
  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const related = [
    ...services.slice(currentIndex + 1),
    ...services.slice(0, currentIndex),
  ].slice(0, 3);
  return (
    <main id="main-content">
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
          <div className="faq-list">
            {content.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section related-section">
        <div className="shell">
          <p className="eyebrow dark">Related services</p>
          <div className="related-grid">
            {related.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`}>
                <span>SwitchZero service</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <b>Explore</b>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title={content.ctaTitle} text={content.ctaText} />
    </main>
  );
}

function IndustryPage({ industry }: { industry: Industry }) {
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
          <div className="related-grid">
            {relevantServices.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`}>
                <span>SwitchZero service</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <b>Explore</b>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section faq-home">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow dark">{industry.title} energy FAQs</p>
            <h2>Useful starting points for the sector.</h2>
          </div>
          <div className="faq-list">
            {content.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title={content.ctaTitle} text={content.ctaText} />
    </main>
  );
}

function AboutPage() {
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
              unoptimized
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

function HowPage() {
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
            <Link className="button button-primary" href="/resources">
              See the review checklist
            </Link>
          </div>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}

function IndustriesPage() {
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

function InsightsPage() {
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

function ArticlePage({
  article,
}: {
  article: (typeof insightArticles)[number];
}) {
  return (
    <main id="main-content">
      <article className="article-page">
        <header className="article-header">
          <div className="shell">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Insights", href: "/insights" },
                { label: article.category },
              ]}
            />
            <p className="eyebrow">
              <span /> {article.category}
            </p>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <div className="article-meta">
              <span>SwitchZero editorial team</span>
              <span>Published {article.date}</span>
              <span>Updated {article.date}</span>
              <span>{article.minutes} minute read</span>
            </div>
          </div>
        </header>
        <div className="shell article-layout">
          <aside>
            <b>On this page</b>
            {article.body.map((_, index) => (
              <a href={`#section-${index + 1}`} key={index}>
                Point {index + 1}
              </a>
            ))}
            <Link href="/contact">Get in touch</Link>
          </aside>
          <div className="article-body">
            {article.body.map((paragraph, index) => (
              <section id={`section-${index + 1}`} key={paragraph}>
                <h2>
                  {[
                    "Start with verified information",
                    "Make the options comparable",
                    "Plan the decision before the deadline",
                  ][index] ?? `Point ${index + 1}`}
                </h2>
                <p>{paragraph}</p>
              </section>
            ))}
            <div className="article-callout">
              <h2>What to do next</h2>
              <p>
                If this issue is live in your organisation, bring the current
                bill, contract position and decision deadline. The review can
                then focus on facts rather than generic market commentary.
              </p>
              <Link className="button button-primary" href="/contact">
                Get in touch
              </Link>
            </div>
            <div className="faq-list">
              <details>
                <summary>
                  Is this article a quotation or recommendation?<span>+</span>
                </summary>
                <p>
                  No. It is general commercial guidance. Supplier terms, policy
                  and market conditions should be checked for the specific
                  requirement.
                </p>
              </details>
            </div>
          </div>
        </div>
      </article>
      <FinalCta />
    </main>
  );
}

function ContactPage() {
  return (
    <main id="main-content">
      <section className="contact-hero">
        <div className="shell contact-page-grid">
          <div>
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
            />
            <p className="eyebrow">
              <span /> Contact
            </p>
            <h1>Speak to SwitchZero.</h1>
            <p>
              Tell us what you would like reviewed and a member of the team will
              come back to you.
            </p>
            <address className="contact-details-panel">
              <a href={companyDetails.emailHref}>
                <small>Email</small>
                <b>{companyDetails.email}</b>
              </a>
              <a href={companyDetails.phoneHref}>
                <small>Phone</small>
                <b>{companyDetails.phone}</b>
              </a>
              <div>
                <small>Office address</small>
                <b>{companyDetails.address}</b>
              </div>
              <div>
                <small>Company registration</small>
                <b>Registered in England and Wales</b>
              </div>
            </address>
            <div className="contact-points">
              <div>
                <span>01</span>
                <b>Bring a recent bill</b>
                <p>It helps verify the meter, supplier and charges.</p>
              </div>
              <div>
                <span>02</span>
                <b>Share the deadline</b>
                <p>Contract end dates shape the review timetable.</p>
              </div>
              <div>
                <span>03</span>
                <b>Tell us what is changing</b>
                <p>New sites, equipment or projects can affect the answer.</p>
              </div>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}

function FaqPage() {
  const all = [
    ...homeFaqs,
    ...services.flatMap((service) => service.faqs),
  ].filter(
    (faq, index, array) =>
      array.findIndex((item) => item.question === faq.question) === index,
  );
  return (
    <main id="main-content">
      <InnerHero
        eyebrow="FAQs"
        title="Commercial energy questions, answered plainly."
        intro="Procurement, meters, commissions, solar, storage and what happens after signature."
      />
      <section className="section">
        <div className="shell faq-page-grid">
          <aside>
            <p className="eyebrow dark">Browse questions</p>
            <a href="#procurement">Procurement</a>
            <a href="#projects">Projects</a>
            <a href="#support">Ongoing support</a>
          </aside>
          <div className="faq-list" id="procurement">
            {all.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title="Still need a straight answer?" />
    </main>
  );
}

function CaseStudiesPage() {
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

function ResourcesPage() {
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

type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
};

type LegalPolicy = {
  title: string;
  intro: string;
  label: string;
  sections: LegalSection[];
};

const legalContent: Record<
  "privacy" | "cookies" | "terms" | "complaints" | "accessibility",
  LegalPolicy
> = {
  privacy: {
    title: "Privacy Policy",
    label: "Privacy",
    intro:
      "How SwitchZero collects, uses, shares and protects personal information when you contact us or use this website.",
    sections: [
      {
        title: "Who is responsible for your information",
        paragraphs: [
          `${companyDetails.name} is the data controller for personal information covered by this policy. The company is registered in England and Wales and our office is at ${companyDetails.address}. You can contact us at ${companyDetails.email} or ${companyDetails.phone}.`,
        ],
      },
      {
        title: "Information we collect",
        paragraphs: [
          "We collect information you give us, information created while we provide a service and limited technical information generated when you use the website.",
        ],
        bullets: [
          "Names, roles, organisation details, email addresses, telephone numbers and correspondence",
          "Site addresses, meter details, supplier and contract information, consumption, bills and project data",
          "Enquiry details, requested services, contract dates, estimated spend and uploaded documents",
          "Marketing preferences, cookie choices and campaign-source information",
          "Technical data such as device, browser, approximate location, pages viewed and security logs where those tools are in use",
        ],
      },
      {
        title: "Where information comes from",
        paragraphs: [
          "Information may come directly from you, from an authorised colleague or adviser, from your energy supplier after you give suitable authority, from metering or industry data services, and from publicly available business sources. We will only seek information that is relevant to the requested work.",
        ],
      },
      {
        title: "Why we use information and our lawful bases",
        paragraphs: [
          "We use personal information only where there is a lawful basis under UK data-protection law.",
        ],
        bullets: [
          "To respond to an enquiry and take steps requested before entering a contract",
          "To deliver an agreed service and administer our relationship with your organisation",
          "For legitimate interests such as comparing suitable supplier routes, maintaining records, improving service, preventing fraud and securing our systems",
          "To meet legal, regulatory, tax, accounting and dispute-handling obligations",
          "With consent where consent is required, including certain marketing and optional cookie activity",
        ],
      },
      {
        title: "Who we may share information with",
        paragraphs: [
          "We may share the minimum necessary information with suitable energy suppliers, quotation or aggregation partners, metering and data providers, project partners, professional advisers, IT and hosting providers, regulators, dispute-resolution bodies and public authorities. We do not sell personal information.",
        ],
      },
      {
        title: "Uploaded bills and sensitive account data",
        paragraphs: [
          "Utility bills can contain account numbers, meter identifiers, supply addresses and consumption information. Uploaded documents are used to assess the enquiry and are not published as website assets. Please remove information that is not relevant before uploading where possible.",
        ],
      },
      {
        title: "International transfers",
        paragraphs: [
          "Some service providers may process information outside the UK. Where this happens, we will use an approved transfer mechanism or another lawful safeguard and apply appropriate contractual and security controls.",
        ],
      },
      {
        title: "Retention and security",
        paragraphs: [
          "We retain information only for as long as it is reasonably needed for the enquiry, service, complaint, legal obligation or establishment of legal claims. Retention periods depend on the type of record. We use proportionate access controls, secure storage and supplier checks, but no internet service can promise absolute security.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Depending on the circumstances, you may have rights to access, correct or erase information, restrict or object to processing, receive portable information, withdraw consent and ask for a review of certain automated decisions. Some rights are subject to legal exemptions.",
        ],
        links: [
          {
            label: "Read the ICO guide to your rights",
            href: "https://ico.org.uk/for-the-public/your-data-matters/",
          },
        ],
      },
      {
        title: "Marketing and complaints",
        paragraphs: [
          `You can stop direct marketing at any time by using the unsubscribe option provided or contacting ${companyDetails.email}. If you have a data-protection concern, please contact us first so we can investigate. You also have the right to complain to the Information Commissioner's Office.`,
        ],
        links: [
          {
            label: "Contact the Information Commissioner's Office",
            href: "https://ico.org.uk/make-a-complaint/",
          },
        ],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "We may update this policy when our services, suppliers or legal obligations change. The latest version and review date will remain available on this page.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    label: "Cookies",
    intro:
      "What this website stores in your browser, why it is used and how you can control optional technologies.",
    sections: [
      {
        title: "What cookies and browser storage are",
        paragraphs: [
          "Cookies are small text files placed on a device by a website. Similar technologies include local storage, pixels and tags. They can keep a service working, remember choices and, where allowed, help measure visits or campaigns.",
        ],
      },
      {
        title: "Our current consent record",
        paragraphs: [
          "This site uses local browser storage named switchzero-cookie-consent to remember whether you accepted or rejected analytics, marketing and personalisation categories. It records your selected categories and the date of the choice. Local storage remains until it is cleared or replaced.",
        ],
      },
      {
        title: "Necessary technologies",
        paragraphs: [
          "Necessary technologies support security, page delivery, form handling and your privacy choices. They do not require consent where they are strictly necessary, although we still explain their use.",
        ],
      },
      {
        title: "Analytics",
        paragraphs: [
          "Analytics can show which pages are used and whether the website performs as expected. Where consent is required, analytics will remain off until you select this category.",
        ],
      },
      {
        title: "Marketing",
        paragraphs: [
          "Marketing technologies can measure advertising visits or conversions and may connect activity across websites. Where consent is required, these technologies will remain off until you select this category.",
        ],
      },
      {
        title: "Personalisation",
        paragraphs: [
          "Personalisation can remember optional choices that are not essential to the service. It will remain off unless you allow it where consent is required.",
        ],
      },
      {
        title: "Third-party tools",
        paragraphs: [
          "If we add analytics, advertising, embedded media or other third-party tools, those providers may set their own cookies. We will update this policy and the consent control when the tools or purposes materially change.",
        ],
      },
      {
        title: "Change or withdraw your choice",
        paragraphs: [
          "Choose Cookie settings in the footer at any time to reject optional categories or save new preferences. You can also clear cookies and local storage in your browser. Blocking necessary storage may affect some website functions.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          `Questions about cookies or privacy choices can be sent to ${companyDetails.email}, raised on ${companyDetails.phone}, or posted to ${companyDetails.address}.`,
        ],
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    label: "Website terms",
    intro:
      "The terms that apply when you access this website, submit an enquiry or use its general information.",
    sections: [
      {
        title: "About us",
        paragraphs: [
          `This website is operated by ${companyDetails.name}, a company registered in England and Wales, from ${companyDetails.address}. Contact us at ${companyDetails.email} or ${companyDetails.phone}.`,
        ],
      },
      {
        title: "Acceptance of these terms",
        paragraphs: [
          "By using this website, you agree to these terms. If you do not agree, please stop using the site. These website terms are separate from any Letter of Authority, service agreement, supplier contract, finance agreement or project contract.",
        ],
      },
      {
        title: "Website information is not a quotation",
        paragraphs: [
          "Content and calculator results are general information only. They are not a supplier quotation, a binding offer, financial advice, legal advice, tax advice or a guarantee of savings. A live recommendation depends on verified bills, meter information, consumption, credit position, market conditions and contract terms.",
        ],
      },
      {
        title: "Our services and your authority",
        paragraphs: [
          "Submitting a form does not appoint SwitchZero or authorise us to enter a contract for you. Any authority, scope, fees or commission, responsibilities and cancellation rights will be set out separately before an agreed service begins.",
        ],
      },
      {
        title: "Supplier and project availability",
        paragraphs: [
          "A supplier shown on the website may not be suitable or available for every requirement. Supplier appetite, pricing, credit decisions and product terms are controlled by the relevant provider. Technology, funding, grant, planning and grid outcomes also require project-specific checks.",
        ],
      },
      {
        title: "Information you provide",
        paragraphs: [
          "You are responsible for providing information you are entitled to share and for checking that it is accurate. Please do not upload unnecessary personal information, passwords, card details or special-category data through the enquiry form.",
        ],
      },
      {
        title: "Permitted use",
        paragraphs: [
          "You may use the site for lawful business information and enquiries. You must not interfere with its security, attempt unauthorised access, submit malicious material, misuse forms or copy content in a way that infringes our rights or another person's rights.",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "SwitchZero branding, original copy, layouts and site materials are owned by or licensed to SwitchZero. You may print or save reasonable extracts for internal business use, but you may not republish, sell or remove ownership notices without permission.",
        ],
      },
      {
        title: "External links and third parties",
        paragraphs: [
          "Links to suppliers, regulators, dispute-resolution providers or other websites are supplied for convenience. We do not control third-party websites and are not responsible for their content, availability or privacy practices.",
        ],
      },
      {
        title: "Availability and liability",
        paragraphs: [
          "We aim to keep the website accurate and available but cannot promise uninterrupted access or that all information will always be current. Nothing in these terms excludes liability that cannot lawfully be excluded. Subject to that, we are not responsible for loss caused by relying on general website information without obtaining a specific review.",
        ],
      },
      {
        title: "Privacy, changes and governing law",
        paragraphs: [
          "Our Privacy Policy and Cookie Policy explain how information and browser storage are handled. We may update the site and these terms from time to time. These terms are governed by the law of England and Wales, and the courts of England and Wales will have jurisdiction unless mandatory law says otherwise.",
        ],
        links: [
          { label: "Read our Privacy Policy", href: "/privacy" },
          { label: "Read our Cookie Policy", href: "/cookies" },
        ],
      },
    ],
  },
  complaints: {
    title: "Complaints Procedure",
    label: "Customer support",
    intro:
      "A clear route for raising a concern about SwitchZero's service, receiving updates and requesting independent review where the scheme rules allow it.",
    sections: [
      {
        title: "Our commitment",
        paragraphs: [
          "A complaint is any expression of dissatisfaction about our service, whether or not you use the word complaint. Raising one is free. We will treat you fairly, record the issue, investigate the available evidence and explain the outcome in clear language.",
        ],
      },
      {
        title: "How to complain",
        paragraphs: [
          `Email ${companyDetails.email}, call ${companyDetails.phone}, or write to Complaints, ${companyDetails.name}, ${companyDetails.address}. You may ask another person to act for you if you give us suitable authority.`,
        ],
        links: [
          { label: "Email SwitchZero", href: companyDetails.emailHref },
          { label: "Contact SwitchZero online", href: "/contact" },
        ],
      },
      {
        title: "What to include",
        paragraphs: [
          "Please give us enough information to identify the matter and understand what you would like us to do.",
        ],
        bullets: [
          "Your name, organisation and preferred contact details",
          "Relevant site, meter, supplier, contract or reference details",
          "A clear description of what happened and when",
          "Copies of relevant emails, bills, quotations or call details",
          "The outcome you are asking for",
        ],
      },
      {
        title: "What happens next",
        paragraphs: [
          "We aim to acknowledge a complaint within five working days and identify the person handling it. We will review relevant records and may ask for further information. We aim to provide a reasoned response or a progress update within ten working days, and we will keep you informed if the investigation needs longer.",
        ],
        bullets: [
          "The complaint will be considered by someone with suitable authority",
          "You can ask for a senior review if you disagree with the initial outcome",
          "Our final response will explain our findings, any remedy offered and the next escalation route",
          "We aim to issue a final response as soon as possible and no later than the applicable ADR time limit",
        ],
      },
      {
        title: "If another firm is involved",
        paragraphs: [
          "Some issues concern an energy supplier, metering provider, installer, funder or another organisation. We will still record your complaint. If another firm is responsible for all or part of it, we will explain why and provide the relevant contact details. Where appropriate and permitted, we may pass the matter on with your consent.",
        ],
      },
      {
        title: "Possible outcomes",
        paragraphs: [
          "Depending on the evidence and the service involved, an outcome may include an explanation, correction, apology, completion of agreed action, service improvement or an appropriate payment. We will state clearly if we cannot provide the outcome requested and explain the reason.",
        ],
      },
      {
        title: "Deadlock and independent dispute resolution",
        paragraphs: [
          "If we cannot agree an outcome, we may issue a final response or deadlock letter. At the date of this procedure, an eligible business may be able to approach the applicable alternative dispute-resolution scheme after eight weeks from the original complaint, or sooner after receiving a deadlock letter. Scheme rules and waiting periods can change, so our final response will identify the route and current timing that apply.",
        ],
      },
      {
        title: "Energy Ombudsman eligibility",
        paragraphs: [
          "Energy Ombudsman offers free, independent dispute resolution for eligible small businesses and microbusinesses. It can accept a complaint about an energy broker only where that broker participates in its scheme and the complaint meets its Terms of Reference. Check the Energy Brokers Register and current eligibility rules before applying.",
        ],
        links: [
          {
            label: "Check the Energy Brokers Register and eligibility",
            href: "https://www.energyombudsman.org/how-we-can-help/energy-brokers",
          },
          {
            label: "Read Energy Ombudsman's process",
            href: "https://www.energyombudsman.org/our-process",
          },
        ],
      },
      {
        title: "Energy Ombudsman contact details",
        paragraphs: [
          "If the Energy Ombudsman scheme applies, you can raise a dispute online or contact Energy Ombudsman by telephone on 0330 440 1624, by email at enquiry@energyombudsman.org, or by post at Energy Ombudsman, P.O. Box 966, Warrington, WA4 9DF.",
        ],
        links: [
          {
            label: "Visit Energy Ombudsman",
            href: "https://www.energyombudsman.org/",
          },
        ],
      },
      {
        title: "Accessibility, records and improvement",
        paragraphs: [
          "Tell us if you need information in a different format, a communication adjustment or support from a representative. We keep complaint records for an appropriate period, monitor themes and use findings to improve our service. Personal information is handled under our Privacy Policy.",
        ],
        links: [{ label: "Read our Privacy Policy", href: "/privacy" }],
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    label: "Accessibility",
    intro:
      "SwitchZero wants this website and its information to be usable by as many people as reasonably possible.",
    sections: [
      {
        title: "What the site supports",
        paragraphs: [
          "The website uses logical headings, keyboard-accessible navigation, visible focus states, labelled forms, descriptive links and responsive layouts.",
        ],
      },
      {
        title: "Known limitations",
        paragraphs: [
          "Some supplied brand imagery contains text as part of the graphic. Equivalent live text is provided elsewhere and the imagery is not relied on to complete a task.",
        ],
      },
      {
        title: "Feedback",
        paragraphs: [
          `If you encounter an accessibility barrier, email ${companyDetails.email} or call ${companyDetails.phone}. Please describe the page and the problem so it can be investigated.`,
        ],
      },
      {
        title: "Review",
        paragraphs: [
          "This statement and the website will be reviewed as content, integrations and services change.",
        ],
      },
    ],
  },
};

function legalId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z]+/g, "-")
    .replace(/^-|-$/g, "");
}

function LegalPage({ type }: { type: keyof typeof legalContent }) {
  const content = legalContent[type];
  return (
    <main id="main-content">
      <section className="legal-hero">
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: content.title }]}
          />
          <p className="eyebrow">
            <span /> {content.label}
          </p>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
          <small>Last updated: 17 August 2026</small>
        </div>
      </section>
      <section className="section">
        <div className="shell legal-layout">
          <aside>
            <b>On this page</b>
            {content.sections.map((section) => (
              <a href={`#${legalId(section.title)}`} key={section.title}>
                {section.title}
              </a>
            ))}
          </aside>
          <div>
            {content.sections.map((section) => (
              <section id={legalId(section.title)} key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="legal-list">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.links && (
                  <div className="legal-links">
                    {section.links.map((item) =>
                      item.href.startsWith("/") ? (
                        <Link key={item.href} href={item.href}>
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.label}
                        </a>
                      ),
                    )}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
