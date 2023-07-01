/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite-typography"), require("flowbite/plugin")],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.primary"),
            },
            h2: {
              color: theme("colors.primary"),
            },
            pre: { "white-space": "pre-line" },
          },
        },
      }),
    },
  },
};
