let a = 1

// 원래 조건문
if (a) {
    console.log(a)
} else {
    console.log('a가 존재하지 않는다.')
}

// 실무 조건문 (3항연산자 = 조건 ? 참일때 처리 : 거짓일 때 처리 )
a ? console.log(a) : console.log('a가 존재하지 않는다')

// 원래 조건문
if (a < 0) {
    console.log('a는 음수이다')
} else if (a > 0) {
    console.log('a는 양수이다')
} else {
    console.log('a가 존재하지 않는다.')
}

// 실무 조건문 (3항연산자 = 조건 ? 참일때 처리 : 거짓일 때 처리 )
a < 0 ? console.log('a는 음수이다') : a > 0 ? console.log('a는 양수이다') : console.log('a가 존재하지 않는다.')
