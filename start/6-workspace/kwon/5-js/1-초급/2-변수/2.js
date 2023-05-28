/**
 * html : 명사 (선택자의 위계 : 태그 < 클래스 < 아이디)
 * css : 형용사 (스타일)
 *
 * (키가 큰) 영희
 * (초록색 옷을 입은) 철수
 *
 * js : 동사 (명령어)
 *
 * (키가 큰) 영희가 나에게 5m안으로 접근하면 나에게 알려줘.
 * 이메일 폼에 입력정보를 넣고 send를 누르면 내 이메일로 그 정보를 보내줘.
 */

// 변수 Variable : 변하는 수
let a = 2 // a라는 변수를 선언하고, 초기값으로 1을 넣어라.
let b = 3
a = 1 // a의 값을 2로 바꿔넣어라.
b = 2

// 상수 Constant : 변하지 않는 수
const c = 4

// 연산자 Operator
console.log(a + b) // 3
console.log(a - b) // -1
console.log(a * b) // 2
console.log(a / b) // 0.5
console.log(a ** b) // 승
console.log(a % b) // 정수로 나눈 나머지
let i = 0
i++ // = ( i = i + 1 )
i++
i++
i++
i++
console.log("i: ", i)

// 데이터타입
let num = 1 // number
let str = "안녕하세요" // string
let backtick = `${str} 코딩카페입니다` // backtick
let nullish = null // null : 화장지 심지만 있음
// let undefined // undefined : 화장지 자체가 없음
let bool = a === 1 // boolean 타입 : 조건문에 사용. a === 1, a >= 3 등으로 논리연산자를 값으로 넣으면 boolean 값이 된다. true or false 를 반환한다.

// 주의 : 배열과, 객체는 const로 선언한다. 이유는, 배열 객체는 값이 아닌, 메모리 주소를 참조하고 있기 때문.

// 배열(array) : 인덱스, 밸류
const arr = [1, 2, 3, 4, 5]
arr.push(6) // 뒤에 추가
arr.unshift(0) // 앞에 추가
console.log(arr)
console.log(arr.length) // 배열 길이
console.log(arr[0]) // 첫번째 인덱스의 값
console.log(arr[arr.length - 1]) // 마지막 인덱스의 값
arr.pop() // 뒤를 하나 삭제
arr.shift() // 앞을 하나 삭제
arr.splice(2, 1) // 중간을 삭제 : (인덱스, 삭제할 수)
console.log(arr)

// 객체(object) : 키, 밸류
const obj = { id: 'yang', pw: '134dsa' }
console.log(obj.id)
console.log(obj['id'])
console.log(obj)
console.log(console)
