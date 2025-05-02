import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: netlify(),
  site: 'https://gagan-blogs.netlify.app',
  build: {
    inlineStylesheets: 'auto'
  },
  server: {
    host: true
  }
});