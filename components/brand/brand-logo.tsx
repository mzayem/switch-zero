import Image from "next/image";
import { lockupLogoBySurface, type LogoSurface } from "./logo-assets";

export function BrandLogo({
  className = "",
  surface = "teal",
}: {
  className?: string;
  surface?: LogoSurface;
}) {
  const logo = lockupLogoBySurface[surface];

  return (
    <span
      className={`brand-lockup brand-lockup--${surface} ${className}`.trim()}
    >
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
