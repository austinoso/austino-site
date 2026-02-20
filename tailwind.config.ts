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
          dark: "#0B0D10",
          accent: "#40E0FF",
          "accent-dim": "#2A9AB8",
          "gray-900": "#151820",
          "gray-800": "#1E2128",
          "gray-700": "#2A2E38",
          "gray-600": "#383D48",
          "gray-500": "#737A8C", // Lightened for WCAG AA contrast on dark bg (was #4F5462)
          "gray-400": "#9CA3AF", // Passes 4.5:1 on #050505
          "gray-300": "#D1D5DB", // Passes 4.5:1 on #050505
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "skeleton-pulse": "skeleton-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "skeleton-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
