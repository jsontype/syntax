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



/*
    1. 문제
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

    1. 일반적인 함수로 만든 뒤에, 화살표 함수로도 만들어보자.
*/

