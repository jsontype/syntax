const a = 1
const b = 2

// if (a > 1) {
//     console.log('aが1より大きい')
// }

// Ampersand 演算子
a > 1 && console.log('aが1より大きい')

// Vertical Bar 演算子
let c = a || b



// if (a > 2) {
//     console.log('aが2より大きい')
// } else {
//     console.log('aが2より大きくない')
// }

// 三項演算子
// 条件 ? trueの場合の処理 : falseの場合の処理
a > 2 ? console.log('aが2より大きい') : console.log('aが2より大きくない')

// if (a > 3) {
//     console.log('aが3より大きい')
// } else if (a === 3) {
//     console.log('aが3')
// } else {
//     console.log('aが3より大きくない')
// }
a > 3 ? console.log('aが3より大きい') : a === 3 ? console.log('aが3') : console.log('aが3より大きくない')

// if (a === 1) {
//     console.log('aが1')
// } else if (a === 2) {
//     console.log('aが2')
// } else if (a === 3) {
//     console.log('aが3')
// } else if (a === 4) {
//     console.log('aが4')
// } else {
//     console.log('aはわからない')
// }
a === 1 ? console.log('aが1') : a === 2 ? console.log('aが2') : a === 3 ? console.log('aが3') : a === 4 ? console.log('aが4') : console.log('aはわからない')
