// 일반 함수표현식 (원래 방식)
function plus1 (a, b) {
    return a + b
}
console.log(plus1(1, 2)) // 3
const plus1 = (a, b) => { return a + b }

// 즉시호출 함수표현식 (실무에서 가끔)
const plus2 = function (a, b) { return a + b }
console.log(plus2(1, 2)) // 3

// 화살표 함수표현식1 (실무)
const plus3 = (a, b) => { return a + b }
console.log(plus3(1, 2)) // 3

// 화살표 함수표현식2 (실무)
const plus4 = (a, b) => a + b
console.log(plus4(1, 2)) // 3
