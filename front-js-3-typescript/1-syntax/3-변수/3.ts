/*
  [타입스크립트 기본 타입]

  타입스크립트의 기본 타입 12가지 : Any, String, Number, Boolean, Array, Tuple, Object, Enum / Void, Null, Undefined, Never
  사전준비 : node.js LTS버전, vscode 확장중 eslint, tslint, live server 설치(이후, "ctrl(cmd) + shift + p"로 live server를 검색해서 실행)
 */

// 변수 타입 표기(Type Annotation) : ":"를 이용하여 자바스크립트 코드에 타입을 정의하는 방식
let any1: any = 1 + '1' // 타입을 지정하지 않음. 기존에 자바스크립트로 구현되어 있는 웹 서비스 코드에 타입스크립트를 점진적으로 적용할 때 활용하면 좋은 타입
let str1: string = 'hi' // 문자열
let num1: number = 10 // 숫자
let bool1: boolean = false // 불린
let arr1: Array<number> = [1, 2, 3] // 숫자 배열: 제너릭 선언
let arr2: Array<string> = ['yang', 'kang', 'hwang'] // 문자열 배열: 제너릭 선언
let arr3: number[] = [1, 2, 3] // 숫자 배열: 제네릭 배열보다 간단한 표현식
let arr4: string[] = ['yang', 'kang', 'hwang'] // 숫자 배열: 제네릭 배열보다 간단한 표현식
let tuple1: [string, number] = ['hi', 10] // 튜플: 배열을 인덱스별 타입 지정하고 선언
let obj1: object = {id: 'yang123', no: 154} // 객체를 키별 타입 지정하지 않고 선언
let obj2: {id: string, no: number} = {id: 'yang', no: 154} // 객체를 키별 타입 지정하고 선언
let json1: {id: string, no: number}[] = [{id: 'yang', no: 154}, {id: 'kang', no: 155}] // JSON타입

// Null 타입 표기 : 휴지를 값이라 치환했을 때, null은 빈 휴지심만 있는 것. undefiend는 휴지심도 없는 것으로 생각하면 쉽다.
let void1: void = undefined // Void : 변수에는 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입
function neverEnd(): never { while (true) {} } // Never : 함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입
