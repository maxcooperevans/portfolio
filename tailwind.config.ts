import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        surface:       "var(--surface)",
        card:          "var(--card)",
        edge:          "var(--edge)",
        heading:       "var(--heading)",
        muted:         "var(--muted)",
        accent:        "var(--accent)",
        "accent-tint": "var(--accent-tint)",
      },
    },
  },
  plugins: [],
};

export default config;
