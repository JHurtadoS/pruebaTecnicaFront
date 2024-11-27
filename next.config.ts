import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ["pages", "utils"],
  },
  srcDir: true

};

export default nextConfig;
