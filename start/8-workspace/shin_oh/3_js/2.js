// 변수 : 변하는 수
let a = 3
console.log(a)

// 변수 선언
// let : 변수를 선언할 때 사용하는 키워드
// const : 상수를 선언할 때 사용하는 키워드
// stack : 자바스크립트는 stack이라는 메모리 공간에 변수를 저장한다.
let b = 1
b = 2
b = 3
b = 4
console.log(b)
const c = 1
console.log(c)

// 변수 종류 : 데이터타입의 종류

// 값 참조 변수

// 1. 넘버 (number : JS는 integer, float 둘을 구분하지 않고 number로 표현한다.)
// 넘버타입은 연산이 가능하다.
let num1 = 1
console.log(num1 + 3)
let num2 = 1.1
console.log(num2 + 4.4)
let num3 = 4
console.log("4칙연산 결과 >>>")
console.log(num1 + num3) // 5 
console.log(num1 - num3) // -3
console.log(num1 * num3) // 4
console.log(num1 / num3) // 0.25

// 2. 문자열 (string : 문자열은 "" 또는 ''로 감싸야 한다.)
// 문자열타입은 연산이 불가능하다.
let str1 = "Hello World!"
let str2 = "3"
console.log("문자열타입 >>>")
console.log(str1)
console.log(str1 / 3) // NaN : Not a Number
console.log(str2 + 1) // 31

// 3. 불리언 (boolean : true, false 중 하나. 논리연산자. 조건문에서 사용된다.)
let bool1 = true
let bool2 = false
let bool3 = num1 < num2 // true
let bool4 = num1 >= num2 // false
console.log("불리언타입 >>>")
console.log(bool3)
console.log(bool4)

// 4. 널 (null : 값이 없음을 의미한다. 화장실에 휴지가 심지만 있는 상태. 빈 휴지.)
let null1 = null
console.log(null1)

// 5. undefined (undefined : 값이 정의되지 않음을 의미한다. 화장실에 휴지 자체가 없는 상태. 휴지가 없다.)
let undefined1 = undefined
console.log(undefined1)



// 주소 참조 변수

// 1. 객체
// 2. 배열
// 3. 함수
