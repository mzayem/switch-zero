"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { submitEnquiry } from "@/actions/enquiries/actions";
import {
  getCompanyDetails,
  searchCompanies,
} from "@/actions/companies/actions";
import { Choices } from "@/components/business-review/choices";
import { Icon } from "@/components/business-review/icon";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { trackEnquiryConversion } from "@/lib/analytics";
import {
  calculateEstimate,
  categories,
  categoryForBusinessType,
  defaultBusinessType,
  normalisePostcode,
  pounds,
  renewals,
  spendBands,
  validMonthlySpend,
  validPostcode,
  estimateModel,
  type BusinessType,
  type Category,
  type CompanyDetails,
  type CompanyMatch,
} from "@/lib/business-review/estimate";
import { formatDate } from "@/lib/business-review/format";

const steps = ["Your business", "Your energy", "Your estimate"];

type FormState = {
  company: string;
  companyNumber: string;
  postcode: string;
  address: string;
  category: Category | "";
  businessType: BusinessType;
  premises: boolean;
  fuel: string;
  spend: string;
  monthlySpend: string;
  electricityRenewal: string;
  gasRenewal: string;
  siteCount: string;
  fullName: string;
  email: string;
  telephone: string;
  role: string;
  consent: boolean;
  honeypot: string;
};

const initialForm: FormState = {
  company: "",
  companyNumber: "",
  postcode: "",
  address: "",
  category: "",
  businessType: "Other",
  premises: false,
  fuel: "",
  spend: "",
  monthlySpend: "",
  electricityRenewal: "",
  gasRenewal: "",
  siteCount: "1",
  fullName: "",
  email: "",
  telephone: "",
  role: "",
  consent: false,
  honeypot: "",
};

export function BusinessReviewForm() {
  const [step, setStep] = useState(0);
  // Unset until the user changes step, so the first step doesn't animate on load.
  const [direction, setDirection] = useState<"forward" | "back">();
  const [form, setForm] = useState<FormState>(initialForm);
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState<CompanyMatch[]>([]);
  const [selected, setSelected] = useState<CompanyDetails | null>(null);
  const [preview, setPreview] = useState<CompanyDetails | null>(null);
  const [previewError, setPreviewError] = useState("");
  const [loadingNumber, setLoadingNumber] = useState("");
  const [busy, setBusy] = useState("");
  const [manual, setManual] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [done, setDone] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const card = useRef<HTMLElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const searchSeq = useRef(0);
  const detailSeq = useRef(0);
  const moved = useRef(false);

  const patch = (fields: Partial<FormState>) =>
    setForm((current) => ({ ...current, ...fields }));
  const estimate = calculateEstimate(form.spend, form.monthlySpend);
  const low = Math.round(estimateModel.reductionLow * 100);
  const high = Math.round(estimateModel.reductionHigh * 100);

  useEffect(() => {
    if (!moved.current) return;
    heading.current?.focus({ preventScroll: true });
    card.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, done]);

  function goTo(next: number) {
    moved.current = true;
    setError("");
    setDirection(next < step ? "back" : "forward");
    setStep(next);
  }

  function openDialog() {
    setDialogOpen(true);
  }
  function closeDialog() {
    ++detailSeq.current;
    setLoadingNumber("");
    setDialogOpen(false);
  }

  async function search() {
    setError("");
    const term = query.trim();
    if (term.length < 2) {
      setError("Enter your business postcode, company name or company number.");
      return;
    }
    const seq = ++searchSeq.current;
    setBusy("search");
    setNotice("");
    setMatches([]);
    setPreview(null);
    setPreviewError("");
    try {
      const result = await searchCompanies(term);
      if (seq !== searchSeq.current) return;
      if (result.error) {
        setNotice(result.error);
        return;
      }
      setMatches(result.companies);
      if (!result.companies.length) {
        setNotice(result.notice || "No matching companies found.");
        return;
      }
      openDialog();
      // A single match goes straight to its details for confirmation.
      if (result.companies.length === 1) void viewCompany(result.companies[0]);
    } catch {
      if (seq === searchSeq.current)
        setNotice(
          "Company search couldn’t connect. Please try again, or enter your details manually.",
        );
    } finally {
      if (seq === searchSeq.current) setBusy("");
    }
  }

  async function viewCompany(match: CompanyMatch) {
    const seq = ++detailSeq.current;
    setPreviewError("");
    setLoadingNumber(match.number);
    try {
      const result = await getCompanyDetails(match.number);
      if (seq !== detailSeq.current) return;
      if (result.company) setPreview(result.company);
      else setPreviewError(result.error || "Company details are unavailable.");
    } catch {
      if (seq === detailSeq.current)
        setPreviewError("Company details couldn’t load. Please try again.");
    } finally {
      if (seq === detailSeq.current) setLoadingNumber("");
    }
  }

  function selectCompany(company: CompanyDetails) {
    setSelected(company);
    setManual(false);
    setNotice("");
    const businessType = company.businessType;
    const category =
      businessType !== "Other" ? categoryForBusinessType(businessType) : "";
    patch({
      company: company.name,
      companyNumber: company.number,
      postcode: company.postcode,
      address: company.address,
      category,
      businessType,
      premises: false,
    });
    closeDialog();
  }

  function enterManually() {
    ++searchSeq.current;
    setBusy("");
    setSelected(null);
    setManual(true);
    setNotice("");
    patch({
      companyNumber: "",
      category: "",
      businessType: "Other",
      premises: false,
    });
  }

  function next() {
    setError("");
    if (step === 0) {
      if (!form.company.trim()) return setError("Add your business name.");
      if (!validPostcode(form.postcode))
        return setError(
          "Add your full UK business premises postcode, for example CF10 1AA.",
        );
      if (!form.category) return setError("Choose your business sector.");
      if (!form.premises)
        return setError("Confirm this enquiry is for UK business premises.");
      patch({ postcode: normalisePostcode(form.postcode) });
      return goTo(1);
    }
    if (step === 1) {
      const sites = Number(form.siteCount);
      if (!Number.isInteger(sites) || sites < 1 || sites > 10000)
        return setError("Enter a number of sites between 1 and 10,000.");
      if (!form.fuel || (!form.spend && !form.monthlySpend.trim()))
        return setError(
          "Choose which fuel to review and your approximate monthly spend. ‘Not sure’ is fine.",
        );
      if (form.monthlySpend.trim() && !validMonthlySpend(form.monthlySpend))
        return setError(
          "Enter a monthly amount between £1 and £1,000,000, with up to two decimal places.",
        );
      if (
        (form.fuel !== "Business gas" && !form.electricityRenewal) ||
        (form.fuel !== "Business electricity" && !form.gasRenewal)
      )
        return setError(
          "Choose the contract end timing for each fuel. ‘Not sure’ is fine.",
        );
      return goTo(2);
    }
  }

  function acceptFile(upload: File | null) {
    setError("");
    if (!upload) return setFile(null);
    if (
      !["application/pdf", "image/jpeg", "image/png"].includes(upload.type) ||
      upload.size > 3 * 1024 * 1024
    )
      return setError("Choose a PDF, JPG or PNG bill under 3 MB.");
    setFile(upload);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!form.role)
      return setError("Choose your role in arranging business energy.");
    if (!form.consent)
      return setError("Please agree that we can respond to your enquiry.");

    const spendText = form.monthlySpend.trim()
      ? `£${form.monthlySpend.trim()} per month`
      : form.spend;
    const estimateText =
      estimate.status === "illustration"
        ? `${pounds(estimate.savingLow!)} – ${pounds(estimate.savingHigh!)} a year (illustration)`
        : "Not available";
    const message = [
      "Business energy review requested from the homepage.",
      `Business type: ${form.businessType} (${form.category})`,
      `Monthly spend: ${spendText}`,
      form.fuel !== "Business gas"
        ? `Electricity contract ends: ${form.electricityRenewal}`
        : "",
      form.fuel !== "Business electricity"
        ? `Gas contract ends: ${form.gasRenewal}`
        : "",
      `Indicative estimate: ${estimateText}`,
    ]
      .filter(Boolean)
      .join("\n");

    const data = new FormData();
    const query = new URLSearchParams(window.location.search);
    const fields: Record<string, string> = {
      website: form.honeypot,
      fullName: form.fullName,
      company: form.company,
      companyNumber: form.companyNumber,
      email: form.email,
      telephone: form.telephone,
      postcode: form.postcode,
      address: form.address,
      businessType: `${form.businessType} (${form.category})`,
      siteCount: form.siteCount,
      service: "Business energy review",
      fuel: form.fuel,
      monthlySpend: spendText,
      electricityRenewal:
        form.fuel !== "Business gas" ? form.electricityRenewal : "",
      gasRenewal: form.fuel !== "Business electricity" ? form.gasRenewal : "",
      role: form.role,
      estimate: estimateText,
      message,
      consent: "yes",
      utm_source: query.get("utm_source") ?? "",
      utm_medium: query.get("utm_medium") ?? "",
      utm_campaign: query.get("utm_campaign") ?? "",
    };
    Object.entries(fields).forEach(([key, value]) => data.set(key, value));
    if (file) data.set("bill", file);

    setBusy("submit");
    try {
      const result = await submitEnquiry(data);
      if (!result.ok) throw new Error(result.error);
      if (result.enquiryId) trackEnquiryConversion(result.enquiryId);
      moved.current = true;
      setDone(true);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "We couldn’t send your request. Please try again.",
      );
    } finally {
      setBusy("");
    }
  }

  function startAgain() {
    ++searchSeq.current;
    ++detailSeq.current;
    setBusy("");
    setForm(initialForm);
    setQuery("");
    setMatches([]);
    setSelected(null);
    setPreview(null);
    setManual(false);
    setNotice("");
    setError("");
    setFile(null);
    setDone(false);
    goTo(0);
  }

  const estimateCard = (
    <section
      className="estimate-card"
      aria-label="Indicative savings illustration"
    >
      <p className="estimate-eyebrow">YOUR ESTIMATE FOR</p>
      <div className="estimate-business">
        <strong>{form.company}</strong>
        <span>{form.businessType}</span>
      </div>
      {estimate.status === "illustration" && estimate.annualSpend !== null ? (
        <>
          <p className="estimate-scenario">
            At {low}–{high}% lower annual energy cost
          </p>
          <p className="estimate-amount">
            {pounds(estimate.savingLow!)} <span>–</span>{" "}
            {pounds(estimate.savingHigh!)}
            <small>a year · illustration</small>
          </p>
          <p className="estimate-basis">
            {estimate.basis === "entered-amount"
              ? "You entered"
              : "Using an assumed"}{" "}
            <strong>{pounds(estimate.monthlySpend!)}/month</strong>, or{" "}
            <strong>{pounds(estimate.annualSpend)}/year</strong>.
          </p>
          <details className="estimate-method">
            <summary>How this is calculated</summary>
            <p>{estimate.explanation}</p>
            <p>
              {pounds(estimate.annualSpend)} × {low}% ={" "}
              {pounds(estimate.savingLow!)}
              <br />
              {pounds(estimate.annualSpend)} × {high}% ={" "}
              {pounds(estimate.savingHigh!)}
            </p>
          </details>
          <p className="estimate-caveat">
            Illustration only. Actual savings could be lower or zero. A
            confirmed comparison needs your bill and supplier prices.
          </p>
        </>
      ) : (
        <>
          <h3>A bill will give us a better starting point.</h3>
          <p className="estimate-basis">{estimate.explanation}</p>
        </>
      )}
    </section>
  );

  return (
    <section
      ref={card}
      className="review-card"
      data-direction={direction}
      aria-label="Business energy review"
    >
      <div className="card-top">
        <span>{done ? "REVIEW REQUESTED" : steps[step].toUpperCase()}</span>
        <span>{done ? "Complete" : `Step ${step + 1} of 3`}</span>
      </div>
      <Progress
        className="form-progress"
        aria-label="Questionnaire progress"
        value={done ? 100 : ((step + 1) / steps.length) * 100}
        getAriaValueText={() =>
          done ? "Complete" : `Step ${step + 1} of ${steps.length}`
        }
      />

      {done ? (
        <div className="success-screen">
          <div className="success-icon">
            <Icon name="check" size={38} />
          </div>
          <h2 ref={heading} tabIndex={-1}>
            Your review request is sent.
          </h2>
          <p>
            Thanks, {form.fullName.split(" ")[0]}. Your business details{" "}
            {file ? "and bill are" : "are"} with SwitchZero’s team.
          </p>
          <div className="summary-block">
            <strong>{form.company}</strong>
            <span>
              {form.postcode} · {form.fuel}
            </span>
          </div>
          <button
            type="button"
            className="secondary-button"
            onClick={startAgain}
          >
            Start another review
          </button>
        </div>
      ) : (
        <>
          <nav className="form-nav" aria-label="Questionnaire navigation">
            {step > 0 ? (
              <button type="button" onClick={() => goTo(step - 1)}>
                <Icon name="back" size={16} />
                Back
              </button>
            ) : (
              <span>Commercial premises only</span>
            )}
            <button type="button" onClick={startAgain}>
              Start again
            </button>
          </nav>

          {step === 0 && (
            <div className="step-content">
              <h2 ref={heading} tabIndex={-1}>
                Find your business
              </h2>
              <p className="helper">
                Search the Companies House register by postcode, company name or
                company number.
              </p>
              <label className="field-label" htmlFor="rv-search">
                POSTCODE, COMPANY NAME OR NUMBER
              </label>
              <div className="search-row">
                <div className="postcode-wrap">
                  <Icon name="pin" size={19} />
                  <Input
                    id="rv-search"
                    placeholder="e.g. CF10 1AA or 17202197"
                    autoComplete="off"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        void search();
                      }
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="primary-button"
                  onClick={search}
                  disabled={!!busy}
                >
                  <Icon name={busy === "search" ? "spinner" : "search"} />
                  Find
                </button>
              </div>

              {busy === "search" && (
                <p className="scan-status" role="status">
                  <Icon name="spinner" />
                  Searching Companies House…
                </p>
              )}
              {notice && (
                <p className="notice" role="status">
                  {notice}
                </p>
              )}
              {!selected && matches.length > 1 && !busy && (
                <button
                  type="button"
                  className="text-button"
                  onClick={openDialog}
                >
                  Show {matches.length} matching companies again
                </button>
              )}

              {selected && (
                <div className="selected-business">
                  <Icon name="check" size={23} />
                  <div>
                    <strong>{selected.name}</strong>
                    <span>{selected.address}</span>
                    <small>
                      Company no. {selected.number} · {selected.status}
                    </small>
                    <div className="selected-business-type">
                      <Icon name="check" size={16} />
                      <div>
                        <strong>
                          {selected.businessType === "Other"
                            ? "Business type not clear"
                            : selected.businessType}
                        </strong>
                        <small>
                          From Companies House SIC codes · please confirm below
                        </small>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (matches.length > 1) {
                        setPreview(null);
                        openDialog();
                      } else enterManually();
                    }}
                  >
                    Change
                  </button>
                </div>
              )}

              {!manual && (
                <button
                  type="button"
                  className="text-button manual-link"
                  onClick={enterManually}
                >
                  <Icon name="building" size={17} />I can’t find my business /
                  enter manually
                </button>
              )}

              {(manual || selected) && (
                <>
                  {manual && (
                    <>
                      <label className="field-label" htmlFor="rv-company">
                        BUSINESS NAME
                      </label>
                      <Input
                        id="rv-company"
                        autoComplete="organization"
                        placeholder="Trading or company name"
                        value={form.company}
                        onChange={(e) => patch({ company: e.target.value })}
                      />
                      <label className="field-label" htmlFor="rv-postcode">
                        PREMISES POSTCODE
                      </label>
                      <Input
                        id="rv-postcode"
                        autoComplete="postal-code"
                        placeholder="e.g. CF10 1AA"
                        value={form.postcode}
                        onChange={(e) =>
                          patch({ postcode: e.target.value.toUpperCase() })
                        }
                      />
                      <label className="field-label" htmlFor="rv-address">
                        PREMISES ADDRESS <span>(optional)</span>
                      </label>
                      <Input
                        id="rv-address"
                        placeholder="Building and street"
                        value={form.address}
                        onChange={(e) => patch({ address: e.target.value })}
                      />
                    </>
                  )}

                  <p className="field-label">CONFIRM YOUR BUSINESS SECTOR</p>
                  <RadioGroup
                    className="category-grid"
                    aria-label="Business sector"
                    value={form.category}
                    onValueChange={(value) => {
                      const category = value as Category;
                      patch({
                        category,
                        businessType:
                          selected &&
                          categoryForBusinessType(selected.businessType) ===
                            category
                            ? selected.businessType
                            : defaultBusinessType(category),
                      });
                    }}
                  >
                    {categories.map((category) => (
                      <label
                        key={category}
                        className={`category-tile ${form.category === category ? "selected" : ""}`}
                      >
                        <span>{category}</span>
                        <RadioGroupItem value={category} />
                      </label>
                    ))}
                  </RadioGroup>
                  <label className="checkbox-line">
                    <Checkbox
                      checked={form.premises}
                      onCheckedChange={(premises) => patch({ premises })}
                    />
                    <span>This enquiry is for UK business premises.</span>
                  </label>
                  <button
                    type="button"
                    className="primary-button continue"
                    onClick={next}
                  >
                    Continue to energy details
                  </button>
                </>
              )}
            </div>
          )}

          {step === 1 && (
            <div className="step-content">
              <h2 ref={heading} tabIndex={-1}>
                Tell us about your energy.
              </h2>
              <p className="helper">
                Rough figures are fine. We’ll check the details against your
                bill.
              </p>
              <p className="field-label">WHAT WOULD YOU LIKE US TO REVIEW?</p>
              <Choices
                label="Fuel to review"
                value={form.fuel}
                onChange={(fuel) => patch({ fuel })}
                options={["Business electricity", "Business gas", "Both"]}
              />
              <p className="field-label">
                ROUGHLY WHAT DO YOU SPEND EACH MONTH?
              </p>
              <p className="spend-helper">
                For the fuels you selected, across all the sites in this
                enquiry.
              </p>
              <Choices
                label="Monthly energy spend"
                value={form.spend}
                onChange={(spend) => patch({ spend, monthlySpend: "" })}
                options={spendBands}
              />
              <label className="field-label" htmlFor="rv-monthly">
                OR ENTER A MONTHLY AMOUNT <span>(if you know it)</span>
              </label>
              <div className="money-input">
                <span aria-hidden="true">£</span>
                <Input
                  id="rv-monthly"
                  type="number"
                  min="1"
                  max="1000000"
                  step="0.01"
                  inputMode="decimal"
                  placeholder="e.g. 2250"
                  value={form.monthlySpend}
                  onChange={(e) =>
                    patch({ monthlySpend: e.target.value, spend: "" })
                  }
                />
              </div>
              {form.fuel && form.fuel !== "Business gas" && (
                <>
                  <p className="field-label">
                    WHEN DOES YOUR ELECTRICITY CONTRACT END?
                  </p>
                  <Choices
                    label="Electricity contract end"
                    value={form.electricityRenewal}
                    onChange={(electricityRenewal) =>
                      patch({ electricityRenewal })
                    }
                    options={renewals}
                  />
                </>
              )}
              {form.fuel && form.fuel !== "Business electricity" && (
                <>
                  <p className="field-label">
                    WHEN DOES YOUR GAS CONTRACT END?
                  </p>
                  <Choices
                    label="Gas contract end"
                    value={form.gasRenewal}
                    onChange={(gasRenewal) => patch({ gasRenewal })}
                    options={renewals}
                  />
                </>
              )}
              <label className="field-label" htmlFor="rv-sites">
                HOW MANY BUSINESS SITES?
              </label>
              <Input
                id="rv-sites"
                className="site-count"
                type="number"
                min="1"
                max="10000"
                value={form.siteCount}
                onChange={(e) => patch({ siteCount: e.target.value })}
              />
              <button
                type="button"
                className="primary-button continue"
                onClick={next}
              >
                See my indicative estimate
              </button>
            </div>
          )}

          {step === 2 && (
            <form className="step-content" onSubmit={submit}>
              <h2 ref={heading} tabIndex={-1}>
                Your indicative estimate.
              </h2>
              <p className="helper">
                Leave your details for a bill-based comparison.
              </p>
              {estimateCard}
              <div className="review-context">
                <span>
                  {form.postcode} · {form.fuel} · {form.siteCount}{" "}
                  {form.siteCount === "1" ? "site" : "sites"}
                </span>
                <button type="button" onClick={() => goTo(0)}>
                  Edit business details
                </button>
              </div>
              <h3 className="contact-heading">Who should we contact?</h3>
              <label className="field-label" htmlFor="rv-name">
                FULL NAME
              </label>
              <Input
                id="rv-name"
                autoComplete="name"
                required
                value={form.fullName}
                onChange={(e) => patch({ fullName: e.target.value })}
              />
              <label className="field-label" htmlFor="rv-email">
                WORK EMAIL
              </label>
              <Input
                id="rv-email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => patch({ email: e.target.value })}
              />
              <label className="field-label" htmlFor="rv-phone">
                TELEPHONE NUMBER
              </label>
              <Input
                id="rv-phone"
                type="tel"
                autoComplete="tel"
                required
                value={form.telephone}
                onChange={(e) => patch({ telephone: e.target.value })}
              />
              <p className="field-label">
                YOUR ROLE IN CHOOSING BUSINESS ENERGY
              </p>
              <Choices
                label="Business energy responsibility"
                value={form.role}
                onChange={(role) => patch({ role })}
                options={[
                  "Owner / director",
                  "Responsible for energy",
                  "Part of the decision",
                  "Introducing the business",
                ]}
              />
              <div className="honeypot" aria-hidden="true">
                <label>
                  Leave blank
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={(e) => patch({ honeypot: e.target.value })}
                  />
                </label>
              </div>
              <p className="field-label">
                ADD A RECENT ENERGY BILL <span>(optional)</span>
              </p>
              <label className={`upload-box ${file ? "has-file" : ""}`}>
                <Icon name="upload" size={24} />
                <strong>{file ? file.name : "Choose a bill to upload"}</strong>
                <span>
                  {file
                    ? `${(file.size / 1024).toFixed(0)} KB · ready to attach`
                    : "PDF, JPG or PNG · up to 3 MB"}
                </span>
                <input
                  type="file"
                  accept="application/pdf,image/jpeg,image/png"
                  onChange={(e) => acceptFile(e.target.files?.[0] || null)}
                />
              </label>
              {file && (
                <button
                  type="button"
                  className="text-button"
                  onClick={() => setFile(null)}
                >
                  <Icon name="close" size={15} />
                  Remove bill
                </button>
              )}
              <label className="checkbox-line consent">
                <Checkbox
                  checked={form.consent}
                  onCheckedChange={(consent) => patch({ consent })}
                />
                <span>
                  I agree that SwitchtoZero Ltd may use these details to respond
                  to this enquiry. See the{" "}
                  <Link href="/privacy">privacy policy</Link>.
                </span>
              </label>
              <button
                className="primary-button continue"
                type="submit"
                disabled={!!busy}
              >
                <Icon name={busy === "submit" ? "spinner" : "check"} />
                {busy === "submit"
                  ? "Sending your request…"
                  : "Request my free energy review"}
              </button>
              <p className="submit-note">
                No obligation to switch. A confirmed comparison follows a bill
                review.
              </p>
            </form>
          )}

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
        </>
      )}

      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          if (!open) closeDialog();
        }}
      >
        <DialogContent className="company-dialog" showCloseButton={false}>
          <div className="company-dialog-inner">
            <div className="company-dialog-head">
              {preview && matches.length > 1 ? (
                <button
                  type="button"
                  className="dialog-back"
                  onClick={() => setPreview(null)}
                >
                  <Icon name="back" size={16} />
                  All results
                </button>
              ) : (
                <span className="dialog-count">
                  {matches.length} {matches.length === 1 ? "match" : "matches"}{" "}
                  on Companies House
                </span>
              )}
              <DialogClose className="dialog-close" aria-label="Close">
                <Icon name="close" />
              </DialogClose>
            </div>

            {preview ? (
              <div className="company-details">
                <DialogTitle>{preview.name}</DialogTitle>
                <Badge
                  className={`status-pill ${preview.status === "Active" ? "active" : ""}`}
                >
                  {preview.status}
                </Badge>
                <dl>
                  <div>
                    <dt>Company number</dt>
                    <dd>{preview.number}</dd>
                  </div>
                  <div>
                    <dt>Registered office</dt>
                    <dd>{preview.address || "Not listed"}</dd>
                  </div>
                  <div>
                    <dt>Company type</dt>
                    <dd>{preview.type || "Not listed"}</dd>
                  </div>
                  <div>
                    <dt>Incorporated</dt>
                    <dd>{formatDate(preview.incorporated) || "Not listed"}</dd>
                  </div>
                  {preview.dissolved && (
                    <div>
                      <dt>Dissolved</dt>
                      <dd>{formatDate(preview.dissolved)}</dd>
                    </div>
                  )}
                  <div>
                    <dt>Nature of business</dt>
                    <dd>
                      {preview.sicCodes.length
                        ? `SIC ${preview.sicCodes.join(", ")}`
                        : "No SIC codes listed"}
                      {preview.businessType !== "Other" && (
                        <small>Looks like: {preview.businessType}</small>
                      )}
                    </dd>
                  </div>
                </dl>
                {preview.status !== "Active" && (
                  <p className="notice">
                    This company isn’t listed as active. Check you’ve chosen the
                    right one.
                  </p>
                )}
                <a
                  className="text-button"
                  href={preview.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Companies House
                </a>
                <button
                  type="button"
                  className="primary-button continue"
                  onClick={() => selectCompany(preview)}
                >
                  Use this business and continue
                </button>
              </div>
            ) : (
              <>
                <DialogTitle className="dialog-title">
                  Select your business
                </DialogTitle>
                {previewError && <p className="form-error">{previewError}</p>}
                <ul className="result-list">
                  {matches.map((match) => (
                    <li key={match.number}>
                      <button
                        type="button"
                        className="business-result"
                        onClick={() => viewCompany(match)}
                        disabled={!!loadingNumber}
                      >
                        <div>
                          <strong>{match.name}</strong>
                          <span>{match.address}</span>
                          <small>
                            {match.number} · {match.status}
                            {match.incorporated
                              ? ` · Inc. ${formatDate(match.incorporated)}`
                              : ""}
                          </small>
                        </div>
                        {loadingNumber === match.number ? (
                          <Icon name="spinner" />
                        ) : (
                          <Icon name="back" size={16} />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
                {matches.length === 1 && loadingNumber && (
                  <p className="scan-status" role="status">
                    <Icon name="spinner" />
                    Loading company details…
                  </p>
                )}
                <button
                  type="button"
                  className="text-button"
                  onClick={() => {
                    closeDialog();
                    enterManually();
                  }}
                >
                  None of these — enter my details manually
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
