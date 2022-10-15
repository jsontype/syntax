// 배열 고차함수
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 리턴이 없는 반복문
a.forEach(item => console.log(item))

// 기존 배열과 동일한 길이의 배열을 리턴
const result = a.map(item => item + 1)
console.log(result)

// 필터링된 배열을 리턴
const result2 = a.filter(item => item > 4)
console.log(result2)
