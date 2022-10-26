// 1. 함수에서 Generics 사용하기
// 어떤 타입이 올지 모르는 함수를 만든다면 타입 정의를 할 때 any를 쓸 수도 있지만,
// 결과가 any라는 것은 안에 무엇이 있는지 알 수 없다는 것이기 때문에, 타입 유추가 모두 깨진거나 다름이 없다.
// 이런 상황에선, any 대신에 Generics를 사용하면 된다.

// 함수에서 any를 사용 : 타입 유추가 모두 깨지며 타입 지원을 받을 수 없다.
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
const wrapped = wrap2(10) // wrap1처럼 아무 파라미터나 넣을 수 있다.



// 1. interface에서 Generics 사용하기
interface Items1<T> { // 인터페이스명 옆에 :any 대신 <T>을 쓰고,
    list: T[] // T 타입으로 된 배열을 내부에서 설정해준다.
}

const items1: Items1<string> = { // string 배열을 넣을 거라면 :string 대신 :type명<string>을 쓰고,
    list: ['a', 'b', 'c'] // string 타입으로 된 배열을 내부에서 설정해준다.
}



// 1. ★ type에서 Generics 사용하기
type Items2<T> = { // 타입명 옆에 :any 대신 <T>을 쓰고,
  list: T[] // T 타입으로 된 배열을 내부에서 설정해준다.
}

const items2: Items2<string> = {// string 배열을 넣을 거라면 :any 대신 :type명<T>을 쓰고,
  list: ['a', 'b', 'c'] // string 타입으로 된 배열을 내부에서 설정해준다.
}

const items3: Items2<number> = {// number 배열을 넣을 거라면 :any 대신 :type명<T>을 쓰고,
  list: [1, 2, 3] // number 타입으로 된 배열을 내부에서 설정해준다.
}
