/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? "/Project-Website" : "",
  assetPrefix: isProd ? "/Project-Website/" : ""
};

module.exports = nextConfig;
