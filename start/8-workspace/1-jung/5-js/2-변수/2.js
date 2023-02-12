// runtime : 실행환경
// browser runtime : html 파일을 브라우져로 열어서, js를 실행하는 환경
// node runtime : node 커맨드를 사용해서 js를 실행하는 환경

console.log("node 런타임에서 실행한 콘솔로그")

// 변수 : 변하는 수
// 변수의 선언 : let(변수), const(상수)
let a = 1
a = 2
a = 2 + 3
console.log(a) // a = 5
let b = "5"
console.log(b) // b = 5
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
const c = 3
// c = 4
console.log(c)

// 변수의 타입 : number(수), string(문자열), boolean(참/거짓)
const aa = 1 // number는 연산할 수 있음
const bb = "hello"
console.log(aa + bb) // string은 연산할 수 없음
const cc = a === b // true or false (> < >= <= === 등으로 논리연산을 하면 불린값이 나온다)
console.log(cc)
