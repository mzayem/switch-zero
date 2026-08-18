import Link from "next/link";
import Image from "next/image";
import { RoundBrandLogo } from "./brand-logo";
import { CookieSettingsButton } from "./interactive";
import { companyDetails, industryNav, serviceNav } from "./site-data";

export function FinalCta({ title = "Ready to review your current position?", text = "Whether a contract is approaching renewal or you want a second opinion on an energy project, start with a straightforward conversation." }: { title?: string; text?: string }) {
  return (
    <section className="final-cta">
      <div className="shell final-cta-grid">
        <div><p className="eyebrow">Start the conversation</p><h2>{title}</h2><p>{text}</p></div>
        <div className="cta-actions">
          <Link className="button button-primary" href="/contact">Get in touch</Link>
          <Link className="button button-ghost" href="/contact?review=free">Book a free energy review</Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-about">
          <Link className="footer-logo" href="/" aria-label="SwitchZero home"><RoundBrandLogo /></Link>
          <p>Commercial procurement first, followed by direct support to reduce consumption, generate on site and plan what comes next.</p>
          <address className="footer-contact">
            <a href={companyDetails.emailHref}>{companyDetails.email}</a>
            <a href={companyDetails.phoneHref}>{companyDetails.phone}</a>
            <span>{companyDetails.address}</span>
            <span>{companyDetails.registration}</span>
          </address>
          <Link className="button button-primary" href="/contact">Get in touch</Link>
          <a className="ombudsman-mark" href="https://www.energyombudsman.org/how-we-can-help/energy-brokers" target="_blank" rel="noreferrer" aria-label="Energy Ombudsman information for energy broker complaints">
            <Image src="/assets/energy-ombudsman-logo.svg" alt="Energy Ombudsman" width={1064} height={228} unoptimized />
            <small>Independent dispute resolution information</small>
          </a>
        </div>
        <div><h2>Company</h2><Link href="/about">About SwitchZero</Link><Link href="/how-we-work">How we work</Link><Link href="/case-studies">Case studies</Link><Link href="/insights">Insights</Link><Link href="/resources">Resources</Link><Link href="/faq">FAQs</Link></div>
        <div><h2>Services</h2>{serviceNav.slice(0, 8).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div><h2>Industries</h2>{industryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/industries">View all industries</Link></div>
        <div><h2>Support & legal</h2><Link href="/complaints-procedure">Complaints procedure</Link><Link href="/privacy">Privacy Policy</Link><Link href="/cookies">Cookie Policy</Link><Link href="/terms">Terms and Conditions</Link><Link href="/accessibility">Accessibility</Link></div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} {companyDetails.name}. Registered in England and Wales. All rights reserved.</p>
        <div><Link href="/complaints-procedure">Complaints procedure</Link><Link href="/privacy">Privacy Policy</Link><Link href="/cookies">Cookie Policy</Link><Link href="/terms">Terms and Conditions</Link><CookieSettingsButton /></div>
      </div>
      <div className="footer-rule" />
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>{items.map((item, index) => <li key={`${item.label}-${index}`}>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}</ol>
    </nav>
  );
}
