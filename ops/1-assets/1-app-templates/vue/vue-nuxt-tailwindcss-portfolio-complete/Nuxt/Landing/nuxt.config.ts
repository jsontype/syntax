// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { dir: 'ltr', lang: 'en', class: 'scroll-smooth' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nichol - Nuxt 3 & Tailwind CSS Personal Portfolio Template' },
        { name: "keywords", content: "nuxt 3, tailwind css, portfolio, personal website, template" },
        { name: "author", content: "SRBThemes" }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]

    },
  },
  css: [
    "~/assets/css/style.css",
    "~/assets/css/tailwind.css",
  ],
  plugins: [
    { src: "~/plugins/alpine.ts", mode: "client" },
  ],
})
