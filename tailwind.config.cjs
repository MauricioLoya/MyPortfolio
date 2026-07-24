/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Clash Display", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Satoshi", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        cream: "#F5F0E8",
        dark: "#0A0A0B",
        emerald: "#10B981",
        emeraldLight: "#34D399",
        emeraldDark: "#059669",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
