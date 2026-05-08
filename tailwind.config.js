/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        // ── Surfaces ────────────────────────────────────────────────
        // primary  = warm "blueprint paper" canvas — main page bg
        // secondary = slightly more pigmented for alternating sections
        // alternative = deep brand blue — used for accent / feature blocks
        background: {
          primary: "#FDFCF8",
          secondary: "#F2EFE6",
          alternative: "#0E2A6B",
        },
        // ── Text ────────────────────────────────────────────────────
        // primary  = near-black w/ cool undertone (on light)
        // secondary = mid-gray (on light)
        // alternative = white (used on accent blue blocks)
        text: {
          DEFAULT: "#0A1628",
          primary: "#0A1628",
          secondary: "#5A6478",
          alternative: "#FFFFFF",
        },
        // ── Borders ─────────────────────────────────────────────────
        border: {
          primary: "rgba(14,42,107,0.14)",
          alternative: "rgba(14,42,107,0.08)",
        },
        // ── Brand palette ───────────────────────────────────────────
        // "hoser-*" tokens kept by name for backwards compatibility but
        // repointed to the new SCHMID-BAU light + deep-blue identity.
        hoser: {
          gold: "#0E2A6B",         // primary brand accent (was gold)
          "gold-light": "#1A3D8A", // brighter blue
          cream: "#FDFCF8",        // canvas off-white
          charcoal: "#0A1628",     // near-black ink
          stone: "#5A6478",        // mid gray
          navy: "#0E2A6B",         // deep brand blue — feature blocks
          "navy-light": "#1A3D8A",
          "navy-deep": "#07194A",
        },
        neutral: {
          lightest: "#FFFFFF",
        },
      },
      animation: {
        "marquee-top": "marquee-top 50s linear infinite",
        "marquee-bottom": "marquee-bottom 50s linear infinite",
        "marquee-left": "marquee-left 25s linear infinite",
        "marquee-right": "marquee-right 25s linear infinite",
        "scroll-down": "scroll-down 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
      },
      keyframes: {
        "marquee-top": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "marquee-bottom": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      boxShadow: {
        xlarge: "0px 24px 48px -12px rgba(14, 42, 107, 0.10)",
      },
      fontSize: {
        md: ["1.125rem", { lineHeight: "1.5" }],
        "10xl": ["3.5rem", { lineHeight: "1.2" }],
      },
      spacing: {
        18: "4.5rem",
      },
      minHeight: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
