import Link from "next/link";
import Image from "next/image";
import { RoundBrandLogo } from "@/components/brand/round-brand-logo";
import { CookieSettingsButton } from "@/components/cookies/cookie-settings-button";
import { companyDetails } from "@/lib/content/company";
import { industryNav, serviceNav } from "@/lib/content/navigation";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-about">
          <Link className="footer-logo" href="/" aria-label="SwitchZero home">
            <RoundBrandLogo />
          </Link>
          <p>
            Commercial procurement first, followed by direct support to reduce
            consumption, generate on site and plan what comes next.
          </p>
          <address className="footer-contact">
            <a href={companyDetails.emailHref}>{companyDetails.email}</a>
            <a href={companyDetails.phoneHref}>{companyDetails.phone}</a>
            <span>{companyDetails.address}</span>
            <span>{companyDetails.registration}</span>
            <span>Company number: {companyDetails.companyNumber}</span>
          </address>
          <Button nativeButton={false} render={<Link href="/contact" />}>
            Get in touch
          </Button>
          <a
            className="ombudsman-mark"
            href="https://www.energyombudsman.org/how-we-can-help/energy-brokers"
            target="_blank"
            rel="noreferrer"
            aria-label="Energy Ombudsman information for energy broker complaints"
          >
            <Image
              src="/assets/energy-ombudsman-logo.svg"
              alt="Energy Ombudsman"
              width={1064}
              height={228}
              unoptimized
            />
            <small>Independent dispute resolution information</small>
          </a>
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/about">About SwitchZero</Link>
          <Link href="/how-we-work">How we work</Link>
          <Link href="/case-studies">Case studies</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/faq">FAQs</Link>
        </div>
        <div>
          <h2>Services</h2>
          {serviceNav.slice(0, 8).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Industries</h2>
          {industryNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/industries">View all industries</Link>
        </div>
        <div>
          <h2>Support & legal</h2>
          <Link href="/complaints-procedure">Complaints procedure</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/cookies">Cookie Policy</Link>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/accessibility">Accessibility</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>
          © {new Date().getFullYear()} {companyDetails.name} trading as
          SwitchZero. Registered in England and Wales. Company number:{" "}
          {companyDetails.companyNumber}. All rights reserved.
        </p>
        <div>
          <Link href="/complaints-procedure">Complaints procedure</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/cookies">Cookie Policy</Link>
          <Link href="/terms">Terms and Conditions</Link>
          <CookieSettingsButton />
        </div>
      </div>
      <div className="footer-rule" />
    </footer>
  );
}
