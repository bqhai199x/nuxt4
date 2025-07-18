// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'vuetify-nuxt-module'
  ],
  i18n: {
    defaultLocale: 'vi',
    locales: [
      { code: 'vi', iso: 'vi-VN', file: 'vi.json', name: 'Vietnamese' },
    ],
  }
});