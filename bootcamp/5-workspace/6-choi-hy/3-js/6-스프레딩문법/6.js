// spreading 문법으로 deep copy가 가능하다.
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr1.push(4);
// console.log(arr2);

const obj1 = { id: "yang", pw: 1234 };
const obj2 = { ...obj1 };
obj1.pw = 9999;
// console.log(obj2);

// 배열은 spreading 문법으로 "불변성의 법칙"을 지키면서 crud가 가능하다.
const arr = [1, 2, 3];

// 배열 추가
const addArr = [...arr, 4]; // OK : 값을 추가하면서 새로운 메모리 주소를 할당 (push 대신)

// 배열 수정
const modArr = arr.map((item, index) => {
  return index === 1 ? 9 : item;
});

// 배열 삭제
const delArr = arr.filter((item, index) => {
  return index !== 1;
});

// 객체도 spreading 문법으로 "불변성의 법칙"을 지키면서 crud가 가능하다.
const obj = { id: "yang", email: "test@test.com" };

// 객체 추가
const addObj = { ...obj, pw: 1234 }; // OK

// 객체 수정
const modObj = { ...obj, email: "test2@test.com" };

// 객체 삭제
const { email, ...delObj } = obj;

/*
  [보충설명] - 리액트 배울 때 알아둘 것
    1. 리액트에서 객체, 배열을 변경할 때 "불변성의 법칙"을 지켜야하는 이유
      배열, 객체가 변경되어도, 주소 참조이기 때문에 변화감지가 불가능하다.
      ★ 리액트는... 배열, 객체의 변화를 감지해야한다.
        Life Cycle Method를 구현하기 때문에 배열, 객체 State의 변화를 감지해야한다.
        Performance을 할 때에도 배열, 객체 State의 변화를 감지해야한다.
        (변화 감지 후 바뀐 컴포넌트 부분만 캐치해서 재렌더링해서 최적화하기 때문)
      ★ 리액트는... 아래와 같은 방식으로, 배열, 객체의 변화감지를 할 수 있게 한다.
        새로운 객체주소를 만들고 → 거기다 기존의 객체의 값을 넣은 뒤 변경된 부분만 바꿔 넣고 
        → 기존 객체를 그 "주소"으로 갈아끼운다. → 기존의 주소는 삭제한다.
        리액트는 자동으로 주소를 변경하고, 이와 동시에 기존 주소를 바로 삭제하니까 메모리 문제는 없다.        
    1. 요약 : 리액트는 배열, 객체를 쓸 때, 변화를 감지하기 위해서, 불변성을 지키고 변경시 새 주소로 갈아끼우는 방식을 채용한다.
*/
