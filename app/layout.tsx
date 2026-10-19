import type { Metadata } from "next";
import { Geist_Mono, Manrope, Outfit, Inter } from "next/font/google";
import "./globals.css";
import { GoogleTag } from "@/components/analytics/google-tag";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd, siteName, siteUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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

// Site-wide defaults. Each page sets its own title, description and canonical
// URL with pageMetadata() from lib/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Helping Businesses Buy Energy Better`,
    template: `%s | ${siteName}`,
  },
  description:
    "Commercial energy procurement for UK organisations, with support for efficiency, solar PV, battery storage, monitoring and finance.",
  applicationName: siteName,
  robots: { index: true, follow: true },
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
    <html lang="en-GB" className={cn("font-sans", inter.variable)}>
      <body
        className={`${manrope.variable} ${outfit.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleTag />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
