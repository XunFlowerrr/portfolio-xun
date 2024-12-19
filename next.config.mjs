/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/portfolio-xun",
  assetPrefix: "/portfolio-xun/",
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
