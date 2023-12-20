import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import lit from "@astrojs/lit";

export default defineConfig({
  site: 'https://kieranwood.ca',
  sitemap: true,
  base: '/philosophy',
  integrations: [sitemap(), mdx(), image(), lit()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});