import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#070707",
        graphite: "#111315",
        coal: "#1a1a1a",
        champagne: "#f5efe3",
        platinum: "#f6f7f8",
        gold: {
          50: "#fff8dc",
          100: "#ffedb4",
          200: "#fedb74",
          300: "#f5c243",
          400: "#d8a42d",
          500: "#b8841f",
          600: "#916117"
        }
      },
      boxShadow: {
        gold: "0 24px 80px rgba(216, 164, 45, 0.24)",
        glass: "0 18px 70px rgba(0, 0, 0, 0.32)"
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle at center, rgba(216,164,45,0.26), transparent 48%)",
        "premium-grid": "linear-gradient(rgba(216,164,45,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(216,164,45,0.08) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "Georgia", "serif"]
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        }
      },
      animation: {
        shimmer: "shimmer 2.8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite"
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        16: "0.16",
        18: "0.18",
        24: "0.24",
        35: "0.35",
        42: "0.42",
        46: "0.46",
        48: "0.48",
        52: "0.52",
        54: "0.54",
        56: "0.56",
        58: "0.58",
        62: "0.62",
        64: "0.64",
        68: "0.68",
        72: "0.72",
        74: "0.74",
        82: "0.82"
      }
    }
  },
  plugins: []
};

export default config;
