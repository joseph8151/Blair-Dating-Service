import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          DEFAULT: "#F3A6B8",
          soft: "#E98FA6",
        },
        rose: {
          DEFAULT: "#D96B89",
        },
        off: {
          white: "#FAF9F7",
        },
        ink: {
          DEFAULT: "#292929",
          light: "#A8A8A8",
        },
        line: {
          DEFAULT: "#F1F1F1",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Pretendard", "Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      boxShadow: {
        card: "0 12px 40px -18px rgba(41, 41, 41, 0.18)",
        soft: "0 4px 24px -8px rgba(41, 41, 41, 0.1)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
