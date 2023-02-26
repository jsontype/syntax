const a = 3
const b = 4

if (a > b) {
  console.log("a가 크다")
} else if (a < b) {
  console.log("b가 크다")
} else {
  console.log("a와 b는 같다")
}

const c = 2
// c가 1이면, "c는 1이다"를 콘솔로그에 출력
// c가 2이면, "c는 2이다"를 콘솔로그에 출력
// c가 3이면, "c는 3이다"를 콘솔로그에 출력
// c가 그 외의 숫자이면, "모른다"를 콘솔로그에 출력
if (c === 1) {
  console.log("c is 1")
} else if (c === 2) {
  console.log("c is 2")
} else if (c === 3) {
  console.log("c is 3")
} else {
  console.log("모른다")
}

const d = "오렌지"
// d가 '사과'이면, 'apple'을 콘솔로그에 출력
// d가 '포도'이면, 'grape'를 콘솔로그에 출력
// d가 '오렌지'이면, 'orange'를 콘솔로그에 출력
// d가 그 외의 문자열이면, "?"를 콘솔로그에 출력
if (d === "사과") {
  console.log("apple")
} else if (d === "포도") {
  console.log("grape")
} else if (d === "오렌지") {
  console.log("orange")
} else {
  console.log("모른다")
}

// 두개 이상의 조건
let e1 = 1
let e2 = 2
if (e1 && e2) { // && = and (둘 다 true여야 true)
  console.log("둘다 존재한다.")
}
if (e1 || e2) { // || = or (둘중 하나만 true여도 true)
  console.log("둘중 하나는 존재한다.")
}

// 조건문
let aa = 3
let bb = 3

// 두개 이상의 조건 : and (&&), or (||)
if (aa > 0 && bb < 2 && bb > 0) {
  console.log("나올까요?")
}

// 삼항연산자
let result = aa === bb ? "same" : "diff"
console.log(result)

// 스위치문 : else if 가 많을 때, case 별로 관리하는 조건문
const device = 'ipad'
switch (device) {
  case 'iphone':
    console.log('아이폰')
    break
  case 'ipad':
    console.log('아이패드')
    break
  case 'galaxy':
    console.log('갤럭시')
    break
  default:
    console.log('그 외의 기기입니다')
}
