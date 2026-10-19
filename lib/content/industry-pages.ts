import type { IndustryPageContent } from "./types";

export const industryPageContent: Record<string, IndustryPageContent> = {
  manufacturing: {
    heroTitle: "Control energy costs without compromising production.",
    statementTitle: "The costs sitting behind production.",
    statement: [
      "Manufacturing sites often have large and complex electricity and gas requirements. Shift patterns, machinery, compressed air, heating, cooling and production changes all influence what the business should buy, reduce or generate.",
      "We analyse contracts, half-hourly consumption, operating hours and future production requirements before building one strategy across procurement, generation, storage and efficiency.",
    ],
    challenges: [
      {
        title: "Contract cost and market exposure",
        text: "High consumption magnifies poor purchasing decisions. Timing, pricing structure, pass-through charges and volume conditions require careful review.",
      },
      {
        title: "Baseload, waste and demand peaks",
        text: "Machinery, compressed air, heating, cooling and equipment left running can increase cost without increasing output.",
      },
      {
        title: "Capacity and future demand",
        text: "New machinery, electric heating, EV charging and longer production hours can place pressure on the existing electrical supply.",
      },
    ],
    solutions: [
      {
        title: "Commercial energy procurement",
        text: "Compare suitable electricity and gas contracts using actual consumption, contract position, operating plans and appetite for market risk.",
      },
      {
        title: "Solar PV and battery storage",
        text: "Assess generation and storage against daytime demand, roof or land, network capacity and expected return.",
      },
      {
        title: "Monitoring and efficiency",
        text: "Identify waste and improvement opportunities across machinery, compressed air, heating, cooling, lighting and controls.",
      },
    ],
    process: [
      {
        title: "Understand the site",
        text: "Collect bills, contracts, half-hourly data, operating hours and planned production or electrical changes.",
      },
      {
        title: "Set the priorities",
        text: "Assess contract exposure, baseload, demand peaks, generation and efficiency with costs, savings and disruption explained.",
      },
      {
        title: "Deliver and review",
        text: "Coordinate approved work around production and review performance as requirements change.",
      },
    ],
    approachTitle: "Buy better. Waste less. Generate what makes sense.",
    approachIntro:
      "A cheaper contract will not correct unnecessary consumption. Solar does not suit every load profile and storage adds value only where a clear operating case exists.",
    approach: [
      {
        title: "Buy better",
        text: "Secure suitable electricity and gas agreements based on consumption, timing and commercial needs.",
      },
      {
        title: "Waste less",
        text: "Find avoidable baseload and equipment operating without contributing to production.",
      },
      {
        title: "Manage demand",
        text: "Understand high-demand periods and whether suitable loads can be reduced, moved or controlled.",
      },
      {
        title: "Generate on-site",
        text: "Invest in solar or storage only where site data and the financial return support it.",
      },
    ],
    why: [
      {
        title: "Decisions based on data",
        text: "Recommendations begin with bills, contracts, half-hourly use and how the site operates.",
      },
      {
        title: "Production comes first",
        text: "Surveys, installation and planned shutdowns are coordinated around operating needs wherever possible.",
      },
      {
        title: "A clear financial case",
        text: "Costs, forecast savings, payback, assumptions and commercial risks are set out before decisions.",
      },
      {
        title: "Ongoing support",
        text: "Contracts, consumption and completed improvements remain under review as the business develops.",
      },
    ],
    faqs: [
      {
        question: "How can manufacturers reduce energy costs?",
        answer:
          "Usually by combining better procurement with tighter consumption control: review terms, reduce baseload, manage peaks, improve inefficient equipment and assess on-site generation.",
      },
      {
        question: "Is solar PV suitable for manufacturing facilities?",
        answer:
          "Strong daytime demand can support high self-consumption, but roof or land, structure, shading, infrastructure, network capacity and future plans must be checked.",
      },
      {
        question: "Can battery storage improve manufacturing operations?",
        answer:
          "Potentially. It may retain solar, manage short peaks or move use between tariff periods, but the case should be modelled against half-hourly data.",
      },
      {
        question: "Will the work disrupt production?",
        answer:
          "Some work can be completed around normal operations; connection work may need a planned shutdown. Access, lifting, work areas and isolation are agreed in advance.",
      },
    ],
    ctaTitle: "Start with your bills and consumption data.",
    ctaText:
      "Send recent bills, contract end dates, operating hours and available half-hourly data. We will identify credible opportunities to reduce cost, improve control or generate on-site.",
    relevantServices: [
      "commercial-energy-procurement",
      "commercial-solar-pv",
      "battery-storage",
      "energy-management-systems",
      "efficiency-upgrades",
    ],
  },
  "warehousing-logistics": {
    heroTitle: "Reduce energy costs without slowing operations.",
    statementTitle: "The costs behind every shift.",
    statement: [
      "Warehouses and logistics sites can carry substantial electricity costs across lighting, heating, ventilation, refrigeration, automation, security, yards and vehicle charging.",
      "We analyse contracts, half-hourly use, demand peaks, schedules and future requirements before building one strategy across procurement, consumption, generation, storage and charging.",
    ],
    challenges: [
      {
        title: "Contract and portfolio complexity",
        text: "Multiple sites, meters, suppliers and renewal dates can create poor timing, unsuitable terms and unmanaged pass-through costs.",
      },
      {
        title: "Baseload, waste and demand peaks",
        text: "Lighting, refrigeration, HVAC, conveyors, automation and charging can continue using power when demand is lower or work has stopped.",
      },
      {
        title: "Capacity and future demand",
        text: "Fleet electrification, automation, electric heating and expansion can place significant pressure on the existing supply.",
      },
    ],
    solutions: [
      {
        title: "Commercial energy procurement",
        text: "Compare suitable contracts across individual sites or the portfolio using consumption, dates and operating plans.",
      },
      {
        title: "Solar PV and battery storage",
        text: "Assess roof or land, daytime demand, structural condition, network capacity and financial return.",
      },
      {
        title: "Monitoring, efficiency and EV charging",
        text: "Identify waste, improve control and plan charging around vehicles and power available at each site.",
      },
    ],
    process: [
      {
        title: "Understand the operation",
        text: "Collect bills, contracts, half-hourly data, hours and details of refrigeration, automation and planned charging.",
      },
      {
        title: "Set the priorities",
        text: "Assess exposure, baseload, peaks, generation, capacity constraints and efficiency with costs and savings shown.",
      },
      {
        title: "Deliver and review",
        text: "Coordinate approved work around site operations and review performance as demand changes.",
      },
    ],
    approachTitle: "Buy better. Cut waste. Plan for growth.",
    approachIntro:
      "A lower supply price will not correct equipment running unnecessarily. A large roof does not make solar automatically worthwhile, and the fastest EV charger is not always the right one.",
    approach: [
      {
        title: "Buy better",
        text: "Secure suitable electricity and gas contracts around consumption, timing and portfolio needs.",
      },
      {
        title: "Reduce baseload",
        text: "Find lighting, refrigeration, ventilation and other equipment consuming power unnecessarily.",
      },
      {
        title: "Manage demand",
        text: "Establish when demand peaks and whether suitable loads can be reduced, moved or controlled.",
      },
      {
        title: "Generate and charge on-site",
        text: "Assess solar, batteries and vehicle charging against capacity, schedules and the commercial case.",
      },
    ],
    why: [
      {
        title: "Decisions based on data",
        text: "Recommendations begin with bills, contracts, interval data and how each site operates.",
      },
      {
        title: "Uptime comes first",
        text: "Surveys, installation and shutdowns are planned around warehouse, loading and transport schedules.",
      },
      {
        title: "A clear financial case",
        text: "Costs, savings, payback, assumptions and capacity costs are explained before decisions.",
      },
      {
        title: "Ongoing support",
        text: "Contracts and performance stay under review as sites, equipment and vehicles change.",
      },
    ],
    faqs: [
      {
        question:
          "How can warehouses and logistics businesses reduce energy costs?",
        answer:
          "Combine better procurement with tighter consumption control, including baseload, lighting, controls, peaks and on-site generation.",
      },
      {
        question:
          "Is solar PV suitable for warehouses and distribution centres?",
        answer:
          "Large roofs can be attractive where daytime use is consistent, but condition, structure, shading, consent, network limits and on-site use must be assessed.",
      },
      {
        question: "Can battery storage help manage warehouse demand?",
        answer:
          "Potentially. It may retain solar, reduce expensive imports or manage short peaks; size and operation should be modelled against half-hourly consumption.",
      },
      {
        question: "Can our electrical supply support EV charging?",
        answer:
          "It depends on capacity, maximum demand, vehicles and charger types. Load management may help, while some sites need network upgrades.",
      },
    ],
    ctaTitle: "Start with your bills and site data.",
    ctaText:
      "Share bills, end dates, hours, interval data and planned automation, refrigeration, expansion or charging. We will identify credible opportunities across the site.",
    relevantServices: [
      "commercial-energy-procurement",
      "commercial-solar-pv",
      "battery-storage",
      "commercial-ev-charging",
      "energy-management-systems",
    ],
  },
  retail: {
    heroTitle: "Protect margins across every store.",
    statementTitle: "The costs behind every trading day.",
    statement: [
      "Retail businesses use energy across lighting, refrigeration, heating, cooling, security, displays, kitchens, storage and vehicle charging. Long trading hours turn small inefficiencies into significant annual costs.",
      "We analyse contracts, half-hourly use, trading hours, refrigeration, heating, cooling and future plans before building one strategy across procurement, consumption and generation.",
    ],
    challenges: [
      {
        title: "Contract and portfolio complexity",
        text: "Multiple stores, meters, suppliers and renewal dates can make contracts difficult to manage and increase cost across the portfolio.",
      },
      {
        title: "Consumption outside trading hours",
        text: "Refrigeration, lighting, HVAC, signage and equipment can continue using more energy than required after the store closes.",
      },
      {
        title: "Property and capacity constraints",
        text: "Leases, landlord approvals, roof access and limited capacity can affect solar, charging, heating and store upgrades.",
      },
    ],
    solutions: [
      {
        title: "Commercial energy procurement",
        text: "Compare suitable electricity and gas contracts for individual stores or the full portfolio using actual consumption and dates.",
      },
      {
        title: "Energy monitoring and efficiency",
        text: "Identify avoidable use across refrigeration, lighting, HVAC and equipment outside required hours.",
      },
      {
        title: "Solar PV, storage and EV charging",
        text: "Assess generation, storage and charging against space, capacity, customer use and expected return.",
      },
    ],
    process: [
      {
        title: "Understand the portfolio",
        text: "Collect bills, contracts, interval data, trading hours, equipment, property duties and planned changes.",
      },
      {
        title: "Set the priorities",
        text: "Assess exposure, baseload, equipment performance, peaks, generation and efficiency with costs and savings shown.",
      },
      {
        title: "Deliver and review",
        text: "Coordinate work around trading requirements and keep performance under review.",
      },
    ],
    approachTitle: "Buy better. Control consumption. Invest where it pays.",
    approachIntro:
      "A lower unit rate will not correct refrigeration, lighting or heating running unnecessarily. Solar will not suit every lease and customer charging only works where demand, dwell time and capacity support it.",
    approach: [
      {
        title: "Buy better",
        text: "Secure suitable contracts around consumption, renewal timing and portfolio requirements.",
      },
      {
        title: "Reduce avoidable consumption",
        text: "Find equipment, lighting, heating and cooling using more than the operation needs.",
      },
      {
        title: "Manage demand",
        text: "Understand peaks and whether suitable loads can be reduced, moved or controlled.",
      },
      {
        title: "Generate and charge on-site",
        text: "Assess solar, storage and EV charging against the property and commercial case.",
      },
    ],
    why: [
      {
        title: "Decisions based on data",
        text: "Recommendations begin with bills, contracts, interval data and how each store operates.",
      },
      {
        title: "Trading comes first",
        text: "Surveys, installation and shutdowns are planned around opening hours wherever possible.",
      },
      {
        title: "A clear financial case",
        text: "Costs, savings, payback, assumptions and property requirements are explained.",
      },
      {
        title: "Ongoing support",
        text: "Contracts and improvements stay under review as stores and trading needs change.",
      },
    ],
    faqs: [
      {
        question: "How can retail businesses reduce energy costs?",
        answer:
          "Improve both the price paid and the amount used through contract review, out-of-hours control, refrigeration, lighting, HVAC and suitable generation.",
      },
      {
        question: "Can SwitchZero manage contracts across multiple stores?",
        answer:
          "Yes. We can review use, end dates and arrangements across a portfolio, while still assessing whether each site needs a different supplier or structure.",
      },
      {
        question:
          "Are solar PV and battery storage suitable for retail properties?",
        answer:
          "They can be where roof, consent, structure, network position and daytime use support them. Storage still needs a defined data-led use case.",
      },
      {
        question: "Can retailers provide EV charging for customers?",
        answer:
          "Yes, where parking time and capacity allow. The case depends on use, electricity cost, payments, parking restrictions and customer experience.",
      },
    ],
    ctaTitle: "Start with your bills and trading data.",
    ctaText:
      "Share bills, end dates, trading hours, interval data, property arrangements and plans for expansion or charging. We will identify credible opportunities.",
    relevantServices: [
      "commercial-tariff-switching",
      "energy-management-systems",
      "efficiency-upgrades",
      "commercial-solar-pv",
      "commercial-ev-charging",
    ],
  },
  "hospitality-hotels": {
    heroTitle: "Reduce running costs without affecting your guests.",
    statementTitle: "The costs behind every guest stay.",
    statement: [
      "Hospitality businesses use electricity and gas across kitchens, refrigeration, heating, cooling, hot water, laundry, lighting, ventilation and guest facilities. Long hours and changing occupancy make those costs difficult to control.",
      "We analyse contracts, half-hourly use, occupancy, opening hours and major equipment before building one plan across procurement, consumption and generation.",
    ],
    challenges: [
      {
        title: "Seasonal and variable consumption",
        text: "Occupancy, events, weather and trading can change consumption sharply, so contracts and forecasts must reflect genuine operation.",
      },
      {
        title: "Heating, hot water and equipment baseload",
        text: "Refrigeration, kitchens, laundry, ventilation, heating and hot water can remain significant even when demand is lower.",
      },
      {
        title: "Guest comfort and building constraints",
        text: "Comfort and safe food storage must be protected, while older, leased or listed properties can restrict improvements.",
      },
    ],
    solutions: [
      {
        title: "Commercial energy procurement",
        text: "Compare electricity and gas contracts using consumption, dates, seasonal demand and future plans.",
      },
      {
        title: "Monitoring and efficiency",
        text: "Identify avoidable use across HVAC, hot water, kitchens, refrigeration, laundry, lighting and controls.",
      },
      {
        title: "Solar PV, storage and EV charging",
        text: "Assess generation, storage and charging against space, capacity, guest demand and expected return.",
      },
    ],
    process: [
      {
        title: "Understand the business",
        text: "Collect bills, contracts, interval data, hours, occupancy, equipment and planned improvements.",
      },
      {
        title: "Set the priorities",
        text: "Assess exposure, baseload, heat and hot water, equipment, generation and efficiency.",
      },
      {
        title: "Deliver and review",
        text: "Coordinate work around bookings, service and events, then review as the business changes.",
      },
    ],
    approachTitle: "Buy better. Run smarter. Protect the guest experience.",
    approachIntro:
      "A lower unit rate will not correct unnecessary heating, refrigeration or ventilation. Solar will not suit every property and replacing working equipment does not always provide a worthwhile return.",
    approach: [
      {
        title: "Buy better",
        text: "Secure suitable contracts based on consumption, seasonality and commercial needs.",
      },
      {
        title: "Reduce avoidable consumption",
        text: "Find equipment and systems running longer or harder than required.",
      },
      {
        title: "Control comfort and hot water",
        text: "Improve controls while maintaining the standards guests expect.",
      },
      {
        title: "Generate and charge on-site",
        text: "Assess solar, batteries and guest charging against demand and the property.",
      },
    ],
    why: [
      {
        title: "Decisions based on data",
        text: "Recommendations begin with bills, contracts, interval use and how the property operates.",
      },
      {
        title: "Guests and trading come first",
        text: "Work and shutdowns are planned around bookings, events and service.",
      },
      {
        title: "A clear financial case",
        text: "Costs, savings, payback, assumptions and disruption are explained.",
      },
      {
        title: "Ongoing support",
        text: "Contracts and improvements stay under review as occupancy and equipment change.",
      },
    ],
    faqs: [
      {
        question: "How can hospitality businesses reduce energy costs?",
        answer:
          "Review both price and use, including contracts, heating, hot water, out-of-hours equipment, refrigeration and suitable on-site generation.",
      },
      {
        question:
          "Are solar PV and battery storage suitable for hospitality properties?",
        answer:
          "Possibly, subject to roof, ownership, planning, structure, network and actual demand. Storage should have a clear data-led case.",
      },
      {
        question: "Will improvements disrupt guests or trading?",
        answer:
          "Many can be completed around operations; larger connections or heating work may need access limits or planned shutdowns agreed around bookings.",
      },
      {
        question: "Can we install EV chargers for guests?",
        answer:
          "Yes. The right charger depends on parking time, use, payment arrangements and capacity; faster charging is not automatically better.",
      },
    ],
    ctaTitle: "Start with your bills and operating data.",
    ctaText:
      "Share bills, dates, opening hours, interval data, occupancy and information on kitchens, heating, hot water and planned charging.",
    relevantServices: [
      "commercial-energy-procurement",
      "business-gas",
      "energy-management-systems",
      "efficiency-upgrades",
      "commercial-ev-charging",
    ],
  },
  hotels: {
    heroTitle: "Control costs across every occupied and empty room.",
    statementTitle:
      "Hotel demand changes with occupancy, but substantial baseload remains.",
    statement: [
      "Hotels use electricity and gas around the clock across guest rooms, heating, cooling, hot water, kitchens, refrigeration, laundry, lighting, lifts and leisure facilities.",
      "We analyse contracts, consumption, occupancy and major building systems before creating one plan across procurement, controls, efficiency and on-site generation.",
    ],
    challenges: [
      {
        title: "Variable occupancy and seasonal demand",
        text: "Rooms, events, weather and seasonality change demand, so supply contracts and forecasts must reflect the whole year.",
      },
      {
        title: "Heating, hot water and continuous baseload",
        text: "Shared areas, kitchens, refrigeration, laundry, lifts, ventilation, pools and spas create demand even at low occupancy.",
      },
      {
        title: "Guest expectations and property constraints",
        text: "Comfort must be protected, while older, listed or leased properties can restrict what can be changed.",
      },
    ],
    solutions: [
      {
        title: "Commercial energy procurement",
        text: "Compare electricity and gas contracts using actual use, seasonality, dates and planned hotel changes.",
      },
      {
        title: "Monitoring, controls and efficiency",
        text: "Identify unnecessary use across bedrooms, shared areas, HVAC, hot water, kitchens, laundry and leisure.",
      },
      {
        title: "Solar PV, storage and EV charging",
        text: "Assess generation, storage and guest charging against space, capacity, demand and financial return.",
      },
    ],
    process: [
      {
        title: "Understand the property",
        text: "Collect bills, contracts, interval data, occupancy and details of bedrooms, kitchens, laundry, leisure and plant.",
      },
      {
        title: "Set the priorities",
        text: "Assess exposure, baseload, heat and hot water, equipment, generation and efficiency with costs shown.",
      },
      {
        title: "Deliver and review",
        text: "Coordinate work around bookings and busy periods, then review as occupancy changes.",
      },
    ],
    approachTitle:
      "Buy better. Match demand to occupancy. Invest where it pays.",
    approachIntro:
      "A lower unit rate will not correct heating empty areas or excess hot water. Solar will not suit every hotel and equipment replacement needs a worthwhile case.",
    approach: [
      {
        title: "Buy better",
        text: "Secure suitable contracts around consumption, seasonality and commercial requirements.",
      },
      {
        title: "Match consumption to occupancy",
        text: "Use occupancy data to improve HVAC, lighting and ventilation schedules.",
      },
      {
        title: "Improve plant and hot-water control",
        text: "Review boilers, heat pumps, cylinders and pumps before replacement.",
      },
      {
        title: "Generate and charge on-site",
        text: "Assess solar, storage and guest charging against demand and property constraints.",
      },
    ],
    why: [
      {
        title: "Decisions based on data",
        text: "Recommendations begin with bills, contracts, consumption and year-round operation.",
      },
      {
        title: "Guests and bookings come first",
        text: "Work and shutdowns are planned around bookings, events and busy periods.",
      },
      {
        title: "A clear financial case",
        text: "Costs, savings, payback, assumptions and disruption are explained.",
      },
      {
        title: "Ongoing support",
        text: "Contracts and improvements remain under review as occupancy and facilities change.",
      },
    ],
    faqs: [
      {
        question:
          "How can hotels reduce energy costs without affecting guests?",
        answer:
          "Improve both price and control through contract review, occupancy-based HVAC, hot-water controls, lower overnight baseload and justified equipment upgrades.",
      },
      {
        question: "Is solar PV suitable for hotels?",
        answer:
          "It can be where roof or land, ownership, planning, structure, network and daytime demand support the design.",
      },
      {
        question: "Can battery storage reduce hotel electricity costs?",
        answer:
          "Potentially, where it has a defined purpose such as solar retention, tariff shifting or short-peak management and the interval data supports it.",
      },
      {
        question: "Are EV chargers worthwhile for hotel guests?",
        answer:
          "They can be, especially for overnight stays. Number and speed depend on use, parking, payment and available capacity; rapid chargers are rarely necessary for overnight guests.",
      },
    ],
    ctaTitle: "Start with your bills and occupancy data.",
    ctaText:
      "Share bills, dates, occupancy, interval data and information on bedrooms, kitchens, laundry, heating, hot water, leisure and planned charging.",
    relevantServices: [
      "commercial-energy-procurement",
      "business-gas",
      "energy-management-systems",
      "efficiency-upgrades",
      "commercial-ev-charging",
    ],
  },
  "offices-commercial-property": {
    heroTitle: "Reduce building costs around how the office is actually used.",
    statementTitle: "The costs behind every working day.",
    statement: [
      "Office buildings use electricity and gas across heating, cooling, ventilation, lighting, lifts, IT, server rooms, kitchens, hot water, security and EV charging. Hybrid working makes costs harder to control when systems still run for a workforce that is not there every day.",
      "We analyse contracts, half-hourly use, occupancy and building systems before creating one plan across procurement, controls, efficiency and on-site generation, with occupier, landlord and owner responsibilities made clear.",
    ],
    challenges: [
      {
        title: "Hybrid working and changing occupancy",
        text: "Heating, cooling, lighting and ventilation can continue as though every floor were occupied.",
      },
      {
        title: "Continuous baseload and demand peaks",
        text: "Server rooms, IT, lifts, security, kitchens and overnight equipment create baseload, while HVAC and EV charging can add peaks.",
      },
      {
        title: "Landlord, tenant and portfolio complexity",
        text: "Leases, service charges, shared supplies, landlord duties and different renewal dates complicate decisions across a portfolio.",
      },
    ],
    solutions: [
      {
        title: "Commercial energy procurement",
        text: "Compare electricity and gas contracts across individual offices or the full portfolio using actual consumption, dates and expected occupancy.",
      },
      {
        title: "Monitoring, controls and efficiency",
        text: "Identify unnecessary use across HVAC, lighting, IT, kitchens, hot water and equipment outside occupied hours.",
      },
      {
        title: "Solar PV, storage and EV charging",
        text: "Assess generation, storage and workplace charging against space, capacity, parking, property duties and expected return.",
      },
    ],
    process: [
      {
        title: "Understand the building",
        text: "Collect bills, contracts, interval data, occupancy and details of HVAC, lighting and electrical equipment.",
      },
      {
        title: "Set the priorities",
        text: "Assess exposure, overnight baseload, controls, peaks, generation and efficiency with costs and savings shown.",
      },
      {
        title: "Deliver and review",
        text: "Coordinate work around working hours, tenant needs and access, then review as occupancy changes.",
      },
    ],
    approachTitle:
      "Buy better. Match consumption to occupancy. Invest where it pays.",
    approachIntro:
      "A lower unit rate will not correct an office heating, cooling or lighting unused space. Solar will not suit every leased property and replacing working equipment must have a justified return.",
    approach: [
      {
        title: "Buy better",
        text: "Secure suitable contracts around consumption, renewal timing and portfolio requirements.",
      },
      {
        title: "Match consumption to occupancy",
        text: "Adjust heating, cooling, ventilation and lighting to genuine building use.",
      },
      {
        title: "Reduce continuous baseload",
        text: "Find IT, server cooling, kitchens, hot water and other overnight loads.",
      },
      {
        title: "Generate and charge on-site",
        text: "Assess solar, storage and workplace charging against property and demand.",
      },
    ],
    why: [
      {
        title: "Decisions based on data",
        text: "Recommendations begin with bills, contracts, consumption and actual occupancy.",
      },
      {
        title: "Occupants and operations come first",
        text: "Work and shutdowns are planned around working hours, tenants and access.",
      },
      {
        title: "A clear financial case",
        text: "Costs, savings, payback, assumptions and landlord requirements are explained.",
      },
      {
        title: "Ongoing support",
        text: "Contracts and improvements remain under review as occupancy and property needs change.",
      },
    ],
    faqs: [
      {
        question: "How can offices reduce energy costs?",
        answer:
          "Review supply contracts, match HVAC to occupancy, reduce overnight baseload, improve lighting controls and assess suitable on-site generation.",
      },
      {
        question: "Can SwitchZero manage contracts across multiple offices?",
        answer:
          "Yes. We can review meters, use, dates and supply arrangements across a portfolio while assessing each location's operating and lease position.",
      },
      {
        question: "Can improvements be made in a leased office?",
        answer:
          "Potentially. The lease determines responsibility and permission. Landlord consent may be needed, and the funding party should understand who receives the benefit.",
      },
      {
        question: "Are solar PV and battery storage suitable for offices?",
        answer:
          "Possibly, subject to ownership, roof condition, structure, network and actual daytime demand. Storage still needs a defined operating and financial case.",
      },
    ],
    ctaTitle: "Start with your bills and occupancy data.",
    ctaText:
      "Share bills, dates, working hours, interval data, occupancy, landlord arrangements and plans for refurbishment, electrification or charging.",
    relevantServices: [
      "commercial-energy-procurement",
      "energy-management-systems",
      "efficiency-upgrades",
      "commercial-solar-pv",
      "commercial-ev-charging",
    ],
  },
  healthcare: {
    heroTitle: "Control energy costs without compromising care.",
    statementTitle: "The costs behind continuous care.",
    statement: [
      "Healthcare premises use electricity and gas across HVAC, hot water, lighting, sterilisation, refrigeration, laundry, IT, clinical equipment and vehicle charging. Many services must remain available regardless of occupancy or opening hours.",
      "We analyse contracts, half-hourly use, essential loads and building systems before creating one plan across procurement, controls, efficiency and generation while protecting patient care and compliance.",
    ],
    challenges: [
      {
        title: "Continuous and essential demand",
        text: "Clinical equipment, refrigeration, IT, security, ventilation and other services create substantial baseload even during quieter periods.",
      },
      {
        title: "Heating, hot water and ventilation",
        text: "Comfort, hygiene and infection-control requirements can make HVAC and hot water major loads.",
      },
      {
        title: "Resilience and building constraints",
        text: "Older buildings, limited capacity, landlord duties and essential services restrict when and how improvements can be completed.",
      },
    ],
    solutions: [
      {
        title: "Commercial energy procurement",
        text: "Compare contracts using actual consumption, dates, operating requirements and expected organisational changes.",
      },
      {
        title: "Monitoring and efficiency",
        text: "Identify avoidable use across HVAC, hot water, lighting, refrigeration, laundry, IT and equipment outside required hours.",
      },
      {
        title: "Solar PV, storage and EV charging",
        text: "Assess generation, storage and charging against space, capacity, critical loads and financial return.",
      },
    ],
    process: [
      {
        title: "Understand the site",
        text: "Collect bills, contracts, interval data, hours and details of clinical equipment, systems and essential loads.",
      },
      {
        title: "Set the priorities",
        text: "Assess exposure, baseload, peaks, controls, generation and efficiency with costs and savings explained.",
      },
      {
        title: "Deliver and review",
        text: "Coordinate work around patients, staff and clinical schedules, then review as requirements change.",
      },
    ],
    approachTitle: "Buy better. Reduce waste. Protect essential services.",
    approachIntro:
      "A lower unit rate will not correct unnecessary HVAC or equipment use. Solar will not suit every healthcare property, and a standard commercial battery is not automatically compliant emergency power.",
    approach: [
      {
        title: "Buy better",
        text: "Secure suitable contracts based on consumption, timing and operational needs.",
      },
      {
        title: "Reduce avoidable baseload",
        text: "Find equipment and systems running when not required for care or operation.",
      },
      {
        title: "Improve building control",
        text: "Review HVAC, lighting and hot-water controls while maintaining required conditions.",
      },
      {
        title: "Generate on-site",
        text: "Assess solar and storage against daytime demand, infrastructure, network and the commercial case.",
      },
    ],
    why: [
      {
        title: "Decisions based on data",
        text: "Recommendations begin with bills, contracts, consumption and actual operation.",
      },
      {
        title: "Patient care comes first",
        text: "Work and shutdowns are planned around clinical activity and essential services.",
      },
      {
        title: "A clear financial case",
        text: "Costs, savings, payback, assumptions and disruption are explained.",
      },
      {
        title: "Ongoing support",
        text: "Contracts and improvements remain under review as facilities and equipment change.",
      },
    ],
    faqs: [
      {
        question: "How can healthcare organisations reduce energy costs?",
        answer:
          "Review price and control together: contracts, baseload, HVAC, demand peaks and suitable on-site generation.",
      },
      {
        question: "Can work be completed without disrupting patient care?",
        answer:
          "Many surveys and smaller measures can fit around normal operations. Work affecting essential systems must be planned with facilities, clinical and technical teams.",
      },
      {
        question: "Is solar PV suitable for healthcare buildings?",
        answer:
          "It can be where roof or land, ownership, structure, planning, network and consistent daytime demand support it.",
      },
      {
        question: "Can battery storage provide emergency backup power?",
        answer:
          "Not automatically. A standard battery may reduce cost or retain solar but resilience must be specifically designed around critical loads, switching and required run time.",
      },
    ],
    ctaTitle: "Start with your bills and site data.",
    ctaText:
      "Share bills, dates, hours, interval data, essential equipment, HVAC, hot water and planned refurbishment, electrification or charging.",
    relevantServices: [
      "commercial-energy-procurement",
      "business-gas",
      "energy-management-systems",
      "efficiency-upgrades",
      "commercial-solar-pv",
    ],
  },
  education: {
    heroTitle: "Make more of every energy budget.",
    statementTitle: "The costs across every building.",
    statement: [
      "Education buildings use electricity and gas across heating, hot water, ventilation, lighting, kitchens, IT, laboratories, workshops, sports facilities, security and vehicle charging.",
      "We analyse contracts, half-hourly use, term dates, operating hours and building systems before creating one plan across procurement, heating, efficiency and on-site generation while maintaining safe learning environments.",
    ],
    challenges: [
      {
        title: "Term-time and out-of-hours consumption",
        text: "HVAC, kitchens, IT and sports facilities can continue through evenings, weekends and holidays when buildings are partly occupied.",
      },
      {
        title: "Ageing buildings and equipment",
        text: "Older boilers, limited controls, poor insulation and mixed-age estates make consumption difficult to manage.",
      },
      {
        title: "Budgets, governance and estate constraints",
        text: "Procurement rules, approvals, limited capital, roof condition and planned work affect what can be delivered and when.",
      },
    ],
    solutions: [
      {
        title: "Commercial energy procurement",
        text: "Review contracts across individual buildings or the estate, considering consumption, renewals, budgets and procurement rules.",
      },
      {
        title: "Monitoring, heating and efficiency",
        text: "Identify avoidable use across HVAC, hot water, lighting, kitchens, IT, laboratories, workshops and sport.",
      },
      {
        title: "Solar PV, storage and EV charging",
        text: "Assess generation, storage and charging against roof or land, term-time demand, capacity and financial return.",
      },
    ],
    process: [
      {
        title: "Understand the estate",
        text: "Collect bills, contracts, interval data, term dates, hours and details of buildings, equipment and planned work.",
      },
      {
        title: "Set the priorities",
        text: "Assess exposure, out-of-hours baseload, heating controls, peaks, generation and efficiency with costs shown.",
      },
      {
        title: "Deliver and review",
        text: "Coordinate work around teaching, examinations and holidays, then review as the estate changes.",
      },
    ],
    approachTitle: "Buy better. Reduce waste. Plan around the estate.",
    approachIntro:
      "A lower unit rate will not correct heating empty classrooms or equipment running through holidays. A large school roof does not automatically make solar worthwhile where summer use is low.",
    approach: [
      {
        title: "Buy better",
        text: "Secure suitable contracts around use, renewals, budgets and procurement duties.",
      },
      {
        title: "Match consumption to building use",
        text: "Adjust HVAC, lighting and hot water to teaching, administration and community-use hours.",
      },
      {
        title: "Reduce out-of-hours baseload",
        text: "Find equipment and systems using energy unnecessarily during evenings, weekends and holidays.",
      },
      {
        title: "Generate on-site",
        text: "Assess solar and storage against term-time demand, summer use, roof condition and network limits.",
      },
    ],
    why: [
      {
        title: "Decisions based on data",
        text: "Recommendations begin with bills, contracts, consumption and how each building is used.",
      },
      {
        title: "Education comes first",
        text: "Work and shutdowns are planned around pupils, staff, exams and safeguarding.",
      },
      {
        title: "A clear financial case",
        text: "Costs, savings, payback, assumptions and maintenance duties are explained.",
      },
      {
        title: "Ongoing support",
        text: "Contracts and improvements remain under review as buildings and needs change.",
      },
    ],
    faqs: [
      {
        question: "How can schools and colleges reduce energy costs?",
        answer:
          "Review contracts, reduce holiday and overnight baseload, improve heating controls, manage peaks and assess suitable generation.",
      },
      {
        question: "Is solar PV suitable for education buildings?",
        answer:
          "It can be, but roof condition, structure, planning, network and lower summer-holiday consumption determine the right size.",
      },
      {
        question: "Can installation work be completed during holidays?",
        answer:
          "Often, but surveys, procurement, permissions, network applications and lead times must start early. Term-time work must meet access and safeguarding rules.",
      },
      {
        question: "Is funding available for improvements?",
        answer:
          "Grant and finance routes may exist depending on organisation, location, technology and timing. Eligibility must be confirmed before funding enters the business case.",
      },
    ],
    ctaTitle: "Start with your bills and estate data.",
    ctaText:
      "Share bills, dates, term dates, interval data, buildings, heating and planned maintenance, refurbishment or expansion.",
    relevantServices: [
      "commercial-energy-procurement",
      "business-gas",
      "efficiency-upgrades",
      "commercial-solar-pv",
      "funding-and-asset-finance",
    ],
  },
  agriculture: {
    heroTitle: "Control energy costs across every season.",
    statementTitle: "The costs behind every production cycle.",
    statement: [
      "Agricultural businesses use electricity across milking, cooling, refrigeration, ventilation, lighting, pumping, irrigation, grain drying, processing, workshops and storage. Demand can change with season, weather and production.",
      "We analyse contracts, half-hourly use, production schedules, equipment and site infrastructure before creating one plan across procurement, efficiency and generation without disrupting livestock welfare or essential operations.",
    ],
    challenges: [
      {
        title: "Seasonal and variable demand",
        text: "Drying, irrigation, storage, ventilation, heating and refrigeration can cause sharp seasonal peaks that forecasts must reflect.",
      },
      {
        title: "Continuous and essential equipment",
        text: "Milk cooling, refrigeration, pumps, ventilation, lighting and livestock systems may run continuously; poor controls add avoidable cost.",
      },
      {
        title: "Rural infrastructure and building constraints",
        text: "Limited capacity, separate supplies, ageing infrastructure and fragile or asbestos roofs can restrict projects and electrification.",
      },
    ],
    solutions: [
      {
        title: "Commercial energy procurement",
        text: "Compare electricity and mains gas contracts using actual use, dates, seasonal requirements and planned changes.",
      },
      {
        title: "Monitoring and efficiency",
        text: "Identify avoidable use across refrigeration, cooling, ventilation, pumps, irrigation, lighting, heating and drying.",
      },
      {
        title: "Solar PV and battery storage",
        text: "Assess roof- or ground-mounted generation and storage against consumption, condition, network and return.",
      },
    ],
    process: [
      {
        title: "Understand the operation",
        text: "Collect bills, contracts, interval data, seasonal patterns, equipment, buildings and planned changes.",
      },
      {
        title: "Set the priorities",
        text: "Assess exposure, baseload, seasonal peaks, equipment, generation and capacity with costs shown.",
      },
      {
        title: "Deliver and review",
        text: "Coordinate work around production and review performance as the business changes.",
      },
    ],
    approachTitle: "Buy better. Reduce waste. Use the site properly.",
    approachIntro:
      "A lower unit rate will not correct inefficient cooling, pumping or ventilation. A large roof does not guarantee a solar case and storage needs a defined purpose.",
    approach: [
      {
        title: "Buy better",
        text: "Secure suitable electricity and mains gas contracts around use, seasonality and timing.",
      },
      {
        title: "Control essential loads",
        text: "Review cooling, refrigeration, pumps, fans and lighting without compromising production or welfare.",
      },
      {
        title: "Plan around seasonal demand",
        text: "Understand peaks and whether loads can be controlled or moved safely.",
      },
      {
        title: "Generate on-site",
        text: "Assess solar and storage against demand, land or roof, network and the commercial case.",
      },
    ],
    why: [
      {
        title: "Decisions based on data",
        text: "Recommendations begin with bills, contracts, consumption and year-round operation.",
      },
      {
        title: "Farm operations come first",
        text: "Work and shutdowns are planned around livestock, harvest, storage and production.",
      },
      {
        title: "A clear financial case",
        text: "Costs, savings, payback, assumptions and network costs are explained.",
      },
      {
        title: "Ongoing support",
        text: "Contracts and improvements remain under review as equipment and seasons change.",
      },
    ],
    faqs: [
      {
        question: "How can agricultural businesses reduce energy costs?",
        answer:
          "Review contracts and equipment together, including baseload, refrigeration, ventilation, seasonal demand and suitable on-site generation.",
      },
      {
        question: "Is solar PV suitable for farms and agricultural buildings?",
        answer:
          "It can be, but the design must reflect on-site use plus roof condition, structure, asbestos, shading, planning and network constraints.",
      },
      {
        question: "Can battery storage help an agricultural business?",
        answer:
          "Potentially, where it retains solar, shifts tariff periods or manages short peaks and the half-hourly data supports the design.",
      },
      {
        question:
          "Can one solar system supply several farm buildings or meters?",
        answer:
          "Only where infrastructure allows. Solar behind one meter does not reduce bills on separate meters without a technically, legally and financially assessed private-wire or consolidation arrangement.",
      },
    ],
    ctaTitle: "Start with your bills and site data.",
    ctaText:
      "Share bills, dates, seasonal patterns, interval data, equipment, buildings, roof or land and planned expansion or electrification.",
    relevantServices: [
      "commercial-energy-procurement",
      "energy-management-systems",
      "efficiency-upgrades",
      "commercial-solar-pv",
      "battery-storage",
    ],
  },
  "public-sector": {
    heroTitle:
      "Reduce costs across the estate without disrupting public services.",
    statementTitle: "The costs across a complex estate.",
    statement: [
      "Public estates use electricity and gas across civic offices, depots, libraries, leisure centres, emergency-service facilities, cultural venues and community buildings. Different services, contract dates and building conditions make portfolio control difficult.",
      "We analyse contracts, half-hourly use, building operation and infrastructure before creating one evidence-led plan across procurement, efficiency, generation, storage and electrification within budget and governance requirements.",
    ],
    challenges: [
      {
        title: "Multiple buildings, meters and contracts",
        text: "Large estates can contain many supplies, suppliers, dates, meter types and usage patterns; without a portfolio view, decisions become rushed.",
      },
      {
        title: "Ageing buildings and infrastructure",
        text: "Older heating, limited controls, poor fabric and restricted capacity increase consumption and complicate improvement work.",
      },
      {
        title: "Budgets, governance and procurement",
        text: "Business cases compete for funding and must pass approvals while protecting ownership, maintenance and service continuity.",
      },
    ],
    solutions: [
      {
        title: "Commercial energy procurement",
        text: "Review contracts across buildings or the portfolio against consumption, dates, budgets and the applicable procurement route.",
      },
      {
        title: "Monitoring and efficiency",
        text: "Identify avoidable use across HVAC, hot water, lighting, IT, depots, leisure facilities and out-of-hours equipment.",
      },
      {
        title: "Solar PV, storage and electrification",
        text: "Assess generation, storage, electric heat and charging against building condition, capacity, consumption and return.",
      },
    ],
    process: [
      {
        title: "Understand the estate",
        text: "Collect bills, contracts, interval data, hours and information on significant buildings, equipment and planned work.",
      },
      {
        title: "Prioritise the opportunities",
        text: "Assess exposure, baseload, peaks, controls, generation and project readiness, including costs, risks and delivery.",
      },
      {
        title: "Support delivery and review",
        text: "Work around public services, access and governance, then review performance as the estate changes.",
      },
    ],
    approachTitle: "Buy better. Reduce waste. Invest with evidence.",
    approachIntro:
      "A lower unit rate will not correct poorly controlled buildings. A carbon target does not make every proposed project financially or technically suitable.",
    approach: [
      {
        title: "Plan procurement properly",
        text: "Review dates, consumption and portfolio needs early enough to avoid rushed decisions.",
      },
      {
        title: "Reduce avoidable consumption",
        text: "Find buildings, controls and equipment using more energy than public services require.",
      },
      {
        title: "Prioritise deliverable projects",
        text: "Rank work by saving, capital cost, payback, carbon, readiness and operational risk.",
      },
      {
        title: "Coordinate investment",
        text: "Align work with maintenance, refurbishment, vehicle replacement and estate plans.",
      },
    ],
    why: [
      {
        title: "Decisions based on evidence",
        text: "Recommendations begin with contracts, bills, interval data and genuine building use.",
      },
      {
        title: "Transparent business cases",
        text: "Costs, savings, assumptions, risks and delivery requirements are clear for internal approval.",
      },
      {
        title: "Public services come first",
        text: "Work and shutdowns are planned around staff, visitors and essential services.",
      },
      {
        title: "Ongoing support",
        text: "Contracts and improvements remain under review as budgets and service needs change.",
      },
    ],
    faqs: [
      {
        question: "How can public-sector organisations reduce energy costs?",
        answer:
          "Combine better procurement with tighter control of buildings and equipment, including out-of-hours use, HVAC, lighting, demand and suitable generation.",
      },
      {
        question: "Can SwitchZero support a compliant procurement process?",
        answer:
          "We can support data, option appraisal, technical requirements, commercial comparisons and business-case evidence. The organisation's procurement and legal teams determine the appointment and award route.",
      },
      {
        question: "How should projects be prioritised across a large estate?",
        answer:
          "Assess sites consistently against use, condition, maintenance, savings, capital and constraints, separating immediate actions from projects needing surveys, networks, funding or formal procurement.",
      },
      {
        question: "Is funding available for public-sector improvements?",
        answer:
          "Grant, finance and delivery routes may exist depending on organisation, location, technology and timing. Funding must be formally confirmed before entering the financial case.",
      },
    ],
    ctaTitle: "Start with your contracts and estate data.",
    ctaText:
      "Share bills, dates, operating information, interval data and planned maintenance, refurbishment, fleet electrification and carbon priorities.",
    relevantServices: [
      "commercial-energy-procurement",
      "energy-management-systems",
      "efficiency-upgrades",
      "commercial-solar-pv",
      "funding-and-asset-finance",
    ],
  },
};
