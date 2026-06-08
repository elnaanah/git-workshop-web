/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gh: {
          bg: "#0d1117",
          card: "#161b22",
          border: "#30363d",
          muted: "#8b949e",
          text: "#f0f6fc",
          green: "#2ea043",
          blue: "#58a6ff",
        },
        gl: {
          orange: "#fc6d26",
          amber: "#fca326",
        },
      },
      fontFamily: {
        display: ["Aptos Display", "Segoe UI", "Tahoma", "sans-serif"],
        mono: ["Cascadia Code", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(252, 109, 38, 0.18)",
        blueglow: "0 0 60px rgba(88, 166, 255, 0.14)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(88,166,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(88,166,255,.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
