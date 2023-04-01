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
    Map : 순서가 있는 배열 // 해쉬맵, 해쉬테이블 (나중에 배울 것)
    Set : 집합 Set {1, 2, 3} // 중복제거 집합 (나중에 배울 것)
  
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
console.log('i: ', i)

// String 타입 : 연산 불가능
console.log('Yang') // Char
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
let boo1 = (num1 < num2)
let boo2 = (num1 === num2)
let boo3 = Boolean(b)
let boo4 = Boolean(c)
console.log('boo1:', boo1)
console.log('boo2:', boo2)
console.log('boo3:', boo3)
console.log('boo4:', boo4)

// 배열(array)타입 : 하나의 변수에 여러개의 값을 넣음, 그것을 인덱스를 통해 구분, 인덱스와 밸류를 매칭, 순서 있음
const arr = [1, 2, 5] 
console.log('arr: ', arr)
console.log('arr[0]: ', arr[0]) // 인덱스는 0부터 시작
console.log('arr.length: ', arr.length) // 배열의 길이
console.log('arr의 마지막값: ', arr[arr.length - 1]) // 배열의 마지막 값을 꺼내는 노하우
// 배열의 마지막에 추가
arr.push(6)
arr.push(7)
// 배열의 처음에 추가
arr.unshift(-1)
arr.unshift(-2)
// 배열의 마지막을 삭제
arr.pop()
// 배열의 처음을 삭제
arr.shift()
// 배열의 중간을 삭제
arr.splice(2, 1) // 인덱스, 삭제할 수
console.log(arr)

// 객체(object)타입 : 하나의 변수에 여러개의 값을 넣음, 그것을 키를 통해 구분, 키와 밸류를 매칭, 배열과 달리 순서 없음
const movie1 = { title: 'Titanic', image: 'a.jpg' }
const user1 = { id: 'user1', name: 'Yang', pw: 'sdafkjdsafl', no: 115 }
console.log('movie1.title: ', movie1.title)
console.log('user1.name: ', user1.name)
// console의 정체는 객체이다. 그리고 자바스크립트 자체도 거대한 하나의 객체이다.
console.log('a')
console.error('a')
// 객체는 '연관성이 있는 일련의' 변수, 함수로 이루어져 있다.
console.log(Math.PI) // Math라고 하는 JS 내장 객체의 변수중 하나.
console.log(Math.floor(3.14)) // Math라고 하는 내장 객체의 함수중 하나.

// JSON 타입 : API로부터 DB데이터를 취득하기 위한 JS Object Notation 데이터타입
const user2 = { id: 'user2', name: 'Hong', pw: 'sdafkjdsafl', no: 116 }
const user3 = { id: 'user3', name: 'Park', pw: 'sdafsdafkjdsafl', no: 117 }
const user4 = { id: 'user4', name: 'Kim', pw: 'sdafkjdsasdaffl', no: 118 }
const user5 = { id: 'user5', name: 'Shin', pw: 'asdfsdafkjdsafl', no: 119 }
const userList = [user1, user2, user3, user4, user5]
for (let i = 0; i < userList.length; i++) {
    console.log(userList[i].id)
}



/* 케이스 */

// 변수명은 camel case로 지정한다.
const camelCaseHere = null



/* 캐스팅 */

// 암묵적 캐스팅 : String > Number > Boolean 순
const cast = 'Str' + 1 + true
console.log(cast) // 'Str1true'라는 String이 됨

// 직접 캐스팅 : 데이터타입을 변환 Number(), String(), Boolean(), ....
let value = '150'
let cast1 = Number(value)
let cast2 = String(value)
let cast3 = Boolean(value)
console.log(`${cast1}, ${cast2}, ${cast3}`)
