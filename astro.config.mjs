import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://paginasestaticas.github.io',
  	base: 'BJFontaneros',
	integrations: [mdx(), sitemap()],
});
