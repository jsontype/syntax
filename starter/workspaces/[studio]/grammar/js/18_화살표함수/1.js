// 화살표 함수 : 함수를 변수처럼 값으로 사용하고 싶을 때, 더 간편하게 표현하는 방법 (b 보다 c로 표현)

let a = 1 // 변수 ← 값

let b = ab(1, 1) // 변수 ← (함수 = 값)
function ab(a, b) {
    return a+b
}

let c = (a, b) => { return a+b }
console.log('c(1, 2): ', c(1, 2))
