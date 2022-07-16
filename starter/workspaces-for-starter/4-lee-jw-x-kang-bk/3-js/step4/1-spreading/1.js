// Spreading 문법

// 배열 선언
const arr = [1, 2, 3, 4, 5]

// 기존 배열 추가
// arr.push(6) // arr 바뀐게 없음

// 리액트용 배열 추가
const newArr = [ ...arr, 6 ] // arr 주소가 바뀜

console.log(newArr)






// 객체 선언
const obj = { id: 'yang', pw: 1234 }

// 기존 객체 추가
// obj.email = 'test@test.com'

// 리액트 객체 추가
const newObj = { ...obj, email: 'test@test.com' }

console.log(obj)
console.log(newObj)


// 불변성의 법칙 : "객체, 배열은 직접 바꾸지 않는다. 새 객체, 배열 주소를 만든 뒤 그것으로 갈아 끼운다" 는 법칙
