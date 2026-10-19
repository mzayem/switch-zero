export function SocialIcon({
  name,
}: {
  name: "Instagram" | "LinkedIn" | "Facebook";
}) {
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="social-fill" cx="17.3" cy="6.8" r="1" />
      </svg>
    );
  }
  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7.4v.1M11.5 17v-7m0 3.1c.7-2 4.5-2.2 4.5 1.1V17" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path
        d="M13.7 8.1h2V5.2h-2.4c-2.8 0-4.3 1.7-4.3 4.5v1.8H6.5v3H9V21h3.2v-6.5h2.7l.5-3h-3.2V9.9c0-1.2.4-1.8 1.5-1.8Z"
        className="social-fill"
      />
    </svg>
  );
}
