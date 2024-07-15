// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "anonymous" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap' },
      ],
      htmlAttrs: {
        'data-bs-theme': 'dark',
        'style': '--header-height: 74px'
      }
    }
  },
  modules: ['@bootstrap-vue-next/nuxt', '@pinia/nuxt', 'nuxt-swiper', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'swiper/css/effect-fade',
    'swiper/css/navigation',
    'swiper/css',
    'swiper/css/pagination',
    'animate.css/animate.css',
    '~/assets/scss/streamit.scss',
    '~/assets/scss/rtl.scss',
    '~/assets/scss/custom.scss',
  ],
})
