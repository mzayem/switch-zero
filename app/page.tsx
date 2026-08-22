import Link from "next/link";
import Image from "next/image";
import { HeroLeadForm, SavingsCalculator } from "./interactive";
import { BrandLogo } from "./brand-logo";
import { homeFaqs, industries, insightArticles, services } from "./site-data";
import { FinalCta } from "./site-chrome";

const strategySteps = [
  "Tariff switching",
  "Market review",
  "Efficiency",
  "Solar PV",
  "Battery storage",
  "Monitoring",
  "Funding & support",
];

const supplierNames = [
  {
    name: "British Gas",
    className: "supplier-british-gas",
    logo: "/assets/supplier-british-gas.svg",
  },
  {
    name: "EDF Energy",
    className: "supplier-edf",
    logo: "/assets/supplier-edf.svg",
  },
  {
    name: "Yü Energy",
    className: "supplier-yu",
    logo: "/assets/supplier-yu-energy.svg",
  },
  {
    name: "SSE Energy Solutions",
    className: "supplier-sse",
    logo: "/assets/supplier-sse-energy-solutions.svg",
  },
  { name: "E.ON", className: "supplier-eon", logo: "/assets/supplier-eon.svg" },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="home-hero-bg" aria-hidden="true" />
        <div className="shell home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">
              <span /> Commercial energy · UK-wide
            </p>
            <h1>
              Helping businesses buy <em>energy</em> better.
            </h1>
            <p>
              We help UK organisations secure competitive gas and electricity
              contracts, reduce avoidable costs and make better decisions about
              how their sites are powered.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                Get in touch
              </Link>
              <Link className="button button-ghost" href="/contact?review=free">
                Book a free energy review
              </Link>
            </div>
            <ul className="hero-trust" aria-label="What SwitchZero offers">
              <li>Commercial tariff comparison</li>
              <li>Independent advice</li>
              <li>Support beyond the contract</li>
              <li>One point of contact</li>
            </ul>
          </div>
          <HeroLeadForm />
        </div>
        <div className="hero-lower">
          <div className="shell hero-lower-inner">
            <p>Commercial procurement is the starting point.</p>
            <div>
              <span>Electricity</span>
              <i />
              <span>Gas</span>
              <i />
              <span>Multi-site</span>
              <i />
              <span>Renewables</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section calculator-section">
        <div className="shell">
          <div className="calculator-heading">
            <p className="eyebrow">Commercial savings calculator</p>
            <h2>Test a rate scenario against your current position.</h2>
            <p>
              This is a planning tool, not a quotation. Use it to see whether a
              full market review is worth the conversation.
            </p>
          </div>
          <SavingsCalculator />
        </div>
      </section>

      <section className="supplier-section" aria-labelledby="supplier-heading">
        <div className="shell">
          <div className="supplier-heading">
            <p className="eyebrow">Supplier access</p>
            <h2 id="supplier-heading">
              Compare suitable business electricity and gas options.
            </h2>
            <p>
              We approach established UK energy suppliers and assess the routes
              available for your meter type, consumption, contract requirements
              and organisation.
            </p>
          </div>
          <div
            className="supplier-grid"
            aria-label="Example energy suppliers available through SwitchZero"
          >
            {supplierNames.map((supplier) => (
              <div
                className={`supplier-card ${supplier.className}`}
                key={supplier.name}
              >
                <Image
                  src={supplier.logo}
                  alt={supplier.name}
                  width={260}
                  height={100}
                  unoptimized
                />
              </div>
            ))}
            <div className="supplier-card supplier-more">
              <span>25+ Suppliers Accessible</span>
            </div>
          </div>
          <div className="supplier-action">
            <Link className="button button-primary" href="/contact?review=free">
              Compare my options
            </Link>
            <p>
              Supplier availability varies by requirement. Inclusion here does
              not mean every supplier will quote for every business.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-home">
        <div className="shell split-media-grid">
          <div className="media-stack">
            <Image
              className="media-main"
              src="/assets/switchzero-commercial-review.webp"
              alt="Commercial energy review meeting"
              width={1536}
              height={1024}
              unoptimized
            />
            <div className="media-note">
              <b>One joined-up view</b>
              <span>Contracts · consumption · generation</span>
            </div>
          </div>
          <div className="section-copy">
            <p className="eyebrow dark">About SwitchZero</p>
            <h2>A clearer way to manage costs and plan ahead.</h2>
            <p>
              Most organisations do not need another supplier. They need a
              clearer way to manage costs and plan ahead.
            </p>
            <p>
              SwitchZero starts with commercial procurement, then looks at where
              further savings can be made through efficiency upgrades, solar PV,
              battery storage, monitoring and funding.
            </p>
            <p>
              Our advice is independent, straightforward and based on how each
              organisation operates.
            </p>
            <div className="tick-grid">
              <span>Commercial tariff procurement</span>
              <span>Independent market comparison</span>
              <span>Lower consumption and on-site generation</span>
              <span>Continued account support</span>
            </div>
            <Link className="text-cta" href="/about">
              Discover SwitchZero
            </Link>
          </div>
        </div>
      </section>

      <section className="section procurement-home">
        <div className="shell procurement-grid">
          <div>
            <p className="eyebrow">Business energy procurement</p>
            <h2>Start with the right commercial contract.</h2>
            <p>
              Gas and electricity contracts can have a major effect on operating
              costs, yet many organisations renew without enough time,
              information or market visibility.
            </p>
            <p>
              We review contract end dates, consumption and meter information
              before comparing suitable commercial options. Terms and costs are
              presented clearly, with support through contracting and beyond.
            </p>
            <div className="hero-actions">
              <Link
                className="button button-primary"
                href="/commercial-tariff-switching"
              >
                Review my current contract
              </Link>
              <Link className="button button-ghost" href="/contact">
                Get in touch
              </Link>
            </div>
          </div>
          <div className="procurement-list">
            {[
              "Business electricity",
              "Business gas",
              "Fixed and flexible options",
              "Half-hourly supplies",
              "Multi-site portfolios",
              "Contract renewal planning",
              "Maximum demand and kVA reviews",
              "Ongoing market monitoring",
            ].map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{item}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-home">
        <div className="shell section-heading-row">
          <div>
            <p className="eyebrow dark">What we do</p>
            <h2>One route from the next contract to lower long-term cost.</h2>
          </div>
          <p>
            Start with what you buy. Then address what you use, what you could
            generate and how worthwhile projects should be funded.
          </p>
        </div>
        <div
          className="service-rail shell-wide"
          aria-label="SwitchZero services"
        >
          {services.slice(0, 7).map((service, index) => (
            <article className="image-service-card" key={service.slug}>
              <div
                className={`service-visual visual-${index + 1}`}
                style={
                  service.image
                    ? {
                        backgroundImage: `linear-gradient(180deg, transparent, rgba(0,51,54,.8)), url(${service.image})`,
                      }
                    : undefined
                }
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link href={`/${service.slug}`}>Learn more</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="shell rail-hint">
          <span>Scroll to explore services</span>
          <i />
        </div>
      </section>

      <section className="section strategy-section">
        <div className="shell strategy-grid">
          <div className="section-copy">
            <p className="eyebrow dark">Our complete approach</p>
            <h2>More ways to reduce what your organisation spends.</h2>
            <p>
              The right supply contract is only the first step. Once that is in
              place, we can assess where consumption can be reduced, where power
              can be generated on-site and how future projects can be funded.
            </p>
            <Link className="text-cta" href="/how-we-work">
              See how we work
            </Link>
          </div>
          <div
            className="strategy-wheel"
            role="img"
            aria-label="SwitchZero approach: tariff switching, market review, efficiency, solar PV, battery storage, monitoring, funding and support"
          >
            <div className="wheel-core">
              <BrandLogo className="wheel-core-logo" surface="white" />
              <span>
                Lower costs.
                <br />
                Stronger business.
              </span>
            </div>
            {strategySteps.map((step, index) => (
              <div className={`wheel-step wheel-step-${index + 1}`} key={step}>
                <i>{index + 1}</i>
                <b>{step}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section how-section">
        <div className="shell">
          <div className="section-heading-row light-heading">
            <div>
              <p className="eyebrow">How we work</p>
              <h2>A clear route from review to delivery.</h2>
            </div>
            <p>
              Enough structure to make a sound decision. No unnecessary theatre.
            </p>
          </div>
          <div className="steps-grid">
            {[
              [
                "01",
                "Review your current position",
                "We review contracts, renewal dates, bills, consumption and site requirements.",
              ],
              [
                "02",
                "Compare the available options",
                "We assess suitable suppliers, contract types and areas where cost may be reduced.",
              ],
              [
                "03",
                "Put the agreed plan in place",
                "We manage the paperwork and coordinate the selected contract or project.",
              ],
              [
                "04",
                "Continue reviewing performance",
                "We remain available and highlight further opportunities as circumstances change.",
              ],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <i />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow dark">Why SwitchZero</p>
              <h2>Helping organisations make better decisions.</h2>
            </div>
            <p>
              Securing the right contract is one part of the picture. The next
              step is to understand usage, compare credible options and pursue
              changes that stand up commercially.
            </p>
          </div>
          <div className="feature-grid">
            {[
              [
                "01",
                "Independent procurement",
                "Suitable suppliers and contract options are compared against usage, renewal dates and appetite for risk.",
              ],
              [
                "02",
                "One joined-up service",
                "Procurement, efficiency, solar, storage and monitoring can be considered together.",
              ],
              [
                "03",
                "Continued support",
                "Our involvement does not end when an agreement is signed.",
              ],
              [
                "04",
                "Based on your organisation",
                "Recommendations reflect sites, operating hours, budget and priorities, with no generic package.",
              ],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pathway-section">
        <div className="shell pathway-grid">
          <div>
            <p className="eyebrow dark">The full cost picture</p>
            <h2>
              Separate improvements can contribute to a lower overall cost.
            </h2>
            <p>
              Every site is different. This illustration shows how procurement,
              consumption reduction and on-site generation may build on each
              other. It is not a saving promise and not every organisation will
              need every step.
            </p>
            <Link className="button button-dark" href="/contact">
              See what could work for my organisation
            </Link>
          </div>
          <div
            className="pathway-bars"
            aria-label="Illustrative cost reduction pathway"
          >
            {[100, 92, 84, 72, 66, 63].map((width, index) => (
              <div key={width}>
                <span>
                  {
                    [
                      "Current supply cost",
                      "New commercial contract",
                      "Consumption reduction",
                      "Solar generation",
                      "Battery storage where suitable",
                      "Ongoing monitoring",
                    ][index]
                  }
                </span>
                <i style={{ width: `${width}%` }} />
                <b>{index === 0 ? "Starting point" : "Illustrative step"}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section industries-home">
        <div className="shell section-heading-row">
          <div>
            <p className="eyebrow dark">Industries</p>
            <h2>Commercial decisions shaped around how the site operates.</h2>
          </div>
          <p>
            Different loads, estates and operating windows need different
            procurement and project priorities.
          </p>
        </div>
        <div className="shell industry-grid">
          {industries.slice(0, 6).map((industry, index) => (
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
          <Link className="industry-card industry-more" href="/industries">
            <span>+</span>
            <h3>More commercial sectors</h3>
            <p>
              Detailed guidance for offices and commercial property, healthcare,
              education, agriculture and public-sector estates.
            </p>
            <b>View all industries</b>
          </Link>
        </div>
      </section>

      <section className="section insights-home">
        <div className="shell section-heading-row">
          <div>
            <p className="eyebrow dark">Latest insights</p>
            <h2>Guidance for commercial energy buyers.</h2>
          </div>
          <Link className="text-cta" href="/insights">
            Visit the insights hub
          </Link>
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
                <h3>
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p>{article.excerpt}</p>
                <Link href={`/insights/${article.slug}`}>Read article</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-home">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow dark">Frequently asked questions</p>
            <h2>Straight answers before the first call.</h2>
            <p>
              Commercial energy can become needlessly complicated. Here are the
              questions businesses ask us most often.
            </p>
            <Link className="text-cta" href="/faq">
              View all questions
            </Link>
          </div>
          <div className="faq-list">
            {homeFaqs.slice(0, 7).map((faq) => (
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

      <FinalCta />
    </main>
  );
}
