/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? "/Project-Website" : "",
  assetPrefix: isProd ? "/Project-Website/" : ""
};

module.exports = nextConfig;
