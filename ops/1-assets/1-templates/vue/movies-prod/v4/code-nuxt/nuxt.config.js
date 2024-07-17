export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    scripts: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: 'bootstrap/dist/css/bootstrap.min.css', lang: 'css' },
    { src: '@fortawesome/fontawesome-free/css/all.min.css', lang: 'css' },
    { src: 'animate.css/animate.min.css', lang: 'css' },
    { src: '~assets/app/app.css', lang: 'css' }
    // { src: 'animate.css/animate.min.css', lang: 'css' },
    // { src: 'owl.carousel/dist/assets/owl.carousel.css', lang: 'css' },
    // { src: 'owl.carousel/dist/assets/owl.theme.default.css', lang: 'css' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/steamit.js',
    '~/directives/index.js',
    { src: '~/plugins/apexchart.js', ssr: false }
  ],

  router: {
    base: '/'
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-flatpickr'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: {
      allChunks: true
    },
    splitChunks: {
      layouts: true
    },
    vendor: ['jquery', 'bootstrap', 'vue-apexchart'],
    extend (config, ctx) {
    },
    babel: {
      compact: true,
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  },
  server: {
    port: 6400 // default: 3000
  },
  vue: {
    config: {
      ignoredElements: [
        'rs-module-wrap', 'rs-module', 'rs-bgvideo', 'rs-slides', 'rs-layer', 'rs-static-layers', 'rs-progress', 'rs-slide', 'rs-3'
      ]
    }
  }
}
