import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobileS: "320px",
        mobileM: "375px",
        mobileL: "425px",
        tablet: "768px",
        laptop: "1024px",
        dt: "1224px",
        laptopL: "1440px",
        desktop: "2560px",
      },
      colors: {
        ink: "#333333",
        watermark: "#eeeeee",
        overlay: "#222222",
        accent: {
          DEFAULT: "#2f9c8f",
          soft: "#4dd6c4",
        },
        status: {
          live: "#3fbf6b",
          onchain: "#e0a835",
          code: "#4a8fe7",
          nda: "#8b93a1",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
