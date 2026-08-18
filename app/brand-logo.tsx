import Image from "next/image";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-lockup ${className}`.trim()}>
      <Image
        className="brand-lockup-image"
        src="/assets/switchzero-logo.jpeg"
        alt="SwitchZero"
        width={1951}
        height={806}
        priority
        unoptimized
      />
    </span>
  );
}

export function RoundBrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`round-brand-logo ${className}`.trim()}>
      <Image
        className="round-brand-logo-image"
        src="/assets/switchzero-round-logo.jpeg"
        alt="SwitchZero"
        width={1254}
        height={1254}
        unoptimized
      />
    </span>
  );
}
