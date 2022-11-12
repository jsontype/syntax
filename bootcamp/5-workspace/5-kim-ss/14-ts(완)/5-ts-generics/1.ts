// Any 타입 X
function wrap1(param: any):any {
    return {
        param
    }
}
const wrapped1 = wrap1(1) // wrapped1을 다른 곳에서 썼을 때 타입 지원을 받을 수 없다.



// Generics 타입 O
function wrap2<T>(param: T) { // 파라미터 () 뒤에 :any 쓰는 대신, 함수명 뒤에 <T>를 설정하고, T 타입으로 된 파라미터타입을 내부에서 설정해준다.
    return {
        param
    }
}
const wrapped2 = wrap2(10) // wrap1처럼 아무 파라미터나 넣을 수 있으면서, wrapped2을 다른 곳에서 썼을 때 타입 지원을 받을 수 없다.



type Items<T> = { // 타입명 옆에 :any 대신 <T>을 쓰고,
    list: T[] // T 타입으로 된 배열을 내부에서 설정해준다.
}


const items1: Items<string> = {// string 배열을 넣을 거라면 :any 대신 :type명<T>을 쓰고,
    list: ['a', 'b', 'c'] // string 타입으로 된 배열을 내부에서 설정해준다.
}

const items2: Items<number> = {// number 배열을 넣을 거라면 :any 대신 :type명<T>을 쓰고,
    list: [1, 2, 3] // number 타입으로 된 배열을 내부에서 설정해준다.
}
