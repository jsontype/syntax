import { writable } from "svelte/store";

// 브라우저 환경에서만 초기값을 설정
const initCount2 = typeof window !== 'undefined' && localStorage.getItem("count2") 
  ? Number(localStorage.getItem("count2"))
  : 0;
export const count2 = writable(initCount2);

// 브라우저 환경에서만 구독하여 localStorage에 저장
if (typeof window !== 'undefined') {
  count2.subscribe(value => {
    localStorage.setItem("count2", value);
  });
}
