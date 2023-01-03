// 배열 고차함수
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 리턴이 없는 반복문
arr.forEach(item => console.log(item))

// 기존 배열과 동일한 길이의 배열을 리턴
const result = arr.map(item => item + 1)
console.log(result)

// 필터링된 배열을 리턴
const result2 = arr.filter(item => item > 4)
console.log(result2)

// reduce문 용도 : 배열값들을 이용해 수학적 계산이 필요한 경우 (예 : 각 과목 점수들의 평균을 계산)
const result3 = arr.reduce((acc, item) => { return acc + item }) // sum
console.log(result3)
const result4 = arr.reduce(function (acc, item) { return acc + item / arr.length }) // average
console.log(result4)
