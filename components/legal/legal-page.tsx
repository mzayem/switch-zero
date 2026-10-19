import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { legalContent, legalId, type LegalPageKey } from "@/lib/content/legal";

export function LegalPage({ type }: { type: LegalPageKey }) {
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
