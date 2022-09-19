// camel case: 변수, 함수명. 예) camelCaseItemExample...
function goGoogle () {
    let check = confirm('go to Google?')
    if (check) {
        location.href = "http://google.com"
    }
}

// 파라미터
function customAlert (text) {
    alert(text)
}

// 리턴
function returnHi() {
    return 'hi'
}
let result = returnHi()
console.log(result)

// 함수에 주석 다는 정식 방법
/**
 * 인삿말을 넣고 그 인삿말을 리턴한다.
 * @param {String} text 인삿말
 * @returns 인삿말
 */
 function example(text) {
    return text
}

// 화살표 함수 표현식 : example과 example2는 같다.
const example2 = (text) => { return text }
