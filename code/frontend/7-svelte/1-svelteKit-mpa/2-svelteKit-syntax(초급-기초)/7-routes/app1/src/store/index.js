import { writable } from "svelte/store";

// 초기값 설정
const initCount2 = typeof window !== 'undefined' && localStorage.getItem("count2") ? Number(localStorage.getItem("count2")) : 0
const initLoginData = typeof window !== 'undefined' && localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : { id: "", loggedIn: true }

// Stores
export const count2 = writable(initCount2);
export const loginData = writable(initLoginData);

// 구독
if (typeof window !== 'undefined') { 
  count2.subscribe(value => { localStorage.setItem("count2", value); }) 
}
if (typeof window !== 'undefined') { 
  loginData.subscribe(value => { localStorage.setItem("loginData", JSON.stringify(value)); }) 
}
