export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    'nuxt-icons',
  ],
  devtools: { enabled: true },
  css: ['~/assets/scss/shared/index.scss', '~/assets/scss/vendors/index.scss'],
  compatibilityDate: '2025-05-15',
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
