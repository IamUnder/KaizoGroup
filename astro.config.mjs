// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://kaizogroup.es';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      // Español en la raíz (sin /es/) para no romper URLs/SEO ya indexadas; inglés bajo /en/
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});