// 問題（難易度2/3）（if文必須）:アルファベットで構成された配列が与えられたとき、配列中にgがあることを確認していれば、"g見つけた！"を出力してください。
const arr1 = ["a", "b", "c", "d", "e", "f", "g"]

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === "g") {
    console.log("g見つけた!")
  }
}

// 問題（難易度2/3）（if文必要）:arrで3の倍数のもののみ（arr[i] % 3 = 0）出力してください。
const arr2 = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 3 === 0) {
    console.log(arr2[i])
  }
}

// 問題（難易度2/3）（if文と&&必要）:1から20未満の整数のうち、2または3の倍数の合計を求めなさい。
let num = 0
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    num += i
  }
}
console.log(num)

// 問題（難易度2/3）（if文筆要）:1~100まで偶数の合計を求めなさい。
let num2 = 0
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    num2 += i
  }
}
console.log(num2)

// 問題（難易度2/3）（if文筆要）:1~100まで奇数の合計を求めなさい。
let num3 = 0
for (let i = 0; i < 100; i++) {
  if (i % 3 === 0) {
    num3 += i
  }
}
console.log(num3)

// 問題(難易度2/3) (if文必須):1~100まで合計を求め、合計が100を超えるときはその合計を出力してください。
let num4 = 0
for (let i = 0; i < 100; i++) {
  if (num4 < 100) {
    num4 += i
  } else break
}
console.log(num4)

// 問題(難易度3/3) (if文必要):九九を完成させてください。(二重for文)
const kuku1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const kuku2 = [2, 3, 4, 5, 6, 7, 8, 9]

// kuku1.forEach((item1) => kuku2.forEach((item2) => {
//   console.log(item1 + "x" + item2 + "=" + item1 * item2 )
//   }
// ))

// 問題 (難易度 3/3) (if文筆要):九九の偶数段のみ出力してください。
// kuku1.forEach((item1) => kuku2.forEach((item2) => {
//   if (item1 % 2 === 0)
//   console.log(item1 + "x" + item2 + "=" + item1 * item2)
//   }
// ))

// 問題 (難易度 3/3) (if文筆要):九九の奇数段のみ出力してください。
// kuku1.forEach((item1) => kuku2.forEach((item2) => {
//   if (item1 % 3 === 0)
//   console.log(item1 + "x" + item2 + "=" + item1 * item2)
//   }
// ))

// 問題(難易度3/3)(if文必須):[52、273、103、32、57、103、31、2]のような数字配列が与えられる時、配列内部で最大値と最小値を探すコードを作れ。
const arr10 = [52, 273, 103, 32, 57, 103, 31, 2]

let min = 0
let max = 0

for (let i = 1; i < arr10.length; i++) {
  if (i < min) {
    min = i
  }
}
console.log(min)
// console.log(max)

// 問題(難易度3/3)(2重for文):2つのサイコロを投げたとき、目の合計が6になるすべての場合の数を出力してください。
// const dice1 = [1, 2, 3, 4, 5, 6]
// const dice2 = [1, 2, 3, 4, 5, 6]

// dice1.forEach((item1) => dice2.forEach((item2) => {
//   if (item1 + item2 === 6)
//     console.log("[ " + item1 + " " + "," + " " + item2 + " ]")
//   }
// ))

// [ 1, 5 ]

// [ 2, 4 ]

// [ 3, 3 ]

// [ 4, 2 ]

// [ 5, 1 ]
