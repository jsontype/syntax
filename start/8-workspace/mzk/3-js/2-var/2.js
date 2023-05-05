// Variables
let a = 1
a = 2
console.log(a)

let b = 2
b = b + 3
console.log(b)

let c = a + b
console.log(c)

// Const
const d = 1
// d = 2 // error
console.log(d)

// Casting : データタイプを変えること
const e = 1
const eString = String(e) // 直接キャスティング
const eNumber = Number(eString) // 直接キャスティング
const eBoolean = Boolean(eString) // 直接キャスティング
console.log(typeof eString) // string
console.log(typeof eNumber) // number
console.log(typeof eBoolean) // boolean

let aa = 1 // number
let bb = "2" // string
let cc = aa + bb
console.log("cc =", cc)
console.log(typeof aa) // number
console.log(typeof bb) // string
console.log(typeof cc) // number + string = "12" -> 暗黙のキャスティング
