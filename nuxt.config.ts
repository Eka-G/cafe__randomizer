export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  app: {
    head: {
      title: "Cafe Random",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { name: "description", content: "Приложение для случайного выбора кафе или ресторана." },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@/assets/style/variables.scss",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
    '@pinia/nuxt',
  ],
  googleFonts: {
    families: {
      "Montserrat+Alternates": [300, 700],
    }
  },
  pinia: {
    autoImports: [
      ['defineStore', 'definePiniaStore'],
    ],
  },
})
