import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enquiry forms can attach a bill of up to 3 MB.
    serverActions: { bodySizeLimit: "4mb" },
  },
};

export default nextConfig;
