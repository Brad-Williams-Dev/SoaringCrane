module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#00FF00",
      },
      reflection: {
        DEFAULT: '#f2f2f2',
      },
      boxShadow: {
        reflection: 'inset 0 0 20px 10px var(--tw-color-reflection)',
      },
      before: {
        reflection: 'content: ""; display: block; position: absolute; top: 100%; left: 0; right: 0; bottom: 0; pointer-events: none; z-index: -1; box-shadow: var(--tw-shadow-reflection);',
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

