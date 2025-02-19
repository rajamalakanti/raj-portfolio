import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["tec.illinois.edu", "jacobsoninstitute.org", "i.ytimg.com"], // Allow external images from this domain
  },
};

export default nextConfig;
