/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#060608",
          accent: "#40E0FF",
          "accent-dim": "#2A9AB8",
          violet: "#A78BFA",
          rose: "#F472B6",
          amber: "#FBBF24",
          "gray-900": "#0C0D12",
          "gray-800": "#14151C",
          "gray-700": "#1E2028",
          "gray-600": "#2A2D38",
          "gray-500": "#8B90A0",
          "gray-400": "#9CA3AF",
          "gray-300": "#D1D5DB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: [
          "var(--font-jakarta)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["monospace"],
      },
      animation: {
        "skeleton-pulse": "skeleton-pulse 2s ease-in-out infinite",
        "feed-in": "feed-in 0.4s ease-out forwards",
        "chevron-glow": "chevron-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "skeleton-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
        "feed-in": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "chevron-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
