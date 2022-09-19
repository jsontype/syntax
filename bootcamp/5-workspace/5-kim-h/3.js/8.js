// 중급 반복문

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// 원본
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// forEach : 리턴이 없을 때
arr.forEach((item) => { console.log(item) })

// map : 동일한 처리를 한, 동일한 길이의 배열을 리턴
const result = arr.map((item) => { return item + 1 })
console.log(result)

// filter : 리턴에 조건을 넣어서, 걸러진 길이의 배열을 리턴
const result2 = arr.filter((item) => { return item > 3})
console.log(result2)

// 문제풀이
// a 배열은 1,2,3,4,5,6 까지 있다.
// forEach문을 이용해서, 배열 안에 4가 있으면 "4를 찾았습니다!"" 라고 출력
// map문을 이용해서, 배열값을 각각 2승으로 제곱한 배열을 만들고 출력
// filter문을 이용해서, 짝수만 (item % 2 === 0 인 것만) 있는 배열을 만들고 출력
