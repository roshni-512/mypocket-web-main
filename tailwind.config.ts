import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "oswald-300": ["Oswald300", "sans-serif"],
        "oswald-400": ["Oswald400", "sans-serif"],
        "oswald-500": ["Oswald500", "sans-serif"],
        "oswald-600": ["Oswald600", "sans-serif"],
        "oswald-700": ["Oswald700", "sans-serif"],
        "oswald-800": ["Oswald800", "sans-serif"],
        "oswald-900": ["Oswald900", "sans-serif"],

        "roboto-100": ["Roboto100", "sans-serif"],
        "roboto-300": ["Roboto300", "sans-serif"],
        "roboto-400": ["Roboto400", "sans-serif"],
        "roboto-500": ["Roboto500", "sans-serif"],
        "roboto-700": ["Roboto700", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
