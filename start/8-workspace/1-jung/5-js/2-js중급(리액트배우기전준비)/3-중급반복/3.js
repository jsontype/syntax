// 일반 반복문
let arr = [1, 3, 3, 4, 4, 5]

// for (let i = 0; i < arr.length; i++) {
//   console.log('arr[i] ===>', arr[i]) // 값
// }



// 중급 반복문 (배열고차함수) : forEach (리턴이 없는 반복문)
// arr.forEach(item => console.log(item))

// 중급 반복문 (배열고차함수) : map (동일한 길이의 배열을 리턴하는 반복문)
// const result = arr.map(item => item + 1)
// console.log(result)

// 중급 반복문 (배열고차함수) : filter (동일하지 않은 길이의 "걸러진 배열"을 리턴하는 반복문)
const result = arr.filter(item => item > 3) // 리턴부분에 "조건"을 걸어야한다.
console.log(result)
