const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 고차함수 : 함수 안에 함수를 인자로 갖는 함수
// 배열고차함수 : forEach, map, filter

// 배열고차함수 forEach : return이 없는 for문 처리
a.forEach((item) => console.log(item + 1))
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i])
// }

// 배열고차함수 map : 동일한 길이의 배열을 return하는 for문 처리
const b = a.map((item) => item + 1) // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(b)

// 배열고차함수 filter : 조건에 맞는 배열을 return하는 for문 처리
const c = a.filter((item) => item % 2 === 0) // [2, 4, 6, 8]
console.log(c)
