import type { InsightArticle } from "./types";

export const insightArticles: InsightArticle[] = [
  {
    slug: "renewal-window-checklist",
    image: "/assets/insight-renewal-window.webp",
    category: "Procurement",
    title:
      "The commercial renewal window: what to check before requesting prices",
    seoTitle: "Business Energy Renewal Checklist",
    excerpt:
      "A clear checklist for contracts, meters, usage and internal approval before the market conversation begins.",
    date: "5 August 2026",
    minutes: 6,
    body: [
      "A sensible renewal starts with facts, not a price request. Confirm the supply addresses, meter identifiers, current supplier, contract end dates and any notice provisions before asking the market to quote.",
      "Next, check whether the consumption data still reflects the way the organisation operates. New shifts, additional equipment, closures, electrified heating or planned solar can all change what a supplier is being asked to price.",
      "Finally, agree who can approve the contract and what information they need. A competitive offer can be short-lived, so the decision process should not be invented after the prices arrive.",
    ],
  },
  {
    slug: "unit-rate-isnt-the-whole-price",
    image: "/assets/insight-electricity-price.webp",
    category: "Business electricity",
    title: "Why the unit rate is not the whole commercial electricity price",
    seoTitle: "Unit Rate vs the Real Business Electricity Cost",
    excerpt:
      "Standing charges, capacity, contract terms and pass-through costs can change the real annual comparison.",
    date: "5 August 2026",
    minutes: 5,
    body: [
      "A lower unit rate can look decisive, but it should be tested against the full annual cost and the contract behind it. Standing charges, capacity-related costs and other elements can materially affect the outcome.",
      "The comparison should also reflect the same consumption assumption and contract period. Otherwise two supplier offers may look comparable while using different volumes or start dates.",
      "Price matters. The point is simply to compare the price the organisation is likely to pay, not the most attractive number in the first line of a quotation.",
    ],
  },
  {
    slug: "solar-after-procurement",
    image: "/assets/insight-solar-procurement.webp",
    category: "Solar PV",
    title: "Where commercial solar fits after the supply contract review",
    seoTitle: "Commercial Solar After a Contract Review",
    excerpt:
      "Procurement and on-site generation work better when the load, tariff and contract timetable are considered together.",
    date: "5 August 2026",
    minutes: 7,
    body: [
      "A supply contract and a solar project solve different parts of the cost equation. The contract governs imported electricity; solar can reduce the amount imported when the system is generating and the site is using power.",
      "That is why interval data and operating hours matter. A roof can accommodate a large array, but the most valuable design is normally the one aligned with the site's real consumption and export position.",
      "Contract dates, proposed project timing and any supplier obligations should be reviewed together. Joined-up planning reduces the chance of one decision undermining another.",
    ],
  },
];
