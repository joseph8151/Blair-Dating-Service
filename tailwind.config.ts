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
        // Quiet editorial palette: warm ivory, near-black ink, one dark brown accent.
        paper: "#f6f3ee",
        ink: {
          DEFAULT: "#1c1b19",
          // Secondary text
          light: "#6e6a64",
        },
        line: {
          DEFAULT: "#e4dfd8",
        },
        accent: {
          DEFAULT: "#3f3330",
          deep: "#2c2321",
        },
        // Legacy token names still used by the form pages, mapped onto the
        // same palette so every page reads as one system.
        off: {
          white: "#f6f3ee",
        },
        cream: {
          DEFAULT: "#fbf9f6",
        },
        blush: {
          DEFAULT: "#3f3330",
          soft: "#3f3330",
          pale: "#ece7e0",
        },
        rose: {
          DEFAULT: "#2c2321",
        },
        gold: {
          DEFAULT: "#e4dfd8",
          soft: "#e4dfd8",
        },
      },
      fontFamily: {
        // Instrument Serif has no Hangul, so Korean headline glyphs fall
        // through to Noto Serif KR; Latin glyphs and numerals stay in Instrument.
        display: [
          "var(--font-instrument-serif)",
          "var(--font-noto-serif-kr)",
          "Georgia",
          "serif",
        ],
        body: [
          "'Pretendard Variable'",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        widest2: "0.18em",
      },
      boxShadow: {
        card: "none",
        soft: "0 1px 0 0 #e4dfd8",
        lift: "none",
      },
    },
  },
  plugins: [],
};

export default config;
