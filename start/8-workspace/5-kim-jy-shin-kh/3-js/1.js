console.log("hello")

// 변수 선언 let, const
const name = "yang"
const job = "dev"
const age = 5

// 백틱을 이용한 템플릿 리터럴 문법
console.log(`
    저는 ${name}입니다. 
    직업은 ${job}입니다. 
    올해로 ${age}살이 됩니다.
`)
// const a = String(5)
// console.log(typeof a)

// 배열
const a = [1, 2, 3, 4, 5, 1324, 1341, 1324123421, 12] // 3
console.log(a[a.length - 1])

// 반복문
for (let i = 0; i < a.length; i++) {
  console.log(a[i])
}

// 조건문
const b = 3
if (b === 1) {
  console.log("b는 1")
} else if (b === 2) {
  console.log("b는 2")
} else if (b === 3) {
  console.log("b는 3")
} else {
  console.log("모름")
}

// 객체
const user1 = {
  id: "yang12",
  name: "yang",
  pw: "sdkahgk",
  email: "test@test.com",
}
// console.log(user1.id) // "yang12"
// console.log(user1["id"]) // "yang12"
const user2 = {
  id: "14sadf",
  name: "kim",
  pw: "123",
  email: "123@test.com",
}

const user = [user1, user2]

// 함수
function a(item) {
  // 파라메타 // parameter
  return item * 3 // 리턴값, 반환값 // 모도리치 // return
}
console.log(a(3)) // 인자 // 히키수 // argument, args

// 함수 표현식의 종류

// 직접표현식
const bb = function (item) {
  return item + 3
}
// 화살표 함수
const bbb = (item) => {
  return item + 3
}
// 화살표 함수의 리턴 생략
const bbbb = (item) => item + 3
