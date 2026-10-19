import Link from "next/link";

export function FinalCta({
  title = "Ready to review your current position?",
  text = "Whether a contract is approaching renewal or you want a second opinion on an energy project, start with a straightforward conversation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="final-cta">
      <div className="shell final-cta-grid">
        <div>
          <p className="eyebrow">Start the conversation</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link className="button button-primary" href="/contact">
            Get in touch
          </Link>
          <Link className="button button-ghost" href="/book-energy-review">
            Book a free energy review
          </Link>
        </div>
      </div>
    </section>
  );
}
