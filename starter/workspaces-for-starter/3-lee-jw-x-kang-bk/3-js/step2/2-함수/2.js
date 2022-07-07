// 함수표현식

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 1. 일반표현식 normal expression
// function printData (data) { 
//    console.log(data)
// }

// 2. 직접표현식 direct expression
// const printData = function (data) { console.log(data) }

// 3. 화살표표현식 arrow expression
// const printData = (data) => { // 두 줄 이상일 때는 {}를 붙임
//     console.log(data)
//     console.log('입니다.')
// }
const printData = (data) => console.log(data) // 한 줄일 때는 {} 없어도 됨

printData(data)