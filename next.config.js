/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  TypeError: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
