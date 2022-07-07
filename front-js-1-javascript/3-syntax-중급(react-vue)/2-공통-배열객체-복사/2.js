/*
    [Array나 Object를 복사하는 방법]
*/

// 일반 변수
let a = 1 // 변수명 a, b는 위에서 한번 선언했으므로 다시 let은 안 쓴다.
let b = a
a = 2
console.log('b는 1이어야하는데? OK:', b) // 1
// Object 변수
const obj = { a: 1, b: 2 } 
const c = obj
obj.a = 2
console.log('c.a 1이어야하는데? NG:', c.a) // 2
// Array 변수
const arr = [1, 2] 
const d = arr
arr[0] = 2
console.log('d[0] 1이어야하는데? NG:', d[0]) // 2

/*
    원인
    Array, Object는 "주소"를 참조한다.
    선언이나 변경을 할 때에는 값이 아닌, 주소를 대입.
    결국 같은 주소를 보게 된다.

    해결
    일반변수처럼 값만 복사하려면 
    주소를 복사해서 새로운 주소로 만들어주는 처리가 필요하다.
*/

// 해결책1. Object.assign(빈객체, 복사할 객체) 함수를 사용
// 첫번째는 빈객체, 두번째는 복사하고 싶은 객체를 넣으면 빈객체 안에 새 객체가 복사되어 들어간다. 
// 객체와 참조주소(reference)가 달라진다.
console.log('Object.assign({}, obj):', Object.assign({}, obj))
console.log('Object.assign([], arr):', Object.assign([], arr))

// 해결책2 : spread syntax를 사용
// 객체의 껍데기를 벗겨내고 알맹이만 빼서 새 객체를 만들어준다.
// 객체와 참조주소(reference)가 달라진다.
console.log('{ ...obj }:', { ...obj })
console.log('[ ...arr ]:', [ ...arr ])

// 해결책3. JSON 함수를 사용
// JSON.stringify : 문자화를 해서 카피를 한다. 그러나 이 결과는 객체가 아니다. 그냥 "{ a: 1, b: 2 }"라는 문자열이 된 것.
// JSON.parse : 파싱(컴퓨터가 이해할 수 있는 형태로 번역)해서 객체로 바꿔준다.
// 둘을 순서대로 사용하면 객체와 참조주소(reference)가 달라진다.
// * 객체 안에 객체가 있는 경우에는 「JSON 함수」를 사용한 방법으로만 해결이 가능하다.
// * 예를 들어, let a = { a: { a: {}, b: {} }, b: { a: {}, b: {} } }
console.log('JSON.stringify(obj):', JSON.stringify(obj))
console.log('JSON.parse(JSON.stringify(obj)):', JSON.parse(JSON.stringify(obj)))
console.log('JSON.stringify(arr):', JSON.stringify(arr))
console.log('JSON.parse(JSON.stringify(arr)):', JSON.parse(JSON.stringify(arr)))
