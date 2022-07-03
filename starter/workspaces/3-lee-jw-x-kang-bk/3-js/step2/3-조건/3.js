// 중급자용 조건문
// 1. 삼항연산자 조건문 : else 가 있을 때
let apple = 3; let orange = 5
let result1 = apple >= orange ? '사과가 같거나 더 많다' : '오렌지가 더 많다'
// else if 많을 때 해결책1
let a = 3
let result2 = a === 0 ? 'a는 0이다.' : (a === 1 ? 'a는 1이다.' : (a === 2 ? 'a는 2이다.' : (a === 3 ? 'a는 3이다.' : 'a는 4 이상이다.')))
console.log(result2)

// 2. 앰퍼센드(Ampersand) 조건문 : else 가 없을 때 (왼쪽이 true일 때만 우측 데이터를 표시)
let sth = 1
let result3 = sth < 3 && "잘가"
console.log(result3) // "잘가"를 출력

// 3. 버티컬바(Vertical Bar) 조건문 : 왼쪽이 (존재하면 왼쪽을 표시하고) 존재하지 않으면 "대신" 우측 데이터를 표시하고 싶을 때 사용
let nth = 0 // Number 0은 false이다.
let result4 = nth || "안녕"
console.log(result4) // "안녕"을 출력

// else if 많을 때 해결책2 : switch문
const expr = 'Papayas'
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.')
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.59 a pound.')
    break;
  case 'Papayas':
    console.log('papayas are $2.79 a pound.')
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`)
}
