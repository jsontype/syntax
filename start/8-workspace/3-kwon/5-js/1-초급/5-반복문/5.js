let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (초기값; 실행조건; 실행후처리)
for (let i = 0; i < a.length; i++) {
  console.log(a[i])
}

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
// 문제(난이도 1/3) : arr의 모든 값들의 총합을 구하는 반복문을 만들어보라.
let result = 0
for (let i = 0; i < arr.length; i++) {
  result = result + arr[i]
}
console.log(result)

// 문제(난이도 1/3) : 0부터 10미만의 더하는 코드를 만들어라.
result = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] < 10) {
    result = result + arr[i]
  }
}
console.log(result)

// 문제(난이도 1/3) : 1부터 10까지 곱하는 코드를 만들어라.
result = 1
for (let i = 1; i < 10; i++) {
  result = result * i
}
console.log(result)

// 문제(난이도 2/3) : arr의 모든 값들을 세제곱(** 3)한 값을 각각 출력하라.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] ** 3)
}

// 문제(난이도 2/3) : arr의 모든 값들이 각각 세제곱(** 3)으로 된 배열을 출력하라.
const resultArr = []
for (let i = 0; i < arr.length; i++) {
  resultArr.push(arr[i] ** 3)
}
console.log(resultArr)

// 문제(난이도 2/3) : arr의 각 값들의 2승의 총합을 구하는 반복문을 만들어보라.
result = 0
for (let i = 0; i < arr.length; i++) {
  result = result + arr[i] ** 2
}
console.log(result)

// 문제(난이도 2/3) (if문필요) : arr에서 3의 배수인 것만(arr[i] % 3 = 0) 출력하세요.
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    console.log(arr[i])
  }
}

// 문제(난이도 2/3) (if문과 && 필요) : 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
result = 0
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    result = result + i
  }
}
console.log(result)

// 문제(난이도 2/3) (if문필요) : 1~100까지 짝수 합을 구하시오.
result = 0
for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    result = result + i
  }
}
console.log(result)

// 문제(난이도 2/3) (if문필요) : 1~100까지 홀수 합을 구하시오.
result = 0
for (let i = 1; i < 101; i++) {
  if (i % 2 === 1) {
    result = result + i
  }
}
console.log(result)

// 문제(난이도 2/3) (if문필요) : 1~100까지 합을 구하다가, 합이 100을 넘어갈 때 그 합과 더한 숫자를 출력하시오.
result = 0
for (let i = 1; i < 101; i++) {
  if (result < 100) {
    if (i % 2 === 1) {
      result = result + i
    }
  } else break
}
console.log(result)

// 문제(난이도 3/3) (if문필요) : 구구단을 완성하세요. (이중 for문)
for (let i = 2; i < 10; i++) {
  console.log("<<<", i, "단 >>>")
  for (let j = 1; j < 10; j++) {
    console.log(i, "x", j, "=", i * j)
  }
}

// 문제(난이도 3/3) (if문필요) : 구구단 짝수 단만 출력하시오.
// 문제(난이도 3/3) (if문필요) : 구구단 홀수 단만 출력하시오.

// 문제(난이도 3/3) (if문필요) : [52, 273, 103, 32, 57, 103, 31, 2]와 같은 숫자 배열이 주어질 때, 배열 내부에서 최대값과 최소값을 찾는 코드를 만들어라.
const arr2 = [52, 273, 103, 32, 57, 103, 31, 1, 9999]
let max = 0
let min = 0
for (let i = 0; i < arr2.length; i++) {
  // 최대값
  if (max < arr2[i]) {
    max = arr2[i]
  }
  // 최소값
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[i] > arr2[j]) {
      min = arr2[j]
    }
  }
}
console.log(min)
console.log(max)

// 문제(난이도 3/3) (2중 for문) : 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 6) {
      console.log(`[${i}, ${j}]`)
    }
  }
}
