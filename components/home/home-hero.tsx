import Link from "next/link";
import { BusinessReviewForm } from "@/components/business-review/business-review-form";
import { Button } from "@/components/ui/button";

// Homepage hero: headline, calls to action and the energy review form.
export function HomeHero() {
  return (
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
          <ul className="hero-trust" aria-label="What SwitchZero offers">
            <li>Commercial tariff comparison</li>
            <li>Independent advice</li>
            <li>Support beyond the contract</li>
            <li>One point of contact</li>
          </ul>
        </div>
        <BusinessReviewForm />
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
  );
}
