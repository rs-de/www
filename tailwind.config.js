/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("windy-radix-palette"),
    require("@tailwindcss/typography"),
    require("windy-radix-typography"),
  ],
  theme: {
    extend: {
      colors: { ...generateAliasForRadixColors("primary", "blue") },
      typography: () => ({
        DEFAULT: {
          css: {
            h1: {
              color: "hsl(var(--blue11))",
            },
            h2: {
              color: "hsl(var(--blue11))",
            },
            pre: { "white-space": "pre-line" },
          },
        },
      }),
    },
  },
};

function generateAliasForRadixColors(alias, color) {
  const colors = { [alias]: {} };
  for (let i = 1; i <= 12; i++) {
    colors[alias][i] = `hsl(var(--${color}${i}) / <alpha-value>)`;
  }
  return colors;
}
