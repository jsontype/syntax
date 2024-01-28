// heap : a, bなど変数の保存先
// stack : 実行する行
// que : 待機室

// 変数：変わる値を持っている箱
// 変数定義：let
let a = 1
a = 2
a = 3
console.log(a) // 3

let b = 2
b = 4
b = b * 2
b = 15 / 3
b = b + 3
console.log(b) // 8

// 定数：変わらない値を持っている箱
// 定数定義：const
const c = 3
// c = 4
console.log(c) // 4
