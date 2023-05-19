/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#14B8A6',
        secondary: '#64748B',
        dark: '#0F172A'
      },
      screens: {
        'lg': '900px',
        'xl': '1024px',
        '2xl': '1120px',
      }
    },
  },
  plugins: [],
}

