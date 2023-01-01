// 이넘은 주로 드롭다운 등 "정해진 목록"의 타입을 지정할 때 활용한다.

// 숫자형 이넘
enum Shoes1 {
  Nike, // 별도 타입지정이 없으면 숫자형 이넘이 되고 첫번째 아이템의 초기값은 0이 된다.
  NewBalance = 10, // 아이템의 초기값을 정의할 수도 있다.
  Adidas, // 초기값을 지정하지 않은 경우, 아이템이 추가될수록 자동으로 1씩 증가한다.
}
const myShoes1 = Shoes1.Nike
console.log(myShoes1) // 0

// 문자형 이넘
enum Shoes2 {
  Nike = 'Nike', // 초기값에 맞춰서 이넘도 해당 타입 이넘으로 변경된다.
  NewBalance = 'NewBalance', 
  Adidas = 'Adidas'
}
const myShoes2 = Shoes2.Nike
console.log(myShoes2) // 'Nike'

// 이넘 활용사례
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestions(answer: Answer) {
  answer === Answer.Yes && console.log('정답입니다.')
  answer === Answer.No && console.log('오답입니다.')
}

askQuestions(Answer.Yes) // OK
// askQuestions('Yes') // Enum에 해당하지 않는 값을 거를 수 있다.
