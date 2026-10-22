export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  strapline: string;
  summary: string;
  image?: string;
  heroImage: string;
  challenges: string[];
  approach: string[];
  benefits: string[];
  faqs: Faq[];
};

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  pattern: string;
  priorities: string[];
  opportunities: string[];
};

export type PageItem = { title: string; text: string };
export type ContentSection = {
  label: string;
  title: string;
  intro: string[];
  items?: PageItem[];
  note?: string;
};

export type ServicePageContent = {
  heroTitle: string;
  sections: ContentSection[];
  process: PageItem[];
  faqs: Faq[];
  ctaTitle: string;
  ctaText: string;
};

export type IndustryPageContent = {
  heroTitle: string;
  statementTitle: string;
  statement: string[];
  challenges: PageItem[];
  solutions: PageItem[];
  process: PageItem[];
  approachTitle: string;
  approachIntro: string;
  approach: PageItem[];
  why: PageItem[];
  faqs: Faq[];
  ctaTitle: string;
  ctaText: string;
  relevantServices: string[];
};

export type InsightArticle = {
  slug: string;
  image: string;
  category: string;
  title: string;
  // Shorter title for search results and the browser tab, when the headline
  // would be cut off there (aim for 45 characters or fewer).
  seoTitle?: string;
  excerpt: string;
  date: string;
  minutes: number;
  body: string[];
};

export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
};

export type LegalPolicy = {
  title: string;
  intro: string;
  label: string;
  sections: LegalSection[];
};
