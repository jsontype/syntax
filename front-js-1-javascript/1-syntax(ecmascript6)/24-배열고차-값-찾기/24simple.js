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
