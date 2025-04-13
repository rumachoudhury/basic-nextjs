import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["cdni.iconscout.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdni.iconscout.com",
      },
    ],
  },
};

export default nextConfig;
