// runtime : 구동 환경. 브라우져(js), 터미널(nodejs)

// 조건문
let a = 3
let b = 3

if (a < b) {
    console.log('b가 더 큼')
} else if (a === b) {
    console.log('b가 a와 동일함');
} else {
    console.log('b가 더 크지 않음')
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
let apple = 4

if (orange >= people) {
    console.log('오렌지로 충분하다')
} else if (apple >= people) {
    console.log('사과로 충분하다')
} else {
    console.log('둘다 불충분하다')
}
