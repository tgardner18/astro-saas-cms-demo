// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  server: { port: 4321 },

  optimizely: {
    enabled: true,
    projectId: "1234567890",
    cgAddress: "https://cg.optimizely.com/",
    cgAppKey: "***REMOVED***",
    cgSecret:
      "***REMOVED***",
    cgSingleKey: "***REMOVED***",
    cgBasicAuth:
      "***REMOVED***",
  },

  plugins: [],
  integrations: [tailwind()],
});