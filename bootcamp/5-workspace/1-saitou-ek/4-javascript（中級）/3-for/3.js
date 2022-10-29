const a = [1, 2, 3, 4, 5]

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// forEach = returnが無い配列高次関数
a.forEach((item) => { console.log(item) })

// map = 同じ長さの配列をreturnする配列高次関数
// const b = a.map((item) => { return item + 1 })
const b = a.map(item => item + 1)
console.log(b)

// filter = filteringされてる配列をreturnする配列高次関数 (returnに条件付ける)
const c = a.filter((item) => { return item > 2 })
console.log(c)
