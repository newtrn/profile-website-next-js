import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'button': '0 0 40px rgba(145, 92, 182, 0.7)',
        'card':
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        'card-slider': 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
      },
      backgroundImage: {
        'image-placeholder': 'linear-gradient(180deg, rgba(153, 16, 81, 1) 0%, rgba(84, 38, 138, 1) 100%)',
      },
      transitionTimingFunction: {
        'smooth-in-out': 'cubic-bezier(.29,.81,.67,.25)',
      },
    },
    theme: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
export default config
