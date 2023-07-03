/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "standalone",
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
