// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Cafe Randomizer",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { name: "description", content: "Приложение для случайного выбора кафе или ресторана." },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ],
    },
  },
  css: ["@/assets/style/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/style/_variables.scss' as *;"
        }
      }
    }
  },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts"
  ],
  googleFonts: {
    families: {
      "Montserrat+Alternates": [300, 700],
    }
  }
})
