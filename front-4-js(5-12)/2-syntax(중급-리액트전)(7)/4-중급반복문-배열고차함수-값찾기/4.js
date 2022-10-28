/*
    [배열고차함수로 값 찾기]

    * 특히 Map은 잘 알아두면 이후 리액트할 때 많이 쓴다.
*/

// 데이터
let arr = [1, 3, 3, 4, 4, 5]

// for문 용도 : 막코딩
for (let i = 0; i < arr.length; i++) {
    console.log('arr[i] ===>', arr[i]) // 값
}

// 배열고차함수
// 고차함수(Higher-order Function)는 함수를 리턴하는 함수를 말한다.
// 배열고차함수에는 forEach, map, find, findIndex, filter, reduce, sort, some, every등이 있다.

// forEach문 용도 : For 쓰기 싫을 때 쓴다. (리턴 없는 경우만 찾아서)
// arr.forEach(function (item) { console.log(item) }) // 배열값들을 함수처리

// map문 용도 : 배열값 수정해서 새 배열 만들 때(배열 길이는 유지)
// arr.map(function (item) { return item + 1 }) // newArr === [2, 4, 4, 5, 5, 6]

// filter문 용도 : 배열 추려서 새 배열 만들 때
// arr.filter(function (item) { return item > 3 }) // newArr === [4, 4, 5]

// reduce문 용도 : 배열값들을 이용해 수학적 계산이 필요한 경우s(예 : 각 과목 점수들의 평균을 계산)
// arr.reduce(function (acc, item) { return acc + item }) // sum
// arr.reduce(function (acc, item) { return acc + item / arr.length }) // average

// < 정리 >
// 속도 비교 : for > reduce > filter > forEach > map >>> $.each(jquery)
// * 함수형 반복문은, 파라미터를 늘리면, value, index, array자체 모두를 취할 수 있다.



// 1. 문제 : 다음 함수를, 숫자 배열이 주어졌을 때, 10보다 큰 숫자의 "개수"를 반환하는 함수로 만들어라.
// function countBiggerThanTen(numbers) {}
// const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
// console.log(count) // 5이 나와야 한다.

// 1. 답1
// function countBiggerThanTen (numbers) {
//   const result = numbers.filter(n => n > 10).length
//   return result
// }
// const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
// console.log(count) // 5이 나와야 한다.

// 1. 답2
// function countBiggerThanTen (numbers) {
//   let count = 0
//   numbers.forEach(n => { n > 10 && count++ })
//   return count
// }
// const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
// console.log(count) // 5이 나와야 한다.