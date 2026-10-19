export const googleAdsId = "AW-18470249647";

// send_to value from the Google Ads "Submit lead form" event snippet.
const enquiryConversion = "AW-18470249647/06dMCJXarJUdEK_JpudE";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Fires only after the server confirms the enquiry was sent. The enquiry id is
// passed as transaction_id so Google Ads drops any repeat of the same enquiry.
export function trackEnquiryConversion(enquiryId: string) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: enquiryConversion,
    transaction_id: enquiryId,
  });
}
