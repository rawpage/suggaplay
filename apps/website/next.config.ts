import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname, "../.."),
  transpilePackages: ["@suggaplay/types", "@suggaplay/supabase", "@suggaplay/tokens"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "suggaplay.com" }],
        destination: "https://www.suggaplay.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
