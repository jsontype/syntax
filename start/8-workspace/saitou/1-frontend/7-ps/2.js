// 問題(難易度1/3):arrのすべての値の総合を求める反復文を作ってみよう。
const arr = [1, 2, 3]
let total = 0

for (let i = 0; i < arr.length; i++) {
  total += arr[i]
}
console.log(total)

// 問題 (難易度 1/3):0から10未満の足すコードを作れ。
let sum = 0
for (let i = 0; i < 10; i++) {
  sum += i
}
console.log(sum)

// 問題 (難易度 1/3):1から10までかけるコードを作れ。
let times = 1
for (let i = 1; i < 10; i++) {
  times *= i
}
console.log(times)

// 問題(難易度2/3):arrのすべての値を立方(**3:3条)した値をそれぞれ出力する。
const arr2 = [1, 2, 3]
arr2.forEach((item) => {
  console.log(item ** 3)
})

// 問題(難易度2/3):arrのすべての値がそれぞれ立方(**3)になった配列を出力する。
const arr3 = [2, 4, 8]
const result3 = arr3.map((item) => {
  return item ** 3
})
console.log(result3)

const arr4 = [3, 6, 9]
const result4 = arr4.map((item) => {
  return item ** 3
})
console.log(result4)

// 問題(難易度2/3):arrの各値の2乗の総和を求める反復文を作ってみよう。
const arr5 = [2, 5, 10]
let result5 = 0
for (let i = 0; i < arr5.length; i++) {
  result5 += arr5[i] * arr5[i]
}
console.log(result5)
