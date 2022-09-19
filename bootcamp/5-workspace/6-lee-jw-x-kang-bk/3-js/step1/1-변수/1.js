// 변수 : 변하는 수

// 변수 선언 : let(값 참조를 하는 변수 선언에 사용), const(상수 혹은 "주소 참조를 하는 배열, 객체"의 선언에 사용)
let a = 1 // 숫자타입 : 계산 가능
let b = '1' // 문자열타입 : 계산 불가능
let c = (a === 1) // 불린(Boolean)타입 : true, false

a = a + 1
a = a * 20
a = a / 5
a = a - 4
b = b + 1
console.log('a: ', a) // 4
console.log('b: ', b) // 11 ?





// 배열(array)타입 : 하나의 변수에 여러개의 값을 넣음, 인덱스를 통해서 구분
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






// 객체(object)타입 : 하나의 변수에 여러개의 값을 넣음, 키를 통해서 구분
const movie1 = { title: 'Titanic', image: 'test.jpg' }
const user1 = { id: 'user1', name: 'Yang', pw: 'sdafkjdsafl', no: 115 }

console.log('movie1.title: ', movie1.title)
console.log('user1.name: ', user1.name)

// console의 정체는 객체이다. 그리고 자바스크립트 자체도 거대한 하나의 객체이다.
console.log('test')
console.error('test')

// 객체는 '연관성이 있는 일련의' 변수, 함수로 이루어져 있다.
console.log(Math.PI) // Math라고 하는 JS 내장 객체의 변수중 하나.
console.log(Math.floor(3.14)) // Math라고 하는 내장 객체의 함수중 하나.








// JSON 타입
const user2 = { id: 'user2', name: 'Hong', pw: 'sdafkjdsafl', no: 116 }
const user3 = { id: 'user3', name: 'Park', pw: 'sdafsdafkjdsafl', no: 117 }
const user4 = { id: 'user4', name: 'Kim', pw: 'sdafkjdsasdaffl', no: 118 }
const user5 = { id: 'user5', name: 'Shin', pw: 'asdfsdafkjdsafl', no: 119 }

const userList = [user1, user2, user3, user4, user5]

for (let i = 0; i < userList.length; i++) {
    console.log(userList[i].id)
}
