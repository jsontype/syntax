// 배열, 객체, 함수 : 주소 참조
const a = [1, 2, 3] // a = 서울시 강남구 역삼동 123-1

// * Shallow Copy
// const b = a // b = 서울시 강남구 역삼동 123-1
// * Deep Copy
// const b = JSON.parse(JSON.stringify(a)) // b = 서울시 강남구 역삼동 123-2
// const b = Object.assign([], a) // b = 서울시 강남구 역삼동 123-2
const b = [...a] // b = 서울시 강남구 역삼동 123-2
// b.push(4) // 주소가 그대로인한, 바뀌는 게 아니다.
// console.log(b) // [1, 2, 3, 4]
// console.log(a) // [1, 2, 3]
const c = { x: 1, y: 2 } // c = 서울시 강남구 역삼동 123-1

// * Shallow Copy
// const d = c
// * Deep Copy
// const d = JSON.parse(JSON.stringify(c))
// const d = Object.assign({}, c)
const d = [...c]
// c.x = 3
// console.log(c) // { x: 3, y: 2 }
// console.log(d) // { x: 1, y: 2 }

// 수, 문자열, 불리언, null, undefined : 값 참조
const FIXED_VALUE = 1
