let a = 1
let b = 2

// else가 없는 조건문은 &&나 ||를 이용해서 대체
// if (a > b) {
//   console.log('a가 크다')
// }
// Ampersand를 이용한 조건문 : true일 때 실행
// a > b && console.log('a가 크다')

// if (!(a > b)) {
//   console.log('a가 크지 않다')
// }
// Vertical Bar를 이용한 조건문 : false일 때 실행
// a > b || console.log('a가 크지 않다')



// else가 있는 조건문은 삼항연산자로 대체
// let c = 3
// if (c === 1) {
//   console.log('c는 1이다')
// } else {
//   console.log('c는 1이 아니다')
// }
// c === 1 ? console.log('c는 1이다') : console.log('c는 1이 아니다')

// else if... else가 있는 조건문 역시 삼항연산자로 대체
if (c === 1) {
  console.log('c는 1이다')
} else if (c === 2) {
  console.log('c는 2이다.')
} else if (c === 3) {
  console.log('c는 3이다.')
} else {
  console.log('c는 1,2,3 중 하나는 아니다.')
}
c === 1 ? console.log('c는 1이다') : c === 2 ? console.log('c는 2이다.') : c === 3 ? console.log('c는 3이다.') : console.log('c는 1,2,3 중 하나는 아니다.')
