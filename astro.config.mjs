// @ts-check
import alpinejs from '@astrojs/alpinejs';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { adapter } from 'astro-auto-adapter';
import { defineConfig, envField, fontProviders } from 'astro/config';
import mkcert from 'vite-plugin-mkcert';

import { loadI18nConfig } from './src/config/i18n.config.ts';

const multiAdapter = await adapter();

// Load i18n configuration (with optional environment variable override)
// This happens at build time only, not at runtime
const i18nConfig = loadI18nConfig();

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false,
    },

    image: {
        domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.cms.optimizely.com',
            },
            {
                protocol: 'https',
                hostname: '*.cmp.optimizely.com',
            },
        ],
    },

    // @ts-ignore - Astro's type definitions don't properly handle dynamic fallback configurations
    i18n: i18nConfig,

    output: 'server',

    adapter: multiAdapter,

    server: { port: 4321 },
    vite: {
        ssr: {
            noExternal: ['graphql', 'graphql-request'],
            external: ['vite'],
        },
        plugins: [mkcert(), tailwindcss()],
    },
    integrations: [alpinejs(), svelte()],

    env: {
        schema: {
            OPTIMIZELY_CMS_URL: envField.string({
                context: 'client',
                access: 'public',
                optional: true,
            }),
            OPTIMIZELY_GRAPH_SECRET: envField.string({
                context: 'server',
                access: 'secret',
                optional: false,
            }),
            OPTIMIZELY_GRAPH_APP_KEY: envField.string({
                context: 'client',
                access: 'public',
                optional: false,
            }),
            OPTIMIZELY_GRAPH_SINGLE_KEY: envField.string({
                context: 'client',
                access: 'public',
                optional: false,
            }),
            OPTIMIZELY_GRAPH_GATEWAY: envField.string({
                context: 'client',
                access: 'public',
                optional: false,
            }),
            PREVIEW_DELAY: envField.number({
                context: 'client',
                access: 'public',
                optional: true,
                default: 0,
            }),
            OPTIMIZELY_DATA_PLATFORM_ENDPOINT: envField.string({
                context: 'server',
                access: 'secret',
                optional: true,
                default: 'https://api.zaius.com',
            }),
            OPTIMIZELY_DATA_PLATFORM_PRIVATE_KEY: envField.string({
                context: 'server',
                access: 'secret',
                optional: true,
            }),
            EXTERNAL_PREVIEW_ENABLED: envField.boolean({
                context: 'server',
                access: 'public',
                optional: true,
                default: false,
            }),
            EXTERNAL_PREVIEW_TOKEN: envField.string({
                context: 'server',
                access: 'secret',
                optional: true,
            }),
            OPTIMIZELY_DEV_MODE: envField.boolean({
                context: 'client',
                access: 'public',
                optional: true,
                default: false,
            }),
            ASTRO_TRANSITIONS_ENABLED: envField.boolean({
                context: 'client',
                access: 'public',
                optional: true,
                default: true,
            }),
            // Note: ASTRO_I18N_CONFIG is a build-time only variable (used in astro.config.mjs)
            // It's not included in the env schema since it's not needed at runtime
        },
    },

    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                name: 'Inter',
                cssVariable: '--font-inter',
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
            {
                provider: fontProviders.google(),
                name: 'Poppins',
                cssVariable: '--font-poppins',
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
            {
                provider: fontProviders.google(),
                name: 'DM Sans',
                cssVariable: '--font-dm-sans',
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
            {
                provider: fontProviders.google(),
                name: 'Noto Sans',
                cssVariable: '--font-noto-sans',
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
            {
                provider: fontProviders.google(),
                name: 'Lexend',
                cssVariable: '--font-lexend',
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
            {
                provider: fontProviders.google(),
                name: 'Montserrat',
                cssVariable: '--font-montserrat',
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
            {
                provider: fontProviders.google(),
                name: 'Raleway',
                cssVariable: '--font-raleway',
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
            {
                provider: fontProviders.google(),
                name: 'Outfit',
                cssVariable: '--font-outfit',
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
            {
                provider: fontProviders.google(),
                name: 'Work Sans',
                cssVariable: '--font-work-sans',
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
            {
                provider: fontProviders.google(),
                name: 'Urbanist',
                cssVariable: '--font-urbanist',
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
            {
                provider: fontProviders.google(),
                name: 'Barlow',
                cssVariable: '--font-barlow',
                weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
        ],
    },
});
