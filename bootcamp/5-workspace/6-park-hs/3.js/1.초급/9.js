
// 중급자 조건문 리액트용

let a = 3
let b = 2
if (a < b) {
    console.log('b가 크다')
} else {
    console.log('b가 작다')
}

if (a < b) {
    console.log('b가 크다')
} else {
    console.log('b가 작다')
}

// 3항 연산자 : else가 있을 때
const result1 = (a < b) ? 'b가 크다' : 'b가 작다'
console.log(result1)

// ampersand 조건문 : else가 없을 때
const result2 = a < b && "안녕"
console.log(result2)

// vertical bar 조건문 : 앞 값이 없으면, 뒤 값을 대신 넣는다.
const value = ""
const result3 = value || "잘가"
console.log(result3)






let c = 4
// if (c === 1) {
//     console.log('c는 1')
// } else if (c === 2) {
//     console.log('c는 2')
// } else if (c === 3) {
//     console.log('c는 3')
// } else {
//     console.log('c는 1에서 3사이엔 없다.');
// }
const result4 = (c === 1) ? 'c는 1' :
    (c === 2) ? 'c는 1' :
        (c === 3) ? 'c는 3' : 'c는 1에서 3사이엔 없다.'
console.log(result4)

// 리액트에서는 브레이크가 없다.
switch (c) {
    case 1:
        console.log('c는 1');
        break;
    case 2:
        alconsole.logert('c는 2');
        break;
    case 3:
        console.log('c는 3');
        break;
    default:
        console.log('c는 1에서 3사이엔 없다.');
}