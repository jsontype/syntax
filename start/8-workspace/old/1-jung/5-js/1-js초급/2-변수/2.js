// runtime : 실행환경
// browser runtime : html 파일을 브라우져로 열어서, js를 실행하는 환경
// node runtime : node 커맨드를 사용해서 js를 실행하는 환경

console.log("node 런타임에서 실행한 콘솔로그")

// 변수 : 변하는 수
// 변수의 선언 : let(변수), const(상수)

// 변수의 타입
// number
let a = 1
a = 2
a = 2 + 3
console.log(a) // a = 5
let b = "5"
console.log(b) // b = 5
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
const c = 3
const aa = 1 // number는 연산할 수 있음
const bb = "hello"
console.log(aa + bb) // string은 연산할 수 없음
const cc = a === b // true or false (> < >= <= === 등으로 논리연산을 하면 불린값이 나온다)
console.log(cc)

// string(문자열)
const str1 = 'hello' // char
const str2 = "hello" // string
const str3 = `hello` // backtick
const str4 = `hello ${aa}` // 템플릿 리터럴 문법 : backtick안에, ${변수명}을 넣는 것
console.log(str4)

// boolean(참/거짓)
const bool1 = true // 참
const bool2 = false // 거짓
const bool3 = a === b // true
const bool4 = a > b // false

// null 타입 : 값이 없음 (화장지가 심지만 있는 것)
let null1 = null
console.log(null1)

// undefined 타입 : 값 자체를 아예 넣은 적이 없음 (화장지 자체가 없음)
let undefined1
console.log(undefined1)

// 직접적 캐스팅 : String(), Number(), Boolean()
let string1 = '1324'
console.log(typeof Number(string1))
let result1 = Number(string1) / 20 // 암묵적 캐스팅
console.log(result1)
const bool5 = Boolean(undefined1) // truthy falsy 개념 : 존재하면 true, 존재하지 않으면 false
console.log(bool5)

// 배열 array : 인덱스와 밸류로 이루어진 변수 집합
let arr1 = [1, 2, 3, 4, 5, 'sdaf'] // 인덱스 0부터 시작 , 밸류는 인덱스에 해당하는 값
console.log(arr1)
console.log(arr1[0])
console.log(arr1[5])
console.log(arr1.length) // 6
console.log(arr1.length - 1) // 5
console.log(arr1[arr1.length - 1]) // 배열의 마지막 값

// 객체 obj : 키와 밸류로 이루어진 변수 집합
let obj1 = { id: 'hello', pw: 'world' }
console.log(obj1)
console.log(obj1.id)
console.log(obj1.pw)
console.log(obj1['id'])
console.log(obj1['pw'])

// JSON 데이터타입
let user1 = { id: 'hello', pw: 'world' }
let user2 = { id: 'tokyo123', pw: 'sdaf' }
let user3 = { id: 'kita', pw: 'ssaadf' }
let user4 = { id: 'senju', pw: 'sadfkjklzxcv' }
let users = [user1, user2, user3, user4]
console.log(users[2].pw) // ssaadf

// 배열의 내장함수 : push, pop, shift, splice, unshift
users.pop() // 뒤에서 하나 빼기 
console.log(users)
users.shift() // 앞에서 하나 빼기
console.log(users)
users.push(user1, user4) // 뒤에 추가하기
console.log(users)
users.splice(1, 2) // 중간 삭제하기 : 인덱스번호, 인덱스번호부터 삭제할 개수
console.log(users)
users.unshift(user1) // 앞에 추가하기
console.log(users)
