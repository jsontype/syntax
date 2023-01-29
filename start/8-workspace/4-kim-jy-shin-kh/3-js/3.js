/*
    [중급조건문]

    1. 삼항연산자 방식
    1. ampersand 방식
    1. verticalbar 방식

    * 잘 알아두면 이후 리액트할 때 많이 쓴다.
*/

let a = 1
let b = 2
let c = 3

// const result = a === 1 ? "값은 1" : "몰라"
// console.log(result)
// const result2 = a === 1 ? 1 : a === 2 ? 2 : b === 3 ? 3 : b === 4 ? 4 : "몰라"
// console.log(result2)

if (a === 1) {
  console.log("값은 1")
}

const result = a === 1 && "값은 1"
const result2 = c || a // c가 undefined면 a로 대체해라.
console.log(result2)
