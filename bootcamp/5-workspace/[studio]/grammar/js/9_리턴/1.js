// 리턴
function clicked() {
    let userName = getName()
    console.log(userName+'님 어서오세요.')

    let a = prompt('a의 값을 입력해주십시오: ')
    let b = prompt('b의 값을 입력해주십시오: ')
    let c = prompt('연산자를 입력해주십시오: ')
    a = Number(a)
    b = Number(b)
    let output = calculate(a, b, c)
    console.log('계산 결과입니다. :', output)
}

function getName() {
    let name = 'Yang'
    return name
}

/**
 * 사칙연산을 수행한다.
 * @param {Number} a a값 
 * @param {Number} b b값
 * @param {String} c 연산자
 */
function calculate(a, b, c) {
    let result = 0
    if (c == '+') {
        result = a + b
    } else if (c == '-') {
        result = a - b
    } else if (c == '*') {
        result = a * b        
    } else if (c == '/') {
        if (b == 0) {
            console.error('입력 오류입니다.')
        } else {
            result = a / b
        }
    } else {
        alert('사칙연산자(+,-,*,/)만 입력해주십시오.')
    }
    return result
}