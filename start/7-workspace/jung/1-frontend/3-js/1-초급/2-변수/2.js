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
// console의 정체는 객체이다. 그리고 자바스크립트 자체도 거대한 하나의 객체이다.
console.log("a")
console.error("a")
// 객체는 '연관성이 있는 일련의' 변수, 함수로 이루어져 있다.
console.log(Math.PI) // Math라고 하는 JS 내장 객체의 변수중 하나.
console.log(Math.floor(3.14)) // Math라고 하는 내장 객체의 함수중 하나.

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
