// 1. 함수에서 Generics 사용하는 이유
// 어떤 타입이 올지 모르는 함수를 만든다면 타입 정의를 할 때 any를 쓸 수도 있지만,
// 결과가 any라는 것은 안에 무엇이 있는지 알 수 없다는 것이기 때문에, 
// 타입 유추가 모두 깨진거나 다름이 없다.

// function plusOne(a: any) {
//   return a / 2
// }
// const result = plusOne("string") // 에러가 날 수 있다. 타입스크립트 쓰는 의미가 없다.

// 이런 상황에선, any 대신에 Generics를 사용하면 된다.
function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap("sdtgar")

const result = wrapped.param + 123123

// type alias에서 Generics 사용하기
type Items2<T> = { // 타입명 옆에 :any 대신 <T>을 쓰고,
  list: T[] // T 타입으로 된 배열을 내부에서 설정해준다.
}

const items2: Items2<string> = {// string 배열을 넣을 거라면 :any 대신 :type명<T>을 쓰고,
  list: ['a', 'b', 'c'] // string 타입으로 된 배열을 내부에서 설정해준다.
}

const items3: Items2<number> = {// number 배열을 넣을 거라면 :any 대신 :type명<T>을 쓰고,
  list: [1, 2, 3] // number 타입으로 된 배열을 내부에서 설정해준다.
}
