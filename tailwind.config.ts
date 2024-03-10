/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-color': 'var(--main-color)',
        'second-color': 'var(--second-color)',
        'third-color': 'var(--third-color)',
        'button-background': 'var(--button-background)',
        'button-background-hover': 'var(--button-background-hover)',
        'main-bright-color': 'var(--main-bright-color)',
        'input-focus': 'var(--input-focus)',
      },
    },
  },
  plugins: [],
};
