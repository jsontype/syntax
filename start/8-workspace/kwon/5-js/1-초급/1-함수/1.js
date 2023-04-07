// 함수 (파라미터 parameter / 아규먼트 arguments args 인자 인자값 인수) { 인자값을 받아서 처리 }
function plusOne(a) {
  return a + 1 // 리턴값 반환값
}
let result = plusOne(a)
console.log(result)

// void 함수 : 리턴이 없음
function hello() {
  console.log("Hello JS!")
}

// 화살표 함수 표현식
// function a (item) {
//   return item + 1
// }
// ▼ 직접 표현식
// const a = function (item) { return item + 1 }
// ▼ 화살표 표현식1
// const a = (item) => { return item + 1 }
// ▼ 화살표 표현식2
// const a = item => item + 1
// console.log(a(1))
