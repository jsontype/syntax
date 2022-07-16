/*
    [배열고차함수의 화살표표현식]

    * 특히 Map은 잘 알아두면 이후 리액트할 때 많이 쓴다.
*/

// 데이터
let arr = [1, 3, 3, 4, 4, 5]

// 배열고차함수의 화살표 함수화된 예시 보기
// 지난 번에 배웠던 것을 다시 한번 복기해두자. → "화살표 함수에서 화살표는 function이라는 문자를 대신하는 것이다."
// * return이 있을 시, 더 깔끔하게 변경이 가능하다.

// forEach문 용도 : For 쓰기 싫을 때 쓴다. (리턴 없는 경우만 찾아서)
arr.forEach((item) => { console.log(item) })
// arr.forEach((item, index) => { (item > 3) ? console.log('index ===>', index) : console.log('') })
// arr.forEach((value, index, arr) => { console.log('value, index, arr ===>', value, index, arr) })

// map문 용도 : 배열값 수정해서 새 배열 만들 때(배열 길이는 유지)
// arr.map((item) => { return item + 1 }) // newArr === [ 2, 4, 4, 5, 5, 6 ]
// arr.map((item, index, arr) => { console.log('value, index, arr ===>', item, index, arr); return item + 1 })
// arr.map((item) => item + 1 ) // newArr === [ 2, 4, 4, 5, 5, 6 ] // * return이 있을 시, 더 깔끔하게 변경이 가능하다.

// filter문 용도 : 배열 추려서 새 배열 만들 때
// arr.filter((item) => { return item > 3 }) // newArr === [ 4, 4, 5 ]
// arr.filter((item) => item > 3 ) // newArr === [ 4, 4, 5 ] // * return이 있을 시, 더 깔끔하게 변경이 가능하다.

// reduce문 용도 : 배열값들을 이용해 수학적 계산이 필요한 경우(예 : 각 과목 점수들의 평균을 계산)
// arr.reduce((acc, item) => { return acc + item }) // sum
// arr.reduce((acc, item) => { return acc + item / arr.length }) // average
// arr.reduce((accumluate, value, index, array) => { console.log('return누적값, value, index, array ===> ', accumluate, value, index, array); return accumluate + value })
// arr.reduce((acc, item) => acc + item) // sum // * return이 있을 시, {}을 제거해 더 깔끔한 변경이 가능하다.
// arr.reduce((acc, item) => acc + item / arr.length) // average // * return이 있을 시, {}을 제거해 더 깔끔한 변경이 가능하다.
// arr.reduce((accumluate, value, index, array) => accumluate + value ) // * return이 있을 시, {}을 제거해 더 깔끔한 변경이 가능하다.



// ** 반복문으로 값을 나타내는 배열고차함수 findIndex의 경우에도, 화살표함수로 표현이 가능하다.
// findIndex문 용도 : 「조건」에 해당하는 「최초의 인덱스」 찾기
// console.log(arr.findIndex((item) => { return item > 3 }))
// console.log(arr.findIndex((item) => item > 3)) // * return이 있을 시, {}을 제거해 더 깔끔한 변경이 가능하다.
