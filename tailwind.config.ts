import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          950: "#080a0f",
          900: "#0d1117",
          850: "#121721",
          800: "#18202c",
          700: "#222d3d",
        },
        accent: {
          cyan: "#38bdf8",
          "cyan-muted": "rgba(56, 189, 248, 0.15)",
          blue: "#3b82f6",
          "blue-muted": "rgba(59, 130, 246, 0.15)",
          steel: "#64748b",
          emerald: "#10b981",
        },
        fg: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
          subtle: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scan-line": "scanLine 6s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.2em",
        mega: "0.28em",
      },
      borderColor: {
        subtle: "rgba(255, 255, 255, 0.08)",
        panel: "rgba(255, 255, 255, 0.14)",
        active: "rgba(56, 189, 248, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
