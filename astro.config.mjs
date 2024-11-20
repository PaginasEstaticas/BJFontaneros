import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://paginasestaticas.github.io/BJFontaneros/',
	integrations: [mdx(), sitemap()],
});
