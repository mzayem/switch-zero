import Script from "next/script";
import { googleAdsId } from "@/lib/analytics";

// Google tag with Consent Mode: ad and analytics storage stay denied until the
// visitor opts in through the cookie banner (marketing / analytics categories).
export function GoogleTag() {
  return (
    <>
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
          gtag('config', '${googleAdsId}');
        `}
      </Script>
      {/* The library is large; load it once the page is idle. Calls made
          before then wait in dataLayer, so no conversion is lost. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="lazyOnload"
      />
    </>
  );
}
