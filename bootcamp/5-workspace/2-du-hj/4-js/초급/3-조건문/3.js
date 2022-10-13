let a = 1
let b = 2

// 조건문
if (a === b) { // a == b 암묵적 캐스팅이 이뤄진 상태에서 같음
    console.log("a와 b가 같다.")
} else {
    console.log("a와 b가 다르다.")
}

if (!a && !b) {
    console.log("둘다 Null입니다.")
} else if (typeof a !== "number" || typeof b !== "number") {
    console.log("타입이 틀렸습니다.")
} else if (a === b) { // a == b 암묵적 캐스팅이 이뤄진 상태에서 같음
    console.log("a와 b가 같다.")
} else if (a > b) {
    console.log("a가 b보다 크다.")
} else {
    console.log("a가 b보다 작다.")
}

// 스위치문
const device = 'iphone'
switch (device) {
    case 'iphone':
        console.log('아이폰!')
        break
    case 'ipad':
        console.log('아이패드!')
        break
    case 'galaxy note':
        console.log('갤럭시 노트!')
        break
    default:
        console.log('모르겠네요..')
}
