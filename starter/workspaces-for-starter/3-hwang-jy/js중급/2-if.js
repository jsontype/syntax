// if

let a = 1
let b = 2

if (a === 1) {
    console.log(1)
} else if (a === 2) {
    console.log(2)
} else if (a === 3) {
    console.log(3)
} else if (a === 4) {
    console.log(4)
} else {
    console.log('몰라')
}

const result1 = a > b ? 'a가 크다' : 'b가 크다'
const result1_1 = a < b ? 'b가 크다' : a === b ? 'a = b' : 'a가 크다'
const result1_2 = a === 1 ? 1 : a === 2 ? 2 : b === 3 ? 3 : b === 4 ? 4 : '몰라'

/*
    * Ampersand (and)
        true && true = true
        true && false = false
        false && false = false

    * 암묵적 캐스팅 : String > Number > Boolean

    * 명제
        0 false
        -1 true
        '' false
        '1' true
        [] false
        {} false

    * Vertical Bar (or)
        false || true = true        
*/

// 앞 조건이 참이면 뒤를 표시 = if 
const result2 = a > b && 'a가 크다' // true && true = true // false && true = false

// 앞이 존재하지 않으면 대타로 뒤를 표시
const result3 = a || 'a 대타'
