import Link from "next/link";
import { Button } from "@/components/ui/button";

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
          <Button nativeButton={false} render={<Link href="/contact" />}>
            Get in touch
          </Button>
          <Button
            variant="transparent"
            nativeButton={false}
            render={<Link href="/book-energy-review" />}
          >
            Book a free energy review
          </Button>
        </div>
      </div>
    </section>
  );
}
