/*
    [Prototype 함수]
    
    1. 프로토타입이란?
        번역하면 원형이라는 뜻이다. JS에서는 원형 객체를 말한다.
        JS에서는 사실, 기본 데이터 타입을 제외한 모든 것이 객체다. (console, document도 객체다!)
        객체가 만들어지기 위해서는 자신을 만드는 데 사용된 원형(프로토타입) 객체를 이용하여 객체를 만든다.
        이때 만들어진 객체 안에, __proto__ 라는 원형을 참조하는 숨겨진 링크가 있다.
        이 숨겨진 링크를 프로토타입이라고 정의한다.
        22.html을 브라우저에서 켜서 아래를 실행하고 콘솔로그를 보면 각 객체의 프로토타입을 볼 수 있다.
*/
const obj = {
    no: 153,
    id: "azumaapp",
    name: "yang"
}
const arr = [obj]

// 객체는 프로토타입 함수를 함께 갖고 있다.
console.log('userObj: ', obj)
console.log('userArr: ', arr)

// 프로토타입 함수는 다음과 같이 꺼내서 사용한다.
// 프로토타입 함수들 중 자주 쓰는 것을 가능한 한 알아두는 것이 좋다. 제일 많이 쓰이는 배열고차함수들도 이 안에 담겨져있다.
console.log('arr.includes(obj): ', arr.includes(obj))
