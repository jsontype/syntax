/*
    [함수와 이벤트와 파라미터]
*/

// camel case: 변수, 함수명. 예) camelCaseItemExample...
function goGoogle () {
    let check = confirm('go to Google?')
    if (check) {
        location.href = "http://google.com"
    }
}

function customAlert (text) {
    alert(text)
}
