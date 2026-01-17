import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://peteratkinson.co',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
