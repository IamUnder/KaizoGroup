// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// TODO: cambiar por el dominio real antes de desplegar (afecta a sitemap, canonical y OG tags)
const SITE_URL = 'https://kaizogroup.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});