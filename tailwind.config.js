/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2c2119',
        coal: '#5f5045',
        smoke: '#8a7a6e',
        bronze: '#b88b61',
        copper: '#d6b08a',
        ember: '#ead5bd',
        linen: '#f7efe4',
        cream: '#f3e7d9',
        beige: '#b8a796',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        bronze: '0 28px 100px rgba(44, 33, 25, 0.28)',
        glass: 'inset 0 1px 0 rgba(255,255,255,.22), 0 30px 100px rgba(44,33,25,.28)',
      },
      backgroundImage: {
        'radial-bronze': 'radial-gradient(circle at 50% 0%, rgba(234,213,189,.34), transparent 34%)',
        'button-glow': 'linear-gradient(135deg, #3a2a20, #7a5c45 52%, #b88b61)',
      },
    },
  },
  plugins: [],
};
