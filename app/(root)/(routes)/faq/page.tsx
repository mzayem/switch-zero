import type { Metadata } from "next";
import { FinalCta } from "@/components/layout/final-cta";
import { InnerHero } from "@/components/sections/inner-hero";
import { FaqList } from "@/components/sections/faq-list";
import { homeFaqs } from "@/lib/content/faqs";
import { services } from "@/lib/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common commercial energy questions on procurement, meters, broker commission, solar PV, battery storage and support after signing.",
  path: "/faq",
});

export default function FaqPage() {
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
          <FaqList faqs={all} id="procurement" />
        </div>
      </section>
      <FinalCta title="Still need a straight answer?" />
    </main>
  );
}
