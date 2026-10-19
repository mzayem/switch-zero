import { SiteShell } from "@/components/layout/site-shell";

// Site shell shared by every page in (routes).
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell>{children}</SiteShell>;
}
