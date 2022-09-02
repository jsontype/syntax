// 클래스
// 클래스는 간단히 말해 "관련성 있는 메소드와 변수들의 집합"이다.
// 클래스는 첫글자를 대문자로 만든다는 룰이 있다.
// 그리고 그 클래스대로 찍혀져 나오는 것이 객체이다.
// 그리고 객체대로 만들어진 실제 데이터는 인스턴스이다.

// ★클래스, 객체, 인스턴스의 차이를 쉽게 설명하면 다음과 같다.
// car 라는 설계도가 있다. 그것은 car 클래스이다.
// car 클래스를 통해서 bmw를 만들었다. 그것은 bmw 객체이고 이는 모든 bmw 자동차를 대표하는 포괄적인 의미를 갖는다.
// bmw M4 컨버터블은 bmw 객체를 통해 만들어진 현실에서 구현되어져 나온 인스턴스이다.

// ★다른 예로 클래스는 붕어빵을 만드는 틀이고 객체는 붕어빵이라 생각하면 된다.
// 하나의 기계는 여러개의 붕어빵을 만들 수 있겠다. 이말을 기억해두자.




// 1. 일단은 객체만 먼저 다뤄보자.
// 물론, 클래스를 거치지 않고 바로 객체 안에서 다이렉트로 변수와 메소드를 각자 넣어서 수 있다.
// 객체는 키와 밸류가 필요하므로 키와 밸류값만 다음과 같이 잘 지정해주면 된다.
// 아래의 math 객체는 plus에서 a + b를 반환하고, minus에서는 a - b를 반환한다.
const math = {
    plus: function(a, b) {
        return a + b
    },
    minus: function(a, b) {
        return a - b
    },
    pi: 3.14
}

// math 객체를 꺼내보자..
console.log('math.pi:', math.pi)
console.log('math.plus(111, 222):', math.plus(111, 222))




// 2. 이번에는 본격적으로 클래스를 만들어보자. Car 클래스를 만들어보겠다.
// 클래스
class Car {
    // 생성자 : 클래스내 변수의 초기 선언용이며 초기값을 넣는다. 인자가 있을 경우에는 인자값을 토대로 값 배정을 할 수 있다.
    constructor (object) {
        this.name = object.name
        this.since = object.since
        this.model = object.model
    }
}
console.log('Car 클래스:', Car)

// 객체
const company = {
    name: 'bmw',
    since: 1916,
    model: ['3 Series', '5 Series', '7 Series', 'M Series']
}
const bmw = new Car(company)
console.log('bmw 객체:', bmw)

// 인스턴스
bmw.model.push('i Series')
let instance = bmw.model
console.log('bmw 객체의 인스턴스: ', instance)

// 하나의 기계는 여러개의 붕어빵을 만들 수 있겠다. 이말을 기억해두자라고 했었는데,
// 그럼 여기서는 자동차 회사를 하나 더 만들 수 있겠다.
// 과제: 그럼 같은 맥락으로 audi를 company2 객체로 해서 하나 더 만들어서 인스턴스까지 만들어 써보자.







// 3. Mathmatics 클래스를 만들어보겠다.
class Mathmatics {
    // 생성자 : 변수를 선언하고 변수의 초기값을 설정한다.
    constructor () {
        // Pi의 값
        this.pi = 3.14
        // a항의 값
        this.a = 0
        // b항의 값
        this.b = 0
    }
    // 메소드 생성
    plus(a, b) {
        return a + b
    }
    minus(a, b) {
        return a - b
    }
    exactPi() {
        // '지역내에서는 전역변수 pi를 this.pi로 꺼내야한다.
        this.pi = 3.141592653589793238462643383279502884197169399375105820974944
        return this.pi
    }
}
console.log('Mathmatics 클래스', Mathmatics)

// 객체
// 클래스 Mathmatics로부터 새로운 객체(붕어빵)를 만든다.
const m = new Mathmatics()
console.log('m 객체: ', object)


// 인스턴스
console.log('m 객체의 인스턴스들: ')
console.log('m.pi: ', m.pi)
console.log('m.plus: ', m.plus(2, 1))
console.log('m.minus: ', m.minus(2, 1))
console.log('m.exactPi: ', m.exactPi())

// 아직 이해가 안간다면, 그냥 클래스 = 객체라고 생각하고, 객체만이라도 쓰자.