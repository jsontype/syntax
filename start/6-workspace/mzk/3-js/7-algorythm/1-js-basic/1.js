const a = [1, 2, 3, 4, 5]

// 問題:xを5と宣言せよ。
const x = 5

// 問題:変数xが10より大きく、20より小さい時に変数xを出力する条件式を完成せよ。
if (x > 10 && x < 20) {
  console.log(x)
}

// 問題:yを1と宣言せよ。
let y = 1

// 問題:変数 y に 5 を掛けた値が x より大きい場合、変数 x を出力する条件式を完成せよ。
if (y * 5 > x) {
  console.log(x)
}

console.log("問題1")
// 反復文 for (初期値; 条件; 事後処理) {} : aに3を掛けた値
for (let i = 0; i < a.length; i++) {
  console.log(a[i] * 3)
}

console.log("問題2")
// 反復文 for (初期値; 条件; 事後処理) {} : aを二度掛け合わせた値
for (let i = 0; i < a.length; i++) {
  console.log(a[i] * a[i])
}

console.log("問題3")
// 反復文 for (初期値; 条件; 事後処理) {} : aを2で割った余りの値
for (let i = 0; i < a.length; i++) {
  console.log(a[i] % 2)
}

// 問題(難易度1/3):aのすべての値の合計を求める反復文を作ってみよう。
console.log("問題4")
let result = 0
for (let i = 0; i < a.length; i++) {
  result = result + a[i] // 累積
}
console.log(result)
// i = 0 > result = 1
// i = 1 > result = 3

console.log("問題 - demo")
// 反復文 for (初期値; 条件; 事後処理) {} : 2の倍数であることのみ表示
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) {
    console.log(a[i]) // 2, 4
  }
}

console.log("問題5")
// 問題(難易度1/3):0から10未満の足すコードを作れ
let result5 = 0
for (let i = 0; i < 10; i++) {
  result5 = result5 + i
}
console.log(result5)

console.log("問題6")

// 問題(難易度1/3):1から10までかけるコードを作れ。
let result6 = 1
for (let i = 1; i < 10; i++) {
  result6 = result6 * i
}
console.log(result6)

console.log("問題7")

// 問題(難易度2/3):aのすべての値を立方(**3)した値をそれぞれ出力せよ。
for (let i = 1; i < a.length; i++) {
  console.log(a[i] ** 3)
}

console.log("問題8")

const b = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

// 問題(難易度2/3) (if文必要) : bのうち、2または3の倍数の合計を求めなさい。
let result8 = 0
for (let i = 0; i < b.length; i++) {
  if (b[i] % 2 === 0 || b[i] % 3 === 0) {
    result8 = result8 + b[i]
  }
}
console.log(result8)

console.log("問題9")

// 問題(難易度2/3) (if文必要) : 1~100まで偶数の和を求めなさい。
let result9 = 0
for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    result9 = result9 + i
  }
}
console.log(result9)

console.log("問題10")

// 問題(難易度2/3)(if文必要):1~100まで奇数の合計を求めなさい。
let result10 = 0
for (let i = 1; i < 101; i++) {
  if (i % 2 === 1) {
    result10 = result10 + i
  }
}
console.log(result10)

console.log("問題11")

// 問題(難易度3/3)(2重for文):九九
// 2 x 2 = 4
// 2 x 3 = 6
// ...
for (let i = 2; i < 10; i++) {
  console.log(i, "段")
  for (let j = 2; j < 10; j++) {
    console.log(i, "x", j, "=", i * j)
  }
}

// 問題(難易度3/3)(2重for文):2つのサイコロを投げたとき、目の和が6になるすべての場合の数を出力しなさい。// 5
// [1, 5]
// [2, 4]
// [3, 3]
// [4, 2]
// [5, 1]
for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++) {
    if (i + j === 6) console.log(i, ",", j)
  }
}

// 問題(難易度1/3)(else if, else)
// apple = 5
// people = 4
// orange = 3
// オレンジが人より多い場合、「オレンジで十分だ」
// オレンジが十分でない場合、「オレンジで不十分だ」
// リンゴが人より多ければ「リンゴで十分だ」
// appleも十分でない場合、「どちらも不十分だ」
let apple = 5
let people = 4
let orange = 3

if (orange > people) {
  console.log("オレンジが十分だ")
} else if (orange < people) {
  console.log("オレンジが不十分だ")
} else if (apple > people) {
  console.log("リンゴが十分だ")
} else {
  console.log("どちらも不十分だ")
}
