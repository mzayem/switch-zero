"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

type Consent = {
  analytics: boolean;
  marketing: boolean;
  personalisation: boolean;
};
const defaultConsent: Consent = {
  analytics: false,
  marketing: false,
  personalisation: false,
};

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [consent, setConsent] = useState<Consent>(defaultConsent);

  useEffect(() => {
    const saved = window.localStorage.getItem("switchzero-cookie-consent");
    const timer = window.setTimeout(() => {
      if (!saved) setVisible(true);
    }, 0);
    const open = () => {
      setVisible(true);
      setManaging(true);
    };
    window.addEventListener("switchzero:manage-cookies", open);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("switchzero:manage-cookies", open);
    };
  }, []);

  function save(next: Consent) {
    window.localStorage.setItem(
      "switchzero-cookie-consent",
      JSON.stringify({
        ...next,
        necessary: true,
        updatedAt: new Date().toISOString(),
      }),
    );
    setConsent(next);
    setVisible(false);
    window.dispatchEvent(
      new CustomEvent("switchzero:consent-updated", { detail: next }),
    );
  }

  if (!visible) return null;
  return (
    <div
      className="cookie-layer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
    >
      <div className="cookie-card">
        <div>
          <p className="eyebrow dark">Your privacy choices</p>
          <h2 id="cookie-title">Cookies, without the fog.</h2>
          <p>
            Necessary cookies keep the site working. Optional cookies will only
            be used if you allow them.
          </p>
        </div>
        {managing && (
          <div className="cookie-options">
            <label>
              <span>
                <b>Necessary</b>
                <small>Required for core website functions.</small>
              </span>
              <Checkbox checked disabled />
            </label>
            <label>
              <span>
                <b>Analytics</b>
                <small>Helps measure how the site is used.</small>
              </span>
              <Checkbox
                checked={consent.analytics}
                onCheckedChange={(analytics) =>
                  setConsent({ ...consent, analytics })
                }
              />
            </label>
            <label>
              <span>
                <b>Marketing</b>
                <small>Supports campaign and conversion measurement.</small>
              </span>
              <Checkbox
                checked={consent.marketing}
                onCheckedChange={(marketing) =>
                  setConsent({ ...consent, marketing })
                }
              />
            </label>
            <label>
              <span>
                <b>Personalisation</b>
                <small>Remembers optional preferences.</small>
              </span>
              <Checkbox
                checked={consent.personalisation}
                onCheckedChange={(personalisation) =>
                  setConsent({ ...consent, personalisation })
                }
              />
            </label>
          </div>
        )}
        <div className="cookie-actions">
          <button
            type="button"
            className="button button-outline"
            onClick={() => save(defaultConsent)}
          >
            Reject optional
          </button>
          <button
            type="button"
            className="button button-outline"
            onClick={() => setManaging(true)}
          >
            Manage choices
          </button>
          <button
            type="button"
            className="button button-primary"
            onClick={() =>
              save(
                managing
                  ? consent
                  : { analytics: true, marketing: true, personalisation: true },
              )
            }
          >
            {managing ? "Save choices" : "Accept optional"}
          </button>
        </div>
      </div>
    </div>
  );
}
