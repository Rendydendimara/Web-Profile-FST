const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  output: 'standalone',
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "**",
  //     },
  //     {
  //       protocol: "http",
  //       hostname: "**",
  //     },
  //   ],
  //   domains: ['localhost', 'profile.bomber.app', 'marketingweek.imgix.net'],
  // },
};

module.exports = nextConfig;
