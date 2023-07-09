// 완료)문제 : 1~20까지의 배열중에서 홀수만 출력해라.
const arr10 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
arr10.forEach((item) => item % 2 === 1 && console.log(item))

// 완료)문제 : 1~20까지의 배열중에서 짝수만 출력해라.
const arr20 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
arr10.forEach((item) => item % 2 === 0 && console.log(item))

// 완료)문제 : x를 5로 선언하라.
let x = 5
console.log(x)

// 완료)문제 : 변수 x1가 10보다 크고, 20보다 작을 때 변수 x1를 출력하는 조건식을 완성하라.
let x1 = 10

// 완료)문제 : 변수 y가 10보다 크거나, 20보다 작을 때 변수 y를 출력하는 조건식을 완성하라.
let y = 10

// 완료)문제 : 변수 x2에 3을 곱한 값이 10보다 큰 경우, 변수 x2를 출력하는 조건식을 완성하라.
let x2 = 4 // x값은 4이상부터 가능 -choo

// 완료)문제 : y1를 1로 선언하라.
let y1 = 1
console.log(y1)

// 완료)문제 : 변수 y2에 5를 곱한 값이 x3보다 큰 경우, 변수 x3를 출력하는 조건식을 완성하라.
let x3 = 1 // x값은 1~4까지 변환 가능 -choo
let y2 = 1

// 완료)문제(난이도 1/3) : arr의 모든 값들의 총합을 구하는 반복문을 만들어보라.
const arr = [1, 2, 3, 4, 5]
// let sum = 0

arr.forEach((item) => {
  sum += item
})
console.log(sum)

// 모름) 문제(난이도 1/3) : 0부터 10미만의 더하는 코드를 만들어라.
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let sum = 0
arr.forEach((item) => {
  sum = item < 10 && sun + item
})
console.log(sum)

// 모름)문제(난이도 1/3) : 1부터 10까지 곱하는 코드를 만들어라.
let result = 1
for (let i = 0; i <= 10; i++) {
  // !== 연산자는 같지 않음
  result = i !== 0 && result * i
}
console.log(result)

// 완료)문제(난이도 2/3) : arr2의 모든 값들을 세제곱(** 3)한 값을 각각 출력하라.
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.forEach((item) => console.log(item ** 3))

// 완료)문제(난이도 2/3) : arr3의 모든 값들이 각각 세제곱(** 3)으로 된 배열을 출력하라.
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr4 = []

arr3.forEach((item) => {
  const xx = item ** 3
  arr4.push(xx)
})
console.log(arr4)

// 완료)문제(난이도 2/3) : arr5의 각 값들의 2승의 총합을 구하는 반복문을 만들어보라.
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum2 = 0
arr5.forEach((item) => {
  const xxx = item ** 2
  sum2 += xxx
})
console.log(sum2)

// 완료)문제(난이도 2/3) (if문필요) : arr5에서 3의 배수인 것만(arr[i] % 3 = 0) 출력하세요.
const arr6 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
arr6.forEach((item) => item % 3 === 0 && console.log(item))

// 인터넷 참조)문제(난이도 2/3) (if문과 && 필요) : 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
const arr7 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
let sum3 = 0
arr7.forEach((item) => {
  sum3 = item % 2 === 0 || item % 3 === 0 ? sum3 + item : sum3
})
console.log(sum3)

// 문제(난이도 3/3) (if문필요) : [52, 273, 103, 32, 57, 103, 31, 2]와 같은 숫자 배열이 주어질 때, 배열 내부에서 최대값과 최소값을 찾는 코드를 만들어라.
const arr8 = [52, 273, 103, 32, 57, 103, 31, 4, 9999]
let max = 9999
let min = 1

arr8.forEach((item) => {
  max = max < item && item
  arr8.forEach((item2) => {
    min = item > item2 ? item2 : min
  })
})
console.log(min)
console.log(max)
