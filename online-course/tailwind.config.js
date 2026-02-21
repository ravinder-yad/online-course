/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#818cf8',
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: {
          light: '#c084fc',
          DEFAULT: '#a855f7',
          dark: '#9333ea',
        },
        dark: {
          DEFAULT: '#111827',
          lighter: '#1f2937',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
