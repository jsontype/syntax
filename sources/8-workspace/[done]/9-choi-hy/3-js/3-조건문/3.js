// if (a) {
//     console.log('존재함')
// }

let a = 1
a && console.log('존재함')

// if (b) {
//     console.log('존재함')
// } else {
//     console.log('존재안함')
// }
let b = 0
b ? console.log('존재함') : console.log('존재안함')

// if (c) {
//     if (typeof c === 'string') {
//         console.log('존재하지만 스트링타입')
//     } else if (typeof c === 'number') { 
//         console.log('존재함. 타입도 넘버라서 OK')
//     } else {
//         console.log('존재안함')
//     }
// }
let c = 1
c && typeof c === 'string' ? console.log('존재하지만 스트링타입') : typeof c === 'number' ? console.log('존재함. 타입도 넘버라서 OK') : console.log('존재안함')

let f = undefined
let e = 2
console.log(f || e) // f가 존재하면 f를, 안하면 대신 e를 넣어라.
