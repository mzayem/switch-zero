import type { Metadata } from "next";
import { Geist_Mono, Manrope, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CookieBanner, SiteHeader } from "./interactive";
import { Footer } from "./site-chrome";
import { companyDetails } from "./site-data";

const GOOGLE_ADS_ID = "AW-18470249647";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "800",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://switchzero.co.uk"),
  title: {
    default: "SwitchtoZero | Helping Businesses Buy Energy Better",
    template: "%s | SwitchtoZero",
  },
  description:
    "Commercial energy procurement for UK organisations, with support for efficiency, solar PV, battery storage, monitoring and finance.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "SwitchtoZero",
    title: "Helping Businesses Buy Energy Better",
    description:
      "Commercial procurement first. Clearer decisions on contracts, consumption and on-site generation.",
    images: [
      {
        url: "/assets/switchzero-logo-teal.png",
        width: 1080,
        height: 1080,
        alt: "SwitchtoZero - Helping Businesses Buy Energy Better",
      },
    ],
  },
  robots: { index: true, follow: true },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${outfit.variable} ${geistMono.variable} antialiased`}
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <Footer />
        <CookieBanner />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied'
            });
            function applyConsent(c) {
              gtag('consent', 'update', {
                ad_storage: c.marketing ? 'granted' : 'denied',
                ad_user_data: c.marketing ? 'granted' : 'denied',
                ad_personalization: c.marketing ? 'granted' : 'denied',
                analytics_storage: c.analytics ? 'granted' : 'denied'
              });
            }
            try {
              var saved = localStorage.getItem('switchzero-cookie-consent');
              if (saved) applyConsent(JSON.parse(saved));
            } catch (e) {}
            window.addEventListener('switchzero:consent-updated', function (e) {
              applyConsent(e.detail);
            });
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "SwitchtoZero",
              legalName: companyDetails.name,
              url: "https://switchzero.co.uk",
              email: companyDetails.email,
              telephone: "+44 1633 846 927",
              address: {
                "@type": "PostalAddress",
                streetAddress: "St. Christophers Bungalow",
                addressLocality: "Caerleon",
                postalCode: "NP18 1AA",
                addressCountry: "GB",
              },
              areaServed: { "@type": "Country", name: "United Kingdom" },
              description:
                "Commercial energy procurement and energy strategy support for UK organisations.",
            }),
          }}
        />
      </body>
    </html>
  );
}
