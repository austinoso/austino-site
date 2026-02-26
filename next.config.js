/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      // Eliminate the austino.dev → www.austino.dev redirect chain
      // by handling it at the application level with a 308 permanent redirect
      {
        source: "/:path*",
        has: [{ type: "host", value: "austino.dev" }],
        destination: "https://www.austino.dev/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/stats/script.js",
        destination: "https://cloud.umami.is/script.js",
      },
      {
        source: "/stats/:path*",
        destination: "https://cloud.umami.is/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
