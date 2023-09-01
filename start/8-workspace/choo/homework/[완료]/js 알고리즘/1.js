// 문제 : 1~20까지의 배열중에서 홀수만 출력해라.
const arr10 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] % 2 === 1) {
    console.log(arr10[i])
  }
}

// ★문제 : 1~20까지의 배열중에서 짝수만 출력해라.
const arr20 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
for (let i = 0; i < arr20.length; i++) {
  if (arr20[i] % 2 === 0) {
    console.log(arr20[i])
  }
}
// 완료)문제 : x를 5로 선언하라.
let x = 5
console.log(x)

// ★문제 : 변수 x1가 10보다 크고, 20보다 작을 때 변수 x1를 출력하는 조건식을 완성하라.
let x1 = 10
if (x1 > 10 && x1 < 20) {
  // and 교집합 && (ampersand 2개)이고, or 합집합 || (vertical bar 2개)
  console.log(x1)
}

// ★문제 : 변수 y가 10보다 크거나, 20보다 작을 때 변수 y를 출력하는 조건식을 완성하라.
let y = 10
if (y > 10 || y < 20) {
  // and 교집합 && (ampersand 2개)이고, or 합집합 || (vertical bar 2개)
  console.log(y)
}
// 완료)문제 : 변수 x2에 3을 곱한 값이 10보다 큰 경우, 변수 x2를 출력하는 조건식을 완성하라.
let x2 = 4 // x값은 4이상부터 가능 -choo
if (x2 * 3 > 10) {
  console.log("변수 x2에 3을 곱합 값이 10보다 크다")
}
// 완료)문제 : y1를 1로 선언하라.
let y1 = 1
console.log(y1)

// 완료)문제 : 변수 y2에 5를 곱한 값이 x3보다 큰 경우, 변수 x3를 출력하는 조건식을 완성하라.
let x3 = 1 // x값은 1~4까지 변환 가능 -choo
let y2 = 1
if (y2 * 5 > x3) {
  console.log(x3)
}

// 인터넷 참조)문제(난이도 1/3) : arr의 모든 값들의 총합을 구하는 반복문을 만들어보라.
const arr = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log(sum) // 원리 이해 필요
// 모름) 문제(난이도 1/3) : 0부터 10미만의 더하는 코드를 만들어라.
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr1.length; i++) {
  if (1 > 10) {
    sum += i
  }
}
console.log(sum)

// 인터넷 참조)문제(난이도 1/3) : 1부터 10까지 곱하는 코드를 만들어라.
let result = 1

for (let i = 0; i <= 10; i++) {
  if (i !== 0) {
    // !== 연산자는 같지 않음
    result *= i
  }
}
console.log(result)

// 인터넷 참조)문제(난이도 2/3) : arr2의 모든 값들을 세제곱(** 3)한 값을 각각 출력하라.
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i] ** 3)
}

// 인터넷 참조)문제(난이도 2/3) : arr3의 모든 값들이 각각 세제곱(** 3)으로 된 배열을 출력하라.
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr4 = []

for (let i = 0; i < arr3.length; i++) {
  const xx = arr3[i] ** 3
  arr4.push(xx)
}
console.log(arr4)

// 인터넷 참조)문제(난이도 2/3) : arr5의 각 값들의 2승의 총합을 구하는 반복문을 만들어보라.
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum2 = 0

for (let i = 0; i < arr5.length; i++) {
  const xxx = arr5[i] ** 2
  sum2 += xxx
}

console.log(sum2)

// ★문제(난이도 2/3) (if문필요) : arr5에서 3의 배수인 것만(arr[i] % 3 = 0) 출력하세요.
const arr6 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] % 3 === 0) {
    console.log(arr6[i])
  }
}

// 인터넷 참조)문제(난이도 2/3) (if문과 && 필요) : 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
const arr7 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

let sum3 = 0

for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] % 2 === 0 && arr7[i] % 3 === 0) {
    sum3 += arr7[i]
  }
}

console.log(sum3)

// 문제(난이도 2/3) (if문필요) : 1~100까지 짝수 합을 구하시오.
let result1 = 0
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    result1 = result1 + i
  }
}
console.log(result1)

// 문제(난이도 2/3) (if문필요) : 1~100까지 홀수 합을 구하시오.
let result2 = 0
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    result2 = result2 + i
  }
}
console.log(result2)

// 문제(난이도 2/3) (if문필요) : 1~100까지 합을 구하다가, 합이 100을 넘어갈 때 그 합과 더한 숫자를 출력하시오.
let result3 = 0
for (let i = 1; i <= 100; i++) {
  if (result3 <= 100) {
    result3 = result3 + i
  } else {
    break
  }
}
console.log(result3)

// 문제(난이도 3/3) (if문필요) : 구구단을 완성하세요. (이중 for문)
console.log("답: ")
for (let i = 2; i < 10; i++) {
  console.log(i, "단 시작>>>")
  for (let j = 1; j < 10; j++) {
    console.log(i, "x", j, "=", i * j)
  }
}

// 완료)문제(난이도 3/3) (if문필요) : 구구단 짝수 단만 출력하시오.
for (let i = 2; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i, "단 시작>>>")
    {
      for (let j = 1; j < 10; j++) {
        console.log(i, "x", j, "=", i * j)
      }
    }
  }
}
// ★문제(난이도 3/3) (if문필요) : 구구단 홀수 단만 출력하시오.
console.log("답: ")
for (let i = 2; i < 10; i++) {
  if (i % 2 === 1) {
    console.log(i, "단 시작>>>")
    {
      for (let j = 1; j < 10; j++) {
        console.log(i, "x", j, "=", i * j)
      }
    }
  }
}
// 문제(난이도 3/3) (if문필요) : [52, 273, 103, 32, 57, 103, 31, 2]와 같은 숫자 배열이 주어질 때, 배열 내부에서 최대값과 최소값을 찾는 코드를 만들어라.
const arr8 = [52, 273, 103, 32, 57, 103, 31, 1, 9999]
let max = 9999
let min = 1
for (let i = 0; i < arr8.length; i++) {
  // 최대값
  if (max < arr8[i]) {
    max = arr8[i]
  }
  // 최소값
  for (let j = 0; j < arr8.length; j++) {
    if (arr8[i] > arr8[j]) {
      min = arr8[j]
    }
  }
}
console.log(min)
console.log(max)

// 문제(난이도 3/3) (2중 for문) : 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
// [ 1, 5 ]
// [ 2, 4 ]
// [ 3, 3 ]
// [ 4, 2 ]
// [ 5, 1 ]
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 6) {
      console.log([i, j])
    }
  }
}
