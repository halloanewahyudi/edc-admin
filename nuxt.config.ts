// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-auth-utils'],

  css: ['~/assets/style.css'],

  tailwindcss: {  
    configPath: 'tailwind.config.js'
  }

  
  // end config
})