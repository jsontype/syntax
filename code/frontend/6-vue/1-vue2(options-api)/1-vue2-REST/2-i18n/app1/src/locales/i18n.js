import Vue from "vue"
import VueI18n from "vue-i18n"
import en from "@/locales/en.json"
import ko from "@/locales/ko.json"

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: "ko", // 기본 언어 : 이 부분을 바뀌면 앱 전체의 언어가 바뀜
  fallbackLocale: "en", // 기본 언어에 문제가 있을 때 사용할 대체 언어
  messages: { en, ko }, // 설정한 언어 객체들의 모음
})

// 필요시 꺼내서 사용 : 처음에 로드된 언어들을 저장하는 배열
// const loadedLanguages = ["en", "ko"]

// 필요시 꺼내서 사용 : <html lang="en"> 부분을 변경하는 함수
// function setI18nLanguage(lang) {
//   i18n.locale = lang
//   document.querySelector("html").setAttribute("lang", lang)
//   return lang
// }

// 필요시 꺼내서 사용 : 사용자의 언어 선택에 따라 언어를 동적으로 변경하는 함수
// export function loadLanguageAsync(lang) {
//   if (i18n.locale === lang) {
//     // 요청된 언어가 현재 설정된 언어와 동일한 경우, 함수는 해당 언어를 반환하고 종료
//     return Promise.resolve(setI18nLanguage(lang))
//   }
//   // 요청된 언어가 로드되지 않은 경우, 해당 언어의 JSON 파일을 비동기적으로 가져오고, 해당 언어를 설정하고 반환하고, 해당 언어를 로드된 언어 목록에 추가
//   if (!loadedLanguages.includes(lang)) {
//     return import(`@/locales/${lang}.json`).then((messages) => {
//       i18n.setLocaleMessage(lang, messages.default)
//       loadedLanguages.push(lang)
//       return setI18nLanguage(lang)
//     })
//   }
//   // 요청된 언어가 이미 로드된 언어 목록에 있는 경우, 해당 언어를 설정하고 반환
//   return Promise.resolve(setI18nLanguage(lang))
// }
