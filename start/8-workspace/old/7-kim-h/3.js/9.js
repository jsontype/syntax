// [배열 객체를 복사하는 방법]

// 값 참조
// let a = 1
// let b = a
// a = 2
// console.log(b) // 1

// 배열의 주소 복사
// const a = [1, 2, 3, 4, 5]
// const b = a
// a[0] = 99
// console.log(b[0]) // 99

// 객체의 주소 복사
// const c = { a: 1, b: 2 }
// const d = c
// c.a = 2
// console.log(d.a) // 2

// 주소 참조를 복사하고 싶으면, 주소에 있는 값을 떼다가, 새로운 주소를 만들고 거기에 넣는 방식으로 복사
// 즉, 진정한 의미의 값 복사를 하려면 JSON.stringify()로 한번 문자열화 한 뒤, JSON.parse()를 다시 하면 새로운 주소로 값 복사가 된다.

// 배열의 값 복사
const a = [1, 2, 3, 4, 5]
const b = JSON.parse(JSON.stringify(a))
a[0] = 99
console.log(b[0]) // 1
b.push(6)
console.log(b) // b = [1, 2, 3, 4, 5, 6]
// 리액트는 push, pop, remove 등등 사용할 수가 없다.

// 객체의 값 복사
const c = { a: 1, b: 2 }
const d = JSON.parse(JSON.stringify(c))
c.a = 2
console.log(d.a) // 1
d.c = 3
console.log(d) // d = { a: 1, b: 2, c: 3 }
// 리액트는 객체에 새 키를 추가할 수 없다.
