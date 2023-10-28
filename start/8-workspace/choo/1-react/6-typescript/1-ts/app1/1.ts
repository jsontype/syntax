let a: number = 1
a = 5

const done: boolean = true // 불리언 값
const numbers: number[] = [1, 2, 3] // 숫자 배열
const messages: string[] = ['hello', 'world'] // 문자열 배열
let mightBeUndefined: string | undefined = undefined // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null // number 일수도 있고 null 일수도 있음
let color: 'red' | 'orange' | 'yellow' = 'red' // red, orange, yellow 중 하나임. 유니온 타입(Union Type)이라 한다.
