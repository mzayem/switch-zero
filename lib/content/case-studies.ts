export const caseStudies = [
  {
    sector: "Manufacturing",
    title: "Half-hourly electricity procurement",
    label: "35.4% lower unit-cost spend",
    image: "/assets/case-detail-manufacturing-procurement.webp",
    summary:
      "This cost comparison uses a 24-hour manufacturing site consuming 480,000 kWh a year, with a renewal position of 31.40p/kWh and a new fixed rate of 20.30p/kWh.",
    metrics: [
      ["Annual electricity use", "480,000 kWh"],
      ["Previous unit rate", "31.40p/kWh"],
      ["New unit rate", "20.30p/kWh"],
      ["Annual saving", "£53,280"],
      ["Percentage reduction", "35.4%"],
      ["Three-year value", "£159,840"],
    ],
    calculation: [
      ["Previous annual energy charge", "480,000 kWh × £0.314 = £150,720"],
      ["New annual energy charge", "480,000 kWh × £0.203 = £97,440"],
      ["Annual difference", "£150,720 − £97,440 = £53,280"],
    ],
    outcome:
      "The 11.10p/kWh rate difference reduces the annual unit-cost spend by £53,280. Across a three-year contract, the like-for-like difference is £159,840.",
  },
  {
    sector: "Warehousing & logistics",
    title: "Commercial solar matched to daytime demand",
    label: "£28,193 first-year benefit",
    image: "/assets/case-detail-warehousing-solar-assessment.webp",
    summary:
      "This solar assessment uses a distribution warehouse consuming 310,000 kWh a year and a 140 kWp rooftop system, measured against a 25.80p/kWh imported electricity rate.",
    metrics: [
      ["Annual electricity use", "310,000 kWh"],
      ["Solar system", "140 kWp"],
      ["Annual generation", "119,000 kWh"],
      ["Used on site", "106,000 kWh"],
      ["Grid demand reduced", "34.2%"],
      ["First-year benefit", "£28,193"],
    ],
    calculation: [
      ["Avoided imported electricity", "106,000 kWh × £0.258 = £27,348"],
      ["Export income", "13,000 kWh × £0.065 = £845"],
      ["Total first-year benefit", "£27,348 + £845 = £28,193"],
    ],
    outcome:
      "Using 106,000 kWh of solar power on site cuts imported electricity by 34.2%. Avoided import cost and export income together equal 35.3% of the site's previous annual unit-cost spend.",
  },
  {
    sector: "Hospitality",
    title: "Combined gas and electricity renewal",
    label: "34.7% lower energy charge",
    image: "/assets/case-detail-hospitality-renewal.webp",
    summary:
      "This combined renewal review uses a hotel consuming 190,000 kWh of electricity and 520,000 kWh of gas each year, with both contracts reviewed together.",
    metrics: [
      ["Electricity use", "190,000 kWh"],
      ["Gas use", "520,000 kWh"],
      ["Previous annual cost", "£97,470"],
      ["New annual cost", "£63,670"],
      ["Annual saving", "£33,800"],
      ["Percentage reduction", "34.7%"],
    ],
    calculation: [
      ["Electricity", "30.50p to 20.10p/kWh = £19,760 annual saving"],
      ["Gas", "7.60p to 4.90p/kWh = £14,040 annual saving"],
      ["Combined annual difference", "£19,760 + £14,040 = £33,800"],
    ],
    outcome:
      "Reviewing both fuels against the same renewal timetable produces a £33,800 annual difference. If those rates remained fixed for three years, the energy-charge difference would total £101,400.",
  },
];
