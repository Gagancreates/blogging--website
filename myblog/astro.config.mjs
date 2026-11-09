import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: netlify(),
  site: 'https://gaganp.com',
  image: {
    // Are.na image hosting, for the Shelf page
    remotePatterns: [{ protocol: 'https', hostname: 'd2w9rnfcy7mm78.cloudfront.net' }],
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  build: {
    inlineStylesheets: 'auto'
  },
  server: {
    host: true
  }
});