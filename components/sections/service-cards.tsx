import Link from "next/link";
import type { Service } from "@/lib/content/types";

export function ServiceCards({ services }: { services: Service[] }) {
  return (
    <div className="related-grid">
      {services.map((service) => (
        <Link key={service.slug} href={`/${service.slug}`}>
          <span>SwitchZero service</span>
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
          <b>Explore</b>
        </Link>
      ))}
    </div>
  );
}
