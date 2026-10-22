import { CookieBanner } from "@/components/cookies/cookie-banner";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionController } from "@/components/motion/motion-controller";

// Header, footer and cookie banner around page content.
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <SiteHeader />
      {children}
      <Footer />
      <CookieBanner />
      <MotionController />
    </>
  );
}
