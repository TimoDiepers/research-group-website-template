/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // RWTH Color Palette
        'rwth-blau': {
          100: '#00549f',
          75: '#407fb7',
          50: '#8ebae5',
          25: '#c7ddf2',
          10: '#e8f1fa',
        },
        'rwth-schwarz': {
          100: '#000000',
          75: '#646567',
          50: '#9c9e9f',
          25: '#cfd1d2',
          10: '#eceded',
        },
        'rwth-magenta': {
          100: '#e30066',
          75: '#e96088',
          50: '#f19eb1',
          25: '#f9d2da',
          10: '#fdeef0',
        },
        'rwth-gelb': {
          100: '#ffed00',
          75: '#fff055',
          50: '#fff59b',
          25: '#fffad1',
          10: '#fffdee',
        },
        'rwth-petrol': {
          100: '#006165',
          75: '#2d7f83',
          50: '#7da4a7',
          25: '#bfd0d1',
          10: '#e6ecec',
        },
        'rwth-tuerkis': {
          100: '#0098a1',
          75: '#00b1b7',
          50: '#89cccf',
          25: '#cae7e7',
          10: '#ebf6f6',
        },
        'rwth-gruen': {
          100: '#57ab27',
          75: '#8dc060',
          50: '#b8d698',
          25: '#ddebce',
          10: '#f2f7ec',
        },
        'rwth-maigruen': {
          100: '#bdcd00',
          75: '#d0d95c',
          50: '#e0e69a',
          25: '#f0f3d0',
          10: '#f9faed',
        },
        'rwth-orange': {
          100: '#f6a800',
          75: '#fabe50',
          50: '#fdd48f',
          25: '#feeac9',
          10: '#fff7ea',
        },
        'rwth-rot': {
          100: '#cc071e',
          75: '#d85c41',
          50: '#e69679',
          25: '#f3cdbb',
          10: '#faebe3',
        },
        'rwth-bordeaux': {
          100: '#a11035',
          75: '#b65256',
          50: '#cd8b87',
          25: '#e5c5c0',
          10: '#f5e8e5',
        },
        'rwth-violett': {
          100: '#612158',
          75: '#834e75',
          50: '#a8859e',
          25: '#d2c0cd',
          10: '#ede5ea',
        },
        'rwth-lila': {
          100: '#7a6fac',
          75: '#9b91c1',
          50: '#bcb5d7',
          25: '#dedaeb',
          10: '#f2f0f7',
        },
        border: 'hsl(214 32% 91%)',
        input: 'hsl(214 32% 91%)',
        ring: 'hsl(214 32% 59%)',
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(224 71% 4%)',
        primary: {
          DEFAULT: 'hsl(222 83% 53%)',
          foreground: 'hsl(210 40% 98%)',
        },
        secondary: {
          DEFAULT: 'hsl(214 32% 95%)',
          foreground: 'hsl(215 25% 27%)',
        },
        muted: {
          DEFAULT: 'hsl(214 30% 96%)',
          foreground: 'hsl(215 19% 35%)',
        },
        accent: {
          DEFAULT: 'hsl(200 98% 39%)',
          foreground: 'hsl(0 0% 100%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(210 40% 98%)',
        },
        card: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(224 71% 4%)',
        },
        popover: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(224 71% 4%)',
        },
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.625rem',
        sm: '0.5rem',
      },
      boxShadow: {
        soft: '0 20px 45px -25px rgba(15, 23, 42, 0.35)',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shine: 'shine 2s linear infinite',
      },
    },
  },
  plugins: [],
}
