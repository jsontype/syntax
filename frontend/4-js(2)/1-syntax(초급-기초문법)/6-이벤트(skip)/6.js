// Event
function onClick() {
    console.log('좌클릭')
}

function onContextMenu() {
    console.log('우클릭')
}



// addEventListener
let title = document.querySelector('#title')
title.addEventListener("click", leftClick)
title.addEventListener("contextmenu", rightClick)
title.addEventListener("mouseenter", onMouseEnter)

function leftClick () {
    title.innerHTML = '좌클릭'
}

function rightClick () {
    title.innerHTML = '우클릭'
}

function onMouseEnter () { // JS에서 변수명이나 메소드명은 camel case로 지정한다.
    title.style.color = 'red'
}

