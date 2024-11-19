/*
    [Prototype 함수]
    
    1. 프로토타입이란?
        번역하면 원형이라는 뜻이다. JS에서는 원형 객체를 말한다.
        JS에서는 사실, 기본 데이터 타입을 제외한 모든 것이 객체다. (console, document도 객체다!)
        객체가 만들어지기 위해서는 자신을 만드는 데 사용된 원형(프로토타입) 객체를 이용하여 객체를 만든다.
        이때 만들어진 객체 안에, [[Prototype]] 객체 안에, __proto__ 라는 원형을 참조하는 숨겨진 링크가 있다.
        이 숨겨진 링크를 프로토타입이라고 정의한다.
        22.html을 브라우저에서 켜서 아래를 실행하고 콘솔로그를 보면 각 객체의 프로토타입을 볼 수 있다.
*/
const obj = {
  name: "강아지",
  sound: "멍멍",
  lifespan: 15,
}
const arr = [obj, { name: "야옹이", sound: "야옹", lifespan: 18 }]

// 객체, 배열 타입들은 각각 다른 종류의 프로토타입 함수를 갖고 있다. 콘솔로그에서 해당 타입들의 [[Prototype]]을 클릭해보자.
console.log("obj: ", obj)
console.log("arr: ", arr)

// // 객체에서 프로토타입 함수 사용하기 예
// // obj.entries : [[키, 값], [키, 값]] 형태의 배열로 변환할 수 있다.
// console.log(Object.entries(obj))
// // obj.keys : [키, 키, 키] 형태의 배열로 변환할 수 있다.
// console.log(Object.keys(obj))
// // obj.values: [값, 값, 값] 형태의 배열로 변환할 수 있다.
// console.log(Object.values(obj))

// 배열에서 프로토타입 함수 사용하기 예
// arr.includes : 배열내에 파라미터와 동일한 값의 유무를 확인할 수 있다.
console.log("arr.includes(obj): ", arr.includes(obj))
// arr.map : 제일 많이 쓰이는 배열고차함수들도 이 안에 담겨져있다. (배열고차함수를 모른다면 skip. 곧 배울 것임)
console.log(
  "arr.map((item) => {item.id = index}): ",
  arr.map((item) => {
    return item.name
  })
)
