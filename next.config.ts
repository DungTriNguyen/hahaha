import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.storims.com", "storage.googleapis.com"], // <- THÊM domain ở đây
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
