/* Type Alias 지정 */

// Person 객체 Type 지정 : 새 타입은 이렇게 지정한다.
type Person = {
    name: string
    age?: number // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미한다.
}

// Developer 객체 Type 지정 : &을 이용해, 기존 타입(Person)을 extends 받아서, 새로운 타입(Developer)을 지정할 수도 있다.
type Developer = Person & { // &는 Intersection으로, 두개 이상의 타입들을 합쳐준다.
    skills: string[]
}

// People 배열 Type 지정 : Person[]을 People이라는 타입으로 사용 할 수 있다.
type People = Person[]

// Color 문자열 Type 지정 : 아래와 같이 데이터유효성을 설정할 수도 있다.
type Color = 'red' | 'orange' | 'yellow'



/* Type 사용 */

// Person Type 사용
const person: Person = {
    name: '김사람'
}

// Developer Type 사용
const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
}

// Person Type 사용
const people: People = [person, expert]

// Color Type 사용1
const color2: Color = 'red'

// Color Type 사용2 : 타입을 Color[]로 지정하면, Color 타입들로 이뤄진 배열을 타입으로 지정한다.
const colors: Color[] = ['red', 'orange']
