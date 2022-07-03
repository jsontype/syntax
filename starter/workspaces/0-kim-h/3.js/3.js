// 조건문 if
let a = 1
let b = 2

if (a > b) { // true일 경우
    console.log('a가 b보다 크다.')
} else if (a === b) {
    console.log('a와 b가 같다')
} else {
    console.log('a가 b보다 작다.')
}

let c = -1

if (c === 1) {
    console.log('c는 1이다.');
} else if (c === 2) {
    console.log('c는 2이다.');
} else if (c === 3) {
    console.log('c는 3이다.');
} else if (c === 4) {
    console.log('c는 4이다.');    
} else {
    console.log('c는 1-4 사이에는 없다.')
}

// if ('1' == 1) { // 암묵적 캐스팅 허용
if ('1' === 1) { // 암묵적 캐스팅을 허용하지 않고 비교
    console.log('실행되나??');
}

// 문제
// apple = 5
// people = 4
// orange = 3
// 오렌지가 사람보다 많은 경우, '오렌지로 충분하다'
// 오렌지가 충분하지 않은 경우, 사과가 사람보다 많으면 '사과로 충분하다'
// 사과도 충분하지 않은 경우, '둘다 불충분하다'

let apple = 3
let people = 4
let orange = 3

if (orange > people) {
    console.log('오렌지로 충분하다')
}
else if (apple > people) {
    console.log('사과로 충분하다')
}
else {
    console.log('둘다 불충분하다')
}
