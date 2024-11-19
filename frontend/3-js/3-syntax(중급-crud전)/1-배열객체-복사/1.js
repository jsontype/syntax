/*
    [배열객체 일반복사 - JSON.parse(JSON.stringify())]

    배열, 객체는 주소참조이므로 값 참조와 다르다. 그래서 복사를 하게 되면 같은 주소를 참조하게 된다.
    배열, 객체를 복사를 하게 되면, 이전 변수와 같은 주소를 참조해서, 원래 변수의 값이 바뀌면 복사된 변수의 값도 바뀐다.
    따라서 진정한 의미의 값 복사를 하려면 JSON.stringify()로 한번 문자열화 한 뒤, JSON.parse()를 다시 하면 새로운 주소로 값 복사가 된다.
*/

// 1. 값 참조
let a = 1
let b = a
a = 2
console.log(b) // 1

// 1. 배열의 복사 : 주소 참조
const arr1 = [1, 2, 3, 4, 5] // 원 주소
const arr2 = arr1 // 같은 주소를 집어넣음
const arr3 = JSON.parse(JSON.stringify(arr1)) // 값 복사해서 다른 주소로 복사
arr1[0] = 9999 // 원 주소 값 변경
console.log("arr2[0]: ", arr2[0]) // 9999 // 복사된 "같은" 주소이므로 여기도 값이 같이 변함
console.log("arr3[0]: ", arr3[0]) // 1 // 복사된 "다른" 주소이므로 원래 주소 값과는 상관 없음

// 1. 객체의 복사 : 주소 참조
const obj1 = { a: 1, b: 2 } // 원 주소
const obj2 = obj1 // 같은 주소를 집어넣음
const obj3 = JSON.parse(JSON.stringify(obj1)) // 값 복사해서 다른 주소로 복사
obj1.a = 9999 // 원 주소 값 변경
console.log("obj2.a: ", obj2.a) // 9999 // 복사된 "같은" 주소이므로 여기도 값이 같이 변함
console.log("obj3.a: ", obj3.a) // 1 // 복사된 "다른" 주소이므로 원래 주소 값과는 상관 없음
