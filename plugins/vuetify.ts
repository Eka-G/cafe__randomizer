import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const CRTheme = {
  dark: false,
  colors: {
      primary: "#ffbd00",
      accent: "#56ff44",
      secondary: "#fff477",
      background: "#fffbee",
      info: "#2196f3",
      warning: "#ff9800",
      error: "#f44336",
      success: "#4cAf50",
      "on-background": "#4e3e3e",
      "on-primary": "#4e3e3e",
  },
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
          defaultTheme: "CRTheme",
          themes: {
            CRTheme,
          },
        },
    });

    nuxtApp.vueApp.use(vuetify);
})
