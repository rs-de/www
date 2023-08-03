/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "strict-transport-security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "x-frame-options", value: "SAMEORIGIN" },
          { key: "x-content-type-options", value: "nosniff" },
          { key: "x-xss-protection", value: "1; mode=block" },
          { key: "referrer-policy", value: "same-origin" },
          {
            key: "permissions-policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ].concat(
          process.env.NODE_ENV === "production"
            ? [
                {
                  key: "content-security-policy",
                  value:
                    "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';",
                },
              ]
            : []
        ),
      },
    ];
  },
};

module.exports = nextConfig;
