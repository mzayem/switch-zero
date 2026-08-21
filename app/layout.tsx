import type { Metadata } from "next";
import { Geist_Mono, Manrope, Outfit } from "next/font/google";
import "./globals.css";
import { CookieBanner, SiteHeader } from "./interactive";
import { Footer } from "./site-chrome";
import { companyDetails } from "./site-data";

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
    default: "SwitchZero | Helping Businesses Buy Energy Better",
    template: "%s | SwitchZero",
  },
  description:
    "Commercial energy procurement for UK organisations, with support for efficiency, solar PV, battery storage, monitoring and finance.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "SwitchZero",
    title: "Helping Businesses Buy Energy Better",
    description:
      "Commercial procurement first. Clearer decisions on contracts, consumption and on-site generation.",
    images: [
      {
        url: "/assets/switchzero-logo-teal.png",
        width: 1080,
        height: 1080,
        alt: "SwitchZero - Helping Businesses Buy Energy Better",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "SwitchZero",
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
