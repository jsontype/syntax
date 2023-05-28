// 입력
const input = [1000, 100]

// 출력
// const fs = require("fs")
// const input = String(fs.readFileSync("/dev/stdin")).split(" ")
const a = Number(input[0])
const b = Number(input[1])
console.log(BigInt(Math.floor(a / b)))
console.log(BigInt(Math.floor(a % b)))
