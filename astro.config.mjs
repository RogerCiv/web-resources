// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tu-dominio.com',
  vite: {
    plugins: [tailwindcss()]
  }
});