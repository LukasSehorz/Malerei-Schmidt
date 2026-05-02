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
        background: {
          primary: "#08111F",
          secondary: "#0C1828",
          alternative: "#040A14",
        },
        text: {
          DEFAULT: "#FFFFFF",
          primary: "#FFFFFF",
          secondary: "#6B82A0",
          alternative: "#08111F",
        },
        border: {
          primary: "#162236",
          alternative: "rgba(255,255,255,0.10)",
        },
        hoser: {
          gold: "#C8962E",
          "gold-light": "#D9AA44",
          cream: "#FFFFFF",
          charcoal: "#08111F",
          stone: "#6B82A0",
          navy: "#08111F",
          "navy-light": "#0C1828",
          "navy-deep": "#040A14",
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
      },
      boxShadow: {
        xlarge: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
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
