"use strict";
// 1. 초기값과 다른 타입을 넣으면 에러
let count = 0; // 숫자
// count = '갑자기 분위기 문자열' // -> 에러!
// 1. 설정 타입과 다른 타입을 넣으면 에러
const message = 'hello world'; // 문자열
// messages.push(1) // -> 에러!
// 1. 그 외 타입별 설정방법
const done = true; // 불리언 값
const numbers = [1, 2, 3]; // 숫자 배열
const messages = ['hello', 'world']; // 문자열 배열
let mightBeUndefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber = null; // number 일수도 있고 null 일수도 있음
let color = 'red'; // red, orange, yellow 중 하나임
// color = 'green' // -> 에러!
