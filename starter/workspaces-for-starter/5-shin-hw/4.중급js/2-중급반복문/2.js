const arr = [1, 2, 3, 4, 5]

// 반복문 기초
// for (let i=0; i < arr.length; i++) {
//     console.log('인덱스: ', i)
//     console.log('값: ', arr[i])
//     console.log('배열전체: ', arr)
// }

// 중급 반복문 : 리턴이 없는 경우
arr.forEach(function (item, index, arr) { console.log(item, index, arr) })

// 중급 반복문 : 리턴이 있는 경우, 배열길이가 같은 걸 리턴
const result = arr.map(function (item, index) { return `인덱스 ${index}의 값은 ${item}이다.` })
console.log(result)

// 중급 반복문 : 리턴이 있는 경우, 배열길이가 다른 걸 리턴
const result2 = arr.filter(function (item) { return item > 1 })
console.log(result2)


// Filter문 연습문제
// a 배열은 1부터 20까지의 정수 1, 2, 3, 4, 5, 6, 7...
// b 에다가 item % 3 === 0 인 경우만 값과 인덱스를 표시
const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const b = a.filter(function(item){return item % 3 === 0})
console.log(b)

// Map문 연습문제
// a 배열에 값들을 각각 2승을 제곱한 더한 c 배열을 리턴하라.
const c = a.map(function(item){return item * item})
console.log(c)
