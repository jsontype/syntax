// stack은 순서대로 실행된다.

// 선언 방식에 따른 분류 : let(변수), const(상수)
let a = 1
let b = 2
const c = 3
a = 3
b = 3
console.log("a: ", a)
console.log("b: ", b)
console.log("c: ", c)

// 데이터타입에 따른 분류 : string(문자열), number(수), boolean(불린) / obejct(객체), array(배열)
// string(문자열), number(수), boolean(불린)은 "값 참조"이다.
let d = "1"
let e = 2
let f = true
let g = Boolean(a > 2) // true
let h = Boolean(a < e) // false
// obejct(객체), array(배열)는 "주소 참조"이다. 상수로 선언해야한다.
// obejct(객체)는 { key: value, key: value, ... } 의 집합이다.
const user = {
  id: "abcd123",
  pw: "1234qwer!",
  del_flag: true,
  age: 32,
  name: "Jung",
}
// array(배열)은 [ index: value ] 의 집합이다.
const numberList = [1, 2, 3, 4, 6, 8, 9]
console.log(numberList[2]) // index는 0부터 시작. offset.
const userList = ["Jung", "Hwang", "Kim"]
console.log(userList.join(" // ")) // 객체와 배열은, 각각의 어울리는 프로토타입 함수를 많이 보유하고 있다.
console.log(userList.length) // 3
console.log(numberList.length) // 7
// numberList, userList 각 배열의 "항상 마지막 값"을 꺼내려면 console.log()안에 무엇을 집어넣어야 할까?
console.log(numberList[numberList.length - 1])
console.log(userList[userList.length - 1])
