/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0A1F13',
          900: '#002112',
          800: '#123420',
        },
        brand: {
          green: '#3DDC7A',
          mint: '#E4F7EA',
          peach: '#FBE2D0',
          yellow: '#FFEBB8',
          blush: '#FADADA',
        },
      },
      fontFamily: {
        sans: ['"TikTok Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1292px',
      },
    },
  },
  plugins: [],
}
