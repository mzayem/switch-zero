import Image from "next/image";

type LogoSurface = "teal" | "white";

type LogoAsset = {
  src: string;
  width: number;
  height: number;
};

const lockupLogoBySurface: Record<LogoSurface, LogoAsset> = {
  teal: { src: "/assets/switchzero-logo-teal-lockup.png", width: 720, height: 84 },
  white: { src: "/assets/switchzero-logo-white-lockup.png", width: 709, height: 83 },
};

const roundLogoBySurface: Record<LogoSurface, LogoAsset> = {
  teal: { src: "/assets/switchzero-logo-teal.png", width: 1080, height: 1080 },
  white: { src: "/assets/switchzero-logo-white.png", width: 1080, height: 1080 },
};

export function BrandLogo({ className = "", surface = "teal" }: { className?: string; surface?: LogoSurface }) {
  const logo = lockupLogoBySurface[surface];

  return (
    <span className={`brand-lockup brand-lockup--${surface} ${className}`.trim()}>
      <Image
        className="brand-lockup-image"
        src={logo.src}
        alt="SwitchZero"
        width={logo.width}
        height={logo.height}
        priority
        unoptimized
      />
    </span>
  );
}

export function RoundBrandLogo({ className = "", surface = "teal" }: { className?: string; surface?: LogoSurface }) {
  const logo = roundLogoBySurface[surface];

  return (
    <span className={`round-brand-logo round-brand-logo--${surface} ${className}`.trim()}>
      <Image
        className="round-brand-logo-image"
        src={logo.src}
        alt="SwitchZero"
        width={logo.width}
        height={logo.height}
        unoptimized
      />
    </span>
  );
}
