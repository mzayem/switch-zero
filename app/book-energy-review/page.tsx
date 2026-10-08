import type { Metadata } from "next";
import Link from "next/link";
import { BusinessReviewForm } from "../business-review-form";
import { Breadcrumbs } from "../site-chrome";
import { companyDetails } from "../site-data";

const title = "Book a Free Energy Review";
const description =
  "Book a free, no-obligation business energy review. We check your contract dates, rates and usage, then compare suitable commercial gas and electricity options.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/book-energy-review" },
  openGraph: {
    title,
    description,
    url: "/book-energy-review",
    images: [{ url: "/assets/switchzero-logo-teal.png" }],
  },
};

const bookingDetails = [
  ["Service", "Business energy review"],
  ["Covers", "Electricity, gas or both"],
  ["Follow-up", "By phone or email"],
  ["Obligation", "None"],
];

const included = [
  "Contract end dates and renewal timing",
  "Unit rates and standing charges",
  "Usage and meter information",
  "Suitable supplier options",
];

const haveReady = [
  "A recent electricity or gas bill (optional)",
  "Your contract end date, if you know it",
  "A rough idea of your monthly spend",
];

const afterBooking = [
  [
    "Request received",
    "Your booking comes straight to our team with your details and any bill you attached.",
  ],
  [
    "We review your position",
    "We check your contract dates, rates and usage against what the market can offer.",
  ],
  [
    "We talk you through it",
    "We contact you by phone or email to explain what we found and whether a full market review is worthwhile.",
  ],
  [
    "You decide",
    "There is no obligation. If you go ahead, we handle the paperwork and the switch.",
  ],
];

const faqs = [
  {
    question: "Is the energy review really free?",
    answer:
      "Yes. The review costs nothing and there is no obligation to change supplier or sign anything. If you choose to proceed, the payment route is explained before you agree. Some work is paid through supplier commission and some projects use a separate agreed fee, depending on scope.",
  },
  {
    question: "Do I need a bill to book?",
    answer:
      "No. A recent bill helps because it shows the meter, supplier, rates and charges, but your contract end date and an idea of your monthly spend is enough to start.",
  },
  {
    question: "What if my contract ends soon?",
    answer:
      "Tell us your renewal date in the form. Contract end dates shape the review timetable, so the sooner we know, the more options there usually are.",
  },
  {
    question: "Can you help if we are still in contract?",
    answer:
      "Yes. Many suppliers let you agree a new contract well before your current one ends, and reviewing early usually gives you more choice.",
  },
  {
    question: "Do you work with multi-site organisations?",
    answer:
      "Yes. We can review portfolios with several sites, mixed meter types and different renewal dates.",
  },
];

export default function BookEnergyReviewPage() {
  return (
    <main id="main-content" className="booking-page">
      <section className="booking-hero">
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: title }]}
          />
          <div className="booking-intro">
            <div>
              <p className="eyebrow dark">Booking</p>
              <h1>Book your free energy review</h1>
              <p>
                Complete the three short steps below. We will review your
                contract, rates and usage and get back to you with what we find.
              </p>
            </div>
            <ul className="booking-badges" aria-label="Booking terms">
              <li>
                <b>£0</b>
                <span>Free review</span>
              </li>
              <li>
                <b>3</b>
                <span>Short steps</span>
              </li>
              <li>
                <b>25+</b>
                <span>Suppliers accessible</span>
              </li>
            </ul>
          </div>

          <div className="booking-layout">
            <div id="review-form" className="booking-form">
              <BusinessReviewForm />
            </div>

            <aside className="booking-summary" aria-label="Your booking">
              <div className="booking-summary-head">
                <span>Your booking</span>
                <b>Free</b>
              </div>
              <dl>
                {bookingDetails.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="booking-summary-block">
                <h2>What&apos;s included</h2>
                <ul className="booking-ticks">
                  {included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="booking-summary-block">
                <h2>Helpful to have ready</h2>
                <ul className="booking-dots">
                  {haveReady.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="booking-summary-call">
                <span>Prefer to book by phone?</span>
                <a href={companyDetails.phoneHref}>{companyDetails.phone}</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="booking-after">
        <div className="shell">
          <p className="eyebrow dark">After you book</p>
          <h2>What happens once your request is in.</h2>
          <ol className="booking-timeline">
            {afterBooking.map(([heading, copy], index) => (
              <li key={heading}>
                <span>{index + 1}</span>
                <h3>{heading}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="booking-faq">
        <div className="shell booking-faq-grid">
          <div>
            <p className="eyebrow dark">Booking questions</p>
            <h2>Before you book.</h2>
            <p>
              Anything else? Call{" "}
              <a href={companyDetails.phoneHref}>{companyDetails.phone}</a> or{" "}
              <Link href="/contact">send us a message</Link>.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
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
    </main>
  );
}
