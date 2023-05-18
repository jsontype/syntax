// Condition
let a = 7
let b = 6

// if (a < b) {
//     console.log('!')
// }

// if (a === 3) {
//     console.log('!')
// } else {
//     console.log('?')
// }

if (a === 1) {
  console.log("1!")
} else if (a === 2) {
  console.log("2!")
} else if (a === 3) {
  console.log("3!")
} else {
  console.log("?")
}

// Quiz
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

// && Ampersand : And
// || Vertical Bar : Or

// lint : correct for the convention
// indent : 2

let x = 21

// 変数 xが10より大きく、20より小さい時に変数 xを出力する条件式を完成せよ。
if (x > 10 && x < 20) {
  console.log(x)
}

// 変数 xが10より大きいか、それども、20より小さい時に変数 xを出力する条件式を完成せよ。
if (x > 10 || x < 20) {
  console.log(x)
}

// && : and
if (a > 1) {
  console.log("a > 1 !!!")
}

a > 1 && console.log("a > 1 !!!")
// Boolean && Function -> 競合 -> Function 勝利

// if - else
const value = 3
if (value === 1) {
  console.log("value is 1")
} else {
  console.log("value is not 1")
}

// ampersand operator
value === 1 && console.log("value is 1")

// ternary operator
value === 1 ? console.log("value is 1") : console.log("value is not 1")

// if - else if - else
const value2 = 3
if (value2 === 1) {
  console.log("value2 is 1")
} else if (value2 === 2) {
  console.log("value2 is 2")
} else if (value2 === 3) {
  console.log("value2 is 3")
} else if (value2 === 4) {
  console.log("value2 is 4")
} else {
  console.log("value2 is not 1, 2, 3, 4")
}

// ternary operator 三項演算子
value2 === 1
  ? console.log("value2 is 1")
  : value === 2
  ? console.log("value2 is 2")
  : value === 3
  ? console.log("value2 is 3")
  : value === 4
  ? console.log("value2 is 4")
  : console.log("value2 is not 1, 2, 3, 4")
