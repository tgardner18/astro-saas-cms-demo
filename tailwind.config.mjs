/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,opti-style.json}'],
    theme: { extend: {} },
    plugins: [
        function ({ addBase }) {
            addBase({
                h1: {
                    fontSize: '34px', // text-3xl
                },
                h2: {
                    fontSize: '29px', // text-2xl
                },
                h3: {
                    fontSize: '24px', // text-xl
                },
                h4: {
                    fontSize: '19px', // text-lg
                },
                h5: {
                    fontSize: '18px', // text-base
                },
                h6: {
                    fontSize: '16px', // text-sm
                },
            });
        },
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            // Light themes
            'light',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'retro',
            'cyberpunk',
            'valentine',
            'garden',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'cmyk',
            'autumn',
            'acid',
            'lemonade',
            
            // Dark themes
            'dark',
            'synthwave',
            'halloween',
            'forest',
            'black',
            'luxury',
            'dracula',
            'business',
            'night',
            'coffee',
            'winter',
            'dim',
            'nord',
            'sunset'
        ],
    },
};
