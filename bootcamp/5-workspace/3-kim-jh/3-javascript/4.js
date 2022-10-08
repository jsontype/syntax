// JSON 타입
const user = [
    { id: 'kim', pw: '123213' }, 
    { id: 'yang', pw: 'sdalkfjalwk' }
]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

// 반복문
// for (let i = 0; i < user.length; i++) {
//     let result = user[i].id
//     console.log(result)
// }

// 실무반복문 : 배열고차함수 (리턴 없을 때) 파라미터는 (값, 인덱스, 배열전체) 순으로 들어간다.
// user.forEach((item, i, arr) => { console.log(`${arr}배열의 ${i}번째 인덱스의 값은 : ${item.id}`) })

// 실무반복문 : 배열고차함수 (리턴 있을 때) 파라미터는 (값, 인덱스, 배열전체) 순으로 들어간다. 파라미터와 동일한 순서와 동일한 길이의 배열을 리턴한다.
// const result = user.map((item, i, arr) => `${arr}배열의 ${i}번째 인덱스의 값은 : ${item.id}` )

// 실무반복문 : 배열고차함수 (필터링) 파라미터는 (값, 인덱스, 배열전체) 순으로 들어간다. 파라미터에서 필터링된 배열이 리턴된다.
const result = arr.filter(item => item > 10 )
console.log(result)
