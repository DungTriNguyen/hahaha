import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  // assetPrefix: "https://cdn.storims.com",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.storims.com",
        port: "", // bỏ trống nếu không dùng cổng cụ thể
        pathname: "/**", // cho phép tất cả đường dẫn
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
