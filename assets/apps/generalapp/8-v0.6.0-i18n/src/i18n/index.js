import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import ko from "./locales/ko"
import ja from "./locales/ja"

i18n
  .use(initReactI18next) // i18n을 리액트에서 사용하겠다.
  .init({
    resources: {
      ko,
      ja,
    },
    lng: "ko", // 언어 디텍터를 사용한다면 lng 키를 지정할 필요없다.
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
