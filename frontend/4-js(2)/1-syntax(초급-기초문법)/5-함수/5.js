/*
    [함수와 이벤트와 파라미터]
*/

// 변수와 마찬가지로, 함수명은 camel case로 지정한다.

// 파라미터 없는 함수
function goGo () {
    location.href = "http://google.com"
}

// 파라미터 있는 함수
function say (text) {
    alert('text: ', text)
}

// 리턴이 없는 함수
function noReturn () {
    console.log('sth1')
}
console.log('noReturn(): ', noReturn())

// 리턴이 있는 함수
function yesReturn () {
    return 'sth2'
}
console.log('yesReturn(): ', yesReturn())

/*
    1. 문제 : 조건문의 함수 만들기
        점수를 성적등급으로 변환하기
        다음의 점수가 주어졌을 때 A, B, C, D, F 등급을 반환하는 함수를 만들어보자.
        함수명은 getGrade로 한다.
        파라미터명은 score로 한다.
        score가 100 일 때에는 문자열 'A+' 를 return한다. 아니면,
        score가 90 이하일 때에는 문자열 'A' 를 return한다. 아니면, 
        score가 89 일 때에는 문자열 'B+' 를 return한다. 아니면,
        score가 80 이상일 때에는 문자열 'B' 를 return한다. 아니면,
        score가 79 일 때에는 문자열 'C+' 를 return한다. 아니면,
        score가 70 이상일 때에는 문자열 'C' 를 return한다. 아니면,
        score가 69 일 때에는 문자열 'D+' 를 return한다. 아니면,
        score가 60 이상일 때에는 문자열 'D' 를 return한다. 아니면,
        'F'를 return한다.
        해당 함수를 만들고 파라미터에 아규먼트로 90을 넣은 뒤 그 결과를 출력하라.

    1. 답
        function getGrade(score) {
            if (score === 100) {
                return 'A+';
            } else if (score >= 90) {
                return 'A';
            } else if (score === 89) {
                return 'B';
            } else if (score >= 80) {
                return 'B'
            } else if (score === 79) {
                return 'C'
            } else if (score >= 70) {
                return 'C'
            } else if (score === 69) {
                return 'D+'
            } else if (score >= 60) {
                return 'D'
            } else {
                return 'F'
            }
        }

        const grade = getGrade(90)
        console.log(grade)
    
    1. 스위치 문으로도 만들어보자.
*/



// 함수에서 객체를 파라미터로 받기
const ironMan = {
    name: 'Tony Stark',
    actor: 'Robert Downey Jr.',
    role: 'Ironman'
}

const captainAmerica = {
    name: 'Steve Rogers',
    actor: 'Chris Evans',
    role: 'Captain America'
}

function print(hero) {
    const text = `${hero.role}(${hero.name}) 역할을 맡은 배우는 ${
        hero.actor
    } 입니다.`
    console.log('text: ', text)
}

print(ironMan)
print(captainAmerica)



// 객체 안에 함수 넣기
const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    // 함수를 선언 할 때에는 이름이 없어도 된다.
    say: function() {
        // 함수가 객체안에 들어가게 되면, this 는 자신이 속해있는 객체를 가르키게 된다.
        console.log('this.sound: ', this.sound)
    }
}
dog.say()



// 함수의 기본파라미터 넣기
function calculateCircleArea (r = 1) {
    return Math.PI * r * r // 반지름의 제곱 x 원주율(지름 1 당 원 둘레 길이의 비율)
}
console.log('반지름이 2cm인 원의 넓이:', calculateCircleArea(2)) // 단위가 cm라면, 반지름이 2cm인 원의 넓이가 나온다.
console.log('반지름이 1cm(기본값)인 원의 넓이:', calculateCircleArea()) // 단위가 cm라면, 반지름이 1cm(기본값으로 설정)인 원의 넓이가 나온다.



// scope의 이해 : local(block, functionalScope) scope와 global scope, 즉 지역변수와 전역변수
// 전역변수
let global = ""
// 지역변수
function fish () {
    if (true) {
        let blockScope = "쭈꾸미"
        console.log(blockScope, ': 블럭안에서만 사용가능')
    }
    // console.log(blockScope) // 함수 안이지만, 블럭 밖에서 사용불가능하므로 에러가 남
    let functionScope = "문어"
    console.log(functionScope, ': 함수안에서만 사용가능')
    globalScope = "오징어" // 함수 안에서 사용・변경 가능, 단 const로 선언시 변경불가
}
fish()
console.log(globalScope, ': 지역안・밖에서 사용가능')
// console.log(functionScope) // 함수 밖에서 사용불가능하므로 에러가 남



// 함수 표현식 : 일반, 즉시호출, 화살표 함수표현식이 있다.
// 일반 함수 표현식
function plus1 (a, b) {
    return a + b
}
console.log('plus1(1, 2) ===>', plus1(1, 2))

// ★ 즉시 호출된 함수 표현식(IIFE, Immediately-Invoked Function Expression) : 변수에 함수를 넣을 때는, 다음과 같이 함수명을 생략하고 사용할 수 있다.
const plus2 = function (a, b) { return a + b }
console.log('plus2(1, 2) ===>', plus2(1, 2))

// ★★ 화살표 함수 표현식 1 (Arrow Function Expression 1) : {}가 있는 것
// 함수를 변수처럼 값으로 사용하고 싶을 때 위 보다 더 간편하게 표현하는 방법이다.
// ( A ) => { B } 방식의 함수는 function(A) { B } 와 의미가 같다. 즉, "화살표 함수에서 화살표는 function이라는 문자를 대신하는 것이다."
const plus3 = (a, b) => { return a + b }
console.log('plus3(1, 2) ===>', plus3(1, 2))

// ★★ 화살표 함수 표현식 2 (Arrow Function Expression 2) : {}가 없는 것.
// 여기서 {}를 없애면 return도 생략할 수 있다.
// 함수처리가 return 하나만 있을 때는 이 방식으로 처리하는게 가장 깔끔하다.
const plus4 = (a, b) => a + b
console.log('plus4(1, 2) ===>', plus4(1, 2))
