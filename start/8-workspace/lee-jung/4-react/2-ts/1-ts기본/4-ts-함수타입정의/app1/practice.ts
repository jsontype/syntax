function plus(a: number, b: number): number {
  return a + b
}

// const a = plus(1, "2") // error
const a = plus(1, 2)
console.log(a) // 3

function plusArray(a: number[]): number {
  return a.reduce((acc, current) => acc + current, 0)
}

const result1 = plusArray([1, 2, 3])

function returnNoting(): void {
  console.log("hello")
}
returnNoting()

// Union Type
function plusOne(a: string | number): number {
  return (Number(a) + 1)
}

plusOne("2")
