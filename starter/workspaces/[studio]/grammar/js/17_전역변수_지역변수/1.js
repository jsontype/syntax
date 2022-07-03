// 전역변수 : 지역 밖에서 선언이 된 변수, 지역 안팎에서 사용
let global = ""

// 지역변수 : 지역 안에서 선언이 된 변수, 지역 안에서 사용
function fish() {
    let local = "문어"
    console.log(local)
    global = "오징어"
}

fish()

// console.log(local) // local is not defined out of the function fish()
console.log(global)