import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export function InnerHero({
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
          <Link className="button button-ghost" href="/book-energy-review">
            Book a free energy review
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
}
