/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 2px 4px 0 rgba(0, 0, 0, 0.6)',
        custom2: '1px 2px 8px 0 rgba(0, 0, 255, 0.2)',
      },
    },
  },
  plugins: [require("daisyui")],
}

