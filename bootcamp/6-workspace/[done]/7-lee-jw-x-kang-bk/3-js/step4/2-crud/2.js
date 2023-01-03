/*
 [배열이나 객체에서 CRUD하는 법]
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
const addArr = [ ...arr, value ] // 배열 추가 // const addArr2 = arr.concat(value) // 배열 추가 2. concat을 push라고 이해하면 쉽다.
const modArr = arr.map((item, index) => { return index === arr.length - 1 ? 999 : item }) // 배열 변경
const delArr = arr.filter((item, index) => { return index !== 1 }) // 배열 삭제

// 1. 리액트용 불변성 지키는 객체 추가 변경 삭제
const addObj = { ...obj, newKey: newValue } // 객체 추가
const modObj = { ...obj, oldKey: newValue } // 객체 변경
const { oldKey, ...delObj } = obj // 객체 삭제
