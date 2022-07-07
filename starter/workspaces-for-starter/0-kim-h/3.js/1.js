// javascript : 프론트엔드 언어 - 프로그래밍, 알고리즘 로직 짜기
// html, css : 마크업 언어 - 단순 디자인

// 변수 : 변하는 수
// 변수 선언 : let(변수), const(상수, 변하지 않는 수)
// 변수 데이터타입 : String(연산x), Number(연산o), Boolean(논리 true, false)
let a = 1 + 1 // 2
let b = 'Hello JS' + 1 // Hello JS1
// console.log(a)
// console.log(b)
const car = "benz" 
// car = "audi" // 상수변수를 바꿨으므로 에러가 난다.

a = 1
b = 2
let c = a > b
c = a < b // true
c = b === 2 // true
c = a <= b // true
c = a > b // false
c = a === 2 // false
c = a >= b // false
// && Ampersand : and, 교집합
c = (a < b) && (b === 2) // true && true = true
c = (a < b) && (a === 2) // true && false = false
// || Vertical Bar : or, 합집합
c = (a < b) || (b === 2) // true || true = true
c = (a < b) || (a === 2) // true || false = true
console.log(c)

// 캐스팅
let d = 1
let e = String(d)
console.log(typeof e) // "string"
e = Number(e)
console.log(typeof e) // "number"
e = Boolean(e)
console.log(typeof e) // "boolean"
console.log(e) // true
// 암묵적 캐스팅 : String > Number > Boolean
console.log(typeof ('Hello' + 1))

// 불린
Boolean(0) // false
Boolean('') // false
Boolean('0') // true

// 배열: array. index와 value로 이뤄져 있다. 순서가 있다.
// 배열은 주소다. 주소참조하는 변수는 const로 선언하는 것이 원칙
const arr = [1, 2, 3, 4, 5, 6, 7, 9999]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr.length) // 배열의 길이를 구함
console.log(arr[arr.length - 1]) // 배열의 마지막 값을 꺼냄

// 배열의 추가
arr.push(22222)
arr.push(2222)
arr.push(111)
console.log(arr)

arr.unshift(5)
arr.unshift(55)
arr.unshift(555)
arr.unshift(5555)
console.log(arr)

// 배열의 삭제
arr.pop()
arr.pop()
arr.pop()
arr.pop()
arr.pop()
console.log(arr)

arr.splice(0, 5) // (시작인덱스, 삭제할 값의 개수)
console.log(arr)

// 객체 Object. 주소참조. 키와 밸류로 이뤄졌다. 순서가 없다.
const obj = { id: 'ydhvocal', pw: 'lasd;kdfjksak', name: 'Yang' }
console.log(obj.id)
console.log(obj.pw)
