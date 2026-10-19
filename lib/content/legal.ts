import { companyDetails } from "./company";
import type { LegalPolicy } from "./types";

export const legalContent: Record<
  "privacy" | "cookies" | "terms" | "complaints" | "accessibility",
  LegalPolicy
> = {
  privacy: {
    title: "Privacy Policy",
    label: "Privacy",
    intro:
      "How SwitchZero collects, uses, shares and protects personal information when you contact us or use this website.",
    sections: [
      {
        title: "Who is responsible for your information",
        paragraphs: [
          `${companyDetails.name} is the data controller for personal information covered by this policy. The company is registered in England and Wales and our office is at ${companyDetails.address}. You can contact us at ${companyDetails.email} or ${companyDetails.phone}.`,
        ],
      },
      {
        title: "Information we collect",
        paragraphs: [
          "We collect information you give us, information created while we provide a service and limited technical information generated when you use the website.",
        ],
        bullets: [
          "Names, roles, organisation details, email addresses, telephone numbers and correspondence",
          "Site addresses, meter details, supplier and contract information, consumption, bills and project data",
          "Enquiry details, requested services, contract dates, estimated spend and uploaded documents",
          "Marketing preferences, cookie choices and campaign-source information",
          "Technical data such as device, browser, approximate location, pages viewed and security logs where those tools are in use",
        ],
      },
      {
        title: "Where information comes from",
        paragraphs: [
          "Information may come directly from you, from an authorised colleague or adviser, from your energy supplier after you give suitable authority, from metering or industry data services, and from publicly available business sources. We will only seek information that is relevant to the requested work.",
        ],
      },
      {
        title: "Why we use information and our lawful bases",
        paragraphs: [
          "We use personal information only where there is a lawful basis under UK data-protection law.",
        ],
        bullets: [
          "To respond to an enquiry and take steps requested before entering a contract",
          "To deliver an agreed service and administer our relationship with your organisation",
          "For legitimate interests such as comparing suitable supplier routes, maintaining records, improving service, preventing fraud and securing our systems",
          "To meet legal, regulatory, tax, accounting and dispute-handling obligations",
          "With consent where consent is required, including certain marketing and optional cookie activity",
        ],
      },
      {
        title: "Who we may share information with",
        paragraphs: [
          "We may share the minimum necessary information with suitable energy suppliers, quotation or aggregation partners, metering and data providers, project partners, professional advisers, IT and hosting providers, regulators, dispute-resolution bodies and public authorities. We do not sell personal information.",
        ],
      },
      {
        title: "Uploaded bills and sensitive account data",
        paragraphs: [
          "Utility bills can contain account numbers, meter identifiers, supply addresses and consumption information. Uploaded documents are used to assess the enquiry and are not published as website assets. Please remove information that is not relevant before uploading where possible.",
        ],
      },
      {
        title: "International transfers",
        paragraphs: [
          "Some service providers may process information outside the UK. Where this happens, we will use an approved transfer mechanism or another lawful safeguard and apply appropriate contractual and security controls.",
        ],
      },
      {
        title: "Retention and security",
        paragraphs: [
          "We retain information only for as long as it is reasonably needed for the enquiry, service, complaint, legal obligation or establishment of legal claims. Retention periods depend on the type of record. We use proportionate access controls, secure storage and supplier checks, but no internet service can promise absolute security.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Depending on the circumstances, you may have rights to access, correct or erase information, restrict or object to processing, receive portable information, withdraw consent and ask for a review of certain automated decisions. Some rights are subject to legal exemptions.",
        ],
        links: [
          {
            label: "Read the ICO guide to your rights",
            href: "https://ico.org.uk/for-the-public/your-data-matters/",
          },
        ],
      },
      {
        title: "Marketing and complaints",
        paragraphs: [
          `You can stop direct marketing at any time by using the unsubscribe option provided or contacting ${companyDetails.email}. If you have a data-protection concern, please contact us first so we can investigate. You also have the right to complain to the Information Commissioner's Office.`,
        ],
        links: [
          {
            label: "Contact the Information Commissioner's Office",
            href: "https://ico.org.uk/make-a-complaint/",
          },
        ],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "We may update this policy when our services, suppliers or legal obligations change. The latest version and review date will remain available on this page.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    label: "Cookies",
    intro:
      "What this website stores in your browser, why it is used and how you can control optional technologies.",
    sections: [
      {
        title: "What cookies and browser storage are",
        paragraphs: [
          "Cookies are small text files placed on a device by a website. Similar technologies include local storage, pixels and tags. They can keep a service working, remember choices and, where allowed, help measure visits or campaigns.",
        ],
      },
      {
        title: "Our current consent record",
        paragraphs: [
          "This site uses local browser storage named switchzero-cookie-consent to remember whether you accepted or rejected analytics, marketing and personalisation categories. It records your selected categories and the date of the choice. Local storage remains until it is cleared or replaced.",
        ],
      },
      {
        title: "Necessary technologies",
        paragraphs: [
          "Necessary technologies support security, page delivery, form handling and your privacy choices. They do not require consent where they are strictly necessary, although we still explain their use.",
        ],
      },
      {
        title: "Analytics",
        paragraphs: [
          "Analytics can show which pages are used and whether the website performs as expected. Where consent is required, analytics will remain off until you select this category.",
        ],
      },
      {
        title: "Marketing",
        paragraphs: [
          "Marketing technologies can measure advertising visits or conversions and may connect activity across websites. Where consent is required, these technologies will remain off until you select this category.",
        ],
      },
      {
        title: "Personalisation",
        paragraphs: [
          "Personalisation can remember optional choices that are not essential to the service. It will remain off unless you allow it where consent is required.",
        ],
      },
      {
        title: "Third-party tools",
        paragraphs: [
          "If we add analytics, advertising, embedded media or other third-party tools, those providers may set their own cookies. We will update this policy and the consent control when the tools or purposes materially change.",
        ],
      },
      {
        title: "Change or withdraw your choice",
        paragraphs: [
          "Choose Cookie settings in the footer at any time to reject optional categories or save new preferences. You can also clear cookies and local storage in your browser. Blocking necessary storage may affect some website functions.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          `Questions about cookies or privacy choices can be sent to ${companyDetails.email}, raised on ${companyDetails.phone}, or posted to ${companyDetails.address}.`,
        ],
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    label: "Website terms",
    intro:
      "The terms that apply when you access this website, submit an enquiry or use its general information.",
    sections: [
      {
        title: "About us",
        paragraphs: [
          `This website is operated by ${companyDetails.name}, a company registered in England and Wales, from ${companyDetails.address}. Contact us at ${companyDetails.email} or ${companyDetails.phone}.`,
        ],
      },
      {
        title: "Acceptance of these terms",
        paragraphs: [
          "By using this website, you agree to these terms. If you do not agree, please stop using the site. These website terms are separate from any Letter of Authority, service agreement, supplier contract, finance agreement or project contract.",
        ],
      },
      {
        title: "Website information is not a quotation",
        paragraphs: [
          "Content and calculator results are general information only. They are not a supplier quotation, a binding offer, financial advice, legal advice, tax advice or a guarantee of savings. A live recommendation depends on verified bills, meter information, consumption, credit position, market conditions and contract terms.",
        ],
      },
      {
        title: "Our services and your authority",
        paragraphs: [
          "Submitting a form does not appoint SwitchZero or authorise us to enter a contract for you. Any authority, scope, fees or commission, responsibilities and cancellation rights will be set out separately before an agreed service begins.",
        ],
      },
      {
        title: "Supplier and project availability",
        paragraphs: [
          "A supplier shown on the website may not be suitable or available for every requirement. Supplier appetite, pricing, credit decisions and product terms are controlled by the relevant provider. Technology, funding, grant, planning and grid outcomes also require project-specific checks.",
        ],
      },
      {
        title: "Information you provide",
        paragraphs: [
          "You are responsible for providing information you are entitled to share and for checking that it is accurate. Please do not upload unnecessary personal information, passwords, card details or special-category data through the enquiry form.",
        ],
      },
      {
        title: "Permitted use",
        paragraphs: [
          "You may use the site for lawful business information and enquiries. You must not interfere with its security, attempt unauthorised access, submit malicious material, misuse forms or copy content in a way that infringes our rights or another person's rights.",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "SwitchZero branding, original copy, layouts and site materials are owned by or licensed to SwitchZero. You may print or save reasonable extracts for internal business use, but you may not republish, sell or remove ownership notices without permission.",
        ],
      },
      {
        title: "External links and third parties",
        paragraphs: [
          "Links to suppliers, regulators, dispute-resolution providers or other websites are supplied for convenience. We do not control third-party websites and are not responsible for their content, availability or privacy practices.",
        ],
      },
      {
        title: "Availability and liability",
        paragraphs: [
          "We aim to keep the website accurate and available but cannot promise uninterrupted access or that all information will always be current. Nothing in these terms excludes liability that cannot lawfully be excluded. Subject to that, we are not responsible for loss caused by relying on general website information without obtaining a specific review.",
        ],
      },
      {
        title: "Privacy, changes and governing law",
        paragraphs: [
          "Our Privacy Policy and Cookie Policy explain how information and browser storage are handled. We may update the site and these terms from time to time. These terms are governed by the law of England and Wales, and the courts of England and Wales will have jurisdiction unless mandatory law says otherwise.",
        ],
        links: [
          { label: "Read our Privacy Policy", href: "/privacy" },
          { label: "Read our Cookie Policy", href: "/cookies" },
        ],
      },
    ],
  },
  complaints: {
    title: "Complaints Procedure",
    label: "Customer support",
    intro:
      "A clear route for raising a concern about SwitchZero's service, receiving updates and requesting independent review where the scheme rules allow it.",
    sections: [
      {
        title: "Our commitment",
        paragraphs: [
          "A complaint is any expression of dissatisfaction about our service, whether or not you use the word complaint. Raising one is free. We will treat you fairly, record the issue, investigate the available evidence and explain the outcome in clear language.",
        ],
      },
      {
        title: "How to complain",
        paragraphs: [
          `Email ${companyDetails.email}, call ${companyDetails.phone}, or write to Complaints, ${companyDetails.name}, ${companyDetails.address}. You may ask another person to act for you if you give us suitable authority.`,
        ],
        links: [
          { label: "Email SwitchZero", href: companyDetails.emailHref },
          { label: "Contact SwitchZero online", href: "/contact" },
        ],
      },
      {
        title: "What to include",
        paragraphs: [
          "Please give us enough information to identify the matter and understand what you would like us to do.",
        ],
        bullets: [
          "Your name, organisation and preferred contact details",
          "Relevant site, meter, supplier, contract or reference details",
          "A clear description of what happened and when",
          "Copies of relevant emails, bills, quotations or call details",
          "The outcome you are asking for",
        ],
      },
      {
        title: "What happens next",
        paragraphs: [
          "We aim to acknowledge a complaint within five working days and identify the person handling it. We will review relevant records and may ask for further information. We aim to provide a reasoned response or a progress update within ten working days, and we will keep you informed if the investigation needs longer.",
        ],
        bullets: [
          "The complaint will be considered by someone with suitable authority",
          "You can ask for a senior review if you disagree with the initial outcome",
          "Our final response will explain our findings, any remedy offered and the next escalation route",
          "We aim to issue a final response as soon as possible and no later than the applicable ADR time limit",
        ],
      },
      {
        title: "If another firm is involved",
        paragraphs: [
          "Some issues concern an energy supplier, metering provider, installer, funder or another organisation. We will still record your complaint. If another firm is responsible for all or part of it, we will explain why and provide the relevant contact details. Where appropriate and permitted, we may pass the matter on with your consent.",
        ],
      },
      {
        title: "Possible outcomes",
        paragraphs: [
          "Depending on the evidence and the service involved, an outcome may include an explanation, correction, apology, completion of agreed action, service improvement or an appropriate payment. We will state clearly if we cannot provide the outcome requested and explain the reason.",
        ],
      },
      {
        title: "Deadlock and independent dispute resolution",
        paragraphs: [
          "If we cannot agree an outcome, we may issue a final response or deadlock letter. At the date of this procedure, an eligible business may be able to approach the applicable alternative dispute-resolution scheme after eight weeks from the original complaint, or sooner after receiving a deadlock letter. Scheme rules and waiting periods can change, so our final response will identify the route and current timing that apply.",
        ],
      },
      {
        title: "Energy Ombudsman eligibility",
        paragraphs: [
          "Energy Ombudsman offers free, independent dispute resolution for eligible small businesses and microbusinesses. It can accept a complaint about an energy broker only where that broker participates in its scheme and the complaint meets its Terms of Reference. Check the Energy Brokers Register and current eligibility rules before applying.",
        ],
        links: [
          {
            label: "Check the Energy Brokers Register and eligibility",
            href: "https://www.energyombudsman.org/how-we-can-help/energy-brokers",
          },
          {
            label: "Read Energy Ombudsman's process",
            href: "https://www.energyombudsman.org/our-process",
          },
        ],
      },
      {
        title: "Energy Ombudsman contact details",
        paragraphs: [
          "If the Energy Ombudsman scheme applies, you can raise a dispute online or contact Energy Ombudsman by telephone on 0330 440 1624, by email at enquiry@energyombudsman.org, or by post at Energy Ombudsman, P.O. Box 966, Warrington, WA4 9DF.",
        ],
        links: [
          {
            label: "Visit Energy Ombudsman",
            href: "https://www.energyombudsman.org/",
          },
        ],
      },
      {
        title: "Accessibility, records and improvement",
        paragraphs: [
          "Tell us if you need information in a different format, a communication adjustment or support from a representative. We keep complaint records for an appropriate period, monitor themes and use findings to improve our service. Personal information is handled under our Privacy Policy.",
        ],
        links: [{ label: "Read our Privacy Policy", href: "/privacy" }],
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    label: "Accessibility",
    intro:
      "SwitchZero wants this website and its information to be usable by as many people as reasonably possible.",
    sections: [
      {
        title: "What the site supports",
        paragraphs: [
          "The website uses logical headings, keyboard-accessible navigation, visible focus states, labelled forms, descriptive links and responsive layouts.",
        ],
      },
      {
        title: "Known limitations",
        paragraphs: [
          "Some supplied brand imagery contains text as part of the graphic. Equivalent live text is provided elsewhere and the imagery is not relied on to complete a task.",
        ],
      },
      {
        title: "Feedback",
        paragraphs: [
          `If you encounter an accessibility barrier, email ${companyDetails.email} or call ${companyDetails.phone}. Please describe the page and the problem so it can be investigated.`,
        ],
      },
      {
        title: "Review",
        paragraphs: [
          "This statement and the website will be reviewed as content, integrations and services change.",
        ],
      },
    ],
  },
};

export type LegalPageKey = keyof typeof legalContent;

export function legalId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z]+/g, "-")
    .replace(/^-|-$/g, "");
}
