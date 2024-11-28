/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    /*  extend: {
      colors: {
        light: {
          background: "#ffffff",
          primaryText: "#333333",
          secondaryText: "#555555",
          accent: "#3b82f6",
          accentHover: "#2563eb",
          border: "#e5e7eb",
          highlight: "#10b981",
          error: "#ef4444",
        },
        dark: {
          background: "#121212",
          primaryText: "#f3f4f6",
          secondaryText: "#9ca3af",
          accent: "#60a5fa",
          accentHover: "#3b82f6",
          border: "#374151",
          highlight: "#84cc16",
          error: "#f87171",
        },
      },
    }, */

    extend: {
      colors: {
        light: {
          background: "#f9fafb",
          primaryText: "#1f2937",
          secondaryText: "#4b5563",
          accent: "#2563eb",
          accentHover: "#1d4ed8",
          border: "#d1d5db",
          highlight: "#f59e0b",
          error: "#f87171",
        },
        dark: {
          background: "#1e293b",
          primaryText: "#e5e7eb",
          secondaryText: "#9ca3af",
          accent: "#38bdf8",
          accentHover: "#0284c7",
          border: "#374151",
          highlight: "#fbbf24",
          error: "#ef4444",
        },
      },
    },
  },
  plugins: [],
};
