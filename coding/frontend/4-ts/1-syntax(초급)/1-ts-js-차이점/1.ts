// 1. Typescript 정의
// JavaScript는 weakly typed 언어이다.
// 변수에 문자열, 숫자, null, 배열 등등 뭘 넣어도 그냥 들어간다.
//   let value = 5
//   value = '안녕하세요'
//   value = [1,2,3,4,5]
//   value = null
// 게다가, 암묵적캐스팅을 통해 다른 타입을 넣어도 계산이 된다.
//   let value = 5
//   value = value + '5'
//   console.log(value) // 10
// 그러나 이는 시스템을 위협할 수도 있는 위험한 타입 에러를 걸러내지 못하므로, 데이터의 무결성 측면에서 좋지 않다.
// Typescript에서는 사전에 변수에 타입을 지정해주어, 아무 타입이나 들어갈 수 있게 하지 않는 라이브러리다.

// 1. Typescript를 쓰지 않았을 때의 벌어지는 일들의 예시
// JavaScript만 쓰고 작업을 하면, 타입의 덮어씌우기가 가능해져버린다.
// 이 때문에, 타 개발자들이 자꾸 기존 변수에 타입 덮어씌우기를 해서 작업을 해버릴 수가 있다.
// 과거 다른 개발자들이 Typescript를 쓰지 않고 개발을 마무리 한 뒤,
// 이를 유지보수해야하는 프로젝트가 있었다.
// 코드를 받은 시점부터 버그때문에 돌아가지 않았고, 어디서부터 잘못 되었는지 버그를 찾기 위해서
// Typescript를 적용을 한 적이 있었다.
// 이때 수백개의 타입 에러가 나와서, 엄청 많은 작업을 한 적이 있었다.
// 이런 일들 때문에, 처음부터 Typescript를 적용해서 작업을 하는 것이다.

// 1. Typescript 장점(1) : 실수방지
// 변수에 지정되지 않은 잘못된 타입을 넣었을 때 에러를 표시해주어, 실수에 의한 (또는 다른 초보 개발자에 의한?) 에러 방지가 가능하다.
// 함수, 컴포넌트 등의 타입 추론이 되다보니, 만약에 우리가 사소한 오타를 만들면 코드를 실행하지 않더라도 IDE 상에서 바로 알 수 있게 된다.
// 그리고, 예를 들어 null이나 undefined일 수도 있는 값의 내부 값 혹은 함수를 호출한다면(예: 배열의 내장함수) 사전에 null 체킹을 하지 않으면 오류를 띄우므로 null 체킹도 확실하게 할 수 있게 된다.

// 1. Typescript 장점(2) : IDE 활용성 증가
// IDE상에서 컴포넌트별 변수나 함수들의 자동완성을 편하게 해준다. (컴포넌트마다 타입을 객체로 설정해서)
// IDE상에서 변수나 함수들에 들어갈 state, props, param, return 값에 알맞은 타입을 확인하며 작업할 수 있게 된다. (변수마다 타입을 설정해서)
// 함수를 사용 할 때 해당 함수가 어떤 params를 필요로 하는지, 그리고 어떤 값을 return하는지 코드를 따로 열어보지 않아도 알 수 있다.
// 추가적으로, 리액트 컴포넌트의 경우 해당 컴포넌트를 사용하게 될 때 props에는 무엇을 전달해줘야하는지, JSX를 작성하는 과정에서 바로 알 수 있다.
// 컴포넌트 내부에서도 자신의 props에 어떤 값이 있으며, state에 어떤 값이 있는지 알 수 있다.
// 리덕스와 함께 사용하게 될 때에도 스토어 안에 어떤 상태가 들어있는지 바로 조회가 가능해서 굉장히 편리하다.

// JS는 weakly typed language다.
let jsVar = 1
jsVar = 2 // 에러가 발생하지 않는다.
console.log(jsVar)
// 기존의 JS의 경우는, 복잡한 코드에서 버그가 발생했을 때, 버그를 쉽게 찾을 수가 없었다.

// TS는 strongly typed language다.
let tsVar: string = "string"
// tsVar = 2; // 에러가 발생한다.
console.log(tsVar)
// 이렇게, TS는 변수의 타입을 지정해주어야 하고, 그 타입이 다른 경우 에러를 발생시킨다. 이로써 버그를 줄이고 코드의 안정성을 높일 수 있다.

// TypeScript의 Object 타입을 정의하는 방법
type userType = {
  name: string
  age: number
  email: string
  address?: string
  registeredAt?: Date
}

const user11: userType = {
  name: "saitou",
  age: 20,
  email: "111@1.com",
}

const user22: userType = {
  name: "yang",
  age: 30,
  email: "asdf@1324.com",
}

// TypeScript의 Array 타입을 정의하는 방법
const users: userType[] = [user11, user22]
const strings: string[] = ["a", "b", "c"]
const nums: number[] = [1, 2, 3]
const booleans: boolean[] = [true, false, true]
const msgs: string[] = ["hello", "world"]
// msgs.push(1234); // 에러가 발생한다.

const doneVar: boolean = true
const numbersVar: number[] = [1, 2, 3]
const messagesVar: string[] = ["hello", "world"]
const mightBeUndefinedVar: string | undefined = undefined
const nullableNumberVar: number | null = null

// Union Type
let color1: "red" | "orange" | "yellow" = "orange"
type colorType = "red" | "orange" | "yellow"
let color2: colorType = "orange"
// color1 = "blue";
// color2 = "blue";
