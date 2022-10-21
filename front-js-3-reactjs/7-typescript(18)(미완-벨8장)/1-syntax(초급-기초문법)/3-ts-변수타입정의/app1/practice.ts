// 1. 초기값과 다른 타입을 넣으면 에러
let count = 0 // 숫자
// count = '갑자기 분위기 문자열' // -> 에러!

// 1. 설정 타입과 다른 타입을 넣으면 에러
const message: string = 'hello world' // 문자열
// messages.push(1) // -> 에러!

// 1. 그 외 타입별 설정방법
const done: boolean = true // 불리언 값
const numbers: number[] = [1, 2, 3] // 숫자 배열
const messages: string[] = ['hello', 'world'] // 문자열 배열
let mightBeUndefined: string | undefined = undefined // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null // number 일수도 있고 null 일수도 있음
let color: 'red' | 'orange' | 'yellow' = 'red' // red, orange, yellow 중 하나임
// color = 'green' // -> 에러!
