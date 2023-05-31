// 입력
const input = `-2 5`

// 출력
const inputSplit = input.split(" ").map(BigInt)
const a = Number(inputSplit[0])
const b = Number(inputSplit[1])
console.log(Math.abs(a - b))
