// interface Person {
//     name: string
//     age?: number // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미한다.
// }
// interface Developer {
//     name: string
//     age?: number
//     skills: string[]
// }

// ↑ 위를 보면 Person 과 Developer 가 형태가 유사하다. 저럴 때는 interface를 선언 할 때 다른 interface를 extends 키워드를 사용해서 상속받을 수 있다.

interface Person {
    name: string
    age?: number // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미한다.
}

interface Developer extends Person {
    skills: string[]
}

const person: Person = {
    name: '김사람',
    age: 20
}

const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
}
