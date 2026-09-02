// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// TODO: cambiar a 'https://kaizogroup.es' en cuanto el dominio esté comprado y con DNS apuntando
// aquí — mientras tanto usa la URL de test real, si no, WhatsApp/redes intentan cargar el
// og:image desde un dominio que no resuelve y la vista previa sale en blanco.
const SITE_URL = 'https://test.kaizenfit.es';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});