// 기존 js의 문제
// let a = 6
// a = '6' // 에러가 나지 않는다는 게 문제 (타입이 정해져 있지 않음)


// ts 쓰는 이유 : 1. 타입 에러를 사전에 방지 2. IDE의 도움을 받을 수 있음


// 값참조 타입 설정
let value: number = 5
value = 6

let stringVal: string = 'hello'
stringVal = 'world'

let booleanVal: boolean = true

let nullVal: null = null

let undefinedVal: undefined = undefined

let a: number | string = 5
a = 'hello'

let b: number | null = 5
b = null

let anyVal: any = 5 // any
anyVal = 'str' // any

// 주소참조 타입 설정
const arr: Array<string | number> = ['a', 'b', 'c']
// arr.push(5)
arr.push('d')

const obj: { no: number; id: string; name: string; age: number } = { no: 5, id: 'str', name: 'kim', age: 20 }
// obj.no = 'dsaf'
obj.no = 6
