// 중급 조건문
let a = 1
let b = 2

// 기존 : Else가 있을 때
let result2 = ''
if (a < b) {
    result2 = 'a가 작다'
} else {
    result2 = 'a가 크다'
}

// 3항연산자 Trinary Operator
const result1 = a < b ? 'a가 작다' : 'a가 크다'

// 기존 : Else if가 여러개
let c = 3
if (c === 1) {
    result2 = 'c는 1'
} else if (c === 2) {
    result2 = 'c는 2'
} else if (c === 3) {
    result2 = 'c는 3'
} else if (c === 4) {
    result2 = 'c는 4'
} else {
    result2 = 'c는 모른다.'
}

result2 = c === 1 ? 'c는 1' : c === 2 ? 'c는 2' : c === 3 ? 'c는 3' : c === 4 ? 'c는 4' : 'c는 모른다.'

// 기존2 : Else가 없을 때
let result4 = ''
if (a < b) {
    result4 = 'a가 작다'
}

// && (Ampersand) 조건문
const result3 = a < b && 'a가 작다'

// || (Vertical Bar) 대체값
const result5 = result3 || 'a가 크다'
