// 조건문
let a = 3
let b = 3

if (a < b) {
    console.log('a가 작다')
} else if (a === b) {
    console.log('a와 b가 같다')
} else {
    console.log('b가 작다')
}

// 문제 1.
let apple = 5
let people = 3
let orange = 2
// 사람이 기준
// 오렌지가 같거나 많으면 '오렌지가 충분하다' // people <= orange
// 사과가 같거나 많으면 '사과가 충분하다'
// 둘다 같거나 많으면 '둘다 충분하다'
// 둘다 적으면 '충분한 게 없다'
if (orange >= people) {
    console.log('오렌지가 충분하다')
}
if (apple >= people) {
    console.log('사과가 충분하다')
}

// && : Ampersand, "And"의 의미
if (orange >= people && apple >= people) {
    console.log('둘다 충분하다')
}
if (orange < people && apple < people) {
    console.log('충분한 게 없다')
}

// || : Vertical Bar, "Or"의 의미
if (orange >= people || apple >= people) {
    console.log('적어도 하나는 충분하다.')
}

// 문제2. 가위바위보
let input1 = prompt('[플레이어1] 가위, 바위, 보 중 하나를 입력하세요 : ')
if (input1 !== '가위' && input1 !== '바위' && input1 !== '보') {
    console.log('가위, 바위, 보 중에 하나를 입력하세요.')
} else {
    let input2 = Math.ceil(Math.random() * 3)
    if (input2 === 1) {
        input2 = '가위'
    } else if (input2 === 2) {
        input2 = '바위'
    } else {
        input2 = '보'
    } 
    // 결과 표시   
    console.log('플레이어1 : ', input1, ' VS ', '플레이어2 : ', input2)
    if (input1 ==='가위') {
        if (input2 === '가위') {
            console.log('비겼다')
        } else if (input2 === '바위') {
            console.log('플레이어2 승')
        } else if (input2 === '보') {
            console.log('플레이어1 승')
        }    
    }
    if (input1 ==='바위') {
        if (input2 === '바위') {
            console.log('비겼다')
        } else if (input2 === '보') {
            console.log('플레이어2 승')
        } else if (input2 === '가위') {
            console.log('플레이어1 승')
        }    
    }
    if (input1 ==='보') {
        if (input2 === '보') {
            console.log('비겼다')
        } else if (input2 === '가위') {
            console.log('플레이어2 승')
        } else if (input2 === '바위') {
            console.log('플레이어1 승')
        }
    }
}

let c = ''
if (!c) {
    console.log('c 값이 존재하지 않음')
}
