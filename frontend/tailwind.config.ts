import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: "800px",
      md: "1024px",
      lg: "1300px",
      xl: "1440px",
    },
    colors: {
      "header-footer": "rgb(33,145,251)",
      "page": "rgba(255, 255, 255, 1)",
      "red": "rgb(187,10,16)"
    },
  },
  plugins: [],
};
export default config;
