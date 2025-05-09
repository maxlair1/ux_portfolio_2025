/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Adjust as needed
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Grayscale
        grey: {
          100: '#f5f6f7',
          200: '#e1e4e9',
          300: '#cfd3d9',
          400: '#b4b8bd',
          500: '#9a9ea3',
          600: '#7f8286',
          700: '#5f6164',
          800: '#3b3c3e',
          900: '#1e1a1a',
        },
        // UI & Brand Colors
        highlight: '#E0FF7C',
        folder: '#f6f0ce',
        footer: '#1e1a1a',
        button: {
          bg: '#1e1a1a',
          text: '#f5f6f7',
        },
        // Other standard UI
        'text-main': '#232323',
        'text-muted': '#777777',
        background: '#f8f8f8',
        border: '#e0e0e0',
        link: '#000000',
        accent: '#FF8A00',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['Charter', 'serif'],
      },
    },
  },
  plugins: [],
}
