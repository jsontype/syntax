import { writable } from "svelte/store"
import { browser } from "$app/environment" // SvelteKit의 browser 변수

// 초기값 설정
const initLoginData = browser
  ? JSON.parse(localStorage.getItem("loginData") || '{}') || { isLogin: false, id: "", name: "" }
  : { isLogin: false, id: "", name: "" }

// Store 생성
export const loginData = writable(initLoginData)

// Store 구독
if (browser) {
  loginData.subscribe((value) => {
    localStorage.setItem("loginData", JSON.stringify(value))
  })
}
