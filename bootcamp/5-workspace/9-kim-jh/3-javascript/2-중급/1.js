// 값 참조
let a = 1
let b = a
a = 2
console.log(b) // 1

// 배열, 객체, 함수는 주소참조
let c = [1]
let d = c // shallow copy
c[0] = 2
console.log(d[0]) // 2

// 주소참조변수를 값만 복사하는 방법
let cc = [1]
let dd = JSON.parse(JSON.stringify(cc)) // deep copy
cc[0] = 2
console.log(dd[0])

// 객체 shallow copy
let obj1 = { id: 'yang', pw: 123 }
let obj2 = obj1
obj1.pw = 444
console.log(obj2.pw)

// 객체 deep copy
let obj3 = { id: 'yang', pw: 123 }
let obj4 = JSON.parse(JSON.stringify(obj3))
obj3.pw = 444
console.log(obj4.pw)
