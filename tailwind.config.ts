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
        // Premium boutique palette — see docs/brand or the redesign brief.
        // Soft Ivory: primary page background
        off: {
          white: "#F7F4F1",
        },
        // Warm White: card / panel surfaces (never pure #FFFFFF)
        cream: {
          DEFAULT: "#FCFAF8",
        },
        // Dusty Rose (light accent) / Deep Rose Mauve (primary accent, CTAs)
        blush: {
          DEFAULT: "#D8A1AF",
          soft: "#B97C8D",
        },
        // Hover state for mauve — deepened, not brightened
        rose: {
          DEFAULT: "#A16D80",
        },
        // Charcoal (text, dark sections) / Warm Gray (secondary text)
        ink: {
          DEFAULT: "#222126",
          light: "#8C8682",
        },
        // Light Gray — borders, dividers
        line: {
          DEFAULT: "#E8E2DD",
        },
        // Subtle Champagne Gold — used sparingly for dividers, accents
        gold: {
          DEFAULT: "#C8B38A",
          soft: "#DCCBA6",
        },
      },
      fontFamily: {
        // Latin glyphs render in Playfair/Inter; Korean glyphs (absent from
        // those fonts) fall through automatically to their Noto companion.
        display: [
          "var(--font-playfair)",
          "var(--font-noto-serif-kr)",
          "Georgia",
          "serif",
        ],
        body: [
          "var(--font-inter)",
          "var(--font-noto-sans-kr)",
          "-apple-system",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1280px",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      boxShadow: {
        card: "0 20px 50px -20px rgba(34, 33, 38, 0.16)",
        soft: "0 4px 28px -10px rgba(34, 33, 38, 0.12)",
        lift: "0 14px 34px -12px rgba(161, 109, 128, 0.38)",
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
