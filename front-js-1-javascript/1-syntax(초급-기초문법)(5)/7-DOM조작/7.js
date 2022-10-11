/*
    DOM(Document Object Model)
    HTML 소스를 객체로 만들어서 JS가 사용할 수 있게 document라는 객체로 가져온 것
    위계를 갖고 있어 DOM Tree라고도 불린다.
*/

// DOM은 객체이다.
console.log(document)
document.title = '탭이름'

// DOM 변경
function clicked1 () {
    let dom1 = document.querySelector('.a')
    dom1.style = 'color:green;'

    let dom2 = document.querySelector('#a')
    dom2.innerHTML = '변환된 링크'
}

// CSS와 연동
function clicked2 () {
    let title1 = document.querySelector('#title1')
    title1.setAttribute('class', 'title')

    let title2 = document.querySelector('#title2')
    title2.classList.toggle('topic')
    console.log(title2)
}

// DOM 생성
function clicked3 () {
    let parent = document.querySelector('#parent')
    let son = document.createElement('a')
    son.setAttribute('id', 'son')
    son.innerHTML = '구글'
    son.href = 'http://google.com'
    parent.appendChild(son)
}

// DOM 삭제
function clicked4 () {
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
