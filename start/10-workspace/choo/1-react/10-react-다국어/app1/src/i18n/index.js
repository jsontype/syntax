import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./locales/en"
import ko from "./locales/ko"
import ja from "./locales/ja"

i18n
  .use(initReactI18next) // 리액트에서 사용하겠다.
  .init({
    resources: {
      en,
      ko,
      ja,
    },
    lng: "ko",
    // lng: navigator.language,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
