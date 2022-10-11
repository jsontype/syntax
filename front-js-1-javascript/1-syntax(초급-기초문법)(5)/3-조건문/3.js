// runtime : 구동 환경. 브라우져(js), 터미널(nodejs)

// 조건문
let a = 3
let b = 3

if (a < b) {
    console.log('b가 더 큼')
} else if (a === b) {
    console.log('b가 a와 동일함');
} else {
    console.log('b가 더 크지 않음')
}

// 두개 이상의 조건 : and (&&), or (||)
if (a > 0 && b < 2 && b >0) {
    console.log('나올까요?')
}

// 문제
// apple = 5
// people = 4
// orange = 3
// 오렌지가 사람보다 많은 경우, '오렌지로 충분하다'
// 오렌지가 충분하지 않은 경우, 사과가 사람보다 많으면 '사과로 충분하다'
// 사과도 충분하지 않은 경우, '둘다 불충분하다'
let orange = 4
let people = 4
let apple = 4

if (orange >= people) {
    console.log('오렌지로 충분하다')
} else if (apple >= people) {
    console.log('사과로 충분하다')
} else {
    console.log('둘다 불충분하다')
}

// 삼항연산자 Ternery Operator 문법 (조건 ? true일때의 변수 : false일때의 변수)
let num1 = 5
const result = num1 < 1 ? `0${num1}` : num1
console.log(result)

// 삼항연산자는 다음처럼 백틱과 함께 써도 된다.
console.log(`${num1 < 10 ? `0${num1}` : num1}`)

// 스위치문
const device = 'iphone'
switch (device) {
  case 'iphone':
    console.log('아이폰!')
    break
  case 'ipad':
    console.log('아이패드!')
    break
  case 'galaxy note':
    console.log('갤럭시 노트!')
    break
  default:
    console.log('모르겠네요..')
}

// 토글 (Toggle)
const switch1 = false // 초기값을 off 상태라고 한다면
let toggle = !switch1 // 이러면 실행할 때마다 on, off를 반복하는 토글이 된다. 이를 버튼에 넣어서 쓰게 되면 그게 토글링이다.
console.log('토글 1회 실행 값: ', toggle)
toggle = !switch1
console.log('토글 2회 실행 값: ', toggle)
