// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3000/api'
    },
    authSecret: process.env.AUTH_SECRET || ''
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-auth-utils', '@nuxtjs/google-fonts'],

  css: ['~/assets/style.css'],

  tailwindcss: {  
    configPath: 'tailwind.config.js'
  },

  googleFonts: {
    families: {
      Inter: [300, 500, 600, 700],
      Poppins: [400, 500, 600, 700]
    }
  },

  
  // end config
})