"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { SocialIcon } from "@/components/layout/social-icon";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { companyDetails } from "@/lib/content/company";
import { industryNav, serviceNav } from "@/lib/content/navigation";

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/commercial-tariff-switching", label: "Business energy" },
];
const endLinks = [
  { href: "/case-studies", label: "Case studies" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];
const menus = [
  {
    label: "Services",
    panel: "services-panel",
    links: serviceNav,
  },
  {
    label: "Industries",
    panel: "industries-panel",
    links: [{ href: "/industries", label: "All industries" }, ...industryNav],
  },
];

function TopLink({ href, label }: { href: string; label: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        closeOnClick
        className="nav-link"
        render={<Link href={href} />}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

// Desktop: shadcn navigation menu (hover-to-open, animated panel).
function DesktopNav() {
  return (
    <NavigationMenu
      className="main-nav"
      aria-label="Primary navigation"
      align="center"
      sideOffset={25}
      positionerClassName="nav-positioner"
      popupClassName="nav-popup"
    >
      <NavigationMenuList className="main-nav-list">
        {topLinks.map((link) => (
          <TopLink key={link.href} {...link} />
        ))}
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.label}>
            <NavigationMenuTrigger className="nav-link nav-trigger">
              {menu.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className={`nav-panel ${menu.panel}`}>
              <p className="nav-panel-title">{menu.label}</p>
              <div>
                {menu.links.map((item) => (
                  <NavigationMenuLink
                    closeOnClick
                    key={item.href}
                    render={<Link href={item.href} />}
                  >
                    {item.label}
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        {endLinks.map((link) => (
          <TopLink key={link.href} {...link} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Mobile: slide-down menu with collapsible Services / Industries sections.
function MobileNav({ open, close }: { open: boolean; close: () => void }) {
  return (
    <nav
      id="mobile-navigation"
      className="mobile-nav"
      data-open={open || undefined}
      aria-label="Primary navigation"
      inert={!open}
    >
      {topLinks.map((link) => (
        <Link key={link.href} href={link.href} onClick={close}>
          {link.label}
        </Link>
      ))}
      {menus.map((menu) => (
        <Collapsible key={menu.label} className="mobile-nav-group">
          <CollapsibleTrigger className="mobile-nav-trigger">
            {menu.label}
            <ChevronDownIcon aria-hidden="true" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mobile-nav-panel" keepMounted>
            <div>
              {menu.links.map((item) => (
                <Link key={item.href} href={item.href} onClick={close}>
                  {item.label}
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
      {endLinks.map((link) => (
        <Link key={link.href} href={link.href} onClick={close}>
          {link.label}
        </Link>
      ))}
      <Link className="mobile-contact" href="/contact" onClick={close}>
        Get in touch
      </Link>
    </nav>
  );
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
          <div
            className="announcement-contact"
            aria-label="SwitchtoZero contact details"
          >
            <a href={companyDetails.emailHref}>{companyDetails.email}</a>
            <span aria-hidden="true">·</span>
            <a href={companyDetails.phoneHref}>{companyDetails.phone}</a>
          </div>
          <Link href="/book-energy-review">Book a free energy review</Link>
        </div>
      </div>
      <div className="shell nav-wrap">
        <Link className="logo-link" href="/" aria-label="SwitchtoZero home">
          <BrandLogo />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <XIcon aria-hidden="true" />
          ) : (
            <MenuIcon aria-hidden="true" />
          )}
        </button>

        <DesktopNav />
        <MobileNav open={open} close={() => setOpen(false)} />

        <div
          className="header-socials"
          aria-label="SwitchtoZero social profiles"
        >
          {(["Instagram", "LinkedIn", "Facebook"] as const).map((name) => (
            <span
              className="social-link"
              role="img"
              aria-label={`${name} profile link coming soon`}
              title={`${name} profile link coming soon`}
              key={name}
            >
              <SocialIcon name={name} />
            </span>
          ))}
        </div>

        <Link className="header-cta" href="/contact">
          Get in touch
        </Link>
      </div>
    </header>
  );
}
