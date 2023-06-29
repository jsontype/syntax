// 변수

// 콘솔
console.log("Hello World!")

// 변수 선언
let a = 1 // 변수
const b = 2 // 상수
a = 3
// b = 3
console.log(a)

// 변수 타입 (값 참조 : 숫자, 문자, 불린, 널)
let aa = 1 // 숫자타입 : Number = Int(정수), Float(실수)
let bb = "1" // 문자타입 : String
let cc = 3
console.log(aa)
console.log(aa + bb)
console.log(aa + cc) // 숫자끼리는 계산이 가능
// 사칙연산 : +-/*
// 나눈 나머지값 : %
// 제곱 : **
// 3제곱 : **3
let dd = true // 불린타입 : Boolean = true, false
let ee = null // 널타입 : 값이 없음 (화장지에 심지만 있음)
let ff = undefined // 언디파인드타입 : 값이 없음 (화장지 자체가 없음)

// 변수 타입 (주소 참조 : 배열, 객체, 함수)
const arr = [1, 2, 3, 4, 99] // 배열타입 : Array (인덱스, 밸류)
console.log(arr)
console.log(arr[0])
console.log(arr.length)
console.log(arr[3])
console.log(arr[arr.length - 1]) // 어떤 배열이든 항상 마지막을 꺼내려면 ?
arr.push(999) // 배열 마지막에 값을 추가
console.log(arr[arr.length - 1]) // 999
console.log(arr) // [ 1, 2, 3, 4, 99, 999 ]
arr.pop() // 배열 마지막을 삭제
arr.pop() // 배열 마지막을 삭제
console.log(arr) // [ 1, 2, 3, 4 ]
arr.unshift(0) // 배열 처음에 값을 추가 // [ 0, 1, 2, 3, 4 ]
arr.unshift(0) // 배열 처음에 값을 추가 // [ 0, 0, 1, 2, 3, 4 ]
arr.shift() // 배열 처음을 삭제 // [ 0, 1, 2, 3, 4 ]
console.log(arr) // [ 0, 1, 2, 3, 4 ]
arr.splice(2, 1) // 배열 2번째부터 1개를 삭제 // [ 0, 1, 3, 4 ]
arr[0] = 99999

const obj = { no: 123, id: "abcd", pw: "abcd1234", name: "yang", premium: true } // 객체타입 : Object (키, 밸류)
console.log(obj)
console.log(obj.no)
console.log(obj["no"])
console.log(obj.name)
console.log(obj["name"])
