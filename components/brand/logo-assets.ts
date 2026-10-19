export type LogoSurface = "teal" | "white";

type LogoAsset = {
  src: string;
  width: number;
  height: number;
};

export const lockupLogoBySurface: Record<LogoSurface, LogoAsset> = {
  teal: {
    src: "/assets/switchzero-logo-teal-lockup.png",
    width: 720,
    height: 84,
  },
  white: {
    src: "/assets/switchzero-logo-white-lockup.png",
    width: 709,
    height: 83,
  },
};

export const roundLogoBySurface: Record<LogoSurface, LogoAsset> = {
  teal: { src: "/assets/switchzero-logo-teal.png", width: 1080, height: 1080 },
  white: {
    src: "/assets/switchzero-logo-white.png",
    width: 1080,
    height: 1080,
  },
};
