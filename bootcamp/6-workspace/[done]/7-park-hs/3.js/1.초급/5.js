// js는 html을 바꾸기 위해서 사용하는 언어. = js는 DOM을 조작하는 용도로 씁니다.

// DOM: Document Object Model
console.log(document)

// DOM 변경
function changeDOM() {
    let h1 = document.querySelector('h1')
    h1.innerHTML = 'document 조작법에 대한 공부'
}

// DOM 추가
function addDOM() {
    // 부모 선택
    let content = document.querySelector('#content')

    // 자식 생성
    let addItem = document.createElement('div')
    addItem.innerHTML = '1. DOM이란 무엇인가?'
    addItem.setAttribute('id', 'child')

    // 부모에게 자식을 붙임
    content.appendChild(addItem)
}

// DOM 삭제
function delDOM() {
    // 자식을 버릴 부모 선택
    let content = document.querySelector('#content')    

    // 자식 선택
    let targetItem = document.querySelector('#child')

    // 버리기
    if (targetItem) { // 예외처리: 자식 없을 때는 실행안함
        content.removeChild(targetItem)
    }
}