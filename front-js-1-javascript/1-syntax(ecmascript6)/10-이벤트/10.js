// Event
function clicked1 () {
    console.log('좌클릭')
}

function clicked2 () {
    console.log('우클릭')
}

let title = document.querySelector('#title')
title.addEventListener("click", leftClick)
title.addEventListener("contextmenu", rightClick)
title.addEventListener("mouseenter", onMouse)

function leftClick () {
    title.innerHTML = '좌클릭'
}

function rightClick () {
    title.innerHTML = '우클릭'
}

// JS에서 변수명이나 메소드명은 camel case로 지정한다. (예: onMouseEnter)
function onMouse () {
    title.style.color = 'red'
}

