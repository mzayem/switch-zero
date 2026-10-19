import { DetailCards } from "@/components/sections/detail-cards";
import type { ContentSection } from "@/lib/content/types";

export function ContentBlock({
  section,
  index,
}: {
  section: ContentSection;
  index: number;
}) {
  return (
    <section
      className={`section detail-section ${index % 2 ? "soft-section" : ""}`}
    >
      <div className="shell">
        <div className="detail-heading">
          <p className="eyebrow dark">{section.label}</p>
          <h2>{section.title}</h2>
          {section.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {section.items && <DetailCards items={section.items} />}
        {section.note && <p className="detail-note">{section.note}</p>}
      </div>
    </section>
  );
}
