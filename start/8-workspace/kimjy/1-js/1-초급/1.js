/**
 1. JavaScript란?
    웹 브라우저에서 사용하기 위하여 만들어진 프로그래밍 언어이다. 
    주로 웹 브라우저 상에서 UI를 동적으로 보여주기 위하여 사용을 해왔다. 
    기존에는 브라우저에서만 사용해왔던 언어인데, 
    이제는 단순히 웹페이지에서만 국한되지 않고 Node.js 런타임을 통하여 서버 쪽에서도 사용을 할 수 있게 되었다.
    주로 프론트엔지니어가 일하는 실무는 대규모 프로젝트에서의 웹앱이고, 
    이는 React, Vue라는 프레임워크를 이용해서 만들어지며,
    추가적으로, NW.js, Electron등의 프레임워크를 사용하여 데스크탑 앱을 만들 수도 있고, 
    React-native, NativeScript 등의 프레임워크를 사용하여 모바일 앱도 만들 수 있다.
    그리고 하드웨어에서도 Node.js를 통하여 JavaScript를 사용 할 수 있기 때문에 IoT 진영에서도 사용 될 수도 있다.
    또, JavaScript는 나날히 발전해 가고 있고, 매년마다 새로운 문법들도 나오고 있다.
*/

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
a = a ** 3 // n승
a = a % 3 // n으로 나눈 나머지
// 숫자 : +=
// 숫자 : ++
let i = 0
i++ // = ( i = i + 1 )
console.log("i: ", i)

// String 타입 : 연산 불가능
console.log("Yang") // Char
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

// 배열(array)타입 : 하나의 변수에 여러개의 값을 넣음, 그것을 인덱스를 통해 구분, 인덱스와 밸류를 매칭, 순서 있음
const arr = [1, 2, 5]
console.log("arr: ", arr)
console.log("arr[0]: ", arr[0]) // 인덱스는 0부터 시작
console.log("arr.length: ", arr.length) // 배열의 길이
console.log("arr의 마지막값: ", arr[arr.length - 1]) // 배열의 마지막 값을 꺼내는 노하우
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
const movie1 = { title: "Titanic", image: "a.jpg" }
const user1 = { id: "user1", name: "Yang", pw: "sdafkjdsafl", no: 115 }
console.log("movie1.title: ", movie1.title)
console.log("user1.name: ", user1.name)
console.log("movie1['title']: ", movie1["title"])
// console의 정체는 객체이다. 그리고 자바스크립트 자체도 거대한 하나의 객체이다.
console.log("a")
console.error("a")
// 객체는 '연관성이 있는 일련의' 변수, 함수로 이루어져 있다.
console.log(Math.PI) // Math라고 하는 JS 내장 객체의 변수중 하나.
console.log(Math.floor(3.14)) // Math라고 하는 내장 객체의 함수중 하나.
// console은 객체다.
console.log(console)

// JSON
// const userList = [{ id: "user2", name: "Hong", pw: "sdafkjdsafl", no: 116 }, {...}]

/* 케이스 */
// 변수명은 camel case로 지정한다.
const camelCaseHere = null

/* 캐스팅 */
// 암묵적 캐스팅 : String > Number > Boolean 순
const cast = "Str" + 1 + true
console.log(cast) // 'Str1true'라는 String이 됨

// 직접 캐스팅 : 데이터타입을 변환 Number(), String(), Boolean(), ....
let value = "150"
let cast1 = Number(value)
let cast2 = String(value)
let cast3 = Boolean(value)
console.log(`${cast1}, ${cast2}, ${cast3}`)

// 자바스크립트는 타입에 있어서 융통성이 있는 언어이기 때문에, 무결성 측면에서 위험한 언어.
// 실무에서는 타입스크립트를 사용한다.

let flex1 = 1
let flex2 = "1"
if (flex1 == flex2) {
  console.log("flex1 == flex2: ", true)
}

// runtime : 구동 환경. 브라우져(js), 터미널(node.js)

// 기본 조건문
// let a = 3
// let b = 3
// if (a < b) {
//   console.log("b가 더 큼")
// } else if (a === b) {
//   console.log("b가 a와 동일함")
// } else {
//   console.log("b가 더 크지 않음")
// }

// and (&&) : 두개 이상의 조건이 충족되어야 참이 되는 논리연산자
// if (a > 0 && b < 2 && b > 0) {
//   console.log("나올까요?")
// }
// and는 if문 대신으로도 사용 가능함
// a > 0 && console.time("a > 0이 참이면 실행됨")

// or (||) : 둘 중 하나만 참이어도 참이 되는 논리연산자
// if (a > 0 || b < 2 || b > 0) {
//   console.log("나올까요?")
// }
// or는 변수가 없을 때 변수의 대체값으로도 사용함
// console.log(aaa || a) // aaa가 없으면 a를 출력함

// ! 논리연산자 : not을 나타냄
// if (!a) {
//   console.log("a가 없음")
// }

// * Truthy와 Falsy 개념
// 자바스크립트에서는 null, undefined, 0, NaN, 빈 문자열(""), 그리고 false는 "거짓"으로 간주되며,
// 그 외의 모든 값은 "참"으로 간주된다. []나 {}도 신주쿠구 1-1번지와 같은 주소값이 존재하므로 참으로 간주된다.

// !! 논리연산자 : not을 두번 사용하면 true로 변환됨. 그럼 그냥 !!를 안 써도 되냐 할텐데,
// 이 연산자는 어떤 값의 "진리값(truthiness)"을 불리언 값(true 또는 false)으로 변환하는 데 사용된다.
// !! 연산자를 사용하는 주된 이유는 어떤 값이 명시적으로 true 또는 false인지 확인하고 싶을 때입니다.
// 예를 들어, 어떤 옵션이 있는지 없는지를 불리언 값으로 표현하고 싶을 때 유용하다.
// !! 연산자는 주로 이는 조건문, 불리언 값을 요구하는 함수 인자, 또는 조건적 렌더링 등에서 유용하게 사용될 수 있다.
// const options = {}
// // !!를 사용하여 options 객체가 비어있지 않은지 확인 (항상 true 반환, 객체 자체가 'truthy'이기 때문)
// if (!!options) {
//   console.log("options는 'truthy'입니다.")
// } else {
//   console.log("options는 'falsy'입니다.")
// }

// ?? 논리연산자 :(Nullish Coalescing) : ES2020에서 도입되었다. 어떤 값을 명시적으로 불리언 값으로 변환할 때 사용된다.
// 이 연산자는 왼쪽 피연산자가 null이나 undefined일 경우에만 오른쪽 피연산자의 값을 반환하고, 그렇지 않으면 왼쪽 피연산자의 값을 반환한다.
// || 연산자와 비슷하지만, 0, NaN, 빈 문자열과 같이 "falsy"하지만 유효한 값들을 "falsy"로 간주하지 않는다는 차이가 있다.
const output = input ?? "기본값"
console.log(output) // 빈 문자열인 ""를 출력 ("", 이 경우 빈 문자열은 유효한 값으로 간주)

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
  console.log("오렌지로 충분하다")
} else if (apple >= people) {
  console.log("사과로 충분하다")
} else {
  console.log("둘다 불충분하다")
}

// // 삼항연산자 Ternery Operator 문법 (조건 ? true일때의 변수 : false일때의 변수)
// let num1 = 5
const result = num1 < 1 ? `0${num1}` : num1
console.log(result)

// // 삼항연산자는 다음처럼 백틱과 함께 써도 된다.
console.log(`${num1 < 10 ? `0${num1}` : num1}`)

// // 스위치문
const device = "iphone"
switch (device) {
  case "iphone":
    console.log("아이폰!")
    break
  case "ipad":
    console.log("아이패드!")
    break
  case "galaxy note":
    console.log("갤럭시 노트!")
    break
  default:
    console.log("모르겠네요..")
}

// // 토글 (Toggle)
const switch1 = false // 초기값을 off 상태라고 한다면
let toggle = !switch1 // 이러면 실행할 때마다 on, off를 반복하는 토글이 된다. 이를 버튼에 넣어서 쓰게 되면 그게 토글링이다.
console.log("토글 1회 실행 값: ", toggle)
toggle = !switch1
console.log("토글 2회 실행 값: ", toggle)

// Truthy와 Falsy 개념
/*
  Truthy (참으로 간주되는 값)
    숫자: 0을 제외한 모든 숫자
    문자열: 빈 문자열('')을 제외한 모든 문자열
    불리언: true
    객체: 빈 객체({}) 또는 속성을 가진 객체
    배열: 빈 배열([]) 또는 요소가 있는 배열
    함수: 비어있지 않은 함수
    그 외: null, undefined, NaN을 제외한 모든 값
*/

if (true) {
  // 이 부분은 실행된다. true는 truthy이다.
  console.log("truthy")
}

if ("Hello") {
  // 이 부분은 실행된다. 'Hello'는 truthy한 문자열이다.
  console.log("truthy")
}

if ({}) {
  // 이 부분은 실행된다. 빈 객체는 truthy이다.
  console.log("truthy")
}

/*
  Falsy (거짓으로 간주되는 값)
    숫자: 0
    문자열: 빈 문자열('')
    불리언: false
    객체: null 또는 undefined
    배열: 빈 배열([])
    함수: 비어있는 함수
    그 외: NaN을 포함한 다른 모든 값
*/

if (false) {
  // 이 부분은 실행되지 않는다. false는 falsy이다.
  console.log("falsy")
}

if ("") {
  // 이 부분은 실행되지 않는다. 빈 문자열은 falsy이다.
  console.log("falsy")
}

if (null) {
  // 이 부분은 실행되지 않는다. null은 falsy이다.
  console.log("falsy")
}

/*
  if else 문만 사용할 경우의 문제점 :
    이런 코드가 있다고 생각해보자. if가 세번 이상 중첩되면 가독성이 떨어질 것이다.
    콘솔로그가 한줄이 아니라 10~1000줄중 랜덤이라고 생각해보자. 실무처럼.
    그럼 저 if랑 else 찾기가 쉬울까?
    심지어 else if도 있다면 더더욱 찾기가 힘들어진다.
    즉 코드가 길고 복잡해질수록, 가독성이 문제점이 된다.
*/
function checkValues1(sth1, sth2, sth3) {
  if (sth1 >= 1) {
    console.log("sth1은 1 이상이다")
    if (sth2 >= 2) {
      // 이 줄이 길다고 가정해보자.
      console.log("sth2는 2 이상이다")
      if (sth3 >= 3) {
        // 이 줄이 길다고 가정해보자.
        console.log("sth3는 3 이상이다")
      } else {
        // 이 줄이 길다고 가정해보자.
        console.log("sth3는 3 미만이다")
      }
      // ... 이런 코딩이 반복될수록 코드의 가독성은 최악이 될 것이다.
    } else {
      console.log("sth2는 2 미만이다")
    }
  } else {
    console.log("sth1은 1 미만이다")
  }
}
// 함수 사용 예: sth1, sth2, sth3에 해당하는 값을 대입
checkValues1(3, 4, 5)

/*
  if return 문을 사용할 때의 장점 :
    이런 경우, 함수 내에서 조건에 따라 바로 return을 사용하면,
    코드의 명확성과 가독성을 높일 수 있으며,
    중첩을 줄이고 오류 가능성을 감소시키는 데 도움이 된다.
*/
function checkValues2(sth1, sth2, sth3) {
  if (sth1 < 1) return "sth1은 1 미만이다"
  // 이 줄이 길다고 가정해보자.
  console.log("sth1은 1 이상이다")
  if (sth2 < 2) {
    return "sth2는 2 미만이다"
  }
  // 이 줄이 길다고 가정해보자.
  console.log("sth2는 2 이상이다")
  if (sth3 < 3) {
    return "sth3는 3 미만이다"
  }
  // 이 줄이 길다고 가정해보자.
  console.log("sth3는 3 이상이다")
  // ... 이런 코딩은 반복되어도 코드의 가독성이 낮아지지 않는다.
  return "모든 조건을 만족"
}
// // 함수 사용 예: sth1, sth2, sth3을 적절한 값으로 대체
// console.log(checkValues2(3, 4, 5))

// 반복문
// let a = [1,2,3,4,5]

// for (let i = 0; i < a.length; i++) {
//     console.log(i, '번째 인덱스의 값: ', a[i])
// }

// for (let i = 0; i < a.length; i++) {
//     if (a[i] > 3) {
//         console.log(a[i])
//     }
// }

// break 와 continue : 반복문 안에서는 break와 continue를 통하여 반복문에서 벗어나거나, 그 다음 루프를 돌게끔 할 수 있다.
for (let i = 0; i < 10; i++) {
  // continue : 다음 루프를 실행
  // i가 2일땐 continue 를 하여 원래 console.log를 해야 하지만 그 코드를 수행하지 않고 바로 3으로 넘어간다.
  if (i === 2) continue
  console.log(i)
  // break : 반복문을 끝내기
  // i가 5일땐 break 를하여 반복문을 종료시킵니다.
  if (i === 5) break
}

// 배열을 위한 반복문 for...of : 나중에는 내장함수를 써서 별로 필요는 없지만, 알아만 두자.
const arr2 = [10, 20, 30, 40, 50]
for (let item of arr2) {
  console.log(item)
}

// 객체를 위한 반복문 for...in : 나중에는 내장함수를 써서 별로 필요는 없지만, 알아만 두자.
const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2,
}
for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`)
}
