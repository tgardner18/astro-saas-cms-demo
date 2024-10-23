/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugin: [
    function ({ addBase }) {
      addBase({
        div: {
          backgroundColor: "bg-red-500",
        },
        h1: {
          fontSize: "2.25rem", // text-3xl
          fontWeight: "700", // font-bold
          lineHeight: "2.5rem", // leading-tight
        },
        h2: {
          fontSize: "1.875rem", // text-2xl
          fontWeight: "600", // font-semibold
          lineHeight: "2.25rem", // leading-tight
        },
        h3: {
          fontSize: "1.5rem", // text-xl
          fontWeight: "600", // font-semibold
          lineHeight: "2rem", // leading-snug
        },
        h4: {
          fontSize: "1.25rem", // text-lg
          fontWeight: "500", // font-medium
          lineHeight: "1.75rem", // leading-relaxed
        },
        h5: {
          fontSize: "1.125rem", // text-base
          fontWeight: "500", // font-medium
          lineHeight: "1.5rem", // leading-normal
        },
        h6: {
          fontSize: "1rem", // text-sm
          fontWeight: "400", // font-normal
          lineHeight: "1.25rem", // leading-snug
        },
      });
    },
  ],
};
