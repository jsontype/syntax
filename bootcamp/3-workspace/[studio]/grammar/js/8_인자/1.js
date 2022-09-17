// 파라미터 : 메소드가 취하는 목적어
// 아규먼트(인자) : 파라미터에 들어가는 값

/**
 * 버튼을 클릭하면 실행한다.
 */
function clicked() {
    // 입력받을 사용자 이름
    // let userName = prompt('당신의 이름은 무엇입니까?')
    // 인사
    // greet(userName)
    // 계산
    add(1, 2)
}

/**
 * 사용자에게 인사한다.
 * @param {String} name 사용자의 이름
 */
 function greet(name) {
    console.log('Hello! '+name)
}

/**
 * 두 값을 더한다.
 * @param {Number} a 첫번째 값
 * @param {Number} b 두번째 값
 */
function add(a, b) {
    console.log(String(a), '+', String(b), '=', String(a+b))
    console.log(a+b)
}