import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // 모든 Vuetify 컴포넌트와 디렉티브 등록
    components,
    directives,

    // 테마 설정
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#1976D2", // 기존 설정 유지
            secondary: "#424242", // 기존 설정 유지
            accent: "#82B1FF", // 기존 설정 유지
            error: "#FF5252", // 기존 설정 유지
            info: "#2196F3", // 기존 설정 유지
            success: "#4CAF50", // 기존 설정 유지
            warning: "#FFC107", // 기존 설정 유지

            // Vuetify 3에서 추가된 새로운 색상들
            background: "#FFFFFF",
            surface: "#FFFFFF",
            "surface-variant": "#F5F5F5",
            "on-surface": "#1D1D1D",
            "on-surface-variant": "#49454F",
            "primary-container": "#D6E3FF",
            "on-primary": "#FFFFFF",
            "on-primary-container": "#001947",
          },
        },
        dark: {
          colors: {
            primary: "#82B1FF",
            secondary: "#616161",
            accent: "#1976D2",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",

            // 다크 테마 색상들
            background: "#121212",
            surface: "#1E1E1E",
            "surface-variant": "#424242",
            "on-surface": "#E0E0E0",
            "on-surface-variant": "#CAC4D0",
            "primary-container": "#004B73",
            "on-primary": "#000000",
            "on-primary-container": "#D6E3FF",
          },
        },
      },
    },

    // 아이콘 설정 (MDI 사용)
    icons: {
      defaultSet: "mdi",
    },

    // 디스플레이 설정 (반응형)
    display: {
      mobileBreakpoint: "sm",
      thresholds: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },

    // 기본 설정들
    defaults: {
      VBtn: {
        style: "text-transform: none;", // 버튼 텍스트 대소문자 변환 비활성화
        variant: "flat",
      },
      VCard: {
        elevation: 2,
      },
      VTextField: {
        variant: "outlined",
        density: "comfortable",
      },
      VSelect: {
        variant: "outlined",
        density: "comfortable",
      },
      VTextarea: {
        variant: "outlined",
        density: "comfortable",
      },
    },
  });

  // Nuxt 앱에 Vuetify 등록
  nuxtApp.vueApp.use(vuetify);
});
