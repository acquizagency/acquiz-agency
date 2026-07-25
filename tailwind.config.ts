import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF9F1",
        charcoal: "#332D2D",
      },
      fontFamily: {
        display: ["var(--font-onest)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
