/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro',
        },
      },
    ],
    tailwindConfig: "./tailwind.config.js",
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: true,
  };