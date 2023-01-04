// /*
//     [인터페이스]

//     인터페이스를 쓰면 객체 내의 데이터타입을 보다 쉽게 정의할 수 있다.
// */

// // 타입 예시 : 인터페이스와 차이점을 비교해보자.
// type UserType = {
//     no: number
//     id: string
//     flag: boolean
// }
// // 타입은 아래와 같이, 기존 타입을 별칭으로 사용 가능
// type str = string
// let greeting: str = 'hello'
// // 타입과 인터페이스의 가장 큰 차이점 : 타입은 확장이 불가능하다. 이 코드 마지막 줄을 보면, 인터페이스는 확장이 된다.
// // 타입은 새로운 타입을 생성하는 것이 아니라, 정의한 타입에 대해 이름(이를 타입 별칭, Type Aliases라 함)을 부여하는 것과 같다.
// // 따라서 type보다는, interface로 선언해서 사용하는 것을 추천한다.



// // 인터페이스 예시
// interface User {
//     no: number
//     id: string
//     flag: boolean
// }

// // JSON타입 변수에 인터페이스 사용
// let users: User[] = [
//     {no: 1, id: 'yang', flag: false},
//     {no: 2, id: 'kang', flag: false},
//     {no: 3, id: 'park', flag: true}
// ]

// // 함수에 인터페이스 사용
// function print(item: User) {
//     console.log(item)
// }
// print(users[0])



// // 배열에 인터페이스 사용 : 인덱싱 방식을 정의하기
// interface StringArray {
//     [index: number]: string
// }
// let alphabet: StringArray = ['a', 'b', 'c']
// alphabet[2] = '1' // 숫자를 넣으면 에러 



// // 딕셔너리 패턴을 정의하기 : 예를 들면 파일확장자의 정규표현식(Regular Expression) 등
// interface StringRegexDictionary {
//     [key: string]: RegExp;
// }
// let obj: StringRegexDictionary = {
//     cssFile: /\.css$/,
//     jsFile: /\.js$/,
// }
// // obj['cssFile'] = 'a'



// // 인터페이스 확장 : Person을 상속받아서 추가해서 사용할 수 있다.
// interface Person {
//     name: string
//     age: number
// }

// interface Developer extends Person{
//     // name: string
//     // age: number
//     language: string
// }

// let capt: Developer = {
//     language: 'ts',
//     name: 'ha',
//     age: 27
// }



// // 함수 구조에 인터페이스를 활용
// interface SumFunction {
//     (a: number, b: number): number
// }
// let plus1: SumFunction = function(a: number, b: number): number {
//     return a + b
// }
