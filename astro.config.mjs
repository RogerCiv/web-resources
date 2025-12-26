// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://web-recursos.vercel.app', // Cambia esto por tu dominio real
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel()
});