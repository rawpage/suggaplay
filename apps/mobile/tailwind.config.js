/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: "#FF2747",
        background: "#000000",
        foreground: "#FFFFFF",
        muted: "#737373",
        "muted-foreground": "#A3A3A3",
        border: "#262626",
        card: "#0A0A0A",
      },
      fontSize: {
        label: ["11px", { letterSpacing: "0.2em", lineHeight: "16px" }],
      },
    },
  },
  plugins: [],
};
