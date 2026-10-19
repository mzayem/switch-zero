import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FinalCta } from "@/components/layout/final-cta";
import { FaqList } from "@/components/sections/faq-list";
import { JsonLd } from "@/components/seo/json-ld";
import { insightArticles } from "@/lib/content/insights";
import { pageMetadata, articleJsonLd, isoDate } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    image: article.image,
    type: "article",
    publishedTime: isoDate(article.date),
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <main id="main-content">
      <JsonLd data={articleJsonLd(article)} />
      <article className="article-page">
        <header className="article-header">
          <div className="shell">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Insights", href: "/insights" },
                { label: article.category },
              ]}
            />
            <p className="eyebrow">
              <span /> {article.category}
            </p>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <div className="article-meta">
              <span>SwitchZero editorial team</span>
              <span>Published {article.date}</span>
              <span>Updated {article.date}</span>
              <span>{article.minutes} minute read</span>
            </div>
          </div>
        </header>
        <div className="shell article-layout">
          <aside>
            <b>On this page</b>
            {article.body.map((_, index) => (
              <a href={`#section-${index + 1}`} key={index}>
                Point {index + 1}
              </a>
            ))}
            <Link href="/contact">Get in touch</Link>
          </aside>
          <div className="article-body">
            {article.body.map((paragraph, index) => (
              <section id={`section-${index + 1}`} key={paragraph}>
                <h2>
                  {[
                    "Start with verified information",
                    "Make the options comparable",
                    "Plan the decision before the deadline",
                  ][index] ?? `Point ${index + 1}`}
                </h2>
                <p>{paragraph}</p>
              </section>
            ))}
            <div className="article-callout">
              <h2>What to do next</h2>
              <p>
                If this issue is live in your organisation, bring the current
                bill, contract position and decision deadline. The review can
                then focus on facts rather than generic market commentary.
              </p>
              <Link className="button button-primary" href="/contact">
                Get in touch
              </Link>
            </div>
            <FaqList
              faqs={[
                {
                  question: "Is this article a quotation or recommendation?",
                  answer:
                    "No. It is general commercial guidance. Supplier terms, policy and market conditions should be checked for the specific requirement.",
                },
              ]}
            />
          </div>
        </div>
      </article>
      <FinalCta />
    </main>
  );
}
