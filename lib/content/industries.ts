import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary:
      "High process loads, shift patterns and production risk make timing, capacity and data especially important.",
    heroImage: "/assets/hero-industry-manufacturing.webp",
    pattern:
      "Baseload and process demand can remain high across long operating windows, with shutdowns and production changes materially affecting forecasts.",
    priorities: [
      "Half-hourly load analysis",
      "Contract volume tolerance",
      "Maximum demand and capacity",
      "Production continuity",
    ],
    opportunities: [
      "Procurement planning",
      "Process and controls review",
      "Rooftop or ground-mounted solar",
      "Storage where load shape supports it",
    ],
  },
  {
    slug: "warehousing-logistics",
    title: "Warehousing & Logistics",
    summary:
      "Large roofs, vehicle movements, refrigeration and extended operating hours create a distinctive mix of opportunities.",
    heroImage: "/assets/hero-industry-warehousing-logistics.webp",
    pattern:
      "Demand may combine lighting, materials handling, refrigeration, offices and growing fleet-charging requirements across long daily schedules.",
    priorities: [
      "Multi-site portfolio control",
      "Lighting and operating schedules",
      "Fleet charging capacity",
      "Roof and grid assessment",
    ],
    opportunities: [
      "Portfolio procurement",
      "Commercial solar PV",
      "Load-managed EV charging",
      "Monitoring across depots",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    summary:
      "Trading hours, refrigeration, lighting and distributed estates call for simple portfolio visibility and disciplined renewals.",
    heroImage: "/assets/hero-industry-retail.webp",
    pattern:
      "Consumption often follows store opening hours but refrigeration, security and background loads continue overnight.",
    priorities: [
      "Meter and landlord clarity",
      "Common renewal dates",
      "Out-of-hours consumption",
      "Trading continuity",
    ],
    opportunities: [
      "Multi-meter procurement",
      "Controls and lighting",
      "Sub-metering",
      "Solar on suitable larger stores",
    ],
  },
  {
    slug: "hospitality-hotels",
    title: "Hospitality",
    summary:
      "Guest comfort and year-round heat, hot water, catering and laundry loads leave little room for blunt cost-cutting.",
    heroImage: "/assets/hero-industry-hospitality.webp",
    pattern:
      "Electricity and gas demand can vary by occupancy, season and event schedule while essential services remain live around the clock.",
    priorities: [
      "Electricity and gas bought together",
      "Seasonal consumption",
      "Guest-impact risk",
      "Controls and plant schedules",
    ],
    opportunities: [
      "Procurement planning",
      "Building controls",
      "Solar for daytime loads",
      "Monitoring by service area",
    ],
  },
  {
    slug: "hotels",
    title: "Hotels",
    summary:
      "Round-the-clock guest, hot-water, kitchen, laundry, lift and leisure loads need to be matched carefully to occupancy.",
    heroImage: "/assets/hero-industry-hotels.webp",
    pattern:
      "Occupancy changes with season and events, but shared areas, heating, hot water, refrigeration, laundry and leisure facilities create a substantial continuous baseload.",
    priorities: [
      "Occupancy and seasonal demand",
      "Heating and hot-water controls",
      "Continuous baseload",
      "Guest comfort and booking schedules",
    ],
    opportunities: [
      "Electricity and gas procurement",
      "Energy monitoring and controls",
      "Commercial solar PV",
      "Guest EV charging",
    ],
  },
  {
    slug: "offices-commercial-property",
    title: "Offices & Commercial Property",
    summary:
      "Landlord, tenant and managing-agent responsibilities must be clear before procurement or building improvements begin.",
    heroImage: "/assets/hero-industry-offices-commercial-property.webp",
    pattern:
      "Demand is commonly daytime-led, but shared services, common areas, leases and vacant space complicate who pays and who benefits.",
    priorities: [
      "Landlord and tenant responsibilities",
      "Service-charge transparency",
      "Common-area metering",
      "Lease and roof considerations",
    ],
    opportunities: [
      "Portfolio procurement",
      "Controls and HVAC review",
      "Rooftop solar",
      "Tenant-facing performance reporting",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary:
      "Essential clinical, ventilation, hot-water and equipment loads must be managed without compromising patient care or compliance.",
    heroImage: "/assets/hero-industry-healthcare.webp",
    pattern:
      "Clinical equipment, refrigeration, IT, security, ventilation, heating and hot water can create continuous demand regardless of occupancy or opening hours.",
    priorities: [
      "Essential-load protection",
      "Heating, hot water and ventilation",
      "Operational resilience",
      "Clinical access and shutdown planning",
    ],
    opportunities: [
      "Commercial energy procurement",
      "Energy monitoring and efficiency",
      "Commercial solar PV",
      "Battery storage assessment",
    ],
  },
  {
    slug: "education",
    title: "Education",
    summary:
      "Term dates, mixed-age buildings, governance and limited budgets all shape the right energy plan for an education estate.",
    heroImage: "/assets/hero-industry-education.webp",
    pattern:
      "Heating, lighting, ventilation, kitchens, IT, laboratories and sports facilities can continue during evenings, weekends and holidays when buildings are only partly occupied.",
    priorities: [
      "Term-time and holiday demand",
      "Heating and building controls",
      "Procurement and governance",
      "Safeguarding and works scheduling",
    ],
    opportunities: [
      "Portfolio energy procurement",
      "Efficiency upgrades",
      "Commercial solar PV",
      "Grant funding and finance",
    ],
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    summary:
      "Seasonal production, essential equipment and rural network constraints require contracts and projects built around the whole operating cycle.",
    heroImage: "/assets/hero-industry-agriculture.webp",
    pattern:
      "Milking, cooling, refrigeration, ventilation, pumping, irrigation, grain drying and storage can create sharp seasonal changes and continuous essential loads.",
    priorities: [
      "Seasonal demand forecasting",
      "Essential equipment control",
      "Rural network capacity",
      "Separate buildings and meters",
    ],
    opportunities: [
      "Commercial energy procurement",
      "Monitoring and efficiency",
      "Roof or ground-mounted solar",
      "Battery storage assessment",
    ],
  },
  {
    slug: "public-sector",
    title: "Public Sector",
    summary:
      "Complex estates need evidence-led procurement and investment that fits budgets, governance and the continuity of public services.",
    heroImage: "/assets/hero-industry-public-sector.webp",
    pattern:
      "Civic offices, depots, libraries, leisure centres, emergency facilities and community buildings have different hours, systems, meters and contract dates across one estate.",
    priorities: [
      "Estate-wide supply visibility",
      "Procurement compliance",
      "Ageing buildings and infrastructure",
      "Transparent business cases",
    ],
    opportunities: [
      "Commercial energy procurement",
      "Monitoring and efficiency",
      "Solar PV and storage",
      "Funding and electrification planning",
    ],
  },
];
