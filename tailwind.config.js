module.exports = {
  content: [
    './html/**/*.html',
    //'./src/**/*.{js,jsx,ts,tsx,vue}',
    './*.hbs',
    './partials/**/*.hbs'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
