// 데이터 타입 : Number, String, Boolean, Array(배열), Object(객체)

// 값참조 변수 : 수, 문자열, 논리
let a = 2 ** 20 // 2의 2승
let b = String(3 % 2) // 2로 나눈 나머지 // 캐스팅 : 1 -> "1"
let c = "hello"
let d = true // boolean
let e = false
let f = Boolean(a > 1000000) // true
Boolean(1) // true
Boolean(0) // false
Boolean('a') // true
Boolean('') // false
Boolean([]) // true 주소는 있으므로
Boolean({}) // true 주소는 있으므로
console.log(f)



// 주소참조 변수 (const) : 배열, 객체

// 배열 : index 인덱스 / value 밸류 , 순서 O
const g = [1, 2, 3, 4] // "인천시 중구 용현동 123-1"에는 "4가족"이 산다. 
g.push(5) // 배열 뒤에 값을 추가 : 가족 한명이 추가되었다.
g.unshift(0) // 배열 앞에 값을 추가
g.pop() // 마지막 값을 삭제
g.splice(2, 2) // (배열에서 빼기를 시작할 지점, 뺄 개수)
console.log(g)
console.log(g.length) // 길이
console.log(g[1]) // 인덱스 0부터 시작
console.log(g[g.length - 1]) // 항상 마지막 인덱스의 값을 꺼내고 싶을 때

// 객체 : 키 / 밸류 , 순서 X
const h = { id: 'sadlkfjh', pw: 'sdfkajkl;afs', name: 'd.yang' }
h.age = 48
console.log(h)
console.log(h.id)
console.log(h.age)

const i = []
console.log(Boolean(i)) // true
console.log(Boolean({})) // true

