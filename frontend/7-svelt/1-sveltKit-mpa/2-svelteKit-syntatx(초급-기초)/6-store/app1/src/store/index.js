import { writable } from "svelte/store";

// Stores
export const count2 = writable(initCount2);

// 초기값 설정
// typeof window !== 'undefined' : 브라우저 환경에서만 초기값을 설정
// localStorage.getItem("count2") ? Number(localStorage.getItem("count2")) : 0 : 기존의 count2 값이 있으면 가져오고, 없으면 0으로 설정
const initCount2 = typeof window !== 'undefined' && localStorage.getItem("count2") ? Number(localStorage.getItem("count2")) : 0

// 구독: 브라우저 환경에서만 구독하여 localStorage에 저장
// 구독이란?: store의 값이 변경될 때마다 실행되는 함수
if (typeof window !== 'undefined') { count2.subscribe(value => { localStorage.setItem("count2", value); }) }
