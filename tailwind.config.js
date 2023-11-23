/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#084F93",
      secondary: "#0BA5EC",
      "main-gray": "#C4C6CF",
      "text-detail": "#1A1C1E"
    },
    fontSize: {
      header: "18px",
      title: "16px",
      subTitle: "14px"
    },
    opacity: {
      title: "0.87",
      subTitle: "0.6",
      detail: "0.4"
    },
    letterSpacing: {
      23: "-0.032px",
      29: "0.075px"
    }
  },
  plugins: [require("flowbite/plugin")]
}
