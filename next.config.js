/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "api.sekwoja.com",
        protocol: "http",
        pathname: "/wp-content/**",
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
