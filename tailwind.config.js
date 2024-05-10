/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'appointment-bg': "url('/src/assets/images/appointment.png')",
        'hero-bg': "url('/src/assets/images/hero2.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

