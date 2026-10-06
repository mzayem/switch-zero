export const categories = [
  "Hospitality",
  "Retail",
  "Manufacturing & workshops",
  "Garages & automotive",
  "Offices & professional services",
  "Farming & agriculture",
  "Care & education",
  "Other",
] as const;
export type Category = (typeof categories)[number];

export const businessTypes = [
  "Hotel",
  "Pub / bar",
  "Restaurant / café",
  "Takeaway",
  "Hospitality",
  "Shop / retail",
  "Salon / beauty",
  "Manufacturing / workshop",
  "Warehouse",
  "Garage / automotive",
  "Office / professional services",
  "Farm / agriculture",
  "Care home / healthcare",
  "School / education",
  "Care & education",
  "Other",
] as const;
export type BusinessType = (typeof businessTypes)[number];

export type CompanyMatch = {
  number: string;
  name: string;
  address: string;
  postcode: string;
  status: string;
  incorporated: string;
};

export type CompanyDetails = CompanyMatch & {
  type: string;
  dissolved: string;
  sicCodes: string[];
  businessType: BusinessType;
  nextAccountsDue: string;
  link: string;
};

export const spendBands = [
  "Under £500",
  "£500–£1,000",
  "£1,000–£2,500",
  "£2,500–£5,000",
  "£5,000–£10,000",
  "£10,000+",
  "Not sure",
];

export const renewals = [
  "Expired / no contract",
  "Within 3 months",
  "3–6 months",
  "6–12 months",
  "12–18 months",
  "Over 18 months",
  "Not sure",
];

export function normalisePostcode(value: string) {
  const compact = value.toUpperCase().replace(/\s/g, "");
  return compact.length > 3
    ? compact.slice(0, -3) + " " + compact.slice(-3)
    : compact;
}

export function validPostcode(value: string) {
  return /^(GIR 0AA|[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2})$/.test(
    normalisePostcode(value),
  );
}

export function defaultBusinessType(category: Category): BusinessType {
  const defaults: Record<Category, BusinessType> = {
    Hospitality: "Hospitality",
    Retail: "Shop / retail",
    "Manufacturing & workshops": "Manufacturing / workshop",
    "Garages & automotive": "Garage / automotive",
    "Offices & professional services": "Office / professional services",
    "Farming & agriculture": "Farm / agriculture",
    "Care & education": "Care & education",
    Other: "Other",
  };
  return defaults[category];
}

export function categoryForBusinessType(type: BusinessType): Category {
  if (["Hotel", "Pub / bar", "Restaurant / café", "Takeaway", "Hospitality"].includes(type))
    return "Hospitality";
  if (["Shop / retail", "Salon / beauty"].includes(type)) return "Retail";
  if (["Manufacturing / workshop", "Warehouse"].includes(type))
    return "Manufacturing & workshops";
  if (type === "Garage / automotive") return "Garages & automotive";
  if (type === "Office / professional services")
    return "Offices & professional services";
  if (type === "Farm / agriculture") return "Farming & agriculture";
  if (["Care home / healthcare", "School / education", "Care & education"].includes(type))
    return "Care & education";
  return "Other";
}

// Map UK SIC 2007 codes (as returned by Companies House) to a business type.
function typeForSic(code: string): BusinessType {
  const full = code.trim();
  const division = Number(full.slice(0, 2));
  if (full === "55100" || full === "55201" || full === "55202" || full === "55900") return "Hotel";
  if (full === "56302" || full === "56301") return "Pub / bar";
  if (full === "56103") return "Takeaway";
  if (division === 55 || division === 56) return "Restaurant / café";
  if (full === "96020" || full === "96040") return "Salon / beauty";
  if (division === 45) return "Garage / automotive";
  if (division === 47 || division === 46) return "Shop / retail";
  if (division === 52) return "Warehouse";
  if (division >= 1 && division <= 3) return "Farm / agriculture";
  if (division >= 10 && division <= 33) return "Manufacturing / workshop";
  if (division === 85) return "School / education";
  if (division >= 86 && division <= 88) return "Care home / healthcare";
  if ((division >= 58 && division <= 75) || division === 78 || division === 82)
    return "Office / professional services";
  return "Other";
}

export function businessTypeFromSic(codes: string[]): BusinessType {
  for (const code of codes) {
    const type = typeForSic(code);
    if (type !== "Other") return type;
  }
  return "Other";
}

// Illustration only, mirroring the reference estimate funnel.
export const estimateModel = { reductionLow: 0.3, reductionHigh: 0.5 } as const;

const monthlyBounds: Record<string, [number, number | null]> = {
  "Under £500": [0, 500],
  "£500–£1,000": [500, 1000],
  "£1,000–£2,500": [1000, 2500],
  "£2,500–£5,000": [2500, 5000],
  "£5,000–£10,000": [5000, 10000],
  "£10,000+": [10000, null],
};

export type EnergyEstimate = {
  status: "illustration" | "needs-spend";
  basis: "entered-amount" | "band-midpoint" | "unavailable";
  annualSpend: number | null;
  monthlySpend: number | null;
  savingLow: number | null;
  savingHigh: number | null;
  explanation: string;
};

export function validMonthlySpend(value: string) {
  return (
    /^\d{1,7}(?:\.\d{1,2})?$/.test(value.trim()) &&
    Number(value) >= 1 &&
    Number(value) <= 1000000
  );
}

export function calculateEstimate(spend: string, monthlySpend: string): EnergyEstimate {
  const empty: EnergyEstimate = {
    status: "needs-spend",
    basis: "unavailable",
    annualSpend: null,
    monthlySpend: null,
    savingLow: null,
    savingHigh: null,
    explanation:
      "Add a rough monthly amount to see a savings illustration, or send a bill for a review.",
  };
  const exact = monthlySpend.trim();
  let monthly: number;
  let basis: EnergyEstimate["basis"];
  let explanation: string;
  if (exact) {
    if (!validMonthlySpend(exact)) return empty;
    monthly = Number(exact);
    basis = "entered-amount";
    explanation = "Calculated from the monthly amount you entered.";
  } else {
    const bounds = monthlyBounds[spend];
    if (!bounds) return empty;
    if (bounds[1] === null)
      return {
        ...empty,
        explanation:
          "Your spend band has no upper limit. Add a rough monthly amount for a useful illustration, or send a bill.",
      };
    monthly = (bounds[0] + bounds[1]) / 2;
    basis = "band-midpoint";
    explanation = `Uses the midpoint of your ${spend} monthly spend band. Your actual spend may differ.`;
  }
  const annual = Math.round(monthly * 1200) / 100;
  return {
    status: "illustration",
    basis,
    explanation,
    monthlySpend: monthly,
    annualSpend: annual,
    savingLow: Math.round(annual * estimateModel.reductionLow),
    savingHigh: Math.round(annual * estimateModel.reductionHigh),
  };
}

export function pounds(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}
