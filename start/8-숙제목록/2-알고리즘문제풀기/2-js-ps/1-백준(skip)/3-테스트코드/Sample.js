// 입력
const input = `1 100
2 7
10 9
10 10
`

// 출력
console.log(input)
const a = input.split(`\n`)
const b = a.map((v) => v.split(` `))
const c = b.filter((v) => v.length !== 1)
const d = c.map((v) => v.map((v) => Number(v)))
const e = d.map((v) => Math.floor(v[1] / (v[0] + 1)))
e.forEach((v) => console.log(v))


// 1 100
// 2 7
// 10 9
// 10 10

// 50
// 2
// 0
// 0
