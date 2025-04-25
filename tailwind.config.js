/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define amber colors
        "amber": {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        
        // Define stone colors
        "stone": {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        
        // Shadcn UI semantic color mappings
        "primary": {
          DEFAULT: colors.amber[500],
          foreground: "#ffffff",
        },
        "secondary": {
          DEFAULT: colors.stone[200],
          foreground: colors.stone[900],
        },
        "accent": {
          DEFAULT: colors.amber[600],
          foreground: "#ffffff",
        },
        "muted": {
          DEFAULT: colors.stone[100],
          foreground: colors.stone[500],
        },
        "card": {
          DEFAULT: "#ffffff",
          foreground: colors.stone[900],
        },
        "background": {
          DEFAULT: "#ffffff",
          foreground: colors.stone[900],
        },
        "border": colors.stone[200],
        "ring": colors.amber[500],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}