// 함수
function a() {
  console.log("함수 a가 실행됨")
}

a()

// 함수 : parameters (params) - arguments (인자, args)
function b(text) {
  console.log(text)
}

b("함수 b가 실행됨")

// 함수 : return (반환값, 리턴값)
function c(number) {
  return number + 10
}
const result = c(10)
console.log(result)

// 함수의 직접표현식 : 함수를 변수안에 담는 방식
const aa = function () {
  console.log("함수 aa가 실행됨")
}
aa()

const bb = function (text) {
  console.log(text)
}
bb("함수 bb가 실행됨")

const cc = function (number) {
  return number + 10
}
const result2 = cc(30)
console.log(result2)

// 함수의 직접표현식 사용예
const jsontype = {
  no: 123,
  id: "abcd",
  pw: "abcd1234",
  name: "yang",
  premium: true,
  printText: function (text) {
    console.log(text)
  },
}

jsontype.printText("Hello World!")

console.log()

// JSON 클래스 : JSON 관련된 기능들을 모아놓은 클래스
// Math 클래스 : 수학 관련된 기능들을 모아놓은 클래스
// 변수(PI), 함수(plus, minus, multiply, divide)
// Math.plus(1, 2) // 3
// Math.PI // 3.141592653589793

// 함수의 화살표표현식
// const aaa = function () { console.log("함수 aaa가 실행됨") }
const aaa = () => {
  console.log("함수 aaa가 실행됨")
}
const bbb = (text) => {
  console.log(text)
}
const ccc = (number) => {
  return number + 10
}

// 함수의 화살표표현식2 : 리턴이 있는 경우 { return } 을 괄호까지 통으로 생략가능
const cccc = (number) => number + 10

// 기억할 것
const dddd = (a, b) => a + b
console.log(dddd(1, 2))
