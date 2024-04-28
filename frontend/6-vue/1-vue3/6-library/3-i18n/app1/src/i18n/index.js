import { createI18n } from "vue-i18n";

// 메시지 정의
const messages = {
  en: {
    message: {
      hello: "Hello!",
    },
  },
  ja: {
    message: {
      hello: "こんにちは！",
    },
  },
};

// i18n 인스턴스 생성
const i18n = createI18n({
  legacy: false, // Vue2 Options API일 때는 true, Vue3 Composition API일 때는 false로 설정
  locale: "en", // 기본 언어 설정
  fallbackLocale: "en", // 사용 가능한 번역이 없는 경우 대체할 언어
  messages,
});

export default i18n;
