const a = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// 배열 고차함수
// forEach : return 없는 반복문
a.forEach((item) => { console.log(item) })

// map : return 있는 반복문, 기존 배열에서 처리가 완료된 값으로, 동일한 길이의 배열을 리턴함
const result = a.map((item) => { return item + 1 })
console.log(result)

// filter : return 있는 반복문, 리턴에 조건을 걸어서, 조건에 참이 되는 것만 필터링된 배열을 리턴함
const result2 = a.filter((item) => { return item > 3 })
console.log(result2)
