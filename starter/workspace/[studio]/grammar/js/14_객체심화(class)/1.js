// 클래스 : 관련이 있는 일련의 변수, 메소드들을 정의해놓은 것

// math object
// let math = {
//     pi: 3.14,
//     plus: function(a, b) {
//         return a+b
//     },
//     minus: function(a, b){
//         return a-b
//     }
// }

// console.log('math.pi:', math.pi)
// console.log('math.plus(1, 2):', math.plus(1, 2))
// console.log('math.minus(2, 1):', math.minus(2, 1))

// 진짜 class Math
class Math {
    // 생성자 : 변수를 초기화하면서 선언
    constructor() {
        this.a = 0
        this.b = 0
    }
    pi = 3.14
    plus(a, b) {
        return a+b;
    }
    minus(a, b) {
        return a-b;
    }
}

// Class를 math라는 객체 변수에 담아서 사용 : Class는 붕어빵 만드는 틀, 객체는 붕어빵
let math = new Math()
console.log(math.pi)
console.log(math.plus(1, 2))
console.log(math.minus(1, 2))
