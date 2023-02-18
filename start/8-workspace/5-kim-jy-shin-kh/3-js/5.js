
// 값 참조 : 숫자, 문자열, 불린..
let a = 1
let b = a
a = 2
console.log(b) // 1


// 주소 참조 : 배열, 객체, 함수

// 얉은 복사 (shallow copy) : 메모리 주소만 복사를 한다.
const c = [1, 2] // 신주쿠 1-1 번지
const d = c // 신주쿠 1-1 번지 : 얉은 복사
c.push(3)
console.log(d) // [1, 2, 3]

const e = { key1: 1, key2: 2 }
const f = e // 신주쿠 1-1 번지 : 얉은 복사
e.key2 = 99999
console.log(f.key2)

// 깊은 복사 (deep copy) : 메모리 주소는 따로, 값을 그대로 떠온다.
const cc = [1, 2]
const dd = [...cc]
cc.push(3)
console.log(dd)

// 배열을 바꿀 때, 불변성의 법칙을 지키는 방법 (리액트)
cc.push(3) // cc 자체를 바꾸는 방법 X
const ee = [...cc, 3] // 1, 2, 3 값은 같다. cc는 건들지 않고, dd만 바꾸는 방법

const obj1 = { a: 1, b: 2 }
const obj2 = { ...obj1 }
obj1.c = 3
console.log(obj2) // 상관없다.

// 객체을 바꿀 때, 불변성의 법칙을 지키는 방법 (리액트)
obj1.c = 3 // obj1 자체를 바꾸는 방법 X
const obj3 = { ...obj1, c: 3 }

