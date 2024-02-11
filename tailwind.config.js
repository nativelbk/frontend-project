/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#152432",
        blue: "#1976D2",
        pink:"#FF4D6D",
        card: "#1D3A57",
        violet: "#7B2CBF",
        cardBackground: "#1D3A57",
        gradient2: "linear-gradient(90deg, rgba(25,118,210,1) 0%, rgba(77,79,200,1) 35%, rgba(123,44,191,1) 100%)"
      },
      heroHeadText:
      "text-gradient  text-[52px] max-sm:text-[38px] max-lg:text-[46px]",
    },
  },
  plugins: [],
}

