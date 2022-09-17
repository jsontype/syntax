// 런타임 : 실행환경
// Parameter : Argument(인자)
function act1(value) {
    console.log(value)
}
// act1("안녕하세요!")
// act1(1234)

// 리턴 : 함수 계산의 결과값
/**
 * 느낌표를 붙여서 반환한다.
 * @param {String} 출력할 대상 
 * @returns {String} 리턴
 */
function act2(text) {
    return text + "!"
}

// 화살표 함수
const act3 = (text) => {return text + "!"}
