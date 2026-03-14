/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      // Eliminate the loudbark.dev → www.loudbark.dev redirect chain
      // by handling it at the application level with a 308 permanent redirect
      {
        source: "/:path*",
        has: [{ type: "host", value: "loudbark.dev" }],
        destination: "https://www.loudbark.dev/:path*",
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
