const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Adds Flowbite React content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite-react/tailwind").plugin(), // Adds Flowbite React plugin
  ],
};
