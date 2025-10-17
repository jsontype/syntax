// Nuxt2의 설정 (주석 처리됨)
// export default {
//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     title: "app1",
//     htmlAttrs: {
//       lang: "en",
//     },
//     meta: [
//       { charset: "utf-8" },
//       { name: "viewport", content: "width=device-width, initial-scale=1" },
//       { hid: "description", name: "description", content: "" },
//       { name: "format-detection", content: "telephone=no" },
//     ],
//     link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
//   },
//   css: [],
//   plugins: [],
//   components: true,
//   buildModules: ["@nuxtjs/vuetify", "@nuxt/typescript-build"],
//   modules: ["@nuxtjs/axios"],
//   axios: {
//     baseURL: "/",
//   },
//   build: {},
//   vuetify: {
//     customVariables: ["~/assets/variables.scss"],
//     theme: {
//       dark: false,
//       themes: {
//         dark: {
//           primary: "#121212",
//           accent: "#FF4081",
//           secondary: "#ffe18d",
//           success: "#4CAF50",
//           info: "#2196F3",
//           warning: "#FB8C00",
//           error: "#FF5252",
//         },
//         light: {
//           primary: "#1976D2",
//           accent: "#e91e63",
//           secondary: "#30b1dc",
//           success: "#4CAF50",
//           info: "#2196F3",
//           warning: "#FB8C00",
//           error: "#FF5252",
//         },
//       },
//     },
//   },
// };

// Nuxt3의 설정: nuxt.config.ts로 확장자 변경후 내용을 아래로 변경
export default defineNuxtConfig({
  compatibilityDate: "2025-10-17",
  // App configuration (head → app.head로 변경됨)
  app: {
    head: {
      title: "Todo & Movie & Shopping App",
      htmlAttrs: {
        lang: "ko",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Vue3 + Nuxt3 + Vuetify3 + Class API로 구현된 Todo, Movie, Shopping 앱",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "author", content: "Your Name" },
        { name: "theme-color", content: "#1976D2" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // DevTools (Nuxt 3 새로운 기능)
  devtools: { enabled: true },

  // SSR 설정 (명시적)
  ssr: true,

  // Global CSS
  css: ["vuetify/styles/main.sass", "@mdi/font/css/materialdesignicons.css"],

  // Plugins (자동 스캔되므로 빈 배열로 유지)
  plugins: [],

  // Components (자동 import 활성화)
  components: true,

  // Modules (buildModules → modules로 통합됨)
  modules: [
    // Nuxt 2의 @nuxtjs/axios 대신 $fetch 사용 권장
    // 필요시 @nuxtjs/axios를 계속 사용할 수 있음
    // '@nuxtjs/axios',
  ],

  // Runtime config (axios 설정 대신)
  runtimeConfig: {
    // Private keys (서버에서만 사용)
    // apiSecret: '',

    // Public keys (클라이언트에서도 사용 가능)
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "/",
    },
  },

  // Build configuration
  build: {
    transpile: ["vuetify"],
  },

  // Vite configuration (Nuxt 3는 기본적으로 Vite 사용)
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    ssr: {
      noExternal: ["vuetify"],
    },
    // 개발 서버 최적화 추가
    optimizeDeps: {
      include: ["vuetify"],
    },
  },

  // Nitro 설정 (Nuxt 3 서버 엔진)
  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },

  // TypeScript configuration
  typescript: {
    strict: false,
    typeCheck: false,
  },
});
