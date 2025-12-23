module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        'spacex-black': '#000000',
        'spacex-dark': '#0a0a0a',
        'spacex-gray': '#1a1a1a',
        'spacex-light-gray': '#2a2a2a',
        'spacex-text': '#ffffff',
        'spacex-text-gray': '#cccccc',
        'spacex-accent': '#ffffff',
      },
    },
  },
  plugins: [],
}
