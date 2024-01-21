const { createPlugin } = require("windy-radix-palette");
const colors = createPlugin({ opacitySupport: false });

// https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette
const primaryColor = "blue";
const grayScaleColor = "slate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [colors.plugin, require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: { primary: colors.alias(primaryColor) },
      typography: (theme) => ({
        radixColors: {
          css: {
            "--tw-prose-body": theme(`colors.${grayScaleColor}[12]/1`),
            "--tw-prose-headings": theme(`colors.${primaryColor}[9]/1`),
            "--tw-prose-lead": theme(`colors.${primaryColor}[11]/1`),
            "--tw-prose-links": theme(`colors.${primaryColor}[12]/1`),
            "--tw-prose-bold": theme(`colors.${primaryColor}[12]/1`),
            "--tw-prose-counters": theme(`colors.${primaryColor}[10]/1`),
            "--tw-prose-bullets": theme(`colors.${primaryColor}[8]/1`),
            "--tw-prose-hr": theme(`colors.${primaryColor}[6]/1`),
            "--tw-prose-quotes": theme(`colors.${primaryColor}[12]/1`),
            "--tw-prose-quote-borders": theme(`colors.${primaryColor}[6]/1`),
            "--tw-prose-captions": theme(`colors.${primaryColor}[11]/1`),
            "--tw-prose-code": theme(`colors.${primaryColor}[12]/1`),
            "--tw-prose-pre-code": theme(`colors.${primaryColor}[12]/1`),
            "--tw-prose-pre-bg": theme(`colors.${grayScaleColor}[2]/1`),
            "--tw-prose-td-borders": theme(`colors.${grayScaleColor}[6]/1`),
            "--tw-prose-th-borders": theme(`colors.${primaryColor}[6]/1`),
          },
        },
        DEFAULT: {
          css: {
            pre: { "white-space": "pre-line" },
          },
        },
      }),
    },
  },
};
