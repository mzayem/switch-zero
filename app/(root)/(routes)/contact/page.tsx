import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { companyDetails } from "@/lib/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact SwitchZero about business energy. Call 01633 846 927, email info@switchzero.co.uk or send a message and the team will come back to you.",
  path: "/contact",
});

export default function ContactPage() {
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
                <b>
                  Registered in England and Wales, company number{" "}
                  {companyDetails.companyNumber}
                </b>
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
