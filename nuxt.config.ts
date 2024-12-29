export default defineNuxtConfig({
  css: ['./assets/styles/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-12-26',
});