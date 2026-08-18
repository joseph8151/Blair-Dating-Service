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
        // V3 "Curated Around You" palette — see redesign brief.
        // Warm Ivory: primary page background
        off: {
          white: "#FCF9F5",
        },
        // White: card / panel surfaces
        cream: {
          DEFAULT: "#FFFFFF",
        },
        // Dusty Rose (light accent) / Deep Rose (primary accent, CTAs)
        blush: {
          DEFAULT: "#D9A6AE",
          soft: "#A96F7C",
          // Soft Blush — very light pink tint for subtle section/chip backgrounds
          pale: "#F7E9EA",
        },
        // Hover state for the primary accent — deepened, not brightened
        rose: {
          DEFAULT: "#8B5A66",
        },
        // Charcoal (text, dark sections) / Warm Gray (secondary text)
        ink: {
          DEFAULT: "#27272A",
          light: "#AAA3A3",
        },
        // Borders, dividers
        line: {
          DEFAULT: "#E6DEDA",
        },
        // Champagne Beige — used sparingly for dividers, accents
        gold: {
          DEFAULT: "#CBB99A",
          soft: "#DDD0BA",
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
        card: "0 20px 50px -20px rgba(39, 39, 42, 0.16)",
        soft: "0 4px 28px -10px rgba(39, 39, 42, 0.12)",
        lift: "0 14px 34px -12px rgba(139, 90, 102, 0.38)",
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
