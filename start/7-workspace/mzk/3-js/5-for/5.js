// const a = [1, 2, 3, 4, 5]

// 反復文 for (初期値; 条件; 事後処理) {}
// for (let i = 0; i < a.length; i = i + 1) {
//   console.log(a[i])
// }

// i = 0
// 0 < 5
// a[0] = 1

// i = 1
// 1 < 5
// a[1] = 2

// i = 2
// 2 < 5
// a[2] = 3

// i = 3
// 3 < 5
// a[3] = 4

// i = 4
// 4 < 5
// a[4] = 5

// i = 5
// 5 < 5 X

const a = [1, 2, 3, 4, 5]

for (let i = 0; i < a.length; i = i + 1) {
  console.log(a[i])
}

// forEach : 高次関数 return X
console.log("forEach")
a.forEach((item) => console.log(item))

// map : 高次関数 return O, 配列の長さはそのまま
console.log("map")
const b = a.map((item) => item * 3) // 一定の処理
console.log(b)

// filter : 高次関数 return O, 配列の長さは変わる
console.log("filter")
const c = a.filter((item) => item > 2) // 条件
console.log(c)
