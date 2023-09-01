// 캐스팅

// 직접적 캐스팅
let a = String(2)
let b = Number("3")
// 암묵적 캐스팅
let c = 'Hello' + 2 // 문자열 + 숫자 = 문자열 "Hello2"
let d = '1' + 2 // 문자열 + 숫자 = 문자열 "12"
if (a > 2) {
  console.log("a가 2보다 크다")
} else if (a == 2) { // == 를 쓰면 암묵적 캐스팅 허용, === 를 쓰면 비허용
  console.log("a가 2보다 같다")
} else {
  console.log("a가 2보다 작다")
}
