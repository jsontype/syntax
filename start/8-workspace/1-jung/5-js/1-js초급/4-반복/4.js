const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

// for (초기값; 실행조건; 한 루프를 실행한 뒤 실행)
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i])
// }

// 3의 배수만을 출력하시오.
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 3 === 0) {
//     console.log(a[i])
//   }
// }

// 2의 배수이면서 3의 배수인 것을 출력하시오. 
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0 && a[i] % 3 === 0) {
//     console.log(a[i])
//   }
// }

// 3의 배수이면서 4의 배수인 것을 출력하시오.
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 3 === 0 && a[i] % 4 === 0) {
//     console.log(a[i])
//   }
// }

// 3의 배수이거나 5의 배수인 것을 출력하시오. 
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 3 === 0 || a[i] % 5 === 0) {
//     console.log(a[i])
//   }
// }

// a 배열에서, 10이상의 수만 출력하시오.
// for (let i = 0; i < a.length; i++) {
//   if (a[i] >= 10) {
//     console.log(a[i])
//   }
// }

// 구구단 (이중포문)
// for (let i = 2; i < 10; i++) {
//   console.log(i, '단 시작 >>>')
//   for (let j = 1; j < 10; j++) {
//     console.log(i, 'x', j, '=', i * j)
//   }
// }

// 1에서 100까지의 홀수의 합
let result = 0
for (let i = 1; i < 101; i++) {
  if (i % 2 === 1) {
    result = result + i
  }
}
console.log(result)
