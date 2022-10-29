"use strict";
// 1. 함수에서 Generics 사용하기
// 어떤 타입이 올지 모르는 함수를 만든다면 타입 정의를 할 때 any를 쓸 수도 있지만,
// 결과가 any라는 것은 안에 무엇이 있는지 알 수 없다는 것이기 때문에, 타입 유추가 모두 깨진거나 다름이 없다.
// 이런 상황에선, any 대신에 Generics를 사용하면 된다.
// 함수에서 any를 사용 : 타입 유추가 모두 깨지며 타입 지원을 받을 수 없다.
function wrap1(param) {
    return {
        param
    };
}
// 함수에서 Generics인 <T>를 사용 : 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있다.
function wrap2(param) {
    return {
        param
    };
}
const wrapped = wrap2(10); // wrap1처럼 아무 파라미터나 넣을 수 있다.
const items1 = {
    list: ['a', 'b', 'c'] // string 타입으로 된 배열을 내부에서 설정해준다.
};
const items2 = {
    list: ['a', 'b', 'c'] // string 타입으로 된 배열을 내부에서 설정해준다.
};
const items3 = {
    list: [1, 2, 3] // number 타입으로 된 배열을 내부에서 설정해준다.
};
