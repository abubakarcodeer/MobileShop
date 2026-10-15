/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { xl: "1240px" },
    },
    extend: {
      // Palette from the MobileShop design: electric blue, deep navy, cool light-blue panels.
      colors: {
        ink: "#0B1533",
        navy: { DEFAULT: "#061436", deep: "#030B24", soft: "#0D2A6B" },
        mist: "#EAF1FF",
        cloud: "#F5F7FB",
        muted: "#667085",
        line: "#E6EAF2",
        brand: { DEFAULT: "#1463FF", deep: "#0B4FD8", ink: "#0A3A97", soft: "#D5E3FF" },
        accent: { DEFAULT: "#5B9DFF", deep: "#1463FF", soft: "#DCE8FF" },
        star: "#FFB020",
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        logo: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,21,51,.04), 0 10px 28px -14px rgba(20,99,255,.22)",
        glow: "0 0 80px 10px rgba(20,99,255,.45)",
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: "translateY(12px)" }, to: { opacity: 1, transform: "none" } },
        slideIn: { from: { transform: "translateX(100%)" }, to: { transform: "none" } },
        slideInLeft: { from: { transform: "translateX(-100%)" }, to: { transform: "none" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: {
        fadeUp: "fadeUp .5s ease-out both",
        slideIn: "slideIn .35s cubic-bezier(.2,1,.3,1) both",
        slideInLeft: "slideInLeft .35s cubic-bezier(.2,1,.3,1) both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
