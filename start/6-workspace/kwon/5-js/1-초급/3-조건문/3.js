// 조건문
let c = 2
if (c > 1) {
  console.log("참일때만 나온다.")
}

let a = 3
if (a === 1) {
  console.log("a는 1이다")
} else if (a === 2) {
  console.log("a는 2이다")
} else if (a === 3) {
  console.log("a는 3이다")
} else {
  console.lpg("모른다")
}

// a를 선언하고, 3을 초기값으로 할 것
// 다음을 조건문으로 만드시오.
// a가 1일때 "a는 1이다"를 콘솔로그에 출력하라.
// a가 2일때 "a는 2이다"를 콘솔로그에 출력하라.
// a가 3일때 "a는 3이다"를 콘솔로그에 출력하라.
// 그 외에는 "모른다"를 콘솔로그에 출력하라.

// b를 선언하고, 15를 초기값으로 할 것
// 다음을 조건문으로 만드시오.
// b가 2의 배수일 때 "b가 2의 배수"를 콘솔로그에 출력하라.
// b가 3의 배수일 때 "b가 3의 배수"를 콘솔로그에 출력하라.
// b가 4의 배수일 때 "b가 4의 배수"를 콘솔로그에 출력하라.
// 그 외에는 "모른다"를 콘솔로그에 출력하라.

let b = 15
if (b % 2 === 0) {
  console.log("b가 2의 배수")
} else if (b % 3 === 0) {
  console.log("b가 3의 배수")
} else if (b % 4 === 0) {
  console.log("b가 4의 배수")
} else {
  console.log("모른다")
}

// and의 조건 : a가 2이상이고, b가 10 이상인 조건
// && (ampersand) : and
if (a >= 2 && b >= 10) {
  console.log('true1')
}

// or의 조건 : a가 2이상이거나, b가 10 이상인 조건
// || (vertical bar) : or
if (a >= 99 || b >= 10) {
  console.log('true2')
}