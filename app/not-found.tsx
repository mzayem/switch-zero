import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page could not be found. Head back to the SwitchZero homepage or get in touch about your business energy.",
  robots: { index: false, follow: true },
};

// Unmatched URLs render outside the (root) layout, so add the shell here.
export default function NotFound() {
  return (
    <SiteShell>
      <main id="main-content" className="not-found">
        <div className="shell">
          <p className="eyebrow dark">404 · Page not found</p>
          <h1>This page has slipped off the renewal calendar.</h1>
          <p>
            The link may be outdated. Head back to the homepage or speak with
            SwitchtoZero about a live requirement.
          </p>
          <div className="hero-actions">
            <Button
              variant="dark"
              nativeButton={false}
              render={<Link href="/" />}
            >
              Back to home
            </Button>
            <Button
              variant="light"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
