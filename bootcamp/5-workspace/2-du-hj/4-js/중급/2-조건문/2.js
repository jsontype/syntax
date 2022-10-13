let a = 1
let b = 2

// if (a) {
//     console.log('a가 존재한다.')
// }

// 앰퍼센드를 이용한 조건문
a && console.log('a가 존재한다.')

// 버티컬바를 이용한 조건문
a || b // a가 없으면 대신 b를 넣어라

// if (a) {
//     console.log('a가 존재한다.')
// } else {
//     console.log('a가 존재 안한다.')
// }

// 3항연산자
a ? console.log('a가 존재한다.') : console.log('a가 존재 안한다.')

if (!a && !b) {
    console.log('NG')    
} else if (a > b) {
    console.log('1')
} else if (a === b) { 
    console.log('2')
} else {
    console.log('3')
}

// 4..5..n항연산자
!a && !b ? console.log('NG') : a > b ? console.log('1') : a === b ? console.log('2') : console.log('3')
