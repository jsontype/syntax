// 함수 : 호출해서 실행하는 거
function goGoogle () {
    location.href = 'http://google.com'
}

// 파라미터(인자), 아규먼트(인자값)
function greeting (text) {
    console.log(text)
}

greeting('hello!!')
greeting(1234)



// DOM 수정해보기 (예습)
function english() {
    document.querySelector('#greeting').innerHTML = 'Hello! Nice to meet you!'    
}

function korean() {
    document.querySelector('#greeting').innerHTML = '안녕하세요, 어서오세요.'    
}
