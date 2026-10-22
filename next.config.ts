import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF first (smallest), WebP for browsers without it.
    formats: ["image/avif", "image/webp"],
    // Optimised variants are cached for 30 days.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        // Asset filenames aren't content-hashed, so cache for a week and
        // revalidate in the background rather than marking them immutable.
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  experimental: {
    // Enquiry forms can attach a bill of up to 3 MB.
    serverActions: { bodySizeLimit: "4mb" },
  },
};

export default nextConfig;
