// 값 참조
let a = 1 // a --> 1
let b = a // b --> 1
a = 2 // a --> 2
console.log(b) // 1

// 주소 참조
// 배열: 주소 복사
const arr1 = [1, 2, 3, 4, 5]
const arr2 = arr1 // 주소를 복사
arr1[0] = 999
console.log(arr2) // [999, 2, 3, 4, 5]
// 배열: 값 복사 (새로운 주소로 할당)
const stringifiedArr1 = JSON.stringify(arr1) // stringifiedArr1 --> "[1, 2, 3, 4, 5]"
const arr3 = JSON.parse(stringifiedArr1) // arr3 --> [1, 2, 3, 4, 5] (메모리 주소는 arr1과 다른 주소가 배정됨)
arr1[0] = 9999
console.log(arr3) // [999, 2, 3, 4, 5]. 9999로 안 바뀐다.
// 가장 좋은 방법 : spreading 문법
const arr4 = [...arr1]
arr1[0] = 9999999999
console.log(arr4)
// 객체: 주소 복사
const obj1 = { a: 1, b: 2 }
const obj2 = obj1
obj1.a = 3
console.log(obj2)
// 가장 좋은 방법 : spreading 문법
const obj3 = { ...obj1 }
obj1.a = 9
console.log(obj3.a)
