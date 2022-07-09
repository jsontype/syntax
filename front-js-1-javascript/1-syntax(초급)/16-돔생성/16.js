// a, b 변수
let a = document.createElement("div") // div 태그를 만든다.
a.innerHTML = "새로 생성됨"

// 바디에 생성
function create1 () {
    console.log('document: ', document)
    let body = document.body
    body.appendChild(a)
}

// 원하는 태그에 생성
function create2 () {
    let parent = document.querySelector("#create2")
    parent.appendChild(a)
}

// 원하는 태그에 계속 생성
function create3 () {
    // 아들 태그 생성
    let b = document.createElement("div") // div 태그를 만든다.
    // 아들 속성 변경
    b.innerHTML = "새로 생성됨(지역변수)"
    b.setAttribute("id", "son") // id = 고유명사
    b.setAttribute("class", "tottenham") // class = 소속
    b.style.backgroundColor = "yellow"
    // 부모에게 갖다붙인다
    let parent = document.querySelector("#create3")
    parent.appendChild(b)
}

// create3으로 만들어졌던 리스트 삭제
function delete3 () {
    // 삭제할 자식 찾기
    let son = document.querySelector("#son")
    // 부모 객체 알아내기
    let parent = ""
    if (son && son.parentElement) {
        parent = son.parentElement
        // 부모로부터 id="son"인 DOM 객체를 떼어낸다
        parent.removeChild(son)
    }
}
