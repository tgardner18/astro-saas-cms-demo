// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind"; // https://astro.build/config

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cms.optimizely.com",
      },
    ],
  },

  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  server: { port: 4321 },
  vite: {
    ssr: {
      noExternal: ["graphql", "graphql-request"],
    },
  },

  // optimizely: {
  //   enabled: true,
  //   projectId: "1234567890",
  //   cgAddress: "https://cg.optimizely.com/",
  //   cgAppKey: "***REMOVED***",
  //   cgSecret:
  //     "***REMOVED***",
  //   cgSingleKey: "***REMOVED***",
  //   cgBasicAuth:
  //     "***REMOVED***",
  // },

  integrations: [tailwind()],
});
