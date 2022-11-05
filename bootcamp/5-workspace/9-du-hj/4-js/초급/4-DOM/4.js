console.log(document)

// DOM 선택 : Document Object Model
console.log('h1: ', document.querySelector('h1'))
console.log('#app: ', document.querySelector('#app'))
console.log('.footer: ', document.querySelector('.footer'))
let a = document.querySelector('h1')
let b = document.querySelector('#app')
let c = document.querySelector('.footer')

// DOM 선택자 부여
a.setAttribute('class', 'title')
c.setAttribute('id', 'footer')

// 이벤트 리스너 함수
function onClick () {
    // DOM 추가
    let link = document.createElement('a') // 선언
    link.href = '#' // DOM 프로퍼티 추가
    link.innerHTML = '링크' // DOM 프로퍼티 추가
    b.appendChild(link) // 추가
}

function onContextMenu () {
    alert('우클릭 사용금지')
}
