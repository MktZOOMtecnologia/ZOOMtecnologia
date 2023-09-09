/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [    
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,      
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'brand':'#ca6924',
        'brand-bg':'#dfeedc'
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans',],
      },
    
    },
  },
  plugins: [],
}
