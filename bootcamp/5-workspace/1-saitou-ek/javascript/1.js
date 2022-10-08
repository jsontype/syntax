// Variable 変数
// Data Type データタイプ

// Number : 値参照
let a = 1
let b = 2
b = 3
console.log(a + b) // * / -
const c = 1
console.log(c)

// String : 値参照
let d = 'hello'
console.log(d)

// Array 配列 : 住所参照のタイプ
const e = [1, 2, 3, 'hello']
console.log(e)
// e[index]
console.log(e[0]) // 1
console.log(e[1]) // 2
console.log(e[2]) // 3
console.log(e[3]) // hello
const f = [1, 2, 3, 4, 5, 6, 7, 8, 9]
f.pop()
f.push(6)
console.log(f)
console.log(f.length)
console.log(f[f.length - 1])
