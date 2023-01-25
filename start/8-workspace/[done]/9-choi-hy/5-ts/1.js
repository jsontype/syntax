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
// 1. 함수의 파라미터, 리턴값 타입 정의
function sum(x, y) {
    return x + y;
}
sum(1, 2); // 함수명에 마우스를 가져다대면, 함수의 파라미터, 리턴값 타입을 바로 알 수 있다.
// sum(1, null)// -> 에러! : 함수가 파라미터나 리턴값이 null이 된다면 오류가 뜨게 된다.
// 1. sumArray 함수 선언 : 숫자 배열의 총합을 구하는 함수를 선언한다.
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 15);
}
const result1 = sumArray([1, 2, 3, 4, 5]);
console.log('여기: ', result1);
// 1. returnNothing 함수 선언 : 리턴값이 없는 함수라면 반환 타입을 void로 설정하면 된다.
function returnNothing() {
    console.log('1');
}
returnNothing();
