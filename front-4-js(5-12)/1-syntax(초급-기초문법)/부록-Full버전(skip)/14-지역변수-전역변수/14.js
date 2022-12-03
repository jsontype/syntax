// 전역변수
let global = ""

// 지역변수
function fish() {
    let local = "문어"
    console.log(local, ': 지역안에서만 사용가능')
    global = "오징어" // 지역 안에서 사용・변경 가능, 단 const로 선언시 변경불가
}

fish()
console.log(global, ': 지역안・밖에서 사용가능')
// console.log(local) // 지역 밖에서 사용불가능하므로 에러가 남