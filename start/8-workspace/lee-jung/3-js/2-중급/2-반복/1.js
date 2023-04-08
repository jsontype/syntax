// 배열 안의 프로토타입 내장함수 중에서도, 배열 고차함수가 있다.
// 예를 들면, forEach, map, filter
const a = [1, 2, 3, 4, 5, 6, 7]

// 리턴값이 없는 forEach : 배열의 값을 하나하나 꺼내서 일괄적으로 동일한 처리를 한다.
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i] + 1)
// }
a.forEach((item) => console.log(item + 1))

// 리턴값이 있는 map : 동일한 처리를 한(item + 1), 동일한 길이의(b.length === a.length) 배열을 리턴한다.
// const b = () => {
//   const result = []
//   for (let i = 0; i < a.length; i++) {
//     result.push(a[i])
//   }
//   return result
// }
// console.log(b())
const b = a.map((item) => item + 1)
console.log(b)

// 리턴값이 있는 filter : 리턴 부분에 조건을 걸어서 필터링된 배열을 리턴한다.
const c = a.filter((item) => item > 3)
console.log(c)
