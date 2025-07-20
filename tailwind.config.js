/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.js"
  ],
  safelist: [
    'max-h-0',
    'max-h-[4000px]',
    'transition-all',
    'duration-500',
    'ease-in-out',
    'rotate-0',
    'rotate-180'
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

