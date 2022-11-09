// spreading 문법: 배열이나 객체 등 deep copy
const arr = [1, 2, 3, 4, 5, 6, 7]
const obj = {oldKey: 123}

// 불변성의 법칙 깬 형태
// arr.push(8) // 끝에 추가해라
// arr.unshift(5) // 앞에 추가해라
// arr[2] = 333 // 2번째 인덱스값을 변경해라
// arr.splice(0, 3) // 0번째 인덱스로부터 3개, 즉 0, 1, 2 인덱스의 값을 빼라

// 리액트는 불변성의 법칙을 지켜야 쓸 수 있다. 이유는 직접 push로 값을 바꾸면 본체 arr가 직접 바뀌어버린다.
// 그렇게하면 그 바꾼 것에 대해서 useEffect에서 update lifecycle을 감지못하기 때문이다.
// 왜냐면 useEffect에서 update lifecycle는 "구 배열" 메모리주소를 "신 배열" 메모리주소로 갈아끼우는 과정에서 읽혀지기 때문.
// 같은 이유로 모든 훅스들.. use함수들도 다 이 흐름이기 때문이다.

// 그래서 setState 함수를 사용해서 바뀌는 것을 감지하는 형태(= 불변성의 법칙을 지키는 형태)로 써야한다.
// console.log(arr)

// spreading 문법으로 새로운 배열을 복제하는 방법
// const arr2 = [...arr]

// 불변성의 법칙을 지키면서 arr 바꾸는 방법
// const pushArr = [...arr, 8] // push
// const unshiftArr = [8, ...arr] // unshift
// const spliceArr = arr.filter((item, index) => { return index !== 0 }) // 0번째 인덱스 값을 삭제하면서 복사
// const modArr = arr.map((item, index) => { return index === 2 ? 9 : item }) // [2, 3, 8] // 2번째 인덱스의 값 8을 9로 변경

const addObj = { ...obj, newKey: 456 } // 추가
const modObj = { ...obj, oldKey: 456 } // 수정
const { oldKey, ...delObj } = obj // 삭제
