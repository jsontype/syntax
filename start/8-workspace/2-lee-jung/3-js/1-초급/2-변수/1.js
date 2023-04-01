/*
  변수의 데이터타입
    Number : 실수(정수, 소수를 포함)
    String : 문자열('hello')
    Null : 변수안에 값이 없음 // "휴지에 심지만 있다"
    Undefined : 변수에 값을 지정한 적이 없음 // "휴지에 심지도 없다"
    Boolean : 논리(true/false)
    Object : 객체 { 'key1':value1, 'key2':value2, ... } // 콘솔은 객체로 이루어져있다.
    Array : 배열 [1, 2, 3, ...] // List라고도 부름
    Function : 함수
  
  선언 방식
    Number, String, Boolean (값 참조형) : let으로 선언
    Array, Object, Function (주소 참조형, 또는 상수) : const로 선언
*/

// Number 타입
let a = 1 // 연산 가능
a = a + 5
a = a - 2
a = a * a
a = a / 2
a = a ** 2 // n승
a = a % 3 // n으로 나눈 나머지
// 숫자 : +=
// 숫자 : ++
let i = 0
i++ // = ( i = i + 1 )
i++
i++
i++
i++
console.log("i: ", i)

// String 타입 : 연산 불가능
console.log("Yang") // String
console.log(`Yang`) // Backtick : 기호 `를 백틱이라 한다. 백틱을 사용하면 줄바꿈도 인식해주고, ${}를 사용해서 문자열과 변수를 적절히 같이 사용할 수 있다.
let username = "Yang"
let job = "Dev"
let age = 30

// 백틱은 다음과 같이 사용하며, 이런 형태의 문자열을 "템플릿 리터럴"이라고 한다.
console.log(`
  저는 ${username}입니다. 
  직업은 ${job}입니다. 
  올해로 ${age}살이 됩니다.
`)

// Null 타입 : 변수안에 값이 없음 // "휴지에 심지만 있다"
let b = null // null

// Undefined 타입 : 변수에 값을 지정한 적이 없음 // "휴지에 심지도 없다"
let c // undefined

// Boolean 타입 : 조건문에 사용. Truthy, Falty의 개념(undefined, null은 Falty)도 알아두자.
let num1 = 1
let num2 = 2
let boo1 = num1 < num2
let boo2 = num1 === num2
let boo3 = Boolean(b)
let boo4 = Boolean(c)
console.log("boo1:", boo1)
console.log("boo2:", boo2)
console.log("boo3:", boo3)
console.log("boo4:", boo4)
