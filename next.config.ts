import type { NextConfig } from "next";

// Static export so GitHub Pages can serve the site as plain files;
// trailing slashes give every page its own folder (/missions/index.html).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
