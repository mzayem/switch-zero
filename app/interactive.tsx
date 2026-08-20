"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { companyDetails, industryNav, serviceNav } from "./site-data";

function SocialIcon({ name }: { name: "Instagram" | "LinkedIn" | "Facebook" }) {
  if (name === "Instagram") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-fill" cx="17.3" cy="6.8" r="1" /></svg>;
  }
  if (name === "LinkedIn") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7.4v.1M11.5 17v-7m0 3.1c.7-2 4.5-2.2 4.5 1.1V17" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M13.7 8.1h2V5.2h-2.4c-2.8 0-4.3 1.7-4.3 4.5v1.8H6.5v3H9V21h3.2v-6.5h2.7l.5-3h-3.2V9.9c0-1.2.4-1.8 1.5-1.8Z" className="social-fill" /></svg>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site-header">
      <div className="announcement">
        <div className="shell announcement-inner">
          <div className="announcement-contact" aria-label="SwitchZero contact details">
            <a href={companyDetails.emailHref}>{companyDetails.email}</a>
            <span aria-hidden="true">·</span>
            <a href={companyDetails.phoneHref}>{companyDetails.phone}</a>
          </div>
          <Link href="/contact">Book a free energy review</Link>
        </div>
      </div>
      <div className="shell nav-wrap">
        <Link className="logo-link" href="/" aria-label="SwitchZero home">
          <BrandLogo />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span /> <span /> <span />
          <b>{open ? "Close" : "Menu"}</b>
        </button>

        <nav id="primary-navigation" className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/commercial-tariff-switching" onClick={() => setOpen(false)}>Business energy</Link>
          <details>
            <summary>Services <span aria-hidden="true">⌄</span></summary>
            <div className="nav-panel services-panel">
              <p className="nav-panel-title">Services</p>
              <div>
                {serviceNav.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
                ))}
              </div>
            </div>
          </details>
          <details>
            <summary>Industries <span aria-hidden="true">⌄</span></summary>
            <div className="nav-panel industries-panel">
              <p className="nav-panel-title">Industries</p>
              <div>
                <Link href="/industries" onClick={() => setOpen(false)}>All industries</Link>
                {industryNav.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
                ))}
              </div>
            </div>
          </details>
          <Link href="/case-studies" onClick={() => setOpen(false)}>Case studies</Link>
          <Link href="/insights" onClick={() => setOpen(false)}>Insights</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link className="mobile-contact" href="/contact" onClick={() => setOpen(false)}>Get in touch</Link>
        </nav>

        <div className="header-socials" aria-label="SwitchZero social profiles">
          {(["Instagram", "LinkedIn", "Facebook"] as const).map((name) => (
            <span className="social-link" role="img" aria-label={`${name} profile link coming soon`} title={`${name} profile link coming soon`} key={name}>
              <SocialIcon name={name} />
            </span>
          ))}
        </div>

        <Link className="header-cta" href="/contact">Get in touch</Link>
      </div>
    </header>
  );
}

export function HeroLeadForm() {
  const [postcode, setPostcode] = useState("");
  const [service, setService] = useState("Electricity and gas");

  function submit(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams({ postcode, service });
    window.location.href = `/contact?${params.toString()}`;
  }

  return (
    <form className="hero-lead" onSubmit={submit}>
      <p className="hero-lead-label"><span>01</span> Start with your organisation</p>
      <label>
        Business postcode
        <input value={postcode} onInput={(event) => setPostcode(event.currentTarget.value)} placeholder="e.g. CF10 1AA" required />
      </label>
      <label>
        What should we review?
        <select value={service} onChange={(event) => setService(event.target.value)}>
          <option>Electricity and gas</option>
          <option>Business electricity</option>
          <option>Business gas</option>
          <option>Multi-site portfolio</option>
          <option>Solar, storage or efficiency</option>
        </select>
      </label>
      <button className="button button-primary button-wide" type="submit">Continue my review</button>
      <p className="privacy-line">No obligation. We will ask for the details needed to review your position properly.</p>
    </form>
  );
}

function numberValue(value: string) {
  const parsed = Number(value.replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

export function SavingsCalculator() {
  const [electricity, setElectricity] = useState("100000");
  const [gas, setGas] = useState("0");
  const [electricityRate, setElectricityRate] = useState("25");
  const [gasRate, setGasRate] = useState("7");
  const [comparisonElectricity, setComparisonElectricity] = useState("23.5");
  const [comparisonGas, setComparisonGas] = useState("6.5");
  const [standing, setStanding] = useState("1200");

  const result = useMemo(() => {
    const current = (numberValue(electricity) * numberValue(electricityRate)) / 100
      + (numberValue(gas) * numberValue(gasRate)) / 100
      + numberValue(standing);
    const comparison = (numberValue(electricity) * numberValue(comparisonElectricity)) / 100
      + (numberValue(gas) * numberValue(comparisonGas)) / 100
      + numberValue(standing);
    const difference = current - comparison;
    return { current, comparison, difference, monthly: difference / 12, percent: current > 0 ? (difference / current) * 100 : 0 };
  }, [electricity, gas, electricityRate, gasRate, comparisonElectricity, comparisonGas, standing]);

  const money = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });

  return (
    <div className="calculator-grid">
      <div className="calculator-fields">
        <p className="calculator-note">Editable example inputs. Replace them with your figures.</p>
        <div className="form-grid three">
          <label>Electricity use (kWh)<input inputMode="decimal" value={electricity} onInput={(e) => setElectricity(e.currentTarget.value)} /></label>
          <label>Current electricity rate (p/kWh)<input inputMode="decimal" value={electricityRate} onInput={(e) => setElectricityRate(e.currentTarget.value)} /></label>
          <label>Comparison rate (p/kWh)<input inputMode="decimal" value={comparisonElectricity} onInput={(e) => setComparisonElectricity(e.currentTarget.value)} /></label>
          <label>Gas use (kWh)<input inputMode="decimal" value={gas} onInput={(e) => setGas(e.currentTarget.value)} /></label>
          <label>Current gas rate (p/kWh)<input inputMode="decimal" value={gasRate} onInput={(e) => setGasRate(e.currentTarget.value)} /></label>
          <label>Comparison rate (p/kWh)<input inputMode="decimal" value={comparisonGas} onInput={(e) => setComparisonGas(e.currentTarget.value)} /></label>
          <label>Annual standing charges (£)<input inputMode="decimal" value={standing} onInput={(e) => setStanding(e.currentTarget.value)} /></label>
        </div>
      </div>
      <div className="calculator-result" aria-live="polite">
        <p className="eyebrow dark">Illustrative comparison</p>
        <div className="result-line"><span>Current estimated annual cost</span><b>{money.format(result.current)}</b></div>
        <div className="result-line"><span>Comparison scenario</span><b>{money.format(result.comparison)}</b></div>
        <div className="result-main">
          <span>Possible annual difference</span>
          <strong>{money.format(result.difference)}</strong>
          <small>{money.format(result.monthly)} per month · {result.percent.toFixed(1)}%</small>
        </div>
        <Link className="button button-primary button-wide" href="/contact?service=Full%20market%20review">Request a full market review</Link>
        <p className="disclaimer">Figures are estimates for initial comparison only and do not represent a guaranteed quotation or saving. Actual pricing depends on market conditions, meter information, consumption and contract terms.</p>
      </div>
    </div>
  );
}

type EnquiryStatus = "idle" | "sending" | "success" | "error";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<EnquiryStatus>("idle");
  const [message, setMessage] = useState("");
  const [postcode, setPostcode] = useState("");

  useEffect(() => {
    const postcodeParam = new URLSearchParams(window.location.search).get("postcode");
    if (!postcodeParam) return;
    const timer = window.setTimeout(() => setPostcode(postcodeParam), 0);
    return () => window.clearTimeout(timer);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("sourcePage", window.location.pathname);
    const query = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign"].forEach((key) => data.set(key, query.get(key) ?? ""));
    data.set("initialInterest", query.get("service") ?? "");
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/enquiries", { method: "POST", body: data });
      const payload = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) throw new Error(payload.error || "We could not send the enquiry.");
      setStatus("success");
      setMessage(payload.message || "Thank you. Your enquiry has been received.");
      form.reset();
      setPostcode("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send the enquiry. Please try again.");
    }
  }

  return (
    <form className={compact ? "enquiry-form compact" : "enquiry-form"} onSubmit={submit} encType="multipart/form-data">
      <div className="honeypot" aria-hidden="true"><label>Leave this blank<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="form-grid two">
        <label>Full name<input name="fullName" autoComplete="name" required /></label>
        <label>Company name<input name="company" autoComplete="organization" required /></label>
        {!compact && <label>Job title<input name="jobTitle" autoComplete="organization-title" /></label>}
        <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Telephone<input name="telephone" type="tel" autoComplete="tel" /></label>
        {!compact && <label>Business postcode<input name="postcode" autoComplete="postal-code" value={postcode} onChange={(event) => setPostcode(event.currentTarget.value)} /></label>}
        {!compact && <label>Number of sites<input name="siteCount" type="number" min="1" defaultValue="1" /></label>}
        <label>Enquiry relates to
          <select name="service" defaultValue="Tariff switching" required>
            <option>Tariff switching</option><option>Electricity</option><option>Gas</option><option>Solar PV</option><option>Battery storage</option><option>Monitoring</option><option>Finance</option><option>Power Purchase Agreement</option><option>General enquiry</option>
          </select>
        </label>
        {!compact && <label>Electricity, gas or both
          <select name="fuel" defaultValue="Both"><option>Electricity</option><option>Gas</option><option>Both</option><option>Not sure</option></select>
        </label>}
        {!compact && <label>Contract end date<input name="contractEnd" type="date" /></label>}
        {!compact && <label>Estimated annual spend<input name="annualSpend" inputMode="decimal" placeholder="£" /></label>}
      </div>
      <label>Message<textarea name="message" rows={compact ? 3 : 5} placeholder="Tell us what you would like reviewed." required /></label>
      {!compact && <label className="file-field">Recent utility bill <span>PDF, JPG or PNG · maximum 8 MB</span><input name="bill" type="file" accept="application/pdf,image/jpeg,image/png" /></label>}
      <label className="consent"><input name="consent" type="checkbox" value="yes" required /><span>I agree that SwitchZero Ltd may use these details to respond to this enquiry. See the <Link href="/privacy">privacy policy</Link>.</span></label>
      <button className="button button-primary button-wide" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send my enquiry"}</button>
      <p className={`form-status ${status}`} aria-live="polite">{message}</p>
    </form>
  );
}

type Consent = { analytics: boolean; marketing: boolean; personalisation: boolean };
const defaultConsent: Consent = { analytics: false, marketing: false, personalisation: false };

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [consent, setConsent] = useState<Consent>(defaultConsent);

  useEffect(() => {
    const saved = window.localStorage.getItem("switchzero-cookie-consent");
    const timer = window.setTimeout(() => { if (!saved) setVisible(true); }, 0);
    const open = () => { setVisible(true); setManaging(true); };
    window.addEventListener("switchzero:manage-cookies", open);
    return () => { window.clearTimeout(timer); window.removeEventListener("switchzero:manage-cookies", open); };
  }, []);

  function save(next: Consent) {
    window.localStorage.setItem("switchzero-cookie-consent", JSON.stringify({ ...next, necessary: true, updatedAt: new Date().toISOString() }));
    setConsent(next);
    setVisible(false);
    window.dispatchEvent(new CustomEvent("switchzero:consent-updated", { detail: next }));
  }

  if (!visible) return null;
  return (
    <div className="cookie-layer" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div className="cookie-card">
        <div>
          <p className="eyebrow dark">Your privacy choices</p>
          <h2 id="cookie-title">Cookies, without the fog.</h2>
          <p>Necessary cookies keep the site working. Optional cookies will only be used if you allow them.</p>
        </div>
        {managing && <div className="cookie-options">
          <label><span><b>Necessary</b><small>Required for core website functions.</small></span><input type="checkbox" checked disabled /></label>
          <label><span><b>Analytics</b><small>Helps measure how the site is used.</small></span><input type="checkbox" checked={consent.analytics} onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })} /></label>
          <label><span><b>Marketing</b><small>Supports campaign and conversion measurement.</small></span><input type="checkbox" checked={consent.marketing} onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })} /></label>
          <label><span><b>Personalisation</b><small>Remembers optional preferences.</small></span><input type="checkbox" checked={consent.personalisation} onChange={(e) => setConsent({ ...consent, personalisation: e.target.checked })} /></label>
        </div>}
        <div className="cookie-actions">
          <button type="button" className="button button-outline" onClick={() => save(defaultConsent)}>Reject optional</button>
          <button type="button" className="button button-outline" onClick={() => setManaging(true)}>Manage choices</button>
          <button type="button" className="button button-primary" onClick={() => save(managing ? consent : { analytics: true, marketing: true, personalisation: true })}>{managing ? "Save choices" : "Accept optional"}</button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return <button className="footer-button" type="button" onClick={() => window.dispatchEvent(new Event("switchzero:manage-cookies"))}>Cookie settings</button>;
}
