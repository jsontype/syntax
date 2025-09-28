// ① 전달된 문자열의 배열에 중복된 문자열이 있는지 확인하는 함수를 만들어 주십시오.
// --중복 문자열이 있으면 true
// - 중복 문자열이 없으면 false

let result1 = false
let text1 = 'sdfqfwergfregggg'
const textArray1 = text1.split('')
for (let i = 0; i < textArray1.length; i++) {
    result1 = (textArray1[i+1] && textArray1[i] === textArray1[i+1]) ? true : false
    result1 = (textArray1[i-1] && textArray1[i] === textArray1[i-1]) ? true : false
}
console.log(result1)

// ② jadencase 문자열을 만드는 함수를 작성
// → 단어의 첫 문자를 대문자로, 기타를 소문자로 만드는 방법
// → typescript react next→Typescript Rect Next

let text2 = 'jadencase'
const textArray2 = text2.split('')
textArray2.forEach((item, index) => { if (index === 0) { textArray2.shift(); textArray2.unshift(item.toUpperCase()) }})
let result = textArray2.join('')
console.log(result)
