/*
    리턴 
    리턴값(반환값, return value)은 함수처리의 결과값이다.
    함수는 리턴값을 가질 수 있다. 리턴값이 있는 함수는 마치 변수처럼 사용할 수 있다.
    예를 들어, pi라는 메소드가 있고 이는 3.14라는를 리턴값이 있다.
    예로 let a = pi() 를 하게 되면 a에 3.14가 들어가게 해주는 것이다. 
    이렇게 하면 함수를 단순 명령 수행뿐 아니라 그 결과값을 마치 일종의 변수처럼 쓸 수 있게 되는 것이다.
    리턴값이 없으면 Void Method라고 한다.
*/

let a = pi()
let b = plus(1, a)
console.log(b) // b === 4.14

function pi () {
    return 3.14
}

function plus (a, b) {
    return a + b
}