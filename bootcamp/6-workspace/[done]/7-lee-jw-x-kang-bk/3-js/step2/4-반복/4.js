// 중급자용 반복문 : For 대신 고차함수를 사용
const data = [1, 2, 3, 4, 5]

for (let i = 0; i < data.length; i++) {
    console.log(`인덱스: ${i}`)
}

// 1. forEach : return이 없는 경우
// arr.forEach((value, i, arr) => { console.log(value, i, arr) })
data.forEach((item) => { console.log(item + 1) })
// for (let i = 0; i < data.length; i++) {
//     let item = data[i]
//     item = item + 1
//     console.log(item)
// }

// 2. map : 동일한 처리를 한 동일한 길이의 배열을 리턴
data.map((item) => { return item + 1 })
// for (let i = 0; i < data.length; i++) {
//     let item = data[i]
//     item = item + 1
//     return item
// }

// 3. filter : return에 조건을 넣어서, 조건에서 걸리진 다른 길이의 배열을 리턴
data.filter((item) => { return item > 2 })
// for (let i = 0; i < data.length; i++) {
//     let item = data[i]
//     const newArr = []
//     if (item > 2) {
//         newArr.push(item)
//     }
//     return newArr
// }


// 연습문제
// 1. data2 = [1-10] , 2의배수만을 출력하세요. 콘솔로그로. forEach
// const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// data2.forEach((a) => { console.log(a % 2 === 0 && a) })

