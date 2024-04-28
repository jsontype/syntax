// Double NOT operator (!!): !!는 논리 부정 연산자를 두 번 사용한 것으로, 어떤 값이든 "boolean" 값으로 변환한다.
// 예를 들어, 값이 null, undefined, NaN, false, "", 0 등의 falsy 값이면 false를 반환하고, 그렇지 않으면 true를 반환한다. 즉, boolean(null)과 null!!은 같은 결과를 반환한다.

const doubleNotNull = !!null // false
const doubleNotUndefined = !!undefined // false
const doubleNotNaN = !!NaN // false
const doubleNotFalse = !!false // false
const doubleNotEmptyString = !!"" // false
const doubleNotZero = !!0 // false

// 아래와 같이 주소 참조는 true를 반환하니 주의하자. (주소 자체는 텅빈 집이라도 존재한다고 보기 때문)
const doubleNotEmptyArray = !![] // true
const doubleNotEmptyObject = !!{} // true

console.log(doubleNotNull) // false
