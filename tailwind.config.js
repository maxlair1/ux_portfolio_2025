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
        grey: {
          100: 'var(--color-grey-100)',
          200: 'var(--color-grey-200)',
          300: 'var(--color-grey-300)',
          400: 'var(--color-grey-400)',
          500: 'var(--color-grey-500)',
          600: 'var(--color-grey-600)',
          700: 'var(--color-grey-700)',
          800: 'var(--color-grey-800)',
          900: 'var(--color-grey-900)',
        },
        highlight: 'var(--color-highlight)',
        folder: 'var(--color-folder)',
        footer: 'var(--color-footer)',
        button: {
          bg: 'var(--color-button-bg)',
          text: 'var(--color-button-text)',
        },
        'text-main': 'var(--color-text-main)',
        'text-muted': 'var(--color-text-muted)',
        background: 'var(--color-background)',
        border: 'var(--color-border)',
        link: 'var(--color-link)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
