"use server";

import {
  businessTypeFromSic,
  normalisePostcode,
  validPostcode,
  type CompanyDetails,
  type CompanyMatch,
} from "@/app/business-review";

type ChAddress = {
  premises?: string;
  address_line_1?: string;
  address_line_2?: string;
  locality?: string;
  region?: string;
  postal_code?: string;
  country?: string;
};

type ChSearchItem = {
  title?: string;
  company_number?: string;
  company_status?: string;
  company_type?: string;
  date_of_creation?: string;
  date_of_cessation?: string;
  address?: ChAddress;
  address_snippet?: string;
};

type ChProfile = {
  company_name?: string;
  company_number?: string;
  company_status?: string;
  type?: string;
  date_of_creation?: string;
  date_of_cessation?: string;
  registered_office_address?: ChAddress;
  sic_codes?: string[];
  has_charges?: boolean;
  has_insolvency_history?: boolean;
  accounts?: { next_due?: string; last_accounts?: { made_up_to?: string } };
};

type SearchResult = { companies: CompanyMatch[]; notice?: string; error?: string };
type DetailsResult = { company?: CompanyDetails; error?: string };

const companyNumberPattern = /^([A-Z]{2}\d{6}|\d{1,8})$/;

// GOV_API_URL points at the search endpoint; other endpoints share its origin.
function apiConfig() {
  const searchUrl = process.env.GOV_API_URL || "https://api.company-information.service.gov.uk/search/companies";
  const key = process.env.GOV_API_KEY;
  if (!key) throw new Error("Companies House API key is not configured.");
  return { searchUrl, origin: new URL(searchUrl).origin, auth: key };
}

async function chFetch<T>(url: string, auth: string): Promise<T | null> {
  const response = await fetch(url, {
    headers: { Authorization: auth, Accept: "application/json" },
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Companies House responded ${response.status}`);
  return (await response.json()) as T;
}

function formatAddress(address?: ChAddress) {
  if (!address) return "";
  const first = [address.premises, address.address_line_1].filter(Boolean).join(" ");
  return [first, address.address_line_2, address.locality, address.region, address.postal_code]
    .filter(Boolean)
    .join(", ");
}

function readable(value?: string) {
  return value ? value.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase()) : "";
}

function toMatch(item: ChSearchItem): CompanyMatch {
  return {
    number: item.company_number || "",
    name: item.title || "",
    address: item.address_snippet || formatAddress(item.address),
    postcode: normalisePostcode(item.address?.postal_code || ""),
    status: readable(item.company_status),
    incorporated: item.date_of_creation || "",
  };
}

function cleanNumber(query: string) {
  const compact = query.toUpperCase().replace(/\s/g, "");
  if (!companyNumberPattern.test(compact)) return "";
  return /^\d+$/.test(compact) ? compact.padStart(8, "0") : compact;
}

/** Search Companies House by postcode, company name or company number. */
export async function searchCompanies(rawQuery: string): Promise<SearchResult> {
  const query = typeof rawQuery === "string" ? rawQuery.trim().slice(0, 160) : "";
  if (query.length < 2) return { companies: [], error: "Enter a postcode, company name or company number." };

  try {
    const { searchUrl, origin, auth } = apiConfig();

    const number = cleanNumber(query);
    if (number) {
      const profile = await chFetch<ChProfile>(`${origin}/company/${encodeURIComponent(number)}`, auth);
      if (profile) {
        return {
          companies: [{
            number,
            name: profile.company_name || "",
            address: formatAddress(profile.registered_office_address),
            postcode: normalisePostcode(profile.registered_office_address?.postal_code || ""),
            status: readable(profile.company_status),
            incorporated: profile.date_of_creation || "",
          }],
        };
      }
    }

    const isPostcode = validPostcode(query);
    const term = isPostcode ? normalisePostcode(query) : query;
    const params = new URLSearchParams({ q: term, items_per_page: isPostcode ? "100" : "30" });
    const data = await chFetch<{ items?: ChSearchItem[] }>(`${searchUrl}?${params}`, auth);
    let companies = (data?.items || []).map(toMatch).filter((match) => match.number && match.name);

    // A postcode search is fuzzy, so keep only companies registered at that exact postcode.
    if (isPostcode) companies = companies.filter((match) => match.postcode === term);

    companies.sort((a, b) => Number(b.status === "Active") - Number(a.status === "Active"));
    companies = companies.slice(0, 25);

    if (!companies.length) {
      return {
        companies,
        notice: isPostcode
          ? "No companies are registered at that postcode. Try your company name or number, or enter your details manually."
          : "No matching companies found. Check the spelling, or enter your details manually.",
      };
    }
    return { companies };
  } catch (error) {
    console.error("Companies House search failed", error);
    return { companies: [], error: "Company search is unavailable right now. You can enter your business details manually." };
  }
}

/** Fetch the full Companies House profile for one company. */
export async function getCompanyDetails(rawNumber: string): Promise<DetailsResult> {
  const number = typeof rawNumber === "string" ? cleanNumber(rawNumber) : "";
  if (!number) return { error: "That company number isn’t valid." };

  try {
    const { origin, auth } = apiConfig();
    const profile = await chFetch<ChProfile>(`${origin}/company/${encodeURIComponent(number)}`, auth);
    if (!profile) return { error: "We couldn’t find that company on Companies House." };

    const sicCodes = profile.sic_codes || [];
    return {
      company: {
        number,
        name: profile.company_name || "",
        address: formatAddress(profile.registered_office_address),
        postcode: normalisePostcode(profile.registered_office_address?.postal_code || ""),
        status: readable(profile.company_status),
        type: readable(profile.type),
        incorporated: profile.date_of_creation || "",
        dissolved: profile.date_of_cessation || "",
        sicCodes,
        businessType: businessTypeFromSic(sicCodes),
        nextAccountsDue: profile.accounts?.next_due || "",
        link: `https://find-and-update.company-information.service.gov.uk/company/${number}`,
      },
    };
  } catch (error) {
    console.error("Companies House profile lookup failed", error);
    return { error: "Company details are unavailable right now. You can still continue." };
  }
}
