let a = 0 // false
let b = '' // false
let c = undefined // 화장지 자체가 없음
let d = null // 심지는 있음
let e = true // Boolean

// 주소참조
const arr = [1, 2, 3, 4, 5] // index / value
const obj = { id: 'yang', pw: '1234' } // key / value
const func = function (obj) { console.log(obj.id); console.log(arr[0]) }
func(obj)

// 템플릿 리터럴
let f = `${obj.id} 님 환영합니다.`
