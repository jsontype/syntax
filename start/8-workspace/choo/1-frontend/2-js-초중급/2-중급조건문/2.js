let a = 1
let b = 1

// 기존 조건문
// if (a > 2) {
//   console.log("a가 2보다 크다")
// }

// if (a > 2) {
//   console.log("a가 2보다 크다")
// } else {
//   console.log("a가 2보다 같거나 작다")
// }

// if (a > 2) {
//   console.log("a가 2보다 크다")
// } else if (a === 2) {
//   console.log("a가 2보다 같다")
// } else {
//   console.log("a가 2보다 작다")
// }

// if (a === 1) {
//   console.log("a는 1이다")
// } else if (a === 2) {
//   console.log("a는 2이다")
// } else if (a === 3) {
//   console.log("a는 3이다")
// } else if (a === 4) {
//   console.log("a는 4이다")
// } else if (a === 5) {
//   console.log("a는 5이다")
// } else {
//   console.log("a는 1~5 사이의 숫자는 아니다")
// }

// 중급 조건문1 : Ampersand &&
// let a = 3
// const result = (a > 2) && console.log("a가 2보다 크다")

// 둘다 True 여야 실행 + 암묵적 캐스팅
// let value = 3
// let a = value === 3 // true
// let b = "Hello" // Boolean으로 치면 true
// let c = a && b // a 타입이 불린, b 타입이 스트링 => c 타입은 무조건 스트링 (값 참조에서, 암묵적 캐스팅 경합이 일어나면, 불린이 가장 최하위에 있다.)
// console.log(c)

// let c = true && "Hello" => true를 뱉을거냐 "Hello"을 뱉을거냐가 되는데, "Hello"이 뱉힘
// let c = false면 && 뒤 볼 필요없음 => false (=null)

// 중급 조건문2 : 삼항연산자 (Trinery Operator)
// let a = 1
// let b = a > 2 ? "a가 2보다 크다" : "a가 2보다 작다"
// console.log(b)

// 기존 조건문을 중급 조건문으로 바꾸면?
// if (a > 2) {
//   console.log("a가 2보다 크다")
// }
// const result1 = a > 2 && "a가 2보다 크다"
// console.log(result1)

// if (a > 2) {
//   console.log("a가 2보다 크다")
// } else {
//   console.log("a가 2보다 같거나 작다")
// }
// const result2 = a > 2 ? "a가 2보다 크다" : "a가 2보다 같거나 작다"
// console.log(result2)

// if (a > 2) {
//   console.log("a가 2보다 크다")
// } else if (a === 2) {
//   console.log("a가 2보다 같다")
// } else {
//   console.log("a가 2보다 작다")
// }
// const result3 =
//   a > 2 ? "a가 2보다 크다" : a === 2 ? "a가 2보다 같다" : "a가 2보다 작다"

// if (a === 1) {
//   console.log("a는 1이다")
// } else if (a === 2) {
//   console.log("a는 2이다")
// } else if (a === 3) {
//   console.log("a는 3이다")
// } else if (a === 4) {
//   console.log("a는 4이다")
// } else if (a === 5) {
//   console.log("a는 5이다")
// } else {
//   console.log("a는 1~5 사이의 숫자는 아니다")
// }
// const result4 =
//   a === 1
//     ? "a는 1이다"
//     : a === 2
//     ? "a는 2이다"
//     : a === 3
//     ? "a는 3이다"
//     : a === 4
//     ? "a는 4이다"
//     : a === 5
//     ? "a는 5이다"
//     : "a는 1~5 사이의 숫자는 아니다"
