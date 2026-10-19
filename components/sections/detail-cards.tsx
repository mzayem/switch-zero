import type { PageItem } from "@/lib/content/types";

export function DetailCards({ items }: { items: PageItem[] }) {
  return (
    <div className="detail-card-grid">
      {items.map((item, index) => (
        <article className="detail-card" key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
