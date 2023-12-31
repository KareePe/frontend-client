// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  app: {
    head: {
      title: "SALESX TECHNOLOGIES",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#2a2a2a" },
        { name: "msapplication-navbutton-color", content: "#2a2a2a" },
        { name: "apple-mobile-web-app-status-bar-style", content: "#2a2a2a" },
        {
          hid: "description",
          name: "description",
          content: "SALESX TECHNOLOGIES",
        },
        {
          name: "description",
          content: "SALESX TECHNOLOGIES",
        },
        {
          name: "keywords",
          content: "SALESX TECHNOLOGIES",
        },
      ],
    },
  },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "vuetify/styles/main.sass",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt"],
  build: {
    transpile: ["vuetify"],
  },
};
