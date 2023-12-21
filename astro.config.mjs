import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import lit from "@astrojs/lit";

export default defineConfig({
  site: 'https://kieranwood.ca',
  sitemap: true,
  base: '/philosophy',
  integrations: [sitemap(), mdx(), lit()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  prefetch: true
});