/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    maxUploadFileSize: 4194304,
    interval: 300000,
    dedupingInterval: 30000,
    uniqueTokenPerInterval: 500,
  },
};

module.exports = nextConfig;
