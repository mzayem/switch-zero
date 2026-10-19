import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "commercial-tariff-switching",
    title: "Commercial Tariff Switching",
    strapline: "Give your next renewal proper competition.",
    summary:
      "We review your current electricity and gas position, compare suitable commercial offers and explain the terms before you commit.",
    image: "/assets/card-commercial-tariff-switching.webp",
    heroImage: "/assets/hero-service-commercial-tariff-switching.webp",
    challenges: [
      "Renewal deadlines arriving with little warning",
      "Direct offers that are difficult to compare",
      "Multiple meters or sites on different end dates",
      "Limited visibility of supplier terms and charges",
    ],
    approach: [
      "Confirm contracts, meters and renewal windows",
      "Build a clear commercial tender",
      "Compare rates, charges, terms and risk",
      "Support contracting and the move to the chosen supplier",
    ],
    benefits: [
      "A structured market comparison",
      "Clearer decision-making",
      "Less administration for your team",
      "Support after signature",
    ],
    faqs: [
      {
        question: "How far ahead can we review a renewal?",
        answer:
          "That depends on the meter, supplier and market. Starting early gives more time to check the current position and consider when to go to market.",
      },
      {
        question: "What information do you need?",
        answer:
          "A recent bill, contract end date and a signed Letter of Authority are usually enough to start gathering accurate information.",
      },
    ],
  },
  {
    slug: "commercial-energy-procurement",
    title: "Commercial Energy Procurement",
    strapline: "A procurement plan built around the way you operate.",
    summary:
      "From a single site to a complex meter portfolio, we organise the data, shape the tender and present the commercial options clearly.",
    image: "/assets/card-commercial-energy-procurement.webp",
    heroImage: "/assets/hero-service-commercial-energy-procurement.webp",
    challenges: [
      "Fragmented supplier contracts",
      "Unclear appetite for price risk",
      "Incomplete consumption data",
      "Procurement without an agreed timetable",
    ],
    approach: [
      "Map sites, meters and usage",
      "Agree objectives and risk appetite",
      "Tender to suitable suppliers",
      "Present comparable options and manage administration",
    ],
    benefits: [
      "Better portfolio visibility",
      "A defensible buying process",
      "Contract timing that is planned",
      "One accountable point of contact",
    ],
    faqs: [
      {
        question: "Can you tender a multi-site portfolio?",
        answer:
          "Yes. We can organise different meters and end dates into a structured procurement plan before approaching suitable suppliers.",
      },
      {
        question: "Do you only recommend fixed contracts?",
        answer:
          "No. The right structure depends on usage, budget certainty, scale and appetite for market movement.",
      },
    ],
  },
  {
    slug: "business-electricity",
    title: "Business Electricity",
    strapline: "See the whole electricity offer, not just the unit rate.",
    summary:
      "We compare commercial electricity contracts across the charges, term and conditions that affect the real cost to your organisation.",
    image: "/assets/switchzero-business-electricity.webp",
    heroImage: "/assets/hero-service-business-electricity.webp",
    challenges: [
      "Half-hourly data that is not being used",
      "Capacity charges that go unreviewed",
      "Headline rates masking other costs",
      "Sites renewing at different times",
    ],
    approach: [
      "Check meter type and consumption profile",
      "Review standing and capacity charges",
      "Compare fixed, flexible and renewable-backed options",
      "Plan renewals and contract support",
    ],
    benefits: [
      "More useful cost comparisons",
      "Improved meter visibility",
      "Suitable contract structures",
      "A clearer renewal calendar",
    ],
    faqs: [
      {
        question: "What is a half-hourly supply?",
        answer:
          "It records consumption in 30-minute intervals. That data can help suppliers price accurately and can reveal useful information about demand patterns.",
      },
      {
        question: "Can you review our kVA?",
        answer:
          "We can review available capacity and maximum-demand information to identify whether a more detailed assessment is worthwhile.",
      },
    ],
  },
  {
    slug: "business-gas",
    title: "Business Gas",
    strapline: "Commercial gas buying with the timing and detail handled.",
    summary:
      "We review annual quantity, seasonal demand and renewal dates before comparing suitable commercial gas contracts.",
    image: "/assets/switchzero-business-gas.webp",
    heroImage: "/assets/hero-service-business-gas.webp",
    challenges: [
      "Seasonal usage distorting comparisons",
      "Estimated annual quantities",
      "Automatic renewal pressure",
      "Gas and electricity bought in isolation",
    ],
    approach: [
      "Check annual quantity and meter details",
      "Understand seasonal operating patterns",
      "Compare appropriate contract structures",
      "Coordinate gas with the overall procurement plan",
    ],
    benefits: [
      "Clearer annual cost view",
      "Better use of consumption data",
      "Joined-up renewal planning",
      "Less supplier administration",
    ],
    faqs: [
      {
        question: "Can gas and electricity be reviewed together?",
        answer:
          "Yes. They remain separate supply contracts, but reviewing both can improve the overall timetable and reduce duplicated work.",
      },
      {
        question: "Does seasonal usage matter?",
        answer:
          "Yes. Hotels, care settings, agriculture and other heat-led operations can have very different winter and summer profiles.",
      },
    ],
  },
  {
    slug: "commercial-solar-pv",
    title: "Commercial Solar PV",
    strapline: "Generate on-site power around your actual load.",
    summary:
      "We assess site suitability, consumption, roof or land constraints, grid requirements and finance before recommending a commercial solar route.",
    image: "/assets/switchzero-commercial-solar.webp",
    heroImage: "/assets/hero-service-commercial-solar-pv.webp",
    challenges: [
      "Proposals sized around roof area rather than usage",
      "Structural or planning questions left too late",
      "Export assumptions that do not reflect the site",
      "Unclear capital and PPA comparisons",
    ],
    approach: [
      "Review load profile and available space",
      "Check structural, planning and grid requirements",
      "Model self-consumption and export",
      "Compare capital, finance and PPA routes",
    ],
    benefits: [
      "Lower-cost on-site generation",
      "A system matched to the operation",
      "Clearer investment options",
      "Monitoring built into the plan",
    ],
    faqs: [
      {
        question: "Does every commercial roof suit solar?",
        answer:
          "No. Structure, condition, shading, access, planning, grid position and the organisation's consumption all need to be considered.",
      },
      {
        question: "What is self-consumption?",
        answer:
          "It is the proportion of solar generation used on site rather than exported. It is often central to the commercial case.",
      },
    ],
  },
  {
    slug: "battery-storage",
    title: "Battery Storage",
    strapline: "Use stored power where the site case supports it.",
    summary:
      "We examine load shape, solar generation, tariffs, peak demand and resilience requirements before assessing whether storage makes commercial sense.",
    image: "/assets/switchzero-battery-storage.webp",
    heroImage: "/assets/hero-service-battery-storage.webp",
    challenges: [
      "Batteries proposed without interval data",
      "Oversizing against a simple annual figure",
      "Confusion between bill saving and resilience",
      "No plan for controls or monitoring",
    ],
    approach: [
      "Analyse site load and operating hours",
      "Define the job the battery must perform",
      "Model capacity, power and cycling",
      "Review controls, connection and commercial return",
    ],
    benefits: [
      "A use case grounded in data",
      "Better integration with solar",
      "Potential peak-demand control",
      "Realistic expectations before investment",
    ],
    faqs: [
      {
        question: "Will a battery always cut bills?",
        answer:
          "No. The result depends on the load profile, tariff, system size, control strategy and how often the battery can be used effectively.",
      },
      {
        question: "Can storage be added to existing solar?",
        answer:
          "Often, yes. The existing inverters, metering, connection and operating objective need to be checked first.",
      },
    ],
  },
  {
    slug: "energy-management-systems",
    title: "Energy Management Systems",
    strapline: "Turn consumption data into something your team can use.",
    summary:
      "Monitoring and reporting can show where power is used, when demand changes and which actions deserve attention.",
    image: "/assets/switchzero-energy-management.webp",
    heroImage: "/assets/hero-service-energy-management-systems.webp",
    challenges: [
      "Bills are the only source of consumption information",
      "No visibility by building or process",
      "Out-of-hours usage going unnoticed",
      "Portfolio reporting taking too long",
    ],
    approach: [
      "Define useful meters and reporting",
      "Connect available data sources",
      "Set clear dashboards and alerts",
      "Review trends and actions with site teams",
    ],
    benefits: [
      "Better consumption visibility",
      "Quicker identification of waste",
      "Comparable site performance",
      "Evidence for future investment",
    ],
    faqs: [
      {
        question: "Do we need new meters?",
        answer:
          "Not always. We first check what data is already available and where additional sub-metering would produce useful insight.",
      },
      {
        question: "Can several sites be viewed together?",
        answer:
          "Yes. A well-designed system can combine site-level reporting while preserving enough detail to investigate changes.",
      },
    ],
  },
  {
    slug: "efficiency-upgrades",
    title: "Efficiency Upgrades",
    strapline: "Reduce avoidable use before paying to generate more.",
    summary:
      "We identify operational and equipment changes that may reduce consumption, from schedules and controls to lighting and building systems.",
    heroImage: "/assets/hero-service-efficiency-upgrades.webp",
    challenges: [
      "Plant running outside operating hours",
      "Legacy lighting or controls",
      "Heating and cooling working against each other",
      "No prioritised improvement list",
    ],
    approach: [
      "Review bills, data and operating schedules",
      "Walk the site and speak with users",
      "Rank actions by effort, cost and impact",
      "Support delivery and measurement",
    ],
    benefits: [
      "Lower avoidable consumption",
      "A prioritised action plan",
      "Better project sequencing",
      "Improved evidence for investment",
    ],
    faqs: [
      {
        question: "Do efficiency reviews only cover equipment?",
        answer:
          "No. Operating schedules, controls and day-to-day practices can be as important as replacing hardware.",
      },
      {
        question: "Should efficiency come before solar?",
        answer:
          "They can be planned together, but understanding the future load helps avoid sizing generation around waste that could first be removed.",
      },
    ],
  },
  {
    slug: "commercial-ev-charging",
    title: "Commercial EV Charging",
    strapline:
      "Charging planned around vehicles, dwell time and site capacity.",
    summary:
      "We help organisations assess workplace, fleet and visitor charging alongside electrical capacity, load management and on-site generation.",
    heroImage: "/assets/hero-service-commercial-ev-charging.webp",
    challenges: [
      "Charger counts chosen before duty cycles",
      "Site capacity not checked",
      "No load-management plan",
      "Fleet and visitor needs mixed together",
    ],
    approach: [
      "Map vehicles, journeys and dwell times",
      "Check electrical capacity and connection",
      "Plan charger mix and load control",
      "Review solar, storage and finance integration",
    ],
    benefits: [
      "Charging matched to the operation",
      "Lower risk of unnecessary capacity work",
      "A scalable site plan",
      "Clearer capital options",
    ],
    faqs: [
      {
        question: "Does every vehicle need its own charger?",
        answer:
          "Not necessarily. Dwell times, daily mileage and charge management can materially change the number and rating required.",
      },
      {
        question: "Can solar supply EV chargers?",
        answer:
          "Yes, but generation timing, vehicle availability and the site's total load determine how much solar can be used directly.",
      },
    ],
  },
  {
    slug: "power-purchase-agreements",
    title: "Power Purchase Agreements",
    strapline: "Understand the long-term contract behind the solar system.",
    summary:
      "We help organisations compare on-site PPAs with capital purchase and finance, including price, term, roof obligations and end-of-term options.",
    heroImage: "/assets/hero-service-power-purchase-agreements.webp",
    challenges: [
      "'Free solar' language hiding a long agreement",
      "Unclear roof and access obligations",
      "Price escalators not modelled",
      "End-of-term ownership not understood",
    ],
    approach: [
      "Review the site and proposed generation",
      "Compare PPA pricing with other routes",
      "Examine term, indexation and responsibilities",
      "Clarify roof, access and exit provisions",
    ],
    benefits: [
      "Lower or no upfront capital requirement",
      "A clearer long-term cost comparison",
      "Better visibility of responsibilities",
      "Decision-making with the contract exposed",
    ],
    faqs: [
      {
        question: "Is a PPA free solar?",
        answer:
          "No. The provider funds and owns the system for an agreed period and the customer buys generated electricity under a contract.",
      },
      {
        question: "How long does a PPA last?",
        answer:
          "Terms vary. The price, indexation, roof obligations, early-exit position and end-of-term options should be reviewed together.",
      },
    ],
  },
  {
    slug: "funding-and-asset-finance",
    title: "Funding & Asset Finance",
    strapline: "Compare ways to fund the project, not just the equipment.",
    summary:
      "We consider capital purchase, asset finance, lease structures, PPAs and applicable funding routes against cash flow and project objectives.",
    heroImage: "/assets/hero-service-funding-and-asset-finance.webp",
    challenges: [
      "A good project delayed by capital pressure",
      "Monthly payments compared without total cost",
      "Grant availability assumed rather than checked",
      "Finance terms disconnected from asset life",
    ],
    approach: [
      "Confirm the project and commercial case",
      "Compare capital and funded routes",
      "Check eligibility and approval requirements",
      "Set out responsibilities and total cost",
    ],
    benefits: [
      "More realistic funding choices",
      "Clearer cash-flow comparison",
      "Projects sequenced around affordability",
      "No assumption that a grant will appear",
    ],
    faqs: [
      {
        question: "Are grants always available?",
        answer:
          "No. Funding windows, geography, technology and eligibility change. Availability must be checked for the specific organisation and project.",
      },
      {
        question: "Is the cheapest monthly payment best?",
        answer:
          "Not automatically. Term, interest, ownership, maintenance and total payable all matter.",
      },
    ],
  },
  {
    slug: "energy-consultancy",
    title: "Energy Consultancy",
    strapline: "Commercial support that continues beyond the next contract.",
    summary:
      "We support contract reviews, portfolio oversight, usage analysis, market updates and project assessment as requirements change.",
    heroImage: "/assets/hero-service-energy-consultancy.webp",
    challenges: [
      "No owner for energy decisions",
      "Market information without commercial context",
      "Projects reviewed in isolation",
      "Contract dates and actions held in different places",
    ],
    approach: [
      "Set priorities and governance",
      "Maintain portfolio and renewal visibility",
      "Review usage and project opportunities",
      "Provide clear decision papers and follow-up",
    ],
    benefits: [
      "Continuity across decisions",
      "Less internal administration",
      "Better project sequencing",
      "A partner who understands the portfolio",
    ],
    faqs: [
      {
        question: "Can support cover procurement and projects?",
        answer:
          "Yes. Keeping contracts, consumption and capital projects in one view often leads to better sequencing and fewer missed dependencies.",
      },
      {
        question: "Is consultancy only for large organisations?",
        answer:
          "No. The scope can be matched to a single site, a growing portfolio or a specific commercial decision.",
      },
    ],
  },
];
