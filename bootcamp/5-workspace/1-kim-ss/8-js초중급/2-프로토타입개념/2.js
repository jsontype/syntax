/*
    [Prototype 함수]
    
    1. 프로토타입이란?
        번역하면 원형이라는 뜻이다. JS에서는 원형 객체를 말한다.
        JS에서는 사실, 기본 데이터 타입을 제외한 모든 것이 객체다. (console, document도 객체다!)
        객체가 만들어지기 위해서는 자신을 만드는 데 사용된 원형(프로토타입) 객체를 이용하여 객체를 만든다.
        이때 만들어진 객체 안에, [[Prototype]] 객체 안에, __proto__ 라는 원형을 참조하는 숨겨진 링크가 있다.
        이 숨겨진 링크를 프로토타입이라고 정의한다.
*/
const obj = {
    name: '강아지',
    sound: '멍멍',
    lifespan: 15
}
const arr = [obj, {name: '야옹이', sound: '야옹', lifespan: 18}]

console.log(obj)
console.log(arr)

// includes : arr 안에 파라미터 값이 있는지 확인하는 함수
console.log(arr.includes(obj))
