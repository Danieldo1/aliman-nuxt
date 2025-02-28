// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    "nuxt-icon",
    "nuxt-lodash",
    // '@nuxtjs/supabase',
    // '@pinia-plugin-persistedstate/nuxt',
  ],
  
})
