// 스위치문
const device = "iphone"
switch (device) {
  case "iphone":
    console.log("아이폰!")
    break
  case "ipad":
    console.log("아이패드!")
    break
  case "galaxy note":
    console.log("갤럭시 노트!")
    break
  default:
    console.log("모르겠네요..")
}

// 암묵적 캐스팅
let a = 1
console.log(a * 3) // js는 타입에 있어서 융통성이 있다. 암묵적 캐스팅을 한다.
// 직접적 캐스팅
let b = Number(a)
let c = Boolean(a)
let d = String(c)

// 기본조건문
// if (a === 1) {
//   console.log(1)
// }

// 중급조건문 && : 앞이 true이면 뒤를 실행
a === 1 && console.log(1) // boolean && function

// 기본조건문
// if (a !== 2) {
//   console.log("2가 아님")
// }

// 중급조건문 || : 앞이 false이면 뒤를 실행
// a !== 2 && console.log("2가 아님")
a === 2 || console.log("2가 아님") // boolean || function

// 기본조건문
// if (a === 2) {
//   console.log(2)
// } else {
//   console.log("몰라")
// }

// 중급조건문 삼항연산자
a === 2 ? console.log(2) : console.log("몰라")

// 기본조건문
if (a === 1) {
  console.log(1)
} else if (a === 2) {
  console.log(2)
} else if (a === 3) {
  console.log(3)
} else if (a === 4) {
  console.log(4)
} else {
  console.log("몰라")
}

// 중급조건문 삼항연산자
a === 1
  ? console.log(1)
  : a === 2
  ? console.log(2)
  : a === 3
  ? console.log(3)
  : a === 4
  ? console.log(4)
  : console.log("몰라")
