/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/portfolio-xun",
  assetPrefix: "/portfolio-xun/",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
