// Variables Type

// 価を参照するもの : Number, String, Boolean

// Number
let a = 1
a = a + 1 // 2
a = a - 4 // -2
a = a * -2 // 4
a = a / 2 // 2
a = a ** 3 // 8
a = a % 3 // 2
console.log(a)

// String
let b = 'hello'
let c = "hello javascript"
console.log(b - 3)

// Boolean
let d = a > 1 // true
let e = a > 3 // false
let f = Boolean('0') // true
let g = Boolean('') // false
let h = Boolean(0.1) // true
let i = Boolean(0) // false
console.log(h)
console.log(i)

// メモリアドレスを参照するもの : Array, Object

// 配列 array : index / value
const arr = [1, 5, 3, 6, 5] // Shinjukuku 1-1-1 <- 5 people
arr.push(6) // Shinjukuku 1-1-1 <- 1 people
console.log(arr)
console.log(arr[0]) // 1
console.log(arr[1]) // 5
console.log(arr[2]) // 3

// 客体 object : key / value
const obj = { id: 'yang', name: 'D.yang', email: 'd-yang@test.com' }
console.log(obj)
console.log(obj.id)
console.log(obj.name)
console.log(obj.email)
console.log(obj['id'])
console.log(obj['name'])
console.log(obj['email'])
