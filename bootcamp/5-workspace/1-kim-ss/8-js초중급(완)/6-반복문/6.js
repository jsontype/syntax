// const a = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// 고차함수 : 함수의 파라미터 안에 함수가 들어가는 함수

// 배열고차함수 forEach : 리턴이 없는 for문
// a.forEach((item) => { console.log(item) })

// 배열고차함수 map : 똑같은 길이의 배열을 리턴하는 for문
//const b = a.map((item) => { return item + 1 })
//.log(b)

// 배열고차함수 filter : 필터링된 길이의 배열을 리턴하는 for문
// c = a.filter((item) => { return item > 3 })
//console.log(c)

const aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for (let i = 0; i < aa.length; i++) {
//     console.log(aa[i])
// }

aa.forEach((item) => { console.log(item) })

const b = aa.map((item) => { return item + 2 })
console.log(b)

const c = aa.filter((item) => { return item > 8 })
console.log(c)
