const a = [1, 2, 3, 4, 5]
const b = { id: "yang", name: "d.yang", gender: "male" }

// Shallow Copy
// const aa = a
// a[0] = 13245
// console.log(aa)
// const bb = b
// b["name"] = "D.Yang"
// console.log(bb)

// Deep Copy
// const aa = [...a]
// a[0] = 13245
// console.log(aa)
// const bb = { ...b }
// b["name"] = "D.Yang"
// console.log(bb)

// Spreading 문법을 통해 배열 값 추가
// a.push(6) // a 값을 직접 바꾸는 것
// const add = [...a, 6] // a 값을 바꾸지 않고, a 에 값이 추가된 상태의 "새로운 배열"을 만드는 것

// Spreading 문법을 통해 객체 값 추가
b.position = "fronted" // b 값을 직접 바꾸는 것
const add = { ...b, position: "fronted" } // b 값을 바꾸지 않고, b 에 값이 추가된 상태의 "새로운 객체"를 만드는 것

// 리액트에서는 이런 형태로 값을 직접 바꾸지 않으면서 배열과 객체를 수정해야한다.
// 이를 불변성의 법칙이라 한다.
