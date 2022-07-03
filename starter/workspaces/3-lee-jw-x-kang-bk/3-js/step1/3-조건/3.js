// 조건문
let a = 4
let b = 2

// true일 때 {}안의 내용이 실행된다. false는 실행하지 않는다.
if (a === 0) {
    console.log('a는 0이다.')
} else if (a === 1) {
    console.log('a는 1이다.')
} else if (a === 2) {
    console.log('a는 2이다.')
} else if (a === 3) {
    console.log('a는 3이다.')
} else {
    console.log('a는 4 이상이다.')
}

// 두개 이상의 조건 : and (&&), or (||)
if (a > 0 && b < 2 && b >0) {
    console.log('나올까요?')
}

// 문제
// apple = 5
// people = 4
// orange = 3
// 오렌지가 사람보다 많은 경우, '오렌지로 충분하다'
// 오렌지가 충분하지 않은 경우, 사과가 사람보다 많으면 '사과로 충분하다'
// 사과도 충분하지 않은 경우, '둘다 불충분하다' 

let orange = 4
let people = 4
let apple = 3

if (orange >= people) {
    console.log('오렌지로 충분하다')
} else if (apple >= people) {
    console.log('사과로 충분하다')
} else {
    console.log('둘다 불충분하다')
}

