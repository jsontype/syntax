// 함수와 파라미터
// function a (text) {
//   console.log(text)
// }
// a('aaa')
// a('bbb')

// 함수와 리턴
// function a2 (num) {
//   return num + 1
// }
// const result = a2(3)
// console.log(result)



// 중급함수 : 직접표현식 함수
// const b = function (text) { console.log(text) }
// b('aaa')
// b('bbb')

// const b2 = function (num) { return num + 1 }
// const result = b2(3)
// console.log(result)



// 중급함수 : 화살표표현식 함수
// const c = text => { console.log(text) }
// c('aaa')
// const c2 = (a, b) => { return a + b }
// console.log(c2(3))



// 중급함수 : 화살표표현식에서 return을 생략한 함수
const d = item => item + 1
console.log(d(3))
