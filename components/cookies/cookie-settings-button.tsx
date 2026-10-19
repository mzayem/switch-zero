"use client";

export function CookieSettingsButton() {
  return (
    <button
      className="footer-button"
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("switchzero:manage-cookies"))
      }
    >
      Cookie settings
    </button>
  );
}
