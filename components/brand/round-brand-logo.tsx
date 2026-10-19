import Image from "next/image";
import { roundLogoBySurface, type LogoSurface } from "./logo-assets";

export function RoundBrandLogo({
  className = "",
  surface = "teal",
}: {
  className?: string;
  surface?: LogoSurface;
}) {
  const logo = roundLogoBySurface[surface];

  return (
    <span
      className={`round-brand-logo round-brand-logo--${surface} ${className}`.trim()}
    >
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
