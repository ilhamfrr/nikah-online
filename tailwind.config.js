/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sahkita-bg': '#F2F2F2',
        'sahkita-primary': '#526D82',
        'sahkita-dark': '#27374D',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'script': ['"Great Vibes"', 'cursive'],
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        sahkita: {
          "primary": "#526D82",
          "secondary": "#9DB2BF",
          "accent": "#DDE6ED",
          "neutral": "#27374D",
          "base-100": "#F2F2F2",
        },
      },
    ],
  },
}
