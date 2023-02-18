// node runtime에서 문법 공부할 예정

// 값 참조 데이터타입 : let으로 선언
let stringType = 'Hello'
let numberType = 123
let BooleanType = true
let nullType = null
let undefinedType = undefined

/** Object 데이터타입 */
const a = {
    id: 'yang',
    pw: 'sdalkfjalwk'
}
// console.log(a.id)
// console.log(a['id'])

// Array 데이터타입
const b = [1, 2, 3, 4, 5, 6]
console.log(b[0])

// JSON 타입
const user = [
    { id: 'kim', pw: '123213' }, 
    { id: 'yang', pw: 'sdalkfjalwk' }
]

// 템플릿 리터럴 문법
let template = `${stringType} world` // Backtick
