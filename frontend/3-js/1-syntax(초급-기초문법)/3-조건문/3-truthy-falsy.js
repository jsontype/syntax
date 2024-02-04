/*
  1. Truthy (참으로 간주되는 값)
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
  console.log("truthy");
}

if ("Hello") {
  // 이 부분은 실행된다. 'Hello'는 truthy한 문자열이다.
  console.log("truthy");
}

if ({}) {
  // 이 부분은 실행된다. 빈 객체는 truthy이다.
  console.log("truthy");
}

/*
  1. Falsy (거짓으로 간주되는 값)
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
  console.log("falsy");
}

if ("") {
  // 이 부분은 실행되지 않는다. 빈 문자열은 falsy이다.
  console.log("falsy");
}

if (null) {
  // 이 부분은 실행되지 않는다. null은 falsy이다.
  console.log("falsy");
}
