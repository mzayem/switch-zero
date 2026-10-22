import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope, Outfit } from "next/font/google";
import "./globals.css";
import { GoogleTag } from "@/components/analytics/google-tag";
import { JsonLd } from "@/components/seo/json-ld";
import {
  defaultDescription,
  organizationJsonLd,
  siteName,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";

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
  // Only used for small numerals well below the fold.
  preload: false,
});

// Site-wide defaults. Each page sets its own title, description, canonical
// URL and social image with pageMetadata() from lib/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Helping Businesses Buy Energy Better`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "business",
  keywords: [
    "business energy",
    "commercial energy procurement",
    "business electricity",
    "business gas",
    "commercial tariff switching",
    "energy broker UK",
    "commercial solar PV",
    "battery storage",
    "energy management",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#003336",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={cn(
        "font-sans",
        manrope.variable,
        outfit.variable,
        geistMono.variable,
      )}
    >
      <body className="antialiased">
        <NextTopLoader color="#26F2ED" showSpinner={false} />
        {children}
        <GoogleTag />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
