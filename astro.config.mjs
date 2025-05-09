// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
})
