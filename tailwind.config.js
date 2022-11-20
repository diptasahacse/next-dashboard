/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6b7280",
          "secondary": "#112143",
          "accent": "#071739",
          "neutral": "#F3F4F6",
          "base-100": "#FFFFFF",
          "info": "#89ecb3",
          "success": "#071739",
          "warning": "#DF7E07",
          "error": "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
