// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-11-16",
  ssr: true,
  modules: ["@pinia/nuxt"],
  css: ["~/assets/styles/main.scss"],
  imports: {
    dirs: ["stores"],
  },
});
