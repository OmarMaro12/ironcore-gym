import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ironcore-gym",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;