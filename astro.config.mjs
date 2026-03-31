import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fioriingioielli.it',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },
});
