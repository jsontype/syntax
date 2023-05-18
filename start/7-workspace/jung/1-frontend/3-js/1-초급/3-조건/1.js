let a = 2
let b = 2

// if (a > b) {
//   console.log("a가 크다")
// }

if (a === 1) {
  console.log("a는 1이다")
} else if (a === 2) {
  console.log("a는 2이다")
} else if (a === 3) {
  console.log("a는 3이다")
} else {
  console.log("a는 모른다.")
}

// 두개 이상의 조건 : and (ampersand &)
if (typeof a === "number" && a > 0) {
  console.log("a는 양수이다")
}

// 두개 이상의 조건 : or (vertical bar |)
if (a === 1 || a === 2) {
  console.log("a는 1 또는 2이다")
}
