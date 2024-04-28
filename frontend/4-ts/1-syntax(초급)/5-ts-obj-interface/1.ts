// 1. TypeScript Interface 사용해보기
// interface는 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법이다.
// 클래스에서 interface를 implements해보자.

interface Person1 {
  name: string
  age?: number
}
// extends를 쓰면, Person1 interface를 상속받는 Developer1 interface라는 뜻이다.
interface Developer1 extends Person1 {
  skills: string[]
}

const person1: Person1 = {
  name: "김사람",
  age: 20,
}
const expert1: Developer1 = {
  name: "김개발",
  skills: ["javascript", "react"],
}
