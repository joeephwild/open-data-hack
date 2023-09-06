/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        map: "url('../../public/images/map.png')",
        map2: "url('../../public/images/map2.png')",
      },

      fontFamily: {
        "Jost-VariableFont": ["Jost-VariableFont"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
