/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0a2234',
        white: '#ffffff',
        lightGray: '#f5f8fa',
        blueGradientStart: '#387ff6',
        blueGradientEnd: '#56bdf9',
        darkTitle: '#232323',
        grayText: '#414141',
      },
    },
  },
  plugins: [],
}

