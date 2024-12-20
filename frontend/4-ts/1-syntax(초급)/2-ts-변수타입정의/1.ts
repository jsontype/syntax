// 1. TypeScript 변수타입정의
// TypeScript를 사용하면 이렇게 특정 변수 또는 상수의 타입을 지정 할 수 있고,
// "사전에 지정한 타입이 아닌" 값이 설정 될 때 바로 에러를 발생시킨다.
// 에러나는 부분을 주석 해제하고 tsc 명령어를 입력해서 컴파일을 시도하면,
// 실패 메시지가 뜨며 컴파일이 되지 않는다.

// 1. 초기값과 다른 타입을 넣으면 에러
let count = 0 // 숫자
// count = '갑자기 분위기 문자열' // -> 에러!

// 1. 설정 타입과 다른 타입을 넣으면 에러
const message: string = "hello world" // 문자열
// messages.push(1) // -> 에러!

// 1. 그 외 타입별 설정방법
const done: boolean = true // 불리언 값
const numbers: number[] = [1, 2, 3] // 숫자 배열
const messages: string[] = ["hello", "world"] // 문자열 배열
let mightBeUndefined: string | undefined = undefined // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null // ★★유니온 타입(Union Type) : 앰퍼센드를 이용해 여러 타입을 동시에 설정하는 것. 여기선 number 일수도 있고 null 일수도 있음.
let colorVar: "red" | "orange" | "yellow" = "red" // red, orange, yellow 중 하나임
// color = 'green' // -> 에러!
