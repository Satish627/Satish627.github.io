import type { NextConfig } from "next";

// Static export so GitHub Pages can serve the site as plain files.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
