import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel({
    // Server-rendered pages (only /shelf) are cached and refreshed from Are.na
    // at most once an hour, so new saves show up without a redeploy.
    isr: { expiration: 60 * 60 },
    imageService: true,
  }),
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