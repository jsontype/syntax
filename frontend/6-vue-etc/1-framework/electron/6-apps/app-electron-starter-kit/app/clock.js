const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1")

// 현재 시간을 가져온다.
function getTime() {
    const date = new Date()
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    // 결과
    // console.log(date, day, hours, minutes) // ***

    // 결과 출력
    // clockTitle.innerText = `${hours}:${minutes}:${seconds}` // *** 원래 형태

    // 삼항연산자 (= Ternary Operator, Ternary If, Mini If)
    // let a = 10; a < 10 ? alert('a는 10보다 작다') : alert('a는 10보다 크거나 같다')
    // 백틱에서의 삼항연산자 문법 : `${조건 ? `${true일경우 변수}`: false일 경우 변수}`
    // 설명 : 만일 {$seconds}가 10보다 적으면, 01 이런식으로 출력하고, 10보다 크면, 그냥 ${seconds}를 출력한다.
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
}

// 결론
function init() {
    getTime()
    setInterval(getTime, 1000)
}
init()

