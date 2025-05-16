let a = 1
let b = 2

// 조건문 else : else는 optional하다.
// if (a < b) {
//   console.log("a가 b보다 작다")
// } else {
//   console.log("false")
// }

let c = 5

// 조건문 else if
if (c === 1) {
  console.log("c는 1이다.")
} else if (c === 2) {
  console.log("c는 2이다.")
} else if (c === 3) {
  console.log("c는 3이다.")
} else {
  console.log("c는 4 이상이다.")
}

// and 교집합
// if (a < b) {
//   if (c === 5) {
//     console.log("true")
//   } else {
//     console.log("a < b is true, but c === 5 is false")
//   }
// }
// ampersand 기호 && 를 사용해서 and를 구현
if (a < b && c === 4) {
  console.log("true")
}
// vertical bar 기호 || 를 사용해서 or를 구현
if (a < b || c === 4) {
  console.log("true")
}
