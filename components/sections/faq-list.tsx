import { JsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/lib/content/types";
import { faqJsonLd } from "@/lib/seo";

// Expandable FAQ list (shadcn accordion). Also outputs FAQPage structured
// data, so use it once per page for the page's main set of questions.
// Closed answers stay in the HTML (hidden="until-found"), so search engines
// and the browser's find-in-page can still reach them.
export function FaqList({
  faqs,
  id,
  schema = true,
}: {
  faqs: Faq[];
  id?: string;
  schema?: boolean;
}) {
  return (
    <>
      {schema && <JsonLd data={faqJsonLd(faqs)} />}
      <Accordion className="faq-list" id={id} multiple>
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.question}
            value={faq.question}
            className="faq-item"
          >
            <AccordionTrigger className="faq-trigger" headerRender={<div />}>
              {faq.question}
              <span className="faq-icon" aria-hidden="true">
                +
              </span>
            </AccordionTrigger>
            <AccordionContent className="faq-answer" hiddenUntilFound>
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
