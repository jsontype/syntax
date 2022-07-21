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
const addArr = [ ...arr, value ] // 배열 추가 ( = const addArr = arr.concat(value) 와 같다. concat을 push라고 이해하면 쉽다. )
const modArr = arr.map((item, index) => { return index === arr.length - 1 ? 999 : item }) // 배열 변경
const delArr = arr.filter((item, index) => { return index !== 1 }) // 배열 삭제

// 1. 리액트용 불변성 지키는 객체 추가 변경 삭제
const addObj = { ...obj, newKey: newValue } // 객체 추가
const modObj = { ...obj, oldKey: newValue } // 객체 변경
const { oldKey, ...delObj } = obj // 객체 삭제

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
