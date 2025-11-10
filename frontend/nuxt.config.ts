export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    'nuxt-icons',
  ],
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  css: ['~/assets/scss/shared/index.scss', '~/assets/scss/vendors/index.scss'],
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_APP_BASE_URL || '/',
    },
  },
  compatibilityDate: '2025-05-15',
  nitro: {
    preset: 'github-pages',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/helpers/index.scss" as *;
            @use "~/assets/scss/vars/index.scss" as *;
          `,
        },
      },
    },
  },
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
})
