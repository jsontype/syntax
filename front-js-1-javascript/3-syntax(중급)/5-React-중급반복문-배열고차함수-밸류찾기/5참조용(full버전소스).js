// 데이터
let arr = [1, 3, 3, 4, 4, 5]

// for문 용도 : 막코딩
// 설명 : 가장 기본적인 반복문이다.
// 장점 : 가장 빠르다.
// 단점 : 코드가 길고 가독성이 떨어진다.
for (let i = 0; i < arr.length; i++) {
    console.log('arr[i] ===>', arr[i]) // 값
    console.log('i ===>', i) // 인덱스
    console.log('arr ===>', arr) // 배열 전체
}

// 배열고차함수
// 고차함수(Higher-order Function)는 함수를 리턴하는 함수를 말한다.
// 배열고차함수에는 forEach, map, find, findIndex, filter, reduce, sort, some, every등이 있다.

// forEach문 용도 : For 쓰기 싫을 때 쓴다. (리턴 없는 경우만 찾아서)
// 설명 : 파라미터 개수에 따라 「value, index, array자체」 모두를 취할 수 있다.
// 장점 : 멀티플레이. 가독성.
// 단점 : 「return」값을 취할 수 없다.
// arr.forEach(function (item) { console.log(item) }) // 배열 - 구루구루 - 값들을 함수 처리
// arr.forEach(function (item) { (item === 4) ? console.log('value ===>', item) : console.log('') })
// arr.forEach(function (value, index, arr) { console.log('value, index, arr ===>', value, index, arr) })

// map문 용도 : 배열값 전체를 수정할 때 (배열 길이는 유지)
// 설명 : 「value, index, array자체」 모두를 취할 수 있다.
// 장점 : 멀티플레이. 새 배열을 return값으로 취할 수 있다. 배열 전체에 수식을 넣어서 전체값을 수정하고 싶을 때.
// 단점 : 느리다. 대용량 배열 처리시 메모리 overflow 가능성이 있다. 삼항연산자 안 된다.
// arr.map(function (item) { return item + 1 }) // 배열 - 구루구루 - 값들을 함수 처리 - 새 배열 리턴 (배열 길이는 유지)
// 삼항연산자 안됨
// arr.map(function (value, index, arr) { console.log('value, index, arr ===>', value, index, arr); return value + 1 })

// filter문 용도 : 배열 추려서 새 배열 만들 때
// 설명 : 조건에 해당하는 값이 몇개 있는지를 검색해서, 배열에 담아서 표시한다. 배열을 추려낼 때 쓴다.
// 장점 : 짧다.
// 단점 : 용도가 「배열 필터링」으로 한정되어 있다.
// arr.filter(function (item) { return item > 3 }) // newArr === [ 4, 4, 5 ]

// map문 용도 : 배열값 수정해서 새 배열 만들 때(배열 길이는 유지)
// 설명 : 「return누적값, value, index, array자체」모두를 취할 수 있다.
// 장점 : 「return」값을 취할 수 있다. for 이외에 가장 빠르고, 가장 확장성이 높다. 가장 완벽한 반복문.
// 단점 : 사용하기가 어렵다.
// arr.reduce(function (acc, item) { return acc + item }) // sum
// arr.reduce(function (acc, item) { return acc + item / arr.length }) // average
// *** 펑션, 파라미터, 리턴이 있는 함수는 화살표 함수로 축약이 가능
// arr.reduce((acc, item) => acc + item / arr.length) // average
// arr.reduce(function (accumluate, value, index, array) { console.log('return누적값, value, index, array ===> ', accumluate, value, index, array); return accumluate + value })

// < 정리 >
// 속도 비교 : for > reduce > filter > forEach > map >>> $.each(jquery)
// for : 기본. 빠름.
// forEach : 리턴이 필요없을 때, for 대신 가장 많이 사용
// map : 새로운 배열을 리턴
// filter : 조건식 리턴값으로 필터링된 배열을 리턴
// reduce : 누적값을 활용한 계산을 실행한 값을 리턴
// * 함수형 반복문은, 파라미터를 늘리면, value, index, array자체 모두를 취할 수 있다.
