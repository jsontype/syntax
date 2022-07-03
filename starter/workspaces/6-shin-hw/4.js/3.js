function act () {
    // 불린 Boolean 데이터타입 : true or false, 비교연산값(a > b)    

    // 조건문
    let a = Number(prompt('숫자 입력'))
    let b = 2
    let c = (a > b) // true or false : boolean 데이터타입
    if (a > b) {
        console.log('b보다 큽니다.')
    } else if (a === b) {
        console.log('b랑 같습니다.')
    } else {
        console.log('b보다 작습니다.')
    }
}