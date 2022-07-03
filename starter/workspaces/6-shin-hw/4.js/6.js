// 리턴 : 출력값
function act1 () {
    console.log(a())
}

function a () {
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 111]
    return a[a.length - 1]
}

// 파라미터(parameter) : 입력값 변수 (name)
// 아규먼트(argument) : 입력값 ('text')
function act2 (name) {
    console.log(name + '님 환영합니다.')
}