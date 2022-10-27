// 1. 함수에서 Generics 사용하기
// 어떤 타입이 올지 모르는 함수를 만든다면 타입 정의를 할 때 any를 쓸 수도 있지만,
// 결과가 any라는 것은 안에 무엇이 있는지 알 수 없다는 것이기 때문에, 타입 유추가 모두 깨진거나 다름이 없다.
// 이런 상황에선, any 대신에 Generics를 사용하면 된다.
function wrap1(param: any):any {
    return {
        param
    }
}

// 함수에서 Generics인 <T>를 사용 : 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있다.
function wrap2<T>(param: T) { // 파라미터 () 뒤에 :any 쓰는 대신, 함수명 뒤에 <T>를 설정하고, T 타입으로 된 파라미터타입을 내부에서 설정해준다.
    return {
        param
    }
}
const wrapped1 = wrap1('hello') // wrap1처럼 아무 파라미터나 넣을 수 있다.
const wrapped2 = wrap2('hello') // wrap1처럼 아무 파라미터나 넣을 수 있다.
