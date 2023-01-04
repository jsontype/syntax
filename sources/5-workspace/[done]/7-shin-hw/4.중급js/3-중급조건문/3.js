let a = 1
let b = 2


// 암묵적 캐스팅 : string > number > boolean
let c = 'hello' + a + true
console.log(typeof c)
// Boolean("") // false
// Boolean(".") // true
// Boolean(0) // false
// Boolean(1) // true
// Boolean([]) // false
// Boolean({}) // false
// false && true === false / true && ture === true

// 중급 조건문 : else가 없을 때
if (a < b) {
    console.log("A is smaller than b")
}
const result = a > b && "A is smaller than b"
console.log(result)

if (a < b) {
    console.log("A가 더 작다")
} else {
    console.log("A가 더 크다")
}

// 중급 조건문 : else가 있을 때
const result2 = a < b ? "A가 더 작다" : "A가 더 크다"
console.log(result2)

// 중급 조건문 : else if가 있을 때
if (a === 1) {
    console.log('a는 1이다')
} else if (a === 2) {
    console.log('a는 2이다')
} else if (a === 3) {
    console.log('a는 3이다')
} else if (a === 4) {
    console.log('a는 4이다')
} else {
    console.log('a는 모른다')
}

const result3 = a === 1 ? 'a는 1이다' : a === 2 ? 'a는 2이다' : a === 3 ? 'a는 3이다' : a === 4 ? 'a는 4이다' : 'a는 모른다'
console.log(result3)

// 보너스 || (vertical bar가 2개 있으면 or)
// Boolean(true || true) // true
// Boolean(true || false) // true
// Boolean(false || false) // false
const val = 0
const result4 = val || 2 // val 값이 없으면 뒤의 값으로 대체한다.
console.log(result4)



// 문제 &&
// apple이 사람보다 많으면 사과는 충분하다
let apple = 6
let orange = 3
let people = 4

if (apple > people) {
    console.log("사과는 충분하다")
}
const result5 = apple > people && "사과는 충분하다"
console.log(result5)


// 문제 ?
// apple, orange, people 선언 : 각각 2,3,4 숫자 넣기
// apple이 사람보다 많으면 사과로 충분을 출력
// apple이 적고, orange가 사람보다 많으면 오렌지가 충분을 출력
// 둘다 적으면 둘다 사람보다 적음을 출력

if (apple >= people) {
    console.log('사과로 충분')
} else if (orange >= people) { 
    console.log('오렌지로 충분')
} else {
    console.log('둘다 적음')
}

const result6 = apple >= people ? '사과로 충분' : orange >= people ? '오렌지로 충분' : '둘다 적음'
console.log(result6)
