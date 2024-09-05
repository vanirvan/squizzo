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
      colors: {
        background: {
          light: "#f4faf4",
          dark: "#111116",
        },
        signature: {
          DEFAULT: "#7209b7",
          100: "#e3cef1",
          200: "#c79de2",
          300: "#aa6bd4",
          400: "#8e3ac5",
          500: "#7209b7",
          600: "#5b0792",
          700: "#44056e",
          800: "#2e0449",
          900: "#170225",

          primary: {
            DEFAULT: "#c295da",
            400: "#ceaae1",
            500: "#c295da",
            600: "#9b77ae",
          },

          secondary: {
            DEFAULT: "#7c2b44",
            400: "#965569",
            500: "#7c2b44",
            600: "#632236",
          },
        },
        accent: {
          light: "#57c9ee",
          dark: "#a17da2",
        },
        card: {
          light: "#eaf9ea",
          dark: "#191920",
        },
      },
    },
  },
  plugins: [],
};
export default config;
