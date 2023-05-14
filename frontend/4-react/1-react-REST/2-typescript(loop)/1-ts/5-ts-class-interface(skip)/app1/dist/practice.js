"use strict";
// 1. Circle class 선언 : `implements` 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시한다.
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현한다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
// 1. Rectangle class 선언 : `implements` 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시한다.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
// 1. shapes 변수 선언
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
