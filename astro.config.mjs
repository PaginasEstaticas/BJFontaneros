import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	// site: 'https://paginasestaticas.github.io/BJFontaneros/',
	// base: '/BJFontaneros',
	site: 'https://bjfontaneros.com/',
	integrations: [sitemap()],
});