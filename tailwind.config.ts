import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        "up-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" }, // Adjust the value as needed
        },
      },
      animation: {
        "up-down": "up-down 2s ease-in-out infinite alternate-reverse both",
      },
      colors: {
        "blue-dark-imperial": "#012970", // Dark Imperial Blue
        "blue-ultramarine": "#4154F1", // Ultramarine Blue
        "white-snow": "#f7f7f7", // Use for page backgrounds
        "black-900": "#1a1a1a", // WCAG-compliant
        "black-800": "#333333", // WCAG-compliant
        "black-700": "#4d4d4d", // WCAG-compliant
        "black-600": "#666666", // WCAG-compliant for large text
        "black-500": "#808080", // Use sparingly for less important text
        "black-400": "#999999", // Not recommended for body text
        "black-300": "#b3b3b3", // Not recommended for body text
        "black-200": "#cccccc", // Use for very subtle text
        "black-100": "#e6e6e6", // Use for background or non-essential
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;