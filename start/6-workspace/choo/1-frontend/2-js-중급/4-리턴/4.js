function plusOnlyEven(a, b) {
  if (a % 2 === 1 || b % 2 === 1) {
    return
  }
  return a + b
}

// function plusOnlyEven(a, b) {
//   if (a % 2 === 1 || b % 2 === 1) {
//     return
//   } else {
//     return a + b
//   }
// }

// console.log(plusOnlyEven(1, 2))

function a(b) {
  if (b === 2) {
    return
  }
  return "적어도 b는 2가 아니다."
}

console.log(a(12))
