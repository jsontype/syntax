const a = [1, 2, 3, 4]
// a.push(5) // a를 직접적으로 변경했다. 리액트에서는 금지!

// React는 불변성의 법칙을 늘 지킨다.
// 불변성이란 데이터가 변할 때 기존 데이터를 (다른 주소로) 복사해서 새로운 데이터를 만들어내는 것을 의미한다.

// 얉은 복사
// const b = a // a와 b가 같은 메모리 주소를 가리키고 있다.
// b.push(5) // a와 b가 같은 메모리 주소를 가리키고 있기 때문에 a도 변한다.
// setA(b) // 이렇게 하는 것은 의미가 없다. 금지된다.

// 깊은 복사
// const b = [...a, 5] // a를 복사해서 새로운 배열을 만들었다.
// const b = [1, 2, 3, 4, 5]
// setA(b) // 이런 함수로 A의 메모리주소를 B의 주소로 변경한다.

// CRUD 배열이나 객체를 뜰 때
// 1. 배열의 복사 : 주소 참조
const arr1 = [1, 2, 3, 4, 5] // 원 주소
const arr2 = arr1 // 같은 주소를 집어넣음
const arr3 = JSON.parse(JSON.stringify(arr1)) // 값 복사해서 다른 주소로 복사
arr1[0] = 9999 // 원 주소 값 변경
console.log("arr2[0]: ", arr2[0]) // 9999 // 복사된 "같은" 주소이므로 여기도 값이 같이 변함
console.log("arr3[0]: ", arr3[0]) // 1 // 복사된 "다른" 주소이므로 원래 주소 값과는 상관 없음

// 1. 객체의 복사 : 주소 참조
const obj1 = { a: 1, b: 2 } // 원 주소
const obj2 = obj1 // 같은 주소를 집어넣음
const obj3 = JSON.parse(JSON.stringify(obj1)) // 값 복사해서 다른 주소로 복사
obj1.a = 9999 // 원 주소 값 변경
console.log("obj2.a: ", obj2.a) // 9999 // 복사된 "같은" 주소이므로 여기도 값이 같이 변함
console.log("obj3.a: ", obj3.a) // 1 // 복사된 "다른" 주소이므로 원래 주소 값과는 상관 없음









/*
 [배열객체 중급복사 - Spreading을 사용해 배열이나 객체에서 불변성을 지키면서 CRUD하는 법]
*/

// 1. 선언
const arr = [1, 2, 3, 4, 5]
const obj = { oldKey: 123 }

// 1. 기존 배열, 객체 추가 삭제 방법 : 주소 참조여서 바꾼 걸 감지 못하며, 이런 방식은 불변성의 법칙을 깨기 때문에, 리액트에서는 쓰지 않는다.
// arr.push(value) 추가
// arr.splice(index, number) 삭제
// obj.newKey = newValue 추가
// obj.remove(oldKey) 삭제
// obj.oldKey = newValue 변경

// 1. 리액트용 불변성 지키는 배열 추가 변경 삭제 : ★★ 불변성을 지키기 위해 각각 concat, map, filter를 사용한다.
const addArr = [...arr, 6] // 배열 추가 ( = const addArr = arr.concat(6) 와 같다. concat은 원래 배열과 배열을 합쳐주는 내장함수인데, 여기서는 concat을 push라고 이해하면 쉽다. )
const modArr = arr.map((item, index) => {
  return index === arr.length - 1 ? 999 : item
}) // 배열 변경
const delArr = arr.filter((item, index) => {
  return index !== 1
}) // 배열 삭제

// 1. 리액트에서 사용하면 이런 느낌 (배열)
// const [b, setB] = useState([1, 2, 3])
// setB([...b, 4]) // 추가 : b.push(4) X
// setB(
//   b.map((item, index) => {
//     return index === b.length - 1 ? 9999 : item
//   })
// ) // 수정 : 마지막 인덱스의 값을 9999로 변경
// setB(
//   b.filter((item, index) => {
//     return index !== b.length - 1
//   })
// ) // 삭제 : 마지막 인덱스 삭제

// 1. 리액트용 불변성 지키는 객체 추가 변경 삭제
const addObj = { ...obj, newKey: 456 } // 객체 추가
const modObj = { ...obj, oldKey: 456 } // 객체 변경
const { oldKey, ...delObj } = obj // 객체 삭제

// 1. 리액트에서 사용하면 이런 느낌 (객체)
// const [a, setA] = useState({ id: "asdf", pw: 1234 })
// setA({ ...a, email: "test@test.com" }) // 추가
// setA({ ...a, pw: 9999 }) // 수정
// const { pw, ...result } = a // 삭제1 : const { 삭제할 키, ...result } = 기존 객체 이름
// setA(result) // 삭제2 : result를 setA에 넣어준다.

/*
  [보충설명] - 리액트 배울 때 알아둘 것
    1. 리액트에서 객체, 배열을 변경할 때 "불변성의 법칙"을 지켜야하는 이유
      배열, 객체가 변경되어도, 주소 참조이기 때문에 변화감지가 불가능하다.
      ★ 리액트는... 배열, 객체의 변화를 감지해야한다.
        Life Cycle Method를 구현하기 때문에 배열, 객체 State의 변화를 감지해야한다.
        Performance을 할 때에도 배열, 객체 State의 변화를 감지해야한다. (변화 감지 후 바뀐 컴포넌트 부분만 캐치해서 재렌더링해서 최적화하기 때문)
      ★ 리액트는... 아래와 같은 방식으로, 배열, 객체의 변화감지를 할 수 있게 한다.
        새로운 객체주소를 만들고 → 거기다 기존의 객체의 값을 넣은 뒤 변경된 부분만 바꿔 넣고 → 기존 객체를 그 "주소"으로 갈아끼운다. → 기존의 주소는 삭제한다.
        리액트는 자동으로 주소를 변경하고, 이와 동시에 기존 주소를 바로 삭제하니까 메모리 문제는 없다.        
    1. 요약 : 리액트는 배열, 객체를 쓸 때, 변화를 감지하기 위해서, 불변성을 지키고 변경시 새 주소로 갈아끼우는 방식을 채용한다.
*/




