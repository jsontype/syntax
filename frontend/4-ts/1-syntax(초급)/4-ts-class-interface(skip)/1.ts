// 1. TypeScript Interface 사용해보기
// interface는 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법이다.
// 클래스에서 interface를 implements해보자.

// 1. Shape interface 선언 : interface는 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법
interface Shape {
  getArea(): number // Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자이다.
}

// 1. Circle class 선언 : `implements` 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시한다.
class Circle implements Shape {
  radius: number // 멤버 변수 radius 값을 설정한다.
  constructor(radius: number) {
    this.radius = radius
  }
  // 너비를 가져오는 함수를 구현한다.
  getArea() {
    return this.radius * this.radius * Math.PI
  }
}

// 1. Rectangle class 선언 : `implements` 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시한다.
class Rectangle implements Shape {
  width: number
  height: number
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}

// 1. shapes 변수 선언 후 getArea 써보기
const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)]
shapes.forEach((shape) => {
  console.log(shape.getArea())
})
