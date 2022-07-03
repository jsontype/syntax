function act () {
    // 객체 Object 데이터타입 : key와 value로 구성
    let obj = { id: 'yangabc', pw: 'yyyaaa123' }
    console.log(obj['pw'])

    // DOM : HTML을 객체화한 것
    let a = document.querySelector('h6')
    let b = document.querySelector('.pick')
    let c = document.querySelector('#pick')

    // DOM의 수정
    a.innerText = '제목1을 바꿔볼까?'
    a.style = 'color: red;'
}
