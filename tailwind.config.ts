import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "var(--foreground)",
        blue: "#3b82f6",
        purple: "#a855f7",
        pink: "#ec4899",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
