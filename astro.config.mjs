import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pedromonserrat.es',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
    // Si el idioma no existe, redirecciona al idioma por defecto
    fallback: {
      en: "es",
    },
  },
});
