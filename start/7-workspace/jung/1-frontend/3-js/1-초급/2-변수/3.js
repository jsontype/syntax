// 값참조, 주소참조 => 얉은복사(shallow copy), 깊은복사(deep copy)

// 선언시, 변수 let, 상수 const

// 값참조 : string, number, boolean
let a = 1
let aa = a
a = 2
console.log(aa)

// 주소참조
// object의 얉은복사
let b = { a: 1, b: 2 } // key : value
let c = b
b.a = 2
console.log(c.a) // 1

// array의 얉은복사
let d = [1, 2, 3, 4] // index : value
let e = d
d[0] = 9999
console.log(e)

// object의 깊은복사
let bb = { a: 1, b: 2 }
let cc = JSON.parse(JSON.stringify(bb))
bb.a = 2
console.log(cc)

// array의 깊은복사
let dd = [1, 2, 3, 4]
let ee = JSON.parse(JSON.stringify(dd))
dd[0] = 9999
console.log(ee)
