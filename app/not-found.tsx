import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";

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
            <Link className="button button-dark" href="/">
              Back to home
            </Link>
            <Link className="button button-outline" href="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
