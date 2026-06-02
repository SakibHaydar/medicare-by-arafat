import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // React Compiler (moved out of experimental in Next.js 16)
  reactCompiler: true,
};

export default nextConfig;
