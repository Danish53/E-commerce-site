// const { createProxyMiddleware } = require("http-proxy-middleware");
import { createProxyMiddleware } from "http-proxy-middleware";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "assets.led-italia.it",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy",
        destination: "https://led-italia.it/api/catalog",
      },
    ];
  },
};

export default nextConfig;

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/proxy",
//         destination: "https://led-italia.it/api/catalog",
//       },
//     ];
//   },
// };
