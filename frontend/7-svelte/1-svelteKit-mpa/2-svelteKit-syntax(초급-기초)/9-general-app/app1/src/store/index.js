import { writable } from "svelte/store"

// Store 초기값
const initLoginData = localStorage.getItem("loginData") || {
  isLogin: false,
  id: "",
  name: "",
}

// Store 생성
export const loginData = writable(initLoginData)

// Store 구독
loginData.subscribe((value) => {
  localStorage.setItem("loginData", JSON.stringify(value))
})
