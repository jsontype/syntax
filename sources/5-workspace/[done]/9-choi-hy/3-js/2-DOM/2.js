// DOM 생성
function click1 () {
    let app = document.querySelector('#app') // DOM 선택
    let addItem = document.createElement('a')
    addItem.setAttribute('id', 'son') // JS와 연동
    addItem.setAttribute('class', 'son') // CSS와 연동
    addItem.innerHTML = 'a 태그 만들어졌다.'
    addItem.href = '#'
    app.appendChild(addItem)
}

// DOM 삭제
function click2 () {
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
