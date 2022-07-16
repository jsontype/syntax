// 콘솔로그 : js 작업을 할 때 파레트 역할
console.log('안녕!')

/*
    변수 : 변하는 수

    변수의 선언
    var : 옛날 방식으로 호이스팅(메모리할당)시 값 할당전임에도 undefined로 선언이 되어버려 차후 중복선언 등 심각한 문제가 생길 수 있으므로 쓰지 않음
    let : 값 변경가능 변수
    const : 상수 변수
*/
let a = 1
a = 2
console.log(a) // 2가 됨

/*
    변수의 데이터타입 총정리
    Number : 실수(정수, 소수를 포함)
    String : 문자열('hello')
    Null : 변수안에 값이 없음 // "휴지에 심지만 있다"
    Undefined : 변수에 값을 지정한 적이 없음 // "휴지에 심지도 없다"
    Boolean : 논리(true/false)
    Object : 객체 { 'key1':value1, 'key2':value2, ... } // 파이썬에서 Dict와 같음
    Array : 배열 [1, 2, 3, ...] // 파이썬에서 List와 같음
    Set : 집합 Set {1, 2, 3} // 중복제거 집합
*/

// Number : 연산 가능
a = 1
console.log(a + a)
console.log(a / 3)

// String
let b = '1'
console.log(b + a)

// Null
let null1 = null
console.log(null1)

// Boolean(true, false) : 조건문에 사용
let num1 = 1
let num2 = 2
let boo1 = (num1 < num2)
let boo2 = (num1 === num2)
console.log('boo1:', boo1)
console.log('boo2:', boo2)



// Array(배열) : 인덱스와 밸류. 순서가 있어 반복문에 사용
let c = [1, 2, 3, 4, 5]
console.log('c:', c)
console.log('c[0]:', c[0])
console.log('c[1]:', c[1])
console.log('c.length', c.length) // 배열의 길이 출력
console.log('c[c.length - 1]:', c[c.length - 1]) // 끝에서 1번째 출력
// Array의 추가
c.push(6)
console.log('c:', c)
// Array의 삭제
c.pop() // 마지막꺼 삭제
c.splice(2, 2) // splice(a, b) : a번째 인덱스부터, b 개수만큼 삭제
console.log('c:', c)

// Array -> Set으로 전환
let arr2 = [30, 30, 28, 28, 29, 29, 27, 27, 32, 32, 31, 31, 31]
console.log('arr2 before:', arr2)



// Set(세트) : Set를 이용해 중복제거를 할 수 있음
// Array -> Set로 전환
const set1 = new Set(arr2) // arr2의 값으로 새로운 Set를 만든다.
// Set -> Array로 전환
arr2 = Array.from(set1)
console.log('arr2 after:', arr2)
// Set의 추가
set1.add(33)
console.log('set1:', set1)



// Object(객체) : 키와 밸류
let obj1 = {
    key1: 'value1',
    key2: 'value2'
}
console.log('obj1.key1:', obj1.key1)
console.log('obj1.key2:', obj1.key2)
// Object의 추가
obj1.key3 = 'value3'
console.log('obj1.key3:', obj1.key3)
// Object의 삭제
delete obj1.key3
console.log('obj1.key3:', obj1.key3) // undefined : 키 자체를 찾을 수가 없다.
console.log('obj1:', obj1)
/*
    콘솔로그의 정체
    콘솔은 사실, 객체입니다.
    콘솔로그는 console 객체 안의 key중 log라는 키를 사용하는 것입니다.
    이렇게, 객체 안에서 담아서 키를 처리하는 방식은 타 언어에서도 종종 사용됩니다.
    이런 객체를 다른 말로는 클래스라고도 합니다. (class = object)
    파이썬, 자바, 자바스크립트 등등 클래스 기반의 언어들은 그래서, "객체지향언어"라고 부릅니다.
    */
console.log(console)
console.error("이렇게 쓰면 Error 메시지를 띄웁니다.")



/*
    JSON 타입
    예 : 고객정보 [{고객1}, {고객2}, {고객3}, ...] -> 고객1 { id : '', pw: '', name: '' }
*/
let client1 = { id: 'user1', pw: '1', name: '김' }
let client2 = { id: 'user2', pw: '2', name: '이' }
let client3 = { id: 'user3', pw: '3', name: '박' }
let client4 = { id: 'user4', pw: '4', name: '최' }
let clientArray = [client1, client2, client3, client4]
console.log(clientArray[2].name)



/* 
    주소참조, 값참조
    let : 값 참조의 경우에는 let이며, 상수일 때만 const
    const : 주소 참조의 경우에는 항상 const. 배열, 객체, 함수의 경우
    현장에서는 변수설정을 const로 가능한 경우에는 모두 const로 해준다.
*/
const obj = {}
obj.id = 'dev'
console.log('obj:', obj)
const array = []
array.push(1)
console.log('array:', array)



/*
    Array와 Object의 차이 3가지
    1. Array는 인덱스로 값을 꺼내고, Object는 키로 값을 꺼낸다.
    1. Array는 순서가 있고, Object는 순서가 없다.
    1. Array는 For문과 함께 쓸 수 있고, Object는 쓸 수 없다.
*/
